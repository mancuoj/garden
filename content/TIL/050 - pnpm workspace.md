---
date: 2024-02-19
tags:
  - til
  - npm
---

`pnpm-workspace.yaml` defines the root of the [workspace](https://pnpm.io/workspaces) and enables you to include / exclude directories from the workspace. By default, all packages of all subdirectories are included.

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```


## Thanks

- [Managing a full-stack, multipackage monorepo using pnpm](https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/)
- [pnpm-workspace.yaml | pnpm](https://pnpm.io/pnpm-workspace_yaml)