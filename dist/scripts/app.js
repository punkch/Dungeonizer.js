!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var i in t)("object"==typeof exports?exports:e)[i]=t[i]}}(this,function(){return function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function r(){function e(){var e=a.canvas.clientWidth,n=a.canvas.clientHeight;a.canvas.width===e&&a.canvas.height===n||(a.canvas.width=e,a.canvas.height=n,o.resize(e,n),a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight))}function n(){requestAnimationFrame(n),e(),o.update()}i(this,r);var t=new THREE.WebGLRenderer({antialias:!0});t.setClearColor(1118481,1);var o=window.dungeonizer.visualize(t),a=t.getContext();t.setSize(600,400),document.body.appendChild(a.canvas),o.resize(600,400),n()};window.app=new o}])});