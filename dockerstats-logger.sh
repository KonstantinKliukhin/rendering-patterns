#!/bin/bash

INTERVAL=5                 # seconds between samples
OUTPUT=stats.csv           # output CSV file

# CSV Header
echo "Time,Container,CPU (%),Mem Used,Mem Usage" > $OUTPUT

while true; do
  docker stats --no-stream --format "{{.Name}},{{.CPUPerc}},{{.MemUsage}}" \
  | while IFS=, read name cpu mem; do
      mem_used=$(echo "$mem" | awk '{print $1}')  # strip units
      echo "$(date +%T),$name,$cpu,$mem_used,$mem" >> $OUTPUT
  done
  sleep $INTERVAL
done

