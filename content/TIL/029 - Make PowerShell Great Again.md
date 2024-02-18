---
date: 2024-01-29
---

## Clash Proxy

Open the PowerShell's profile through notepad:

```powershell
notepad $PROFILE
```

If the file does not exist, create it using the following command:

```powershell
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
```

Paste into the file:

```powershell
$env:http_proxy="http://127.0.0.1:7890";
$env:https_proxy="http://127.0.0.1:7890";
```

## Scoop

It can be understood as homebrew which is not that easy to use.

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

```powershell
scoop bucket add extras
scoop install extras/psreadline
```

```powershell
$env:http_proxy="http://127.0.0.1:7890";
$env:https_proxy="http://127.0.0.1:7890";

Import-Module PSReadLine
```


## Thanks

- [about Profiles - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.4)
- [Scoop](https://scoop.sh/#/)
- [PowerShell/PSReadLine](https://github.com/PowerShell/PSReadLine)