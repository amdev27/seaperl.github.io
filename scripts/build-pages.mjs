import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
if (basePath && !/^\/[a-zA-Z0-9._-]+$/.test(basePath)) throw new Error("Invalid Pages base path");
const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build", "--webpack"], {
  stdio: "inherit",
  env: {...process.env, PAGES_BUILD: "1", NEXT_TELEMETRY_DISABLED: "1"},
});
if (result.status !== 0) process.exit(result.status || 1);
writeFileSync("out/.nojekyll", "");
await import("./verify-pages.mjs");
