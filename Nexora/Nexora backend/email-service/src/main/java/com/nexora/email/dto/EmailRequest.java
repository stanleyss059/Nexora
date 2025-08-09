package com.nexora.email.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmailRequest {
    
    @NotBlank(message = "Recipient email is required")
    @Email(message = "Invalid email format")
    private String to;
    
    @NotBlank(message = "Subject is required")
    private String subject;
    
    @NotBlank(message = "Email content is required")
    private String text;
    
    // Constructors
    public EmailRequest() {}
    
    public EmailRequest(String to, String subject, String text) {
        this.to = to;
        this.subject = subject;
        this.text = text;
    }
    
    // Getters and Setters
    public String getTo() {
        return to;
    }
    
    public void setTo(String to) {
        this.to = to;
    }
    
    public String getSubject() {
        return subject;
    }
    
    public void setSubject(String subject) {
        this.subject = subject;
    }
    
    public String getText() {
        return text;
    }
    
    public void setText(String text) {
        this.text = text;
    }
}
