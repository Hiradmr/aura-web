#!/bin/zsh
cd "/Users/hiramerve/Documents/Codex/2026-06-27/aura-esteti-k-ve-g-zelli-4" || exit 1

NODE="/Users/hiramerve/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
NEXT_BIN="node_modules/next/dist/bin/next"
PORT="${PORT:-3000}"

if [ ! -x "$NODE" ]; then
  echo "Node.js bulunamadı. Lütfen önce Node.js kurun: https://nodejs.org"
  read -k 1 "?Kapatmak için bir tuşa basın..."
  exit 1
fi

if [ ! -f "$NEXT_BIN" ]; then
  echo "Next.js paketleri bulunamadı."
  echo "Lütfen bu klasörde npm install veya pnpm install çalıştırın."
  read -k 1 "?Kapatmak için bir tuşa basın..."
  exit 1
fi

while lsof -nP -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  echo "Port $PORT dolu görünüyor, bir sonraki port deneniyor..."
  PORT=$((PORT + 1))
done

(sleep 5 && open "http://localhost:$PORT") &
echo "Aura Estetik web sitesi başlatılıyor..."
echo "Açılacak link: http://localhost:$PORT"
echo "Bu pencere açık kaldığı sürece site çalışır."
echo ""
"$NODE" "$NEXT_BIN" dev -H localhost -p "$PORT"

echo ""
echo "Site başlatılamadı. Yukarıdaki hata mesajının ekran görüntüsünü bana gönderin."
read -k 1 "?Kapatmak için bir tuşa basın..."
