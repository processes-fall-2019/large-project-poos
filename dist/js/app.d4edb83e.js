(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00e2":function(e,t,r){},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"0c49":function(e,t,r){"use strict";var a=r("9190"),n=r.n(a);n.a},"115f":function(e,t,r){"use strict";var a=r("00e2"),n=r.n(a);n.a},3497:function(e,t,r){"use strict";var a=r("34bf"),n=r.n(a);n.a},"34bf":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"app",components:{}},i=o,l=(r("034f"),r("2877")),c=Object(l["a"])(i,n,s,!1,null,null,null),u=c.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("img",{staticClass:"image",attrs:{src:r("7081")}}),a("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Document Drop")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav"),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-nav-item",{attrs:{href:"#/"}},[e._v("Login")])],1)],1)],1)],1),a("br"),a("br"),a("b-container",[a("form",{staticClass:"register border border-dark p-5"},[a("p",{staticClass:"h1 mb-4"},[e._v("Register")]),a("b-alert",{attrs:{variant:"danger",dismissible:""},on:{dismissed:function(t){e.dupUser=!1}},model:{value:e.dupUser,callback:function(t){e.dupUser=t},expression:"dupUser"}},[e._v("\n          email is already in use "),a("br"),a("a",{attrs:{href:""}},[e._v("Forgot password?")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("br"),a("br"),e.missingInfo?a("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}):e._e(),a("br"),a("button",{staticClass:"btn btn-info btn-block",on:{click:e.register}},[e._v(" Register ")]),a("br"),a("router-link",{attrs:{to:{name:"login"}}},[a("button",{staticClass:"btn btn-info btn-block"},[e._v(" Cancel ")])])],1)]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)},d=[],m=(r("96cf"),r("3b8d")),b=r("bc3a"),v=r.n(b),g=function(){return v.a.create({})},h={register:function(e){return g().post("register",e)},login:function(e){return g().post("login",e)},upload:function(e){return g().post("upload",e)},getFiles:function(e){return g().get("getFiles",e)},deleteFile:function(e){return g().delete("deleteFile",e)}},_={props:{},data:function(){return{missingInfo:!1,dupUser:!1,username:"",email:"",password:"",error:null}},methods:{register:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.missingInfo=!1,e.prev=1,e.next=4,h.register({username:this.username,email:this.email,password:this.password});case 4:if(t=e.sent,console.log("user",t.data),!t.data.error){e.next=10;break}return this.dupUser=!0,this.missingInfo=!1,e.abrupt("return",!1);case 10:this.$router.push({name:"login"}),alert("Hello "+this.username+" your user was successfully registered!"),e.next=20;break;case 14:e.prev=14,e.t0=e["catch"](1),console.log("Error registering."),this.missingInfo=!0,this.dupUser=!1,this.error=e.t0.response.data.error;case 20:case"end":return e.stop()}}),e,this,[[1,14]])})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){}},w=_,y=(r("0c49"),Object(l["a"])(w,f,d,!1,null,"6e2606b0",null)),C=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("img",{staticClass:"image",attrs:{src:r("7081")}}),a("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Document Drop")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav"),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-nav-item",{attrs:{href:"#/register"}},[e._v("Register")])],1)],1)],1)],1)],1),a("br"),a("br"),a("b-container",[a("form",{staticClass:"login border border-dark p-5"},[a("p",{staticClass:"h1 mb-4"},[e._v("Login")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control mb-4",attrs:{type:"",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control mb-4",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("div",{staticClass:"error",domProps:{innerHTML:e._s(e.error)}}),a("br"),a("div",{staticClass:"d-flex justify-content-around"},[a("div",[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"defaultLoginFormRemember"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"defaultLoginFormRemember"}},[e._v("Remember me")])])]),e._v("\n                 \n            "),a("div",[a("a",{attrs:{href:""}},[e._v("Forgot password?")])])]),a("br"),a("br"),a("button",{staticClass:"btn btn-info btn-block my-4",attrs:{type:"submit"},on:{click:e.login}},[e._v("Sign in")]),a("div",[a("router-link",{attrs:{to:{name:"register"}}},[a("a",{attrs:{href:""}},[e._v("Not a member? Click here to sign up.")])])],1)])]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)},k=[],O={data:function(){return{username:"",password:"",error:null}},methods:{login:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("hi"),e.prev=1,e.next=4,h.login({username:this.username,password:this.password});case 4:if(t=e.sent,console.log("res",t),!t.data.error){e.next=9;break}return alert("User does not exist."),e.abrupt("return",!1);case 9:this.$router.push({name:"homepage"}),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),console.log("Error logging in."),this.error=e.t0.response.data.error;case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));function t(){return e.apply(this,arguments)}return t}()}},F=O,j=(r("aa9d"),Object(l["a"])(F,x,k,!1,null,"549a5982",null)),R=j.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",sticky:""}},[a("img",{staticClass:"image",attrs:{src:r("7081")}}),a("b-navbar-brand",{staticClass:"title",attrs:{href:"#"}},[e._v(" Document Drop")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav"),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("em",[e._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#/"}},[e._v("Sign Out")])],1)],1)],1)],1),a("br"),a("h1",[e._v(" Welcome ")]),a("br"),a("DropZone"),a("UploadFile"),a("FilesTable"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)},U=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.message?r("div",[r("div",[e._v("\n      "+e._s(e.message)+"\n    ")])]):e._e(),r("form",{staticClass:"align",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[r("div",{staticClass:"field"},[r("div",{staticClass:"file is-boxed is-primary"},[r("label",{staticClass:"file-label"},[r("input",{ref:"files",staticClass:"file-input",attrs:{multiple:"",type:"file"},on:{change:e.selectFile}}),e._m(0)])])]),r("div",{staticClass:"field"},e._l(e.files,(function(t,a){return r("div",{key:a,staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[e._v(" "+e._s(t.name))])]),r("div",{staticClass:"level-right"},[r("div",{staticClass:"level-item"},[r("a",{staticClass:"delete",on:{click:function(t){return t.preventDefault(),e.files.splice(a,1)}}})])])])})),0),r("div",{staticClass:"field"},[r("button",{staticClass:"button is-info",attrs:{disabled:e.disable}},[e._v(" Send files to database ")])])])])},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"file-cta"},[r("span",{staticClass:"file-icon"},[r("i",{staticClass:"fas fa-upload"})]),r("span",{staticClass:"file-label"},[e._v("\n              Choose a file...\n            ")])])}],S=r("75fc"),E=r("2ef0"),N={data:function(){return{files:[],message:"",error:!1,disable:!1}},components:{},methods:{selectFile:function(){var e=this.$refs.files.files;this.files=[].concat(Object(S["a"])(this.files),Object(S["a"])(e)),this.error=!1,this.message="",console.log(this.files)},sendFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.disable=!0,t=new FormData,Object(E["forEach"])(this.files,(function(e){t.append("files",e)})),r=this.files,console.log("The files: ",r),this.$root.$emit("files",r),e.prev=6,e.next=9,v.a.post("/upload",t);case 9:this.message="Files have been uploaded.",this.files=[],location.reload(),e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](6),this.message=e.t0.response.data.error,this.error=!0;case 18:case"end":return e.stop()}}),e,this,[[6,14]])})));function t(){return e.apply(this,arguments)}return t}()}},T=N,I=(r("fe65"),Object(l["a"])(T,$,D,!1,null,"43a20129",null)),L=I.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v(" Your Files ")]),r("div",{staticClass:"table"},[r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config},scopedSlots:e._u([{key:"open_modal",fn:function(t){return[r("button",{staticClass:"btn btn-primary",on:{click:function(r){return e.viewFile(t.row)}}},[e._v("View File")])]}},{key:"delete_file",fn:function(t){return[r("button",{staticClass:"btn btn-danger",on:{click:function(r){return e.deleteFile(t.row)}}},[e._v("Delete")])]}}])},[r("template",{slot:"sort-asc-icon"},[r("i",{staticClass:"fa fa-sort-up"})]),r("template",{slot:"sort-desc-icon"},[r("i",{staticClass:"fa fa-sort-down"})]),r("template",{slot:"no-sort-icon"},[r("i",{staticClass:"fa fa-sort"})])],2),r("modal",{attrs:{name:e.modalName,height:"auto",width:"1000px",scrollable:!0},on:{"before-open":e.beforeOpen}},[r("div",[r("img",{attrs:{src:e.fileUrl}})])])],1)])},H=[],z=r("12f9"),J={name:"FilesTable",data:function(){return{userId:0,fileUrl:"",modalName:"files-modal",rows:[],columns:[{label:"File Name",name:"name",filter:{type:"simple",placeholder:"Search File Names"},sort:!0},{label:"Date uploaded",name:"created_at",sort:!0,filter:{type:"simple",placeholder:"Search Dates uploaded"}},{label:"Intended Recipient",name:"contact_name",filter:{type:"simple",placeholder:"Search Intended Recipients"},sort:!0},{label:"",name:"open_modal",sort:!1},{label:"",name:"delete_file",sort:!1}],config:{pagination:!1,checkbox_rows:!1,rows_selectable:!0,global_search:{visibility:!1},per_page:20,per_page_options:[20,40,60],show_refresh_button:!1,show_reset_button:!1}}},created:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.getFiles({user_id:this.userId});case 3:return t=e.sent,console.log("the resssssy",t),this.rows=t.data,e.abrupt("return",t);case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0.response.data.error;case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),props:{msg:String},components:{VueBootstrap4Table:z["a"]},methods:{deleteFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=confirm("Are you sure you want to permanently delete this file?"),!r){e.next=6;break}return e.next=4,h.deleteFile({data:t});case 4:e.next=7;break;case 6:return e.abrupt("return",!1);case 7:location.reload();case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),viewFile:function(e){console.log(e),this.fileUrl=e.amazon_url,this.$modal.show("files-modal",{row:e})},beforeOpen:function(){}}},V=J,Z=(r("115f"),Object(l["a"])(V,M,H,!1,null,"16270874",null)),A=Z.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.message?r("div",[r("div",[e._v("\n      "+e._s(e.message)+"\n    ")])]):e._e(),r("form",{attrs:{enctype:"multipart/form-data"}},[r("div",{staticClass:"dropzone"},[r("input",{ref:"files",staticClass:"input-field",attrs:{type:"file"},on:{change:e.sendFile}}),e.uploading?e._e():r("p",{staticClass:"call-to-action"},[e._v("\n        Or drag and drop a file onto here to upload it directly...\n      ")]),e.uploading?r("p",{staticClass:"progress-bar"}):e._e()])])])},W=[],Y={data:function(){return{files:[],message:"",error:!1,uploading:!1}},methods:{sendFile:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.files.files,this.files=[].concat(Object(S["a"])(this.files),Object(S["a"])(t)),r=new FormData,Object(E["forEach"])(this.files,(function(e){r.append("files",e)})),console.log(r),e.prev=5,e.next=8,v.a.post("/upload",r);case 8:this.message="Files have been uploaded.",this.files=[],e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](5),this.message=e.t0.response.data.error,this.error=!0;case 16:case"end":return e.stop()}}),e,this,[[5,12]])})));function t(){return e.apply(this,arguments)}return t}()}},q=Y,G=(r("d95c"),Object(l["a"])(q,B,W,!1,null,"260b80a6",null)),K=G.exports,Q={components:{UploadFile:L,FilesTable:A,DropZone:K},data:function(){return{}},methods:{}},X=Q,ee=(r("3497"),Object(l["a"])(X,P,U,!1,null,"aebd4f62",null)),te=ee.exports;a["default"].use(p["a"]);var re=new p["a"]({routes:[{path:"/",name:"login",component:R},{path:"/register",name:"register",component:C},{path:"/homepage",name:"homepage",component:te}]}),ae=r("5f5b"),ne=r("1881"),se=r.n(ne);r("f9e3"),r("2dd8");a["default"].use(ae["a"]),a["default"].use(se.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(u)},router:re}).$mount("#app")},"64a9":function(e,t,r){},"69c7":function(e,t,r){},7081:function(e,t,r){e.exports=r.p+"img/image1.04874a81.png"},"8e4a":function(e,t,r){},9190:function(e,t,r){},aa9d:function(e,t,r){"use strict";var a=r("69c7"),n=r.n(a);n.a},d95c:function(e,t,r){"use strict";var a=r("8e4a"),n=r.n(a);n.a},f116:function(e,t,r){},fe65:function(e,t,r){"use strict";var a=r("f116"),n=r.n(a);n.a}});
//# sourceMappingURL=app.d4edb83e.js.map