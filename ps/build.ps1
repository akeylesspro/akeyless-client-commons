echo "=> Starting build process..."
echo "------------------- Building assets... -------------------"
tsup src/assets/index.ts --format "esm,cjs" --dts --out-dir dist/assets
echo "------------------- Assets have been built successfully! -------------------"

echo "------------------- Building components... -------------------"
tsup src/components/index.ts --format "esm,cjs" --dts --out-dir dist/components
echo "------------------- Components have been built successfully! -------------------"

echo "------------------- Building helpers... -------------------"
tsup src/helpers/index.ts --format "esm,cjs" --dts --out-dir dist/helpers
echo "------------------- Helpers have been built successfully! -------------------"

echo "------------------- Building hooks... -------------------"
tsup src/hooks/index.ts --format "esm,cjs" --dts --out-dir dist/hooks
echo "------------------- Hooks have been built successfully! -------------------"

echo "------------------- Building types... -------------------"
tsup src/types/index.ts --format "esm,cjs" --dts --out-dir dist/types
echo "------------------- Types have been built successfully! -------------------"

echo "=> Build process successfully completed!"
