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
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
export const fetchData = async (url , options) =>
{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}