---
date: 2024-02-13
tags:
  - til
  - windows
---

## Install

See it in [[029 - Make PowerShell Great Again]]

## Devlopment Environment

```powershell
scoop bucket add main
scoop bucket add java

# fnm for nodejs
scoop install main/fnm
fnm install --lts

# go
scoop install main/go

# java
scoop install java/temurin21-jdk

# rust
scoop install main/rust

# rye for python
scoop install main/rye
```

## Apps

You can download the latest versions of virtually any software you can imagine on Scoop (maybe in unofficial bucket).

My list:

```powershell
> scoop list
Installed apps:

Name            Version     Source   Updated             Info
----            -------     ------   -------             ----
7zip            23.01       main     2024-02-17 13:51:26
bandizip6       6.29        versions 2024-02-18 20:55:51
fnm             1.35.1      main     2024-02-28 01:03:00
geekuninstaller 1.5.2.165   extras   2024-02-18 18:56:46
gh              2.44.1      main     2024-02-17 13:53:16
gifcam          7.0         extras   2024-02-18 21:59:20
git             2.44.0      main     2024-03-01 20:55:35
go              1.22.0      main     2024-02-28 00:34:40
leetgo          1.4.1       j178     2024-02-28 00:59:11
obsidian        1.5.8       extras   2024-03-01 20:57:38
potplayer       231220      extras   2024-02-19 00:43:24
psreadline      2.3.4       extras   2024-02-18 19:48:57
qview           6.1         extras   2024-02-19 00:56:09
rust            1.76.0      main     2024-02-28 00:51:22
rye             0.27.0      main     2024-02-28 00:48:18
sumatrapdf      3.5.2       extras   2024-02-18 21:30:08
temurin21-jdk   21.0.2-13.0 java     2024-02-28 00:44:20
vscode          1.87.0      extras   2024-03-01 20:55:50
wechat          3.9.9.43    extras   2024-03-01 20:57:14
```

## Update & Clean

```powershell
scoop update *
scoop cleanup *
```

## Thanks

- [Scoop](https://scoop.sh/#/)
