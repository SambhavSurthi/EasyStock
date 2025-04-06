package com.IMS.EasyStock.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupRequest {

    private String name;
    @Id
    private String email;
    private String password;
    private String role;

}
