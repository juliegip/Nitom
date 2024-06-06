import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Link,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import LocationAgent from "../../assets/Contact/location-agent.svg";
import { BaseListProps, BaseProps } from "../../types";
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface BasesGrouped {
  bases: BaseProps[];
  agents: BaseProps[];
}

const BaseList: React.FC<BaseListProps> = ({
  bases,
  onMarkerHover,
  highlightedBase,
}) => {
  const basesGrouped = bases.reduce<BasesGrouped>(
    (acc, base, index) => {
      base.agent
        ? acc.agents.push({ ...base, index })
        : acc.bases.push({ ...base, index });
      return acc;
    },
    { bases: [], agents: [] }
  );

  const isMobile = useMediaQuery("(max-width:600px)");

  const renderBaseItem = (base: BaseProps, isAgent: boolean) => (
    <ListItem
      key={base.index}
      onMouseEnter={() => onMarkerHover(base.index ?? null)}
      onMouseLeave={() => onMarkerHover(null)}
      sx={{
        backgroundColor: highlightedBase === base.index ? "#eee" : "#fff",
        padding: isMobile ? "8px 16px" : "16px 16px",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <LazyLoadImage
            src={isAgent ? LocationAgent : base.photo || LocationAgent}
            style={{ width: isAgent ? "20px" : "45px", height: isAgent ? "20px" : "45px" }}
            alt={isAgent ? "Agent location" : "Base location"}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={base.nom}
        secondary={base.adresse}
        primaryTypographyProps={{
          style: { fontSize: isAgent ? "0.9rem" : "1.1rem" },
        }}
        secondaryTypographyProps={{
          style: { fontSize: isAgent ? "0.8rem" : "1rem" },
        }}
      />
      {!isAgent && !isMobile && (
        <Box sx={{ mx: 5 }}>
          <Link href={`tel:${base.tel}`} underline="none">
            <Typography variant="caption" component="div">
              <PhoneIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
              {base.tel}
            </Typography>
          </Link>
          <Link href={`mailto:${base.email}`} underline="none">
            <Typography variant="caption" component="div">
              <EmailIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
              {base.email}
            </Typography>
          </Link>
        </Box>
      )}
      <Link href={base.GMapsURL} target="_blank" rel="noopener noreferrer">
        {isMobile ? (
          <IconButton>
            <DirectionsIcon />
          </IconButton>
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<DirectionsIcon />}
          >
            Itinéraire
          </Button>
        )}
      </Link>
      {!isAgent && isMobile && (
        <Box sx={{ mt: 1 }}>
          <Link href={`tel:${base.tel}`} underline="none">
            <Typography variant="caption" component="div">
              <PhoneIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
              {base.tel}
            </Typography>
          </Link>
          <Link href={`mailto:${base.email}`} underline="none">
            <Typography variant="caption" component="div">
              <EmailIcon style={{ fontSize: "1rem", marginRight: "4px" }} />
              {base.email}
            </Typography>
          </Link>
        </Box>
      )}
    </ListItem>
  );

  return (
    <Box sx={{ flex: 1, width: "60%" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Nos Bases
      </Typography>
      <List>
        {basesGrouped.bases.map((base) => renderBaseItem(base, false))}
      </List>
      <Typography variant="h5" component="h2" gutterBottom>
        Nos Agents
      </Typography>
      <List>
        {basesGrouped.agents.map((agent) => renderBaseItem(agent, true))}
      </List>
    </Box>
  );
};

export default BaseList;
