
```shell
docker image ls
docker image rm [imageName]

docker image pull library/hello-world
docker container run hello-world
# 本地没有会自动去 pull

docker container kill [containerID]

docker container ls
docker container ls -all

docker container rm [containerID]
```

```dockerfile
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-slim

COPY . /app
WORKDIR /app

```

