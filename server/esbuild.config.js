import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/app.ts"],
    bundle: true,
    outfile: "dist/app.js",
    platform: "node",
    sourcemap: true,
    target: ["node14"],
    format: "cjs",
  })
  .catch(() => process.exit(1));
