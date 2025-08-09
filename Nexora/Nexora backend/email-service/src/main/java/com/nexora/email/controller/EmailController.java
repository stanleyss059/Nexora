package com.nexora.email.controller;

import com.nexora.email.dto.EmailRequest;
import com.nexora.email.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailController {
    
    @Autowired
    private EmailService emailService;
    
    @PostMapping("/send")
    public ResponseEntity<?> sendEmail(@Valid @RequestBody EmailRequest request) {
        try {
            emailService.sendSimpleEmail(request.getTo(), request.getSubject(), request.getText());
            return ResponseEntity.ok(Map.of("status", "Email sent successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Failed to send email: " + e.getMessage()));
        }
    }
    
    @PostMapping("/send-html")
    public ResponseEntity<?> sendHtmlEmail(@Valid @RequestBody EmailRequest request) {
        try {
            emailService.sendHtmlEmail(request.getTo(), request.getSubject(), request.getText());
            return ResponseEntity.ok(Map.of("status", "HTML Email sent successfully"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                .body(Map.of("error", "Failed to send HTML email: " + e.getMessage()));
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity<?> healthCheck() {
        return ResponseEntity.ok(Map.of("status", "Email service is running"));
    }
}
