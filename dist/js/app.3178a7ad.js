(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"05b1":function(e,t,r){"use strict";var n=r("3c53"),a=r.n(n);a.a},"3c53":function(e,t,r){},"3ee1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"app",components:{}},i=o,l=(r("034f"),r("2877")),c=Object(l["a"])(i,a,s,!1,null,null,null),u=c.exports,d=r("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",sticky:""}},[n("img",{staticClass:"image",attrs:{src:r("7081")}}),n("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Image Drop")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav"),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-nav-item",{attrs:{href:"#/"}},[e._v("Login")])],1)],1)],1)],1),n("br"),n("br"),n("b-container",[n("form",{staticClass:"register border border-dark p-5"},[n("p",{staticClass:"h1 mb-4"},[e._v("Register")]),n("b-alert",{attrs:{variant:"danger",dismissible:""},on:{dismissed:function(t){e.dupUser=!1}},model:{value:e.dupUser,callback:function(t){e.dupUser=t},expression:"dupUser"}},[e._v("\n          email is already in use "),n("br")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("br"),e.missingInfo?n("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}):e._e(),n("br"),n("button",{staticClass:"btn btn-info btn-block",on:{click:e.register}},[e._v(" Register ")]),n("br"),n("router-link",{attrs:{to:{name:"login"}}},[n("button",{staticClass:"btn btn-info btn-block"},[e._v(" Cancel ")])])],1)]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)},p=[],m=(r("96cf"),r("3b8d")),b=r("bc3a"),v=r.n(b),h=function(){return v.a.create({})},g={register:function(e){return h().post("register",e)},login:function(e){return h().post("login",e)},verifyEmail:function(e){return h().post("verifyEmail",e)},emailCode:function(e){return h().post("emailCode",e)},changePassword:function(e){return h().post("changePassword",e)},upload:function(e){return h().post("upload",e)},getFiles:function(e){return h().get("getFiles",e)},deleteFile:function(e){return h().delete("deleteFile",e)},transferFile:function(e){return h().post("transferFile",e)},verify:function(e){return h().post("verify",e)},bulkFileTransfer:function(e){return h().post("bulkFileTransfer",e)}},w={props:{},data:function(){return{missingInfo:!1,dupUser:!1,username:"",email:"",password:"",error:null}},methods:{register:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.missingInfo=!1,e.prev=1,e.next=4,g.register({username:this.username,email:this.email,password:this.password});case 4:if(t=e.sent,console.log("user",t.data),!t.data.error){e.next=10;break}return this.dupUser=!0,this.missingInfo=!1,e.abrupt("return",!1);case 10:this.$router.push({name:"login"}),e.next=19;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log("Error registering."),this.missingInfo=!0,this.dupUser=!1,this.error=e.t0.response.data.error;case 19:case"end":return e.stop()}}),e,this,[[1,13]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){}},_=w,y=(r("96c0"),Object(l["a"])(_,f,p,!1,null,"58168e56",null)),C=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",sticky:""}},[n("img",{staticClass:"image",attrs:{src:r("7081")}}),n("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Image Drop")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav"),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-nav-item",{attrs:{href:"#/register"}},[e._v("Register")])],1)],1)],1)],1)],1),n("br"),n("br"),n("b-container",[n("form",{staticClass:"login border border-dark p-5"},[n("p",{staticClass:"h1 mb-4"},[e._v("Login")]),n("br"),n("b-alert",{attrs:{variant:"danger",dismissible:""},on:{dismissed:function(t){e.loginFlag=!1}},model:{value:e.loginFlag,callback:function(t){e.loginFlag=t},expression:"loginFlag"}},[e._v("\n            Invalid login credentials\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e.missingInfo?n("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}):e._e(),n("br"),n("div",{staticClass:"d-flex justify-content-around"},[n("div",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"link"}},[e._v("Forgot password?")]),n("b-modal",{ref:"modal-1",attrs:{id:"modal-1",title:"Email Verification"}},[n("p",{staticClass:"my-4"},[e._v("Please verify your email")]),n("b-alert",{attrs:{variant:"danger",dismissible:""},on:{dismissed:function(t){e.alertBool2=!1}},model:{value:e.alertBool2,callback:function(t){e.alertBool2=t},expression:"alertBool2"}},[e._v("\n                  Email is not in use\n                ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("button",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit"},on:{click:e.verify}},[e._v("Verify")]),n("b-alert",{attrs:{variant:"info",dismissible:""},on:{dismissed:function(t){e.alertBool=!1}},model:{value:e.alertBool,callback:function(t){e.alertBool=t},expression:"alertBool"}},[e._v("\n                        Email was verified, reset code was sent\n                        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userCode,expression:"userCode"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"enter code"},domProps:{value:e.userCode},on:{input:function(t){t.target.composing||(e.userCode=t.target.value)}}}),n("button",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit"},on:{click:e.resetCode}},[e._v("submit")])]),e.successfulCode?n("div",[e._v("\n                  Enter your new password\n                  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{type:"password",placeholder:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit"},on:{click:e.changePassword}},[e._v("submit")])]):e._e(),n("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"})],1)],1)]),n("br"),n("br"),n("button",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit"},on:{click:e.login}},[e._v("Sign in")]),n("div",[n("router-link",{attrs:{to:{name:"register"}}},[n("a",{attrs:{href:""}},[e._v("Not a member? Click here to sign up.")])])],1)],1)]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)},x=[],F={data:function(){return{successfulCode:!1,userCode:0,storedCode:0,email:"",alertBool2:!1,alertBool:!1,missingInfo:!1,loginFlag:!1,username:"",password:"",error:null}},methods:{resetCode:function(){this.alertBool=!1,console.log(this.userCode,this.storedCode),this.userCode==this.storedCode?this.successfulCode=!0:this.successfulCode=!1},changePassword:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs["modal-1"].hide(),this.successfulCode=!1,e.prev=2,e.next=5,g.changePassword({email:this.email,password:this.password});case 5:if(t=e.sent,!t.data.error){e.next=9;break}return alert(t.data.error),e.abrupt("return",!1);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),this.error=e.t0.response.data.error;case 14:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),verify:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.verifyEmail({email:this.email});case 3:if(t=e.sent,!t.data.error){e.next=8;break}return this.alertBool2=!0,this.alertBool=!1,e.abrupt("return",!1);case 8:this.alertBool=!0,this.alertBool2=!1,this.storedCode=1e16*Math.random(),this.sendCode(),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),sendCode:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("calling sendCode"),e.prev=1,e.next=4,g.emailCode({email:this.email,code:this.storedCode});case 4:e.next=10;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log("caught an error in sendCode()"),this.error=e.t0.response.data.error;case 10:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.missingInfo=!1,e.prev=1,e.next=4,g.login({username:this.username,password:this.password});case 4:if(t=e.sent,console.log("res",t),!t.data.error){e.next=10;break}return this.loginFlag=!0,this.missingInfo=!1,e.abrupt("return",!1);case 10:this.$router.push({name:"homepage"}),e.next=19;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log("Error logging in."),this.missingInfo=!0,this.loginFlag=!1,this.error=e.t0.response.data.error;case 19:case"end":return e.stop()}}),e,this,[[1,13]])})));function t(){return e.apply(this,arguments)}return t}()}},O=F,j=(r("7256"),Object(l["a"])(O,k,x,!1,null,"24a9ddf1",null)),R=j.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",sticky:""}},[n("img",{staticClass:"image",attrs:{src:r("7081")}}),n("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Image Drop")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v("User")])]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(t){return e.updateCountdown()}}},[e._v("Verify")]),n("b-dropdown-item",{attrs:{href:"#/"}},[e._v("Sign Out")])],1)],1)],1)],1),n("br"),n("h1",[e._v(" Welcome ")]),n("br"),n("circular-count-down-timer",{ref:"countdown",attrs:{"initial-value":e.timer,"stroke-width":5,"seconds-stroke-color":"#f00","minutes-stroke-color":"#0ff","hours-stroke-color":"#0f0","underneath-stroke-color":"lightgrey","seconds-fill-color":"#00ffff66","minutes-fill-color":"#00ff0066","hours-fill-color":"#ff000066",size:200,padding:4,"hour-label":"hours","minute-label":"minutes","second-label":"seconds","show-second":!0,"show-minute":!0,"show-hour":!0,"show-negatives":!0,"notify-every":"second"},on:{finish:e.finished,update:e.updated}}),n("br"),n("UploadFile"),n("FilesTable"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)},I=[],$=(r("ac6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.message?r("div",[r("div",[e._v("\n      "+e._s(e.message)+"\n    ")])]):e._e(),r("form",{staticClass:"align",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[r("div",{staticClass:"field"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"files",staticClass:"file-input",attrs:{multiple:"",type:"file"},on:{change:e.selectFile}}),e._m(0)])])]),r("div",{staticClass:"field"},e._l(e.files,(function(t,n){return r("div",{key:n,staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[e._v(" "+e._s(t.name))])]),r("div",{staticClass:"level-right"},[r("div",{staticClass:"level-item"},[r("a",{staticClass:"delete",on:{click:function(t){return t.preventDefault(),e.files.splice(n,1)}}})])])])})),0),r("div",{staticClass:"field"},[r("button",{staticClass:"button is-info",attrs:{disabled:e.disable}},[e._v(" Send files to database ")])])])])}),E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),r("span",{staticClass:"file-label"},[e._v("\n              Choose a file...\n            ")])])}],N=r("75fc"),B=r("2ef0"),U={data:function(){return{files:[],message:"",error:!1,disable:!1}},components:{},methods:{selectFile:function(){var e=this.$refs.files.files;this.files=[].concat(Object(N["a"])(this.files),Object(N["a"])(e)),this.error=!1,this.message="",console.log(this.files)},sendFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.disable=!0,t=new FormData,Object(B["forEach"])(this.files,(function(e){t.append("files",e)})),r=this.files,console.log("The files: ",r),this.$root.$emit("files",r),e.prev=6,e.next=9,v.a.post("/upload",t);case 9:this.message="Files have been uploaded.",this.files=[],location.reload(),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](6),this.message=e.t0.response.data.error,this.error=!0;case 18:case"end":return e.stop()}}),e,this,[[6,14]])})));function t(){return e.apply(this,arguments)}return t}()}},T=U,S=(r("fe65"),Object(l["a"])(T,$,E,!1,null,"43a20129",null)),D=S.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v(" Your Images ")]),r("div",{staticClass:"table"},[r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config},scopedSlots:e._u([{key:"recipient",fn:function(t){return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.row.contact_name,expression:"props.row.contact_name"}],attrs:{placeholder:"Input recipients email"},domProps:{value:t.row.contact_name},on:{input:function(r){r.target.composing||e.$set(t.row,"contact_name",r.target.value)}}})]}},{key:"open_modal",fn:function(t){return[r("button",{staticClass:"btn btn-primary",on:{click:function(r){return e.viewFile(t.row)}}},[e._v("View Image")])]}},{key:"transfer_file",fn:function(t){return[r("button",{staticClass:"btn btn-primary",on:{click:function(r){return e.open(t.row)}}},[e._v("Transfer Image")])]}},{key:"delete_file",fn:function(t){return[r("button",{staticClass:"btn btn-danger",on:{click:function(r){return e.deleteFile(t.row)}}},[e._v("Delete")])]}}])},[r("template",{slot:"sort-asc-icon"},[r("i",{staticClass:"fa fa-sort-up"})]),r("template",{slot:"sort-desc-icon"},[r("i",{staticClass:"fa fa-sort-down"})]),r("template",{slot:"no-sort-icon"},[r("i",{staticClass:"fa fa-sort"})])],2),r("modal",{attrs:{name:e.modalName,height:"auto",width:"1000px",scrollable:!0},on:{"before-open":e.beforeOpen}},[r("div",[r("img",{attrs:{src:e.fileUrl}})])]),r("modal",{attrs:{name:e.modal2Name,height:"auto",width:"1000px",scrollable:!0},on:{"before-open":e.beforeOpen}},[r("br"),r("div",[r("h4",[e._v("   You are about to send the following file: "+e._s(e.sendingFile)+" ")]),r("br"),r("h4",[e._v("   Intended Recipient: "+e._s(e.recipient)+"  ")]),r("br"),r("h5",[e._v("   Please confirm below")]),r("br"),r("br"),e._v("\n\n           "),r("button",{staticClass:"btn btn-success",on:{click:function(t){return e.transferFile()}}},[e._v(" Confirm")]),e._v("\n           "),r("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.close()}}},[e._v(" Cancel ")])]),r("br")])],1)])},M=[],V=(r("7f7f"),r("12f9")),z={name:"FilesTable",data:function(){return{form:{rep:[]},n:0,userId:0,row:"",sendingFile:"",recipient:"",fileUrl:"",modalName:"files-modal",modal2Name:"send-modal",rows:[],columns:[{label:"Image Name",name:"name",filter:{type:"simple",placeholder:"Search Image Names"},sort:!0},{label:"Date uploaded",name:"created_at",sort:!0,filter:{type:"simple",placeholder:"Search Dates uploaded"}},{label:"Intended Recipient",name:"recipient",sort:!0},{label:"",name:"open_modal",sort:!1},{label:"",name:"transfer_file",sort:!1},{label:"",name:"delete_file",sort:!1}],config:{pagination:!1,checkbox_rows:!1,rows_selectable:!0,global_search:{visibility:!1},per_page:20,per_page_options:[20,40,60],show_refresh_button:!1,show_reset_button:!1}}},created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getFiles({user_id:this.userId});case 3:return t=e.sent,this.rows=t.data,e.abrupt("return",t);case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),props:{msg:String},components:{VueBootstrap4Table:V["a"]},methods:{deleteFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=confirm("Are you sure you want to permanently delete this file?"),!r){e.next=6;break}return e.next=4,g.deleteFile({data:t});case 4:e.next=7;break;case 6:return e.abrupt("return",!1);case 7:location.reload();case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),transferFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.transferFile({data:this.row});case 2:this.$modal.hide("send-modal");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),open:function(e){if(null===e.contact_name||""===e.contact_name)return!1;this.row=e,this.fileUrl=e.amazon_url,this.sendingFile=e.name,this.recipient=e.contact_name,this.$modal.show("send-modal",{row:e})},close:function(){this.$modal.hide("send-modal")},viewFile:function(e){this.fileUrl=e.amazon_url,this.$modal.show("files-modal")},beforeOpen:function(){}}},H=z,J=(r("5883"),Object(l["a"])(H,L,M,!1,null,"639e6c7d",null)),Y=J.exports;function A(){var e=g.verify({});Promise.resolve(e);var t=3600;return t}var W=A(),q={components:{UploadFile:D,FilesTable:Y},data:function(){return{timer:W,status:"",emailList:[],files:""}},methods:{finished:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("finished",this.files),e.t0=regeneratorRuntime.keys(this.files);case 2:if((e.t1=e.t0()).done){e.next=9;break}return t=e.t1.value,console.log(this.files[t]),e.next=7,g.bulkFileTransfer({data:this.files[t]});case 7:e.next=2;break;case 9:this.$router.push({name:"login"});case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updated:function(e){this.status=3600-e.value},updateCountdown:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.countdown.updateTime(this.status),e.next=3,g.verify({});case 3:t=e.sent,console.log("response",t),t.data.payload.exp-t.data.payload.iat,r=new Date(1e3*t.data.payload.exp),console.log("expires at: ",r);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.getFiles({});case 2:t=e.sent,this.files=t.data,r=t.data.map((function(e){return{email:e.contact_name}})),this.emailList=r,console.log(this.emailList),console.log(t);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},G=q,K=(r("05b1"),Object(l["a"])(G,P,I,!1,null,"05621234",null)),Q=K.exports;n["default"].use(d["a"]);var X=new d["a"]({routes:[{path:"/",name:"login",component:R},{path:"/register",name:"register",component:C},{path:"/homepage",name:"homepage",component:Q}]}),Z=r("5f5b"),ee=r("1881"),te=r.n(ee),re=r("8f48"),ne=r.n(re);r("f9e3"),r("2dd8");n["default"].use(Z["a"]),n["default"].use(te.a),n["default"].use(ne.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(u)},router:X}).$mount("#app")},5883:function(e,t,r){"use strict";var n=r("3ee1"),a=r.n(n);a.a},"64a9":function(e,t,r){},7081:function(e,t,r){e.exports=r.p+"img/image1.04874a81.png"},7256:function(e,t,r){"use strict";var n=r("f019"),a=r.n(n);a.a},"96c0":function(e,t,r){"use strict";var n=r("f98d"),a=r.n(n);a.a},f019:function(e,t,r){},f116:function(e,t,r){},f98d:function(e,t,r){},fe65:function(e,t,r){"use strict";var n=r("f116"),a=r.n(n);a.a}});
//# sourceMappingURL=app.3178a7ad.js.map