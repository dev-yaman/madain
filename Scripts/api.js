/**
 * Fetches data from the API.
 * @returns {Promise} A promise that resolves to the fetched data.
 */
function fetchData() {
    const rows = 10;
    const firstNameParam = '{firstName}';
    const lastNameParam = '{lastName}';
    const categoryParam = '%20[%22category1%22,%20%22category2%22,%22category3%22]';
  
    const url = `https://filltext.com/?rows=${rows}&fname=${firstNameParam}&Iname=${lastNameParam}&category=${categoryParam}`;
  
    try {
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            const modifiedData = data.map(item => ({
              firstName: item.fname,
              lastName: item.Iname,
              category: item.category
            }));
            return modifiedData; // I intercepted the data to modify the object
          } else {
            throw new Error('Invalid data format');
          }
        });
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  