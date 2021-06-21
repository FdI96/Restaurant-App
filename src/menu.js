const contentMenuComponent = () => {
  const contentMenu = document.createElement('div');
  contentMenu.setAttribute('class', 'text-center bg-dark');

  const title = document.createElement('h1');
  title.setAttribute('class', 'text-light');
  title.innerHTML = "Restaurant's Menu";

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const cardImageMenu = document.createElement('img');
  cardImageMenu.setAttribute('src', './images/menu.jpg');
  cardImageMenu.setAttribute('class', 'card-img-top');
  card.appendChild(cardImageMenu);
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body');

  const cardText = document.createElement('p');
  cardText.setAttribute('class', 'card-text');
  cardText.innerHTML = "Restaurant's menu for the clients and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ";

  cardBody.appendChild(cardText);
  card.appendChild(cardBody);

  contentMenu.appendChild(title);
  contentMenu.appendChild(card);

  return contentMenu;
};

export default contentMenuComponent;
