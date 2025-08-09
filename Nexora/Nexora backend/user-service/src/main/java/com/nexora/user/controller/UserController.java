package com.nexora.user.controller;

import com.nexora.user.model.User;
import com.nexora.user.repo.UserRepository;
import com.nexora.user.util.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repo;
    private final JwtUtil jwtUtil;

    public UserController(UserRepository repo, JwtUtil jwtUtil){
        this.repo = repo; this.jwtUtil = jwtUtil;
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(@RequestHeader("Authorization") String auth){
        try {
            String token = auth.replace("Bearer ", "");
            String email = jwtUtil.getSubject(token);
            var user = repo.findByEmail(email).orElseThrow();
            return ResponseEntity.ok(user);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token or user not found");
        }
    }
}
