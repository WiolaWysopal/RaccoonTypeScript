require("esbuild").buildSync({
    entryPoints: ["index.ts"],
    bundle: true,
    outfile: "bundle.js",
    platform: "browser"
  });
  