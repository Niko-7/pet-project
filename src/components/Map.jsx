import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  marginTop: "50px",
};

const center = {
  lat: 37.999772114720336,
  lng: 23.737627670986896,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBBfuu9P4_sU1Kxam8W_fW8_wW8c92M2e4",
  });

  // const [setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // console.log(map);
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(19);
    // setMap(map);
  }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        // zoom={14}
        onLoad={onLoad}
        // onUnmount={onUnmount}
      ></GoogleMap>
    )
  );
};

export default Map;
