const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
  .then((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    // console.log(courtries);
    for (const item of cats) {
      console.log(item.name);
    }
  } catch (err) {
    console.log(err);
  }
};

fetchData();

/**
 * Exercises: Level 3
Read the cats api and find the average weight of cat in metric unit.
Read the countries api and find out the 10 largest countries
Read the countries api and count total number of languages in the world used as officials.

 */
