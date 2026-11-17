#!/bin/bash
# Script de compilación de CV en PDF

# Matar procesos colgados
pkill -f pdflatex 2>/dev/null
pkill -f tectonic 2>/dev/null

# Limpiar archivos temporales
rm -f *.aux *.log *.out *.fdb_latexmk *.fls

# Verificar compilador disponible
COMPILER=""
if command -v pdflatex &> /dev/null; then
    COMPILER="pdflatex -interaction=nonstopmode"
elif [ -f "../../.bin/tectonic" ]; then
    COMPILER="../../.bin/tectonic"
elif [ -f "$HOME/.local/bin/tectonic" ]; then
    COMPILER="$HOME/.local/bin/tectonic"
elif command -v tectonic &> /dev/null; then
    COMPILER="tectonic"
fi

if [ -z "$COMPILER" ]; then
    echo "❌ Error: No se encontró pdflatex ni tectonic."
    exit 1
fi

echo "Using compiler: $COMPILER"
$COMPILER cv_camilo.tex
if [[ "$COMPILER" == *"pdflatex"* ]]; then
    $COMPILER cv_camilo.tex
fi

# Copiar automáticamente al nombre descriptivo para envíos
cp cv_camilo.pdf cv_camilo_sabogal.pdf

echo "---------------------------------------"
echo "✅ PDF generado: cv_camilo.pdf"
echo "✅ Copia lista para enviar: cv_camilo_sabogal.pdf"
echo "---------------------------------------"
