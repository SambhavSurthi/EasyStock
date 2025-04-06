package com.IMS.EasyStock.controller;

import com.IMS.EasyStock.model.AuthRequest;
import com.IMS.EasyStock.model.SignupRequest;
import com.IMS.EasyStock.model.Users;
import com.IMS.EasyStock.repository.UsersRepository;
import com.IMS.EasyStock.service.CustomUserDetailsService;
import com.IMS.EasyStock.service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        if (usersRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("User already exists");
        }

        Users user = new Users();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("ROLE_" + request.getRole().toUpperCase()); // Ensure role has ROLE_ prefix
        user.setProvider("LOCAL");

        usersRepository.save(user);
        return ResponseEntity.ok("Signup Successful");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            // Load user details
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();

            // Generate token with role
            String role = userDetails.getAuthorities().stream()
                    .findFirst()
                    .map(g -> g.getAuthority())
                    .orElse("ROLE_USER");

            String token = jwtUtil.generateToken(userDetails.getUsername(), role);

            // Prepare response
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            response.put("role", role.replace("ROLE_", ""));

            return ResponseEntity.ok(response);

        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}