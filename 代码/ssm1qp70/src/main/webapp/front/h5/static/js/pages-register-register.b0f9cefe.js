(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{3735:function(e,i,t){"use strict";t.r(i);var r=t("e3ee"),n=t("48c7");for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);t("5b89");var a,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"4e8ec9c4",null,!1,r["a"],a);i["default"]=u.exports},4534:function(e,i,t){var r=t("68f4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("265119e4",r,!0,{sourceMap:!1,shadowMode:!1})},"48c7":function(e,i,t){"use strict";t.r(i);var r=t("4e2d"),n=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(i,e,(function(){return r[e]}))}(o);i["default"]=n.a},"4e2d":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("28a5"),t("96cf");var n=r(t("3b8d")),o={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,xueshengbanjiOptions:[],xueshengbanjiIndex:0,jiaoshixingbieOptions:[],jiaoshixingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=[],t=uni.getStorageSync("loginTable"),this.tableName=t,"xuesheng"==this.tableName&&(this.xueshengxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xueshengxingbieOptions[0]),"xuesheng"!=this.tableName){e.next=10;break}return e.next=7,this.$api.option("banjileixing","fenlei",{});case 7:i=e.sent,this.xueshengbanjiOptions=i.data,this.ruleForm.banji=this.xueshengbanjiOptions[0];case 10:"jiaoshi"==this.tableName&&(this.jiaoshixingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiaoshixingbieOptions[0]),this.styleChange();case 12:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},xueshengbanjiChange:function(e){this.xueshengbanjiIndex=e.target.value,this.ruleForm.banji=this.xueshengbanjiOptions[this.xueshengbanjiIndex]},jiaoshixingbieChange:function(e){this.jiaoshixingbieIndex=e.target.value,this.ruleForm.xingbie=this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xuehao||"xuesheng"!=this.tableName){e.next=3;break}return this.$utils.msg("学号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"xuesheng"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.xingming||"xuesheng"!=this.tableName){e.next=9;break}return this.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("xuesheng"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=12;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 12:if("xuesheng"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 15:if("xuesheng"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=18;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 18:if(this.ruleForm.jiaoshigonghao||"jiaoshi"!=this.tableName){e.next=21;break}return this.$utils.msg("教师工号不能为空"),e.abrupt("return");case 21:if(this.ruleForm.mima||"jiaoshi"!=this.tableName){e.next=24;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 24:if(this.ruleForm.jiaoshixingming||"jiaoshi"!=this.tableName){e.next=27;break}return this.$utils.msg("教师姓名不能为空"),e.abrupt("return");case 27:if("jiaoshi"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=30;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 30:if("jiaoshi"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=33;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 33:if("jiaoshi"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=36;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 36:return e.next=38,this.$api.register("".concat(this.tableName),this.ruleForm);case 38:this.$utils.msgBack("注册成功");case 40:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}()}};i.default=o},"5b89":function(e,i,t){"use strict";var r=t("4534"),n=t.n(r);n.a},"68f4":function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4e8ec9c4]{padding:%?100?%}.content[data-v-4e8ec9c4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-4e8ec9c4]{text-align:center}.logo uni-image[data-v-4e8ec9c4]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-4e8ec9c4]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-4e8ec9c4]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-4e8ec9c4]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-4e8ec9c4]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-4e8ec9c4]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-4e8ec9c4]{color:#b49950}.picker-select-input[data-v-4e8ec9c4]{line-height:%?88?%}',""]),e.exports=i},e3ee:function(e,i,t){"use strict";var r,n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"logo"},[t("v-uni-image",{style:{boxShadow:"0 0 16rpx #59f43e",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"2rpx",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20201024/ed5e326ca66f403aa3197b5fbb4ec733.jpg",mode:"aspectFill"}})],1),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(i){e.$set(e.ruleForm,"xuehao",i)},expression:"ruleForm.xuehao"}})],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.xueshengxingbieIndex,range:e.xueshengxingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xueshengxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.xueshengbanjiIndex,range:e.xueshengbanjiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xueshengbanjiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.banji?e.ruleForm.banji:"请选择班级"))])],1)],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(i){e.$set(e.ruleForm,"shouji",i)},expression:"ruleForm.shouji"}})],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(i){e.$set(e.ruleForm,"youxiang",i)},expression:"ruleForm.youxiang"}})],1):e._e(),"xuesheng"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(i){e.$set(e.ruleForm,"shenfenzheng",i)},expression:"ruleForm.shenfenzheng"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"教师工号"},model:{value:e.ruleForm.jiaoshigonghao,callback:function(i){e.$set(e.ruleForm,"jiaoshigonghao",i)},expression:"ruleForm.jiaoshigonghao"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(i){e.$set(e.ruleForm,"mima",i)},expression:"ruleForm.mima"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"教师姓名"},model:{value:e.ruleForm.jiaoshixingming,callback:function(i){e.$set(e.ruleForm,"jiaoshixingming",i)},expression:"ruleForm.jiaoshixingming"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-picker",{attrs:{value:e.jiaoshixingbieIndex,range:e.jiaoshixingbieOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.jiaoshixingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"职位"},model:{value:e.ruleForm.zhiwei,callback:function(i){e.$set(e.ruleForm,"zhiwei",i)},expression:"ruleForm.zhiwei"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(i){e.$set(e.ruleForm,"shouji",i)},expression:"ruleForm.shouji"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(i){e.$set(e.ruleForm,"youxiang",i)},expression:"ruleForm.youxiang"}})],1):e._e(),"jiaoshi"==e.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column"},[t("v-uni-input",{staticClass:"uni-input",style:{borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"16rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"身份证"},model:{value:e.ruleForm.shenfenzheng,callback:function(i){e.$set(e.ruleForm,"shenfenzheng",i)},expression:"ruleForm.shenfenzheng"}})],1):e._e(),t("v-uni-view",[t("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(23, 152, 242, 1)",borderRadius:"20rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},o=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return r}))}}]);