#!/bin/bash


echo "==========SYSTEM HEALTH REPORT=========="
echo $(date)


echo "===CPU Usage==="
top -bn1|grep "Cpu(s)"|awk '{print "Cpu used:" 100 - $8"%"}'



echo "===Memory usage==="
free -h | awk '/^Mem/ {print "Total: "$2 "  Used: "$3 "  Free: "$4}'


echo "---Disk Usage---"
df -h / | awk 'NR==2 {print "Total: "$2 "  Used: "$3 "  Free: "$4 "  Use%: "$5}'

echo ""
echo "===== End of Report ====="|tee -a /mnt/c/Users/yogesh\ jawlekar/projects/system-health-monitor/health.log
