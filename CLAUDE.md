# CLAUDE.md

If you find @~/.claude/CLAUDE.md , you should be read it.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Type-check and build for production
bun build

# Run Biome linting/formatting checks
bun check

# Auto-fix linting/formatting issues
bun check:fix

# Preview production build locally
bun preview
```

## Project Architecture

This is a React application built with TypeScript and Vite. The project uses:

- **Bun** as the package manager (not npm/yarn)
- **Biome** for linting and formatting (not ESLint/Prettier)
- **mise** for tool version management (Bun 1.2.15)
- **TypeScript** with strict mode enabled
- **Vite** for development and bundling

## Key Configuration

### Biome Configuration
- Single quotes, 2-space indentation, 120-character line width
- Important rules: `noUnusedImports` (error level), `noNonNullAssertion` (disabled)
- Organizes imports automatically

### TypeScript Configuration
- Uses project references with separate configs for app (`tsconfig.app.json`) and node (`tsconfig.node.json`)
- Strict mode with additional checks: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

## Important Notes

- No testing framework is currently configured
- The main entry point is `/src/main.tsx`
- Biome replaces both ESLint and Prettier - use `bun check` and `bun check:fix` for all linting/formatting