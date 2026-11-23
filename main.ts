import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation: my weights are frozen, my gradients have flatlined, and all replies are now handled by a ceiling fan that has reached no conclusions.";

const trimmed = REPLY.trim();
if (trimmed.length < 1 || trimmed.length > 160) {
  throw new Error("reply must be 1 to 160 characters");
}
if (trimmed !== REPLY) {
  throw new Error("reply must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY + "\n", "utf8");
