---
tags:
  - ssh
  - linux
draft: false
---

新买服务器的一些简单配置。

```sh
ssh root@ip [-p 22]

# 添加用户，给与 sudo 权限
adduser <user>
usermod -aG sudo <user>

# 使用该用户登录
ssh <user>@ip
```

设置免密登录，没有该目录文件可以先创建：

``` title="~/.ssh/config"
Host <serverAlias>
	Hostname <ip>
	User <user>
```

如果没有密钥先生成，然后 copy 到服务器上：

```sh
ssh-keygen
ssh-copy-id <serverAlias>

ssh <serverAlias>
```

之后直接 ssh 别名就可以直接登录了。