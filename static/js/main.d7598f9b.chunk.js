(this["webpackJsonpaha-admin"]=this["webpackJsonpaha-admin"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(17),o=n.n(r),c=(n(179),n(180),n(30)),s=n(8),l=n(260),d=n(265),p=n(261),m=n(153),b=n(120),j=n(82),h=n(73),g=n(10),u=n(95),x=n(212),f=n(3),O=n(139),v=n(129),y=Object(v.a)((function(e){return Object(O.a)({root:{position:"relative"},childrenWrapper:{"&$loading":{opacity:.5}},progressWrapper:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none",justifyContent:"center",alignItems:"center",zIndex:e.zIndex.modal,"&$loading":{display:"flex"}},loading:{}})}),{classNamePrefix:"Spin"}),N=n(2),w=["children","className","color","loading","wrapperClassName"],C=function(e){var t=e.children,n=e.className,a=e.color,i=void 0===a?"secondary":a,r=e.loading,o=e.wrapperClassName,s=Object(u.a)(e,w),l=y();return Object(N.jsxs)("div",{className:Object(f.a)(l.root,n),children:[Object(N.jsx)("div",{className:Object(f.a)(l.childrenWrapper,o,Object(g.a)({},l.loading,r)),children:t}),Object(N.jsx)("div",{className:Object(f.a)(l.progressWrapper,Object(g.a)({},l.loading,r)),children:Object(N.jsx)(x.a,Object(c.a)(Object(c.a)({},s),{},{color:i}))})]})},k=Object(a.memo)(C);k.displayName="Spin";var S=k,F=n(119),I=n(270),L=n(258),B=n(78),T=n(144),A=n.n(T),D=n(145),W=n.n(D),z=Object(v.a)((function(e){return Object(O.a)({root:{"& .MuiInputBase-root":{fontSize:"16px!important"}},label:{fontSize:"16px!important"}})}),{classNamePrefix:"Topup"}),M=["label","name","value","error","inputProps","onChange","showPassword","setShowPassword"],P=function(e){var t=e.label,n=(e.name,e.value,e.error,e.inputProps),a=e.onChange,i=e.showPassword,r=e.setShowPassword,o=Object(u.a)(e,M),s=z();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(F.a,{htmlFor:"password",className:s.label,children:t}),Object(N.jsx)(I.a,Object(c.a)(Object(c.a)({},o),{},{className:s.root,id:"password",type:i?"text":"password",inputProps:n,onChange:a,endAdornment:Object(N.jsx)(L.a,{position:"end",children:Object(N.jsx)(B.a,{"aria-label":"toggle password visibility",onClick:function(e){r()},edge:"end",children:i?Object(N.jsx)(A.a,{}):Object(N.jsx)(W.a,{})})}),labelWidth:70}))]})},H=Object(a.memo)(P);H.displayName="PasswordInput";var R=H,G=n(14),E=n.n(G),q=n(28),U=n(150),_=n(108),X=n.n(_),$=n(44),J=n(45),V=function(){function e(){Object($.a)(this,e),this.listeners=[]}return Object(J.a)(e,[{key:"addListener",value:function(e){this.listeners.push(e)}},{key:"raiseEvent",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.listeners.forEach((function(e){return null===e||void 0===e?void 0:e.apply(void 0,t)}))}},{key:"removeListener",value:function(e){var t=this.listeners.findIndex((function(t){return t===e}));t>-1&&this.listeners.splice(t,1)}}]),e}(),Y=new(function(){function e(){Object($.a)(this,e),this.updateEventListener=new V}return Object(J.a)(e,[{key:"addListener",value:function(e){this.updateEventListener.addListener(e)}},{key:"removeListener",value:function(e){this.updateEventListener.removeListener(e)}},{key:"notify",value:function(e,t){this.updateEventListener.raiseEvent(e,t)}}]),e}()),K=function(){var e=Object(q.a)(E.a.mark((function e(t){var n,a,i,r,o,c,s,l=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,a=void 0===n?{}:n,i=t.method,r=void 0===i?"GET":i,o=t.url,c=void 0===o?"":o,l.length>1&&void 0!==l[1]&&l[1],!(l.length>2&&void 0!==l[2])||l[2],s={headers:{Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},url:c,method:r,data:a},console.log(a),e.prev=6,e.next=9,X.a.request(s).then((function(e){if(200===e.status)return e.data}));case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(6),Y.notify("T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang","error"),console.log("baseRequest error11 >>>",e.t0.response),e.abrupt("return");case 17:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}(),Q=function(e){return K({url:"http://128.199.162.192:4000/oauth/login/admin",data:e,method:"POST"})},Z=function(){var e=Object(q.a)(E.a.mark((function e(t){var n,a,i,r,o,c,s,l,d,p,m;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,a=void 0===n?{}:n,i=t.method,r=void 0===i?"GET":i,o=t.url,c=void 0===o?"":o,s=t.params,l=void 0===s?"":s,d=c,p=localStorage.getItem("token"),m={headers:{Accept:"*/*","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",token:p},url:d,method:r,data:a,params:l},console.log(m),e.prev=5,e.next=8,X.a.request(m).then((function(e){if(200===e.status)return e.data}));case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(5),Y.notify("L\u1ed7i h\u1ec7 th\u1ed1ng","error"),console.log("baseRequest error11 >>>",e.t0.response),e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t){return e.apply(this,arguments)}}(),ee=Object(v.a)((function(e){var t=e.spacing;return Object(O.a)({paper:{marginTop:"10vh",display:"flex",flexDirection:"column",alignItems:"center"},root:{display:"flex",flexDirection:"column",alignItems:"stretch",maxWidth:550,border:"1px solid #DFDFDF",padding:"30px 40px"},title:{color:"black",fontSize:"20px",lineHeight:1.25,fontWeight:"bold",letterSpacing:"0.15px",padding:"22px 0 0 ",marginLeft:"10px"},form:{marginTop:t(3)},formGroup:{marginTop:t(3)},submit:{minWidth:370,marginTop:t(4),backgroundColor:"#F5AF19"},momoLogo:{width:"50px",height:"50px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flex:"0 0 46px"},errorMgs:{margin:"5px 0"},input:{"& .MuiInputBase-root":{fontSize:"16px!important"},"& .MuiFormLabel-root":{fontSize:"16px!important"}},page:{maxWidth:"850px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",padding:t(10,0)},container:{minHeight:"100vh",width:"100%"},sectionWrap:{display:"flex",flexDirection:"column",flex:1,backgroundColor:"white",overflow:"auto"},content:{flexGrow:1}})}),{classNamePrefix:"Login"}),te=n.p+"static/media/logo.d97c6a08.png",ne=n(24),ae=(n(214),n(259)),ie=Object(v.a)((function(e){return Object(O.a)({grow:{gridColumn:"span 2",zIndex:1},momoLogo:{width:"50px",height:"50px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flex:"0 0 46px",padding:"0px 10px 0px 25px",color:"white"},appBar:{padding:e.spacing(2,3),display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",height:64,backgroundColor:"#F5AF19"},sectionDesktop:Object(g.a)({},e.breakpoints.up("md"),{display:"flex"}),profileBtn:{borderRadius:0,fontSize:14,color:"white",backgroundColor:"#F5AF19","&:hover":{backgroundColor:"#F5AF19",boxShadow:"none"},svg:{marginLeft:e.spacing(1)}},iconProfile:{backgroundColor:"white",color:"white"},menuItem:{padding:e.spacing(2),margin:0,borderRadius:0,"& p":{padding:0,margin:0},"& button":{padding:0,margin:0,paddingLeft:16},"&:hover":{backgroundColor:"#F5AF19"}},headerLeft:{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"},showSidebarBtn:{padding:e.spacing(1),borderRadius:4},btnIcon:{color:"grey"},line:{backgroundColor:"grey",width:1,height:40,margin:e.spacing(0,2)},logout:{marginLeft:e.spacing(2),borderRadius:4},iconLogout:{minWidth:35}})}),{classNamePrefix:"Header"});var re=function(){var e=ie();return Object(N.jsx)(d.a,{className:e.grow,children:Object(N.jsx)(ae.a,{position:"static",className:e.appBar,elevation:0,children:Object(N.jsx)(d.a,{className:e.headerLeft,children:Object(N.jsx)("div",{className:e.momoLogo,children:Object(N.jsx)("h4",{children:"Website ADMIN"})})})})})},oe=Object(a.memo)(re);oe.displayName="HeaderLogin";var ce=oe,se=function(){var e=ee(),t=function(){var e=Object(U.a)(),t=e.handleSubmit,n=e.register,i=e.control,r=e.formState.errors;return{register:n,handleLogin:Object(a.useMemo)((function(){return t(function(){var e=Object(q.a)(E.a.mark((function e(t){var n,a,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:if(n=e.sent,console.log(n),!n){e.next=10;break}return a=String(n.access_token)||"",i=String(n.expired_at),localStorage.setItem("token",a),localStorage.setItem("expiredAt",JSON.stringify(i)),e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),errors:r,control:i}}(),n=t.register,i=t.handleLogin,r=t.errors,o=Object(a.useState)(!1),g=Object(s.a)(o,2),u=g[0],x=g[1],f=Object(ne.f)().push;return Object(a.useEffect)((function(){localStorage.getItem("token")&&localStorage.getItem("expiredAt")&&f("/dashboard")}),[localStorage.getItem("token")]),Object(N.jsx)(l.a,{disableGutters:!0,className:e.container,maxWidth:!1,children:Object(N.jsxs)("section",{className:e.sectionWrap,children:[Object(N.jsx)(ce,{}),Object(N.jsx)("main",{className:e.content,children:Object(N.jsx)(l.a,{className:e.page,children:Object(N.jsx)("div",{className:e.paper,children:Object(N.jsxs)(d.a,{className:e.root,children:[Object(N.jsxs)(p.a,{container:!0,children:[Object(N.jsx)(p.a,{item:!0,children:Object(N.jsx)("a",{className:e.momoLogo,href:"/",children:Object(N.jsx)("img",{src:te,alt:"logo",className:e.momoLogo})})}),Object(N.jsx)(p.a,{item:!0,children:Object(N.jsx)(m.a,{className:e.title,children:"\u0110\u0103ng nh\u1eadp"})})]}),Object(N.jsx)(S,{loading:!1,children:Object(N.jsxs)("form",{noValidate:!0,className:e.form,onSubmit:i,children:[Object(N.jsxs)(d.a,{marginBottom:4,marginTop:4,children:[Object(N.jsx)(b.a,Object(c.a)(Object(c.a)(Object(c.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",autoComplete:"username",autoFocus:!0},n("username",{required:!0})),u),{},{className:e.input})),Object(N.jsx)(m.a,{color:"error",className:e.errorMgs,children:r.username&&"Vui l\xf2ng nh\u1eadp t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n!"})]}),Object(N.jsx)(j.a,{fullWidth:!0,variant:"outlined",children:Object(N.jsx)(R,{showPassword:u,label:"M\u1eadt kh\u1ea9u",name:"password",setShowPassword:function(){x(!u)},inputProps:n("password",{required:!0})})}),Object(N.jsx)(m.a,{color:"error",className:e.errorMgs,children:r.password&&"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n!"}),Object(N.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"\u0110\u0103ng nh\u1eadp"})]})})]})})})})]})})},le=Object(a.memo)(se);le.displayName="Login";var de=le,pe=n(84),me=n(68),be=n(15),je=Object(me.a)().spacing,he={MuiAppBar:{colorPrimary:{backgroundColor:"#F5AF19"}},MuiBackdrop:{root:{backgroundColor:Object(be.e)("#a50064",.5)}},MuiList:{padding:{paddingTop:je(2)}},MuiButton:{colorInherit:{backgroundColor:"white"},contained:{backgroundColor:"#F5AF19",boxShadow:"none","&:hover":{backgroundColor:"#F5AF19"}},containedPrimary:{color:"white","&:hover":{backgroundColor:"#F5AF19"}},containedSizeLarge:{marginTop:10,marginBottom:10,fontSize:16},containedSizeSmall:{padding:8},root:{minWidth:0,paddingTop:8,paddingBottom:8,textTransform:"none"}},MuiDrawer:{paper:{top:"inherit",padding:je(0)},paperAnchorDockedLeft:{borderRight:"none"}},MuiTabs:{root:{alignItems:"center"}},MuiTypography:{h4:{fontSize:22},colorPrimary:{}},MuiFormControl:{marginNormal:{marginTop:"0px",marginBottom:"0px"}},MuiInput:{root:{borderColor:"#F5AF19","&$disabled":{backgroundColor:"##f7f7f7"}}},MuiInputBase:{root:{borderColor:"#F5AF19","&$disabled":{backgroundColor:"##f7f7f7"}}}},ge="#333",ue=Object(me.a)({overrides:he,palette:{background:{default:"#f1f1f1"},divider:ge,primary:{main:"#F5AF19"},secondary:{main:"#F5AF19"},text:{primary:ge}},props:{MuiButtonBase:{disableRipple:!0}},typography:{body1:{fontSize:14},button:{fontSize:14}}}),xe=function(e){return Object(a.useEffect)(e,[])},fe=n(94),Oe={preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},ve=function(){var e=Object(fe.b)(),t=e.enqueueSnackbar,n=e.closeSnackbar;return{showToast:Object(a.useCallback)((function(e,n){return t(e,(a={variant:n},Object(c.a)(Object(c.a)({},Oe),a)));var a}),[t]),hideToast:Object(a.useCallback)((function(e){return n(e)}),[n])}},ye=function(){return function(){var e=ve().showToast;xe((function(){return Y.addListener(e),function(){return Y.removeListener(e)}}))}(),null},Ne=Object(a.memo)(ye);Ne.displayName="Toast";var we=Ne,Ce=n(264),ke=Object(v.a)((function(e){return Object(O.a)({root:{backgroundColor:"#FFFFFF",overflowWrap:"break-word","& .MuiDataGrid-cell:focus-within":{outline:"none"},"& .MuiDataGrid-columnHeader:focus":{outline:"none"}},msgNoData:{margin:"10vh 0",display:"flex",justifyContent:"center"},title:{margin:e.spacing(3,2),display:"flex",justifyContent:"center"},table:{width:"100%"}})}),{classNamePrefix:"TableData"}),Se=n(266),Fe=n(148),Ie=function(){var e=Object(q.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z({url:"http://128.199.162.192:4000/report/list",params:{page:0}});case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",null===t||void 0===t?void 0:t.report);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=n(269),Be=n(146),Te=n.n(Be),Ae=Object(v.a)((function(e){return Object(O.a)({grow:{gridColumn:"span 2",zIndex:1},momoLogo:{width:"50px",height:"50px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",flex:"0 0 46px",padding:"0px 10px 0px 25px",color:"white"},appBar:{padding:e.spacing(2,3),display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center",height:64,backgroundColor:"#F5AF19"},sectionDesktop:Object(g.a)({},e.breakpoints.up("md"),{display:"flex"}),profileBtn:{borderRadius:0,fontSize:14,color:"white",backgroundColor:"#F5AF19","&:hover":{backgroundColor:"#F5AF19",boxShadow:"none"},svg:{marginLeft:e.spacing(1)}},iconProfile:{backgroundColor:"white",color:"white"},menuItem:{padding:e.spacing(2),margin:0,borderRadius:0,"& p":{padding:0,margin:0},"& button":{padding:0,margin:0,paddingLeft:16},"&:hover":{backgroundColor:"#F5AF19"}},headerLeft:{display:"flex",justifyContent:"space-between",flexDirection:"row",alignItems:"center"},showSidebarBtn:{padding:e.spacing(1),borderRadius:4},btnIcon:{color:"grey"},line:{backgroundColor:"grey",width:1,height:40,margin:e.spacing(0,2)},logout:{marginLeft:e.spacing(2),borderRadius:4},iconLogout:{minWidth:35}})}),{classNamePrefix:"Header"});var De=function(){var e=Ae(),t=Object(a.useCallback)((function(){localStorage.clear(),window.location.href="/login"}),[]);return Object(N.jsx)(d.a,{className:e.grow,children:Object(N.jsxs)(ae.a,{position:"static",className:e.appBar,elevation:0,children:[Object(N.jsx)(d.a,{className:e.headerLeft,children:Object(N.jsx)("div",{className:e.momoLogo,children:Object(N.jsx)("h4",{children:"Website ADMIN"})})}),Object(N.jsx)(d.a,{className:e.sectionDesktop,children:Object(N.jsx)(p.a,{container:!0,alignItems:"center",children:Object(N.jsx)(p.a,{item:!0,children:Object(N.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"logout","aria-controls":"primary-search-account-menu",className:e.profileBtn,onClick:t,endIcon:Object(N.jsx)(Te.a,{}),children:"\u0110\u0103ng xu\u1ea5t"})})})})]})})},We=Object(a.memo)(De);We.displayName="Header";var ze=We,Me=function(){var e=Object(Le.a)(["reports"],Ie,{refetchOnWindowFocus:!1}).data,t=ke();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(ze,{}),Object(N.jsx)("section",{className:"paper-content",children:Object(N.jsxs)(d.a,{className:t.root,mt:3,padding:"24px",children:[Object(N.jsx)(m.a,{variant:"h5",className:t.title,children:"Danh s\xe1ch b\xe1o l\u1ed7i"}),Object(N.jsx)("div",{className:t.table,children:Object(N.jsx)(Fe.a,{rows:e,columns:[{field:"id",headerName:"ID",type:"number",disableColumnMenu:!0,renderCell:function(e){return Object(N.jsx)("p",{children:e.value})},width:50,align:"center",sortable:!1,headerAlign:"center",resizable:!0},{field:"title",headerName:"Ti\xeau \u0111\u1ec1",renderCell:function(e){var t,n,a=(null===(t=e.row)||void 0===t?void 0:t.title)?null===(n=e.row)||void 0===n?void 0:n.title:"";return Object(N.jsx)("p",{children:a})},flex:.3,disableColumnMenu:!0,align:"left",sortable:!1},{field:"content",headerName:"N\u1ed9i dung",valueGetter:function(e){var t;return null===(t=e.row)||void 0===t?void 0:t.content},renderCell:function(e){return Object(N.jsx)("p",{children:e.value})},sortable:!1,disableColumnMenu:!0,flex:.4},{field:"product_id",headerName:"ID s\u1ea3n ph\u1ea9m",renderCell:function(e){return Object(N.jsx)("p",{children:e.value})},disableColumnMenu:!0,sortable:!1,flex:.2},{field:"created_at",headerName:"Th\u1eddi gian t\u1ea1o",renderCell:function(e){return Object(N.jsx)("p",{children:e.value})},disableColumnMenu:!0,sortable:!1,flex:.2}],autoHeight:!0,className:t.root,rowCount:null===e||void 0===e?void 0:e.length,components:{Pagination:Se.a},componentsProps:{pagination:{count:e.total}}})})]})})]})},Pe=Object(a.memo)(Me);Pe.displayName="Report";var He=Pe,Re=n(267),Ge=n(147),Ee=Object(v.a)((function(e){var t=e.breakpoints;e.spacing,e.typography;return Object(O.a)({flex:Object(g.a)({display:"flex",justifyContent:"flex-end"},t.down(1023),{justifyContent:"center"}),flexStart:Object(g.a)({display:"flex",justifyContent:"flex-start"},t.down(1023),{justifyContent:"center"})})}),{classNamePrefix:"Footer"}),qe=function(){var e=Ee();return Object(N.jsx)("footer",{children:Object(N.jsx)(d.a,{padding:"8px",display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"center",style:{backgroundColor:"#f9f9f9"},children:Object(N.jsxs)(p.a,{container:!0,style:{display:"flex",justifyContent:"space-between"},children:[Object(N.jsx)(p.a,{item:!0,xs:12,md:5,className:e.flex,children:Object(N.jsxs)(d.a,{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"end",children:[Object(N.jsx)("p",{style:{fontWeight:500,color:"#303233",fontSize:"14px"},children:"Email: dangductrung1999@gmail.com"}),Object(N.jsx)("p",{style:{fontWeight:500,color:"#303233",fontSize:"14px",marginTop:"0px"},children:"Li\xean h\u1ec7: 0982449337"})]})}),Object(N.jsx)(p.a,{item:!0,xs:12,md:6,className:e.flexStart,children:Object(N.jsx)("p",{style:{fontWeight:600,color:"#303233",fontSize:"14px"},children:"B\u1ea3n quy\u1ec1n thu\u1ed9c v\u1ec1 \xc0ha Sale Team"})})]})})})},Ue=Object(a.memo)(qe);Ue.displayName="Footer";var _e=Ue,Xe=n(268),$e=n.p+"static/media/banner.54a66d01.jpeg",Je=Object(v.a)((function(e){var t,n,a,i,r,o=e.spacing,c=e.breakpoints;return Object(O.a)({root:(t={backgroundRepeat:"no-repeat",backgroundImage:"url(".concat($e,")"),backgroundSize:"cover"},Object(g.a)(t,c.down(960),{backgroundImage:"none"}),Object(g.a)(t,c.down(1024),{backgroundSize:"cover"}),Object(g.a)(t,c.between("lg",1500),{backgroundSize:"cover"}),Object(g.a)(t,c.up(1500),{backgroundSize:"cover"}),t),imgBanner:Object(g.a)({backgroundRepeat:"no-repeat",width:"100vw",backgroundSize:"cover",objectFit:"cover"},c.up(960),{backgroundImage:"none"}),container:(n={height:"450px",display:"flex",justifyContent:"space-between"},Object(g.a)(n,c.between(960,1024),{height:"350px"}),Object(g.a)(n,c.between("lg","xl"),{height:"80vh"}),Object(g.a)(n,c.down(960),{height:"auto"}),Object(g.a)(n,c.up("xl"),{height:"60vh"}),n),box:Object(g.a)({display:"flex",textAlign:"start",height:"100%",alignContent:"center",flexDirection:"column",justifyContent:"center"},c.down(960),{padding:o(3,5)}),title:(a={fontSize:"38px",color:"#000",fontWeight:"bold","&.title-second-row":Object(g.a)({marginBottom:o(1)},c.down(960),{marginBottom:o(4),color:"black"})},Object(g.a)(a,c.between(960,1025),{fontSize:"28px",lineHeight:"34px"}),Object(g.a)(a,c.down(960),{fontSize:"24px",lineHeight:"34px",color:"black",fontWeight:"bold"}),a),label:(i={fontSize:"18px",color:"#171010",letterSpacing:"0.5px",marginBottom:o(2)},Object(g.a)(i,c.down(960),{color:"#303233",fontWeight:400}),Object(g.a)(i,"fontWeight",500),i),flex:Object(g.a)({display:"flex",justifyContent:"flex-start",alignItems:"start",flexDirection:"column"},c.up(1025),{marginTop:o(8)}),signup:(r={minWidth:"248px",minHeight:"48px"},Object(g.a)(r,c.up(1025),{marginTop:o(5)}),Object(g.a)(r,"& .MomoPortal-MuiButton-label",{letterSpacing:"1.25px"}),Object(g.a)(r,"alignSelf","center"),Object(g.a)(r,"color","#FFF"),Object(g.a)(r,"marginBottom",o(4)),Object(g.a)(r,"fontSize","16px"),r)})}),{classNamePrefix:"BannerSection"}),Ve=function(){var e=Je();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Xe.a,{smDown:!0,children:Object(N.jsx)(d.a,{className:e.root,children:Object(N.jsx)(l.a,{maxWidth:"lg",fixed:!0,children:Object(N.jsx)(p.a,{container:!0,className:e.container,children:Object(N.jsxs)(p.a,{item:!0,container:!0,md:6,xs:12,lg:6,className:e.box,children:[Object(N.jsxs)(m.a,{component:"h1",className:Object(f.a)(e.title,"title-second-row"),style:{marginTop:"120px"},children:["TR\u1ee2 L\xdd MUA H\xc0NG \u0110\u1eaeC L\u1ef0C,",Object(N.jsx)("br",{}),"MUA S\u1eaeM GI\xc1 R\u1eba C\xd9NG \xc0HA SALE"]}),Object(N.jsxs)("div",{className:e.flex,style:{marginTop:"40px"},children:[Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 \u0110\u1ed3ng h\xe0nh c\xf9ng b\u1ea1n trong su\u1ed1t tr\u1ea3i nghi\u1ec7m mua s\u1eafm tr\u1ef1c tuy\u1ebfn"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 H\u1ed7 tr\u1ee3 theo d\xf5i v\xe0 so s\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m. \u1ee8ng d\u1ee5ng s\u1eed d\u1ee5ng tr\xean thi\u1ebft b\u1ecb di \u0111\u1ed9ng (Android & iOS)"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Ho\xe0n to\xe0n mi\u1ec5n ph\xed d\xe0nh cho b\u1ea1n. B\u1ea3o m\u1eadt th\xf4ng tin an to\xe0n"})]})]})})})})}),Object(N.jsxs)(Xe.a,{mdUp:!0,children:[Object(N.jsx)(d.a,{children:Object(N.jsx)(p.a,{container:!0,xs:12,children:Object(N.jsx)("img",{src:$e,alt:"banner",className:e.imgBanner})})}),Object(N.jsx)(p.a,{container:!0,md:6,xs:12,lg:6,className:e.box,children:Object(N.jsxs)(l.a,{maxWidth:"lg",fixed:!0,children:[Object(N.jsxs)(m.a,{component:"h1",className:Object(f.a)(e.title,"title-second-row"),children:["TR\u1ee2 L\xdd MUA H\xc0NG \u0110\u1eaeC L\u1ef0C,",Object(N.jsx)("br",{}),"MUA S\u1eaeM GI\xc1 R\u1eba C\xd9NG \xc0HA SALE"]}),Object(N.jsxs)("div",{className:e.flex,children:[Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 \u0110\u1ed3ng h\xe0nh c\xf9ng b\u1ea1n trong su\u1ed1t tr\u1ea3i nghi\u1ec7m mua s\u1eafm tr\u1ef1c tuy\u1ebfn"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 H\u1ed7 tr\u1ee3 theo d\xf5i v\xe0 so s\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m. \u1ee8ng d\u1ee5ng s\u1eed d\u1ee5ng tr\xean thi\u1ebft b\u1ecb di \u0111\u1ed9ng (Android & iOS)"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Ho\xe0n to\xe0n mi\u1ec5n ph\xed d\xe0nh cho b\u1ea1n. B\u1ea3o m\u1eadt th\xf4ng tin an to\xe0n"})]})]})})]})]})},Ye=Object(a.memo)(Ve);Ye.displayName="BannerSection";var Ke=Ye,Qe=Object(v.a)((function(e){e.breakpoints;var t=e.spacing;e.typography;return Object(O.a)({container:{display:"flex",justifyContent:"center"},market:{margin:t(0,10)},title:{color:"#d82d8b",fontSize:"24px"},divider:{width:"300px",color:"#303233",marginBottom:"50px",height:"1px"},label:{color:"#303233",fontWeight:600,fontSize:"16px"}})}),{classNamePrefix:"Download"}),Ze=n.p+"static/media/ios.a7726f9c.jpg",et=n.p+"static/media/android.ac621e2f.jpg",tt=function(){var e=Qe();return Object(N.jsxs)(d.a,{paddingTop:"24px",paddingBottom:"100px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",children:[Object(N.jsx)("h2",{className:e.title,children:"T\u1ea2I \u1ee8NG D\u1ee4NG T\u1ea0I"}),Object(N.jsxs)(p.a,{container:!0,className:e.container,children:[Object(N.jsx)(p.a,{item:!0,className:e.market,children:Object(N.jsxs)(d.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(N.jsx)("p",{className:e.label,children:"iOS"}),Object(N.jsx)("img",{src:Ze,alt:"iOS",width:"120px"})]})}),Object(N.jsx)(p.a,{item:!0,className:e.market,children:Object(N.jsxs)(d.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(N.jsx)("p",{className:e.label,children:"Android"}),Object(N.jsx)("img",{src:et,alt:"android",width:"120px"})]})})]})]})},nt=Object(a.memo)(tt);nt.displayName="Download";var at=nt,it=n.p+"static/media/landing_1.2d76e6e6.jpg",rt=n.p+"static/media/landing_2.5b733779.jpg",ot=n.p+"static/media/landing_3.5795449c.jpg",ct=Object(v.a)((function(e){var t,n,a,i=e.spacing,r=e.breakpoints;return Object(O.a)({root:Object(g.a)({padding:i(16,0,6,0)},r.down("sm"),{padding:i(12,0)}),section:{display:"flex",justifyContent:"center",textAlign:"center",alignContent:"center",flexDirection:"column"},label:Object(g.a)({fontSize:"16px",fontWeight:400,color:"black",lineHeight:"32px",marginBottom:"4px",letterSpacing:.5},r.down("sm"),{lineHeight:"24px"}),box:{display:"flex",justifyContent:"center",alignItems:"center"},container:{justifyContent:"space-between",textAlign:"center",alignContent:"center",flexDirection:"row",display:"flex",marginBottom:i(6)},titleSection:(t={color:"black",fontSize:"38px",lineHeight:"46px",fontWeight:"bold",maxWidth:"100vw"},Object(g.a)(t,r.down("sm"),{fontSize:"24px",lineHeight:"34px"}),Object(g.a)(t,"marginBottom",i(2)),t),titleDescription:Object(g.a)({fontSize:"20px",color:"#303233",letterSpacing:"0.15px",fontWeight:600,marginBottom:"100px"},r.down("sm"),{marginBottom:i(2),fontSize:"14px",letterSpacing:"0.1px"}),textInner:(n={textAlign:"start",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column"},Object(g.a)(n,r.down("sm"),{padding:i(4)}),Object(g.a)(n,"padding",i(2)),n),textInnerLeft:(a={textAlign:"start",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column",marginLeft:"20px"},Object(g.a)(a,r.down("sm"),{padding:i(4),marginLeft:0}),Object(g.a)(a,r.down(960),{marginLeft:"15px"}),Object(g.a)(a,"padding",i(2)),a),title:Object(g.a)({color:"black",display:"flex",fontSize:"24px",lineHeight:"34px",fontWeight:"bold",marginBottom:i(4)},r.down("sm"),{fontSize:"20px",lineHeight:"24px"}),btn:{marginTop:i(6)},signup:{alignSelf:"center",color:"#FFF",fontSize:"16px"},img:{width:"50%",height:"50%"},pattern:{position:"absolute",left:0},dotPattern:{position:"absolute",right:0}})}),{classNamePrefix:"AdvantageSection"}),st=function(){var e=ct(),t=Object(ne.f)().push;return Object(N.jsxs)(d.a,{display:"flex",textAlign:"center",className:e.root,flexDirection:"column",children:[Object(N.jsx)(m.a,{variant:"h2",className:e.titleSection,children:"\u0110\u1ed3ng h\xe0nh c\xf9ng b\u1ea1n trong su\u1ed1t tr\u1ea3i nghi\u1ec7m mua s\u1eafm"}),Object(N.jsx)(m.a,{variant:"h2",className:e.titleDescription,children:"Mang l\u1ea1i gi\u1ea3i ph\xe1p mua h\xe0ng ti\u1ebft ki\u1ec7m th\u1eddi gian v\xe0 gi\xe1 c\u1ea3"}),Object(N.jsx)("div",{style:{backgroundColor:"#9BCFFF"},children:Object(N.jsxs)(l.a,{maxWidth:"lg",fixed:!0,children:[Object(N.jsxs)(p.a,{item:!0,container:!0,xs:!0,className:e.container,children:[Object(N.jsx)(p.a,{item:!0,xs:12,md:6,className:e.box,children:Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:it,alt:"landingImg",className:e.img,style:{marginTop:"20px"}})})}),Object(N.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(N.jsxs)("div",{className:e.textInner,children:[Object(N.jsx)(m.a,{component:"h3",className:e.title,children:"\u0110\u1ec1 xu\u1ea5t s\u1ea3n ph\u1ea9m gi\u1ea3m gi\xe1 n\u1ed5i b\u1eadt"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 S\u1ea3n ph\u1ea9m gi\u1ea3m gi\xe1 m\u1ea1nh nh\u1ea5t theo tu\u1ea7n, theo ng\xe0y"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Li\xean t\u1ee5c c\u1eadp nh\u1eadt nh\u1eefng s\u1ea3n ph\u1ea9m m\u1edbi nh\u1ea5t"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 \u0110a d\u1ea1ng s\u1ea3n ph\u1ea9m, ng\xe0nh h\xe0ng"})]})})]})," "]})}),Object(N.jsx)(Xe.a,{smDown:!0,children:Object(N.jsx)("div",{style:{backgroundColor:"#F3F8C7"},children:Object(N.jsx)(l.a,{maxWidth:"lg",fixed:!0,children:Object(N.jsxs)(p.a,{item:!0,container:!0,xs:!0,className:e.container,children:[Object(N.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(N.jsxs)("div",{className:e.textInnerLeft,children:[Object(N.jsx)(m.a,{component:"h3",className:e.title,children:"Cung c\u1ea5p th\xf4ng tin \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a s\u1ea3n ph\u1ea9m"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Th\xf4ng tin m\u1eb7t h\xe0ng hi\u1ec3n th\u1ecb chi ti\u1ebft. C\xe1c m\u1ee9c gi\xe1 cao nh\u1ea5t, th\u1ea5p nh\u1ea5t v\xe0 gi\xe1 hi\u1ec7n t\u1ea1i"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Bi\u1ec3u \u0111\u1ed3 bi\u1ebfn \u0111\u1ed9ng gi\xe1 v\xe0 l\u1ecbch s\u1eed thay \u0111\u1ed5i gi\xe1 s\u1ea3n ph\u1ea9m"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 G\u1ee3i \xfd cho b\u1ea1n nh\u1eefng s\u1ea3n ph\u1ea9m b\u1ea1n c\xf3 th\u1ec3 y\xeau th\xedch"})]})}),Object(N.jsx)(p.a,{item:!0,xs:12,md:6,className:e.box,children:Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:rt,alt:"landingImg",className:e.img,style:{marginTop:"30px"}})})})]})})})}),Object(N.jsx)(Xe.a,{mdUp:!0,children:Object(N.jsx)("div",{style:{backgroundColor:"#F3F8C7"},children:Object(N.jsx)(l.a,{maxWidth:"lg",fixed:!0,children:Object(N.jsxs)(p.a,{item:!0,container:!0,xs:!0,className:e.container,children:[Object(N.jsx)(p.a,{item:!0,xs:12,md:6,className:e.box,children:Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:rt,alt:"landingImg",className:e.img,style:{marginTop:"30px"}})})}),Object(N.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(N.jsxs)("div",{className:e.textInner,children:[Object(N.jsx)(m.a,{component:"h3",className:e.title,children:"Cung c\u1ea5p th\xf4ng tin \u0111\u1ea7y \u0111\u1ee7 c\u1ee7a s\u1ea3n ph\u1ea9m"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Th\xf4ng tin m\u1eb7t h\xe0ng hi\u1ec3n th\u1ecb chi ti\u1ebft. C\xe1c m\u1ee9c gi\xe1 cao nh\u1ea5t, th\u1ea5p nh\u1ea5t v\xe0 gi\xe1 hi\u1ec7n t\u1ea1i"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Bi\u1ec3u \u0111\u1ed3 bi\u1ebfn \u0111\u1ed9ng gi\xe1 v\xe0 l\u1ecbch s\u1eed thay \u0111\u1ed5i gi\xe1 s\u1ea3n ph\u1ea9m"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 G\u1ee3i \xfd cho b\u1ea1n nh\u1eefng s\u1ea3n ph\u1ea9m b\u1ea1n c\xf3 th\u1ec3 y\xeau th\xedch"})]})})]})})})}),Object(N.jsx)("div",{style:{backgroundColor:"#F6C6D8"},children:Object(N.jsx)(l.a,{maxWidth:"lg",fixed:!0,children:Object(N.jsxs)(p.a,{item:!0,container:!0,xs:!0,className:e.container,children:[Object(N.jsx)(p.a,{item:!0,md:6,xs:12,className:e.box,children:Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:ot,alt:"landingImg",className:e.img,style:{marginTop:"30px"}})})}),Object(N.jsx)(p.a,{item:!0,md:5,xs:12,children:Object(N.jsxs)("div",{className:e.textInner,children:[Object(N.jsx)(m.a,{component:"h3",className:e.title,children:"Th\xf4ng b\xe1o gi\xe1 bi\u1ebfn \u0111\u1ed9ng"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 \u0110\u0103ng k\xfd nh\u1eadn th\xf4ng b\xe1o bi\u1ebfn \u0111\u1ed9ng gi\xe1"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 Ch\u1ee7 \u0111\u1ed9ng theo d\xf5i gi\xe1 gi\xfap b\u1ea1n"}),Object(N.jsx)(m.a,{component:"p",className:e.label,children:"\u2022 D\u1ec5 d\xe0ng so s\xe1nh gi\xe1, mua h\xe0ng ti\u1ebft ki\u1ec7m h\u01a1n"})]})})]})})}),Object(N.jsx)(h.a,{variant:"contained",color:"primary",classes:{root:e.btn},className:e.signup,onClick:function(){t("/login")},children:"\u0110\u0103ng nh\u1eadp"})]})},lt=Object(a.memo)(st);lt.displayName="AdvantageSection";var dt=lt,pt=Object(v.a)((function(e){e.breakpoints,e.spacing,e.typography;return Object(O.a)({homeRoot:{overflowX:"hidden",overflowY:"hidden",backgroundColor:"white"},landingBody:{transition:"all 0.3s ease-in-out"}})}),{classNamePrefix:"HomePage"}),mt=function(){var e=pt();return Object(N.jsx)("div",{className:e.homeRoot,children:Object(N.jsxs)("div",{id:"sectionBody",className:e.landingBody,children:[Object(N.jsx)(Ke,{}),Object(N.jsx)(dt,{}),Object(N.jsx)(at,{}),Object(N.jsx)(_e,{})]})})},bt=Object(a.memo)(mt);bt.displayName="HomePage";var jt=bt,ht=new Re.a({defaultOptions:{queries:{retry:0,suspense:!0,cacheTime:864e5}}});var gt=function(){return Object(N.jsx)(Ce.a,{theme:ue,children:Object(N.jsxs)(fe.a,{maxSnack:1,children:[Object(N.jsx)(we,{}),Object(N.jsx)(Ge.a,{client:ht,children:Object(N.jsx)(a.Suspense,{fallback:Object(N.jsx)(S,{loading:!0}),children:Object(N.jsx)(pe.a,{children:Object(N.jsxs)(ne.c,{children:[Object(N.jsx)(ne.a,{path:"/login",component:de}),Object(N.jsx)(ne.a,{path:"/dashboard",component:He}),Object(N.jsx)(ne.a,{exact:!0,path:"/ahasale-admin-web",component:jt})]})})})})]})})},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(gt,{})}),document.getElementById("root")),ut()}},[[210,1,2]]]);
//# sourceMappingURL=main.d7598f9b.chunk.js.map