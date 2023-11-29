(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",n)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",n)}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var o={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-14",headers:{authorization:"d3402cae-2088-4283-905e-98c5f4732bd5","Content-Type":"application/json"}},c=document.getElementById("card-template").content.querySelector(".card");function a(e,t){t.disabled=!e.checkValidity()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u,l=document.querySelector(".profile__edit-button"),s=document.getElementById("edit-profile"),d=document.forms.edit,f=document.querySelector(".profile__name-text"),m=document.querySelector(".profile__description"),p=d.elements.username,h=d.elements.description,y=document.querySelector(".profile__add-button"),v=document.getElementById("add-card"),b=document.forms.add,_=document.querySelector(".cards__list"),S=document.getElementById("full-card"),E=S.querySelector(".popup__image"),g=S.querySelector(".popup__caption"),k=document.getElementById("confirm"),L=document.forms.confirm,q=L.querySelector(".popup__save-button"),C=document.getElementById("profile-avatar"),x=document.forms.avatar,A=document.querySelector(".profile__avatar_edit-button"),U=document.querySelector(".profile__avatar"),O={};function T(e,t){t.textContent="Сохранить",e&&(t.textContent="Сохраняем...",t.disabled=!0)}function w(e){_.prepend(function(e,t,n,a){var i=c.cloneNode(!0),u=i.querySelector(".card__title"),l=i.querySelector(".card__image"),s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),f=i.querySelector(".card__like-counter");return u.textContent=e.name,l.src=e.link,l.alt=e.name,f.textContent=e.likes.length,l.addEventListener("click",(function(){return t(e)})),e.likes.some((function(e){return e._id===a}))&&d.classList.add("card__like-button_active"),d.addEventListener("click",(function(){d.classList.contains("card__like-button_active")?function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:o.headers,body:JSON.stringify(e)}).then(r)}(e).then((function(e){d.classList.remove("card__like-button_active"),f.textContent=e.likes.length})).catch(console.error):function(e){return fetch("".concat(o.baseUrl,"/cards/likes/").concat(e._id),{method:"PUT",headers:o.headers,body:JSON.stringify(e)}).then(r)}(e).then((function(e){d.classList.add("card__like-button_active"),f.textContent=e.likes.length})).catch(console.error)})),e.owner._id!==a?s.remove():s.addEventListener("click",(function(t){t.preventDefault(),n((function(t){(function(e){return fetch("".concat(o.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:o.headers,body:JSON.stringify(e)}).then(r)})(e).then((function(){t(),i.remove()})).catch(console.error)}))})),i}(e,I,j,O._id))}function I(t){E.src=t.link,E.alt=t.name,g.textContent=t.name,e(S)}function j(n){e(k),setTimeout((function(){return q.focus()}),100),L.onsubmit=function(e){e.preventDefault(),n((function(){return t(k)}))}}b.addEventListener("submit",(function(e){var n;e.preventDefault(),T(!0,e.submitter),(n={name:e.target.elements.title.value,link:e.target.elements.link.value},fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify(n)}).then(r)).then((function(n){w(n),e.target.reset(),e.submitter.disabled=!0,t(v)})).catch((function(t){console.error(t),e.submitter.disabled=!1})).finally((function(){T(!1,e.submitter)}))})),d.addEventListener("submit",(function(e){var n;e.preventDefault(),T(!0,e.submitter),(n={name:e.target.elements.username.value,about:e.target.elements.description.value},fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify(n)}).then(r)).then((function(e){f.textContent=e.name,m.textContent=e.about,t(s)})).catch((function(t){console.error(t),e.submitter.disabled=!1})).finally((function(){T(!1,e.submitter)}))})),x.addEventListener("submit",(function(e){var n;e.preventDefault(),T(!0,e.submitter),(n={avatar:e.target.elements.imageUrl.value},fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify(n)}).then(r)).then((function(n){U.src=n.avatar,e.target.reset(),e.submitter.disabled=!0,t(C)})).catch((function(t){console.error(t),e.submitter.disabled=!1})).finally((function(){T(!1,e.submitter)}))})),l.addEventListener("click",(function(){p.value=f.textContent,h.value=m.textContent,e(s)})),A.addEventListener("click",(function(){return e(C)})),y.addEventListener("click",(function(){return e(v)})),Promise.all([fetch("".concat(o.baseUrl,"/users/me"),{method:"GET",headers:o.headers}).then(r),fetch("".concat(o.baseUrl,"/cards"),{method:"GET",headers:o.headers}).then(r)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];O=o,f.textContent=o.name,m.textContent=o.about,U.src=o.avatar,c.reverse().forEach((function(e){w(e)}))})).catch(console.error),document.querySelectorAll(".popup").forEach((function(e){!function(e){e.querySelector(".popup__close-button").addEventListener("click",(function(){return t(e)}))}(e),function(e){e.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&t(e)}))}(e)})),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inputErrorClass:"popup__input_error"},Array.from(document.querySelectorAll(u.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);a(e,r),n.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,n,t),a(e,r)}))}))}(e,u)}))})();