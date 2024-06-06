import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import { bases } from "@/constants";
import { useTheme, useMediaQuery } from "@mui/material";
import LocationBase from '../../assets/Contact/location-base.svg';
import LocationAgent from '../../assets/Contact/location-agent.svg';
import { MapComponentProps } from "@/types";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MapComponent = ({ geoData, onMarkerHover }: MapComponentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const baseIcon = new Icon({ iconUrl: LocationBase, iconSize: [45, 45] });
  const agentIcon = new Icon({ iconUrl: LocationAgent, iconSize: [25, 25] });

  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]} 
      zoom={8}
      style={{width: "100%", height: isMobile ? "300px" : "500px"}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {bases?.map((base, index) => {
        const isAgent = base.agent;
        const icon = isAgent ? agentIcon : baseIcon;

        return (
          <Marker
            key={index}
            position={[base.lat, base.lng]}
            icon={icon}
            eventHandlers={{
              mouseover: () => onMarkerHover(index),
              mouseout: () => onMarkerHover(null),
            }}
          >
            <Tooltip>
              { !base.agent &&
                <LazyLoadImage src={base.photo} alt={base.nom} style={{ width: "200px", height: "100%" }} />
              }
              <p style={{ fontWeight: "bold", margin: "5px 0" }}>{base.nom}</p>
              <p style={{ fontStyle: "italic", margin: "5px 0" }}>{base.adresse}</p>
              <p style={{ margin: "5px 0" }}>{base.tel}</p>
              <p style={{ margin: "5px 0" }}>{base.email}</p>
            </Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapComponent;
