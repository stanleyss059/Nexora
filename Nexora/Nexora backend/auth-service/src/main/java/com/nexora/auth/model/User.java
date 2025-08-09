package com.nexora.auth.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(name = "password_hash", nullable = false)
    private String passwordHash;
    private String name;
    private boolean enabled = true;

    // getters/setters
    public Long getId(){return id;}
    public void setId(Long id){this.id = id;}
    public String getEmail(){return email;}
    public void setEmail(String email){this.email = email;}
    public String getPasswordHash(){return passwordHash;}
    public void setPasswordHash(String passwordHash){this.passwordHash = passwordHash;}
    public String getName(){return name;}
    public void setName(String name){this.name = name;}
    public boolean isEnabled(){return enabled;}
    public void setEnabled(boolean enabled){this.enabled = enabled;}
}
