package com.nexora.user.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
    @Value("${jwt.secret}") private String secret;
    public String getSubject(String token) {
        Algorithm alg = Algorithm.HMAC256(secret);
        DecodedJWT d = JWT.require(alg).build().verify(token);
        return d.getSubject();
    }
}
