# nextjs-starter-tests

A starter project with Next.js, TypeScript, Tailwind CSS, and a complete testing setup using Jest and React Testing Library.

## Version Conflict

Currently, the project must use **React 18** because `@testing-library/react` does not yet support React 19.

### Required Versions

- **react**: `^18.3.1`
- **react-dom**: `^18.3.1`

### Reason

The latest version of `@testing-library/react` has a peer dependency on React `^18.0.0`.  
Using React 19.x will cause dependency resolution failures during installation and in CI/CD builds (e.g., Vercel).

### Resolution

1. Update `package.json` to enforce the correct versions:
   ```json
   {
     "dependencies": {
       "react": "^18.3.1",
       "react-dom": "^18.3.1"
     }
   }
   ```

## Optional (integrate with ESLint)

eslint-plugin-prettier
eslint-config-prettier
