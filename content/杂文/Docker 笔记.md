
## [Docker 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

```shell
docker image ls
docker image rm [imageName]

docker image pull library/hello-world
docker container run hello-world
# 本地没有会自动去 pull
# 停止再启动的用 start，否则会起两个

docker container kill [containerID]

docker container ls
docker container ls -all

docker container rm [containerID]

docker container exec -it [containerID] /bin/bash

# copy 容器文件到本地
docker container cp [containID]:[/path/to/file] .
```

```dockerfile
FROM node:20

# copy 当前目录所有文件（除了 .dockerignore）到 app 目录下
COPY . /app 
# 接下来的工作路径
WORKDIR /app

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build

# 暴露 3000 端口
EXPOSE 3000
# 启动后执行的命令，只能有一个
CMD ["pnpm", "run", "start"]
```

```shell
# 生成镜像
docker image build -t demo .
# -t 指定 image 名字，还可以 demo:0.0.1 指定标签，不填默认 latest


# 生成容器, 默认 demo:latest
docker container run -p 8000:3000 -it demo /bin/bash
# -p 容器 3000 端口映射到本机 8000 端口
# -it 容器 shell 映射到本机 shell
# /bin/bash 容器启动后执行的第一个命令
# 可以加上 --rm 在容器终止运行后自动删除容器文件
```

## [Containerize an application | Docker Docs](https://docs.docker.com/get-started/02_our_app/)


```Dockerfile
# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```

```shell
docker build -t getting-started .
# -t flag tags your image

docker run -dp 127.0.0.1:3000:3000 getting-started
# -d --detach 后台运行容器，启动后返回终端
# -p --public 端口映射

docker stop <the-container-id>
docker rm <the-container-id>
# or just rm -f
```

```shell
# https://hub.docker.com 创建一个 public repo

docker login -u YOUR-USER-NAME
# or just docker login
docker images
docker tag getting-started YOUR-USER-NAME/getting-started
docker push YOUR-USER-NAME/getting-started
docker run -dp 0.0.0.0:3000:3000 YOUR-USER-NAME/getting-started
```

```shell
# test
docker run -ti --name=mytest alpine
# / # echo "hello" > greeting.txt
# / # exit
docker run alpine cat greeting.txt
# docker ps --all
# docker ps -a -n -l -q -s
```

Volumes 卷提供了将容器的特定文件系统路径连接回主机的功能。如果在容器中装载目录，则在主机上也会看到该目录中的更改。如果在容器重启时装载同一目录，则会看到相同的文件。

由于 SQLite 数据库是单个文件，如果可以将该文件保留在主机上并使其可供下一个容器使用，则它应该能够从上一个容器中断的地方继续。通过创建卷并将其附加（通常称为“挂载”）到存储数据的目录，可以保留数据。当容器写入 `todo.db` 文件时，它会将数据保留到卷中的主机。

如前所述，您将使用卷装载 volume mount。将卷装载视为一个不透明的数据桶。Docker 完全管理卷，包括磁盘上的存储位置。您只需要记住卷的名称。

```shell
docker volume create todo-db
docker rm -f <id>
# 删除还在运行的原容器

docker run -dp 127.0.0.1:3000:3000 --mount type=volume,src=todo-db,target=/etc/todos getting-started
# 存在 /etc/todos/todo.db 中

docker volume inspect todo-db
```

bind mount 绑定挂载是另一种类型的挂载，它允许您将主机文件系统中的目录共享到容器中。在处理应用程序时，可以使用绑定挂载将源代码挂载到容器中。一旦你保存文件，容器就会立即看到你对代码所做的更改。这意味着您可以在容器中运行进程来监视文件系统更改并响应它们。

- `type=volume,src=my-volume,target=/usr/local/data`
- `type=bind,src=/path/to/data,target=/usr/local/data`

```shell
docker run -it --mount type=bind,src="$(pwd)",target=/src ubuntu bash

docker run -dp 127.0.0.1:3000:3000 \
    -w /app --mount type=bind,src="$(pwd)",target=/app \
    node:18-alpine \
    sh -c "yarn install && yarn run dev"
```

容器间网络通信，如果在同一网络上运行另一个容器，如何找到该容器？请记住，每个容器都有自己的 IP 地址。使用 nicolaka/netshoot 映像启动一个新容器。确保将其连接到同一网络。在容器中，您将使用该 `dig` 命令，这是一个有用的 DNS 工具。您将查找主机名 `mysql` 的 IP 地址。

```shell
docker network create todo-app

docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:8.0

# -v 创建 volume

docker exec -it <mysql-container-id> mysql -u root -p

docker run -it --network todo-app nicolaka/netshoot
dig mysql
# 这里的 mysql 就是 --network-alias 定义的别名
# ;; ANSWER SECTION:
# mysql.                  600     IN      A       172.18.0.2
```

Docker Compose 是一种帮助您定义和共享多容器应用程序的工具。使用 Compose，您可以创建一个 YAML 文件来定义服务，只需一个命令，您就可以启动或将其全部拆卸。

```shell
docker run -d \
  --network todo-app --network-alias mysql \
  -v todo-mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todos \
  mysql:8.0

docker run -dp 127.0.0.1:3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:18-alpine \
  sh -c "yarn install && yarn run dev"
```

compose.yaml

```yaml
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 127.0.0.1:3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```


```shell
docker compose up -d
# -d detach 后台运行
# 会自动创建网络

docker compose down 
# 删除网络以及容器
# 删除卷需要加上 --volumes


```