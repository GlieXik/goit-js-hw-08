!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return m?v(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&i?y(e):(i=o=void 0,u)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?g(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j,O="feedback-form-state",h={email:"",message:""},w={email:document.querySelector("input[name='email']"),message:document.querySelector("textarea[name='message']"),submit:document.querySelector(".feedback-form")};(j=JSON.parse(localStorage.getItem(O)))&&(w.email.value=j.email,w.message.value=j.message,h.email=j.email,h.message=j.message),w.email.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))}),500)),w.message.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(h))}),500)),w.submit.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(O)}))}();
//# sourceMappingURL=03-feedback.39996244.js.map
