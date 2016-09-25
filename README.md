外部に公開したいときは
```
$iptables -I INPUT -p tcp -m tcp --dport 4000 -j ACCEPT
```
