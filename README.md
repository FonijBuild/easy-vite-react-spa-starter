<div align="center">

# Easy Vite React SPA Starter

**A production-capable Vite + React foundation for fast, API-driven single-page applications.**

[![Use this template](https://img.shields.io/badge/use%20this%20template-2EA44F?logo=github&logoColor=white)](https://github.com/FonijBuild/easy-vite-react-spa-starter/generate)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
![Status: Foundation](https://img.shields.io/badge/status-foundation-F59E0B)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)

[Documentation](https://github.com/FonijBuild/fonij-docs) · [Discussions](https://github.com/orgs/FonijBuild/discussions) · [Issues](https://github.com/FonijBuild/easy-vite-react-spa-starter/issues)

</div>

> “What do we build for, if not to lessen each other’s hardship?”

> [!IMPORTANT]
> This repository is currently in the **foundation stage**. Do not treat it as production-ready until the first stable release.

## Best for

- Dashboards and internal tools
- Authenticated client-side products
- Frontends backed by Django or another external API
- Embedded and operational web applications

**Not for:** SEO-heavy public sites or applications that require significant server-rendered web behavior.

## Baseline

- Vite, React, TypeScript, and typed routing
- Feature-oriented application structure
- API, query, form, environment, and error boundaries
- Theme, i18n, testing, and CI foundations
- AI-agent rules, specs, and architecture documentation

## Quick start

Preferred:

```bash
fonij create my-product
```

Direct template use:

```bash
gh repo create my-product --template FonijBuild/easy-vite-react-spa-starter --private --clone
cd my-product
cp .env.example .env
pnpm install
pnpm dev
```

## Project contract

- `.fonij/starter.json` describes this foundation to Fonij.
- `AGENTS.md` defines repository rules for AI coding agents.
- `specs/` contains implementation-ready feature specifications.
- `docs/` contains architecture and repository-specific guidance.
- Keep quality checks green before merging changes.

## Contributing

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before contributing. Security issues must follow [`SECURITY.md`](SECURITY.md).
