---
tags:
  - ssh
  - linux
---

## 阿里云

```sh
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

## AWS

```sh
chmod 400 xx.pem
ssh -i "xx.pem" ubuntu@ip
```

设置使用密码登录：

```sh
# 先给默认用户创建一个密码
sudo passwd ubuntu

sudo vi /etc/ssh/sshd_config
# 找到该行将 no 修改为 yes
PasswordAuthentication yes

# 保存退出后重启服务
sudo service sshd restart
```

之后登录直接 `sudo ubuntu@ip` 即可（也可仿照上面阿里云设置免密登录）。