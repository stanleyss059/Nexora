package com.nexora.auth.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    @Value("${jwt.secret}") private String secret;
    @Value("${jwt.expirationMs}") private long expirationMs;

    public String generateToken(String subject){
        Algorithm alg = Algorithm.HMAC256(secret);
        return JWT.create()
                .withSubject(subject)
                .withExpiresAt(new Date(System.currentTimeMillis() + expirationMs))
                .sign(alg);
    }

    public String getSubject(String token){
        Algorithm alg = Algorithm.HMAC256(secret);
        DecodedJWT d = JWT.require(alg).build().verify(token);
        return d.getSubject();
    }
}
