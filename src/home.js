const contentHomeComponent = () => {
  const contentHome = document.createElement('div');
  contentHome.setAttribute('class', 'text-center bg-dark');

  const title = document.createElement('h1');
  title.setAttribute('class', 'text-light');
  title.innerHTML = 'Brand New Cool Restaurant';

  const imageRestaurant = document.createElement('img');
  imageRestaurant.setAttribute('src', './images/restaurant.jpg');

  const pRestaurant = document.createElement('p');
  pRestaurant.setAttribute('class', 'text-light');
  pRestaurant.innerHTML = "Welcome, this is my restaurant's interior ";

  contentHome.appendChild(title);
  contentHome.appendChild(imageRestaurant);
  contentHome.appendChild(pRestaurant);

  return contentHome;
};

export default contentHomeComponent;
