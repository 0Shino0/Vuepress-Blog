(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{616:function(t,a,s){"use strict";s.r(a);var v=s(1),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"linux常用知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux常用知识"}},[t._v("#")]),t._v(" Linux常用知识")]),t._v(" "),a("p",[t._v("Linux操作系统的创始人和主要设计者是 "),a("strong",[t._v("Linus Torvalds")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://bkimg.cdn.bcebos.com/pic/5882b2b7d0a20cf4f664615276094b36adaf9943?x-bce-process=image/resize,m_lfit,w_536,limit_1",alt:"林纳斯·本纳第克特·托瓦兹"}}),t._v(" "),a("p",[t._v("——图片来自百度百科")]),t._v(" "),a("p",[t._v("LInux内核遵循 GPL 许可条例。")]),t._v(" "),a("h2",{attrs:{id:"linux联机帮助命令-man"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux联机帮助命令-man"}},[t._v("#")]),t._v(" Linux联机帮助命令 "),a("code",[t._v("man")])]),t._v(" "),a("p",[t._v("你可以使用 "),a("em",[t._v("man [命令]")]),t._v(" 来查看各个命令的使用文档，如 ：man cp。")]),t._v(" "),a("h2",{attrs:{id:"一行内运行多个命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一行内运行多个命令"}},[t._v("#")]),t._v(" 一行内运行多个命令")]),t._v(" "),a("p",[t._v("在Linux中，有三种方法可以在一行中运行多个命令:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v(";")])]),t._v(" "),a("td",[a("code",[t._v("Command 1;Command 2")])]),t._v(" "),a("td",[t._v("首先运行Command1，"),a("strong",[t._v("然后")]),t._v("运行Command2")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("&&")])]),t._v(" "),a("td",[a("code",[t._v("Command 1 && Command 2")])]),t._v(" "),a("td",[t._v("当Command1"),a("strong",[t._v("运行成功")]),t._v("并结束，然后运行Command2")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("||")])]),t._v(" "),a("td",[a("code",[t._v("Command 1 || Command 2")])]),t._v(" "),a("td",[t._v("当Command1"),a("strong",[t._v("运行失败")]),t._v("时才运行Command2")])])])]),t._v(" "),a("h2",{attrs:{id:"shell中的几种标准输出重定向方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell中的几种标准输出重定向方式"}},[t._v("#")]),t._v(" shell中的几种标准输出重定向方式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("command > file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将输出重定向到 file。"),a("strong",[t._v("注意")]),t._v("任何file内的已经存在的内容将被新内容"),a("strong",[t._v("替代")]),t._v("。如果要将新内容添加在文件末尾，请使用>>操作符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("command < file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将输入重定向到 file。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("command >> file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将输出以追加的方式重定向到 file。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("n > file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将文件描述符为 n 的文件重定向到 file。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("n >> file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将文件描述符为 n 的文件以追加的方式重定向到 file。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("n >& m")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将输出文件 m 和 n 合并。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("n <& m")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将输入文件 m 和 n 合并。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("<< tag")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将开始标记 tag 和结束标记 tag 之间的内容作为输入。")])])])]),t._v(" "),a("h2",{attrs:{id:"重定向管道的输出到标准输出和指定的文件中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重定向管道的输出到标准输出和指定的文件中"}},[t._v("#")]),t._v(" 重定向管道的输出到标准输出和指定的文件中")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("tee")]),t._v("命令")]),t._v(" "),a("p",[t._v("如果您只关心标准输出")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 如果想同时打印到屏幕和文件里，可以这么写：\nls -l | tee -a lsls.log\n# 如果想把错误输出也同时打印到屏幕和文件，可以这么写：\nls -l not_find_runoob 2>&1 | tee -a lsls.log\n# 其中，2>&1 意思就是把标准报错也作为标准输出。写 crontab job 的时候常用。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"文件的访问权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件的访问权限"}},[t._v("#")]),t._v(" 文件的访问权限")]),t._v(" "),a("p",[t._v("在 Linux 中第一个字符代表这个文件是目录、文件或链接文件等等。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("当为 d 则是目录")])]),t._v(" "),a("li",[a("strong",[t._v("当为 - 则是文件；")])]),t._v(" "),a("li",[a("strong",[t._v("若是 l 则表示为链接文档(link file)；")])]),t._v(" "),a("li",[t._v("若是 "),a("strong",[t._v("b")]),t._v(" 则表示为装置文件里面的可供储存的接口设备(可随机存取装置)；")]),t._v(" "),a("li",[t._v("若是 "),a("strong",[t._v("c")]),t._v(" 则表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。")])]),t._v(" "),a("p",[t._v("接下来的字符中，以三个为一组，且均为 "),a("strong",[t._v("rwx")]),t._v(" 的三个参数的组合。其中， "),a("strong",[t._v("r")]),t._v(" 代表可读(read)、 "),a("strong",[t._v("w")]),t._v(" 代表可写(write)、 "),a("strong",[t._v("x")]),t._v(" 代表可执行(execute)。 要注意的是，这三个权限的位置不会改变，如果没有权限，就会出现减号 "),a("strong",[t._v("-")]),t._v(" 而已。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202305121545561.jpeg",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"十位权限表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十位权限表示"}},[t._v("#")]),t._v(" 十位权限表示")]),t._v(" "),a("p",[t._v("常见的权限表示形式有：")]),t._v(" "),a("p",[t._v("每个文件的属性由左边第一部分的 10 个字符来确定（如下图）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202305121546416.png",alt:"363003_1227493859FdXT"}})]),t._v(" "),a("p",[t._v("从左至右用 "),a("strong",[t._v("0-9")]),t._v(" 这些数字来表示。")]),t._v(" "),a("p",[t._v("第 "),a("strong",[t._v("0")]),t._v(" 位确定文件类型")]),t._v(" "),a("p",[t._v("第 "),a("strong",[t._v("1-3")]),t._v(" 位确定"),a("strong",[t._v("属主")]),t._v("（该文件的所有者）拥有该文件的权限。")]),t._v(" "),a("p",[t._v("第"),a("strong",[t._v("4-6")]),t._v("位确定"),a("strong",[t._v("属组")]),t._v("（所有者的同组用户）拥有该文件的权限，")]),t._v(" "),a("p",[t._v("第"),a("strong",[t._v("7-9")]),t._v("位确定"),a("strong",[t._v("其他用户")]),t._v("拥有该文件的权限。")]),t._v(" "),a("p",[t._v("其中，第 "),a("strong",[t._v("1、4、7")]),t._v(" 位表示读权限，如果用 "),a("strong",[t._v("r")]),t._v(" 字符表示，则有读权限，如果用 "),a("strong",[t._v("-")]),t._v(" 字符表示，则没有读权限；第 "),a("strong",[t._v("2、5、8")]),t._v(" 位表示写权限，如果用 "),a("strong",[t._v("w")]),t._v(" 字符表示，则有写权限，如果用 "),a("strong",[t._v("-")]),t._v(" 字符表示没有写权限；第 "),a("strong",[t._v("3、6、9")]),t._v(" 位表示可执行权限，如果用 "),a("strong",[t._v("x")]),t._v(" 字符表示，则有执行权限，如果用 "),a("strong",[t._v("-")]),t._v(" 字符表示，则没有执行权限。")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("示例：\n-rw------- (600)    只有拥有者有读写权限。\n-rw-r--r-- (644)    只有拥有者有读写权限；而属组用户和其他用户只有读权限。\n-rwx------ (700)    只有拥有者有读、写、执行权限。\n-rwxr-xr-x (755)    拥有者有读、写、执行权限；而属组用户和其他用户只有读、执行权限。\n-rwx--x--x (711)    拥有者有读、写、执行权限；而属组用户和其他用户只有执行权限。\n-rw-rw-rw- (666)    所有用户都有文件读、写权限。\n-rwxrwxrwx (777)    所有用户都有读、写、执行权限。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"新建文件的默认权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建文件的默认权限"}},[t._v("#")]),t._v(" 新建文件的默认权限")]),t._v(" "),a("p",[t._v("当新建一个文件或目录时,系统会为其设置最初的权限。文件的初始权限由文件创建掩码(creation mask)决定。掩码是一个9位二进制数字，通常用八进制数字表示，如022。掩码中的位与权限字符串相对应,掩码中为1的位限制对应的权限位的权限。例如,"),a("strong",[t._v("掩码022 表示组用户和其他人没有 w 权限,对其他权限不做限制。")]),t._v("\n文件创建时的默认权限有以下几种情况:")]),t._v(" "),a("ul",[a("li",[t._v("可执行文件：通过编译程序生成的可执行文件,它的默认权限是 777-掩码。例如，若掩码为 022,则新文件的权限就是 755。")]),t._v(" "),a("li",[t._v("非可执行文件：对于非可执行文件(如文本文件、数据文件等),在创建时默认是没有x权限的,对这类文件的x权限需要显式地赋予，即通过 chmod 命令将其改为可执行文件。因此新建文件的权限是"),a("code",[t._v("(777-掩码)&666")]),t._v("。这里的是“按位与”运算，即先用"),a("code",[t._v("777-掩码")]),t._v("求出权限,再滤掉所有 x 位。例如,若掩码为 022,则新文件的权限就是 "),a("code",[t._v("(777-022)& 666 = 644")]),t._v("。若掩码为 003,则新文件的权限就是"),a("code",[t._v("(777-003)&666=664")]),t._v("。")]),t._v(" "),a("li",[t._v("目录：同可执行文件一样,新建目录的默认权限是 777-掩码。若掩码为 022,则新目录的权限就是 755。")])]),t._v(" "),a("p",[t._v("用户登录时,系统自动地为其设置了掩码,通常是 022。用户可以用命令修改掩码从而改变新建文件的默认权限,使之具有合适的安全性限制。")]),t._v(" "),a("h3",{attrs:{id:"文件的其他属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件的其他属性"}},[t._v("#")]),t._v(" 文件的其他属性")]),t._v(" "),a("p",[t._v("除了文件名、文件类型、归属关系和存取权限外,文件还有其他一些属性,包括")]),t._v(" "),a("ol",[a("li",[t._v("文件的时间标签，用于记录文件的时间属性，分为:\n"),a("ul",[a("li",[t._v("修改时间(modify time):文件内容被修改的最后时间")]),t._v(" "),a("li",[t._v("访问时间(access time):文件最近一次被访问的时间")]),t._v(" "),a("li",[t._v("变更时间(change time):文件属性变更的最近时间。")])])]),t._v(" "),a("li",[t._v("文件的大小,即文件所占用的字节数。")]),t._v(" "),a("li",[t._v("文件的连接数,即此文件硬链接的数目。")])]),t._v(" "),a("h2",{attrs:{id:"vi的工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi的工作模式"}},[t._v("#")]),t._v(" vi的工作模式")]),t._v(" "),a("p",[t._v("vi的工作模式\nvi 是一个多模式的软件,它有3 种基本工作模式。在不同的工作模式下,它对输人的内容有不同的解释。的基本工作模式如下:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("命令模式")]),t._v(" "),a("p",[t._v("命令模式(normal mode)用于完成各种文本编辑工作。在命令模式下,输人的任何字符都作为命令来解释执行,屏幕上不显示输入内容。")])]),t._v(" "),a("li",[a("p",[t._v("输人模式")]),t._v(" "),a("p",[t._v("输人模式(insert mode)用于完成文本录人工作。在输入模式下,输人的任何字符都将作为文件的内容被保存,并显示在屏幕上。")])]),t._v(" "),a("li",[a("p",[t._v("末行模式")]),t._v(" "),a("p",[t._v("末行模式(last line mode)也称为 ex模式。在末行模式下,光标停留在屏幕的最未行,在此接收输人的命令并执行。末行模式用于执行一些全局性操作,如文件操作、参数设置、查找替换、拷贝粘贴、执行 Shell 命令等")])])]),t._v(" "),a("h3",{attrs:{id:"grep命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grep命令"}},[t._v("#")]),t._v(" grep命令")]),t._v(" "),a("p",[t._v("Linux grep (global regular expression) 命令用于"),a("strong",[t._v("查找文件里符合条件的字符串或正则表达式。")])]),t._v(" "),a("p",[t._v("grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 "),a("strong",[t._v("-")]),t._v("，则 grep 指令会从标准输入设备读取数据。")]),t._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grep [options] pattern [files]\n或\ngrep [-abcEFGhHilLnqrsvVwxy][-A<显示行数>][-B<显示列数>][-C<显示列数>][-d<进行动作>][-e<范本样式>][-f<范本文件>][--help][范本样式][文件或目录...]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"简述虚拟存储器的特征"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述虚拟存储器的特征"}},[t._v("#")]),t._v(" 简述虚拟存储器的特征")]),t._v(" "),a("ul",[a("li",[t._v("离散性：每进程的地址空间是离散的存在于内存中的。")]),t._v(" "),a("li",[t._v("多次性：每进程分为多个段，分多次调入内存的。")]),t._v(" "),a("li",[t._v("对换性：内存里的数据可与磁盘上的数据调换运行。")]),t._v(" "),a("li",[t._v("虚拟性：使得逻辑上可利用的内存空间大大超过了实际的物理内存空间。")])]),t._v(" "),a("h2",{attrs:{id:"fock-函数的特点是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fock-函数的特点是什么"}},[t._v("#")]),t._v(" fock()函数的特点是什么")]),t._v(" "),a("ul",[a("li",[t._v("一次调用，两次返回")]),t._v(" "),a("li",[t._v("fork()系统调用，创建一个新的子进程")])]),t._v(" "),a("h2",{attrs:{id:"gcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc"}},[t._v("#")]),t._v(" GCC")]),t._v(" "),a("p",[t._v("Linux下GCC的使用")]),t._v(" "),a("p",[t._v("gcc")]),t._v(" "),a("p",[t._v("-o：指定生成文件的名称")]),t._v(" "),a("p",[t._v("-E：激活预处理。生成预处理文件（ .i 文件）")]),t._v(" "),a("p",[t._v("-S：激活预处理、编译。生成汇编代码（ .s 文件）")]),t._v(" "),a("p",[t._v("-c：激活预处理、编译、汇编。生成目标文件（ .o 文件）")]),t._v(" "),a("p",[t._v("-I：指定头文件目录")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://shinoimg.yyshino.top/img/202305131600144.png",alt:"image-20230513160005625"}})]),t._v(" "),a("p",[t._v("预编译")]),t._v(" "),a("p",[a("code",[t._v("gcc -E hello.c -o hello.i")])]),t._v(" "),a("p",[t._v("编译")]),t._v(" "),a("p",[a("code",[t._v("gcc -S hello.i -o hello.s")])]),t._v(" "),a("p",[t._v("汇编")]),t._v(" "),a("p",[a("code",[t._v("gcc -c hello.s -o hello.o")])]),t._v(" "),a("p",[t._v("链接")]),t._v(" "),a("p",[a("code",[t._v("gcc hello.o -o hello.out")])]),t._v(" "),a("p",[t._v("执行")]),t._v(" "),a("p",[a("code",[t._v("./hello.out")])]),t._v(" "),a("p",[t._v("一次性完成")]),t._v(" "),a("p",[a("code",[t._v("gcc hello.c -o hello.out")])]),t._v(" "),a("p",[t._v("执行")]),t._v(" "),a("p",[a("code",[t._v("./hello")])]),t._v(" "),a("p",[t._v("多个文件的一起编译")]),t._v(" "),a("p",[a("code",[t._v("gcc print.c main.c -o main print")])]),t._v(" "),a("p",[t._v("分别编译各个源文件，再对编译后输出的目标文件（.o）")]),t._v(" "),a("p",[a("code",[t._v("gcc -c print.c -o print.o")])]),t._v(" "),a("p",[a("code",[t._v("gcc -c main.c -o main.o")])]),t._v(" "),a("p",[a("code",[t._v("gcc print.o main.o -o main print")])]),t._v(" "),a("p",[t._v("如果头文件和源文件不在一同目录中，如何解决")]),t._v(" "),a("p",[t._v("主要是要加 -I 指定头文件目录：")]),t._v(" "),a("p",[a("code",[t._v("gcc print.c main.c -o main print -I myInclude")])]),t._v(" "),a("p",[t._v("makefile（Makefile）")]),t._v(" "),a("div",{staticClass:"language-makefile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-makefile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#main是需要生成的目标文件名，它依赖main.o print.o")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("main.o print.o\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gcc命令，生成main,语句前面要用TAB")]),t._v("\n\tgcc main.o input.o cal.o -o main\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#main.o是目标文件，依赖main.c文件，通过gcc -c main.c生成main.o文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("main.o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("main.c\n\tgcc -c main.c\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("print.o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("print.c\n\tgcc -c print.c\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本"}},[t._v("#")]),t._v(" Shell脚本")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("div",{staticClass:"language-url line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-url"}},[a("code",[a("span",{pre:!0,attrs:{class:"token scheme"}},[t._v("https"),a("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token authority"}},[a("span",{pre:!0,attrs:{class:"token authority-delimiter"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token host"}},[t._v("zhuanlan.zhihu.com")])]),a("span",{pre:!0,attrs:{class:"token path"}},[a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("421284544")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token scheme"}},[t._v("https"),a("span",{pre:!0,attrs:{class:"token scheme-delimiter"}},[t._v(":")])]),a("span",{pre:!0,attrs:{class:"token authority"}},[a("span",{pre:!0,attrs:{class:"token authority-delimiter"}},[t._v("//")]),a("span",{pre:!0,attrs:{class:"token host"}},[t._v("www.runoob.com")])]),a("span",{pre:!0,attrs:{class:"token path"}},[a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token path-separator"}},[t._v("/")]),t._v("linux-command-manual.html")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=_.exports}}]);