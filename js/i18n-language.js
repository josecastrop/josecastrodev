!function(){"use strict";const e=document.createElement("style");e.innerHTML=".unselect-language{display: none;}",document.getElementsByTagName("head")[0].appendChild(e);const a=e=>{document.querySelectorAll("[data-lang]").forEach((e=>{e.classList.contains("unselect-language")||e.classList.add("unselect-language")}));document.querySelectorAll(`[data-lang="${e}"]`).forEach((e=>{e.classList.contains("unselect-language")&&e.classList.remove("unselect-language")}));document.getElementById("change-language").value=e};document.getElementById("change-language").addEventListener("change",(e=>{(()=>{const e=document.getElementById("change-language"),n=e.options[e.selectedIndex].value;localStorage.setItem("lang",n),a(n)})()}));try{a((()=>{let e=(window.navigator.userLanguage||window.navigator.language).toLowerCase(),a=null;try{a=localStorage.getItem("lang")}catch(e){}return null!==a&&(e=a),0===document.querySelectorAll(`[data-lang="${e}"]`).length&&(e="en"),e})())}catch(e){}}();