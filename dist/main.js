(()=>{"use strict";const t=()=>{const t=document.createElement("div");t.setAttribute("class","text-center bg-dark");const e=document.createElement("h1");e.setAttribute("class","text-light"),e.innerHTML="Brand New Cool Restaurant";const n=document.createElement("img");n.setAttribute("src","./images/restaurant.jpg");const i=document.createElement("p");return i.setAttribute("class","text-light"),i.innerHTML="Welcome, this is my restaurant's interior ",t.appendChild(e),t.appendChild(n),t.appendChild(i),t},e=document.getElementById("content"),n=(()=>{const t=document.createElement("nav");t.setAttribute("class","navbar text-center bg-info");const e=document.createElement("button");e.innerHTML="Home",e.setAttribute("id","homeButton"),t.appendChild(e);const n=document.createElement("button");n.innerHTML="Menu",n.setAttribute("id","menuButton"),t.appendChild(n);const i=document.createElement("button");return i.innerHTML="Contact",i.setAttribute("id","contactButton"),t.appendChild(i),t})(),i=t();e.appendChild(n),e.appendChild(i),document.getElementById("menuButton").addEventListener("click",(()=>{const t=(()=>{const t=document.createElement("div");t.setAttribute("class","text-center bg-dark");const e=document.createElement("h1");e.setAttribute("class","text-light"),e.innerHTML="Restaurant's Menu";const n=document.createElement("div");n.setAttribute("class","card");const i=document.createElement("img");i.setAttribute("src","./images/menu.jpg"),i.setAttribute("class","card-img-top"),n.appendChild(i);const d=document.createElement("div");d.setAttribute("class","card-body");const a=document.createElement("p");return a.setAttribute("class","card-text"),a.innerHTML="Restaurant's menu for the clients and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",d.appendChild(a),n.appendChild(d),t.appendChild(e),t.appendChild(n),t})();e.removeChild(e.childNodes[1]),e.appendChild(t)})),document.getElementById("homeButton").addEventListener("click",(()=>{const n=t();e.removeChild(e.childNodes[1]),e.appendChild(n)})),document.getElementById("contactButton").addEventListener("click",(()=>{const t=(()=>{const t=document.createElement("div");t.setAttribute("class","text-center bg-dark"),t.setAttribute("style","height: 400px;");const e=document.createElement("form");e.setAttribute("class","text-light");let n=document.createElement("label");n.setAttribute("for","name"),n.innerHTML="Name";let i=document.createElement("input");return i.setAttribute("id","name"),i.setAttribute("type","text"),e.appendChild(n),e.appendChild(i),n=document.createElement("label"),n.setAttribute("for","message"),n.innerHTML="Message: ",i=document.createElement("input"),i.setAttribute("id","message"),i.setAttribute("type","text"),e.appendChild(n),e.appendChild(i),i=document.createElement("input"),i.setAttribute("type","submit"),i.setAttribute("value","Submit"),e.appendChild(i),t.appendChild(e),t})();e.removeChild(e.childNodes[1]),e.appendChild(t)}))})();