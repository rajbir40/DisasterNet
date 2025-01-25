const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Function to fetch news
const getNews = async (req, res) => {
  try {
    console.log(NEWS_API_KEY);
    const response = await axios.get('https://newsapi.org/v2/everything', {
        params: { q: 'disaster', apiKey: NEWS_API_KEY },
      });
    console.log("Fetching news...");
    const limitedArticles = response.data.articles.slice(0, 10); // Get only the first 10 articles
    res.status(200).json({articles: limitedArticles}); // Respond with API data
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response
  }
};


// Function to fetch weather
const fetchWeather = async (req, res) => {

  const city = req.params.city;

const options = {
  method: 'GET',
  url: `https://weather-api-by-any-city.p.rapidapi.com/weather/${city}`,
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST,
  }
};

console.log(process.env.RAPIDAPI_KEY);
try {
  // const response = await axios.request(options);
  console.log(response.data);
  res.status(200).json(response.data);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: error.message });
}
}


module.exports = {
  getNews,
  fetchWeather
};
