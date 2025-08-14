# WildNH Mobile App

This project is a bare-bones [React Native](https://reactnative.dev/) app that renders a [Mapbox](https://www.mapbox.com/) map. It provides a starting point similar to the onXmaps mobile experience.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Replace `YOUR_MAPBOX_ACCESS_TOKEN` in `App.js` with a valid Mapbox access token.
3. Run the Metro bundler:
   ```bash
   npm start
   ```
4. In a separate terminal, launch the app on Android or iOS:
   ```bash
   npm run android
   # or
   npm run ios
   ```

## Notes

* This repository is a minimal scaffold; additional native configuration is required for a production-ready mobile app.
* Ensure the Mapbox native SDK is installed for your target platform.
