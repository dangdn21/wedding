import React, { useState, useEffect} from 'react'
import GoogleMapReact from "google-map-react";

const DEFAULT_CENTER = {
  lat: 10.762622,
  lng: 106.660172,
};

// const AnyReactComponent = () => (
//   <div
//     style={{
//       width: "70px",
//       height: "70px",
//       "& img": {
//         width: "70px",
//         height: "70px",
//       },
//     }}
//   >
//     <PosIcon name="map-marker" />
//   </div>
// );



export const Map = () => {

  const [latLng, setLatLng] = useState<any>();

  useEffect(() => {
    setLatLng(DEFAULT_CENTER);
  }, []);

  return (
    <div className="map-wrapper">
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      resetBoundsOnResize
      bootstrapURLKeys={{
        key: "AIzaSyCDU6AKAXtutXqOJMwvJD1rrDZZ4zrIfJc",
        libraries: "places",
      }}
      options={{
        zoomControl: false,
        fullscreenControl: false,
        gestureHandling: "greedy", // use one finger to move the map on mobile
      }}
      defaultCenter={DEFAULT_CENTER}
      center={latLng}
      defaultZoom={14}
    // onClick={handleMapClick}
    >
      {/* <AnyReactComponent lat={address_lat} lng={address_lng} /> */}
    </GoogleMapReact>
    </div>
  )
}

export default Map