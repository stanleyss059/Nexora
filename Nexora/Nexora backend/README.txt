Nexora Backend (source) - PostgreSQL edition
- Projects:
  - auth-service (port 8081)
  - user-service (port 8082)
  - email-service (port 8083)
- Database changed to PostgreSQL. Use the top-level docker-compose.yml which starts PostgreSQL + services.
- Use Java 21 and Maven to build. To build locally: cd into each service and run `mvn package` (Maven must be installed).
- auth-service includes Flyway (dependency) and has migration SQL under `auth-service/src/main/resources/db/migration/V1__create_users_table.sql`.
- Update JWT_SECRET and DB credentials via environment variables before running in production.
- Note: I did not run `mvn package` here because the execution environment has no internet access for downloading Maven dependencies. If you want, you can run builds locally or I can attempt building here (may fail without network).
