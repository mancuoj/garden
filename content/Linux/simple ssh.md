---
tags:
  - ssh
  - linux
draft: false
---

新买服务器的一些简单配置。

```shell
ssh root@ip [-p 22]

# 添加 user 用户，赋予 sudo 权限
adduser user
usermod -aG sudo user

# 使用该用户登录
ssh user@ip
```

设置免密登录，没有该目录文件可以先创建：

```sh title="~/.ssh/config"
Host serverAlias
	Hostname ip
	User user
```

如果没有密钥先生成再 copy 到服务器上，有的话直接 copy 就行了：

```sh
# 生成密钥可以无脑回车
ssh-keygen
ssh-copy-id serverAlias

ssh serverAlias
```

之后直接 ssh 别名就可以直接登录了。