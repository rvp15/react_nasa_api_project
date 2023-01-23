import GoogleMapReact from "google-map-react";
import React from "react";
import LocationMarker from "./LocationMarker";

const Map = ({ center, zoom, eventData }) => {
  const fireEvents = eventData.filter((item) => item.categories[0].id === 8);
  console.log(fireEvents);
  return (
    <div className="map">
       <h3 className="titlemap">Explore WildFire around the world </h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {fireEvents.map((item,i) => {
          return <LocationMarker
              lat={item.geometries[0].coordinates[1]}
              lng={item.geometries[0].coordinates[0]}
            />
        })}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
      lat: 42.3265,
      lng: -122.8756
  },
  zoom: 5
}

export default Map;
