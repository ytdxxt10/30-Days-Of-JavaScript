const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const courtries = await response.json();
    // console.log(courtries);
    for (const item of courtries) {
      console.log(item.name, item.capital, item.population);
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();
