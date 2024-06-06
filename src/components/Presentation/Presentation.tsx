import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import transition from "@/theme/transition";
import Motin from "@/assets/History/motin_5freres.jpeg";
import FirstSTG from "@/assets/History/old_stg.jpeg";
import OldNormagri from "@/assets/History/old_normagri.jpg";
import OldSTG from "@/assets/History/old_stgilles.jpeg";
import STGDrone from "@/assets/Contact/stg_drone.jpg";
import AMS from "@/assets/Bases/AMS.jpg";
import { historyData } from "@/constants";

const Presentation = () => {
  const historyImages = { Motin, FirstSTG, OldNormagri, OldSTG, STGDrone, AMS };

  return (
    <>
      <Box
        component="main"
        maxWidth={1200}
        mx="auto"
        mt="7rem"
        sx={{
          p: { xs: 4, lg: 0 },
          color: "primary.main",
          minHeight: "calc(100vh - 4rem)",
        }}
      >
        <Helmet>
          <title>Histoire - Motin SAS</title>
          <meta name="description" content="Découvrir l'histoire de Motin SAS" />
        </Helmet>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "start",
            marginBottom: "1rem",
          }}
        >
          Qui sommes-nous ?
        </Typography>
        <Timeline sx={{ mt: 4 }} position="alternate">
          {historyData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography variant="h6">{item.year}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <BusinessCenterIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body1" sx={{ my: 2 }}>
                  {item.description}
                </Typography>
                {item.image && (
                  <LazyLoadImage
                    src={historyImages[item.image as keyof typeof historyImages]}
                    alt={item.alt}
                    style={{ width: "90%" }}
                  />
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </>
  );
};

export default transition(Presentation);