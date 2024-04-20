
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

