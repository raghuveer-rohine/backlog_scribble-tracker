#!/bin/bash

# Create assets directory
mkdir -p assets

# Create a simple PNG icon (you can replace this with your custom icon)
# This creates a 512x512 PNG with a notebook emoji
cat > assets/icon-512.png << 'EOF'
data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiByeD0iMTAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8dGV4dCB4PSIyNTYiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkFwcGxlIENvbG9yIEVtb2ppIiBmb250LXNpemU9IjI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+8J+TjTwvdGV4dD4KPHN2Zz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWVhO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6Izc2NGJhMjtzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=
EOF

# If you have ImageMagick or sips (macOS built-in), you can create an ICNS file
# For now, we'll create a simple approach - you can use online converters or specialized tools

echo "Icon created at assets/icon-512.png"
echo "To create a proper .icns file, use:"
echo "1. Online converter like cloudconvert.com"
echo "2. Or install iconutil and create an iconset"
echo "3. For now, the app will work without the icon"
