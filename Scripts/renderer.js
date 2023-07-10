/**
 * Renders the fetched data as cards on the page.
 * @param {Array} data - The array of data to render.
 */
function renderData(data) {
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  data.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });

}

/**
 * Creates a card element.
 * @param {Object} data - The data for the card.
 * @returns {HTMLElement} The card element.
 */
function createCard(data) {
  const card = document.createElement('div');
  card.classList.add('card');

  const avatar = createAvatar(data);
  const name = createName(data);
  const category = createCategory(data);

  card.appendChild(avatar);
  card.appendChild(name);
  card.appendChild(category);

  return card;
}
/**
 * Creates the avatar element.
 * @param {Object} data - The data for the avatar.
 * @returns {HTMLElement} The avatar element.
 */
function createAvatar(data) {
  if (!data || typeof data !== 'object' || !data.firstName || !data.lastName) {
    throw new Error('Invalid data. Please provide an object with firstName and lastName properties.');
  }

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  
  const initials = getInitials(data.firstName, data.lastName);
  avatar.textContent = initials;

  return avatar;
}

/**
 * Gets the initials from the first and last name.
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @returns {string} The initials.
 */
function getInitials(firstName, lastName) {
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw new Error('Invalid arguments. Please provide valid strings for firstName and lastName.');
  }

  const firstInitial = firstName.charAt(0);
  const lastInitial = lastName.charAt(0);
  return `${firstInitial}${lastInitial}`;
}


/**
 * Creates the name element.
 * @param {Object} data - The data for the name.
 * @returns {HTMLElement} The name element.
 */
function createName(data) {
  const name = document.createElement('div');
  name.classList.add('name');
  name.textContent = `${data.firstName} ${data.lastName}`;

  return name;
}

/**
 * Creates the category element.
 * @param {Object} data - The data for the category.
 * @returns {HTMLElement} The category element.
 */
function createCategory(data) {
  const category = document.createElement('div');
  category.classList.add('category');
  category.textContent = data.category;

  return category;
}
