module.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=20)}([function(t,n){t.exports=flarum.core.compat["forum/app"]},function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n){t.exports=flarum.core.compat["common/components/Button"]},function(t,n){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["common/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["common/components/Page"]},function(t,n){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["common/components/SelectDropdown"]},function(t,n){t.exports=flarum.core.compat["common/Component"]},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["common/components/Modal"]},,function(t,n){t.exports=flarum.core.compat["common/components/Select"]},function(t,n){t.exports=flarum.core.compat["common/components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["common/components/Separator"]},function(t,n){t.exports=flarum.core.compat["common/components/Placeholder"]},function(t,n,e){"use strict";e.r(n),e.d(n,"components",(function(){return T}));var o=e(7),r=e(0),a=e.n(r),i=e(8),s=e.n(i),u=e(3),c=e.n(u);function l(t,n){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t})(t,n)}function d(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n)}var p=e(9),f=e.n(p),h=e(5),y=e.n(h),v=e(10),b=e.n(v),g=e(4),x=e.n(g),_=(e(16),e(2)),M=e.n(_),N=e(11),P=e.n(N),O=(e(17),e(18),function(){function t(t,n){void 0===t&&(t={}),void 0===n&&(n=window.app),this.params=t,this.app=n,this.dailyMusic=[],this.moreResults=!1,this.loading=!1,this.qBuilder={}}var n=t.prototype;return n.requestParams=function(){var t={include:[],filter:{}};return this.params.q&&(t.filter.q=this.params.q),t},n.getParams=function(){return this.params},n.clear=function(){this.dailyMusic=[],m.redraw()},n.refreshParams=function(t){var n=this;if(!this.hasUsers()||Object.keys(t).some((function(e){return n.getParams()[e]!==t[e]}))){this.params=t,t.qBuilder&&(Object.assign(this.qBuilder,t.qBuilder||{}),this.params.q=Object.values(this.qBuilder).join(" ").trim()),this.params.q,this.refresh()}},n.refresh=function(){var t=this;return this.loading=!0,this.clear(),this.loadResults().then((function(n){t.dailyMusic=[],t.parseResults(n)}),(function(){t.loading=!1,m.redraw()}))},n.loadResults=function(t){var n=this.requestParams();return n.page={offset:t},n.include=n.include.join(","),this.app.store.find("daily-music",n)},n.loadMore=function(){this.loading=!0,this.loadResults(this.dailyMusic.length).then(this.parseResults.bind(this))},n.parseResults=function(t){var n;return(n=this.dailyMusic).push.apply(n,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},n.hasUsers=function(){return this.dailyMusic.length>0},n.isLoading=function(){return this.loading},n.isSearchResults=function(){return!!this.params.q},n.empty=function(){return!this.hasUsers()&&!this.isLoading()},t}()),j=e(12),q=e.n(j),I=e(13),w=e.n(I),B=(e(19),e(14)),k=e.n(B),R=e(6),S=e.n(R),C=e(1),L=e.n(C),A=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).id=L.a.attribute("id"),n.title=L.a.attribute("title"),n.url=L.a.attribute("url"),n.released=L.a.attribute("released"),n.discussion_id=L.a.attribute("discussion_id"),n}return d(n,t),n}(L.a),D=function(t){function n(){return t.apply(this,arguments)||this}d(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.daily_music=app.store.createRecord("daily-music"),this.title=S()(this.daily_music.title()||""),this.url=S()(this.daily_music.url()||"")},e.className=function(){return"AddMusicModal Modal--small"},e.title=function(){return"添加"},e.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.items().toArray()))},e.onsubmit=function(t){var n=this;t.preventDefault(),this.loading=!0,this.daily_music.save({title:this.title(),url:this.url()}).then((function(){return n.hide()}),(function(t){n.loading=!1,n.handleErrors(t)}))},e.items=function(){var t=new y.a;return t.add("title",[m("div",{className:"Form-group"},m("label",null,"标题"),m("input",{className:"FormControl",placeholder:"标题",value:this.title(),bidi:this.title}))],100),t.add("url",[m("div",{className:"Form-group"},m("label",null,"链接"),m("input",{className:"FormControl",placeholder:"链接",value:this.url(),bidi:this.url}))],100),t.add("actions",[m("div",{className:"Form-group"},M.a.component({type:"submit",className:"Button Button--primary",loading:this.loading},"提交"))],0),t},n}(k.a),F=function(t){function n(){return t.apply(this,arguments)||this}d(n,t);var e=n.prototype;return e.view=function(){var t,n=this.attrs.state;n.isLoading()?t=w.a.component():n.moreResults&&(t=M.a.component({className:"Button",onclick:n.loadMore.bind(n)},a.a.translator.trans("daily-music.forum.page.load_more_button")));var e=M.a.component({className:"Button",onclick:this.addButtonClicked.bind(this)},"添加");return m("div",null,m("table",{className:"daily-music-table"},m("tr",null,m("th",null,"标题"),m("th",null,"链接"),m("th",null,"是否发布")),n.dailyMusic.map((function(t){return m("tr",null,m("td",null,t.data.attributes.title),m("td",null,t.data.attributes.url),m("td",null,t.data.attributes.released?"Y":"N"))}))),m("div",{className:"DailyMusicList-loadMore"},t,e))},e.addButtonClicked=function(t){t.preventDefault(),a.a.modal.show(D)},n}(q.a),U=function(t){function n(){return t.apply(this,arguments)||this}d(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.dailyMusic=[],this.bodyClass="User--directory",this.state=new O({}),this.state.refreshParams(a.a.search.params()),console.log(this.state),a.a.history.push("users",a.a.translator.trans("daily-music.forum.header.back_to_user_directory_tooltip"))},e.view=function(){return m("div",{className:"IndexPage"},x.a.prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,b()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m(F,{state:this.state})))))},e.sidebarItems=function(){var t=x.a.prototype.sidebarItems();return t.setContent("nav",P.a.component({buttonClassName:"Button",className:"App-titleControl"},this.navItems().toArray())),t},e.navItems=function(){var t=x.a.prototype.navItems(),n=this.stickyParams();return t.add("daily-music",c.a.component({href:a.a.route("daily_music",n),icon:"fas fa-music"},a.a.translator.trans("daily-music.forum.page.nav")),86),t},e.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n}(f.a),T={AddMusic:D};a.a.initializers.add("shuke-daily-music",(function(t){t.routes.daily_music={path:"/daily-music",component:U},t.store.models["daily-music"]=A,Object(o.extend)(s.a.prototype,"navItems",(function(n){t.forum.attribute("canSeeDailyMusicLink")&&n.add("daily-music",c.a.component({href:t.route("daily_music"),icon:"fas fa-music"},t.translator.trans("daily-music.forum.page.nav")),86)}))}))}]);
//# sourceMappingURL=forum.js.map