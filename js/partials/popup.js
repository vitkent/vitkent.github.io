"use strict";$(document).ready(function(){var u=$(".b-page-wrapper"),a=$(".b-popup"),p=$(".b-popup__content"),c=-1!==navigator.userAgent.toLowerCase().indexOf("windows");function n(){a.hasClass("open")&&(u.removeClass("no-scroll no-touch windows"),a.removeClass("open"),a.stop().fadeOut(300))}function o(){$(this).trigger("popup.open",[void 0]);var o,p,n,e,t,s=$(".b-popup[data-popup='"+$(this).attr("data-popup")+"']");0<s.length&&(c&&(o="Height",p=".b-page-wrapper",n=document,e=n.body,p=n.querySelector(p),t="client"+o,o="scroll"+o,/CSS/.test(n.compatMode)?p[t]<p[o]:e[t]<e[o])&&u.addClass("windows"),a.removeClass("open"),a.fadeOut(300),u.addClass("no-scroll no-touch"),s.addClass("open"),s.css("display","flex").hide().fadeIn(300),$("body").trigger("popupOpenVideo"))}$(".js-open-popup").on("popup.onClose",function(o){n()}),$(document).on("click",".js-open-popup",function(){$(this).trigger("popup.onOpen")}),$(".js-open-popup").on("popup.onOpen",function(){o.call(this)}),window.openPopUp=o,$(document).on("click",".js-close-popup",function(){n(),$(".js-menu-in-popup-back").length&&$(".js-menu-in-popup-back").trigger("click")}),$(document).on("keydown",function(o){27===o.keyCode&&n()}),$(document).mouseup(function(o){!a.hasClass("open")||p.is(o.target)||0!==p.has(o.target).length||n()})});