import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Constants from 'expo-constants';

MapboxGL.setAccessToken(Constants.expoConfig?.extra?.mapboxAccessToken ?? '');

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          zoomLevel={7}
          centerCoordinate={[-71.5724, 43.1939]}
        />
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
