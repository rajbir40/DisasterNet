## Getting Started

3. **Set Up Environment Variables: Create a .env file in the root directory and configure the following:**:
   ```bash
   PORT=5000
   DATABASE_URL=
   NEWS_API_KEY=your_news_api_key
   RAPIDAPI_KEY=
   RAPIDAPI_HOST=


---
USE this api from Rapid-api:

![Screenshot 2025-01-25 161335](https://github.com/user-attachments/assets/341e01ed-630f-49eb-96d7-e2fa75873672)


<h2>Weather API</h2>
<h3>Endpoints</h3>
<ol>
<li>
<p><strong>Current Weather</strong><br>
<code inline="">GET /api/weather/:city</code></p>
</li>
</ol>
<h3>Request Parameters</h3>

Parameter | Type | Required | Description
-- | -- | -- | --
city | String | Yes | Name of the city or coordinates (e.g., London or lat,lon).

<hr>
<h2>Rate Limits</h2>
<ul>
<li><strong>Free Tier</strong>: 5 requests per day.</li>
</ul>
<p>Exceeding the rate limit will result in a <code inline="">429 Too Many Requests</code> error.</p>
<hr>


### Sample Request
```http
GET /weather/current?location=London&units=metric
Authorization: Bearer YOUR_API_KEY
```

### Sample Response
```json
"location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.5171,
        "lon": -0.1062,
        "tz_id": "Europe/London",
        "localtime_epoch": 1737800984,
        "localtime": "2025-01-25 10:29"
    },
    "current": {
        "last_updated_epoch": 1737800100,
        "last_updated": "2025-01-25 10:15",
        "temp_c": 5.1,
        "temp_f": 41.2,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 7.4,
        "wind_kph": 11.9,
        "wind_degree": 304,
        "wind_dir": "NW",
        "pressure_mb": 1006,
        "pressure_in": 29.71,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 75,
        "cloud": 0,
        "feelslike_c": 2.4,
        "feelslike_f": 36.3,
        "windchill_c": 1.9,
        "windchill_f": 35.4,
        "heatindex_c": 4.7,
        "heatindex_f": 40.4,
        "dewpoint_c": -0.7,
        "dewpoint_f": 30.7,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 0.2,
        "gust_mph": 10.2,
        "gust_kph": 16.4
    }
```

---