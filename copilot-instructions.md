# Copilot Instructions

## Code Style and Formatting

- Use consistent indentation (2 spaces for JavaScript/TypeScript, 4 spaces for Python)
- Follow ESLint/Prettier configurations if present
- Use meaningful variable and function names
- Prefer const over let, avoid var in JavaScript
- Use arrow functions for callbacks and short functions
- Always use semicolons in JavaScript/TypeScript

## Documentation

- Add JSDoc comments for all public functions and classes
- Include parameter types and return types in documentation
- Use clear, concise comments for complex logic
- Update README.md when adding new features or changing setup

## Error Handling

- Always handle errors explicitly, never ignore them
- Use try-catch blocks for async operations
- Provide meaningful error messages
- Log errors appropriately (console.error, logging framework)
- Validate input parameters

## Testing

- Write unit tests for new functions and components
- Follow existing test patterns and naming conventions
- Aim for high test coverage on critical paths
- Include edge cases and error scenarios in tests
- Use descriptive test names that explain the scenario

## Security

- Never commit secrets, API keys, or sensitive data
- Sanitize user inputs
- Use environment variables for configuration
- Validate and escape data before database operations
- Follow principle of least privilege

## Performance

- Avoid unnecessary re-renders in React components
- Use efficient data structures and algorithms
- Implement proper caching where appropriate
- Optimize database queries
- Consider memory usage for large datasets

## Git and Commits

- Make atomic commits (one logical change per commit)
- Use conventional commit format: type(scope): description
- Keep commit messages under 50 characters
- Use imperative mood (Add, Fix, Update, Remove)
- Types: feat, fix, docs, style, refactor, test, chore, ci, perf, build

## Architecture

- Follow separation of concerns principle
- Keep functions small and focused (single responsibility)
- Use dependency injection where appropriate
- Prefer composition over inheritance
- Follow existing project structure and patterns

## SOLID Principles

### Single Responsibility Principle (SRP)
- Each class/function should have only one reason to change
- Separate concerns into different modules/classes
- Avoid god objects or functions that do too many things

### Open/Closed Principle (OCP)
- Classes should be open for extension, closed for modification
- Use interfaces, abstract classes, and composition
- Prefer strategy pattern over if/else chains for varying behavior

### Liskov Substitution Principle (LSP)
- Subtypes must be substitutable for their base types
- Derived classes should not strengthen preconditions or weaken postconditions
- Maintain behavioral contracts when implementing interfaces

### Interface Segregation Principle (ISP)
- Clients should not depend on interfaces they don't use
- Create small, focused interfaces rather than large ones
- Split large interfaces into smaller, more specific ones

### Dependency Inversion Principle (DIP)
- High-level modules should not depend on low-level modules
- Both should depend on abstractions (interfaces)
- Use dependency injection and inversion of control containers

## Dependencies

- Minimize external dependencies
- Use well-maintained, popular packages
- Keep dependencies up to date
- Document why specific dependencies are chosen
- Avoid dependencies with security vulnerabilities

## API Design

- Use RESTful conventions for HTTP APIs
- Implement proper HTTP status codes
- Use consistent naming conventions for endpoints
- Include proper request/response validation
- Implement rate limiting and authentication

## Environment

- Support multiple environments (development, staging, production)
- Use environment-specific configurations
- Never hardcode environment-specific values
- Provide clear setup instructions for new developers
- Use Docker for consistent development environments

## Code Review

- Keep pull requests small and focused
- Write clear PR descriptions explaining changes
- Respond to review comments promptly
- Run tests locally before submitting PRs
- Update documentation as needed

## Accessibility

- Follow WCAG guidelines for web applications
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation works
- Test with screen readers when possible

## Internationalization

- Use internationalization libraries for user-facing text
- Avoid hardcoded strings in UI components
- Consider right-to-left language support
- Use proper date/time formatting for locales
- Test with different languages and character sets