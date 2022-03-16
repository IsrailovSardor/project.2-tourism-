import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapG = () => {
    const defaultProps = {
        center: {
          lat: 42.87479688060495,
          lng: 74.59756959518471
        },
        zoom: 18
      };

    return (
        <div style={{ height: '60vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        
      >
        <AnyReactComponent
          lat={42.87508107315448}
          lng={74.59795027136784}
          text={<LocationOnIcon  sx={{ color: red[500], fontSize: 30, marginRight: 2 }}/>}
        />
      </GoogleMapReact>
    </div>
    );
};

export default MapG;