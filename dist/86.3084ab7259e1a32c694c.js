"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[86],{7799:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(4050),o=n(9118),d=n(6752),s=n(8674),c=n(5332);let a,i;async function l(){return a||(a=n.e(941).then(n.bind(n,7941)),i=(await a).default),a}setTimeout(l,3e3);const u=(0,r.X$)((e=>{let{className:t,id:n,animationData:a,play:u,playSegment:f,speed:h,noLoop:m,size:I,quality:p,isLowPriority:y,color:v,forceOnHeavyAnimation:g,onLoad:C,onEnded:B}=e;const[w,b]=(0,r.eJ)(),Z=(0,r.sO)(null),F=(0,r.sO)(!1),S=(0,r.sO)(!1),P=(0,r.sO)(!0),E=(0,r.sO)();E.current=u;const x=(0,r.sO)();x.current=f,(0,r.d4)((()=>{if(w||!a)return;const e=()=>{if(!Z.current)return;const e=new i(n,Z.current,a,{noLoop:m,size:I,quality:p,isLowPriority:y},C,v,B);h&&e.setSpeed(h),b(e)};i?e():l().then((()=>{(0,o.T2)((()=>{Z.current&&e()}))}))}),[v,w,a,n,y,m,C,p,I,h,B]),(0,r.d4)((()=>{w&&w.setColor(v)}),[v,w]),(0,r.d4)((()=>()=>{w&&w.destroy()}),[w]);const k=(0,r.I4)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];w&&(E.current||x.current)&&(x.current?w.playSegment(x.current):e?w.goToAndPlay(0):w.play())}),[w]),T=(0,r.I4)((()=>{w&&w.pause()}),[w]),A=(0,r.I4)((()=>{S.current=!0,w&&(F.current||(F.current=w.isPlaying()),T())}),[w,T]),N=(0,r.I4)((()=>{F.current&&k(),F.current=!1,S.current=!1}),[k]),L=(0,r.I4)((()=>{(0,o.T2)(N)}),[N]);(0,r.d4)((()=>{w&&(u||f?S.current?F.current=!0:k(m):S.current?F.current=!1:T())}),[w,u,f,m,k,T]),(0,r.d4)((()=>{w&&(P.current?P.current=!1:a&&(w.changeData(a),k()))}),[k,w,a]),(0,s.ZP)(A,N,g),(0,c.Z)(A,L);const M=(0,d.Z)("AnimatedSticker",t),O=I?`width: ${I}px; height: ${I}px;`:void 0;return r.ZP.createElement("div",{ref:Z,className:M,style:O})}))},172:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(4050),o=n(6137),d=n(3716),s=n(8415),c=n(2155),a=n(6752),i=n(2340),l=n(6202),u=n(1212),f=n(9107);const h=(0,r.X$)((e=>{let{className:t,size:n="large",chat:h,user:m,photo:I,userStatus:p,text:y,isSavedMessages:v,lastSyncTime:g,onClick:C}=e;const B=m&&(0,s.NB)(m),w=m&&(0,s.pK)(m.id);let b;v||B||(m?b=(0,s.RT)(m):h?b=(0,s.RT)(h):I&&(b=`photo${I.id}?size=m`));const Z=(0,l.Z)(b,!1,o.IU.BlobUrl,g),F=Boolean(Z),{transitionClassNames:S}=(0,u.Z)(F,void 0,F,"slow"),P=(0,f.Z)();let E="";if(v)E=r.ZP.createElement("i",{className:"icon-avatar-saved-messages"});else if(B)E=r.ZP.createElement("i",{className:"icon-avatar-deleted-account"});else if(w)E=r.ZP.createElement("i",{className:"icon-reply-filled"});else if(Z)E=r.ZP.createElement("img",{src:Z,className:(0,a.Z)("avatar-media",S),alt:"",decoding:"async"});else if(m){const e=(0,s.Js)(m);E=e?(0,c.Xv)(e,2):void 0}else if(h){const e=(0,s.U)(P,h);E=e&&(0,c.Xv)(e,(0,s.YC)(h.id)?2:1)}else y&&(E=(0,c.Xv)(y,2));const x=!v&&m&&p&&(0,s.kM)(m,p),k=(0,a.Z)(`Avatar size-${n}`,t,`color-bg-${(0,s.Rs)(m||h)}`,v&&"saved-messages",B&&"deleted-account",w&&"replies-bot-account",x&&"online",C&&"interactive",!v&&!Z&&"no-photo"),T=Boolean(v||Z),A=(0,r.I4)((e=>{C&&C(e,T)}),[C,T]),N=(m||h)&&(m||h).id;return r.ZP.createElement("div",{className:k,onClick:A,"data-test-sender-id":d.Cg?N:void 0},"string"==typeof E?(0,i.Z)(E,["jumbo"===n?"hq_emoji":"emoji"]):E)}))},7324:(e,t,n)=>{n.d(t,{x:()=>d,Z:()=>s});var r=n(6137),o=n(647);const d={MonkeyIdle:n(8760),MonkeyTracking:n(6917),MonkeyClose:n(6257),MonkeyPeek:n(7785),FoldersAll:n(9356),FoldersNew:n(5485),DiscussionGroups:n(6978),CameraFlip:n(5665),HandFilled:n(2456),HandOutline:n(5667),Speaker:n(8763),VoiceAllowTalk:n(401),VoiceMini:n(5106),VoiceMuted:n(487),VoiceOutlined:n(5740),Peach:n(3677),Eggplant:n(5435),Cumshot:n(1879),JoinRequest:n(5095),Invite:n(7879)};function s(e){const t=d[e].replace(window.location.origin,"");return o.he(`file${t}`,r.IU.Lottie)}},7551:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4050),o=n(9107),d=n(3103),s=n(231);const c=(0,r.X$)((e=>{let{isOpen:t,onClose:n,onCloseAnimationEnd:c,title:a,header:i,text:l,textParts:u,confirmLabel:f="Confirm",confirmHandler:h,confirmIsDestructive:m,isButtonsInOneRow:I,children:p}=e;const y=(0,o.Z)();return r.ZP.createElement(d.Z,{className:"confirm",title:a,header:i,isOpen:t,onClose:n,onCloseAnimationEnd:c,onEnter:h},l&&l.split("\\n").map((e=>r.ZP.createElement("p",null,e))),u||p,r.ZP.createElement("div",{className:I?"dialog-buttons mt-2":""},r.ZP.createElement(s.Z,{className:"confirm-dialog-button",isText:!0,onClick:h,color:m?"danger":"primary"},f),r.ZP.createElement(s.Z,{className:"confirm-dialog-button",isText:!0,onClick:n},y("Cancel"))))}))},1273:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(1713),o=n(4050),d=n(9118),s=n(7675),c=n(7361);const a=".ListItem",i=20,l=800,u=e=>{let{ref:t,className:n,onLoadMore:u,onScroll:f,onKeyDown:h,items:m,itemSelector:I=a,preloadBackwards:p=i,sensitiveArea:y=l,withAbsolutePositioning:v,maxHeight:g,noScrollRestore:C=!1,noScrollRestoreOnTop:B=!1,noFastList:w,cacheBuster:b,children:Z}=e,F=(0,o.sO)(null);t&&(F=t);const S=(0,o.sO)({}),[P,E]=(0,o.Ye)((()=>u?[(0,d.Ds)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u({direction:r.Uq.Backwards,noScroll:e})}),1e3,!0,!1),(0,d.Ds)((()=>{u({direction:r.Uq.Forwards})}),1e3,!0,!1)]:[]),[u,m]);(0,o.d4)((()=>{if(!P)return;if(p>0&&(!m||m.length<p))return void P(!0);const{scrollHeight:e,clientHeight:t}=F.current;t&&e<=t&&P()}),[m,P,p]),(0,o.bt)((()=>{const e=F.current,t=S.current;let n;if(t.listItemElements=e.querySelectorAll(I),t.currentAnchor&&Array.from(t.listItemElements).includes(t.currentAnchor)){const{scrollTop:r}=e;n=r+(t.currentAnchor.getBoundingClientRect().top-t.currentAnchorTop)}else{const e=t.listItemElements[0];e&&(t.currentAnchor=e,t.currentAnchorTop=e.getBoundingClientRect().top)}v||C||B&&0===e.scrollTop||((0,s.Z)(e,n),t.isScrollTopJustUpdated=!0)}),[m,I,C,B,b,v]);const x=(0,o.I4)((e=>{if(E&&P){const{isScrollTopJustUpdated:e,currentAnchor:t,currentAnchorTop:n}=S.current,r=S.current.listItemElements;if(e)return void(S.current.isScrollTopJustUpdated=!1);const o=r.length,d=F.current,{scrollTop:s,scrollHeight:c,offsetHeight:a}=d,i=s<=(o?r[0].offsetTop:0)+y,l=(o?r[o-1].offsetTop+r[o-1].offsetHeight:c)-(s+a)<=y;let u=!1;if(i){const e=r[0];if(e){const r=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:r;t&&void 0!==n&&o>n&&(S.current.currentAnchor=e,S.current.currentAnchorTop=r,u=!0,E())}}if(l){const e=r[o-1];if(e){const r=e.getBoundingClientRect().top,o=null!=t&&t.offsetParent&&t!==e?t.getBoundingClientRect().top:r;t&&void 0!==n&&o<n&&(S.current.currentAnchor=e,S.current.currentAnchorTop=r,u=!0,P())}}if(!u)if(null!=t&&t.offsetParent)S.current.currentAnchorTop=t.getBoundingClientRect().top;else{const e=r[0];e&&(S.current.currentAnchor=e,S.current.currentAnchorTop=e.getBoundingClientRect().top)}}f&&f(e)}),[P,E,f,y]);return o.ZP.createElement("div",{ref:F,className:n,onScroll:x,teactFastList:!w&&!v,onKeyDown:h},v&&null!=m&&m.length?o.ZP.createElement("div",{teactFastList:!w,style:`position: relative;${c.wZ?` height: ${g}px;`:void 0}`},Z):Z)}},3103:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(4050),o=n(517),d=n(6752),s=n(8674),c=n(1212),a=n(274),i=n(9107),l=n(6590),u=n(231),f=n(2898);const h=e=>{let{dialogRef:t,title:n,className:h,isOpen:m,header:I,hasCloseButton:p,noBackdrop:y,children:v,onClose:g,onCloseAnimationEnd:C,onEnter:B,shouldSkipHistoryAnimations:w}=e;const{shouldRender:b,transitionClassNames:Z}=(0,c.Z)(m,C,w,void 0,w),F=(0,r.sO)(null);(0,r.d4)((()=>m?(0,o.Z)({onEsc:g,onEnter:B}):void 0),[m,g,B]),(0,r.d4)((()=>m&&F.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const r=n.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;r>=0&&(o=t.shiftKey?r>0?r-1:n.length-1:r<n.length-1?r+1:0),n[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(F.current):void 0),[m]);const{forceClose:S}=(0,l.ZP)(m,g);(0,r.d4)((()=>()=>{m&&S()}),[]),(0,a.Z)((e=>{let[t]=e;return document.body.classList.toggle("has-open-dialog",m),(m||!m&&void 0!==t)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")}}),[m]);const P=(0,i.Z)();if(!b)return;const E=(0,d.Z)("Modal",h,Z,y&&"transparent-backdrop");return r.ZP.createElement(f.Z,null,r.ZP.createElement("div",{ref:F,className:E,tabIndex:-1,role:"dialog"},r.ZP.createElement("div",{className:"modal-container"},r.ZP.createElement("div",{className:"modal-backdrop",onClick:g}),r.ZP.createElement("div",{className:"modal-dialog",ref:t},I||(n?r.ZP.createElement("div",{className:"modal-header"},p&&r.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:P("Close"),onClick:g},r.ZP.createElement("i",{className:"icon-close"})),r.ZP.createElement("div",{className:"modal-title"},n)):void 0),r.ZP.createElement("div",{className:"modal-content custom-scroll"},v)))))}},2898:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(4050),o=n(2916);const d=e=>{let{containerId:t,className:n,children:d}=e;const s=(0,r.sO)();return s.current||(s.current=document.createElement("div")),(0,r.bt)((()=>{const e=document.querySelector(t||"#portals");if(!e)return;const r=s.current;return n&&r.classList.add(n),e.appendChild(r),()=>{o.Z.render(void 0,r),e.removeChild(r)}}),[n,t]),o.Z.render(d,s.current)}},5332:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(4050);function o(e,t){(0,r.d4)((()=>(e&&!document.hasFocus()&&e(),e&&window.addEventListener("blur",e),t&&window.addEventListener("focus",t),()=>{t&&window.removeEventListener("focus",t),e&&window.removeEventListener("blur",e)})),[e,t])}},8360:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7204);function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=(0,r.Z)(e,t);return n||null!=e?e:o}},7407:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(4050),o=n(1713),d=n(782),s=n(5326),c=n(7204);function a(e,t,n,r){const{length:d}=e,s=r?e.indexOf(r):0,c=t===o.Uq.Forwards?s:s+1||d,a=Math.max(0,c-n),i=c+n-1,l=e.slice(Math.max(0,a),i+1);let u,f;switch(t){case o.Uq.Forwards:u=c>0,f=a>=0;break;case o.Uq.Backwards:u=c<d,f=i<=d-1}return{newViewportIds:l,areSomeLocal:u,areAllLocal:f}}const i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30,l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const u=(0,r.sO)(),f=(0,r.sO)((()=>{if(!t||u.current)return;const{newViewportIds:e}=a(t,o.Uq.Forwards,i,t[0]);return e})()),h=(0,s.Z)();n&&(u.current={});const m=(0,c.Z)(t),I=(0,c.Z)(n);if(t&&!n&&(t!==m||n!==I)){const{offsetId:e=t[0],direction:n=o.Uq.Forwards}=u.current||{},{newViewportIds:r}=a(t,n,i,e);f.current&&(0,d.et)(f.current,r)||(f.current=r)}(0,r.d4)((()=>{if(t&&!n&&e&&l){const t=f.current;e({offsetId:t[t.length-1]})}}),[t,n,e,l]);const p=(0,r.I4)((n=>{let{direction:r,noScroll:s}=n;const c=f.current,l=c?r===o.Uq.Backwards?c[c.length-1]:c[0]:void 0;if(!t)return void(e&&e({offsetId:l}));s||(u.current={...u.current,direction:r,offsetId:l});const{newViewportIds:m,areSomeLocal:I,areAllLocal:p}=a(t,r,i,l);!I||c&&(0,d.et)(c,m)||(f.current=m,h()),!p&&e&&e({offsetId:l})}),[t,i,e,h]);return n?[t]:[f.current,p]}},6202:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(4050),o=n(6137),d=n(647),s=n(5326);const c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.IU.BlobUrl,c=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0;const i=e?d.UV(e):void 0,l=(0,s.Z)();return(0,r.d4)((()=>{if(!t&&e&&!i){const t=Date.now();d.he(e,n).then((()=>{const e=Date.now()-t;!a||e>=a?l():setTimeout(l,a-e)}))}}),[t,e,i,n,c,l,a]),i}},4319:(e,t,n)=>{n.d(t,{yl:()=>o,TE:()=>s,VP:()=>c});var r=n(3716);const o=navigator.clipboard&&window.ClipboardItem,d=document.createElement("textarea");d.setAttribute("readonly",""),d.tabIndex=-1,d.className="visually-hidden";const s=e=>{d.value=e,document.body.appendChild(d);const t=document.getSelection();if(t){const e=t.rangeCount>0&&t.getRangeAt(0);d.select(),document.execCommand("copy"),e&&(t.removeAllRanges(),t.addRange(e))}document.body.removeChild(d)},c=e=>{if(!e)return;const t=document.createElement("canvas"),n=t.getContext("2d"),r=new Image;r.onload=e=>{if(n&&e.currentTarget){const r=e.currentTarget;t.width=r.width,t.height=r.height,n.drawImage(r,0,0,r.width,r.height),t.toBlob(a,"image/png",1)}},r.src=e};async function a(e){if(e&&o)try{var t,n;await(null===(t=(n=navigator.clipboard).write)||void 0===t?void 0:t.call(n,[new ClipboardItem({[e.type]:e})]))}catch(e){r.eM&&console.error(e)}}},6974:(e,t,n)=>{n.d(t,{gO:()=>y,Yz:()=>v,wC:()=>g,xW:()=>C,aE:()=>B,M2:()=>w,r_:()=>b,O6:()=>Z});var r=n(5116),o=n(3716),d=n(9066),s=n(8415),c=n(9118),a=n(782),i=n(275),l=n(6063);const u={foldersById:{},chatsById:{},usersById:{},notifySettings:{},notifyExceptions:{}},f={folderSummariesById:{},chatSummariesById:new Map,folderIdsByChatId:{},chatIdsByFolderId:{},isOrderedListJustPatched:{}},h={orderedIdsByFolderId:{},chatsCountByFolderId:{},unreadCountersByFolderId:{}},m={orderedIdsByFolderId:{},chatsCountByFolderId:(0,l._)(),unreadCountersByFolderId:(0,l._)()},I=(0,c.P2)((()=>{(0,c.Q8)((()=>{F((0,r.Rd)())}))}),500);function p(){(0,r.ll)(I),F((0,r.Rd)())}function y(e){return p(),h.orderedIdsByFolderId[e]}function v(){return p(),h.chatsCountByFolderId}function g(){return p(),h.unreadCountersByFolderId}function C(){var e;return(null===(e=g()[o.Nf])||void 0===e?void 0:e.notificationsCount)||0}function B(e){var t,n;return null===(t=f.folderSummariesById[e])||void 0===t||null===(n=t.pinnedChatIds)||void 0===n?void 0:n.size}function w(e,t){return m.orderedIdsByFolderId[e]||(m.orderedIdsByFolderId[e]=(0,l._)()),m.orderedIdsByFolderId[e].addCallback(t)}function b(e){return m.chatsCountByFolderId.addCallback(e)}function Z(e){return m.unreadCountersByFolderId.addCallback(e)}function F(e){let t;o.eM&&(t=performance.now());const n=Boolean(e.chats.listIds.active&&S(o.Nf,e.chats.listIds.active,e.chats.orderedPinnedIds.active)),r=Boolean(e.chats.listIds.archived&&S(o.WS,e.chats.listIds.archived,e.chats.orderedPinnedIds.archived)),c=e.chatFolders.byId!==u.foldersById,l=e.chats.byId!==u.chatsById,I=e.users.byId!==u.usersById,p=(0,d.dZ)(e)!==u.notifySettings,y=(0,d.NJ)(e)!==u.notifyExceptions;if(!(n||r||c||l||I||p||y))return;const v=u.allFolderListIds,g=u.archivedFolderListIds;!function(e,t,n,r){const d=[];if(t){const t=e.chats.listIds.active,n=e.chats.orderedPinnedIds.active;f.folderSummariesById[o.Nf]=P(o.Nf,t,n),u.allFolderListIds=t,u.allFolderPinnedIds=n,d.push(o.Nf)}if(n){const t=e.chats.listIds.archived,n=e.chats.orderedPinnedIds.archived;f.folderSummariesById[o.WS]=P(o.WS,t,n),u.archivedFolderListIds=t,u.archivedFolderPinnedIds=n,d.push(o.WS)}if(r){const t=e.chatFolders.byId;Object.values(t).forEach((e=>{e!==u.foldersById[e.id]&&(f.folderSummariesById[e.id]=function(e){return{...e,orderedPinnedIds:e.pinnedChatIds,excludedChatIds:e.excludedChatIds?new Set(e.excludedChatIds):void 0,includedChatIds:e.excludedChatIds?new Set(e.includedChatIds):void 0,pinnedChatIds:e.excludedChatIds?new Set(e.pinnedChatIds):void 0}}(e),d.push(e.id))})),u.foldersById=t}}(e,n,r,c);const C=function(e,t,n,r,c,l){const m=e.chats.byId,I=e.users.byId,p=(0,d.dZ)(e),y=(0,d.NJ)(e),v=Object.values(f.folderSummariesById),g=new Set,C=e.chats.listIds.active,B=e.chats.listIds.archived;let w=[...C||[],...B||[]];return C===c&&B===l||(w=(0,a.Tw)(w.concat(c||[],l||[]))),w.forEach((e=>{const d=m[e];if(!t&&!n&&!r&&d===u.chatsById[e]&&I[e]===u.usersById[e])return;let c;if(d){const n=f.chatSummariesById.get(e),r=function(e,t,n,r){const{id:d,type:c,lastMessage:a,isRestricted:i,isNotJoined:l,folderId:u,unreadCount:f,unreadMentionsCount:h,hasUnreadMark:m,joinDate:I,draftDate:p}=e,y="chatTypePrivate"===c&&r;return{id:d,type:c,isListed:Boolean(a&&!i&&!l),isArchived:u===o.WS,isMuted:(0,s.i4)(e,t,n),isUnread:Boolean(f||h||m),unreadCount:f,unreadMentionsCount:h,order:Math.max(I||0,p||0,(null==a?void 0:a.date)||0),isUserBot:y?"userTypeBot"===y.type:void 0,isUserContact:y?y.isContact:void 0}}(d,p,y,I[e]);if(!t&&n&&(0,i.Z)(r,n))return;f.chatSummariesById.set(e,r),c=function(e,t){return t.reduce(((t,n)=>(function(e,t){var n,r,d;if(!e.isListed)return!1;const{id:s,type:c}=e;if(t.listIds)return!(e.isArchived&&t.id===o.Nf||!e.isArchived&&t.id===o.WS)&&t.listIds.has(s);if(null!==(n=t.excludedChatIds)&&void 0!==n&&n.has(s))return!1;if(null!==(r=t.includedChatIds)&&void 0!==r&&r.has(s))return!0;if(null!==(d=t.pinnedChatIds)&&void 0!==d&&d.has(s))return!0;if(t.excludeArchived&&e.isArchived)return!1;if(t.excludeRead&&!e.isUnread)return!1;if(t.excludeMuted&&e.isMuted&&!e.unreadMentionsCount)return!1;if("chatTypePrivate"===c)if(e.isUserBot){if(t.bots)return!0}else{if(t.contacts&&e.isUserContact)return!0;if(t.nonContacts&&!e.isUserContact)return!0}else{if("chatTypeChannel"===c)return Boolean(t.channels);if("chatTypeBasicGroup"===c||"chatTypeSuperGroup"===c)return Boolean(t.groups)}return!1}(e,n)&&t.push(n.id),t)),[]).sort()}(r,v),c.forEach((e=>{g.add(e)}))}else f.chatSummariesById.delete(e),c=[];const l=f.folderIdsByChatId[e]||[];if((0,a.et)(c,l))return;const C=function(e,t,n){const r=new Set(t),o=new Set(n),d=[];return(0,a.Tw)([...t,...n]).forEach((t=>{let n=h.orderedIdsByFolderId[t];r.has(t)&&!o.has(t)?(f.chatIdsByFolderId[t].delete(e),d.push(t),n&&(n=n.filter((t=>t!==e)),f.isOrderedListJustPatched[t]=!0)):!r.has(t)&&o.has(t)&&(f.chatIdsByFolderId[t]||(f.chatIdsByFolderId[t]=new Set),f.chatIdsByFolderId[t].add(e),n&&(n.push(e),f.isOrderedListJustPatched[t]=!0)),h.orderedIdsByFolderId[t]=n})),f.folderIdsByChatId[e]=n,d}(e,l,c);C.forEach((e=>{g.add(e)}))})),u.chatsById=m,u.usersById=I,u.notifySettings=p,u.notifyExceptions=y,Array.from(g)}(e,c,p,y,v,g);if(function(e){let t=!1,n=!1;if(Array.from(e).forEach((e=>{const r=function(e){const{folderSummariesById:{[e]:{orderedPinnedIds:t,pinnedChatIds:n}},chatSummariesById:r,chatIdsByFolderId:{[e]:o}}=f,{orderedIdsByFolderId:{[e]:d}}=h,s=d||Array.from(o);return[...t||[],...(n?s.filter((e=>!n.has(e))):s).sort(((e,t)=>r.get(t).order-r.get(e).order))]}(e),o=h.orderedIdsByFolderId[e];var d;o&&!f.isOrderedListJustPatched[e]&&(0,a.et)(r,o)||(f.isOrderedListJustPatched[e]=!1,h.orderedIdsByFolderId[e]=r,null===(d=m.orderedIdsByFolderId[e])||void 0===d||d.runCallbacks(r));const s=h.chatsCountByFolderId[e],c=r.length;n||(n=s!==c),h.chatsCountByFolderId[e]=c;const l=h.unreadCountersByFolderId[e],u=function(e){const{chatSummariesById:t}=f,{orderedIdsByFolderId:{[e]:n}}=h;return n.reduce(((e,n)=>{const r=t.get(n);return r?(r.isUnread&&(e.chatsCount++,r.unreadMentionsCount&&(e.notificationsCount+=r.unreadMentionsCount),r.isMuted||(r.unreadCount?e.notificationsCount+=r.unreadCount:r.unreadMentionsCount||(e.notificationsCount+=1))),e):e}),{chatsCount:0,notificationsCount:0})}(e);t||(t=!l||!(0,i.Z)(u,l)),h.unreadCountersByFolderId[e]=u})),n){const e={...h.chatsCountByFolderId};h.chatsCountByFolderId=e,m.chatsCountByFolderId.runCallbacks(e)}if(t){const e={...h.unreadCountersByFolderId};h.unreadCountersByFolderId=e,m.unreadCountersByFolderId.runCallbacks(e)}}(C),o.eM){const e=performance.now()-t;e>6&&console.warn(`Slow \`updateFolderManager\`: ${Math.round(e)} ms`)}}function S(e,t,n){const r=e===o.Nf?u.allFolderListIds:u.archivedFolderListIds,d=e===o.Nf?u.allFolderPinnedIds:u.archivedFolderPinnedIds;return r!==t||d!==n}function P(e,t,n){return{id:e,listIds:new Set(t),orderedPinnedIds:n,pinnedChatIds:new Set(n)}}},2972:(e,t,n)=>{function r(e){e.offsetWidth}n.d(t,{Z:()=>r})},7675:(e,t,n)=>{n.d(t,{z:()=>d,Z:()=>s});var r=n(7361),o=n(2972);function d(e){e.style.display="none",(0,o.Z)(e),e.style.display=""}const s=(e,t)=>{r.cj&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),r.cj&&(e.style.overflow="")}},4753:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(3716);const o=e=>{e.play().catch((t=>{r.eM&&console.warn(t,e)}))}},1879:(e,t,n)=>{e.exports=n.p+"Cumshot.7a17984a6b80787dab34..tgs"},5435:(e,t,n)=>{e.exports=n.p+"Eggplant.7693d877087b802d04be..tgs"},3677:(e,t,n)=>{e.exports=n.p+"Peach.a289b2c54c563f11208f..tgs"},5665:(e,t,n)=>{e.exports=n.p+"CameraFlip.1a9fe44cf01fcb22347d..tgs"},2456:(e,t,n)=>{e.exports=n.p+"HandFilled.f87939d160f1dc288586..tgs"},5667:(e,t,n)=>{e.exports=n.p+"HandOutline.f9831751ba60df30c484..tgs"},8763:(e,t,n)=>{e.exports=n.p+"Speaker.04bb3743412b41ff83c5..tgs"},401:(e,t,n)=>{e.exports=n.p+"VoiceAllowTalk.a9cc7c39ec438973ddc9..tgs"},5106:(e,t,n)=>{e.exports=n.p+"VoiceMini.bf00ffdf69625c579569..tgs"},487:(e,t,n)=>{e.exports=n.p+"VoiceMuted.a4b4ec6bfd7c6c5fb275..tgs"},5740:(e,t,n)=>{e.exports=n.p+"VoiceOutlined.91b394ab3562cdfad6bc..tgs"},7879:(e,t,n)=>{e.exports=n.p+"Invite.4502ec3aa4249d6e6723..tgs"},5095:(e,t,n)=>{e.exports=n.p+"Requests.af9f19772695a8898810..tgs"},6257:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e..tgs"},8760:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab..tgs"},7785:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e..tgs"},6917:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12..tgs"},6978:(e,t,n)=>{e.exports=n.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a..tgs"},9356:(e,t,n)=>{e.exports=n.p+"FoldersAll.3f9f9e243d19f0fbf9aa..tgs"},5485:(e,t,n)=>{e.exports=n.p+"FoldersNew.9a40d71c0c8be70f5bd1..tgs"}}]);
//# sourceMappingURL=86.3084ab7259e1a32c694c.js.map