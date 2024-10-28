Write-Output "=> Starting build process..."
Write-Output "------------------- Building assets... -------------------"
tsup src/assets/index.tsx --format "esm,cjs" --dts --out-dir dist/assets
Write-Output "------------------- Assets have been built successfully! -------------------"

Write-Output "------------------- Building components... -------------------"
tsup src/components/index.tsx --format "esm,cjs" --dts --out-dir dist/components
Write-Output "------------------- Components have been built successfully! -------------------"

Write-Output "------------------- Building helpers... -------------------"
tsup src/helpers/index.ts --format "esm,cjs" --dts --out-dir dist/helpers
Write-Output "------------------- Helpers have been built successfully! -------------------"

Write-Output "------------------- Building hooks... -------------------"
tsup src/hooks/index.ts --format "esm,cjs" --dts --out-dir dist/hooks
Write-Output "------------------- Hooks have been built successfully! -------------------"

Write-Output "------------------- Building types... -------------------"
tsup src/types/index.ts --format "esm,cjs" --dts --out-dir dist/types
Write-Output "------------------- Types have been built successfully! -------------------"

Write-Output "=> Build process successfully completed!"
