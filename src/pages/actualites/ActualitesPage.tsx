import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import { ActusDisplay } from "@/components";
import transition from "@/theme/transition";


const Actualites = () => {
  return (
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
        <title>Actualités - Site de Motin</title>
        <meta name="description" content="Page des actualités du site de Motin" />
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
        Actualites
      </Typography>
      <ActusDisplay />
    </Box>
  );
};

export default transition(Actualites);