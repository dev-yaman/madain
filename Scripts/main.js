// Global variables
let data = []; // Stores the fetched data

/**
 * Initializes the application.
 */
function initializeApp() {
  fetchData()
    .then(fetchedData => {
      data = fetchedData;
      renderData(data);
      initializeFilter(data);
      initializeNameSearch();
      sort()
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function sort(){
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', () => {
      const selectedSortOption = sortSelect.value;
      sortData(selectedSortOption);
    });
}

function sortData(sortOption) {
    switch (sortOption) {
      case 'firstName':
        data.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'lastName':
        data.sort((a, b) => a.lastName.localeCompare(b.lastName));
        break;
      case 'category':
        data.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        // Default sorting option or error handling
        break;
    }
  
    renderData(data);
  }
  

// Initialize the application
initializeApp();
