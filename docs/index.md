# teste-repo-06

Welcome to the documentation for **teste-repo-06**.

## Overview

| Property | Value |
|----------|-------|
| **Tech Stack** | NODEJS |
| **Branching** | trunk |
| **Repository** | [PEQSPC-ORG/teste-repo-06](https://github.com/PEQSPC-ORG/teste-repo-06) |

## Getting Started

```bash
npm install
npm run dev
```

## CI/CD

This project uses GitHub Actions for continuous integration and delivery.
See [`.github/workflows/ci-cd.yaml`](https://github.com/PEQSPC-ORG/teste-repo-06/blob/main/.github/workflows/ci-cd.yaml).

## Health Check

The service exposes a health endpoint at `/health`.
```json
GET /health
{
  "status": "ok",
  "service": "teste-repo-06"
}
```
