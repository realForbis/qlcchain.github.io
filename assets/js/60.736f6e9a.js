(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{309:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[t._v("#")]),t._v(" Account")]),t._v(" "),s("p",[t._v("创建 Account 模块对象")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewAccountApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("rpc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AccountApi\n")])])]),s("h2",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" Create")]),t._v(" "),s("p",[t._v("通过 seed 和 index 创建一个新的账户，返回账户的公钥和私钥")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AccountApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seedStr "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"forpublickey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forpublickey"}},[t._v("#")]),t._v(" ForPublicKey")]),t._v(" "),s("p",[t._v("通过账户公钥返回账户的地址")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AccountApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForPublicKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pubStr "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"publickey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publickey"}},[t._v("#")]),t._v(" PublicKey")]),t._v(" "),s("p",[t._v("通过账户地址返回账户公钥")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AccountApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PublicKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Address"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" \n")])])]),s("h2",{attrs:{id:"validate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validate"}},[t._v("#")]),t._v(" Validate")]),t._v(" "),s("p",[t._v("检测账户地址是否合法")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AccountApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Validate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);