import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('pk.eyJ1Ijoicm9iemlsbCIsImEiOiJjbWViaDR2djYxMWduMmtweGVzYzB0ZzNxIn0.0JsOldbKfCY3w_aKMjLPnQ');

const App = () => {
  return (
    <View style={styles.page}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera
          zoomLevel={8}
          centerCoordinate={[-71.54, 43.56]} // Example center in NH
        />
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1},
  map: {flex: 1},
});

export default App;
