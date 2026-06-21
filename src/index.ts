import http from "node:http";
import express, { type Request, type Response } from "express";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());

// ── Health check (used by Docker HEALTHCHECK and k8s probes) ──────────────────
app.get("/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    service: "teste-repo-06",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ── Root route ────────────────────────────────────────────────────────────────
app.get("/", (_req: Request, res: Response) => {
  res.json({
    service: "teste-repo-06",
    message: "Express TypeScript API scaffolded by Flight Deck",
    version: "0.1.0",
    links: {
      health: "/health",
    },
  });
});

// ── Start server ──────────────────────────────────────────────────────────────
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`[teste-repo-06] Server listening on http://0.0.0.0:${PORT}`);
  console.log(`[teste-repo-06] Health check: http://0.0.0.0:${PORT}/health`);
});

// ── Graceful shutdown ─────────────────────────────────────────────────────────
const shutdown = (signal: string): void => {
  console.log(`[teste-repo-06] ${signal} received — shutting down gracefully`);
  server.close(() => process.exit(0));
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

export default app;