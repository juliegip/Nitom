import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import Loading from "@/components/Loading/Loading";
import ReactMarkdown from "react-markdown";
import STG from "@/assets/Bases/STG.jpg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecrutementsDisplay = () => {
  const [recrutements, setRecrutements] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchRecrutement = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND}/api/recrutements?populate=media`
      );
      response.data.data.reverse();
      response.data.data = response.data.data.filter((recrutement: any) => !recrutement.attributes.perrard);
      setRecrutements(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des offres de recrutement");
    }
  };

  useEffect(() => {
    fetchRecrutement();
  }, []);

  return (
    <>
    <Loading open={loading}/>
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      {recrutements.length === 0 && (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          color: '#333',
          maxWidth: '500px',
          margin: '2rem auto',
        }}
      >
        <Typography variant="h3" align="center">
          Aucune offre de recrutement pour le moment
        </Typography>
      </Box>
      )}
      {error && (
        <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
          {error}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          "@media (max-width:600px)": {
            flexDirection: "column",
          },
        }}
      >
        {recrutements.slice(0, 50)?.map((recrutement: any, index: number) => (
          <>
            <Box
              key={recrutement.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "2rem",
                padding: "1rem",
                "@media (min-width:601px)": {
                  flexDirection: "row",
                },
              }}
            >
             {recrutement.attributes.media.data && (
                  <LazyLoadImage
                    src={
                      import.meta.env.VITE_APP_BACKEND +
                      (recrutement.attributes.media.data.attributes.formats?.small?.url || recrutement.attributes.media.data.attributes.url)
                    }
                    alt="photo de l'offre"
                    style={{
                      width: isMobile ? "100%" : "50%",
                      height: "auto",
                      padding: "1rem",
                    }}
                  />
                )}

                {!recrutement.attributes.media.data && (
                  <LazyLoadImage
                    src={STG}
                    alt="photo de l'offre"
                    style={{
                      width: isMobile ? "100%" : "50%",
                      height: "auto",
                      padding: "1rem",
                    }}
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "0 1rem",
                    gap: "0.5rem",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      {recrutement.attributes.jobTitle}{" "}
                      {recrutement.attributes.contractType &&
                        "(" + recrutement.attributes.contractType + ")"}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "left",
                        my: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <PlaceIcon sx={{ fontSize: "1.5rem" }} />
                      {recrutement.attributes.jobLocation}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        margin: "2rem 0",
                        fontSize: "1.2rem",
                        flexGrow: 1,
                      }}
                    >
                      <ReactMarkdown>
                        {recrutement.attributes.content}
                      </ReactMarkdown>
                    </Typography>
                  </Box>
                  <Link to={`/recrutement/${recrutement.id}`}>
                    <Button variant="contained" color="secondary">
                      Lire la suite
                    </Button>
                  </Link>
                </Box>
            </Box>
            {index !== recrutements.length - 1 && (
              <Divider
                sx={{
                  width: "50%",
                  height: "75px",
                  borderBottomWidth: 2,
                  my: 5,
                }}
              />
            )}
          </>
        ))}
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          color: '#333',
          maxWidth: '500px',
          margin: '2rem auto',
        }}
      >
        <Typography variant="h4" align="center">
          Pour une candidature spontanée, veuillez nous contacter à :
        </Typography>
            <Typography variant="body1" align="center">
              Email :{" "}
              <a href="mailto:rh@motin.fr" style={{ color: "#c71121" }}>
                rh@motin.fr
              </a>
            </Typography>
            <Typography variant="body1" align="center">
              Téléphone :{" "}
              <a href="tel:+330685208017" style={{ color: "#c71121" }}>
                06 85 20 80 17
              </a>
            </Typography>
      </Box>
      </Box>
    </Box>
    </>
  );
};

export default RecrutementsDisplay;
