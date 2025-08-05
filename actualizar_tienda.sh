#!/bin/bash
# 🚀 Script para actualizar la tienda virtual en GitHub y Vercel automáticamente

echo "📂 Agregando cambios..."
git add .

# Preguntar mensaje de commit
echo "📝 Escribe un mensaje para este commit:"
read mensaje

git commit -m "$mensaje"

echo "⬆️ Subiendo cambios a GitHub..."
git push origin main

echo "✅ Actualización completada."
echo "🔄 Vercel actualizará tu tienda automáticamente."
