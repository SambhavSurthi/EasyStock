package com.IMS.EasyStock.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheck {

    @GetMapping("/health")
    public String healthCheck()
    {
        return "Everything is working fine and awesome..!!😉🔥✨";
    }
}
