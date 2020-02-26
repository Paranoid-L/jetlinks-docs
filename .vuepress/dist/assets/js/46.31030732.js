(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{373:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tcp网络组件常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp网络组件常见问题"}},[t._v("#")]),t._v(" TCP网络组件常见问题")]),t._v(" "),a("p",[t._v("使用TCP网络组件时的常见问题")]),t._v(" "),a("h2",{attrs:{id:"粘拆包处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粘拆包处理"}},[t._v("#")]),t._v(" 粘拆包处理")]),t._v(" "),a("p",[t._v("由于TCP存在粘拆包问题,在创建"),a("code",[t._v("TCP服务")]),t._v("或者"),a("code",[t._v("TCP客户端")]),t._v("时需要指定数据包的"),a("code",[t._v("解析方式")]),t._v(".\nTCP组件会根据解析方式,将收到的TCP数据包解析为完整的数据包,再交给对应的消息协议处理.")]),t._v(" "),a("p",[t._v("目前支持的解析方式:")]),t._v(" "),a("ol",[a("li",[t._v("不处理:收到数据包时直接交给消息协议进行处理.")]),t._v(" "),a("li",[t._v("分隔符:使用分隔符来处理粘拆包,例如:"),a("code",[t._v("\\n")]),t._v(".")]),t._v(" "),a("li",[t._v("固定长度:使用固定长度来处理粘拆包.")]),t._v(" "),a("li",[t._v("脚本: 通过脚本来自定义处理规则,脚本内置了一个"),a("code",[t._v("parser")]),t._v("进行处理逻辑定义,例如:")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" BytesUtils "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jetlinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pro"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BytesUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1. 首先读取4个字节")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BytesUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("highBytesToInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2. 高位在前将4字节转为int,代表接下来数据包的完整长度.")]),t._v("\n            parser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3. 设置下一步要读取固定长度")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            parser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4. 设置数据包结果.")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5. 完成本次解析,重新回到1开始读取下一个数据包.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);