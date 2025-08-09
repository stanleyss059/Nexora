package com.nexora.auth.controller;

import com.nexora.auth.dto.AuthRequests;
import com.nexora.auth.model.User;
import com.nexora.auth.repo.UserRepository;
import com.nexora.auth.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepo, PasswordEncoder passwordEncoder, JwtUtil jwtUtil){
        this.userRepo = userRepo; this.passwordEncoder = passwordEncoder; this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody AuthRequests.SignupRequest req){
        if(userRepo.findByEmail(req.email).isPresent()) return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error","Email already exists"));
        User u = new User();
        u.setEmail(req.email);
        u.setName(req.name);
        u.setPasswordHash(passwordEncoder.encode(req.password));
        userRepo.save(u);
        String token = jwtUtil.generateToken(u.getEmail());
        return ResponseEntity.ok(Map.of("token", token));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody AuthRequests.SigninRequest req){
        var userOpt = userRepo.findByEmail(req.email);
        if(userOpt.isEmpty() || !passwordEncoder.matches(req.password, userOpt.get().getPasswordHash()))
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error","Invalid credentials"));
        String token = jwtUtil.generateToken(req.email);
        return ResponseEntity.ok(Map.of("token", token));
    }
}
