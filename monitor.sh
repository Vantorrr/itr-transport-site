#!/bin/bash

echo "🔍 Мониторинг производительности ИТР сайта"
echo "========================================="

while true; do
  echo "⏰ $(date '+%H:%M:%S')"
  
  # Next.js процесс
  echo "📦 Next.js процесс:"
  ps aux | grep "next-server" | grep -v grep | awk '{printf "  CPU: %s%%, RAM: %s%%, PID: %s\n", $3, $4, $2}'
  
  # Общая нагрузка
  echo "💻 Система:"
  top -l 1 -n 0 | head -5 | tail -2 | awk '{print "  " $0}'
  
  echo "---"
  sleep 2
done 