# nginx配置
```
server
{
    listen 8099;
    server_name  127.0.0.1;

    location / {
        root D:\\microapp\\server;
        index index.html index.htm;
        try_files $uri $uri/ /main/index.html;
    }
}
```