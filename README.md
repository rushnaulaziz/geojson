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
