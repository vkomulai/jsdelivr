/*! Qoopido.js library 3.7.1, 2015-07-25 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(t){window.qoopido.register("support/css/transform/3d",t,["../../../support","../transform"])}(function(t,s,r,o,e,n,p){"use strict";var a=t.support;return a.addTest("/css/transform/3d",function(s){t["support/css/transform"]().then(function(){var r=a.pool?a.pool.obtain("div"):n.createElement("div"),o=t.support.getCssProperty("transform");try{r.style[o]="translate3d(0,0,0)"}catch(e){}/translate3d/.test(r.style[o])?s.resolve():s.reject(),r.dispose&&r.dispose()},function(){s.reject()})})});