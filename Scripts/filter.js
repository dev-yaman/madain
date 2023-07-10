/**
 * Initializes the filter functionality.
 * @param {Array} data - The data to filter.
 */
function initializeFilter(data) {
    const filter = document.getElementById('filter');
    filter.addEventListener('change', () => {
      const searchInput = document.getElementById('search-input');
      searchInput.value = '';
      const selectedCategories = getSelectedCategories();
      const filteredData = filterData(data, selectedCategories);
      renderData(filteredData);
    });
  }
  
  /**
     * Retrieves the selected categories from the filter.
     * @returns {Array} An array of selected categories.
     */
  function getSelectedCategories() {
      const checkboxes = document.querySelectorAll('#filter input[type="checkbox"]:checked');
      const selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value);
      return selectedCategories;
    }
    
    /**
     * Filters the data based on selected categories.
     * @param {Array} data - The data to filter.
     * @param {Array} categories - The selected categories.
     * @returns {Array} The filtered data.
     */
    function filterData(data, categories) {
      if (categories.length === 0) {
        return data;
      } else {
        return data.filter(item => categories.includes(item.category));
      }
    }
  
  /**
   * Initializes the name search functionality.
   */
  function initializeNameSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
      const searchText = searchInput.value.trim().toLowerCase();
      const filteredData = searchData(data, searchText);
      renderData(filteredData);
    });
  }
  
  /**
   * Filters the data based on selected categories.
   * @param {Array} data - The data to filter.
   * @param {Array} categories - The selected categories.
   * @returns {Array} The filtered data.
   */
  function filterData(data, categories) {
    if (categories.length === 0) {
      return data;
    } else {
      return data.filter(item => categories.includes(item.category));
    }
  }
  
  /**
   * Searches the data by name.
   * @param {Array} data - The data to search.
   * @param {string} searchText - The search text.
   * @returns {Array} The filtered data.
   */
  function searchData(data, searchText) {
    if (searchText === '') {
      return data;
    } else {
      return data.filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        return fullName.includes(searchText);
      });
    }
  }