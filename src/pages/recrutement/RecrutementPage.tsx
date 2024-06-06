import { RecrutementsDisplay } from "@/components";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const Recrutement = () => {
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
        <title>Recrutements - Motin SAS</title>
        <meta
          name="description"
          content="Découvrez nos offres de recrutement"
        />
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
        Recrutement
      </Typography>
      <RecrutementsDisplay />
    </Box>
  );
};

export default Recrutement;
