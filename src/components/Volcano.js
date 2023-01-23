import GoogleMapReact from "google-map-react";
import React from "react";
import VolcanoMarker from "./VolcanoMarker";

const Map = ({ center, zoom, volcanoData }) => {
  const volcanoEvents = volcanoData.filter((item) => item.categories[0].id === 12);
  console.log(volcanoEvents);
  return (
    <div className="map">
         <h3 className="titlemap">Explore Volcano around the world </h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
       
        {volcanoEvents.map((item,i) => {
          return <VolcanoMarker
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
      lat: 14.175630,
      lng: 121.101214
  },
  zoom: 1
}

export default Map;
