const navBarComponent = () => {
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar text-center bg-info");

  const buttonHome = document.createElement("button");
  buttonHome.innerHTML = "Home";
  buttonHome.setAttribute("id", "homeButton");
  nav.appendChild(buttonHome);

  const buttonMenu = document.createElement("button");
  buttonMenu.innerHTML = "Menu";
  buttonMenu.setAttribute("id", "menuButton");
  nav.appendChild(buttonMenu);

  const buttonContact = document.createElement("button");
  buttonContact.innerHTML = "Contact";
  buttonContact.setAttribute("id", "contactButton");
  nav.appendChild(buttonContact);

  // Add event listener section
  return nav;
};

export default navBarComponent;
