const express = require('express');
const axios = require('axios');
const osmtogeojson = require('osmtogeojson');

const app = express();
const port = process.env.PORT || 3000;
const  OpenStreetMap = 'https://www.openstreetmap.org/api/0.6/map?bbox='

app.use(express.json());

// Route to get GeoJSON features of a location given with a geolocation box (bounding box) as input
app.get('/api/geojson', async (req, res) => {
  try {
    const { bbox } = req.query;
    if (!bbox) {
      return res.status(400).json({ error: 'Bounding box (bbox) parameter is missing.' });
    }

    // Make a request to OpenStreetMap API to get the data in "osm" format
    const osmData = await axios.get(`${OpenStreetMap}${bbox}`);

    // Convert the "osm" format data to GeoJSON using osmtogeojson
    const geojsonData = osmtogeojson(osmData.data);

    // Return the GeoJSON data
    res.json(geojsonData);
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data || 'An error occurred while processing the request.';
    res.status(status).json({ error: data });
    
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; 
