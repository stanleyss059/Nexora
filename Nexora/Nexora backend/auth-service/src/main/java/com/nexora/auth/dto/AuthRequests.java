package com.nexora.auth.dto;

public class AuthRequests {
    public static class SignupRequest {
        public String email;
        public String name;
        public String password;
    }
    public static class SigninRequest {
        public String email;
        public String password;
    }
}
