(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(t,e,s){t.exports=s.p+"assets/img/device-instance-general-info.229a6c08.png"},100:function(t,e,s){t.exports=s.p+"assets/img/device-property-refresh.586bc060.png"},101:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-sub-read-property.a9aa1332.png"},102:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-replay-device-property.c4a4bc86.png"},103:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-replyed-property-value.94af2068.png"},104:function(t,e,s){t.exports=s.p+"assets/img/read-device-property-reply-log.4e6dcca4.png"},105:function(t,e,s){t.exports=s.p+"assets/img/read-device-property.387322c6.gif"},106:function(t,e,s){t.exports=s.p+"assets/img/device-event-report-log.05000cfe.png"},107:function(t,e,s){t.exports=s.p+"assets/img/device-event-info.e74352d3.gif"},11:function(t,e,s){t.exports=s.p+"assets/img/device-instance-run-info.db488b8d.png"},12:function(t,e,s){t.exports=s.p+"assets/img/device-instance-log.780e22d1.png"},33:function(t,e,s){t.exports=s.p+"assets/img/mqtt-connection.d1128f92.png"},34:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-device-event-report.d5ed86b2.png"},345:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设备接入教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备接入教程"}},[t._v("#")]),t._v(" 设备接入教程")]),t._v(" "),a("p",[t._v("本文档以MQTT.fx为例，介绍使用第三方软件以MQTT协议接入物联网平台。MQTT.fx是一款基于Eclipse Paho，使用Java语言编写的MQTT客户端工具。支持通过Topic订阅和发布消息。")]),t._v(" "),a("h2",{attrs:{id:"创建协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建协议"}},[t._v("#")]),t._v(" 创建协议")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义消息协议创建，请参考"),a("router-link",{attrs:{to:"/basics-guide/protocol-support.html"}},[t._v("消息协议定义")]),t._v("。")],1)]),t._v(" "),a("h3",{attrs:{id:"例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例"}},[t._v("#")]),t._v(" 例")]),t._v(" "),a("p",[t._v("i. 选择 "),a("code",[t._v("设备管理")]),t._v("--\x3e"),a("code",[t._v("协议管理")]),t._v("--\x3e 点击"),a("code",[t._v("新建协议")]),t._v("按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:s(81),alt:"新建协议导航"}})]),t._v(" "),a("p",[t._v("ii. 输入型号名称")]),t._v(" "),a("p",[t._v("iii. 选择型号类型为 "),a("code",[t._v("jar")])]),t._v(" "),a("p",[t._v("iv. 输入类名"),a("code",[t._v("org.jetlinks.thidparty.fh3j.Fh3jProtocolSupportProvider")])]),t._v(" "),a("p",[t._v("v. 上传jar包  "),a("a",{attrs:{href:"../files/device-connection/fh3j-protocol-2.0.jar"}},[t._v("fh3j-v2")])]),t._v(" "),a("p",[t._v("vi. 点击保存，完成协议新增。")]),t._v(" "),a("h3",{attrs:{id:"创建完成信息展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建完成信息展示"}},[t._v("#")]),t._v(" 创建完成信息展示")]),t._v(" "),a("p",[a("img",{attrs:{src:s(82),alt:"新建型号协议"}})]),t._v(" "),a("h2",{attrs:{id:"创建设备型号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建设备型号"}},[t._v("#")]),t._v(" 创建设备型号")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义创建设备型号，请参考"),a("router-link",{attrs:{to:"/basics-guide/device-manager.md/#添加设备型号"}},[t._v("添加设备型号")])],1)]),t._v(" "),a("h3",{attrs:{id:"例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例-2"}},[t._v("#")]),t._v(" 例")]),t._v(" "),a("p",[t._v("i.下载型号文件"),a("a",{attrs:{href:"../files/device-connection/device-product-smokeSensation001.json"}},[t._v("配置JSON")])]),t._v(" "),a("p",[t._v("ii. 选择 "),a("code",[t._v("设备管理")]),t._v("--\x3e"),a("code",[t._v("设备型号")]),t._v("--\x3e 点击"),a("code",[t._v("导入配置")]),t._v("按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:s(83),alt:"导入型号导航"}})]),t._v(" "),a("p",[t._v("iii. 选择"),a("a",{attrs:{href:"../files/device-connection/device-product-smokeSensation001.json"}},[t._v("配置JSON")]),t._v("文件")]),t._v(" "),a("p",[t._v("iv.型号导入完成效果如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(84),alt:"未发布型号"}})]),t._v(" "),a("p",[t._v("v.点击上图中"),a("code",[t._v("未发布")]),t._v("链接完成型号发布，导航栏中发布状态变为"),a("code",[t._v("已发布")]),t._v("代表发布成功。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(85),alt:"已发布型号"}})]),t._v(" "),a("h3",{attrs:{id:"创建成功的型号信息展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建成功的型号信息展示"}},[t._v("#")]),t._v(" 创建成功的型号信息展示")]),t._v(" "),a("p",[t._v("i. 点击导航栏中"),a("code",[t._v("编辑")]),t._v("链接查看型号基本信息")]),t._v(" "),a("p",[t._v("ii. 点击弹出框中"),a("code",[t._v("设备定义")]),t._v("板块查看型号设备定义")]),t._v(" "),a("p",[t._v("iii. 点击属性定义、事件定义对应操作下的编辑按钮查看更详细的型号信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(86),alt:"型号信息"}})]),t._v(" "),a("h2",{attrs:{id:"创建设备实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建设备实例"}},[t._v("#")]),t._v(" 创建设备实例")]),t._v(" "),a("blockquote",[a("p",[t._v("自定义创建设备实例，请参考"),a("router-link",{attrs:{to:"/basics-guide/device-manager.md/#添加设备实例"}},[t._v("添加设备实例")])],1)]),t._v(" "),a("h3",{attrs:{id:"例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例-3"}},[t._v("#")]),t._v(" 例")]),t._v(" "),a("p",[t._v("i. 下载设备实例Excel文件"),a("a",{attrs:{href:"../files/device-connection/device-instance.xlsx"}},[t._v("设备实例Excel")])]),t._v(" "),a("p",[t._v("ii. 选择 "),a("code",[t._v("设备管理")]),t._v("--\x3e"),a("code",[t._v("设备实例")]),t._v("--\x3e 点击"),a("code",[t._v("导入实例")]),t._v("按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:s(87),alt:"导入设备导航"}})]),t._v(" "),a("p",[t._v("iii. 选择"),a("a",{attrs:{href:"../files/device-connection/device-instance.xlsx"}},[t._v("设备实例Excel")]),t._v("文件")]),t._v(" "),a("p",[t._v("iv. 设备实例导入完成效果如下图")]),t._v(" "),a("p",[a("img",{attrs:{src:s(88),alt:"未激活的设备"}})]),t._v(" "),a("p",[t._v("v. 点击上图中"),a("code",[t._v("激活")]),t._v("链接完成设备实例激活，导航栏中发布状态变为"),a("code",[t._v("离线")]),t._v("代表设备激活成功。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(89),alt:"已激活的设备"}})]),t._v(" "),a("h3",{attrs:{id:"创建成功的设备实例信息展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建成功的设备实例信息展示"}},[t._v("#")]),t._v(" 创建成功的设备实例信息展示")]),t._v(" "),a("p",[t._v("i. 设备基本信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(10),alt:"设备基本信息"}})]),t._v(" "),a("p",[t._v("ii. 设备运行状态信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(11),alt:"设备运行状态信息"}})]),t._v(" "),a("p",[t._v("iii. 设备日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(12),alt:"设备日志"}})]),t._v(" "),a("h2",{attrs:{id:"创建网关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建网关配置"}},[t._v("#")]),t._v(" 创建网关配置")]),t._v(" "),a("p",[t._v("参照"),a("router-link",{attrs:{to:"/basics-guide/course/device-gateway.html"}},[t._v("启动设备网关服务")])],1),t._v(" "),a("h3",{attrs:{id:"例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例-4"}},[t._v("#")]),t._v(" 例")]),t._v(" "),a("p",[t._v("mqtt服务设备网关配")]),t._v(" "),a("p",[a("img",{attrs:{src:s(90),alt:"网关配置"}})]),t._v(" "),a("h2",{attrs:{id:"使用mqtt-fx接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用mqtt-fx接入"}},[t._v("#")]),t._v(" 使用MQTT.fx接入")]),t._v(" "),a("p",[t._v("1.下载并安装MQTT.fx软件。请访问"),a("a",{attrs:{href:"https://mqttfx.jensd.de/index.php/download?spm=a2c4g.11186623.2.16.20ab5800HxuVJR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT.fx官网"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("2.打开MQTT.fx软件，单击设置图标。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(91),alt:"mqttfx首页"}})]),t._v(" "),a("p",[t._v("3.设置连接参数。")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v(" 设置参数时，请确保参数值中或参数值的前后均没有空格。")]),t._v(" "),a("p",[t._v("i. 设置基本信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(92),alt:"mqtt基本信息设置"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Profile Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入您的自定义名称。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Profile Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择为"),a("strong",[t._v("MQTT Broker")]),t._v("。")])])])]),t._v(" "),a("p",[t._v("MQTT Broker Profile Settings")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Broker Address")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("连接域名。本地连接可直接填写 "),a("code",[t._v("127.0.0.1")]),t._v(",如为远程连接，请填写远程连接地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Broker Port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置为"),a("code",[t._v("1889")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Client ID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备Id。本文档中为演示设备实例"),a("code",[t._v("test001")])])])])]),t._v(" "),a("p",[t._v("General栏目下的设置项可保持系统默认，也可以根据您的具体需求设置。")]),t._v(" "),a("p",[t._v("ii. 单击User Credentials，设置User Name和Password。")]),t._v(" "),a("blockquote",[a("p",[t._v("在消息协议未定义前,username,password可以填写任意字符,但是不能留空。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(93),alt:"mqtt用户名名密码设置"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("User Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("由"),a("router-link",{attrs:{to:"/basics-guide/protocol-support.html"}},[t._v("消息协议定义")]),t._v("中决定User Name值（消息协议未定义时可填写任意值）")],1)]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("由"),a("router-link",{attrs:{to:"/basics-guide/protocol-support.html"}},[t._v("消息协议定义")]),t._v("中决定Password值  （消息协议未定义时可填写任意值）")],1)])])]),t._v(" "),a("p",[t._v("iii. (可选）TLS连接。需要选择SSL/TLS，勾选Enable SSL/TLS，设置Protocol。建议Protocol选择为TLSv1.2。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(94),alt:"mqtt TSL设置"}})]),t._v(" "),a("p",[t._v("4.设置完成后，单击右下角的"),a("strong",[t._v("OK")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"设备操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备操作"}},[t._v("#")]),t._v(" 设备操作")]),t._v(" "),a("p",[t._v("设备连接上平台，并进行一些基本的事件收发、属性读取操作。")]),t._v(" "),a("h3",{attrs:{id:"设备上下线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备上下线"}},[t._v("#")]),t._v(" 设备上下线")]),t._v(" "),a("p",[t._v("单击 Mqtt fx 中"),a("code",[t._v("Connect")]),t._v("进行连接")]),t._v(" "),a("p",[a("img",{attrs:{src:s(33),alt:"mqtt连接"}})]),t._v(" "),a("p",[t._v("平台中设备状态变为上线即为连接成功")]),t._v(" "),a("p",[a("img",{attrs:{src:s(95),alt:"设备上线"}})]),t._v(" "),a("p",[t._v("在设备日志模块可以看到设备上线日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(96),alt:"设备上线日志"}})]),t._v(" "),a("p",[t._v("单击 Mqtt fx 中"),a("code",[t._v("Disconnect")]),t._v("断开连接")]),t._v(" "),a("p",[a("img",{attrs:{src:s(33),alt:"mqtt连接"}})]),t._v(" "),a("p",[t._v("平台中设备状态变为离线即为断开连接成功")]),t._v(" "),a("p",[a("img",{attrs:{src:s(97),alt:"设备离线"}})]),t._v(" "),a("p",[t._v("在设备日志模块可以看到设备离线日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(98),alt:"设备离线日志"}})]),t._v(" "),a("h3",{attrs:{id:"读取设备属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取设备属性"}},[t._v("#")]),t._v(" 读取设备属性")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：第2步中回复平台属性值需要在第1步平台发送订阅以后的十秒钟内完成，否则平台会视为该次操作超时，导致读取属性值失败。")])]),t._v(" "),a("p",[t._v("1.平台告知设备（MQTT.fx）需要设备返回设备属性")]),t._v(" "),a("p",[t._v("在MQTT.fx上订阅消息，订阅物联网平台下发设备返回属性的Topic")]),t._v(" "),a("p",[t._v("i.  在MQTT.fx上，单击Subscribe。")]),t._v(" "),a("p",[t._v("ii. 输入平台获取设备属性会发送给网关的topic"),a("code",[t._v("/read-property")])]),t._v(" "),a("p",[t._v("iii.  单击Subscribe，订阅这个topic")]),t._v(" "),a("p",[a("img",{attrs:{src:s(99),alt:"订阅topic"}})]),t._v(" "),a("p",[t._v("iv. 平台发送订阅操作")]),t._v(" "),a("p",[t._v("单击设备实例页面中"),a("code",[t._v("test001")]),t._v("设备对应的"),a("code",[t._v("查看")]),t._v("链接")]),t._v(" "),a("p",[t._v("选择弹出框中"),a("code",[t._v("运行状态板块")])]),t._v(" "),a("p",[t._v("单击属性刷新")]),t._v(" "),a("p",[a("img",{attrs:{src:s(100),alt:"平台属性订阅操作"}})]),t._v(" "),a("p",[t._v("v. 订阅topic: "),a("code",[t._v("/read-property")]),t._v("对应的消息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(101),alt:"订阅topic"}})]),t._v(" "),a("blockquote",[a("p",[t._v("注意:\n复制好订阅该topic收到的消息中的messageId。此messageId将作为回复与平台设备属性的凭据之一\n复制好")])]),t._v(" "),a("p",[t._v("2.设备（MQTT.fx）回复平台设备属性值")]),t._v(" "),a("p",[t._v("在MQTT.fx上发送消息，发送平台所需要的设备属性值。")]),t._v(" "),a("p",[t._v("i.  在MQTT.fx上，单击 "),a("code",[t._v("Publish")]),t._v("。")]),t._v(" "),a("p",[t._v("ii.  输入一个回复平台属性值消息Topic和要发送的消息内容，单击Publish，向平台推送该消息。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(102),alt:"回复设备属性"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("messageId")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("第一步订阅平台topic“/read-property”所收到的messageId值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("deviceId")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备Id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当前时间戳")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("成功标识")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("properties")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('设备属性值对象。例如： { "threshold":"50"}')])])])]),t._v(" "),a("p",[t._v("该文档所使用的回复内容")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"messageId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第一步订阅平台topic“/read-property”所收到的messageId值"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deviceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1577710986304"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"threshold"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("iii. 平台收到Mqtt.fx推送的属性值")]),t._v(" "),a("p",[a("img",{attrs:{src:s(103),alt:"平台收到属性值"}})]),t._v(" "),a("p",[t._v("iv. 读取设备属性回复的日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(104),alt:"设备属性读取日志"}})]),t._v(" "),a("h4",{attrs:{id:"获取设备属性值完整演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取设备属性值完整演示"}},[t._v("#")]),t._v(" 获取设备属性值完整演示")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：在下图中，从在界面上刷新属性开始直到动图结束的所有操作，需要在十秒钟内完成。否则平台会视为该次操作超时，导致读取属性值失败。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(105),alt:"获取设备属性值"}})]),t._v(" "),a("h3",{attrs:{id:"设备事件上报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备事件上报"}},[t._v("#")]),t._v(" 设备事件上报")]),t._v(" "),a("p",[t._v("MQTT.fx 推送设备事件消息到平台")]),t._v(" "),a("p",[t._v("以火灾报警事件为例。")]),t._v(" "),a("p",[t._v("1.在MQTT.fx上，单击 "),a("code",[t._v("Publish")]),t._v("。")]),t._v(" "),a("p",[t._v("2.输入事件上报Topic和要发送的事件内容，单击Publish按钮，向平台推送该事件消息。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(34),alt:"设备事件上报"}})]),t._v(" "),a("p",[t._v("该文档使用的topic: "),a("code",[t._v("/chiefdata/push/fire_alarm/department/1/area/1/dev/test001")])]),t._v(" "),a("p",[t._v("该文档所使用的回复内容")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"devid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"烟感001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("105")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"a_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"未来科技城"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"b_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C2 栋"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"l_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12-05-201"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-06 16:28:50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alarm_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alarm_describe"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"火灾报警"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"event_count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("devid")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备Id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pname")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设备型号名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("aid")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区域Id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("a_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区域名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("b_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("建筑名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("l_name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("位置名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上报时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alarm_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("报警类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("alarm_describe")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("报警描述")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("event_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("事件 ID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("event_count")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("该事件上报次数")])])])]),t._v(" "),a("p",[t._v("3.事件上报设备日志")]),t._v(" "),a("p",[a("img",{attrs:{src:s(106),alt:"事件上报设备日志"}})]),t._v(" "),a("p",[t._v("4.事件上报内容")]),t._v(" "),a("p",[a("img",{attrs:{src:s(107),alt:"事件上报内容"}})])])}),[],!1,null,null,null);e.default=r.exports},81:function(t,e,s){t.exports=s.p+"assets/img/new-protocol.62798538.png"},82:function(t,e,s){t.exports=s.p+"assets/img/product-protocol.ce43d118.png"},83:function(t,e,s){t.exports=s.p+"assets/img/import-product.9fe2384b.png"},84:function(t,e,s){t.exports=s.p+"assets/img/device-product-unpublished.19290dcf.png"},85:function(t,e,s){t.exports=s.p+"assets/img/device-product-published.5cbc0ba9.png"},86:function(t,e,s){t.exports=s.p+"assets/img/device-product-info.c002c4de.gif"},87:function(t,e,s){t.exports=s.p+"assets/img/import-device.daef0f3a.png"},88:function(t,e,s){t.exports=s.p+"assets/img/device-instance-not-active.54f89ee3.png"},89:function(t,e,s){t.exports=s.p+"assets/img/device-instance-offline.b31b97b8.png"},90:function(t,e,s){t.exports=s.p+"assets/img/mqtt-config.185221d0.png"},91:function(t,e,s){t.exports=s.p+"assets/img/mqttfx-index.f248ccb7.png"},92:function(t,e,s){t.exports=s.p+"assets/img/mqtt-connection-general.9fc90d8c.png"},93:function(t,e,s){t.exports=s.p+"assets/img/mqtt-connection-user.650b63cd.png"},94:function(t,e,s){t.exports=s.p+"assets/img/mqtt-connection-tsl.a6c034c3.png"},95:function(t,e,s){t.exports=s.p+"assets/img/device-online.aa5ee081.png"},96:function(t,e,s){t.exports=s.p+"assets/img/device-online-log.5b8ce0a0.png"},97:function(t,e,s){t.exports=s.p+"assets/img/device-offline.a7dca543.png"},98:function(t,e,s){t.exports=s.p+"assets/img/device-offline-log.385747b4.png"},99:function(t,e,s){t.exports=s.p+"assets/img/mqtt-sub.8c9a93b2.png"}}]);