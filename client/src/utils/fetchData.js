export const exerciseOptions = {
  method: 'GET',
  
  
  headers: {
    'X-RapidAPI-Key': '115458bef0msh1fb38b6be6be309p16e3d0jsn12ad5eff646f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '115458bef0msh1fb38b6be6be309p16e3d0jsn12ad5eff646f',
  },
};
export const fetchData = async (url , options) =>
{
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    if (!data) {
      throw new Error('No data received');
    }
    return data;
  } catch (error) {
    console.error(error);
    return null; // or some default value
  }

}