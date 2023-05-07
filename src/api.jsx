import axios from 'axios';

export const fetchImages = async ({ searchText, page }) => {
  const options = {
    params: {
      key: '34577809-7101597b9962251251dc5571b',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      page,
      per_page: 12,
    },
  };

  const response = await axios.get('https://pixabay.com/api/', options);

  return response.data;
};
