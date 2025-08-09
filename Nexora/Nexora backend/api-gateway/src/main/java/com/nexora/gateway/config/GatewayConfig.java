package com.nexora.gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            // Auth Service Routes
            .route("auth-service-route", r -> r
                .path("/api/auth/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway-Name", "Nexora-Gateway")
                )
                .uri("lb://auth-service")
            )
            
            // User Service Routes
            .route("user-service-route", r -> r
                .path("/api/users/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway-Name", "Nexora-Gateway")
                )
                .uri("lb://user-service")
            )
            
            // Email Service Routes
            .route("email-service-route", r -> r
                .path("/api/email/**")
                .filters(f -> f
                    .stripPrefix(1)
                    .addRequestHeader("X-Gateway-Name", "Nexora-Gateway")
                )
                .uri("lb://email-service")
            )
            
            // Discovery Service Routes
            .route("discovery-service-route", r -> r
                .path("/eureka/**")
                .uri("lb://discovery-service")
            )
            
            .build();
    }
}
