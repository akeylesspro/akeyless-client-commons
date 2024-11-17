import { defineConfig, Format } from "tsup";
import { dependencies } from "./package.json";

const externalDeps = [...Object.keys(dependencies || {})];

const baseConfig = {
    format: ["esm", "cjs"] as Format[], 
    dts: true,
    sourcemap: true,
    external: externalDeps,
};

export default defineConfig([
    {
        ...baseConfig,
        entry: ["src/assets/index.tsx"],
        outDir: "dist/assets",
        clean: true,
        onSuccess: "echo '------------------- Assets have been built successfully! -------------------'",
    },
    {
        ...baseConfig,
        entry: ["src/components/index.tsx"],
        outDir: "dist/components",
        clean: false,
        onSuccess: "echo '------------------- Components have been built successfully! -------------------'",
    },
    {
        ...baseConfig,
        entry: ["src/helpers/index.ts"],
        outDir: "dist/helpers",
        clean: false,
        onSuccess: "echo '------------------- Helpers have been built successfully! -------------------'",
    },
    {
        ...baseConfig,
        entry: ["src/hooks/index.ts"],
        outDir: "dist/hooks",
        clean: false,
        onSuccess: "echo '------------------- Hooks have been built successfully! -------------------'",
    },
    {
        ...baseConfig,
        entry: ["src/types/index.ts"],
        outDir: "dist/types",
        clean: false,
        onSuccess: "echo '------------------- Types have been built successfully! -------------------'",
    },
]);
