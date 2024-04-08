
`git remote -v` 看本地 fetch 和 push 用的远程地址

`git remote add 别名origin 仓库地址https://github.com/xx/xxx` 添加远程仓库

`git pull origin main --rebase` 拉远程代码，选合并策略，rebase 按项目文件的顺序？不按时间节点

`git push -u origin main`  -u 将别名和分支名默认，之后直接 `git push` 就可以了

`git switch -c new-feature` -c 代表新建分支，跟 checkout 功能重合，但是 switch 专门给分支用的，改完后 `git push origin new-feature`

pr 合并 删除分支

本地仓库依旧两个分支，在 main 同步 `git pull` 之后 删除新分支 git branch -d new-feature

`git tag -a v1.0.0 -m "标签信息"` 打标签

`git tag` 查看标签

`git push origin v1.0.0`

release 对应 标签，可以手动生成









