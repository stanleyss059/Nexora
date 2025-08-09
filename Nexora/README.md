# Nexora

A modern full-stack application with React Native frontend and Spring Boot microservices backend.

## Project Structure

```
Nexora/
├── Nexora-backend-src/          # Backend microservices
│   ├── discovery-service/       # Eureka service discovery
│   ├── api-gateway/            # Spring Cloud Gateway
│   ├── auth-service/            # Authentication service
│   ├── user-service/            # User management service
│   ├── email-service/           # Email service
│   ├── docker-compose.yml      # Docker configuration
│   └── environment.example     # Environment variables example
└── Nexora-main/                 # React Native frontend
    ├── Screens/                 # App screens
    ├── services/                # API services
    ├── assets/                  # Images and assets
    └── package.json            # Node.js dependencies
```

## Backend Services

### Prerequisites
- Java 21
- Maven 3.8+
- Docker & Docker Compose
- PostgreSQL (via Docker)

### Services Overview

1. **Discovery Service (Port 8761)**
   - Eureka Server for service registration and discovery
   - Service health monitoring
   - Load balancing support

2. **API Gateway (Port 8080)**
   - Single entry point for all client requests
   - Request routing to appropriate microservices
   - CORS configuration
   - Load balancing and circuit breaker patterns

3. **Auth Service (Port 8081)**
   - User authentication and JWT token management
   - Signup and signin endpoints
   - Password encryption using BCrypt

4. **User Service (Port 8082)**
   - User profile management
   - User data operations

5. **Email Service (Port 8083)**
   - Email sending functionality
   - Welcome emails and password reset emails
   - SMTP integration

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Nexora
   ```

2. **Set up environment variables**
   ```bash
   cd Nexora-backend-src
   cp environment.example .env
   # Edit .env with your actual values
   ```

3. **Start the services with Docker**
   ```bash
   cd Nexora-backend-src
   docker-compose up -d
   ```

4. **Build and run individual services (alternative)**
   ```bash
   # Auth Service
   cd auth-service
   mvn clean install
   mvn spring-boot:run

   # User Service
   cd ../user-service
   mvn clean install
   mvn spring-boot:run

   # Email Service
   cd ../email-service
   mvn clean install
   mvn spring-boot:run
   ```

### API Endpoints

#### API Gateway (http://localhost:8080) - **Main Entry Point**
All client requests should go through the API Gateway:

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - User login
- `GET /api/users/**` - User operations
- `POST /api/email/send` - Send simple email
- `POST /api/email/send-html` - Send HTML email

#### Discovery Service (http://localhost:8761)
- `GET /eureka` - Eureka dashboard
- `GET /actuator/health` - Health check

#### Direct Service Access (for development/debugging)
- Auth Service: http://localhost:8081
- User Service: http://localhost:8082
- Email Service: http://localhost:8083

## Frontend (React Native)

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Getting Started

1. **Install dependencies**
   ```bash
   cd Nexora-main
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on specific platform**
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   npm run web      # For web
   ```

### Features
- User authentication (signup/signin)
- Password recovery
- Beautiful UI with gradient backgrounds
- Form validation
- Loading states
- Error handling

## Database

The application uses PostgreSQL as the primary database. Database migrations are handled by Flyway.

### Database Schema
- **users** table with fields: id, email, password_hash, name, enabled, created_at, updated_at

## Configuration

### Backend Configuration
- **Database**: PostgreSQL connection settings
- **JWT**: Secret key and expiration time
- **Email**: SMTP server configuration

### Frontend Configuration
- **API Base URL**: Configured in `services/AuthService.js`
- **Environment**: Development vs Production settings

## Development

### Backend Development
- Follow Spring Boot best practices
- Use proper exception handling
- Implement proper validation
- Write unit tests

### Frontend Development
- Follow React Native best practices
- Use proper state management
- Implement proper error handling
- Test on multiple devices

## Deployment

### Backend Deployment
```bash
# Using Docker
docker-compose up -d

# Using Maven
mvn clean package
java -jar target/*.jar
```

### Frontend Deployment
```bash
# Build for production
expo build:android
expo build:ios
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
