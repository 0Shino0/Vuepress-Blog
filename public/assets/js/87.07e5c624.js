(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{680:function(t,i,v){"use strict";v.r(i);var _=v(1),e=Object(_.a)({},(function(){var t=this,i=t._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"title"}),i("p",[t._v("git命令 | git脚本")])]),t._v(" "),i("h2",{attrs:{id:"git-常用命令小结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令小结"}},[t._v("#")]),t._v(" Git 常用命令小结")]),t._v(" "),i("ul",[i("li",[t._v("git init 仓库初始化")]),t._v(" "),i("li",[t._v("git add -A 将工作区修改添加至『暂存区』")]),t._v(" "),i("li",[t._v("git commit 提交 存档")]),t._v(" "),i("li",[t._v("git branch 查看分支\n"),i("ul",[i("li",[t._v("git branch name 创建")]),t._v(" "),i("li",[t._v("git branch -d name 删除分支")]),t._v(" "),i("li",[t._v("git merge name 分支合并")]),t._v(" "),i("li",[t._v("git checkout name 切换分支")]),t._v(" "),i("li",[t._v("git checkout -b name 创建并切换")])])]),t._v(" "),i("li",[t._v("git remote 远程仓库别名管理\n"),i("ul",[i("li",[t._v("add 新增别名")]),t._v(" "),i("li",[t._v("remove 移除别名")]),t._v(" "),i("li",[t._v("rename 重命名别名")])])]),t._v(" "),i("li",[t._v("git push 将本地仓库的『分支』推送到远端仓库\n"),i("ul",[i("li",[t._v("git push -u origin master")]),t._v(" "),i("li",[t._v("git push dev master")]),t._v(" "),i("li",[t._v("git push dev master:main")])])]),t._v(" "),i("li",[t._v("git pull 拉取指定仓库的指定分支\n"),i("ul",[i("li",[t._v("git pull origin master")])])]),t._v(" "),i("li",[t._v("git clone 克隆仓库")]),t._v(" "),i("li",[t._v("git status 查看仓库状态")]),t._v(" "),i("li",[t._v("忽略文件")]),t._v(" "),i("li",[t._v("冲突解决")])]),t._v(" "),i("p",[t._v("注意")]),t._v(" "),i("ul",[i("li",[t._v("移动或删除本地仓库不会影响远程存储库.")]),t._v(" "),i("li",[t._v("含有node_module的文件夹移动时---过慢---压缩后移动")]),t._v(" "),i("li",[t._v(".git不能够嵌套")])]),t._v(" "),i("h2",{attrs:{id:"git-flow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-flow"}},[t._v("#")]),t._v(" Git Flow")]),t._v(" "),i("p",[t._v("经典模型的问题")]),t._v(" "),i("ul",[i("li",[t._v("必须使用dev分支")]),t._v(" "),i("li",[t._v("复杂度高hotfix与release分支")]),t._v(" "),i("li",[t._v("多次Merge合并")])]),t._v(" "),i("h3",{attrs:{id:"两种高效的git-flow"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#两种高效的git-flow"}},[t._v("#")]),t._v(" 两种高效的Git Flow")]),t._v(" "),i("p",[t._v("one")]),t._v(" "),i("ul",[i("li",[t._v("适用于持续集成多环境场景")]),t._v(" "),i("li",[t._v("上游分支向下游发展")]),t._v(" "),i("li",[t._v("流程Bug->New Branch-> master -> pre branch-> Target Branch")])]),t._v(" "),i("p",[i("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202210221516510.png",alt:"Git Flow"}})]),t._v(" "),i("p",[t._v("two")]),t._v(" "),i("ul",[i("li",[t._v("适用于版本项目")]),t._v(" "),i("li",[t._v("稳定版本从master检出bug修复在分支")]),t._v(" "),i("li",[t._v("master->Stable-> new branch-> bug fix->version")])]),t._v(" "),i("h3",{attrs:{id:"git-flow重要意义"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-flow重要意义"}},[t._v("#")]),t._v(" Git Flow重要意义")]),t._v(" "),i("ul",[i("li",[t._v("多人协作,权限控制")]),t._v(" "),i("li",[t._v("解决冲突")]),t._v(" "),i("li",[t._v("溯源,问题Issue")])]),t._v(" "),i("h3",{attrs:{id:"branch创建原则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#branch创建原则"}},[t._v("#")]),t._v(" Branch创建原则")]),t._v(" "),i("ul",[i("li",[t._v("按需创建")]),t._v(" "),i("li",[t._v("重要的版本管理(版本历史)")]),t._v(" "),i("li",[t._v("学会使用Tags")])]),t._v(" "),i("h2",{attrs:{id:"gitignore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gitignore"}},[t._v("#")]),t._v(" gitignore")]),t._v(" "),i("p",[t._v("忽略不需要 | 重复 的文件")]),t._v(" "),i("p",[t._v("三种快速创建gitignore的方法")]),t._v(" "),i("ul",[i("li",[t._v("gitignore仓库"),i("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/github/gitignore"),i("OutboundLink")],1)]),t._v(" "),i("li",[t._v("在线gitignore.io"),i("a",{attrs:{href:"https://www.toptal.com/developers/gitignore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.toptal.com/developers/gitignore/"),i("OutboundLink")],1)]),t._v(" "),i("li",[t._v("vscode插件——"),i("code",[t._v(".gitignore generator")])])])])}),[],!1,null,null,null);i.default=e.exports}}]);