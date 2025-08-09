package com.nexora.email.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${spring.mail.username}")
    private String fromEmail;
    
    public void sendSimpleEmail(String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        
        mailSender.send(message);
    }
    
    public void sendHtmlEmail(String to, String subject, String htmlContent) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        
        helper.setFrom(fromEmail);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(htmlContent, true);
        
        mailSender.send(message);
    }
    
    public void sendPasswordResetEmail(String to, String resetToken) {
        String subject = "Password Reset Request - Nexora";
        String text = String.format(
            "Hello,\n\n" +
            "You have requested a password reset for your Nexora account.\n\n" +
            "Please use the following token to reset your password: %s\n\n" +
            "This token will expire in 15 minutes.\n\n" +
            "If you did not request this password reset, please ignore this email.\n\n" +
            "Best regards,\n" +
            "The Nexora Team", 
            resetToken
        );
        
        sendSimpleEmail(to, subject, text);
    }
    
    public void sendWelcomeEmail(String to, String name) {
        String subject = "Welcome to Nexora!";
        String text = String.format(
            "Hello %s,\n\n" +
            "Welcome to Nexora! Your account has been successfully created.\n\n" +
            "You can now log in to your account and start using our services.\n\n" +
            "If you have any questions, please don't hesitate to contact our support team.\n\n" +
            "Best regards,\n" +
            "The Nexora Team",
            name
        );
        
        sendSimpleEmail(to, subject, text);
    }
}
