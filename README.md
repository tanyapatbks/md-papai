# Little Explorers · Mater Dei

Prototype of an interactive learning map for Mater Dei teachers and parents.

## Run locally

Serve this folder over HTTP so the map scripts and data can load:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173` and sign in with the demo account shown on the login screen.

## What is included

- A calm, map-first game UI: exploration tasks and saved objectives sit beside a contextual place card, with the color palette softened for a school community.
- A school-centered 3D map with extruded OpenStreetMap building footprints, a 3 km radius, selectable learning places, and an animated walking route.
- Place search and category filters, Thai learning prompts, activity ideas, saved destinations, and Google Maps walking directions.
- Responsive desktop and mobile layouts with keyboard focus states and reduced-motion support.
- A frontend-only mock login using the sample email and password provided for this prototype.

MapLibre GL JS renders the map. Map tiles and walking routes are fetched from public OpenStreetMap-based services, so an internet connection is required. Building footprints follow the map scale; building heights use mapped height attributes when available and a small illustrative fallback when the source has no height data. The Children's Discovery Museum is shown outside the 3 km ring (about 6.8 km from school).

The login in this static prototype is not an access-control boundary: the sample credentials are shipped to the browser. A deployed school-only site should connect to the school's identity provider or validate school accounts through a server before exposing student or family information. This prototype contains no student records.
