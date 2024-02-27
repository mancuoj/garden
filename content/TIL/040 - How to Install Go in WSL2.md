---
date: 2024-02-09
tags:
  - go
  - how
---


## Install WSL First


```sh
# select the latest release: https://go.dev/dl
cd ~
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
mkdir go
```

```zshrc
# configure file
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin
```

## Update Version

```sh
sudo rm -rf /usr/local/go
# delete and reinstall the latest version
```

Or 

```sh
git clone https://github.com/udhos/update-golang
cd update-golang
sudo ./update-golang.sh
```

## Thanks

- [WSL | GoLand Documentation](https://www.jetbrains.com/help/go/how-to-use-wsl-development-environment-in-product.html#wsl-general)
- [All releases - The Go Programming Language](https://go.dev/dl/)


