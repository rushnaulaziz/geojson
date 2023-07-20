# GeoJSON API for Location Data

## Purpose of the Application

This project is a RESTful API that exposes a single route to retrieve GeoJSON features of a location based on a geolocation box (bounding box) input. The application makes a call to the OpenStreetMap API, gathers information in "osm" format, converts it to "GeoJSON" using the "osmtogeojson" library, and returns the converted dataset.

## What is a Bounding Box?

A bounding box is a rectangular region defined by its minimum and maximum latitude and longitude coordinates. It represents the geographic extent of an area and is commonly used to define a specific region on a map. In the context of this application, the bounding box is used to specify the geographical area for which the user wants to retrieve GeoJSON features.

## What are Geo Locations?

Geo locations, short for geographical locations, are specific points on the Earth's surface defined by their latitude and longitude coordinates. Each GeoJSON feature in the application represents a geographical entity such as a point, line, or polygon, along with associated properties or attributes.

## Installation
To set up the project, follow these steps:

1. Clone the repository from GitHub:
```bash
git clone https://github.com/rushnaulaziz/geojson.git
cd geojson
```
2. Install the required dependencies:
```bash
npm install
```
## Usage
To start the API server, use the following command:

```bash
npm start
```
The server will be running on http://localhost:3000.

## API Endpoint
The API exposes a single endpoint to retrieve GeoJSON features based on the provided geolocation box.

### GET /api/geojson
**Request**: To request GeoJSON features, send a GET request to the /api/geojson endpoint with the geolocation box as query parameters:

```bash
 curl -X GET "http://localhost:3000/api/geojson?bbox=67.0155,24.9436,67.0733,24.9868"

```

**Response**: The API will respond with the GeoJSON representation of the features found within the specified bounding box.

## Running Test:
The application is unit-tested using Jest and Supertest. To run the tests, use the following command:

```bash
npm test
```


The test suite will be executed, and the results will be displayed in the terminal. The tests cover various scenarios, including successful requests, missing parameters, and error handling.

**Note:** Ensure that the Express server is not running (npm start) while running the tests, as Jest and Supertest handle starting and stopping the server during the test execution.

## Dependencies
The project relies on the following major dependencies:

- Express.js: A minimal and flexible Node.js web application framework.
- Axios: A popular HTTP client to make requests to external APIs.
- osmtogeojson: A library to convert OpenStreetMap XML data to GeoJSON format.
 

## Contributing
We welcome contributions to improve the project! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them with clear commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code is well-tested and follows the project's coding standards.


Thank you for taking the time to explore this project. If you have any questions or need further information, feel free to reach out or refer to the documentation within the codebase. Happy coding!
