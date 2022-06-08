(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{143:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),s=r(55),c=r.n(s),o=(r(75),r(39),r(15)),i=r(24),l=r(20),u=r(23),d=r(13),j=r(10),b="https://mighty-oasis-08080.herokuapp.com/api/",m=b+"articles",x=b+"user",h=b+"articles/feed",f=b+"profiles/",p="app_user",O=Object(a.createContext)(),g=O.Provider,v=(O.Consumer,O),y=r(0);function N(e){var t=Object(a.useContext)(v).data.user,r=e.handleLogout;return Object(y.jsxs)("nav",{className:"flex sm:flex-col md:flex-row justify-between flex-wrap items-center",children:[Object(y.jsx)(d.c,{to:{user:e.user,pathname:"/profiles/".concat(t.username)},className:"btn mr-5 mt:5 md:mt-0 btn-primary",activeClassName:"btn-active",children:Object(y.jsxs)("span",{className:"flex items-center text-xl mx-3",children:[Object(y.jsx)("img",{src:t.image||"smiley.png",className:"w-5 h-5 rounded-full"}),Object(y.jsx)("span",{className:"ml-2 text-gray-50 font-medium",children:t.username})]})}),Object(y.jsx)(d.c,{to:"/articles",className:"btn btn-primary mr-5 mt-5 md:mt-0",activeClassName:"btn-active",children:"Home"}),Object(y.jsx)(d.c,{to:"/new-article",activeClassName:"btn-active",className:"btn btn-primary mr-5 mt-5 md:mt-0",children:"New Article"}),Object(y.jsx)("button",{className:"btn btn-primary mt-5 lg:mt-0",onClick:r,children:"Logout"})]})}function w(e){return Object(y.jsxs)("nav",{className:"flex",children:[Object(y.jsx)(d.c,{to:"/articles",activeClassName:"btn-active",className:"btn btn-primary mr-5",children:"Home"}),Object(y.jsx)(d.c,{to:"/register",activeClassName:"btn-active",className:"btn btn-primary mr-5",children:"Sign-Up"}),Object(y.jsx)(d.c,{to:"/login",activeClassName:"btn-active",className:"btn btn-primary",children:"Log-In"})]})}var C=Object(j.f)((function(e){var t=Object(a.useContext)(v),r=t.data.isLoggedIn,n=t.handleLogout;return Object(y.jsxs)("header",{className:"flex justify-between sm:flex-col bg-gray-700 px-20 py-8 shadow-md rounded-md md:flex-row",children:[Object(y.jsx)(d.c,{to:"/",children:Object(y.jsx)("h1",{className:"text-4xl font-extrabold text-gray-50 font-logo",children:"Alt Blog"})}),Object(y.jsx)("nav",{className:"flex",children:r?Object(y.jsx)(N,{handleLogout:function(){localStorage.removeItem(p),n(),e.history.push("/articles")}}):Object(y.jsx)(w,{})})]})}));var S=function(){return Object(y.jsx)("main",{className:"bg-gray-50",children:Object(y.jsxs)("div",{className:"text-center p-12 bg-gray-300 h-5/6",children:[Object(y.jsx)("h2",{className:"text-5xl font-bold mb-10 text-gray-700",children:"Welcome to Alt Blog"}),Object(y.jsx)(d.b,{to:"/articles",children:Object(y.jsx)("button",{className:"btn btn-primary",children:"View Articles"})})]})})},k=r(5),P=r(4),E=r(11);function T(e,t,r){switch(t){case"username":e.username=r?r.length<6?"username should be atleast 6 characters":"":"username is required";break;case"password":e.password=function(e){return e?e.length<6?"Password must be alteast 6 characters long":-1===e.search(/[a-zA-Z]/)?"Password must contain atleast one letter":-1===e.search(/\d/)?"Password must contain atleast one number":"":"Password is required"}(r);break;case"email":e.email=r?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)?"":"Email is invalid":"email is required"}}var I=Object(j.f)((function(e){var t=Object(a.useState)({username:"",email:"",password:"",errors:{username:"",password:"",email:""}}),r=Object(E.a)(t,2),n=r[0],s=r[1];function c(e){var t,r=e.target,a=r.name,c=r.value,o=n.errors;T(o,a,c),s(Object(P.a)(Object(P.a)({},n),{},(t={},Object(k.a)(t,a,c),Object(k.a)(t,"errors",o),t)))}var o=n.errors,i=o.username,l=o.password,u=o.email;return Object(y.jsx)("main",{className:"bg-gray-300 py-10",children:Object(y.jsx)("section",{className:"py-20",children:Object(y.jsxs)("form",{className:"w-1/3 mx-auto border border-gray-400 p-6 rounded-md shadow-md",onSubmit:function(t){var r=n.email,a=n.password,c=n.username,o=n.errors;t.preventDefault(),c&&a&&r&&fetch("https://mighty-oasis-08080.herokuapp.com/api/users",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({user:{username:c,password:a,email:r}})}).then((function(e){return e.ok?e.json():e.json().then((function(e){for(var t in e.errors)o[t]="".concat(t," ").concat(e.errors[t]);return Promise.reject(o)}))})).then((function(t){t.user;s({password:"",email:"",username:"",errors:o}),e.history.push("/login")})).catch((function(e){return s(Object(P.a)(Object(P.a)({},n),{},{errors:e}))}))},children:[Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("legend",{className:"text-2xl font-bold",children:"Sign Up"}),Object(y.jsx)(d.b,{to:"/login",children:Object(y.jsxs)("span",{className:"text-gray-700 text-lg text-center",children:["Already Have an account?"," "]})})]}),Object(y.jsxs)("fieldset",{className:"my-3",children:[Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Username",value:n.username,name:"username",onChange:function(e){return c(e)}}),Object(y.jsx)("span",{className:"text-red-500",children:i}),Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Email",value:n.email,name:"email",onChange:function(e){return c(e)}}),Object(y.jsx)("span",{className:"text-red-500",children:u}),Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"password",placeholder:"Enter Password",value:n.password,name:"password",onChange:function(e){return c(e)}}),Object(y.jsx)("span",{className:"text-red-500",children:l}),Object(y.jsx)("input",{type:"submit",value:"Sign Up",className:"block w-full btn bg-gray-500 text-white font-bold cursor-pointer",disabled:i||u||l})]})]})})})}));var A=Object(j.f)((function(e){var t=Object(a.useState)(""),r=Object(E.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(""),o=Object(E.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)({email:"",password:""}),j=Object(E.a)(u,2),b=j[0],m=j[1],x=Object(a.useContext)(v);function h(e){var t=e.target,r=t.name,a=t.value;"email"===r?(T(b,r,a),b?s(a):m(Object(P.a)(Object(P.a)({},b),{},{email:b}))):"password"===r&&(T(b,r,a),b?l(a):m(Object(P.a)(Object(P.a)({},b),{},{password:b})))}return Object(y.jsx)("main",{className:"bg-gray-300 pb-20",children:Object(y.jsx)("section",{className:"py-20",children:Object(y.jsxs)("form",{className:"w-1/3 mx-auto border border-gray-400 p-6 rounded-md shadow-md",onSubmit:function(t){t.preventDefault(),i&&n&&fetch("https://mighty-oasis-08080.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({user:{password:i,email:n}})}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(t){var r=t.user;x.handleUser(r),s(""),l(""),e.history.push("/articles")})).catch((function(e){m(Object(P.a)(Object(P.a)({},b),{},{email:"Email or Password is incorrect!"}))}))},children:[Object(y.jsxs)("div",{className:"text-center",children:[Object(y.jsx)("legend",{className:"text-2xl font-bold",children:"Sign In"}),Object(y.jsx)(d.b,{to:"/register",children:Object(y.jsxs)("span",{className:"text-gray-700 text-lg text-center",children:[" ","New here?"," "]})})]}),Object(y.jsxs)("fieldset",{className:"my-3",children:[Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Email",value:n,name:"email",onChange:function(e){return h(e)}}),Object(y.jsx)("span",{className:"text-red-500",children:b.email}),Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"password",placeholder:"Enter Password",value:i,name:"password",onChange:function(e){return h(e)}}),Object(y.jsx)("span",{className:"text-red-500",children:b.password}),Object(y.jsx)("input",{type:"submit",value:"Log In",className:"block w-full my-6 py-2 px-3 btn btn-primary cursor-pointer",disabled:b.password||b.email})]})]})})})}));var L=function(){return Object(y.jsx)("div",{className:"flex justify-center p-5",children:Object(y.jsxs)("div",{className:"lds-grid",children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]})})};var D=function(e){var t=Object(a.useContext)(v).data.isLoggedIn,r=e.articles,n=e.error;return n?Object(y.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:n}):r?r.length?Object(y.jsx)("article",{children:r.map((function(r){return Object(y.jsxs)("div",{className:"bg-gray-200 flex justify-between flex-col mb-10 w-full p-4 rounded-md shadow-md",children:[Object(y.jsxs)("div",{className:"flex justify-between w-full",children:[Object(y.jsxs)("div",{className:"flex items-center my-2",children:[Object(y.jsx)(d.b,{to:"/profiles/".concat(r.author.username),children:Object(y.jsx)("img",{src:r.author.image||"smiley.png",alt:r.author.username,className:"w-14 h-14 rounded-full object-cover"})}),Object(y.jsxs)("div",{className:"ml-4",children:[Object(y.jsx)("h5",{className:"text-gray-500 font-bold text-xl mr-5",children:r.author.username}),Object(y.jsx)("h6",{className:"text-gray-600",children:(a=r.createdAt,new Date(a).toISOString().split("T")[0])})]})]}),t&&Object(y.jsxs)("div",{className:"flex items-center text-xl border-gray-500 px-3 py-1 rounded-full shadow-lg bg-gray-400",children:[Object(y.jsx)("i",{className:r.favorited?"fas fa-heart text-red-700":"far fa-heart cursor-pointer text-gray-700",onClick:function(t){return e.handleFavorite(t)},"data-id":r.favorited,"data-slug":r.slug,"data-count":r.favoritesCount}),Object(y.jsx)("span",{className:"ml-2",children:r.favoritesCount})]})]}),Object(y.jsx)("h2",{className:"text-2xl font-bold mb-5 mt-5 text-gray-700",children:r.title}),Object(y.jsx)("p",{className:"text-gray-500 mb-5 w-full overflow-hidden",children:r.description}),Object(y.jsx)(d.b,{to:"/articles/".concat(r.slug),children:Object(y.jsx)("h4",{className:"btn btn-primary inline-block",children:"Read More"})})]},r.slug);var a}))}):Object(y.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:"No articles found"}):Object(y.jsx)(L,{})};var z=function(e){var t=Object(a.useState)(null),r=Object(E.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(""),o=Object(E.a)(c,2),i=o[0],l=o[1];return Object(a.useEffect)((function(){fetch("https://mighty-oasis-08080.herokuapp.com/api/tags").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.tags;s(t)})).catch((function(e){l("Not able to fetch Tags")}))})),i?Object(y.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:i}):n?Object(y.jsxs)("aside",{className:"flex flex-col items-center bg-gray-200 px-4 py-8 rounded-md shadow-lg",children:[Object(y.jsx)("h2",{className:"text-2xl mb-5 font-bold text-gray-600",children:"Tag Cloud"}),Object(y.jsx)("div",{className:"flex flex-wrap",children:n.map((function(t){return""!==t?Object(y.jsx)("span",{className:"bg-gray-500 p-2 cursor-pointer text-white text-xs rounded-md mx-1 my-1",onClick:function(t){return e.selectTag(t)},"data-value":t,children:t},t):null}))})]}):Object(y.jsx)(L,{})};var U=function(e){for(var t=e.articlesCount,r=e.articlesPerPage,a=e.activePageIndex,n=e.updateCurrentPageIndex,s=Math.ceil(t/r),c=[],o=1;o<=s;o++)c.push(o);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"flex justify-between flex-wrap",children:[1!==a&&0!==s&&Object(y.jsx)("p",{className:"font-bold self-center cursor-pointer hover:shadow-lg mr-2",onClick:function(){return n(a-1<1?1:a-1)},children:"< Prev"}),c.map((function(e,t){return Object(y.jsx)("span",{className:a===e?"bg-gray-800 text-white py-2 px-4 cursor-pointer hover:bg-green-500 rounded mx-2 my-2":"border border-gray-400 bg-green-50 py-2 px-4 cursor-pointer hover:bg-blue-400 rounded mx-2 my-2",onClick:function(){return n(e)},children:e},e)})),a!==s&&0!==s&&Object(y.jsx)("p",{className:"font-bold self-center cursor-pointer hover:shadow-lg",onClick:function(){return n(a+1>s?s:a+1)},children:"Next >"})]})})};var B=function(e){var t=Object(a.useState)(null),r=Object(E.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(""),o=Object(E.a)(c,2),i=o[0],l=o[1],u=Object(a.useState)(0),d=Object(E.a)(u,2),j=d[0],b=d[1],x=Object(a.useState)(10),f=Object(E.a)(x,1)[0],p=Object(a.useState)(1),O=Object(E.a)(p,2),g=O[0],N=O[1],w=Object(a.useState)(""),C=Object(E.a)(w,2),S=C[0],k=C[1],P=Object(a.useState)(m),T=Object(E.a)(P,2),I=T[0],A=T[1],L=Object(a.useContext)(v).data.isLoggedIn;function B(e,t,r,a){var n=localStorage.app_user;fetch(e+"/?offset=".concat(10*(t-1),"&limit=").concat(r)+(a&&"&tag=".concat(a)),{method:"GET",headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){s(e.articles),b(e.articlesCount)})).catch((function(e){l("Not able to fetch Articles")}))}return Object(a.useEffect)((function(){return B(I,g,f,S),function(){}}),[I,g,f,S]),Object(y.jsxs)("main",{className:"px-24 py-16 w-full",children:[Object(y.jsxs)("div",{className:"flex mb-3",children:[Object(y.jsxs)("span",{className:I===m?"cursor-pointer mr-8 text-xl text-green-500":"cursor-pointer mr-8 text-xl text-gray-600",onClick:function(){k(""),A(m)},children:[Object(y.jsx)("i",{className:"fas fa-newspaper mr-2"}),"Global Feed"]}),L&&Object(y.jsxs)("span",{className:I===h?"text-xl mr-8 cursor-pointer text-green-500":"text-xl  cursor-pointer text-gray-600",onClick:function(){k(""),A(h),N(1)},children:[" ",Object(y.jsx)("i",{className:"fas fa-newspaper mr-2"}),"My feed"]}),S&&Object(y.jsxs)("div",{className:"text-xl",children:[Object(y.jsx)("span",{className:"mx-2 text-gray-500",children:"/"}),Object(y.jsxs)("span",{className:"text-green-700",children:["#",S]})]})]}),Object(y.jsxs)("section",{className:"flex justify-between ",children:[Object(y.jsx)("div",{className:"w-4/6",children:Object(y.jsx)(D,{articles:n,error:i,handleFavorite:function(e){var t=e.target.dataset,r=t.id,a=t.slug;L&&fetch(m+"/"+a+"/favorite",{method:"false"===r?"POST":"DELETE",headers:{Authorization:"Token "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){B(I===h?h:m,g,f,S)})).catch((function(e){return console.log(e)}))}})}),Object(y.jsx)("div",{className:"w-80",children:Object(y.jsx)(z,{selectTag:function(e){var t=e.target.dataset.value;k(t),N(1),A(m)}})})]}),Object(y.jsx)("div",{className:"mt-10",children:Object(y.jsx)(U,{articlesCount:j,articlesPerPage:f,activePageIndex:g,updateCurrentPageIndex:function(e){N(e),k("")}})})]})};var _=function(e){var t,r,n=Object(a.useContext)(v),s=e.comments,c=(null===n||void 0===n?void 0:n.data).isLoggedIn,o=null===(t=n.data)||void 0===t||null===(r=t.user)||void 0===r?void 0:r.username;return s?Object(y.jsxs)(y.Fragment,{children:[s.length&&Object(y.jsx)("h2",{className:"text-2xl mb-5 text-gray-500 font-bold",children:"Comments"}),s.length>0?s.map((function(t){return Object(y.jsxs)("div",{className:"flex item-center p-6 bg-gray-300 mb-4 rounded-md relative shadow-md",children:[Object(y.jsx)("div",{className:"",children:Object(y.jsx)("img",{src:t.author.image||"smiley.png",alt:t.author.username,className:"w-16 h-16 rounded-full"})}),Object(y.jsxs)("div",{className:"flex flex-col",children:[Object(y.jsxs)("div",{className:"flex items-center",children:[Object(y.jsx)("h4",{className:"text-xl ml-6",children:t.author.username}),Object(y.jsxs)("h4",{className:"text-xl ml-6",children:["#",(r=t.createdAt,new Date(r).toISOString().split("T")[0])]}),c&&o===t.author.username&&Object(y.jsx)("span",{className:"absolute right-4 text-xl",children:Object(y.jsx)("i",{className:"fas fa-trash cursor-pointer text-gray-800","data-id":t.id,onClick:function(t){return e.handleDelete(t)}})})]}),Object(y.jsx)("p",{className:"ml-6 my-4",children:t.body})]})]},t.createdAt);var r})):Object(y.jsx)("h2",{className:"text-xl text-red-400",children:"No comments yet!"})]}):Object(y.jsx)(L,{})};var F=function(e){var t,r,n=Object(a.useState)(""),s=Object(E.a)(n,2),c=s[0],o=s[1],i=Object(a.useState)(""),l=Object(E.a)(i,2),u=l[0],d=l[1],j=Object(a.useContext)(v),b=e.slug;function x(e){fetch(m+"/"+e+"/comments").then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){var t=e.comments;d(t)})).catch((function(e){return console.log(e)}))}Object(a.useEffect)((function(){x(b)}),[b]);var h=null===(t=j.data)||void 0===t||null===(r=t.user)||void 0===r?void 0:r.username;return Object(y.jsxs)(y.Fragment,{children:[h&&Object(y.jsx)("div",{className:"",children:Object(y.jsxs)("form",{className:"my-6 flex flex-col w-1/3",onSubmit:function(t){return function(t){t.preventDefault();var r=e.slug;c&&fetch(m+"/"+r+"/comments",{method:"POST",body:JSON.stringify({comment:{body:c}}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){o(""),d(""),x(r)})).catch((function(e){return console.log(e)}))}(t)},children:[Object(y.jsx)("textarea",{className:"w-full border-2 border-gray-400 rounded-md p-3 outline-none focus:border-blue-500",rows:"3",placeholder:"Enter Comments",value:c,onChange:function(e){return function(e){var t=e.target.value;o(t)}(e)},name:"inputText"}),Object(y.jsx)("input",{type:"submit",value:"Add Comment",className:"px-2 py-1 shadow-md btn-primary self-end text-white text-xs rounded-md cursor-pointer hover:bg-blue-400 mt-5"})]})}),Object(y.jsx)("div",{className:"my-8",children:Object(y.jsx)(_,{comments:u,handleDelete:function(t){var r=t.target.dataset.id,a=e.slug;fetch(m+"/"+a+"/comments/"+r,{method:"DELETE",headers:{Authorization:"Token "+localStorage.app_user}}).then((function(e){if(!e.ok)return e.json().then((function(e){var t=e.errors;return Promise.reject(t)}));d(""),x(a)})).catch((function(e){return console.log(e)}))}})})]})},J=r(66),G=r(68);var V=Object(j.f)((function(e){var t=Object(a.useState)(null),r=Object(E.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)(""),o=Object(E.a)(c,2),i=o[0],l=o[1],u=Object(a.useContext)(v),j=e.match.params.slug;Object(a.useEffect)((function(){fetch(m+"/".concat(j)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){s(e.article)})).catch((function(e){l("Not able to fetch Articles")}))}),[j]);var b=u.data,x=b.isLoggedIn,h=b.user;if(i)return Object(y.jsx)("h2",{className:"text-red-500 text-center text-xl mt-8",children:i});if(!n)return Object(y.jsx)(L,{});var f,p=n.tagList;return Object(y.jsxs)("main",{children:[Object(y.jsxs)("section",{className:"px-20 bg-gray-400 py-12 md:flex items-center rounded-md shadow-md",children:[Object(y.jsxs)("div",{className:"flex py-6 items-center flex-col mr-20",children:[Object(y.jsx)(d.b,{to:"/profiles/".concat(n.author.username),children:Object(y.jsx)("img",{src:n.author.image||"smiley.png",alt:n.author.username,className:"w-16 h-16 object-cover rounded-full"})}),Object(y.jsx)("span",{className:"mx-3 text-gray-700 font-bold text-xl",children:n.author.username}),Object(y.jsx)("span",{className:"mx-3 text-gray-700",children:(f=n.createdAt,new Date(f).toISOString().split("T")[0])})]}),Object(y.jsxs)("div",{className:"flex flex-col w-5/6",children:[Object(y.jsx)("h2",{className:"mt-2 mb-5 text-4xl self-center text-gray-900",children:n.title}),Object(y.jsx)("p",{className:"self-start text-gray-800 mb-5 overflow-hidden w-full",children:n.description}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)("div",{className:"flex flex-wrap items-center",children:p.map((function(e){return e?Object(y.jsx)("span",{className:"mr-3 mb-3 bg-gray-700 p-1 px-2 text-xs rounded-md text-white",children:e},e):null}))}),x&&h.username===n.author.username&&Object(y.jsxs)("div",{className:"flex flex-wrap items-center",children:[Object(y.jsxs)("span",{className:"btn bg-gray-300 text-gray-600 rounded-md mx-3 mb-3 cursor-pointer",onClick:function(){return function(t){e.history.push({pathname:"/articles/edit/".concat(t),article:n})}(n.slug)},children:[Object(y.jsx)("i",{className:"far fa-edit mr-2"})," Edit"]}),Object(y.jsxs)("span",{className:"btn bg-gray-300 text-gray-600 rounded-md mx-3 mb-3 cursor-pointer",onClick:function(){var t=u.data.user;fetch(m+"/"+j,{method:"DELETE",headers:{Authorization:"Bearer "+localStorage.app_user}}).then((function(r){if(!r.ok)return r.json().then((function(e){var t=e.errors;return Promise.reject(t)}));e.history.push("/profiles/".concat(t.username))})).catch((function(e){return console.log(e)}))},children:[Object(y.jsx)("i",{className:"far fa-trash-alt mr-2"}),"Delete"]})]})]})]})]}),Object(y.jsxs)("section",{className:"bg-gray-100",children:[Object(y.jsx)("div",{className:"text-lg text-gray-700 px-20 py-12 border w-full overflow-hidden",children:Object(y.jsx)(J.a,{children:n.body,remarkPlugins:[G.a]})}),Object(y.jsxs)("div",{className:"px-20 py-12",children:[Object(y.jsx)(F,{slug:n.slug}),!h&&Object(y.jsx)("div",{className:"flex justify-center mt-10 mb-5",children:Object(y.jsxs)("h3",{className:"text-xl text-gray-600",children:["Please",Object(y.jsx)(d.b,{to:"/login",className:"text-green-700 mx-1",children:"Login"}),"to Add Comments on the Article"]})})]})]})]})})),H=r(62),M=r.n(H),q=r(67);r(142);var Z=Object(j.f)((function(e){var t=Object(a.useState)({title:"",description:"",tags:"",body:"",error:""}),r=Object(E.a)(t,2),n=r[0],s=r[1];function c(e){var t=e.target,r=t.name,a=t.value;s(Object(P.a)(Object(P.a)({},n),{},Object(k.a)({},r,a)))}var o=new M.a;return Object(y.jsx)("main",{children:Object(y.jsx)("section",{children:Object(y.jsxs)("form",{className:"w-2/4 mx-auto mt-10",onSubmit:function(t){var r=n.title,a=n.description,c=n.tags,o=n.body;c=c.split(",").map((function(e){return e.trim()}));var i=localStorage.app_user;t.preventDefault(),r&&a&&c&&o?fetch(m,{method:"POST",headers:{"Content-type":"application/json",authorization:"Bearer ".concat(i)},body:JSON.stringify({article:{title:r,description:a,tagList:c,body:o}})}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(t){e.history.push("/articles/".concat(t.article.slug))})).catch((function(e){s(Object(P.a)(Object(P.a)({},n),{},{error:"Enter all fields"}))})):s({title:"",description:"",body:"",tags:"",error:""})},children:[Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Title",value:n.title,name:"title",onChange:function(e){return c(e)}}),Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Description",value:n.description,name:"description",onChange:function(e){return c(e)}}),Object(y.jsx)("input",{className:"block w-full my-3 py-2 px-3 border border-gray-400 rounded-md",type:"text",placeholder:"Enter Tags",value:n.tags,name:"tags",onChange:function(e){return c(e)}}),Object(y.jsx)(q.a,{style:{height:"500px"},renderHTML:function(e){return o.render(e)},onChange:function(e){e.html;var t=e.text;s(Object(P.a)(Object(P.a)({},n),{},{body:t}))},onSubmit:function(e){return e.html,e.text,""}}),Object(y.jsx)("input",{type:"submit",value:"Publish Article",className:"block float-right btn bg-green-500 text-white font-bold cursor-pointer mt-10"})]})})})}));var R=Object(j.f)((function(e){var t=Object(a.useState)({image:"",username:"",password:"",bio:"",errors:{username:"",password:""}}),r=Object(E.a)(t,2),n=r[0],s=r[1],c=Object(a.useContext)(v);function o(e){var t,r=e.target,a=r.name,c=r.value,o=n.errors;T(o,a,c),s(Object(P.a)(Object(P.a)({},n),{},(t={},Object(k.a)(t,a,c),Object(k.a)(t,"errors",o),t)))}if(Object(a.useEffect)((function(){var e=c.data.user,t=e.image,r=e.username,a=e.bio;s((function(e){return Object(P.a)(Object(P.a)({},e),{},{image:t,username:r,bio:a})}))}),[c.data]),!n.username&&!n.image&&!n.bio)return Object(y.jsx)(L,{});var i=n.errors,l=i.username,u=i.password;return Object(y.jsx)("main",{children:Object(y.jsx)("section",{className:"py-20",children:Object(y.jsxs)("form",{className:"w-1/2 mx-auto p-8 border border-gray-400 rounded-md",onSubmit:function(t){var r=n.username,a=n.image,c=n.password,o=n.bio,i=n.errors;t.preventDefault(),r&&a&&c&&o&&fetch(x,{method:"PUT",body:JSON.stringify({user:{username:r,password:c,bio:o,image:a}}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){for(var t in e.errors)i[t]="".concat(t," ").concat(e.errors[t]);return Promise.reject({errors:i})}))})).then((function(t){e.history.push("/profiles/".concat(t.user.username))})).catch((function(e){return s(Object(P.a)(Object(P.a)({},n),{},{errors:i}))}))},children:[Object(y.jsx)("legend",{className:"text-center text-3xl my-2 font-bold",children:"Settings"}),Object(y.jsxs)("fieldset",{className:"flex flex-col",children:[Object(y.jsx)("input",{type:"text",placeholder:"Image Url",value:n.image,onChange:o,name:"image",className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("input",{type:"text",name:"username",value:n.username,onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("span",{className:"my-1 text-red-500",children:l}),Object(y.jsx)("input",{type:"password",name:"password",value:n.password,placeholder:"Password",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("span",{className:"my-1 text-red-500",children:u}),Object(y.jsx)("textarea",{value:n.bio,rows:"6",name:"bio",placeholder:"Enter your Bio",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("input",{type:"submit",value:"Update",className:"btn btn-green"})]})]})})})}));var W=Object(j.f)((function(e){var t,r,n=Object(a.useState)({user:"",articles:null,articlesCount:null,articlesPerPage:10,activePageIndex:1,feedSelected:"author",following:"",favoriteCount:0,error:""}),s=Object(E.a)(n,2),c=s[0],o=s[1],i=Object(a.useContext)(v),l=e.match.params.id;Object(a.useEffect)((function(){!function(e){fetch(f+e,{method:"GET",headers:{Authorization:"Bearer "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){e.errors;return Promise.reject()}))})).then((function(e){var t=e.profile;o((function(e){return Object(P.a)(Object(P.a)({},e),{},{user:t,following:t.following})}))})).catch((function(e){return console.log(e)}))}(l)}),[l]);var u=c.user.username;if(Object(a.useEffect)((function(){var e=10*(c.activePageIndex-1),t=localStorage.app_user;u&&fetch("".concat(m,"?").concat(c.feedSelected,"=").concat(u,"&limit=").concat(c.articlesPerPage,"&offset=").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"}}).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){o((function(t){return Object(P.a)(Object(P.a)({},t),{},{articles:e.articles,articlesCount:e.articlesCount})}))})).catch((function(e){o((function(e){return Object(P.a)(Object(P.a)({},e),{},{error:"Not able to fetch Articles"})}))}))}),[u,c.feedSelected,c.activePageIndex,c.articlesPerPage,c.favoriteCount]),!c.user)return Object(y.jsx)(L,{});var j=c.user,b=j.username,x=j.image,h=j.bio,p=null===(t=i.data)||void 0===t||null===(r=t.user)||void 0===r?void 0:r.username,O=c.articles,g=c.error,N=c.articlesCount,w=c.activePageIndex,C=c.articlesPerPage,S=c.feedSelected,k=c.following;return Object(y.jsx)("main",{children:Object(y.jsxs)("section",{children:[Object(y.jsxs)("div",{className:"bg-indigo-200 text-white py-16 text-center",children:[Object(y.jsx)("img",{src:x,alt:b,className:"w-40 h-40 rounded-full mx-auto"}),Object(y.jsx)("h2",{className:"text-4xl my-4 text-gray-700",children:b}),Object(y.jsx)("h3",{className:"text-2xl text-gray-500 mb-5",children:h}),Object(y.jsxs)("div",{className:"float-right mr-10 ",children:[p&&p!==b&&Object(y.jsxs)("button",{className:"bg-gray-200 text-gray-700 btn rounded-full hover:bg-gray-300 transform transition duration-500 hover:scale-105",onClick:function(){var e=c.user.username,t=c.following;fetch(f+"/"+e+"/follow",{method:t?"DELETE":"POST",headers:{Authorization:"Bearer "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){e.errors;return Promise.reject()}))})).then((function(e){var t=e.profile;o(Object(P.a)(Object(P.a)({},c),{},{following:t.following}))})).catch((function(e){return console.log(e)}))},children:[Object(y.jsx)("i",{className:k?"fas fa-minus mr-2":"fas fa-plus mr-2"}),k?"unfollow":"follow"]}),p&&p===b&&Object(y.jsxs)(d.b,{to:"/settings",className:"btn bg-gray-200 text-gray-600 hover:bg-gray-300",children:[Object(y.jsx)("i",{className:"fas fa-user-edit mr-2"}),"Edit Profile"]})]})]}),Object(y.jsxs)("article",{className:"px-40",children:[Object(y.jsxs)("div",{className:"py-6",children:[Object(y.jsxs)("span",{className:"author"===S?"cursor-pointer text-xl text-green-500 pb-2 border-b-2 border-green-500":"cursor-pointer text-xl text-gray-700",onClick:function(){o(Object(P.a)(Object(P.a)({},c),{},{feedSelected:"author",activePageIndex:1}))},children:[Object(y.jsx)("i",{className:"fas fa-newspaper mr-2"}),"Articles written"]}),Object(y.jsx)("span",{className:"mx-4",children:"/"}),Object(y.jsxs)("span",{className:"favorited"===S?"cursor-pointer text-xl text-green-500 pb-2 border-b-2 border-green-500":"cursor-pointer text-xl text-gray-700",onClick:function(){o(Object(P.a)(Object(P.a)({},c),{},{feedSelected:"favorited",activePageIndex:1}))},children:[Object(y.jsx)("i",{className:"fas fa-newspaper mr-2"}),"Favorited"]})]}),Object(y.jsx)("div",{className:"",children:Object(y.jsx)(D,{articles:O,error:g,isLoggedIn:i.data.isLoggedIn,handleFavorite:function(e){var t=e.target.dataset,r=t.id,a=t.slug,n=t.count;fetch(m+"/"+a+"/favorite",{method:"false"===r?"POST":"DELETE",headers:{Authorization:"Token "+localStorage.app_user}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(e){o(Object(P.a)(Object(P.a)({},c),{},{favoriteCount:n+1}))})).catch((function(e){return console.log(e)}))}})})]}),Object(y.jsx)("div",{className:"text-center py-8 flex justify-center",children:Object(y.jsx)(U,{articlesCount:N,articlesPerPage:C,activePageIndex:w,handleClick:function(e){var t=e.target.dataset.id;o(Object(P.a)(Object(P.a)({},c),{},{activePageIndex:t}))},updateCurrentPageIndex:function(e){o(Object(P.a)(Object(P.a)({},c),{},{activePageIndex:e}))}})})]})})}));var $=function(){return Object(y.jsx)("div",{className:"flex justify-center p-5 h-screen items-center",children:Object(y.jsxs)("div",{className:"lds-grid",children:[Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{}),Object(y.jsx)("div",{})]})})};var K=Object(j.f)((function(e){var t=Object(a.useState)({article:"",title:"",description:"",body:"",tags:"",error:""}),r=Object(E.a)(t,2),n=r[0],s=r[1],c=e.match.params.slug;function o(e){var t=e.target,r=t.name,a=t.value;s(Object(P.a)(Object(P.a)({},n),{},Object(k.a)({},r,a)))}Object(a.useEffect)((function(){return fetch(m+"/".concat(c)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.article,r=t.title,a=t.description,n=t.tagList,c=t.body;s((function(e){return Object(P.a)(Object(P.a)({},e),{},{article:t,title:r,body:c,description:a,tags:n.join(",")})}))})).catch((function(e){console.log(e)})),function(){}}),[c]);var i=n.title,l=n.description,u=n.body,d=n.tags,j=n.error;return n.article?Object(y.jsx)("main",{children:Object(y.jsx)("section",{className:"pt-20",children:Object(y.jsxs)("form",{className:"w-1/2 mx-auto p-8 border border-gray-400 rounded-md",onSubmit:function(t){var r=n.title,a=n.description,o=n.body,i=n.tags,l="Bearer "+localStorage.app_user;t.preventDefault(),r&&a&&o&&i?fetch(m+"/"+c,{method:"PUT",body:JSON.stringify({article:{title:r,description:a,body:o,tagList:i.split(",").map((function(e){return e.trim()}))}}),headers:{"Content-Type":"application/json",Authorization:l}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(t){e.history.push("/articles/".concat(e.match.params.slug))})).catch((function(e){console.log(e)})):s(Object(P.a)(Object(P.a)({},n),{},{error:"Enter all fields"}))},children:[Object(y.jsx)("legend",{className:"text-3xl text-center font-bold my-3 text-indigo-900",children:"Edit Article"}),Object(y.jsxs)("fieldset",{className:"flex flex-col",children:[Object(y.jsx)("span",{className:"text-red-500 my-1",children:j}),Object(y.jsx)("input",{type:"text",value:i,placeholder:"Title",name:"title",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("input",{type:"text",value:l,name:"description",placeholder:"Description",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("textarea",{rows:"6",value:u,name:"body",placeholder:"Articles's Body",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("input",{type:"text",value:d,name:"tags",placeholder:"Tag List(comma seperated)",onChange:o,className:"my-2 p-2 rounded-md outline-none border-2 border-gray-300 focus:border-blue-500"}),Object(y.jsx)("input",{type:"submit",value:"Update Article",className:"btn w-2/6 self-end bg-blue-500 hover:bg-blue-400 text-white "})]})]})})}):Object(y.jsx)(L,{})}));var Q=function(e){return Object(y.jsx)("h2",{className:"text-red-700 text-xl text-center py-8 font-bold",children:"404 Page Not Found"})},X=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={hasError:!1,error:null,errorInfo:null},e.handleClick=function(){e.setState({hasError:!1}),e.props.history.push("/")},e}return Object(i.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.hasError?Object(y.jsxs)("div",{className:"text-center pt-8",children:[Object(y.jsx)("h3",{className:"text-xl text-red-500 my-3",children:"something went wrong"}),Object(y.jsx)("span",{className:"bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer",onClick:this.handleClick,children:"Go back to Home Page"})]}):this.props.children}}]),r}(n.a.Component),Y=Object(j.f)(X);function ee(e){return Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/",exact:!0,children:Object(y.jsx)(S,{})}),Object(y.jsx)(j.a,{path:"/articles",exact:!0,children:Object(y.jsx)(B,{})}),Object(y.jsx)(j.a,{path:"/articles/edit/:slug",children:Object(y.jsx)(K,{})}),Object(y.jsx)(j.a,{path:"/articles/:slug",children:Object(y.jsx)(V,{})}),Object(y.jsx)(j.a,{path:"/new-article",exact:!0,children:Object(y.jsx)(Z,{})}),Object(y.jsx)(j.a,{path:"/settings",exact:!0,children:Object(y.jsx)(R,{})}),Object(y.jsx)(j.a,{path:"/profiles/:id",exact:!0,children:Object(y.jsx)(W,{user:e.user,isLoggedIn:e.isLoggedIn})}),Object(y.jsx)(j.a,{path:"*",children:Object(y.jsx)(Q,{})})]})}function te(e){return Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{path:"/",exact:!0,children:Object(y.jsx)(S,{})}),Object(y.jsx)(j.a,{path:"/register",exact:!0,children:Object(y.jsx)(I,{})}),Object(y.jsx)(j.a,{path:"/login",exact:!0,children:Object(y.jsx)(A,{})}),Object(y.jsx)(j.a,{path:"/articles",exact:!0,children:Object(y.jsx)(B,{})}),Object(y.jsx)(j.a,{path:"/articles/:slug",children:Object(y.jsx)(V,{})}),Object(y.jsx)(j.a,{path:"/profiles/:id",exact:!0,children:Object(y.jsx)(W,{user:e.user})}),Object(y.jsx)(j.a,{path:"*",children:Object(y.jsx)(Q,{})})]})}var re=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isLoggedIn:!1,user:null,isVerifying:!0},e.updateUser=function(t){e.setState({isLoggedIn:!0,user:t,isVerifying:!1}),localStorage.setItem(p,t.token)},e.handleLogout=function(){e.setState({isLoggedIn:!1,user:null})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.app_user;t?fetch(x,{method:"GET",headers:{authorization:"Token ".concat(t)}}).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=e.errors;return Promise.reject(t)}))})).then((function(t){var r=t.user;return e.updateUser(r)})).catch((function(e){return console.log(e)})):this.setState({isVerifying:!1})}},{key:"render",value:function(){return this.state.isVerifying?(console.log("Is Verifying"),Object(y.jsx)($,{})):Object(y.jsx)(d.a,{children:Object(y.jsx)(g,{value:{data:this.state,handleUser:this.updateUser,handleLogout:this.handleLogout},children:Object(y.jsxs)(Y,{children:[Object(y.jsx)(C,{}),this.state.isLoggedIn?Object(y.jsx)(ee,{}):Object(y.jsx)(te,{})]})})})}}]),r}(n.a.Component);c.a.render(Object(y.jsx)(d.a,{children:Object(y.jsx)(re,{})}),document.getElementById("root"))},39:function(e,t,r){},75:function(e,t,r){}},[[143,1,2]]]);
//# sourceMappingURL=main.ea46188c.chunk.js.map