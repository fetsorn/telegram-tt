"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[3748],{3748:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var i=s(57710),r=s(863),a=s(9933),n=s(3570),o=s(26926),h=s(76857);function d(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const c=Symbol("WAITING"),l=r.wZ||r.cj?.75:1,m=r.wZ?.5:.75,u=24,g=r.s$?2:4,p={},f=(0,h.Z)().map((e=>{let{connector:t}=e;return t})),v=new Map;let y=-1;class w{static init(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const[,i,r,a,n=(0,o.Z)(p,!0),,h]=t;let d=v.get(r);return d?d.addView(n,i,h,a?.coords):(d=new w(...t),v.set(r,d)),d}constructor(e,t,s,i){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:(0,o.Z)(p,!0),a=arguments.length>5?arguments[5]:void 0,n=arguments.length>6?arguments[6]:void 0,h=arguments.length>7?arguments[7]:void 0,c=arguments.length>8?arguments[8]:void 0;this.tgsUrl=e,this.container=t,this.renderId=s,this.params=i,this.customColor=a,this.onLoad=n,this.onEnded=h,this.onLoop=c,d(this,"views",new Map),d(this,"imgSize",void 0),d(this,"imageData",void 0),d(this,"msPerFrame",1e3/60),d(this,"reduceFactor",1),d(this,"cacheModulo",void 0),d(this,"workerIndex",void 0),d(this,"frames",[]),d(this,"framesCount",void 0),d(this,"isAnimating",!1),d(this,"isWaiting",!0),d(this,"isEnded",!1),d(this,"isDestroyed",!1),d(this,"isRendererInited",!1),d(this,"approxFrameIndex",0),d(this,"prevFrameIndex",-1),d(this,"stopFrameIndex",0),d(this,"speed",1),d(this,"direction",1),d(this,"lastRenderAt",void 0),this.addView(r,t,n,i.coords),this.initConfig(),this.initRenderer()}removeView(e){const{canvas:t,ctx:s,isSharedCanvas:i,coords:r}=this.views.get(e);i?s.clearRect(r.x,r.y,this.imgSize,this.imgSize):t.remove(),this.views.delete(e),this.views.size||this.destroy()}isPlaying(){return this.isAnimating||this.isWaiting}play(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;t&&(this.views.get(t).isPaused=!1),this.isEnded&&e&&(this.approxFrameIndex=Math.floor(0)),this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}pause(e){e&&(this.views.get(e).isPaused=!0,!Array.from(this.views.values()).every((e=>{let{isPaused:t}=e;return t})))||(this.isWaiting?this.stopFrameIndex=this.approxFrameIndex:this.isAnimating=!1,this.params.isLowPriority||(this.frames=this.frames.map(((e,t)=>t===this.prevFrameIndex?e:void(e&&e!==c&&e.close())))))}playSegment(e){let[t,s]=e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0;r&&(this.views.get(r).isPaused=!1);const a=Math.round(this.approxFrameIndex);this.stopFrameIndex=Math.floor(s/this.reduceFactor),(a!==s||i)&&(this.approxFrameIndex=Math.floor(t/this.reduceFactor)),this.direction=t<s?1:-1,this.doPlay()}setSpeed(e){this.speed=e}setNoLoop(e){this.params.noLoop=e}setSharedCanvasCoords(e,t){const s=this.views.get(e),{canvas:r,ctx:a}=s;let[n,o]=[r.width,r.height];if(!r.dataset.isJustCleaned||"false"===r.dataset.isJustCleaned){const e=this.calcSizeFactor();[n,o]=x(r,e),a.clearRect(0,0,n,o),r.dataset.isJustCleaned="true",(0,i.i$)((()=>{r.dataset.isJustCleaned="false"}))}s.coords={x:Math.round((t?.x||0)*n),y:Math.round((t?.y||0)*o)};const h=this.getFrame(this.prevFrameIndex)||this.getFrame(Math.round(this.approxFrameIndex));h&&h!==c&&a.drawImage(h,s.coords.x,s.coords.y)}addView(e,t,s,r){const a=this.calcSizeFactor();let n;if(t instanceof HTMLDivElement){if(!(t.parentNode instanceof HTMLElement))throw new Error("[RLottie] Container is not mounted");const{size:r}=this.params;n=Math.round(r*a),this.imgSize||(this.imgSize=n,this.imageData=new ImageData(n,n)),(0,i.WM)((()=>{const i=document.createElement("canvas"),a=i.getContext("2d");i.style.width=`${r}px`,i.style.height=`${r}px`,i.width=n,i.height=n,t.appendChild(i),this.views.set(e,{canvas:i,ctx:a,onLoad:s})}))}else{if(!t.isConnected)throw new Error("[RLottie] Shared canvas is not mounted");const i=t,o=i.getContext("2d");n=Math.round(this.params.size*a),this.imgSize||(this.imgSize=n,this.imageData=new ImageData(n,n));const[h,d]=x(i,a);this.views.set(e,{canvas:i,ctx:o,isSharedCanvas:!0,coords:{x:Math.round(r.x*h),y:Math.round(r.y*d)},onLoad:s})}this.isRendererInited&&this.doPlay()}calcSizeFactor(){const{size:e,isLowPriority:t,quality:s=(t&&(!e||e>u)?m:l)}=this.params;return Math.max(r.cL*s,1)}destroy(){this.isDestroyed=!0,this.pause(),this.clearCache(),this.destroyRenderer(),v.delete(this.renderId)}clearCache(){this.frames.forEach((e=>{e&&e!==c&&e.close()})),this.imageData=void 0,this.frames=[]}initConfig(){const{isLowPriority:e}=this.params;this.cacheModulo=e?0:g}setColor(e){this.customColor=e}initRenderer(){this.workerIndex=(0,n.Z)(h.j,++y),f[this.workerIndex].request({name:"rlottie:init",args:[this.renderId,this.tgsUrl,this.imgSize,this.params.isLowPriority||!1,this.customColor,this.onRendererInit.bind(this)]})}destroyRenderer(){f[this.workerIndex].request({name:"rlottie:destroy",args:[this.renderId]})}onRendererInit(e,t,s){this.isRendererInited=!0,this.reduceFactor=e,this.msPerFrame=t,this.framesCount=s,this.isWaiting&&this.doPlay()}changeData(e){this.pause(),this.tgsUrl=e,this.initConfig(),f[this.workerIndex].request({name:"rlottie:changeData",args:[this.renderId,this.tgsUrl,this.params.isLowPriority||!1,this.onChangeData.bind(this)]})}onChangeData(e,t,s){this.reduceFactor=e,this.msPerFrame=t,this.framesCount=s,this.isWaiting=!1,this.isAnimating=!1,this.doPlay()}doPlay(){this.framesCount&&(this.isDestroyed||this.isAnimating||(this.isWaiting||(this.lastRenderAt=void 0),this.isEnded=!1,this.isAnimating=!0,this.isWaiting=!1,(0,a.jt)((()=>{if(this.isDestroyed)return!1;if(!this.isAnimating&&Array.from(this.views.values()).every((e=>{let{isLoaded:t}=e;return t})))return!1;const e=Math.round(this.approxFrameIndex),t=this.getFrame(e);if(!t||t===c)return t||this.requestFrame(e),this.isAnimating=!1,this.isWaiting=!0,!1;this.cacheModulo&&e%this.cacheModulo==0&&this.cleanupPrevFrame(e),e!==this.prevFrameIndex&&(this.views.forEach((e=>{const{ctx:s,isLoaded:i,isPaused:r,coords:{x:a,y:n}={},onLoad:o}=e;i&&r||(s.clearRect(a||0,n||0,this.imgSize,this.imgSize),s.drawImage(t,a||0,n||0)),i||(e.isLoaded=!0,o?.())})),this.prevFrameIndex=e);const s=Date.now(),i=this.lastRenderAt?this.msPerFrame/(s-this.lastRenderAt):1,r=Math.min(1,this.direction*this.speed/i),a=Math.round(this.approxFrameIndex+r);if(this.lastRenderAt=s,r>0&&(e===this.framesCount-1||a>this.framesCount-1)){if(this.params.noLoop)return this.isAnimating=!1,this.isEnded=!0,this.onEnded?.(),!1;this.onLoop?.(),this.approxFrameIndex=0}else if(r<0&&(0===e||a<0)){if(this.params.noLoop)return this.isAnimating=!1,this.isEnded=!0,this.onEnded?.(),!1;this.onLoop?.(),this.approxFrameIndex=this.framesCount-1}else{if(void 0!==this.stopFrameIndex&&(e===this.stopFrameIndex||r>0&&a>this.stopFrameIndex||r<0&&a<this.stopFrameIndex))return this.stopFrameIndex=void 0,this.isAnimating=!1,!1;this.approxFrameIndex+=r}const n=Math.round(this.approxFrameIndex);return!!this.getFrame(n)||(this.requestFrame(n),this.isWaiting=!0,this.isAnimating=!1,!1)}),i.WM)))}getFrame(e){return this.frames[e]}requestFrame(e){this.frames[e]=c,f[this.workerIndex].request({name:"rlottie:renderFrames",args:[this.renderId,e,this.onFrameLoad.bind(this)]})}cleanupPrevFrame(e){if(this.framesCount<3)return;const t=(0,n.Z)(this.framesCount,e-1);this.frames[t]=void 0}onFrameLoad(e,t){this.frames[e]===c&&(this.frames[e]=t,this.isWaiting&&this.doPlay())}}function x(e,t){const s=Math.round(e.offsetWidth*t),r=Math.round(e.offsetHeight*t);return e.width===s&&e.height===r||(0,i.WM)((()=>{e.width=s,e.height=r})),[s,r]}const I=w},74095:(e,t,s)=>{s.d(t,{K:()=>n});var i=s(26926);function r(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class a{constructor(e,t,s){this.target=e,this.onUpdate=t,this.channel=s,r(this,"requestStates",new Map),r(this,"requestStatesByCallback",new Map)}destroy(){}init(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];this.postMessage({type:"init",args:t})}request(e){const{requestStates:t,requestStatesByCallback:s}=this,r=(0,i.Z)(t),a={type:"callMethod",messageId:r,...e},n={messageId:r},o=new Promise(((e,t)=>{Object.assign(n,{resolve:e,reject:t})}));if("function"==typeof a.args[a.args.length-1]){a.withCallback=!0;const e=a.args.pop();n.callback=e,s.set(e,n)}return t.set(r,n),o.catch((()=>{})).finally((()=>{t.delete(r),n.callback&&s.delete(n.callback)})),this.postMessage(a),o}cancelCallback(e){e.isCanceled=!0;const{messageId:t}=this.requestStatesByCallback.get(e)||{};t&&this.postMessage({type:"cancelProgress",messageId:t})}onMessage(e){const{requestStates:t,channel:s}=this;if(e.channel===s)if("update"===e.type&&this.onUpdate&&this.onUpdate(e.update),"methodResponse"===e.type){const s=t.get(e.messageId);s&&(e.error?s.reject(e.error):s.resolve(e.response))}else if("methodCallback"===e.type)t.get(e.messageId)?.callback?.(...e.callbackArgs);else if("unhandledError"===e.type)throw new Error(e.error?.message)}postMessage(e){e.channel=this.channel,this.target.postMessage(e)}}function n(e,t,s){const i=new a(e,t,s);function r(e){let{data:t}=e;i.onMessage(t)}return e.addEventListener("message",r),i.destroy=()=>{e.removeEventListener("message",r)},i}},3570:(e,t,s)=>{function i(e,t){return t-Math.floor(t/e)*e}s.d(t,{Z:()=>i})},76857:(e,t,s)=>{s.d(t,{Z:()=>o,j:()=>a});var i=s(863),r=s(74095);const a=Math.min(navigator.hardwareConcurrency||4,4);let n;function o(){return i.ur?(n||(n=new Array(a).fill(void 0).map((()=>{const e=new Worker(new URL(s.p+s.u(5648),s.b));return{worker:e,connector:(0,r.K)(e)}}))),n):[]}}}]);
//# sourceMappingURL=3748.6aaea96fc69916190da9.js.map