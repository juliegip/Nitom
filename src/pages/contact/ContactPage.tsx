import { Box, Typography, Divider } from "@mui/material";
import ContactForm from "../../components/Contact/contact_form";
import OpeningHours from "../../components/Contact/opening_hours";
import { bases } from "../../constants";
import { MapComponent, BaseList } from "@/components";
import { useState } from "react";
import { Helmet } from "react-helmet";
import transition from "@/theme/transition";

const Contact = () => {
  const geoData = { lat: 49.10477978732956, lng: -1.163158136439198 };
  const [highlightedBase, setHighlightedBase] = useState<number | null>(null);
  const handleMarkerHover = (index: number | null) => {
    setHighlightedBase(index);
  };

  return (
    <>
    <Helmet>
      <title>Nous contacter - Motin SAS</title>
      <meta
        name="description"
        content="Contactez-nous pour toute demande d'information"
      />
    </Helmet>
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
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "start",
          marginBottom: "1rem",
        }}
      >
        Nous contacter
      </Typography>
      <Box
          display="flex"
          sx={{
            height: "100%",
            gap: "1rem",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            display="flex"
            sx={{
              width: { xs: "100%", md: "40%" },
              marginBottom: "1rem",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <MapComponent
              geoData={geoData}
              highlightedBase={highlightedBase}
              onMarkerHover={handleMarkerHover}
            />
            <OpeningHours />
          </Box>
          <BaseList
            bases={bases}
            highlightedBase={highlightedBase}
            onMarkerHover={handleMarkerHover}
          />
        </Box>

      <Divider
        sx={{
          my: 5,
          borderColor: "secondary.main",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        variant="middle"
      />

      <ContactForm />
    </Box>
    </>
  );
};

export default transition(Contact);
