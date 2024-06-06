import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import NotFound from "../../assets/not_found.jpg";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>Page non trouvée - Motin SAS</title>
        <meta name="description" content="La page que vous cherchez n'existe pas. Retournez à l'accueil de Motin SAS." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h1" component="div" aria-label="404 Error" gutterBottom>
                404
              </Typography>
              <Typography variant="h6" component="div" aria-label="Page not found" gutterBottom>
                La page que vous cherchez n'existe pas !
              </Typography>
              <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
                Retour à l'accueil
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LazyLoadImage src={NotFound} alt="Page non trouvée" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page404;
