/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.3.45
*/
(function(b){void 0===b.fn.inputmask&&(b.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},escapeChar:"\\",mask:null,oncomplete:b.noop,onincomplete:b.noop,oncleared:b.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:b.noop,onKeyDown:b.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:b.noop,skipOptionalPartCharacter:" ",showTooltip:!1,
numericInput:!1,isNumeric:!1,radixPoint:"",skipRadixDance:!1,rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(b,B,D,F){var s=b.length;B||("*"==D?s=F.length+1:1<D&&(s+=b.length*(D-1)));return s}},escapeRegex:function(b){return b.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},b.fn.inputmask=function(A,
B){function D(a){var b=document.createElement("input"),a="on"+a,c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}function F(d,g){var c=a.aliases[d];return c?(c.alias&&F(c.alias),b.extend(!0,a,c),b.extend(!0,a,g),!0):!1}function s(d){a.numericInput&&(d=d.split("").reverse().join(""));var g=!1,c=0,j=a.greedy,k=a.repeat;"*"==k&&(j=!1);!0==j&&""==a.placeholder&&(a.placeholder=" ");1==d.length&&!1==j&&(a.placeholder="");for(var d=b.map(d.split(""),function(b){var f=[];if(b==
a.escapeChar)g=true;else if(b!=a.optionalmarker.start&&b!=a.optionalmarker.end||g){var k=a.definitions[b];if(k&&!g)for(b=0;b<k.cardinality;b++)f.push(M(c+b));else{f.push(b);g=false}c=c+f.length;return f}}),f=d.slice(),U=1;U<k&&j;U++)f=f.concat(d.slice());return{mask:f,repeat:k,greedy:j}}function H(d){a.numericInput&&(d=d.split("").reverse().join(""));var g=!1,c=!1,j=!1;return b.map(d.split(""),function(b){var f=[];if(b==a.escapeChar)c=!0;else if(b==a.optionalmarker.start&&!c)j=g=!0;else if(b==a.optionalmarker.end&&
!c)g=!1,j=!0;else{var d=a.definitions[b];if(d&&!c){for(var q=d.prevalidator,p=q?q.length:0,e=1;e<d.cardinality;e++){var o=p>=e?q[e-1]:[],v=o.validator,o=o.cardinality;f.push({fn:v?"string"==typeof v?RegExp(v):new function(){this.test=v}:/./,cardinality:o?o:1,optionality:g,newBlockMarker:!0==g?j:!1,offset:0,casing:d.casing,def:d.definitionSymbol||b});!0==g&&(j=!1)}f.push({fn:d.validator?"string"==typeof d.validator?RegExp(d.validator):new function(){this.test=d.validator}:/./,cardinality:d.cardinality,
optionality:g,newBlockMarker:j,offset:0,casing:d.casing,def:d.definitionSymbol||b})}else f.push({fn:null,cardinality:0,optionality:g,newBlockMarker:j,offset:0,casing:null,def:b}),c=!1;j=!1;return f}})}function K(){function d(b){var c=b.length;for(i=0;i<c&&b.charAt(i)!=a.optionalmarker.start;i++);var d=[b.substring(0,i)];i<c&&d.push(b.substring(i+1,c));return d}function g(k,f,n){var q=0,p=0,e=f.length;for(i=0;i<e&&!(f.charAt(i)==a.optionalmarker.start&&q++,f.charAt(i)==a.optionalmarker.end&&p++,0<
q&&q==p);i++);q=[f.substring(0,i)];i<e&&q.push(f.substring(i+1,e));p=d(q[0]);if(1<p.length){if(f=k+p[0]+(a.optionalmarker.start+p[1]+a.optionalmarker.end)+(1<q.length?q[1]:""),-1==b.inArray(f,j)&&(j.push(f),e=s(f),c.push({mask:f,_buffer:e.mask,buffer:e.mask.slice(),tests:H(f),lastValidPosition:-1,greedy:e.greedy,repeat:e.repeat,metadata:n})),f=k+p[0]+(1<q.length?q[1]:""),-1==b.inArray(f,j)&&(j.push(f),e=s(f),c.push({mask:f,_buffer:e.mask,buffer:e.mask.slice(),tests:H(f),lastValidPosition:-1,greedy:e.greedy,
repeat:e.repeat,metadata:n})),1<d(p[1]).length&&g(k+p[0],p[1]+q[1],n),1<q.length&&1<d(q[1]).length)g(k+p[0]+(a.optionalmarker.start+p[1]+a.optionalmarker.end),q[1],n),g(k+p[0],q[1],n)}else f=k+q,-1==b.inArray(f,j)&&(j.push(f),e=s(f),c.push({mask:f,_buffer:e.mask,buffer:e.mask.slice(),tests:H(f),lastValidPosition:-1,greedy:e.greedy,repeat:e.repeat,metadata:n}))}var c=[],j=[];b.isFunction(a.mask)&&(a.mask=a.mask.call(this,a));b.isArray(a.mask)?b.each(a.mask,function(a,b){b.mask!=void 0?g("",b.mask.toString(),
b):g("",b.toString())}):g("",a.mask.toString());return a.greedy?c:c.sort(function(a,b){return a.mask.length-b.mask.length})}function M(b){return a.placeholder.charAt(b%a.placeholder.length)}function z(d,g){function c(){return d[g]}function j(){return c().tests}function k(){return c()._buffer}function f(){return c().buffer}function n(h,w,O){function I(b,h,c,f){for(var w=e(b),aa=c?1:0,t="",Y=h.buffer,d=h.tests[w].cardinality;d>aa;d--)t+=G(Y,w-(d-1));c&&(t+=c);return null!=h.tests[w].fn?h.tests[w].fn.test(t,
Y,b,f,a):c==G(k(),b,!0)||c==a.skipOptionalPartCharacter?{refresh:!0,c:G(k(),b,!0),pos:b}:!1}if(O=!0===O){var E=I(h,c(),w,O);!0===E&&(E={pos:h});return E}var j=[],E=!1,q=g,r=f().slice(),m=c().lastValidPosition;x(h);var y=[];b.each(d,function(b,a){if("object"==typeof a){g=b;var d=h,k=c().lastValidPosition,e;if(k==m&&1<d-m)for(k=-1==k?0:k;k<d&&!(e=I(k,c(),r[k],!0),!1===e);k++)A(f(),k,r[k],!0),!0===e&&(e={pos:k}),e=e.pos||k,c().lastValidPosition<e&&(c().lastValidPosition=e);!p(d)&&!I(d,c(),w,O)&&(d=v(h),
y.push(g));c().lastValidPosition>=m&&(0<=d&&d<o())&&(E=I(d,c(),w,O),!1!==E&&(!0===E&&(E={pos:d}),e=E.pos||d,c().lastValidPosition<e&&(c().lastValidPosition=e)),j.push({activeMasksetIndex:b,result:E}));console.log("pos "+h+" ndx "+g+" validate "+f().join("")+" lv "+c().lastValidPosition)}});g=q;return function(a,h){var c=!1;b.each(h,function(h,f){if(c=-1==b.inArray(f.activeMasksetIndex,a)&&!1!==f.result)return!1});c&&(h=b.map(h,function(h){if(-1==b.inArray(h.activeMasksetIndex,a))return h;d[h.activeMasksetIndex].lastValidPosition=
m}));return h}(y,j)}function q(){var a=g,w={activeMasksetIndex:0,lastValidPosition:-1};b.each(d,function(a,b){"object"==typeof b&&this.lastValidPosition>w.lastValidPosition&&(w.activeMasksetIndex=a,w.lastValidPosition=this.lastValidPosition)});g=-1!=w.lastValidPosition&&d[a].lastValidPosition==w.lastValidPosition?a:w.activeMasksetIndex;a!=g&&(F(f(),v(w.lastValidPosition),o()),c().writeOutBuffer=!0)}function p(a){a=e(a);a=j()[a];return void 0!=a?a.fn:!1}function e(a){return a%j().length}function o(){return a.getMaskLength(k(),
c().greedy,c().repeat,f(),a)}function v(a){var b=o();if(a>=b)return b;for(;++a<b&&!p(a););return a}function x(a){if(0>=a)return 0;for(;0<--a&&!p(a););return a}function A(a,b,c,f){f&&(b=s(a,b));var f=j()[e(b)],d=c;if(void 0!=d)switch(f.casing){case "upper":d=c.toUpperCase();break;case "lower":d=c.toLowerCase()}a[b]=d}function G(a,b,c){c&&(b=s(a,b));return a[b]}function s(a,b){for(var c;void 0==a[b]&&a.length<o();)for(c=0;void 0!==k()[c];)a.push(k()[c++]);return b}function y(a,b,c){a._valueSet(b.join(""));
void 0!=c&&r(a,c)}function F(a,b,c){for(var f=o();b<c&&b<f;b++)A(a,b,G(k().slice(),b,!0))}function B(a,b){var c=e(b);A(a,b,G(k(),c))}function D(a,f,e,j){j=void 0!=j?j.slice():H(a._valueGet()).split("");b.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=0)});!0!==e&&(g=0);f&&a._valueSet("");o();b.each(j,function(d,g){var j=c().lastValidPosition,o=c().p,o=-1==j?d:o;(e&&p(d)||(g!=G(k().slice(),d,!0)||p(d))&&-1==b.inArray(g,k().slice(j+1,o)))&&b(a).trigger("_keypress",
[!0,g.charCodeAt(0),f,e,d])});!0===e&&(c().lastValidPosition=x(c().p))}function z(a){return b.inputmask.escapeRegex.call(this,a)}function H(a){return a.replace(RegExp("("+z(k().join(""))+")*$"),"")}function K(a){var b=f(),c=b.slice(),d,g;for(g=c.length-1;0<=g;g--)if(d=e(g),j()[d].optionality)if(!p(g)||!n(g,b[g],!0))c.pop();else break;else break;y(a,c)}function T(a,c){if(j()&&(!0===c||!a.hasClass("hasDatepicker"))){var d=b.map(f(),function(a,b){return p(b)&&n(b,a,!0)?a:null});return(C?d.reverse():
d).join("")}return a[0]._valueGet()}function P(a){C&&"number"==typeof a&&(a=f().length-a);return a}function r(c,d,f){var g=c.jquery&&0<c.length?c[0]:c;if("number"==typeof d)d=P(d),f=P(f),b(c).is(":visible")&&(f="number"==typeof f?f:d,!1==a.insertMode&&d==f&&f++,g.setSelectionRange?(g.selectionStart=d,g.selectionEnd=Q?d:f):g.createTextRange&&(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",f),c.moveStart("character",d),c.select()));else{if(!b(c).is(":visible"))return{begin:0,end:0};g.setSelectionRange?
(d=g.selectionStart,f=g.selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),d=0-c.duplicate().moveStart("character",-1E5),f=d+c.text.length);d=P(d);f=P(f);return{begin:d,end:f}}}function R(a){var c=!1,f=0,j=g;b.each(d,function(b,d){if("object"==typeof d){g=b;var j=x(o());if(d.lastValidPosition>=f&&d.lastValidPosition==j){for(var n=!0,m=0;m<=j;m++){var q=p(m),r=e(m);if(q&&(void 0==a[m]||a[m]==M(m))||!q&&a[m]!=k()[r]){n=!1;break}}if(c=c||n)return!1}f=
d.lastValidPosition}});g=j;return c}function Z(b,c){return C?1<b-c||1==b-c&&a.insertMode:1<c-b||1==c-b&&a.insertMode}var C=!1,N=f().join("");this.unmaskedvalue=function(a,b){C=a.data("_inputmask").isRTL;return T(a,b)};this.isComplete=function(a){return R(a)};this.mask=function(h){function w(a){a=b._data(a).events;b.each(a,function(a,c){b.each(c,function(a,b){if("inputmask"==b.namespace&&"setvalue"!=b.type&&"_keypress"!=b.type){var c=b.handler;b.handler=function(a){if(this.readOnly||this.disabled)a.preventDefault;
else return c.apply(this,arguments)}}})})}function s(a){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(a,"value"));if(c&&c.get){if(!a._valueGet){var d=c.get,f=c.set;a._valueGet=function(){return C?d.call(this).split("").reverse().join(""):d.call(this)};a._valueSet=function(a){f.call(this,C?a.split("").reverse().join(""):a)};Object.defineProperty(a,"value",{get:function(){var a=b(this),c=b(this).data("_inputmask"),f=c.masksets,g=c.activeMasksetIndex;return c&&c.opts.autoUnmask?
a.inputmask("unmaskedvalue"):d.call(this)!=f[g]._buffer.join("")?d.call(this):""},set:function(a){f.call(this,a);b(this).triggerHandler("setvalue.inputmask")}})}}else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(d=a.__lookupGetter__("value"),f=a.__lookupSetter__("value"),a._valueGet=function(){return C?d.call(this).split("").reverse().join(""):d.call(this)},a._valueSet=function(a){f.call(this,C?a.split("").reverse().join(""):a)},a.__defineGetter__("value",function(){var a=
b(this),c=b(this).data("_inputmask"),f=c.masksets,g=c.activeMasksetIndex;return c&&c.opts.autoUnmask?a.inputmask("unmaskedvalue"):d.call(this)!=f[g]._buffer.join("")?d.call(this):""}),a.__defineSetter__("value",function(a){f.call(this,a);b(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return C?this.value.split("").reverse().join(""):this.value},a._valueSet=function(a){this.value=C?a.split("").reverse().join(""):a}),void 0==b.valHooks.text||!0!=b.valHooks.text.inputmaskpatch)d=
b.valHooks.text&&b.valHooks.text.get?b.valHooks.text.get:function(){return this.value},f=b.valHooks.text&&b.valHooks.text.set?b.valHooks.text.set:function(a){return this.value=a},jQuery.extend(b.valHooks,{text:{get:function(a){var c=b(a);if(c.data("_inputmask")){if(c.data("_inputmask").opts.autoUnmask)return c.inputmask("unmaskedvalue");a=d.call(a);c=c.data("_inputmask");return a!=c.masksets[c.activeMasksetIndex]._buffer.join("")?a:""}return d.call(a)},set:function(a,c){var d=b(a),g=f.call(a,c);d.data("_inputmask")&&
d.triggerHandler("setvalue.inputmask");return g},inputmaskpatch:!0}})}function I(a,b,d){for(var g=f();!p(a)&&0<=a-1;)a--;for(var l=a;l<b&&l<o();l++)if(p(l)){B(g,l);var h=v(l),m=G(g,h);if(m!=M(h))if(h<o()&&!1!==n(l,m,!0)&&j()[e(l)].def==j()[e(h)].def)A(g,l,G(g,h),!0),h<b&&B(g,h);else if(p(l))break}else B(g,l);void 0!=d&&A(g,x(b),d);if(!1==c().greedy){b=H(g.join("")).split("");g.length=b.length;l=0;for(d=g.length;l<d;l++)g[l]=b[l];0==g.length&&(c().buffer=k().slice())}return a}function E(a,b,d,g){for(var l=
f();a<=b&&a<o();a++)if(p(a)){var h=G(l,a,!0);A(l,a,d,!0);if(h!=M(a))if(d=v(a),d<o())if(!1!==n(d,h,!0)&&j()[e(a)].def==j()[e(d)].def)d=h;else if(p(d))break;else d=h;else break;else if(d=h,!0!==g)break}else B(l,a);g=l.length;if(!1==c().greedy){d=H(l.join("")).split("");l.length=d.length;a=0;for(h=l.length;a<h;a++)l[a]=d[a];0==l.length&&(c().buffer=k().slice())}return b-(g-l.length)}function z(e){S=!1;var t=this,h=e.keyCode,j=r(t);if(h==a.keyCode.BACKSPACE||h==a.keyCode.DELETE||ba&&127==h||e.ctrlKey&&
88==h){e.preventDefault();if(a.numericInput||C)switch(h){case a.keyCode.BACKSPACE:h=a.keyCode.DELETE;break;case a.keyCode.DELETE:h=a.keyCode.BACKSPACE}if(Z(j.begin,j.end)){if(C){var l=j.end;j.end=j.begin;j.begin=l}F(f(),j.begin,j.end);if(0==j.begin&&j.end==o())b.each(d,function(a,b){"object"==typeof b&&(b.buffer=b._buffer.slice(),b.lastValidPosition=-1,b.p=0)});else{l=o();if(!1==a.greedy)I(j.begin,l);else for(var n=j.begin;n<j.end;n++)p(n)&&I(j.begin,l);D(t,!1,!0,f())}}else b.each(d,function(b,d){if("object"==
typeof d){g=b;var e=$?j.end:j.begin,t=f(),l=v(-1),n=o();h==a.keyCode.BACKSPACE&&e--;e<l&&(e=l);e<n&&(a.isNumeric&&(""!=a.radixPoint&&t[e]==a.radixPoint)&&(e=t.length-1==e?e:v(e)),e=I(e,n),-1!=c().lastValidPosition&&f()[c().lastValidPosition]==k()[c().lastValidPosition]&&(c().lastValidPosition=0==c().lastValidPosition?-1:x(c().lastValidPosition)),c().lastValidPosition<l?(c().lastValidPosition=-1,c().p=l):(c().writeOutBuffer=!0,c().p=e))}});q();y(t,f(),c().p);t._valueGet()==k().join("")&&b(t).trigger("cleared");
a.showTooltip&&m.prop("title",c().mask)}else h==a.keyCode.END||h==a.keyCode.PAGE_DOWN?setTimeout(function(){var b=v(c().lastValidPosition);!a.insertMode&&(b==o()&&!e.shiftKey)&&b--;r(t,e.shiftKey?j.begin:b,b)},0):h==a.keyCode.HOME&&!e.shiftKey||h==a.keyCode.PAGE_UP?r(t,0,e.shiftKey?j.begin:0):h==a.keyCode.ESCAPE?D(t,!0,!0,N):h==a.keyCode.INSERT&&!e.shiftKey&&!e.ctrlKey?(a.insertMode=!a.insertMode,r(t,!a.insertMode&&j.begin==o()?j.begin-1:j.begin)):!1==a.insertMode&&!e.shiftKey&&(h==a.keyCode.RIGHT?
setTimeout(function(){var a=r(t);r(t,a.begin)},0):h==a.keyCode.LEFT&&setTimeout(function(){var a=r(t);r(t,a.begin-1)},0));l=r(t);a.onKeyDown.call(this,e,f(),a);r(t,l.begin,l.end);V=-1!=b.inArray(h,a.ignorables)}function Q(e,j,h,k,l,m){if(void 0==h&&S)return!1;S=!0;var w=b(this),e=e||window.event,h=h||e.which||e.charCode||e.keyCode;if((!e.ctrlKey||!e.altKey)&&(e.ctrlKey||e.metaKey||V)&&!0!==j)return!0;if(h){!0!==j&&(46==h&&!1==e.shiftKey&&","==a.radixPoint)&&(h=44);var u,s,B,z=String.fromCharCode(h);
j?(h=l?m:c().lastValidPosition+1,u={begin:h,end:h}):u=r(this);var h=Z(u.begin,u.end),H=!1,m=g;h&&(C&&(s=u.end,u.end=u.begin,u.begin=s),b.each(d,function(b,d){if(typeof d=="object"){g=b;c().undoBuffer=f().join("");var e=u.end<o()?u.end:o();c().lastValidPosition>u.begin&&c().lastValidPosition<e?c().lastValidPosition=x(u.begin):H=true;F(f(),u.begin,e);var h=o();if(a.greedy==false)I(u.begin,h);else for(var j=u.begin;j<e;j++)p(j)&&I(u.begin,h)}}),!0===H&&(g=m,D(this,!1,!0,f()),a.insertMode||b.each(d,function(a,
b){if(typeof b=="object"){g=a;E(u.begin,o(),M(u.begin),true);c().lastValidPosition=v(c().lastValidPosition)}})),g=m);a.isNumeric&&(z==a.radixPoint&&!0!==j)&&(s=f().join("").indexOf(a.radixPoint),-1!=s&&(u.begin=u.begin==s?v(s):s,u.end=u.begin,r(this,u.begin)));var L=u.begin;s=n(L,z,l);!0===l&&(s=[{activeMasksetIndex:g,result:s}]);b.each(s,function(b,d){g=d.activeMasksetIndex;c().writeOutBuffer=true;var e=d.result;if(e!==false){var h=false,j=f();if(e!==true){h=e.refresh;L=e.pos!=void 0?e.pos:L;z=e.c!=
void 0?e.c:z}if(h!==true)if(a.insertMode==true){e=o();for(h=j.slice();G(h,e,true)!=M(e)&&e>=L;)e=e==0?-1:x(e);if(e>=L){E(L,j.length,z);j=c().lastValidPosition;e=v(j);e!=o()&&(j>=L&&G(f(),e,true)!=M(e))&&(c().lastValidPosition=e)}else c().writeOutBuffer=false}else A(j,L,z,true);c().p=v(L)}});!0!==l&&(g=m,q());if(!1!==k&&(b.each(s,function(a,b){if(b.activeMasksetIndex==g){B=b;return false}}),void 0!=B)){var K=this;setTimeout(function(){a.onKeyValidation.call(K,B.result,a)},0);if(c().writeOutBuffer&&
!1!==B.result){var J=f();y(this,J,j?void 0:a.numericInput?x(c().p):c().p);!0!==j&&setTimeout(function(){R(J)&&w.trigger("complete")},0)}else h&&(c().buffer=c().undoBuffer.split(""))}a.showTooltip&&w.prop("title",c().mask);e.preventDefault()}}function T(c){var d=b(this),e=c.keyCode,g=f(),h=r(this);a.onKeyUp.call(this,c,g,a);r(this,h.begin,h.end);e==a.keyCode.TAB&&(d.hasClass("focus.inputmask")&&0==this._valueGet().length&&a.showMaskOnFocus)&&(g=k().slice(),y(this,g),r(this,0),N=f().join(""))}var m=
b(h);if(m.is(":input")){m.data("_inputmask",{masksets:d,activeMasksetIndex:g,opts:a,isRTL:!1});a.showTooltip&&m.prop("title",c().mask);c().greedy=c().greedy?c().greedy:0==c().repeat;if(null!=m.attr("maxLength")){var J=m.prop("maxLength");-1<J&&b.each(d,function(a,b){"object"==typeof b&&"*"==b.repeat&&(b.repeat=J)});o()>J&&-1<J&&(J<k().length&&(k().length=J),!1==c().greedy&&(c().repeat=Math.round(J/k().length)),m.prop("maxLength",2*o()))}s(h);var S=!1,V=!1;a.numericInput&&(a.isNumeric=a.numericInput);
("rtl"==h.dir||a.numericInput&&a.rightAlignNumerics||a.isNumeric&&a.rightAlignNumerics)&&m.css("text-align","right");if("rtl"==h.dir||a.numericInput){h.dir="ltr";m.removeAttr("dir");var W=m.data("_inputmask");W.isRTL=!0;m.data("_inputmask",W);C=!0}m.unbind(".inputmask");m.removeClass("focus.inputmask");m.closest("form").bind("submit",function(){N!=f().join("")&&m.change()}).bind("reset",function(){b.each(d,function(a,b){if(typeof b=="object"){b.buffer=b._buffer.slice();b.lastValidPosition=-1;b.p=
-1}})});m.bind("mouseenter.inputmask",function(){!b(this).hasClass("focus.inputmask")&&a.showMaskOnHover&&this._valueGet()!=f().join("")&&y(this,f())}).bind("blur.inputmask",function(){var c=b(this),e=this._valueGet(),h=f();c.removeClass("focus.inputmask");N!=f().join("")&&c.change();a.clearMaskOnLostFocus&&e!=""&&(e==k().join("")?this._valueSet(""):K(this));if(!R(h)){c.trigger("incomplete");if(a.clearIncomplete){b.each(d,function(a,b){if(typeof b=="object"){b.buffer=b._buffer.slice();b.lastValidPosition=
-1;b.p=0}});g=0;if(a.clearMaskOnLostFocus)this._valueSet("");else{h=k().slice();y(this,h)}}}}).bind("focus.inputmask",function(){var d=b(this),e=this._valueGet();a.showMaskOnFocus&&!d.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&e=="")&&this._valueGet()!=f().join("")&&y(this,f(),c().p);d.addClass("focus.inputmask");N=f().join("")}).bind("mouseleave.inputmask",function(){var c=b(this);a.clearMaskOnLostFocus&&(c.hasClass("focus.inputmask")||(this._valueGet()==k().join("")||this._valueGet()==
""?this._valueSet(""):K(this)))}).bind("click.inputmask",function(){var d=this;setTimeout(function(){var e=r(d),g=f();if(e.begin==e.end){var e=a.isRTL?P(e.begin):e.begin,h=c().lastValidPosition,h=a.isNumeric?a.skipRadixDance===false&&a.radixPoint!=""&&b.inArray(a.radixPoint,g)!=-1?a.numericInput?v(b.inArray(a.radixPoint,g)):b.inArray(a.radixPoint,g):v(h):v(h);e<h&&n(e,g[e],true)!==false?p(e)?r(d,e):r(d,v(e)):r(d,h)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){r(a,0,
v(c().lastValidPosition))},0)}).bind("keydown.inputmask",z).bind("keypress.inputmask",Q).bind("keyup.inputmask",T).bind(ca+".inputmask dragdrop.inputmask drop.inputmask",function(a){var c=this,d=b(c);if(a.type=="propertychange"&&c._valueGet().length<=o())return true;setTimeout(function(){D(c,true,false);R(f())&&d.trigger("complete");d.click()},0)}).bind("setvalue.inputmask",function(){D(this,true);N=f().join("");this._valueGet()==k().join("")&&this._valueSet("")}).bind("_keypress.inputmask",Q).bind("complete.inputmask",
a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);D(h,!0,!1);N=f().join("");var X;try{X=document.activeElement}catch(da){}X===h?(m.addClass("focus.inputmask"),r(h,c().p)):a.clearMaskOnLostFocus?f().join("")==k().join("")?h._valueSet(""):K(h):y(h,f());w(h)}};return this}var a=b.extend(!0,{},b.inputmask.defaults,B),ba=null!==navigator.userAgent.match(/iphone/i),Q=null!==navigator.userAgent.match(/android.*safari.*/i),ca=D("paste")?"paste":D("input")?"input":
"propertychange",$,n,x=0;if(Q){var y=navigator.userAgent.match(/safari.*/i);$=537>=parseInt(RegExp(/[0-9]+/).exec(y))}if("string"===typeof A)switch(A){case "mask":return F(a.alias,B),n=K(),this.each(function(){z(b.extend(!0,{},n),0).mask(this)});case "unmaskedvalue":return y=b(this),y.data("_inputmask")?(n=y.data("_inputmask").masksets,x=y.data("_inputmask").activeMasksetIndex,a=y.data("_inputmask").opts,z(n,x).unmaskedvalue(y)):y.val();case "remove":return this.each(function(){var d=b(this);if(d.data("_inputmask")){n=
d.data("_inputmask").masksets;x=d.data("_inputmask").activeMasksetIndex;a=d.data("_inputmask").opts;this._valueSet(z(n,x).unmaskedvalue(d,!0));d.removeData("_inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var g;Object.getOwnPropertyDescriptor&&(g=Object.getOwnPropertyDescriptor(this,"value"));g&&g.get?this._valueGet&&Object.defineProperty(this,"value",{get:this._valueGet,set:this._valueSet}):document.__lookupGetter__&&this.__lookupGetter__("value")&&this._valueGet&&(this.__defineGetter__("value",
this._valueGet),this.__defineSetter__("value",this._valueSet));try{delete this._valueGet,delete this._valueSet}catch(c){this._valueSet=this._valueGet=void 0}}});case "getemptymask":return this.data("_inputmask")?(n=this.data("_inputmask").masksets,x=this.data("_inputmask").activeMasksetIndex,n[x]._buffer.join("")):"";case "hasMaskedValue":return this.data("_inputmask")?!this.data("_inputmask").opts.autoUnmask:!1;case "isComplete":return n=this.data("_inputmask").masksets,x=this.data("_inputmask").activeMasksetIndex,
a=this.data("_inputmask").opts,z(n,x).isComplete(this[0]._valueGet().split(""));case "getmetadata":if(this.data("_inputmask"))return n=this.data("_inputmask").masksets,x=this.data("_inputmask").activeMasksetIndex,n[x].metadata;return;default:return F(A,B)||(a.mask=A),n=K(),this.each(function(){z(b.extend(true,{},n),x).mask(this)})}else{if("object"==typeof A)return a=b.extend(!0,{},b.inputmask.defaults,A),F(a.alias,A),n=K(),this.each(function(){z(b.extend(!0,{},n),x).mask(this)});if(void 0==A)return this.each(function(){var d=
b(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),g=b.parseJSON("{"+d+"}");b.extend(!0,g,B);a=b.extend(!0,{},b.inputmask.defaults,g);F(a.alias,g);a.alias=void 0;b(this).inputmask(a)}catch(c){}})}return this})})(jQuery);
