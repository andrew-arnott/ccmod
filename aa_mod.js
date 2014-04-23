/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
/**
* Cookie clicker mod by Andrew Arnott.
*
*/

Game.customLogic.push(function() {
	Game.Win('Third-party');
});

//My global object
var AA = {};
//Constant values used in my mod.
AA.constants = {};
//Most recent version of Cookie Clicker this mod was built with
AA.constants.lastVersion = 1.0453;
//The file to save data to
AA.constants.saveTo = "AACookieClickerMod";
if (Game.beta) AA.constants.saveTo += "Beta";

//Configuration so that people can pick and choose what mods they want
AA.config = {};
AA.config.useSpam = false;

//Custom achievements (added outside of Orteil's code to be a bit more flexible)
AA.achievements = {};
AA.achievementsEarned = 0;
AA.achievementsAvailable = 0;

//Custom upgrades
AA.upgrades = {};

//New tier 2 resource: Ambrosia cookies
AA.ambrosia = 0;

//Custom tier 2 buildings
AA.buildings = {};


///////////////////////////
// Achievement functions //
///////////////////////////

/**
 * Creates a generic achievement data object and adds it to my achievement list. This
 * stuff is separate from Orteil's code so that it will be less likely to break.
 * 
 * @param name
 *
 */
AA.createAchievement = function(name, description, image) {
    //Whatever. It's going to be a lame ol' generic object because I roll that way.
    var achievement = {};
    achievement.name = name;
    achievement.description = description;
    achievement.image = image;
    achievement.won = false;

    AA.achievements[name] = achievement;
    AA.achievementsAvailable++;
}

AA.earnAchievement = function(name) {
    //No such achievement
    if(typeof AA.achievements[name] === 'undefined') return;
    //Already earned
    if(AA.achievements[name].won) return;

    AA.achievements[name].won = true;

    //I use icon 18,18 because it is empty: right now, I'm not embedding my
    //custom icons into the notification dialogs
    AA.PopupOrNotify(
            'Achievement unlocked :<br>'+name,  //popup
            'Achievement unlocked',
            '<div class="title" style="font-size:18px;">'+name+'</div>',
            [18,18]
            );
}

AA.hasAchievement = function(name) {
    return (AA.achievements[name] ? AA.achievements[name].won : false);
}

///////////////////////
// Upgrade functions //
///////////////////////

AA.UpgradeManager = function() {
    this.upgrades = {};
    this.sortedUnlockedUpgrades = [];
}

/**
 * Creates a generic upgrade data object and adds it to my achievement list. This
 * stuff is separate from Orteil's code so that it will be less likely to break.
 * 
 * @param data {name, description, image, baseCost
 *
 */
AA.UpgradeManager.prototype.createUpgrade = function(data) {
    //Whatever. It's going to be a lame ol' generic object because I roll that way.
    var upgrade = {};

    upgrade.name = (typeof data.name !== 'undefined') ? data.name : "ERROR: No name";
    upgrade.description = (typeof data.description !== 'undefined') ? data.description : "ERROR: No description";
    upgrade.image = (typeof data.image !== 'undefined') ? data.image : "";
    upgrade.baseCost = (typeof data.baseCost !== 'undefined') ? data.baseCost : -1;

    upgrade.owned = (typeof data.owned !== 'undefined') ? data.owned : false;
    upgrade.unlocked = (typeof data.unlocked !== 'undefined') ? data.unlocked : false;

    this.upgrades[upgrade.name] = upgrade;

    //Add it to the sortedList if unlocked
    if(upgrade.unlocked) this.addToSortedList(upgrade);
}

AA.UpgradeManager.prototype.addToSortedList = function(upgrade) {
    if(typeof upgrade === 'undefined') return; 

    var sortMap = function(a,b) {
        if (a.baseCost > b.baseCost) return 1;
        else if (a.baseCost < b.baseCost) return -1;
        else return 0;
    }
    this.sortedUnlockedUpgrades.push(upgrade);
    this.sortedUnlockedUpgrades.sort(sortMap);
}

AA.UpgradeManager.prototype.unlock = function(name) {
    if(this.upgrades[name].unlocked) return;    //Already unlocked

    this.upgrades[name].unlocked = true;    
    this.addToSortedList(this.upgrades[name]);
}

AA.UpgradeManager.prototype.purchase = function(name) {
    if(typeof this.upgrades[name] === 'undefined') return;    
    if(this.upgrades[name].owned) return; //Already owned    
    if(!this.upgrades[name].unlocked) return; //Not unlocked yet (cheater! :P)      

    //TODO
    AA.upgrades[name].owned = true;
}

AA.UpgradeManager.prototype.has = function(name) {
    return (this.upgrades[name] ? this.upgrades[name].owned : false);
}

//Here's the singleton
AA.upgradeManager = new AA.UpgradeManager();
		

///////////////////////
// Utility functions //
///////////////////////

/**
 * Simple wrapper so that I don't need to nest this "if" statement logic everywhere.
 *
 * Orteil: if you read this, you may want to take this as a hint ;).
 *
 */
AA.PopupOrNotify = function (popupMessage, notifyTitle, notifyMessage, notifyImage, notifyDuration) {
    if (Game.prefs.popups) {
        Game.Popup(popupMessage);
    } else {
        Game.Notify(notifyTitle, notifyMessage, notifyImage, notifyDuration);
    }
}
/**
 * Basically the same thing as Orteil's Game.WriteButton
 */
AA.WriteButton = function(configName, button, on, off, callback) {
    return '<a class="option" id="'+button+'" '+Game.clickStr+'="AA.ToggleButton(\''+configName+'\',\''+button+'\',\''+on+'\',\''+off+'\');'+(callback||'')+'">'+(AA.config[configName]?on:off)+'</a>';
}

/**
 * Basically the same thing as Orteil's Game.Toggle
 */
AA.ToggleButton = function(configName, buttonId, on, off) {
    if(AA.config[configName]) {
		l(buttonId).innerHTML=off;
		l(buttonId).className='option';
		AA.config[configName]=false;
	} else {
		l(buttonId).innerHTML=on;
		l(buttonId).className='option enabled';
		AA.config[configName]=true;
    }			
}

AA.createAchievementIcon = function(achievement) {
    var classes = 'crate achievement';
    if(achievement.won) {
        classes += ' enabled';
    }

    var tags = '[Achievement]';
    if(achievement.won) {
        tags += ' [Unlocked]';
    }

    var imageData = AA.images[achievement.image];

    return '<div class="'+classes+'" '
        + Game.getTooltip('<div style="min-width:200px;">'
                        + '  <small>'+tags+'</small><div class="name">'+achievement.name+'</div>'
                        + '  <div class="description">'+achievement.description+'</div>'
                        + '</div>'
						,'bottom-right')
        + ' style="background-image:url(data:image/png;base64,'+imageData+');"></div>';
}

AA.createUpgradeIcon = function(upgrade) {
    var classes = 'crate upgrade';
    if(upgrade.owned) {
        classes += ' enabled';
    }

    var tags = '[Upgrade]';
    if(upgrade.owned) {
        tags += ' [Purchased]';
    }

    var imageData = AA.images[upgrade.image];

    return '<div class="'+classes+'" '
        + Game.getTooltip('<div style="min-width:200px;">'
                        + '  <small>'+tags+'</small><div class="name">'+upgrade.name+'</div>'
                        + '  <div class="description">'+upgrade.description+'</div>'
                        + '</div>'
						,'bottom-right')
        + ' style="background-image:url(data:image/png;base64,'+imageData+');"></div>';
}

AA.openSavedGame = function(id) {
    AA.loadSave(id);
    Game.UpdateMenu();    
}

AA.renameSavedGame = function(id) {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }

    AA.renameSaveGame(id, saveName);
}

AA.makeDefaultSavedGame = function(id) {
    AA.makeSaveGameDefault(id);
}

AA.deleteSavedGame = function(id) {
    var yes = window.confirm("Are you really sure you want to delete this save file?");

    if(!yes) {
        return;
    }

    AA.deleteSave(id);
}

AA.createNewSavedGame = function() {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }

    AA.createNewSave(saveName);

    Game.UpdateMenu();
}

AA.cloneSavedGame = function(name) {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        return;
    }
}

AA.createMultipleSavegameSubsection = function() {
    // List of all the save files
    var saveListListings = '';

    saveListListings += '<div class="listing"><table>';

    for(var idx in AA.saveData.saves) {
        saveListListings += '<tr>';

        var save = AA.saveData.saves[idx];

        if(save.id == AA.currentSaveId) {
            saveListListings += '<td style="padding-left:4px;padding-right:20px;"><b style="color:green;">'+save.name+'</b></td>';
        } else {
            saveListListings += '<td style="padding-left:4px;padding-right:20px;"><b>'+save.name+'</b></td>';
        }
        
        if(save.id != AA.currentSaveId) {
            saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.openSavedGame(\''+save.id+'\')">Open</a></td>';
        } else {
            saveListListings += '<td></td>';
        }

        saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.renameSavedGame(\''+save.id+'\')">Rename</a></td>';

        if(save.id != AA.saveData.defaultSave) {
            saveListListings += '<td><a class="option" '+Game.clickStr+'="AA.makeDefaultSavedGame(\''+save.id+'\')">Make default</a></td>';            
        } else {
            saveListListings += '<td></td>';
        }

        if(save.id != AA.currentSaveId && save.id != AA.saveData.defaultSave) {
            saveListListings += '<td><a class="option warning" '+Game.clickStr+'="AA.deleteSavedGame(\''+save.id+'\')">Delete</a></td>';  
        } else {
            saveListListings += '<td></td>';            
        }

        saveListListings += '</tr>';        
    }

    saveListListings += '</table></div>';    

    //Buttons
    var buttons = '';
    buttons += ''
            + '  <div class="listing">'
            + '    <a class="option" '+Game.clickStr+'="AA.createNewSavedGame()">Start a new game</a>'
/*            + '    <a class="option" '+Game.clickStr+'="AA.cloneSavedGame(\'test\')">Clone the current game</a>'            */
            + '  </div>';

    var str = '';    
    str += ''
        + '<div class="subsection">'
        + '  <div class="title">Save Files</div>'
        + saveListListings
        + buttons
        + '</div>';
    return str;    
}

AA.enableUseMultipleSaves = function() {
    var saveName = window.prompt("What do you want to name this save file?", "");
    while(saveName === "") {
        saveName = window.prompt("Invalid name. What do you want to name this save file?", "");
    }

    //Canceled
    if(saveName === null) {
        AA.config.useMultipleSaves = false;
        return;
    }

    AA.saveData.currentSave = saveName;

    Game.UpdateMenu();
}

/**
 * Add in my custom menu options
 *
 */
Game.__AA_UpdateMenu = Game.UpdateMenu;
Game.UpdateMenu = function() {
    Game.__AA_UpdateMenu();

    
    if(Game.onMenu == 'prefs') {
        //All of the sibling divs...
        $(".subsection .title:contains('General') ~ div").css( "padding-bottom", "0px");

        var str = ''
            + AA.createMultipleSavegameSubsection()
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Options</div>'
            + '  <div class="listing">'
            + '    ' + AA.WriteButton('useSpam', 'useSpam', 'Golden cookie spam event: Enabled', 'Golden cookie spam event: Disabled')
            + '    <label>Adds a new possible outcome when you click a golden cookie plus some related achievements.</label>'
            + '  </div>'
            + '  <div class="listing" style="padding-bottom:128px;"></div>'
            + '</div>'
            ;



        l('menu').innerHTML += str;
    } else if (Game.onMenu=='stats') {
        var achievementsStr = '';
        for(var i in AA.achievements) {
            achievementsStr += AA.createAchievementIcon(AA.achievements[i]);
        }

        var totalUpgrades = AA.upgradeManager.sortedUnlockedUpgrades.length;
        var ownedUpgrades = 0;
        for(var i = 0; i < totalUpgrades; i++) {
            if(AA.upgradeManager.sortedUnlockedUpgrades[i].owned) ownedUpgrades++;
        }

        var upgradesStr = '';
        for(var i in AA.upgradeManager.sortedUnlockedUpgrades) {
            upgradesStr += AA.createUpgradeIcon(AA.upgradeManager.sortedUnlockedUpgrades[i]);
        }

        var str = ''
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Upgrades Unlocked</div>'
            + '  <div class="listing">'
            + '    <b>Unlocked : '+ownedUpgrades+'/'+totalUpgrades+'</b>'
            + '  </div>'
            + '  <div class="listing" style="overflow-y:hidden;">' 
            + '    ' + upgradesStr      
            + '  </div>'            
            + '</div>'            
            + '<div class="subsection">'
            + '  <div class="title">Arnott\'s Mod Achievements</div>'
            + '  <div class="listing">'
            + '    <b>Unlocked : '+AA.achievementsEarned+'/'+AA.achievementsAvailable+'</b>'
            + '  </div>'
/*
            + '  <div class="listing">'
            + '    <b>Bonus Milk :</b>'
            + '  </div>'                 
*/            
            + '  <div class="listing" style="overflow-y:hidden;">' 
            + '    ' + achievementsStr      
            + '  </div>'
            + '</div>'
            + '<div style="padding-bottom:128px;"></div>'
            ;

        l('menu').innerHTML += str;
    }   
}
/**
 * Mods to allow multiple savegame slots and also save my mod data.
 *
 * Here's the basic idea:
 *
 * I maintain a list of savegames along with the default savegame to run in 
 * local storage. This list can be updated by one or more clients running
 * the game, but it will only be updated based on user-triggered events. So,
 * although there is a collision possibility, trying any form of concurrency
 * control isn't worth it because a user would need to be really actively
 * trying to sabotage their own save game list.
 *
 * The save games are stored in separate local storage areas, each based on
 * their name.
 *
 *
 */
AA.saveData = {};
AA.saveData.defaultSave = -1;
AA.saveData.saves = []; //Instances of save game id/name pairs: {id, name}

//The current active save file
AA.currentSaveId = -1;
AA.currentSaveName = -1;

AA.customSaveLock = false;

///////////////////////////
// Hooks into save/load  //
///////////////////////////

Game.__AA_Reset = Game.Reset;
Game.Reset = function(bypass, hard) {
    Game.__AA_Reset(bypass, hard);
    if(bypass) {
        //TODO Wipe custom upgrades
    }
}

Game.__AA_HardReset = Game.HardReset;
Game.HardReset = function(bypass) {
    Game.__AA_HardReset(bypass);
    if(bypass && bypass != 1) {
        // Wipe configuration choices
        for(idx in AA.config) {
            AA.config[idx] = false;
        }

        //TODO Wipe custom upgrades        
        //TODO Wipe custom achievements
    }
}

Game.customSave.push(function() { 
    if(AA.customSaveLock === false) {   
        AA.customSaveLock = true;
        AA.writeSaveGameData();
        AA.customSaveLock = false;        
    }
});

AA.refreshBaseSaveData = function() {
    var storedData = window.localStorage.getItem(AA.constants.saveTo);
    if(storedData === null) return;  

    var decodedString = unescape(storedData);
    decodedString = decodedString.split('!END!')[0];
    decodedString = b64_to_utf8(decodedString);
    var saveData = JSON.parse(decodedString);

    jQuery.extend(AA.saveData, saveData);    
}

AA.writeBaseSaveData = function() {
    var dataString = JSON.stringify(AA.saveData);
    encodedString = escape(utf8_to_b64(dataString)+'!END!');

    window.localStorage.setItem(AA.constants.saveTo, encodedString);
	if (!window.localStorage.getItem(AA.constants.saveTo)) {
    	if (Game.prefs.popups) Game.Popup('Error while saving.<br>Export your save instead!');
		else Game.Notify('Error while saving','Export your save instead!');
	}
}

AA.generateSaveGameId = function() {
    var largest = -1;
    for(var i in AA.saveData.saves) {
        var save = AA.saveData.saves[i];
        if(save.id > largest) {
            largest = save.id;
        }
    }
    return largest + 1;
}

AA.writeSaveGameData = function() {
    //Create the new save information
    var saveGame = {};
    saveGame.config = AA.config;
    saveGame.achievements = AA.achievements;
    //TODO upgrades
    saveGame.gameData = Game.WriteSave(true);

    var dataString = JSON.stringify(saveGame);
    encodedString = escape(utf8_to_b64(dataString)+'!END!');

    window.localStorage.setItem(AA.constants.saveTo + "__" + AA.currentSaveId, encodedString);
	if (!window.localStorage.getItem(AA.constants.saveTo + "__" + AA.currentSaveId)) {
    	if (Game.prefs.popups) Game.Popup('Error while saving.<br>Export your save instead!');
		else Game.Notify('Error while saving','Export your save instead!');
	}
}

/**
 * Returns the index in the saveData.saves array for a save game with the provided id.
 *
 *
 */
AA.getSaveGameIndex = function(id) {
    var saveGameIndex = -1;
    for(var i in AA.saveData.saves) {
        var save = AA.saveData.saves[i];
        if(id == save.id) {
            saveGameIndex = i;
            break;
        }
    }

    return saveGameIndex;
}

AA.renameSaveGame = function(id, name) {
    AA.refreshBaseSaveData();   

    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;  

    if(id == AA.currentSaveId) {
        AA.currentSaveName = name;
    }

    var save = AA.saveData.saves[saveGameIndex];
    save.name = name;
    AA.writeBaseSaveData();
}

AA.makeSaveGameDefault = function(id) {
    AA.refreshBaseSaveData();   

    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;

    AA.saveData.defaultSave = id;
    AA.writeBaseSaveData();
}

AA.loadSaveGameData = function(id) {
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return; 

    var save = AA.saveData.saves[saveGameIndex];   

    //Deserialize it now
    var storedData = window.localStorage.getItem(AA.constants.saveTo + "__" + id);
    if(storedData === null) return;

    var decodedString = unescape(storedData);
    decodedString = decodedString.split('!END!')[0];
    decodedString = b64_to_utf8(decodedString);

    var saveGame = JSON.parse(decodedString);
    AA.currentSaveId = save.id;
    AA.currentSaveName = save.name;
    jQuery.extend(AA.config, saveGame.config);
    jQuery.extend(AA.achievements, saveGame.achievements);
    //TODO upgrades    
    Game.LoadSave(saveGame.gameData);
}

/**
 * Starts a new save game
 *
 */
AA.createNewSave = function(name, noBackup) {
    AA.refreshBaseSaveData();

    //Back up the current save
    if(!noBackup) {
        Game.WriteSave();
    }

    //Hard reset this game (for the new game)
    Game.HardReset(2);

    var nextId = AA.generateSaveGameId();    
    AA.currentSaveId = nextId;
    AA.currentSaveName = name;    

    //Save it
    Game.WriteSave();

    //Update the save data
    AA.saveData.saves.push({id: nextId, name: name});

    AA.writeBaseSaveData();
}

/**
 * Deletes a saved game.
 *
 *
 */
AA.deleteSave = function(id) {
    AA.refreshBaseSaveData();

    //Not allowed to delete the default save file!
    if(AA.saveData.defaultSave == id) return;
    
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex == -1) return;

    //Delete the local storage info
    window.localStorage.removeItem(AA.constants.saveTo + "__" + id);

    //And remove it from the list
    AA.saveData.saves.splice(saveGameIndex, 1);
    AA.writeBaseSaveData();    
}


AA.loadSave = function(id, noBackup) {
    AA.refreshBaseSaveData();

    //Back up the current save
    if(!noBackup) {
        Game.WriteSave();
    }
   
    var saveGameIndex = AA.getSaveGameIndex(id);
    //Make sure the save exists
    if(saveGameIndex === -1) return;

    AA.loadSaveGameData(id);  
}

//When the actual bookmarklet is loaded...
AA.refreshBaseSaveData();
//Make sure a default is defined and load it
if(AA.saveData.defaultSave === -1) {
    var nextId = AA.generateSaveGameId();
    var name = "Default";

    //Update the save data
    AA.saveData.defaultSave = nextId;
    AA.saveData.saves.push({id: nextId, name: name});

    AA.writeBaseSaveData();

    //Write the current save
    AA.currentSaveId = nextId;
    AA.currentSaveName = name;
    Game.WriteSave();
}
//Load the default save
AA.loadSave(AA.saveData.defaultSave, true);
/**
 * New golden cookie spam event. Golden cookies spawn all over the
 * place and need to be clicked quickly.
 *
 */
AA.spam = {};
//Spam event constants
AA.spam.spamChance = 0.05;                  //Chance for the spam golden cookie event
AA.spam.spamChanceWrath = 0.01;             //Chance for the spam golden cookie event with a wrath cookie
AA.spam.cookieObjectPoolSize = 25;	        //Number of cookies in the pool during the spam event
AA.spam.cookieSpawnMin = 1;                   //Min amount of seconds before spawning
AA.spam.cookieSpawnMax = 10;                  //Max amount of seconds before spawning
AA.spam.spamBaseCookieDuration = 8;         //Base amount of time a spam cookie appears
AA.spam.spamBaseFrenzyDuration = 15;        //Base duration for the spam event
AA.spam.spamGainBaseMultiplier = 0.01;      //Multiplier for the base amount of cookies earned per click in a spam event
AA.spam.spamGainIncreaseMultiplier = 0.05;  //This value times the number of cookies clicked in the event is an additional multiplier
AA.spam.spamGainMin = 1;                    //Minimum amount of cookies gained per spam cookie clicked
AA.spam.spamGainMaxMinutesWorth = 2;        //Maximum effective minutes of production a spam cookie click can give
AA.spam.frenzyTime = -1;                    //Kinda like a clicking frenzy timer
AA.spam.frenzyClicks = 0;                   //Count clicks during the event
AA.spam.totalCookies = 0;                   //Count total cookies during the event
AA.spam.cookieObjects = [];                 //A pool of divs that will be the spawning golden cookies

AA.createAchievement("Spam spam spam spam...", "Click at least <b>25</b> golden cookies during a golden cookie spam event.", "spam0");
AA.createAchievement("Spam! Lovely spam!", "Click at least <b>50</b> golden cookies during a golden cookie spam event.", "spam1");
AA.createAchievement("Lovely spam! Wonderful spam!", "Click at least <b>75</b> golden cookies during a golden cookie spam event.", "spam2");
AA.createAchievement("Spam bot", "Click at least <b>100</b> golden cookies during a golden cookie spam event.<q>Got a bigger pen fifteen by helping a Nigerian prince.</q>", "spam3");

/**
 * Called when the spam frenzy event starts.
 *
 */
AA.spam.initEvent = function() {
    AA.spam.frenzyTime = AA.spam.frenzyTimeDuration() * Game.fps;
    AA.spam.frenzyClicks = 0;
    AA.spam.totalCookies = 0;
    for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
        AA.spam.cookieReset(i);
    }
}

AA.spam.endEvent = function() {
    AA.spam.frenzyTime = -1;

    var popup=['Spam event over! Won '+Beautify(AA.spam.totalCookies)+' cookies, clicked '+AA.spam.frenzyClicks+' golden cookies!','Spam event over!','Won <b>'+Beautify(AA.spam.totalCookies)+'</b> cookies, clicked <b>'+AA.spam.frenzyClicks+'</b> golden cookies!'];
    AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 6);

    for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
        AA.spam.cookieDespawn(i);
    }

    if(AA.spam.frenzyClicks >= 25) {
        AA.earnAchievement("Spam spam spam spam...");
    }
    if(AA.spam.frenzyClicks >= 50) {
        AA.earnAchievement("Spam! Lovely spam!");
    }
    if(AA.spam.frenzyClicks >= 75) {
        AA.earnAchievement("Lovely spam! Wonderful spam!");
    }
    if(AA.spam.frenzyClicks >= 100) {
        AA.earnAchievement("Spam bot");
    }    
}

AA.spam.cookieOnClick = function() {
	if(!AA.config.useSpam) return;

	var index = this.id.replace('goldenCookie', '');

    //add a percentage to cookies owned capped by a total amount of minutes worth of cookies
	var moni = Math.min(Game.cookies * AA.spam.spamGainBaseMultiplier, Game.cookiesPs * 60 * AA.spam.spamGainMaxMinutesWorth) + AA.spam.spamGainMin; 

    //Then multiply based on the number of spam clicks
    var additionalMultiplier = 1 + AA.spam.spamGainIncreaseMultiplier * AA.spam.frenzyClicks;
    moni *= additionalMultiplier;

	Game.Earn(moni);
    AA.spam.totalCookies += moni;

    var popup;
    if(AA.spam.frenzyClicks % 5 == 0) {
        popup=['Spam! +'+Beautify(moni)+' cookies!','Spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 1) {
        popup=['Spam spam spam spam... +'+Beautify(moni)+' cookies!','Spam spam spam spam...','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 2) {
        popup=['Spam! Lovely spam! +'+Beautify(moni)+' cookies!','Spam! Lovely spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 3) {
        popup=['Spam spam spam spam... +'+Beautify(moni)+' cookies!','Spam spam spam spam...','+<b>'+Beautify(moni)+'</b> cookies!'];
    } else if(AA.spam.frenzyClicks % 5 == 4) {
        popup=['Lovely spam! Wonderful spam! +'+Beautify(moni)+' cookies!','Lovely spam! Wonderful spam!','+<b>'+Beautify(moni)+'</b> cookies!'];
    }

    AA.spam.frenzyClicks++;

    AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 2);
    AA.spam.cookieDespawn(index);

}

/**
 * Called when a spam cookie needs to pick a new spawn time
 *
 */
AA.spam.cookieReset = function(i) {
	if(!AA.config.useSpam) return;

	AA.spam.cookieObjects[i].wait = Math.random() * (AA.spam.cookieSpawnMax - AA.spam.cookieSpawnMin + 1) + AA.spam.cookieSpawnMin;
    AA.spam.cookieObjects[i].wait *= Game.fps;
    AA.spam.cookieObjects[i].state = 'wait';
}

AA.spam.cookieSpawn = function(i) {
	if(!AA.config.useSpam) return;
	if(AA.spam.frenzyTime <= 0) return;

    //Okay, so the stuff below is a bit complex, but I wanted to hook into Orteil's code
    //for spawining golden cookies (with all the seasonal effects and such) without
    //copying and pasting the code. I'm hoping this code can remain stable even if he
    //decides to add new seasonal effects...
    //
    //The main idea is that I remove the main golden cookie div from the DOM and set
    //one of the spam cookies to have its ID (which requires removing and readding it
    //with the id "goldenCookie" to register it properly). Then I run the spawn
    //function to have all the visual effects applied to the spam cookie div. I rename
    //its id back to what it should be, refresh it on the DOM, and then readd the
    //actual golden cookie div.

	var goldenCookie = l('goldenCookie');
	var spamCookie = l('goldenCookie' + i);

    //This will be identical for the spam cookies
    var goldenCookieParent = goldenCookie.parentNode;

    goldenCookieParent.removeChild(goldenCookie);

	//Back up the golden cookie stats
	var temp = [];
	for(var key in Game.goldenCookie) {
		temp[key] = Game.goldenCookie[key];
	}



    //Seriously, I'm not cheating cookies here!
    Game.goldenCookie.life = 0;
    Game.goldenCookie.time = 10000000000;

	spamCookie.id = "goldenCookie";    
    goldenCookieParent.removeChild(spamCookie);    
    goldenCookieParent.appendChild(spamCookie);
	Game.goldenCookie.spawn();  //Here's Orteil's code
	spamCookie.id = "goldenCookie" + i;			
    goldenCookieParent.removeChild(spamCookie);    
    goldenCookieParent.appendChild(spamCookie);    

	//Restore the golden cookie now that I've injected the styling
	//code to style my cookie
	for(var key in temp) {
		Game.goldenCookie[key] = temp[key];
	}
    goldenCookieParent.appendChild(goldenCookie); 

    //Like magic, the spam cookie should be styled properly without messing with
    //the "real" golden cookie.


	//Now set up the duration
	var currentDuration = AA.spam.frenzyTime / Game.fps;
	var totalDuration = AA.spam.frenzyTimeDuration();
	var percentFinished = currentDuration / totalDuration;

	var duration = AA.spam.spamBaseCookieDuration * percentFinished;
	if (Game.Has('Lucky day')) duration *= 2;
	if (Game.Has('Serendipity')) duration *= 2;
	duration = Math.max(1,duration) * Game.fps;

    AA.spam.cookieObjects[i].state = 'onscreen';
	AA.spam.cookieObjects[i].duration = duration;
    AA.spam.cookieObjects[i].startDuration = duration;
}

AA.spam.cookieDespawn = function(i) {
	l('goldenCookie' + i).style.display='none';
    AA.spam.cookieObjects[i].state = 'inactive';
	//And respawn if the event is still on
	if(!AA.config.useSpam) return;
	if(AA.spam.frenzyTime <= 0) return;
    
	AA.spam.cookieReset(i);
}

AA.spam.frenzyTimeDuration = function() {
	return AA.spam.spamBaseFrenzyDuration + AA.spam.spamBaseFrenzyDuration * Game.Has('Get lucky');
}

Game.customLogic.push(function() {
	if(AA.spam.frenzyTime > 0) {
		AA.spam.frenzyTime--;
	}
});

//Note: the stored method needs to still be part of the object so that the
//"this" keyword works properly!
//
//I think this name is unique enough. 
Game.goldenCookie.__AA_update_spamOverride = Game.goldenCookie.update;
Game.goldenCookie.update=function() {
	this.__AA_update_spamOverride();

    if(!AA.config.useSpam) return;

	//Spam frenzy over
	if(AA.spam.frenzyTime == 0) {
        AA.spam.endEvent();
    }	

	if(AA.spam.frenzyTime > 0) {
		for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
			if (AA.spam.cookieObjects[i].state == 'onscreen') {
				AA.spam.cookieObjects[i].duration--;				
			} else if (AA.spam.cookieObjects[i].state == 'wait') {
				AA.spam.cookieObjects[i].wait--;
			} 

			//Time to spawn!
			if(AA.spam.cookieObjects[i].state == 'wait' && AA.spam.cookieObjects[i].wait <= 0) {
				AA.spam.cookieSpawn(i);
			}

            //Did not click in time
            if (AA.spam.cookieObjects[i].state == 'onscreen' && AA.spam.cookieObjects[i].duration <= 0) {
                AA.spam.cookieDespawn(i);
            }

            if (AA.spam.cookieObjects[i].state == 'onscreen' && AA.spam.cookieObjects[i].duration > 0) {
                if(AA.spam.cookieObjects[i].duration > 1) {
        			l('goldenCookie' + i).style.opacity = 1;
                } else {
        			l('goldenCookie' + i).style.opacity = AA.spam.cookieObjects[i].duration;                    
                }
            }
		}
	}
}

Game.goldenCookie.__AA_choose_spamOverride = Game.goldenCookie.choose;
Game.goldenCookie.choose=function() {
	//Hook in my own golden cookies
	if (AA.config.useSpam) {
		if (this.wrath > 0 && Math.random() < AA.spam.spamChanceWrath) {
            this.chooseSpam = true;
			return 'spam';
		} 
		if (this.wrath <= 0 && Math.random() < AA.spam.spamChance) {
            this.chooseSpam = true;            
			return 'spam';
		}
	}

    this.chooseSpam = false;
	
	return this.__AA_choose_spamOverride();
}


Game.goldenCookie.__AA_click_spamOverride = Game.goldenCookie.click;
Game.goldenCookie.click=function() {
    var me=Game.goldenCookie;
    me.__AA_click_spamOverride();

    //This is the value when it is a real cookie click. Here's where I add my custom click handlers
    if (me.life > 0 && me.chooseSpam) {
        //Start the spam event!
        AA.spam.initEvent();
        var duration = AA.spam.frenzyTime / Game.fps;
        var popup=['Cookie Spam: get ready to click lots of golden cookies for '+duration+' seconds!','Cookie Spam','click lots of golden cookies for <b>'+duration+'</b> seconds!'];
        AA.PopupOrNotify(popup[0], popup[1], popup[2], [10,1], 6);

        //Just to be sure...
        me.chooseSpam = false;
    }
}
l('goldenCookie')[Game.clickStr]=Game.goldenCookie.click;


//Create extra golden cookie popups and initialize some stuff my
//new golden cookies use
(function() {
	// Create all of the spam cookie divs
	for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
		var gcDiv = document.createElement('div');
		gcDiv.id = 'goldenCookie' + i;
		gcDiv.className = 'goldenCookie';
		gcDiv[Game.clickStr] = AA.spam.cookieOnClick;
		l('game').appendChild(gcDiv);
	}
	// Create all the base spam objects. These track stats for
	// each spam cookie
	for (var i = 0; i < AA.spam.cookieObjectPoolSize; i++) {
		AA.spam.cookieObjects[i] = {};
        //State the spam cookie is in (inactive, wait, onscreen)
        AA.spam.cookieObjects[i].state = 'inactive';
		//Amount of time before each spam cookie appears on screen
		AA.spam.cookieObjects[i].wait = -1;	
		//How long a spammed cookie lasts on screen
		AA.spam.cookieObjects[i].duration = -1;
        //The start duration before ticks start eating away at its time left
        AA.spam.cookieObjects[i].startDuration = -1;
		//Was it clicked?
		AA.spam.cookieObjects[i].clicked = false;
	}

})();


/**
 * New temple of the cookie gods, where you are able to unlock ambrosia cookies and a whole
 * new set of buildings that comes with it (tier 2 buildings with a tier 2 resource basically).
 *
 */
AA.temple = {};



AA.upgradeManager.createUpgrade({
    name: "Temple of the Cookie Gods",
    description: "Choose your patron cookie-deity and give offerings of cookies in their name. <q>After a spiritual experience eating raw cookie dough, you realize it is time to share your profound realizations with others.</q>",
    image: "temple",
    baseCost: 1000000000000000000000
});

/**
 * Add in the temple of the Cookie Gods to the build menu (once the player is allowed to)
 *
 */
Game.customLogic.push(function() {
    if (Game.cookiesEarned >= 1000000000000000000000) {
        AA.upgradeManager.unlock("Temple of the Cookie Gods");
    }
});

///////////////////////////// 
// Image data -- generated // 
///////////////////////////// 
AA.images = {}; 
AA.images["spam0"] = "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAARnQU1BAACx%0Ajwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABNDSURBVGhDzVp3lFzVeX/9Te87mtmZ1RaVlYS6%0AkIxkYapoghPAOImJHUMCGCfkOMQJjmNzTmxMCOEcm/gcMHZybMCQ0GxknAgkFCJI0KqhutLuaou2%0AT9np9fWX39Ndj2TQjvgDO7pn9XTnvVt%2B97vf/eqlv7Ckdd9UnmpaPhXzkzao4In67SviU7lqLOD8%0A0JN8PXewRl/SHV/PfdN83rm%2B0ovc9rdeebjx2RFekOvvsQXCqFxwxFp6mLSRcul6qXxu%2B3wy17q4%0AHeM0GpAx0SXR2%2BtvDeNnftTqbve489PpRl%2Bby46%2BdpcdFWvkSh3PicFE26IoaXP3d163QL%2B3%2B9mf%0AfOO7V2xZgVf1Sn2kf7prSWutXAtGg42xMA1gYQK8wXwEJUZHs9ii%2BODhkUVruggCgoZMhomnBidr%0AFSWVLpKh7CI/MpHragtk8rWQ34H66uXxUrFWl9VqTY1EPKGQy%2BF2AHQ2ke3tne7qCKFvZ1cLBhkZ%0Azdz6pWtuvf9HbFDk777r1nd/ubOcK/sDTozrD7kBBT1L2RJN07zAYyXuoI8XRTIxZ3eWU0lCBk/Q%0Awwl8LpkfHZiq5iupsVTfvt6RgSldVjVFSY1niqW612f3%2B534k2uqx%2Buo1ZRIxMvSFEgTCbtURfeH%0AnLpuulyiwyZkZ8qDgym5JqGZaRjpmYrAs4V8jWGZSkVu72r5%2BdvHOYLD47KBBrve7gUNOJHTZK0u%0Az7g9dkdFCUWp8dNp/JVLdbQBSQjBQCpUnA5%2BXtiLSiTmAzEcLuFI7ySIB/JsXrMGq8KCrfZn9po0%0AWL68FRQJRX0gDV5uuG3LyN4D3dEgtgU7hnEwxamhWYaJht2YC80AqVSRCFqLPf79n%2B7c8fp%2BjLVn%0A7wgO1qVLImQT8bmxBotzZBXbdHpkBvtI4CbSZQyKn9hokBBw0X3pfIupMAEIQSpkpkZpvEdj8pIc%0A6Eblo%2Bf7czetwIIx/rVblv/Z9946y9MbNi7c3zPUN559oX/6Q9P8//6EfMMyNl3WBXptvn7N5x/6%0AN4YAAr8T4hE6XVQFkBYvDCenCthSHH1gs0BDDNUkhXDYRVjAYDigYD9QloC0QENCrdq4xBI0Ig9i%0AX2y4we7gZshpiDyAnAXt71hA5DmOGs7WxQYaeHB2IbZRgRCzQEOpEs1ENNBFWCDNwCGQHsA2v9NS%0AsQyMAVDaHwlAdUHiQoRdbLiJhEUBdOCcZQ/yCgIFTHOw31J1F1uBuiBMAsrOgoYdA54miu2CFt/v%0Afj2QDVDSUKWWGDlzEGeVS%2B8bL8FOIgfx8T2DcyETRaE9Hmpriy1ZFHS5Kak%2BpSk1wzSr1TrHW0dC%0AkcsCb6vUJZPiJFmnacEw9XrdUooMwyiqaei0VNdomlNko1alCiW5WldrdYyhzzXpk7euBYcQhX3L%0Abeth5c3aHhAdsCXwoYn0iIRDrz25PpXJF2r8tddvOXzgzcUr7jrQ85PFSz4djXeMDuxqbev0hzft%0A/I9HhYCkGzA5GMOQKVPnaFYzTYpWGQoml8EwvGEyTi6%2BbMHNHO8rZE76PPRnv/LewSND58V9yar2%0AE0fHyCfYqGd5GqIDZiF%2BN%2ByBj/bfevXi9z8Y5ZwhSZOnxo95fVI1%2B8N4y0m98sK%2B//37RE7PFPiJ%0AyR2SOZ0pVjSGpgSKtblYu8u0C7SdZe0OU2Apkdd5RqfZnDRzsG9PMj0ZilyqGtHNGyzL9rwFCgWU%0AzmQqEBJgErT5NaU9bhiyC9ctpbYfn6tzoUKtufQqX0ts0aqW8sxej6vD0Nrblt1HsXz8EnF8aidF%0AJ7zulfF5rcdGswzL2%2B2iriu6roIZNF2F5tJ0sIFCm7qiSorMTJaUY/1T3QuzNtagGQvN%2BUFXFHBz%0AhPKQU2eBJh4UCqQHrH7L9pjDYHrrnSNXX7Ys2/NaKT0c9DnbOqIut3dsIGUyoq5VaUoxKHZE38Xz%0A7fPtHaasGRLF0xQsckFwsAxDqSA%2BrSiUotRspsKKjkVdLS5XeCaXoenoC6%2B91eSIQ3qApvAJrr9t%0AgwUaBhT%2BgxsCsxNa56OWZGOsaq2Wcd6Z57rc4YnI/Cpnc9Iiw%2Bg6xzIcxzMMx3IcaxWepim8M2gc%0AOIbSNYoyUUBy09RMsDOtCyIjSUoile7plQzn2prsnclYltB5CwQxUMFjgBghBpPFHsTVm13H3pEm%0AKy7X2b6Z6JF3JoPi2ydHWHRftkBhWWVwzO5x8SwjAa6ui6ksNBRsGG1JV6l/BHXN71V4TsgVeU2z%0A2CDSAk7xRcLq8dKNrZd517ommkwKxOBmcDYY7KzBhA5wMSA6iGPXpNAME5vnW7asQxRh4LOndoxe%0At7nqcdBDb088%2BMXk4V9Of/P%2B7M%2BemBzbfQzexj98bXD3z05/4fdgMwgP3TNx7I2TJ3ccxeBfuXPs%0A5I7Db/x4n8upURyLTRH4ORka7X9xfBI%2BFFgX0pq4rQwRF3CKQGniGjUpDpEvlBVJgczlr76s6PNS%0AyQz7/hF3%2B5Udr%2B4MCDz13LbQfQ932kTq9usmPndD/XAf9%2B2/mII2%2BJeXo7pJuRxUOCj98Wczqkod%0AOO4KeittrY5NHW4eezZ3QbgimSwBGwxU0orByYNrjRpcpkyi0By0TRRbQq5SGWKXe2evr1anvve3%0AueFdI/teHXc5dUOnbrkm//rTw%2BkM43LX/urRlr95PBD0U1%2B6PQm22XPIWZfoXzzd/06Py2mnNE1M%0AZQI2OxX28UH3rMt83tlBVohjYIPRPwu6cfJAfPiYzUEbJl2XjOUrYxzPdndKN94Tv/Hejsee8YT8%0AxtLOEvpOTnN3Pti54pbV37in8vs35f767nwiTX1%2Ba15RwevGu/tsq5eqTz0f5TjKYdMM04iG7PvH%0ApHJ91iQ67%2BwQFVZcwSXgSQxUywkgIRVsQe/b7zYHrdP8r45lX37uBDTwmqXVnz6WLFW5gyfddhsF%0A0QH%2BnEg6%2Bkb83Z1Vjqe/%2BNCGu/5u47ZdrrXLpNg8Kdqi3vet7md/7k5lXdCPOIWmSb9/VKpqdB26%0AsmkB6xKrY9YJaKhAkPzc6Mx5B2FYjrXZEBAwaP6l7W0PPtry8JcTD9yZ%2B9Qd8ZrEP/ykQ%2BBhZhhd%0AbdmnX3DTDHZT6x/hn3rRd8cNtZ4jkC/iA99et/XKwj//1H9iAFENCEB6om7SkOBzFyAE65LviFrh%0AaYk8wtMw/KLLl1OvH2jS36BoA3KBZikDZ8foOdqy91jM7aSdNqqYi7Qvjq78tPeOzbSbl20Ox9qH%0AMoIsjSTDE4Plg5naSAq6BlJdHxpnFM3J0BDtLMXRUOlA3WRSnDrYRdDyIDMJvlnKBaE0Iv/gwjSx%0APdBAp2BRsJSNOTONekl39Fv33uyiTdblpBilns%2BqxSxjd1QL9cLAoC3aXkxkooFWj66snufSolkx%0AukCrllT/gh9v7z9wOrZ%2BdcriTwY9LAU3VwELwBuHzQT1R4I%2BlshDnI7wCvQNfJsm/XWTZjmoO1pS%0A9H/86g3fuW8LDBg5O6GVU0ohbdRmDEoVBQ9drwm%2BcLXvBMMKxSMH9WJtpm%2BwUpNSQ6ch9thE6mtb%0Au175c2dnBCYVpbCMqjc7iECI8wbEAHb2IBKaN1HgjWWoDKvh5HOs2xFvFSuqXJBKk5qp1ktZtZpX%0AimUT4jR1Sp6YpERTqct6McfZbJmxMc7r5dxeOZ8vDo1K5bxWr3Me571bPsNh38Bs%2BJu7gBegwGEa%0AwU1EsNOiNP4h1AkPAAu6oJzWTEbnRYoVJBmBSUqpzEBxsAyksMwIIue0GdW6Ui4CcXlwSHfZNBvH%0AzgvZ/G4u4NTqFXvQbbK0PeDjHHYBRqDHg6CkCVsKXNe0QCNaosMlkLCtBRqUhs%2BCBeEt2YW5isGw%0ACijN8jUt9%2BIP36RmdEPjKTFg8H5N51WTk1m7qguS4DXCMS4Sp4LROvgpFjV5jp7XwnndQnub4XFz%0ALWHWHxYDbQXDY7A0C106dyHHjIQhCVPMeuOo4VuD/nONMDVxggGFOTZSrd3UtkAU8gLbQ%2Bt9Zn5M%0Az0h6kaY0Ua6q1VSxcnQo%2Bd8Hkn1jqi3AhuO2%2BctcXeuqgS7e1%2BXqXG%2BPrNA9S%2B7%2B%2BiMKBAjDm3g2%0AZQ8EURFNJUyBp2VPIzQP%2BkOyILh9tKe/SX9frNMo51rE0fXqqNlfLY87%2BFg3W%2Bw3SymGozkIXsqS%0Avpyh8yzvoOhCYmb/od4WB9%2BxLO7pnh92B3m6YqQ1ZWrSXdaf4MNbWfaBa6LGwNlMwEdnJ5FYEiae%0AFXloRMI0OIjg981XLqeef39O9tClMF34quNNfePa4FXX6nveMw8f5dJZmaEVlob3p9JMiTLSJj2p%0AKoj9%2Bymmg2b4qiwfGk2fmrYF3dx4wcELNsGm2QP2SMfCVvNXvaV1knzBgwjEiEGSg8g1YgZYEIkc%0ANykmKwbVog25gVK%2BMjEY/cM/EP7otvqB18RSRdU0TTUR1oe9GWGolTRlmCxjQJpruqSz8KgUs1aQ%0AmA6wMFv1uk4NpPmkfK/j%2B8PUxun4qiaTAhUxTUHsWfZAa2JGE8lCoiFzFYE2/2SxNNQr1mwti4f7%0AnaE6P9WX2S8L89s0jjFnElpNgluYgN6k6VaT1lkmXZM%2BkCSfk%2B9u8bRdMl/zhDjr8NP%2BlOz1%2Bkum%0A2kKlX2RmXdXzzgtUSANAQiN5MPRBn3UQwdNQLngLW/uC4SWZc6hmMtu9UGopKPNqpd3DlUHeF5tv%0Ad4p2qcqMJ6vpgiorXgPBDXWqUs%2BXJUk14hzvNvjpZP2VNw4ee2%2BvlpiqDI3Avy1UaoLNMai51aYi%0AD6gg3EBmRB%2BhBAHYkh7gbnhgsLVBbMjwJpSWWeGl7KVOIVip0cmQ2FdMws6ADEQ2hZLrBZYvuxxF%0Au71kmhLHZVjulKa/pyjDAjdFqdtluepx7qoz2/YOb%2B%2Bd3C8wwxFXgufeYbtooZkah5K2MiRRH0xT%0AYANga6sQgCRAiWPTBLRWL0xxQdPZ3hqKOnS%2BfHnHNkfhxQ8OUZWioWplhsozzP9kssfszO5i8QPO%0APNbiTLvEaa9YXhxfsSZ%2BvFyeSs300dRpN3/Kxu%2BXZcem5Yej6%2BvOZrYDwQOrA8Q%2Ba%2BXBTiJx37s2%0ALkQKqwnoa5XnL197%2BVOHlj8mHFe0mB0M2u2mNwkDpaE9J2b66zV0b18W4z22fCIXjwZ4jW51O2Kd%0AgRanm8pT8SsiixfMc9Dc8aHBG1dfkp0q/YC6eWv75Pr0q/vnnhXhDgTVEVuCW05Rlpd5NrtFejVP%0AFG3euGLnS9/M5rKyasJuQsIykRrmOffw0BGDZWtVSTMokeHGJ6dDPo8VRhDtWrUCjzLg8wsCHwjF%0AK7kJldKWLlnT0tLh8QeUavpfX9jxyA/eqsztnn590yJYeSTugWzWbHZr2zNf3vbcfxGDCc76X247%0A1ITYosCvWdE5PxaKx0J2h41lDVEUaUPhkRsVYCIzqipxLFQuA5dMhNNfLQqCHaazIIi6wUxOJkbG%0A8wNDE/lipVqtTSTy0EZNpsMngEZiEjwNdkBQ/WxKbvePniFZOmTlvrlzzshY89F/S18BGhEmqHEo%0AFwgMgLYOIjL4WAdojIztxzFQf0vg5hoWvAGsUC7wX34jWEMik79jNB9zOoQ7YDkT858US7nAG0cg%0AFbEFy028%2BHIuMONI4h2qkaSLLOWC9EX3inZIK/DGRZiSQ0AGWAEdcEl8ejZjO3B8DGoF/H5Bm%2Blj%0A7ukn2Myi5hnEDYLO%2Bu6wPcA6WBPk9Cc43yc1FHLM5KbG2Ywt2ANvoW/g9F6%2Bqu2TmukTHAeUJncx%0AfiOPiDslSJdbcb4zC7qoCsQaWICEIWeD6pAeCKrD/Ltc5HFI4Y1BmGNNZGXP9gzB%2BsMaUEcfsBdY%0AH2oJyonYXBA7eDYu3cAvRuKMiCDYDOTcQCmQ%2BziYnlxtaZwccrsF4VDwJ%2BhFtASZndyPweZbXGET%0AYIFiFkJpdmXIfdUNGypj423tQdilCzvDkbDH73N0dYXCYfd169rb4n5kWGJxn8MhiDy/7pq1qdEE%0A6oAyOp6bThbhrQSDLkM3JhLFvccm4zD2YwHcPRJtXCpZ3NUz4hR5VTXwcmwyh/EdgJIpL10cwTUm%0AAEUzIKtJ1nrCAZffa0f0CpUzi5TXXNrl99kGTqVkRVu5Il7OlXYeGqNxb%2BWJF7//8iOPg4QgM9YH%0A9YMACK4qwHckVisJ9iF6du7VNNw3gh4lSXV8hcYil5BWXrFq%2BpSV9oMxeeKglRgh94hQgeRCFxLa%0AQoG%2BICFPRHiIqsPPRp0cu8YtlFe3H9/6mW50hxq3KL358kW8Vo20hRwcg4tb4fZ5DG1qinYSU0rl%0Aqb6hXCIjVWrJsUw5m6/MzMA9w19sUStCLLhjxot8MVdFrAZocG0MbVRFxZvJ05bfj50fm8jbbTxl%0AWFIWn5DvGhmYTk1kZzLl6YmMyNOJ6Ty2DkvCIMCKAXEJLdbdUc4WJ07PwAjDFbL2iFeWVdxk%2B8%2Be%0AIYvS9//plVa89AxFA0s2ksuEc53Fcy8Z4jCQ%2B4EWVX5dIR0xFKE3zPbGhT5SwY5hT1D50E/4f0hk%0AohdhXNClcRmQ3PXDtuNemWXlAfS5%2BBrXKhs3NPH13GubjfubF0z9n/eSZiNtiWE/NNSHrnOe9yd5%0A%2BX8uXFtZ8P/VVwAAAABJRU5ErkJggg%3D%3D%0A";
AA.images["spam1"] = "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAARnQU1BAACx%0Ajwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgtSURBVGhDzVp5tF1VeT/zdOfp3TdPeclLQl4G%0AQgKRIQgGUFCZlAUWEbBCqVVXZWkHdC1bVlexS3H1D6xDKw4ItS1IFAXBaCIQAoGE5PGmvClvvPM8%0AnPn0d7KfNy/3Ie1fyuZxc%2B65%2B5z929/%2Bht/37U3/2cb2I4t56h3bhR0h0gcX%2BMT1jUOdi7lqR9jT%0A9El%2BXf2yxrPkcfy6%2Bs47j/uHfqXX%2B%2BRnf/Klxs9Ky7rc2GEp3IKL//ONtdQU6aPmUvVSeXX/fCLX%0AvqEH72l0IO/EI8vDw6H2FnzNz7qPy35ffinVeFbyynhW9sq4cN9cqeNz/tRy1/o20ufOf3jKBX3o%0At4/%2Bx98%2BuHffEG7VK/XpsaX%2Bje21ci3SFmm8C8MAFgbAHYxHUOLt6NaxvvPUsen1O/oJAoKGDIaB%0AF08t1Cp6MlUkr5JFfno%2B198VzuRr0ZCC6%2B1bOkvFWl0zqjWjtdUfjXoVnwLQ2eXs8PBSf28Uz/b1%0Ax/CS6dnM9Xdcef2932IjIn/nJ64/%2BPSvyrlyKOzBe0NRH6DgyVK2RNM0L/CYiS8S5EWRDMzJnnIy%0AQcTgj/g5gc8l8rPji9V8JXk6OXpkeHp80dIMU9eTc5liqR4IyqGQB39azfAHlFpNb20NsDQF0bS2%0AeA3dCkU9luV4vaIiCdl0%2BdSppFZT0c2x7VS6IvBsIV9jWKZS0Xr6Y//z/EmO4PB7JcjgheeHIQNO%0A5EzNrGtpn19WKnq0jZqbSeGvXKqjD0RCBAZR4cKj8PGWAC5aO4IQhuIVjg8vQHgQzyU7dmBWmLDb%0A/8xakw5btrRDItG2IESDm7tv2Df9ymuDbREsC1YM78EQE5MrCtPW4sNY6AZIpYpK0Lrq8fhXb3vu%0AqVfxrpdfmYZhXbCxlSwifm7MwdUczcAyzUynsY4E7nKqjJfiKxYaIgRcPL6p21UqDABBkAsyUqM1%0A7qMzuUkMunGx1r4/8oEhTBjvf9%2B%2BLfd9/dmzOr17z8CrhydH57I/GltqGuZP%2BxX%2BDdN4z0X9kNcl%0AV%2B%2B49Qs/Zggg6DsRHpHTu6oB0oaBlsRiAUsK0wc2FzTcUE3ViYa9CxsUDAYK9YNkCUgXNDzUtj0b%0AXUcj8hD2uw031B3aDD8NlweQK6BDveuIP4epwbbebaCBB7YLt40LODF80lDzz332/QAdag2/%2BNwx%0AgH7o5VNvi1sQ%2BN6euM8nioLBMIxlmbZtG4ZjmCZDs7bjmKZjWzZFOzTNUhSr6%2BiAjqxu4D/THYyh%0AHYfRdItyKLVuOJRDU4yqYcXtd5DUN64/H6jgRiFpeAt4Dw5kAJLGMwhdxOOe2%2BiBvsi9t1/yvit3%0AB8OdsqClk%2BO6rU9P7LcdVpGDdTUnCT5BkgUeepXxyXIqt5Au122bsmggpmmHZVjHoWzMCl9owKR5%0AxhEQLBjGZ5lmW2Ab56w7Opwam0xMz5WW0ur4qYSF53/fiIdFg3JDsrhYCS64Ig4YLm816FjE96VP%0ArbdqU/ufGu7s7I53tlfrVk9767Ztt86MH0xlU57IRtPUy4VUZ0%2BHKAwlFw1boP0tScrCmy1gdSiO%0AoS2KctwGCQO04wF0imZN22ItuWqp3S3eu26/mFei1dJ0MTN70z0/OzEytxoGwgVREkh2RafBY6Ae%0ARMxNHG3vnsFCxaGD0Xi8VdPLHkZt8xWs2nPl7KMc%2B9q6nnxIHKlpS6HQLonvV2Racw5MzEzm8lSp%0AbtRNSjO9minUTbFucDWD0UxJ1dmaTlc1s6rpqurU6rVMKTM8/dbRN1%2BenxlNp0t1Tenrcf1vo8E3%0AIEgjlLpu5IwhnpU0WAt%2BBudcrdPzy8Xtd32oVFc72tprWtkovin5KVkesh1vR7zboSRJDHXYpVTq%0ARYouy9K6vs7Ny%2BnjxbyheDhH5h0KCo%2BI6CqFaWsCZ/OcV9MR/KDitmnpNiamFRDtRicXu1ozoDrx%0AcJSmz6Ii0BOJEogULggdWPkZX8AlEMmbvMfkdHJ0vMA5%2BZE3fs1TFZoyaZ5W/C2mU6cdGesN24LO%0AWo5B0bxtn3aXn%2B4TKc4pWuUCbVM2VNexOY7lodAqZdZsG9ewB3yFMTMUGxD9OwY2b960e25hPp9d%0A5LnYydEXVkv6vG09b715mtwBRz0LGmQFtBDfG3yAdMrmi0fGpb3bN3ZwLMdpiixEwrLfLzFAy4oU%0Aw9uW7jg2vALlisfhOMH1CQ5tOZbt2DQNxBZNAR/n4HUObcO/uD7HMgwNi2BblmHrlfTEb2bfommf%0AL3r%2BD/ePTc24ittoCCgwtkymAp4DJVklab8P8h/YuYn6xcnVD7jXyrrPPGnx8%2B1KffSirQmaU3o6%0A2lUd1NPkOZrlHJ6VAZrh4NzwIbgfLAvx06wF5%2BEixaxYg8EEYIiUO0PLsgWO8vmC8DmFopMpJo/M%0AnJ8We8OhuFR3Se85oCs6tLmV8jecG0cyKDR4D7B%2Bl3ucS5ggmt0bWmuysDxNnZz89dj0JNZjoLt4%0A4Vad480T4%2BKxkdClFxR1w2IY%2BAg2mVVm5mHsiLX6h65InJzwzyzAeowNfRW/F5IWjo94bMeNu1vW%0AVxSFzuTbOYGaqMT4PnaXn64VznFfBBu8B2SKnODqG3bjKwMChX%2BQhoB2IuqsZZIIFwGP3NUe7Oxs%0AYVnogHDLtdlffjcZCVpzC/y3v5K97brkA/fmHv969vN3Fu6/K/fbH84%2B/vAIrOXW65a/%2BZXUk49M%0An7Ec/pb3p55%2BZO6pRyb/8vYkRtyzI//Tb43/7Duj1181jtnSLOtQDFyjyLsKsLohpoAnw2/AT5xD%0AmNAJ80Di1KwbmBbDpCvmfEotlW2aEeB1b72uiGG%2B91Trb15ru%2BNv2oZPhQ686pVl6tEnQzd/ZujQ%0AUf66vepVFy/cc0v%2Bpde53jb77/5iFrj/8ZE%2B06JYlrrmsgLe%2BtEPJBTZKZSh6/z2TWlR5LZ0eoY6%0AvKYF5Oc0yBHaDM0GNTpLmNAFKQZcB0nsmhrc0M6%2BUEtY2LAhLooSLE5TGY6ljvz35C%2B/O/GenaUT%0A4wFZsF3lheugqjs2mQBHMxVNZz/5wEA6R93x4UI0pHKsncsztTq9e5u6dXD%2Bmr2qYdAibz/x9ObR%0AyVggwLeE%2BJhPZJGHnduePLmAHAqqC29N0laGuAskRZA0SY2aGrwGAnAya46MZjUNGs4%2B/P3YW5M8%0AAvOOTcZX769858FxpGCmSX3ujtzxpyfmFrlr7u6%2B48bq1Bz3vj3VZJaRJfvKPSVMSrfYLzwUxYSf%0AfXR5/6%2B9pQpMF%2BGd5Xk2HmX8MqcIsIRm0Agd8NPABoJKsDGwPKTWuELKlFnGwq0BzVC5it0Slc8b%0Aavd64RzMjf2l6%2B8buPi2wavvii0k6Ov2arJoAMqP9iuX3z54w6eHJmbly3YaqmbuPC89Mw9fQl13%0ARR4B3Seb%2Bw/0j0zSGP2bj8XhEvETvLWqmwInDM/Xh5dVEzZ0boNY4Y6BDaR/BXTD8iB85JhrQfOc%0AMJlT9x9M/OQHJ5NJnWONBz9bvmFfyrL5uURgPkG/dIwXeVAjuA6%2BUFI0nf/ETcnlNP/X/7zj77%2Bx%0A6%2BNfXM9z1L491WhQ9XicgM/69hPxnx/wzC5EQKQEnvJ5EDKZNyc0w2ZLOpR%2BJZlqIIGrcOsKXgGf%0AhKC6PUhJBUsw/PzBtaChnoIgcLJAiV6EPcOU3v/J7o9cnT/0w5FDj01DGT7zYMf2zdXhCeqibWVR%0AsIN%2B9bLzy7m80xZz2dlAt5bKwq8xTzy8pKnUI18%2B%2Bf0n%2Bz/1wLZdW0u2TYOl3H3LuKYhyNMzWatk%0A0HD3azFAdQnrWOEejRAIkZ9Rc3iocxoYJjgmBWeHqOaGX/rkqejNnw2e4Q8QkkDR/mvujsEVSCIX%0AD8OQmPsfuoKlTZnTB9vNei1%2B0Y1RBCPTVVYAclN0VeNnFsS9H%2BunacTN9s4Oi9ZpCpGeYUwYxxr1%0AICwPDVUrfLrcg%2Bg0iF/bli3UU681TxSUkmFBMCl8Uiw4/hnObimyfOXuzeetb20JiaFgwMNbyBKM%0ASpVBvKuVJa9UTeZZUawvzWmIPFK4ouqON5goqFOZ%2Bug8TJ4vVv2ywKqWl6YNsGyK4yAgxesWsVY3%0AWB14EepXEDMpvnHQGJTSiP9DstjEPXATpNil7vBEgsvhQXQiIe6j1%2B66bs95rEVbpmZxUGcNVKK2%0APMf7gvVqgaed7Oio3NqlLc55eofMt161VSse8DpasS2gXBALMecF2Uj04LGpn4%2BymZyfotMOQLsM%0ABjoN0ZzToALIxsGZEP4Iy3NdHup0RFcQb1CpaXrGBncAh8CSsJRuWtdesuFrn//QtRduAO%2BpZpcN%0Aq26pBUutWtUkzTq8FGTrZcYWhEBEm58VQu3lE0c05P0OlZueqxcrpXwhl84avFienLl8a9fXbgp/%0A7WOS38NgEKQ4Fssaxkqe0oABhLA3IMads4ZIZL42gJPHQNUQK1w7h3MylRsvXCcwar2asuo5DKNV%0AC5YOMmSbqZJjqLXF40Y6V5kdNSslvVCpT42puUJg24785Kyl%2BG3ZW88XjHSmvLislYtqvuiw0uYt%0A3fdetcfrw/tBa/F/c4MuIICDGoF2k5jtmipKnaiUYkJv66dhQAbL2aIEnQ6HIrqe1wsLWimj1nJG%0AadnRK1YpqZbTbNhvF8pwCIzMcbxiGapOW7RHEXye6uI0H/BJCvqWGZ9sKx6rVhX8PkaRHNqgJb6v%0AL9QTs11bx2KtCS5AiIiIT3g9UrZ1QUPSKB5gQrhLVmF1gyKbNEuDWzBcMlsxHR8Ug5aCHO/lvWHJ%0AH2N9Ht4btUzkU5RV1ylB0M2aiSgaDGpIAuIRCrFE5hnFJ8b8CH5ySHa8Hs6v0FqFU/ycx48hZJmj%0AWMblry6bPacRMyNlSKIUzNlsPFdtyP%2Bch6BnFOfyX4ajefPHP3gm%2B/wJo2SbGhIWqa46NhtWa6ZF%0AKybrQVpbUxnb02IHYmykzQ7HdNGry162tRX26nh8dCjoePxiR5sle5h4mxDvQNw2PO1LVRmgYeii%0A5PrE1Q3SRBEV1VSiFC5o8GmU5iF/eBakiW8eHmue6NwwjZiGibJM0DQ/un4owCqBtoQov8ZYI4x6%0AmoIvsxWK8XNy2OIEQ3OgsrXR09nDx1InpgxHoANxJtwmtPbL7YNFX2dVjDJSqxjbIMY3eSIDr07x%0Af/7Avy7lTQrB9kz9ZK2k4Y4h0IakXT9NNgpgiND3Sy7fQv3gpdWPhWKd8xRoAkwk11sesYcTzPrW%0A%2BouMkTLldsmeO2ElDhj5uoOMACZr26rpFnGQjSEOGY4zPnIqFw4Nrutu7e/kRaqvI8yKHl4JIoSL%0APE%2BX1N7E6HspeoKmL9oR6/PL2lRzVksMEaqLGiQxRLdYQyBCdUjluKlJHgUQbmNfvvSDZTOzi3n5%0AsDm6YJ1K8ZLHHp6x9TrNuXQBZRfQU3haKKVbVmIYlWJylFVEyp7NzGcyuTfe3LCrl/VLJsXoh6a8%0AFuWVJFvwtEiRG9pbX%2B9hY35pc1x6UW1mmkBFqCmETdTjTEQ8w0jJhEg1ZHUrpObt3p0DTK188BnL%0AE4jfvC%2B4bjc9O2XPTzsL03a1bOioBJgokulIyk27bDsF287ZTt22RIeNo9pgcnCJQFk9POMoPGPY%0AMhaF40A44EUpQ8f%2ByObs0aNjyuvzbTvX8GmgwjYAPDQ2DyZfH3VBQ6cRXMyjU%2BDauF7rPQKRdtOh%0AAwLLejwG7RTHZ3zdm5TNXdx5YfV4ni3yIsMYUAvLkU3bsai4SzfP5OGIopYreHg/ByU%2BCdCxg2EY%0AVZ1RDaS/jl8cyTv1uQRfqG3xHxmam/nJpvsEwdXV1e3oWAIhD2JGQt7d1wKQrnrAj2DP5sYz%2BxXw%0A4U3P5HXhGu%2BIZ3BweOxFx9vWqS5kj/2G39Givn5s/khZiMZtCM/UnVrF1AwGhQOezdMOAqzfdlBj%0ArFhmXjNnbTPq5ddFff5YRO6PGZzI0jaL4vLrU5Gi6YmEypYe4EFuoGTNhgjE7g7J7/doANj106QA%0AiUYSmybQYL02JxStdLEvnA8a5pBmLmazhxPlaTo%2BuCmEWks84rVNJVtkUUGrqGZFq5dqyVylWKyb%0AFZ2uWRpM3KQKWe30TPnZQyOHX3jVWpq1C1lHLVoLCUvkETpZr1/nuIyFwLSyh9YEA6wDwiYsb6Wo%0ATuq%2Bn9gzgC2spt48S/1O21wFXRI6aapQpNl0KckspSXFw5aKdiSGbMnJl/KakXKcHEuroqBIkizJ%0AyLmXbDvjOKiXofDhlcQ0mKLPeypf/d7vJmbGFyaOTM7XjayuaRyt1urFolqmxDoSzHMbyh3wbKgt%0AIS0/cfDNFdD4B4yEuA4oUNMzYKYqx6ep3pZQi8PEyiqztD10cjM/5acFnuaXF6hCzkL6wYu2wGui%0AWLbsRKWeVNWsbo7V6j/LF56vVIe9XGIwmOkKjHDcnCJnA/79y6UfH5980SM8F5RPdHnHOyIHQrEk%0AF/LEupsAYBsALI/UlqAkK6CJH8Fs8LeW5anFRajH/np7xgl2BP3rorGQEq3z4gvV5DfGTi3parlQ%0ArpbLKdtYZJjDheILucxEq%2B9FrT7s5VMDcc/6OO/zMTFfhZGEgNTZHpxLpguFPKqRajzIBxStVpst%0AaL2bul6JXAnHUGFdvtnUkNKCh5LCHZq7Y3vf/X9VnBpJpErYpZudyRyYOrtTjR7n9wpfvqk7Y0tv%0AFJSPi2N%2Bmu9SQoPhzq09A%2Bdv384PDRzKzU4qwcOF8qiq%2BwdiRZvFzmsyX/a3g5BwgYhfZCnstHZG%0AQ15Vkhx%2BU2/3tZft2rmuP0hTm9Z1fXBdh0fqeCr0YToUvrPtFev4EyeGz9mKuKQrooicKLKlfA27%0Ayc8cnnT3EX/6b/csTZwGyyYl06btiysu2/ndr9/jE23L1KsmZ9R0w6hXStl8PsUyUioxj0ptjRVz%0AuQI8R0hUJhfTcUGQON7geY1HyhiCU1N8UjwUFlHqYXhFkXWQFcpoaW0N%2BWOSNxiMt4UC/PTU8VeH%0AE5/64mOIU6sl/e8fvxieDoZ48PmTKM7c/51DKzGTVCbXrgvuHDj0%2Bodv/6ebP7hn32VbBvrapEiY%0AFSTLtgqlBCjo/JwSDfUy4K6ok8JL09TC9FuReD%2BKrMj%2BkKCbjlYrVUXQI1Kg5DhFlkxNlRUpnanO%0ALeVzy/P510aPHpt448TU9FzGWmOI0A0wZ0KYSHM3ir7y8Kd/%2B/gzxBwRfj730zfeFj25CR8XDgcY%0AyvZ4ZBScBOynAC1lI2V0YbEsqrekJy%2BwHlmy0GzUVwX8KMsygkw2k0ukS6MTy5Va8w702477rVsu%0AJBvv2G%2BHJ/ny46%2BsbDNPHXj66Etjb6se7zCBP85PUA8ImxyvQMCGeqzs2I6fPI2wgkz9bTnTHwfc%0AHxoFoQOI8Wtjl2KlMgJGgtmgyNS0u/WnhdsYHXvM5KTG2R1b7G7hLuINdPrSbV3vEqCrYUDS5CwG%0A2UdckTR0HNvlbp3vzITeVQ1uDSpAypCkqO5SU5xCQPS%2BVORhpMjGvvie9ZgTmdmjhydRaUU/XOMZ%0AqBdUH14TXIXskYEu4rNx6AaGgpMuqIHjJiydxF5kHOQ8DoYnR1salkNOt6AcCv2EvEgZg4xOzsdg%0A8V2tkATQfYxCJM1ujfree83uyum5rp4IeOlAX0triz8UVPr7oy0tvqt29nR1hiJBT0dnUFHcBGnn%0AlecnZ5dxDSizc7mlRBGHkCLgeZaNTcdXTix0xvxdHWGcPRIlLpkovnB42iPyhmHj5umFHN6P8JbI%0AlDdtaAXdB1B0A7Ka6s6nJewNBWSaoXBxZpLajgv6Q0FpfCKp6ebWoc5yrvSrN067fvpfHnv4P//x%0AIYgQYsb8wK1RAMFRBeSOhLWSYh%2BqZ6uPpuG8EegLpk6SHaRD5BDS1r3bEF9xBzHsraPuITbiqnAB%0AX4tHSGkLDckIqeyjYE7qcvjauCZm1ziF8l%2B/OHntZYN4HBv6rqQvuXQ9b1Zbu6IKx%2BDgVktPHFU1%0AUzdHMKRaXhydzC1n1EotcTpTzuYr6TTSM/x1rG9HhQJnzFCdLuaqgsgBDY6NoQ9OHeDOwoyb92Pl%0AT8/nZQk7B261BT%2BhHDg9vpScz6LStDSfEXl6eSmPpcOU8BJgxQtxCK1jsLecLc7PpBGzcISspzWg%0AacYK94Ck7737crdeekai4Y17yGHCP2SLqw8ZwhjI%2BUBXKr%2B/IA/iVUTeoO2NA33kAiuGNcFF01fk%0Af9jIxFNEcSGXxmFActYPy45zZe7BK4Beja9xrLJxQhO/rj622Ti/%2Bf887Nl0SLOxbYnXNr1qbc/V%0AQ6w%2B8vm/Jy87ilclF60AAAAASUVORK5CYII%3D%0A";
AA.images["spam2"] = "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAARnQU1BAACx%0Ajwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABr0SURBVGhDzXp5lFxXeefb13q1b93Vm1pqLdZq%0AW5Yt27KxsUDYMLIJhJiTGJzkZEKGnJkJGduBk8OQZUKYIeEkORlgxhMgMVtCGGMgthDGC5JsybZ2%0Aqffu6q7uqu7a97e/%2Bb2%2B7erGHML8F65K1bfe%2Bt3vfsvv%2B91L/%2BrO/leXqtS/2m7NRMg16OAb/ffu%0AHViqtDNR9S3f5Ozmh/XuJbfj7OYj//p7f9ZZekyTn/3mH/ZOK8mtlfEzUjSJzs99Ymd1hlyjV1a7%0Ajebm66uFSv/2YTyndwF5Jm7JX7kS6U/iZ3Xev10OatXl1d69UkDGvXJARsd/cquL78Wp/OBYH7nm%0A0T/6ti/0Sy986f/8wZ/cfXQvDnVb3dnx5dGd/Z1mJ9YX6z0Lr4FYeAGO4H1ESjwdl2XGBqbOz47d%0AOEokINKQl%2BHFS1O5TstcWa2TR8kiP7tYGR2MlqqdeERB/8CegUa90zWsdsdKp4PxeEDRFAhdzpev%0AXFkeHYnj3i2jCTxkdr704Ife/uBvf4GNifyjH37wxadPNCvNSFTFcyNxDaLgzka5QdM0L/AYiRYL%0A86JIXszJanOlQNQQjAU5ga8UqvMTS%2B1qayW7cv3VK7MTS45h2aa5slCqN7qhsByJqPgYHSsYUjod%0AM50OsTQF1aSTAct0InHVcbxAQFQkoVxsTk2tGB0dl3muu1psCTxbq3YYlmm1jOHRxLd%2BcJkjcgQD%0AEnRw8gdXoANO5GzD7hpFLSgrLTPeRy3MreLTbHRxDVRCFAZVoaMqfCoZQiedCUMZSkC4cCUH5UE9%0Ad954I0aFAfvXr801uWDPnn5oJN4Xhmpw8NBDR2dfObejL4ZpwYzhOXjF5PS6wfQlNbwLl0GkRksn%0A0vrm8bXPfPC5b5/Fs06/MgvHOrgzTSYRp3tj8C3HsDBNc7NFzCMRN7/axEPxExMNFUJc3L5ryDcq%0AvACKIB3ypl7rHcfF5CBx6F7np/37/ffvxYDx/PuO7vmdv3h2w6YPHd529sz09YXyP4wvv%2BU1/7Y/%0AEd8wjNtvG4W%2B7nznjQ8/9lWGCAR7J8ojevqFahBp%2B7ZkYamGKYXrQzZfaIShjm4SC/sFbDAwOCjM%0AD5olQvrR44FbBtKDcceyW7UOzVDPjud/WnQtoKRTkXhCTcSkeFyLRaRIRA6FpKAmhkJ%2BR9MkVRUC%0AAUELSMGgrAVkWRbxXw0osiwIPGIPPoIkSYIgsizP8wLlsTTDou%2B6NEW5P0tfW1Sp09RvuWPHhTfm%0AR7amvndm2o8ekZGt8F84OFwNvtW7meW497zjwPvec3hs5y6apmgrZzpGvZGbm3pGVRM4UKnlZElT%0AAhGWpW2zKnC1eHR0Lr/YMRzHpR2PohmGpjgownVtj3YhGPq4EcqiPWHttOq6jkjLYWX79Kx%2BfaY4%0Am2vm8vpKqek6vruTBt9F2EYHQQzfHJIqyUwkA/WaLIn/9T/dcfdefjb/ynNPP3v8oUdEVZ6auJwe%0A2Ju69aOz0z9OJLfccniLY1ZWlq7GErFU5oBtJ1/%2B4efiyZjtmZ6vOdpzfcmhRY4WXEhHMTTt0JCY%0AhrI8JAGKcjxPULnYcN/2%2B%2B7datpup5Fl6ObyKv3Bj35nec2CEc2gSkQP9Ie2%2BCmWAxiAptFD6iIR%0Al7TdO/qDQufHr9f6R4YE2ZibPe94hqpytH2J51YS2nx56fRKXqg0WV7c3nb5hvGG53ZYiWnoXTUE%0ABbMM7VCUSNEc7WvYZTyT9SA047oeQ4k07XnoO55j0XWrPJG7VG91x7belhh7Z70847j5wUyYCE0i%0ALBqMO5KO%2BkL3pCQBGCGPHIlGgwcO33fqzI9EwZYEtjRzIqhZQ4OHFMUyqYgYljKRe9XA1lByj96Z%0Ar5ZeloUOzQq2yZ672OHLtiRRssozjGI6JX8ADOM4FkOzHItnh22n7rqG/xqIDoN2AzUrv7JqXZuZ%0A73YcgaO2Do/ChXqyIV2gDyOBZteFBo6BTUPNSO49jHbp6mKt2Lrl5qOCyO87lK5V5pCV862aW/MY%0ANhhP73Q9w6GchezJUuUqzynR8E6BUjrN67ISFySOF1mG4h3b4ryw4zgUy9P%2BH52jFBgG5cALQhDW%0AsUxYjWlRtqkztMsLweEtg5RjMlwkt3SaCI1AjCSNVOqHEQ23b9I0UAtOA3P%2B%2BekpnChXGv/4/et3%0AH8xks%2BealZzCM5omxFJxLRi1naVids6jeddBtsPUU55nlLLn8YfjMgk4mMd6Xcv18HTYLYyb4XmJ%0AZVjfBx3Gg11QjGFQDpTtmjBsVlCVSKg/OWK5bLFc0NT4y2eXJ6Z9pZJWKDQApNAhcGDdPPADWAKZ%0AvBc9LNsuNBN1%2BsANN8QTEZvjIRAlSzTPu5hhxCmKYT3XYxkIBtE4BnEB089yazL5kcL11nwRDodY%0AgqPoeZ5t2a6Hz9o/x7YdE1%2BGpbfa7cXshGlzqjpQaO546fx0q72eN3bvH756MUukB0bdEBqhA7AQ%0Av3t4AH3TEz99kpebiezZM%2BlI444Di20jEwlH2t2u7bgs63GsJwgyjBKiwsMAxBAlEHk5Dl6If76g%0AGBIL9fpahlmwOAKrwI0Yh8C6kowoxetG1LGdKwvqjHGzG05kInK3uxG2kVDgbKVSCzgHRrJJ00EN%0A%2Bt928y7q%2B5d7kwJlHNwas5uy3NlbK5cujp8ez2L00q37q7futTjevjbN//BM5M6DbZaxIRKcTDf5%0AmWxgsUCwgPH%2BY/muwX/3R8AILs/rt%2B5vcyzbbIuvXwEuxyTTe8YasSgmQmu2lau5vXYikNjjpUJO%0Au72RLhDsYM1pKtgLbn6cJlIiegD1%2B9jjTcAEZSB/InRQg7F6pYYkBuv8zGNL9x/pfvEb2pUJ4fHf%0ArB85aMSC7tG7jVqNfuEsd%2Bt%2Bpy%2B5%2Bq3nSo99Zve77sr92ceKtkOXa8qZ88FUrPHH/3FlqA/Rmv7w%0AY1tPvxHeta3x95%2BdjEao8RnlT/52jMfQGdaCFTHwAR%2BO9hqiB3SKmuCdDx3CQQYACn9QhgB2Iuts%0ARpLIV1Mrum462aWu4yA7MLtG2w/c0y1Vub9%2BavDE6YFHnkjni9KXn46GNWpmkfnYp7cf/8houUo/%0A%2Bt7GbfuXH3mwWqowkaD3Wx/II2bnCtEfntFQSAQD3vGjJbz6XXetDvZ7Au8tFgL33r4Cu9ECwr1j%0AoeG4ZCPSvNkQ04CTETcQJ34CMOECjAOF0%2BbxwTzevicJFxsaDCVTIc9lBMFHWJm0/eR/m/29Rxd2%0AbrP%2B5h/6ECDgbogVkCOoOSKuYajBvvrWQeuhjw41W9R77mnfMNaC/Ug8VSyzkOcD99fikcoj7601%0AW7B9aj6n/N/nhjyPSccFjqWDsgAH6DXoEdYMywbKJ4BpHZqixEDoIIVdrzEcxzM0L4nTM/WVlS6g%0AzcXxwLVpVgt4Rw93P/qr9S/%2BUfFzH5%2BXJRcu1pfwPvm7s898PptJev/5TxOHDujfeyGQLwaf/JaI%0AMXziI8DoyDDebE565nlJkanvPzm/uCJcGl8r4Wi23lAH%2BhQcjwS4iALLXxcMJ//5cg41FEwX0ZqU%0ArQwJFyiKoGlSGm0ITVOVrldtWMPDkVhcQywQBeaRxwYffTzx1WcC16d5xLSHH%2Bgkwi3MZTLijWbc%0AJ78ZuPHBrV95OvXL79Qffk994tkrjxy3Gi3q3lu7sUgToRGZ8X9/s992qMF%2B%2B6vfjtWavu0KnB/s%0AAY/74mKl7RqOZ1ob5oHUgTgN2eBgRDYGnofSGj2UTKV8bbPQUG2l7SxU9KmpeqnYdT36l96x8p0v%0AZP/l5fjjn935wL8fPXGaQ2pAIEOVemGc%2BdATw3/55e2Lhb7jby9U6twHf2/r8Y%2BMffBjw9enOcjw%0Aa8crjkOLnPPa5eT4LN9o0l/7bt9aVqdg1rCvWt2dWnSmS%2BZ00disaagV4RiyYVTrQvc8D8pHjblZ%0AaJpmASjnqnZ2oVPIGYjC5y6pwynvO5%2Bfvufw4rvvLd532P7q96TdOxxEhLEtbiaFh9IBpfbEb9VK%0ANf7KVGR8Lnr%2BenwhL2Jk9x9pbhvWhzPOUH/z0/8z9R8%2BOQxoHYuYkHfbSDOsGTCfmSVrtuF1Tci8%0AYdUIFT6vEBDwTQCqbzqEUsEUXPnBi5uF9k8jDeKDtMfwiERTC5HDvzJy/or4Xx6t/c7Drb99KvjE%0A/xhstZm/%2Bnv55Mt8X9L3tv5U%2B4VXpdOv8fGIrxhFtmcW2H8%2BEZjJic02e/q8fOzO2okfj548PbIl%0A08nlxad/EFjKe4mo7qcdhraQe4AF/Vy00WC6BHWsY49eCoTK18x8tnctshys0OWRqJHQgOT9uSxW%0Aw5/8G%2BROPBSODMtTvvJPu2MRcSAdHUy4O48JPDOay0U8u/Oumzuc0bapyIVziRdb3eVqs%2B1IlTrc%0ABlU60KZQabif/3rQAxTwEQEszU%2Be3tq7fHD1ZoOEBOWhgbXCt489iE0D%2BPXt2UN9%2B1zvah8wwF45%0AhsKHERD114oiPM5Lx9Vjt%2B89uG8kLNOqFmIZh6VdvQYWj7dbFdA0ohLUyxSjpq38nCMbVDDmWYLl%0AutLQ/rm5%2BcUOe35itelFX7sUWIMrwZ2jTbwLL8IQMKVqwIdHpMHrgIvAX0HNhHzjYDGg0kj8Qwmz%0AGXusCU05PJ7l2xGAEM97WwajH7j/pjt2DwFQWHrbDyic1y2v2rrOAFVRYJYsnnObc7NSKmMvzwvh%0AtMN3LFBGjY420KdPXNoWy2wV9XfcO8xFo29MZE9Mu9M52fMavlIAT/05JJ/1BhNANQ7MhPRHUJ4f%0A8sDTEVtBvkFts2EeKOvgjD6o8z%2BiwP36gwc/9ZFjt%2B3sA1ZrV1ZtyrE7FbNR9fGni6xpCoLG6E2G%0AVvhgxMov8cGUXS60JifMXBFm5ld/llMrlupguFiuNj17YCT18WPJP/tl6dbtvGnbMA%2BboVHf2JsK%0AREgIf4PEEGzDEYnOf5oKgk371gCpYdaMG%2BITb9uboaym3im7RhM1k6k3bL0LyIBX2bUax7PthctW%0AudKav2Y36ma1YWSn2ksFdetYp1Fv5MuGoDCc2FlddXDNasloNrvVmu1y/cnQo0dvv3n3Gszyhca0%0A/kT0QAIHNAJyIjnbjx6gOsGUYkBvidNANjbDOexaAKHYvr6kXl1wzLbeLOqtollfdlplyjM7taLZ%0AXUEat%2BsVNqBxDCNGB9iAZNomE9CEgKhnZwzLFFTR7dShb1cRHTVg12uMLHqoEl3dExiXl3//IZWy%0AYYPE73vz7XeQEfGNqEdoW19oaBrkAYwbR8kskAZEYcGjOYESJES9atVQNM3RSzSnMCzPCrIYSnhm%0AS9CioDH8XGeaVqNhU7ZeWoA6qaBqmF04OJdJC0GVD8hiIuJZXUURBZn1RFEMB3meYwRZkBVakDOZ%0AKMVbmF7HBzMbUhM3IzQkMQpmoxqvtHv6J0L7XuhxJkIHgCLLzRanP/vl57vLOqopmuG5QAxOQwcS%0ArsfZtOBJkg4bd1iLVx1B80IRWgsbkkzHEn7JENXYSAQW5YU1D8YGwmYIAI/zMJLMIKNFeC1pshFg%0AKj/qIcEyPv4iDdoEiQo2lRiFLzTwNKh56B%2BRBWXixTPjvast2zBxOyorP8UIIUN%2BP8LdhTl4iW02%0AjUbJbPqQFRfZdMjyVEoKm4xsmozDa44r2Z7kCKqhU2wyw8X7bZS7sT4hMeQkM3YoSfGqF0xx0UGO%0A0xxWyy4vfPwLk5Qm%2BUGaYmTJB8ykQdMIx4T3WA956BGaBo4Ie7/zbXuor5wiVxvdpoTA7GsaRubd%0A0FxU%2BwYDh/rUUE6/tiRvuwGkuT3DmItdgHfMp4WiT%2B90u6bbaXuO17VtE8ViOCRmMqGBdGxokBNF%0AllfZdlfgBEnRYCVyKAhCrV7rfOXv/u6V3FHqZp716TPO3JRcoGkIBtMFB0kc0SdrNg%2BoNz50RDUI%0AFOBSjEivJuUzw9WWtzjb/uYCVEWpUefHV5laHlyLQNPAFhaYIteDNpDN/LoQJABFm5RbWVqZzC2H%0AL/J6PJzc3S8kgDA1SlScbqBrci5LW21DbdufcMOrUauQCfy7uyNS2z63YR1%2B1iPQFMom5rGWEdcQ%0AKRkQYUNI4zjGYtgMU/nU6KnOvohTOMYXSlylzNarTKnEGCikTZdn4TcOjbCHVElblIcshWrb8uwu%0ARVfhyp4HYxTb%2Bkq7wDSa0bE4JfFW0/LeWFAQJUSBF1VXDJuDW/7Qm/7duFpuugnKtcAIvdkgFZYB%0AEKGxeDD9%2BnUcZu8fTR5996H5awtPnppiTGf3WOrrZ9bXrKKpYWfrXWJ75cjsydXsPOr/6LuPafcc%0AUw8d4m4YZfpUqj9EJQNeVHHDiqmJZkCyZEGX%2BLYk1Hi2hQqCY8MsHaVoyfUicFrTNZabVr7hLdcl%0AlkeNIXICMqogyuDHvACf1bsvVbmSqwayP1rM%2BvKhxSk6GVFEni%2BVGvFUuLRQ9s0D1o01m/eurVcg%0AhveGqEVSFV5OU11eVrm27tBsY3JSvbOfCYhcNKTrBi%2BCEtUYKsA7lIQyGGwjIhYwsp9J4f9Iyqim%0AaPitDTZKAFnCgj3ttiyrY7EGcgDGIQCalC/OiHaDkpLHui/f3ik%2BRX%2BIR5B9syFJ%2Byskb67RQOB1%0AqpcUjChsnnjopt7VLYvdx0we3sZfrwwXHE31dGppQb76w8iIbJ%2B7vHC2wUaSjMzSwEqtOogLyAHS%0AxuKZLk3JrgfvthxPd%2B2m6SzZlisw26JqOKKoyYQUCNs%2BrecymsLNr/ZrpVA47Cqy5dhJug1ScHNh%0AS%2BTx6aR8zSc5SHIBTiK874cPb8MSVk9oaEoSkZsXa0GqlYrX4i0u5bSuF%2BoXyq05J71tLBkWo4P9%0AWigQ1g211aU7utPsdmvtQrG%2BXEGK7jAtk287Tss0m3q9YU/PN65eWn3%2B%2BQszr1%2BhKwWvXaetljO3%0ASCtiCyyTSwnB4LIjdVwacbwnBugORDZwSyjLL714cV1o/AEiIYtOr437C4Sk8Yz3qnXDYltCBuE5%0A2hWqZclwF3JeocmqIdSiTqqPkgSmWuuUG8V2t2xbTSBwSUKdofDisgMF2yXKMwQOUDMpCuGQasuC%0A47GnpvNfP3G%2BMpNbncqVis2Ggbzkmo7ltDtFR7IoumttMOpY1ALKI9wSjGRdaBJHMBp8fgLlUZ7N%0AUy92diqSXKxUHSraCstnQ17JbVq8x0Y0rljwqmVwczrLWZJoKypSYMf1GrqFONpmuYLrXevqL3a6%0A4zSV5ZwsZ5/sdmfDWonnC/HEM9naiVOTrwrs67JwNRmYbTfysniKG0LhJSq%2BcL2GkhY4lBB360JH%0Adx4mq1tYpesx2PgJ7h5rIhUmVGWHEpFBRQ4B2/AH0xe2y/%2BkV7578bLXqKudLup9WuAchuky9HS7%0APWHokzJzsVa/bhqvu/q4KhQ4ZlLX3d0Za3t6%2B64%2BW2AWdD1frBQ59jxtFwX2IuWct4zZgURp34EL%0AqQOmx1ha/2ahkaqB%2BBH4yEF/oej4bSnHNFCjX7qcM0z71FoYQYspbvymo685sat17pfEazvT4UE5%0AODawI2TYJc%2BqhfqmA/xUcbVealxt668a5gVdv1Sr2VHFDgXzAMfJ4C33HaE5gC422h8DLgpKfKPa%0A1VtmpdbcOprgADLAZicD79u/ly5VvNQuaWDorLOT59mh2afmJ68RMX79nl0jY2msZ1%2B/uhQJSyfe%0AyK5TvYSZ3Dw49MOy89RtZ651os8tBUbLWpxt6ToSupEa3rJ3cIQBTlKkl66dXm6JndKKO1scDKqH%0AEiP1psl2TEb0QiHx8iuvpgaSI3E5GJWSUdS40p5tIXeUDtx7oC8exQpSaSVvydK%2BVOKugcAXo%2B8z%0AQtLjfeduoS/8wVNnNtsGkDMBTKT5BCSq8VLpnG8xBZ927507f3ny5CtTDx8/dCC60DYSrpsE8EM0%0ArtdXytW8Isfy2XNDKWcwY7UysrN3EMyhwguTMzOJUIgX%2BlGAeIwoK0q3ikq7Ew6g8gPJSImyhmUB%0AQ1/oWO3dR3Yk44g/SS0U%2BWu%2BXi%2B%2B8cyJc5/6xtnLExuJGbZBFt4hG4FN68vMM88//dqpccKok5WA%0AXtu7a%2BTX3nfXnYd2pNMxAUhNAiHtdbpVJLKlpUvpxA5BUHy6HF7ruJ1OBahaCcR9dhoDxD/abdfL%0AgqTBQ3CQASkhiK7TQZWP8cxll69OLCzlK5VqdXI6f/bibOsnWS6I8eQjd8ARyfYKwP3f/18vrW9S%0AeeFr38NpWDrq3k%2Bc2KCo32IwWOoEB47CQJIAGniBw1IVig0XLDrI2TUiHctwa1wk6GqOlUUBwwGX%0AA5YAls0jZzO4haqiNfTFpYoFguzntc89eBOpAMCdYoV8Q%2BiTX3ra34mhmz86O/eLtqAPockiFiIy%0A2YXgZ0SsbkFiHEWKObJ/8OeN/N/gPGyD7MUg64jrjCr2lCBU%2Bzzf2taTX6iGsAaekdCQBCP50QO7%0AEJC9j4g8nBTV2OO3j2FMZGRfOjMNphXXoY97gEyAx7HWC6xC1siwfoPv3qYbOAp2uoADx0HMKcm9%0AqDjIfhy8nmxtIZABjexugVkSdyI0Bnk72R%2BDyfdtQRIA9/EWoml2XxwI%2BVAruzA4HAMu3bYlmU4G%0AI2FldDSeTGrvuHl4cCASC6uZgbCiYB2Uv/ntN63M59GHKPMLleVCHZuQYrEAqIDFfP2VS7mBRHAw%0AE8XeI1HiVgr1k2dmVZG3LBcHs7kKnq9AlFJz1/Y06lcIissgWUf3x5OMBiIhGbQhOmuDNG48OIqE%0AMjG5gqy3b%2B9As9JAcqGxb%2BW/P/WX3/jjP4cKoWaMD9gaIBBbylA7kmVzQvaBPdu8NQ37jQBfMHRS%0A7KAcIpuQ9t29f3nSX/YDmLz6ml9PkFCFDqIsbiHUFhqKEcLsIxkTXg4/e31fwRqWgNfN9R%2B/f/mB%0Au3bgdjiir%2Bk7j4zxdhtbPhSOwcat5HAKgcs27Wt4pd5cuj5dyZf0VqeQLTXL1VYRTA1ScTcz1g9u%0AAnvMeJGvV9qCyEEabBvDNZZp4Uhuzq/7MfPZxaqM5RbXZ1twCqzG7MTyymK5WGouL5YQQvPLVUwd%0AhoSHQFY8EEk7s2OkWa4vzhURJbGFbDgdMgwLO9mw38PX9G//xtt8vnRNowBPZDPhz/LFzZsM4Qxk%0Af6CvlTc75EY8iugb5GxvQx/pYMYwJ%2Bi85SfqP2B83EUMF3rpbQYke/3IvhR/4xWE3ixfb1tlb4cm%0Azm7ettnbv/n/udnzLZs0e8uWeOxbHvXTV25%2BxeYtn/8P9PigXfS1TnQAAAAASUVORK5CYII%3D%0A";
AA.images["spam3"] = "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAAXNSR0IArs4c6QAAAARnQU1BAACx%0Ajwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB2CSURBVGhDzXp3VFtJnu4F2yRJiJwFAgkQQkgg%0Ak6MkokQUyESRczLJYMDknHMUIARIIshkDMY2xjbGbbdDt3u63cHu3umZ7enZOTP73vz5znl/vKLL%0A72J7Z2f3r3fePXXq1K1bt%2Bqrr776VUSEFBNrnPo/d2gaEIDh657WIPAf/f%2BY24cxMPzfKfGf40HA%0A5x8POlD368vVb2Sl4BUE/kuH/gV%2BeTGZ%2BaG728iH%2BUCH5gnCj3sT4StMD8IgBnUgBvwLXuFXGL%2Bc%0Aw0YTAMBnoAG49iAHGAt%2BmI5zA/52efCHeUFYwIflwVeYDARApigCiAb%2BCwIgAfg6FMWEDmQO2gf4%0AoEQYBl9BAHwCMXMpXiA9BA0CIAb%2BCzMBr6Dcc9DgZ/ANpIYO/on%2BD2lDHUoSSgksGPgoAhCAJUEc%0A0ME0EApKDUwJkgEH4yF64GBNYG3BKwgDFj5iGuUAfIZVh7kAZGgWMB4SBrKAOUKsECLwIXkgHvIN%0AWUBbGaJHqQFhQMGHlQcx4F%2BQCXSwLOjA6zloEALFw/JAL0EbEbYjrAOEC3NE4cJMYUMDoPB3%2BBWE%0A0QCKAAbQeNit0Q79D3s2zBMyAsKgeh8xDd5BdiAF8v/ZAysD%2BfpIHlAGkLZPMCsrK%2BNwGrq6OAN9%0AnKEB1tAQ%2BBgDfYyeHkZHW/3M6Whoa6traalraqrhgcOraeE18HgNHE4di1XHYTFYrIaGupqamqqa%0Amoqauqq6upqqquqlSyrAKStfUla%2BCHwlpYv/GVdQ4lCQ50wDVcHu8iFoK6Jx8hXf9ob0oZ4y8Xix%0AeCRxRZI71u3TUqnT20jurreqvYqtK9VurTbvrCd11Fo0V6r3N%2BoMNhtVl2GqSrDXruJKCrFXCzVL%0AC3XKinSK83EFeRoFuerAFeZrFORg8rKx%2BVla2emaOel6Oen6WULdwjSbNAHN39PcwVbXyACnqqoG%0AqwE7Cdpz3ssDWito7ADuCxeUY8Oc7ojD7km4PTdc7q3m/uUH8U8vBjYm3V4dNxzIo9amPU73Ur/5%0ArOLt8/In24EvDkJ%2BfJ7z57edn99O3Zg1Vkh0lsWaMjFGJtaUzmGls7ilWQ35HBY46SxmcRYjndMA%0An%2BRnDr8iwa9K9FckhhsL5Ge34n78rPH1UcPRWtbGlP8tCa%2BlKhCHPRuMAG7QlT9lGvZf2G218ZiZ%0A9pC%2BItP5Dt8bRVaSocAVEXeiz/v0dvmbx%2BXfP045ljJELRcnuwxmB4miXuvZUZP9Dc/9Nfej9cTd%0ARdbmhu7mJn5rXXdrXXNrQ2trQ2drQ397U2trE3fmNvBbm%2BogzfaG8c6m8fYmYXPTVLFmviY335Qx%0AP9tP/cs3w//7b/f/11/v/PpV5/P9EisLfdi5odkGijhjGkRBmoEPQXP9nWRDkcONHttz3P4Gl6l2%0Ax8OFoNObIU%2B3nF/skT/f0X%2BwjH26afpy13Z70W5HFvpwJ%2BP5Udabp6n3tmjTg5d6Oy/Oz%2BElEqxU%0ApimTGkplBlKpnkyuJ5Xil6S4Jam2TKYtXdJbWtJfWtJeWtJZXNBZEOvMz%2BjPT5MXRT670tjnt6%2B9%0AvFvz4nbJy8Pr3h62EBU08B9p%2BsOhy86G8Ope27o4%2B3A1%2B/Sg4WA55WDO7eSm6/enyW8ehr95nPvm%0AWdXXT5vffjH6x%2B%2BXvvui%2Bcm90BdHoW%2Bf57w5jduUENoaNIb61SbHMfNirXmx/swsZlqkPjOLFYkw%0AU1MqMzPqCxIQbygSqYlEqiKRyvSU8uQEMjaqMtCH6WghNN2wHe1hjfQEzw1zj9aLfD3toQGFJu/c%0AesARDvZCQDxGQ32ur3h9Kkc%2BEisb5q6OBS/1uYm7Heb7XRaGPCRDnstTobKJYPkkcP7iIebsoOPC%0AmI90MnBh1GO803awjTLaZT/eSx3rcxjusRvrtx/psR/tYYz1Oo310kd67cb7aaO99hP9DuP9jIkB%0AxuSA/fgAdXzASTTmvbea%2Bfq07%2BWjof214gfb1QcrzQRTA3QcgCI5t9OAdsj/WRSC0Cjkub6SnqqA%0AKqFlRZxeey5xroG%2BPx30YDH6njjy3kLi0VLa7TnB/kzELVHwvihgT8TdmQo8mAm9PRd25s9G7IlC%0AgNsX8fZEQbdmgg7nQ%2B8vRR/LBA/l8Y/kCY%2BWE46X4vZnrmxPhG6MBGyOsLenQnZEvFtiwcZkzMJA%0ApGI6eUtc6e/HVFJSgmMzHPs%2BGlxQ0wE%2BANAMJ5/OfsVoT7tionZ/ofpopeLkZsWznYoXt8pe7ZV%2B%0AeXDt9e1K4L6%2Be%2BObe/Vvjpq%2BPW754UHb25OOd4%2B73550/nTa/e6064fHHWfutPOHR23fP2j57rj5%0Azf3Gb%2B41vr5d88VB1av9yle3Kl7tlb3YLX6%2BU3i6nn1nMWFtjD/XEz/Tn7s01d0/KKUxvAAYKAEI%0AGliLc6ahQYEfQDqqgw8756Ytd%2BICNkddJYhJcXSn27Ld2IHeIe5ObGc629XR1/OyL8czgOPBY3sE%0AczyD/L1DAn1CQ/yiw/xjooJjo0PiYnix4YGxYQEgIIgNi44L5wt4V6K5cXxugoAXmxAZExcuSIqM%0AThMIsxPS0%2BPyk/g5yYJoulcrIWjeQbgTlqewtXMFYOCoh85qzkEDTcMmgMM41cE7o/Z2ZK7ssnev%0AnUMVxdpXQ1UTQUB9SDw/7YYCXEuJhjACp69takcy4wdqR3DwUQF4fqBWgKehgQ4ZQUBhwDFigvSL%0AU3QvXqCBMMj1Ms2ExzIMZZvQbUEaJoI4I4iLHcmW60fkB5PpdixLIhcxGEBoElLyVkiWjGhFB2BQ%0AYwehn4MG007wDnwImmLvldd4L7VyKzJW5OnTZkvy08ToIYjVQrfqi3WlkmTNcJb27sSFzfFLV4WY%0Al5tKb/aRWyLl2baLX%2B4ofbmjXJoGEnt6Xya82lL6lyOkuVQXgAM9pTxd/d1dpbd3kdd7yoZ6YL7g%0AbG5i/0B%2B4acHSr9/pBwRaEO04CkZDSEOi6ZJm9zcFbK1EwAD7Qaccr4HDVDC1QqoBxQJSGdH8%2BYW%0A3YorXbdzG6DSW6ytOGoqhhEcrV%2BfIKJWDQQBaeg4jJliROWyvcn9xUs/P0QyBaAp6JlXdN7dRb4/%0AVLYnWw3WYgHiPzxAXmxctCOBVgLUUl/vIH86Rf79FZIWYwxaIzHc4H9%2BgfzlOXJLjG8qs%2BTzXBH9%0AUWLQzdTG%2BymVNy3JjhA0GKoh3%2B9NHqgEAA3tNKppW3uvhsEnade2vIInffwHGPY8lQtGBYmYX06Q%0A5xvKmQIdJztjC1MLBCHr61g/lF76wyMkJQoPYF3hGvxwR%2BntHaU0vjZoEz8Xve8OlMBfdQWAe6AQ%0Au692lH5/rPTrZ8gTxQV1Vdp9mfIfT5G/vkD2JThzYzeGA0efNm0VdDOr9UHG9S1LEvgFgXYaKvu9%0A9QDv0E7DesCOSKF5Nw8/q2i748oZdfcdoNmFYdSMbSxMAHN/fYb87XPk52PkkUypOgdPJRMeLl36%0Aw0OksVgjKtDoRH4RJBiowdbkaSx0gTZhlKaog/T3F1UIxnYg41ebyooRtZdbyn97gfRUYX53cEE%2B%0AqP4/XiH3ZSBxggM1zIwp8hXulvWdVLffIv0mDzhrhwuf9/KAoOGaDPgQtJ2DT93gM2HlLQfPUTef%0AQYpNGB4LWtPe0c5ktE716Qryl8%2BQXx4hP91DanIwx4sXQR2%2B2VN%2BuKQkbr/E9TXW1aZ8sY18c0t5%0AT4Q9Xb74b58h//YECWcTEMT2i%2B0L17N1Jppxvz5FAMe91fiqHL2/f4k8VqgiSBzDIZQZOBeVf1DR%0A97i6fZ/4G9Og5wFBA2zQfz/3gAseOLJD0PZ0n8ruZ%2Bk1ByHRYn6CxN0lRvWSUXIENilSCwhXSYmq%0Aq2WyL7rw6yky0aB6IrvwR6DpKxhApLIyEK67N9P0pyOkvVT9WjrmepbGnTllQLaoDQcAvNlXvpps%0AEuJr/u4I%2BeOJEsncpiZX/%2B9fIC93VBDkijU5hOoroYRtUnMO069vQdBwsQOHv/egwTvohXBwgf0U%0ApHNwYuV3PCPw5QiuBUEqjfW5ykoGW2MXQQ8jmRNVVRwvXKDU5qsCgmtzsCeyi//6EMlPBB0R9Btg%0AJdzGGy/tTWsoKYGwN4J4BXvr/v0lAiSkhTN/d0%2B5oVAfqP9QoiYfAPX0airRBX3xu3uXEKVIWxuu%0AClFkHrjNrrjPL9mC8gCmApqOc6YBSggaRAHKIWiaI%2Btq90uL%2BHVErxNRaTQxCAe2wsqMsDqgeryo%0ANFKvLmpT/XILaSjEpkXjn99Evt5DlnovaWJtEcTDnWH89hDZnlAz0gN1AEOaDz9A%2B9fHCHCjdeqg%0AnkBO1kSaraWNsb6jvq7rrkj1l1PkT58phfszrCzDlcxFCGNdP/NudMku2ea9ptH1/EeahvJArQfN%0AkX219wti0iZi2IuothobRmlrAvvN0MRQPBhmERzDcI7uZXtTlUt2RvpUBsXUnqxPsQL8gSHDQVvL%0A2pVuyqQSVFTsfzNzTCMDCxeGmQuD4OtC8GSa%2B7laGeqCYcUHQVj6Oq6RgQSWm3kIy8iJ6mNN5ikT%0AZxHnDaPse/zSHWinUXnAZfxHmoYj%2B/%2BVB6eo90vztF3EqB9RbTcyiNHWNANq/s1sAf4ug8YAAlVS%0AsrcmePu7BBbGJjfmF7bkZfUWFoyXZUtbGuZvlIwVZU2kCyYz46sjIwuCuWGO7petL9uae19QApkA%0A5XggiK%2BxgT0YI8P9jQVcAzcnujU5XNlyFnHb0ss%2BjirbI/1mp4E80E2S95s1IArKAzCNyoPKYBX1%0AfkXM3ENMBxFMt5FhrM4Z0w5KSnQ1NWcqiVUUlylpb13v7zgUDR6KhvfH2vdH29fbrm901i2XZ0jL%0AM9eqc6T5QnlF/kJK%2BOKVYElU8FJ8yGJc8GJS8HJZZnNEQElklK%2BNizMlUFkJSMgXQbiXLgnsKKHK%0AJDHis6ub%2B0BQdYdKAxU7s9OwI8KVyhnTkGB0vIHDuB2dVdD7lXnubYQwgOB7AGg8zhivyfBxDe%2Br%0AvnFncujO%2BNheb%2Bfe6MDuWO9GV/V6V63sWqaipUJeXyityFy5ljqfzFsuz5SmRsqy4xWV5XN8/8kQ%0AL3FcyFI6fzbMV5oauxAdvJIu2CjPbo/h8pyDSCbR6qpRthSeMlmM%2BO7pvAftDuUBd5ugUX4vD5Rp%0AOOqcDS50Vl7v74gFtxFiP6Ldo6cvcKHR6nILN4b798d690YHN9ubtvo6NrtubPbcAKDX6rOXq7MU%0ArVVrdYWywnhFVYE0P2ExOUyekyzPiJnhuE16MqfCWEM%2BTjOR7LEgz5EgvzEeayEjdjaCs5qbuF2R%0AspCfWBgsoDuEIuQ5hHULm/8o%2BvodWypQ0Zk8YH%2BD7qM1IjpUQtA5vV%2BbFx4iNsOIXo%2BmVlxNAn%2Bl%0Aq36l88ZGb%2B3OQPt66w1Fe42ipWyru2a7r15eEL9clbLWWLCUFr6Yyl0Qhiwkh83yvBYjONMs55kA%0Arzl%2BaA/dttvXbSSUPcxy6WZSR3wuT0YHj7PdFuJCVwqS1q%2Bm3utpvJFZocFYRDj72IITfvVdit0Z%0AaDgiwv239/KAmgZKBwG4BwfS2TDYGf3fmhYfIfZTiH6vKSGvKydutiR2uaN2uSl3rfnq8vXs5euZ%0AiuZSRXPhak3qUmniQk7kclXaRlP%2BQoTvcnmutChu0t9l8Qp3PtRrxtdpyNG2g2EzwnHt47iMhLHa%0AnR0G/L2H/ZzHgzzmBAHynGjFtYw7vU23B1qcw2VIwCGm4Am/5ohCPZtPfyiP846IrsMh/2eg6ezk%0A/m8NSh8gzhLEYNDYLL89I3r%2BWoKkMlFWl7PWXLxanb3WULham7FWm77WlK2oL5BmRS4VCiTpwfNX%0A/CRXWFPh7uORXrNRrJkIn/no4IlQ3yE/5zEBezDIfcjftc%2BHORbGGvF3m4vjSdOjV8pStqqyjsVj%0AL5cnwtPkSPBvoGuPKb8tAuDgAiceHy1sAcGQaRALQQv7v9cvO0F8VhCjEU291Egf7%2BuxwUvXMlbb%0AK2%2B2VwJDsd3fAmje6AEiKZJdTxHnx0jyYpYKroiTQ2YTg6aFIZNJvElB4HyOYC4pdITnPcD1Go8L%0AHk8KGY7wGeV5jUayRmO54tTwpfRwRW3ebkflA8nMq1VxaNYWwrunWvw04sYxyjQgGxJ6zjSci8BF%0ALwj8Jg9OwuCP2hVPEM5NxGQCZ5DhYUio09ETcUMWaiqX62tW6muX66uXW2%2BstFbLGsoXqnJn8hNn%0A85JEGbFTiRGzuSmTeUlTRelT%2Bcmz2YlTmfHDiRGD8aEjSdzx7CujqVFjSRGjyVGTuQmi3ARZReZW%0Ad%2B3%2BSOej%2Bcldscw6fAsJP1a5%2BpTf%2BNiBAWYB7zsiXAGcaxqutaDeIdOmJCde46le1edIyCZiNmWo%0Al1br6DXm4LwQyN4ejd3oClHU8dduJK3UFa62NUtbGpcaauary2ZKc6aykkZiIwd57MEA3y4Pl1Y3%0Al6FY/kx58XhB5nB%2BxmRprqi6bLS8tEko7E3PmCoqklRVKbq7bk1MPFzZKMtqtqWEKjmvItEPLxY9%0AD218TKN7fjI1/Wh/GoCGlgWCtqR6RnZ/pVX9OcLbRixGqRhOOw4zbklevha2WsxeDHTcrEpeTXaS%0AcezEJvoiXb1pQ%2BMJY5NRQ6M%2BXb02vFY7RrMVi6/HaVXjtAoxmtkmZhW%2BviM5GZL6mqX2%2BuWerpW%2B%0A3vWR8Y0pya5Ifndp84Fi/%2BnOUUNoPNPKD3FVqKZ9btP2bVL35zT6GdNwNwyevJwfX0B5oHNtkI7M%0A8Isa%2BgFb/dIhYojjV5bj4D2opT2ufGH6guqCgeUSyUlqaC3H6Emx2nItXZmO7pKWzpy2zhxeewqv%0APaKJH8drTWvrTWrr92rp1mpqZ%2BG0EtQ1irW0mqwJ03z3ucyQ2fzomVzBXEzkQkT0asyVzfDoQ27c%0AiR9fQuebsuX8uT/Ubv5SOfXKxv5sRISb/HDicW6nocmDh2XQepDp3uFD3%2BJqns/xY8ZCuQNR/Jmk%0A%2BEVh5qKHl5RoKcXrrlzESJVVFlQ05tWxsxq4WYzmBA4/isV3AYKx%2BDKsZjYWL8Ti47BayVitYqxW%0AFUazXANbh8ENmJsMOlmNeFMHbCzGNPAzmjpyHaMtI%2BKBhcMRlfXIIyIiWuze86P34LsrXU9t7c9G%0ARHg4AaemAPfZmA2wwg1IwDQkG6QzIztx2j/Xv36yHp/Yx6T3MJ2Ggz3XRTPbM4sHIvFef/dWSbIi%0AKWg1ykMW4Cjxoc24U4aY1gMOpB6KZZs1oZ5EqLQ0K7EwKTI1rjAyaNDXb8Brt2DxfaAdtLQHNLVB%0AYACrNaGpO4vXX9YzBaDvEOl3Se4HzkEdbKF73AQu/8ij8andb6DhZg2k%2BaMNSAgaLmxAOmtHFnfi%0AZ9vKw72UjH435x4P916Or7i0aEcye7AwdXu6bvNq4Hqq%2B800z9V0z%2BUUT3myhzTBXRrnJov3lAm9%0AZEKP5WQvebKvXOi7IvSTJ/osRrtLYjwXE31kQj9JrM90qMcox3nax0nMZi6Huk1HsBsJFq1mlp0U%0ARg87aDKcX5YzyGx6SWOA6et70J9qGrUeoEKQaXMaO2XkWduIYrxhrMDLryhY0Mhh9fPY8rqU7UHh%0AegJzwJo8eNlj3NtrxNdr1J054swYYFDHaNQJpsOAG73HjTHs4jDl7DDqZN/PoDTak0ttrNIpltec%0AbcaCLs/E%2Bi7m8iVXhXOlKQslwrUb2TP5CRNU2hLNec2HI/bl3IxOGMppsm36kupwxiBcT6Fneecn%0AAXD6B3dNz0A7cPKnnw5PjnQ19WTG8IRJaXVpbsNhfhORAfJc3qK7w4p/wJo/e0WYIE1JkPq5LzjY%0ATVNtRq2shkmkWitiDsHsuhURvE6TrSesbTuIljkGRjwj4yB9wzyCRZ45ocTeqo/nNZ8ZLsnlK64L%0ARXz/aSZzjuE67%2BIt5kZuJgrL07pILb%2BjO7HQYRzOQ8/lAToi3FtANW1JZwdP/lIxMNvc3pucmZOe%0AGlFY5NwjYEzTaRIuZ4njs%2BrLksXFytMSpVGhEmvSqJlpm4lpB4HQbWPdZW/XbG9bTybXWFg0EC2b%0ASaQ6K6urRGK%2BlVUxxbaCapdDJgmMTcKMDZPIhDGuqyQ1uOcyvd%2BWInK4LGJ6zPnz1mPihKkjhKbX%0AdvQzeUCa4YLwo11T9JQO7jBZMtgs0Z8dmh%2B3dnYnpeWERQRVVrgX5XlmGhoteDIVAd6robzlCJ5c%0AELbEY0%2BTrLotiI3W5Hpb2xYardHerpZiU2FHKbWxuWpFKrIgXjEj8MikSKJFDCDb1IRKsgqh2DAN%0AjZxpVL4N%2Bao1KYFKKXSkV9gz2jw8h/xDZtgh9HQFoflrKtMfgoYmD65f3ssDzqfhKQFcbhHpLNbM%0An21aX1X2bl271ipMTs7NC8jM8yio9MopYVVEeIk8XNd8PFaD/WQRQSIatcWKVEu2qrKzLbGxKbS1%0AFhLNE83MYk1Mg42M6Mameni8gYGRizstNMY9KZVz2dHe2tbalGBmSSJTbchEHM6BQmY4O/lwvAQ8%0AVn5KojCnCKn%2B2bTjLd1bAMBAgtF93XPQUDEoaIKNk%2B/Q15jOd4T6p8Kyofrigv7G%2BJYSbm2toKSE%0A7cGieFgSq70uD/q5DLs4dZCssglm8WQSy9SUgtMMYFj7uNIoJsZOtlZsf3dvX6Yjk0KyIXuFuAVE%0AeodHe3ND3ElWFuoaGFOCMY1ibW5JYLrSosMD/ZkMnj%2Bnr6nCvUqO1PxRr%2B0nO68o2BHRvbzzwQWe%0AI8I5E7QelhZmU4vTFesnTsMvmNfW1q5nKZqy5NWJWz2liq6iqfrs8evFMz2N5VnB8QHufLYrhWBu%0AampKpdtaWllwQ9wcGfYEE2OmK92b5eUX5MUKcPdhucQkB2XkRWTE8oThIVFsFj/AryY3qS4rOTs8%0AKD6CI20onc8UFAmLWY27tp3P/QYeVgwOMegUAAYihnN94H%2B0qf6hPKyIpg%2B2u3//5dxXT0UvHk28%0AOR54fdD1YqPxM0XNg8XiW%2BOp%2BxNZir74qfqg1mpOeZFnaqKDMM7%2BaoZzaizjShS1PIZeGEEriHNO%0AT3TKy/KuzvcvucJsyPIYLefNXI%2BaLg%2BV3IiXNgjkjfHy5ti19rj90byTuWvPZQ2vDmdfv9p59nD0%0A4GZVV108ONOF8oBkf7Q/jTINj3JBOvCEB3u8fjDy7vOxH54Ov302%2BtOLyZ9fz/3LF6IvH7Xe3y16%0AftyiEAvk05Grs8CPlk1EL07wV2eTJlq9u6pdxzv8RX0hM/0hs/3BS%2BMC8SB3uNFrrp8rH%2BcrZhPW%0AxUl310tvLSTtzMWCM6eT3dLXD1rfPZ/85Rv5n97IvjsdXJnM4XPPGhw%2BcO4BbyG8lwe8WQP3xOBc%0AD0196dJFLudyU0WsZLhoU1J9qGg92u65t9l5uN54b7t9TZx2d73%2BZK/r8a3uJwe9pwc9j/Y6d5eu%0AHm81PdzteLTbebLXebrf9eR27%2BFa5dF6/fFW8/3N5kc77eCXzw6HDhW1BytNe/KW8e78srzIJAGL%0Ay6F7XCZra2FRAChoOLLAVey5PGAsXAd88g/6isGoamJVwZG9vi7WyECLYKxjaoQ3NcSZGmtaEnQs%0AzXWtLPRIFvpWIGCuC17JRD2qjTHV2siObEghG9jbGNvbmDjSLBxpRBqFQDTTMdDTBEfa/1lxnzAN%0A95k%2BuoWATqNQefyXef0/SwDn03Cl%2BNG2GNx6gnt5sE7QhxfDYBjumMA/4akScNDsQNmhZ1Doih%2Bm%0AQe/jQOsEc0MbFsoSdqcPS4drP5gMjn1wYXW%2BlwfLg3yjlxTQ/RG4PoN2Bx4pQSho3WCpIF%2B4/IFi%0Ag5WBMWjB0A7AkRnmgCJDO9yHATgjhQV9tFkDzlwghXDARLevQbXQC2rwItqHV9PgfAA9rIF3w2Ct%0A4L4biIG9HjIC6wzjoQMx6BU1mADeeULJ%2BjAMNws%2B3TWFE1a44oWlonuVcPYNv8JPEC56rwqtwIdt%0AAvUGuYC2FqKB6kI1A9OgVUIr/OFWP6z8%2BdwD1ACUjTKKXib88IbhJ7cN0UuG8M4h/IoG0Kxg8R9e%0A6AP1hC0GA5%2B8AtwQKIiHjKBp4FEWPGZ5r2mAG3VwpQh9GEBj/mEAJviHDs3nw6%2BflPVP8kRL/xAD%0AjPw/N3QZM9gC7fEAAAAASUVORK5CYII%3D%0A";
AA.images["temple"] = "iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACx%0Ajwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAtLSURBVGhD3ZtbbNtXGcC/OHEuztWx6%2BbatFnS%0Ai0hbSqdCp3UFlQKCl4K0hyEQm%2BBh4hUJxAPSNHgZCBDSXhAS6gMXMQQVD6Cx7oHugXZjMLpm9Dq3%0Aae6JYzex69wTzu%2B43z9/O24dO05X95Ms/y/n/53zne%2Bc737Kvra3bfXt4ZhsFD7Z7hdtzzXA/Vf2%0Ad8hw9K60N9dm/dd2mf248fFO7zOfb3R8udqV9dbXrL7%2B2g/S2vlCT0j0ynmpbg4J1/lAcuJDp/lc%0AdEJmZ%2BLrPo%2BNRaVtd5fFr0Bb7Q8co/394m8L2WexWymcNQ31EhuZSMNXXVcj4Ksx/1wDc4lZ%2Bz94%0AfVQ6e1ud9i%2B8fEYswW/947T8%2Bvs/kuMn99uXs%2BaD8JUR6d7bJsl4UgKtgbROGAiEMACAQSlxdM43%0A7b0dcv29sPQe6nYGq4PXATHA4etDkkwsyPjEtNNHTZVXwoNR6e5slkgsKUG/z95/vK9DZqaTMju/%0AKHeTi9LS0iDBYJ346n2W4KnRKenvN%2BPeGbT4dnVvs7jDtyJy6hsn5NSLv5TyQJX3pReePyXn/vKG%0AxKNx8ZslCfiD9XbgIJuZmpGysjLxVnrtZNQHmsRbVeUMsKKmVuLjY87sNgQapMK0jY7F5NbVYbkb%0AS8j4wLhcfrtfwuZ%2B2Qx4acEQeTsi0zOz0thUI35/rf3NG0IaGn2STC4YghqlvEzsxLeE6mRxYdmM%0Aq1aWl1elrq5KfNWVMjUZl%2BvXx813c/ab1ZUVmZhMSKW3XO6YyfKUeySRmJcuQ/yfzl5K57DOJDNb%0AUVUhS/NLdjbrG2os8mBrk9y%2BmVpScTNQOMF7u9zMNdwAan1e2R5qtNe%2Buko7y/z/80LYconZf/rz%0Ah%2BzSYwLt9/eWI8uQtvZbM9kAEw/0nTwu4Qv/cpYvK4i2N8OTMjqxtnVaQ/V2PAqsjme//ow8993f%0ApQj%2B/Y%2B/Kn8/84709bXZQSF8ntzbYj%2BiMeCeBO4hlCVDZywvJZSO6ZBnTCDc%2Bm//kMW5b0dqa8wk%0A5qShrtq5dkbmunC/51sFFYrc309A6vNnv7jfTjb9f/Zkn3z7Z6%2Bnc/jI0R555/wNuXx7Sn5j9nAp%0Ag9E%2BdkKe%2BlS3ZQorCg57lCg2unJJOVHKBEPD7p6QjA3fsasNYQpYglEDybkFZ6%2BUMqE6drYNcoct%0ABTNVDliC0XMHj%2B5NiXezbxE6pQ7se/Yuehi1pALQEuzf%2BYSjvBFGbolXyoQj%2BNDNgGoXDyacWjJq%0AqZQykTp2tAzLGikN7NiVsuo82MFw2N/SbK0e9CdqpdRBVSV0QDj0OUJLiUN8s97fvZKymkodsB0A%0AljbMdAjGQUBsq3WUj/e0kUl5rrZB3mvdKVMdPWk/nvFuKwDBi7WIJWYl9j2rzdHDlvXGMKchrt5m%0A4US1zyHyVX9IdpRXrEPJM95tFeFjYzNOn2q6OgTzAFsYc3EzoIS%2BFmzLSmQ23BD%2B06ZtReX2xw52%0ApalXbPS0PYyExt0C3LZrPsRD7K%2BaW7ISeiaZkLbhDyUwdMP%2BXp5OqQuFKuONQXSxAEMDwRWJJKwQ%0AVodkjcPGt8W37Dm8r6A%2BldhGT9oukdN3py2B34qOyfzqqoP7F/HYOsIhuliAOmLvAiqbLIc1TMMN%0AUpqIQiG29Kv%2B7eImVgn9TmzygTRAeD4QCjZKfV3KZ88FSGmYiOYhIGEJxqMAiGCwf7FMdGZyIXS/%0AD5WXO7cQm4vQfHC7205EpiWeWHMX74cHInFtkc4I4nXOAx8SHtGZyHdA7uW6VcTmMyaYxt5lL%2BMf%0ApDkPICL6QABA4035IKftKzMp9wvu5gPs/a2AP18aspEa4nHoY43LeVQiE2qBwxpyyXcQKoTy4a4K%0Aunz72kh7bAn0MPTgJip4EFBEHAFCMpHROxvBt%2Bk2WFiosExBt2nE9xDASNQs9ODrOwS7BRSsP/Ll%0Ak8XqMw0P3LzYtssxLbGwMonNZ3XkGiTC2IZwjWnJv7qJVmlqQJwl0H/2XC5cBb1HbXV41iS5G8lW%0ASXW2qNrQji3ttqrgdmbQvSDqsnzkVlv6Wq2vYnJWcUMXW1SBTAdgOax7GDeqta%2BvWDTeF4%2Bal5nW%0AVzE7RjZpnBzuasrHGh5YV6qniH4UaksXc8CbxcVqRWh9cHHA0qbq1qolckW6xrFICI%2BUOkAXMkm9%0AvzShpewuxKR8VCeGlYtJiX%2BAI%2BHY0gyYLCDZQmblYenhhzFRWFoAqkkznVZowWHCs8wKLzcbBHgY%0AxOTqQ%2BWQJtUcoaVRSxDQyM3%2BXEjzee92LvL5rtC2MO/ajQlpaW%2ByKBwO4w%2BTbYf9iHLiWhfPXym0%0An/t%2BV6hzUehAYB5qVuPSDodBqAF4hBZLm7RLsaEQ52IzY1ChxRYloaZgA/EKzIo7gL2ZDj/qb%2BGu%0Auock1NKEliplnRUNWn/Ug95M/6gkKhjQv1Qu3Pj3ZYvOxrQwPHiJ0/y4ZB2gg%2B3JHiaRhmEFrXZJ%0As6EpHMFphsso61IHrEVbdmG4i3sIQKuTLlUCNTRSTILdWQjSLVuVacg2ZhIMcDnNW8Jh0Pzp86bO%0AgwqdYgK%2BsDvVopmGYvaRiYtYNFqHjAMRzPfPXUztYW2Ioa2VM8Xex9l84WIG3bNNHNl/ajw048DS%0AdghWkc2M8MvXW6r1rRWpZes8m5WVb3SzkNVA8A5hpSkkh%2BDmvUdt4QdAPVO%2Buvhucv6B41Eri0Yb%0AzUgUQmDmN1iN%2BMJoIAW7pCkkheUErt88219Q5uFBA1Qri0jHVoRzsvXNckbzELIi8rEuEK/ZtmLM%0A7KOAg%2BWMy6uOv8NhlDFRS9KKrHUb13oMajxYznhKqCSsLnUirOFBycOe/V1WHSG0HoeyJWLsNmVq%0ACAfS8sNU4l29NGCNbVKMqp4ehaVZ6Bgs8%2B4R62ago4eRZKx7Zobi0scB8JLcoVpHLbGkeYlFggFy%0A7GDn40Cv5bCWKq%2Br06JoG11sE1D3Cr1LmWpsCVarJtU0IV6BlGYPY04eM4ljJBuxoO891Wv3ss7Q%0AaVNHreVMPGdi2Cfse8r6sMXVK0HiA%2B6qeQKDFJ%2BrBsDWVUFCREIr6xkoUpV955YlWmxOJpDtB1M0%0ArKzj1CJ2LVdii%2BL9MQ7lcPmBYP1Ln/nCEUkM3JbOroB1DXsMAS2hBvE3mdLb7qCEjJr63OEu6ezw%0AS6CpVto7msTnq5Qqr1cOn/iEjN8yZfvmnoHfuh2VkbFpez4hEKiTleUVGRydlgvvD0nHtgbpbG%2B2%0AZxKqqitk3LR783xYas1ELy6u2HcDQ1Hbv89wZywSl327W%2By5BwjkG4hJzqUmJdRcJ/7GGikzkohr%0AAKvv0JPdZuzVcvWaOQuxsCQHjNsbj87IG/8ZkDLOLf3ktz%2BXP/zwFcstuMtMYaUQo6b8lpgX9ZiA%0A5qFIz2Qes%2BEMAhab1m3SHkuH73l34PhBGbk2YPHgtn3wbup4jh4n4BpVAg4tJOMZxoMm%2BUhwq9XE%0AM/e9VT/Gdtb33P/xb5fkS8/ssTg5AmA5/PSxXvEumQRyZ1B8FR57ciTUtV08Zavm9MmS/I%2BBzcVl%0A%2BPINiY5GTJ4mKWMDEYlPxSQxOWnzNvzae9uEwiNOx3gN16ZNjKzScIrBc8KF9osLi/b5kNkCbJ85%0Ag39gMCY11aZGeyWlL2nDKZrw1REZH5ySScPpkcGIWVFlMjpi7AazmpgYcAP0xUma9j07TR/TMnhz%0AUjymfIoTL13mZMy8iXxwSuevZltaDr/4zU87WUM4iDOhB7VyCa7Mg1zIA57pgS33teKiD%2BU0jrn7%0ADJRes4JYGXhy2Z4Ro6KmDDy6P5l095kqPSfF6uQ0jD3kAcGZRGF9uY/E8d59/C7Xda5J4v2Djty5%0Aa8c20rf2l%2B34XmY//wdMww%2B6U8e4RwAAAABJRU5ErkJggg%3D%3D%0A";
