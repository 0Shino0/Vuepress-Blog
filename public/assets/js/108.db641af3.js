(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{698:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"diffing算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diffing算法"}},[s._v("#")]),s._v(" Diffing算法")]),s._v(" "),t("h4",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 当对比两棵树时，React 首先比较两棵树的根节点。不同类型的根节点元素会有不同的形态。\n    对比不同类型的元素\n\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 当根节点为不同类型的元素时，React 会拆卸原有的树并且建立起新的树。举个例子，当一个\n    元素从 "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v(" 变成 ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("，从 ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Article")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v(" 变成 ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Comment")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("，或从 ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Button")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v(" 变成 ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v(" 都会触发一个完整的重建流程。\n\n    - 当卸载一棵树时，对应的 DOM 节点也会被销毁。组件实例将执行 componentWillUnmoun()\n    方法。当建立一棵新的树时，对应的 DOM 节点会被创建以及插入到 DOM 中。组件实例将执行 \n    UNSAFE_componentWillMount() 方法，紧接着 componentDidMount() 方法。所有与之前的\n    树相关联的 state 也会被销毁。\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("———— "),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/reconciliation.html#the-diffing-algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("react文档"),t("OutboundLink")],1)]),s._v(" "),t("hr"),s._v(" "),t("h4",{attrs:{id:"理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[s._v("#")]),s._v(" 理解")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1:  diffing 算法最小颗粒度是标签  (只可以精确到标签的位置)\ndiffing 算法最小颗粒度是标签  (会一直递归循环遍历下去)")])]),s._v(" "),t("li",[t("p",[s._v("2：只要状态改变就会触发 render 函数 (实时修改状态)  (状态修改就会触发render函数);\n在React/Vue 中 key属性有什么作用？ (index 的内部原理是什么？)")])])]),s._v(" "),t("h5",{attrs:{id:"渲染中key的选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染中key的选择"}},[s._v("#")]),s._v(" 渲染中key的选择")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("3.开发中如何选择key?:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("​     1.最好使用每条数据的唯一标识作为key,比如id、手机号、身份证号、学号等唯一值。")])]),s._v(" "),t("li",[t("p",[s._v("​     2.如果确定只是简单的展示数据,用index也是可以的。")])])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("经典面试题")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" react"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("vue中的key有什么作用"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key的内部原理是什么"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" 为什么遍历列表时"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key最好不要用index"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("中key的作用\n            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("简单的说"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("key是虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("对象的标识"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("在更新显示时key起着极其重要的作用。\n            \n            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("详细的说"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("当状态中的数据发生变化时"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" react会根据【新数据】生成【新的虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            随后React进行【新虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("】与【旧虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("】的diff比较"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("比较规则如下")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            \n                        a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("I")]),s._v("旧虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("中找到了与新虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("相同的key")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("若虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("中内容没变"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("直接使用之前的真实"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("若虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("中内容变了"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("则生成新的真实"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("随后替换掉页面中之前的真实"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("\n                        \n                        b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("旧虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("中未找到与新虚拟"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("相同的key\n                        根据数据创建新的真实"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("随后渲染到到页面\n                        \n        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("用index作为key可能会引发的问题")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("若对数据进行")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("逆序添加、逆序删除等破坏顺序操作"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                            会产生没有必要的真实"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("更新"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("界面效果没问题"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("但效率低。\n                    \n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("如果结构中还包含输入类的"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                            会产生错误"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("更新"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("界面有问题。\n                            \n                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("注意"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("如果不存在对数据的逆序添加、逆序删除等破坏顺序操作"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    仅用于渲染列表用于展示"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("使用index作为key是没有问题的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);