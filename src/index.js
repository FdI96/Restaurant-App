import navBarComponent from './navBarElement';
import contentHomeComponent from './home';
import contentMenuComponent from './menu';
import contentContactComponent from './contact';

console.log();
const content = document.getElementById('content');
const nav = navBarComponent();
const body = contentHomeComponent();

content.appendChild(nav);
content.appendChild(body);

const bodyToMenu = document.getElementById('menuButton');
bodyToMenu.addEventListener('click', () => {
  const menu = contentMenuComponent();
  content.removeChild(content.childNodes[1]);
  content.appendChild(menu);
});

const bodyToHome = document.getElementById('homeButton');
bodyToHome.addEventListener('click', () => {
  const home = contentHomeComponent();
  content.removeChild(content.childNodes[1]);
  content.appendChild(home);
});

const bodyToContact = document.getElementById('contactButton');
bodyToContact.addEventListener('click', () => {
  const contact = contentContactComponent();
  content.removeChild(content.childNodes[1]);
  content.appendChild(contact);
});
