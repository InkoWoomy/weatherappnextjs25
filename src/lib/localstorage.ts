function saveToFavorites(city: string)
{
    let cityArr = getFromFavorites();
    if (!cityArr.includes(city))
    {
        cityArr.push(city);
    }

    localStorage.setItem('Favorited Cities', JSON.stringify(cityArr))
    console.log("",localStorage);
}

function getFromFavorites()
{
    let favoritesData = localStorage.getItem('Favorited Cities');

    if (favoritesData == null)
    {
        return [];
    }

    return JSON.parse(favoritesData);
}

function removeFromFavorites(city: string)
{
    let favoritesData = getFromFavorites();
    let cityIndex = favoritesData.indexOf(city);
    favoritesData.splice(cityIndex, 1);
    localStorage.setItem('Favorited Cities', JSON.stringify(favoritesData));
}


export { getFromFavorites , saveToFavorites, removeFromFavorites };

