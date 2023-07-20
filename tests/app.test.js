const request = require('supertest');
const app = require('../app'); 
const osmtogeojson = require('osmtogeojson');
const axios = require('axios');

// Mock osmtogeojson function
jest.mock('osmtogeojson', () => jest.fn());

// Mock axios get function
jest.mock('axios');

describe('GET /api/geojson', () => {
  it('should return GeoJSON data for a valid bounding box', async () => {
    // Mock the osmtogeojson function to return some GeoJSON data
    const mockGeoJSON = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [-73.9836, 40.7488],
          },
        },
      ],
    };
    osmtogeojson.mockReturnValue(mockGeoJSON);

    // Mock the axios.get function to return some data (we don't care about the actual response, just that the request was made)
    axios.get.mockResolvedValue({ data: '<some-osm-data>' });

    const bbox = '-0.126,51.499,-0.125,51.500';
    const response = await request(app).get(`/api/geojson?bbox=${bbox}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockGeoJSON);
  });

  it('should return 400 for missing bounding box', async () => {
    const response = await request(app).get('/api/geojson');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Bounding box (bbox) parameter is missing.' });
  });

  it('should return 500 if an error occurs during processing', async () => {
    // Mock the osmtogeojson function to throw an error
    osmtogeojson.mockImplementation(() => {
      throw new Error('Error occurred during processing.');
    });

    const bbox = '-0.126,51.499,-0.125,51.500';
    const response = await request(app).get(`/api/geojson?bbox=${bbox}`);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'An error occurred while processing the request.' });
  });
});
