# haproxy
an example for testing haproxy



使用步骤

1. 使用git下载server.js到服务器任意目录
   git clone https://github.com/breaksourcecode/haproxy.git
2. 进入对应目录，使用如下命令启动服务
    node server.js 3000
    node server.js 3002
    其中，3000和3002是node服务监听端口
3. 安装HAProxy
4. 配置HAProxy，即用下载的haproxy.conf文件覆盖/etc/haproxy/haproxy.conf文件
5. 启动HAproxy
   systemctl start haproxy
5. 测试，并观察返回的数据是否交替打印端口
   curl localhost:5000 或者  curl localhost:6000
