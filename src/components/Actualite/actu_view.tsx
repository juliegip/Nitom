import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShareIcon from "@mui/icons-material/Share";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Actu } from "@/types";

const ActusView = () => {
  const { id } = useParams<{ id: string }>();
  const [actu, setActu] = useState<Actu | null>(null);
  const mediaUrl =
    actu?.attributes.Photo?.data.attributes.formats?.medium?.url ||
    actu?.attributes.Photo?.data.attributes.url ||
    "";
  const [loading, setLoading] = useState(true);

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  };

  useEffect(() => {
    const fetchActu = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND
          }/api/articles/${id}?populate=media`
        );
        setActu(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("Erreur lors du chargement de l'actualité");
      }
    };
    fetchActu();
  }, [id]);

  if (loading) {
    return <CircularProgress color="secondary" />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: actu?.attributes.Title,
          text: "Regardez cette actualité !",
          url: window.location.href,
        })
        .catch((error) => console.log("Erreur de partage", error));
    } else {
      alert("Votre navigateur ne supporte pas la fonction de partage");
    }
  };

  return (
    <>
      <Helmet>
        <title>{actu?.attributes.Title} - Motin SAS</title>
        <meta name="description" content={actu?.attributes.Contenu} />
        <meta property="og:title" content={actu?.attributes.Title} />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_APP_BACKEND}${mediaUrl}`}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >
        <Button
          variant="contained"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => window.history.back()}
          sx={{ margin: "1rem 4rem", alignSelf: "flex-start" }}
        >
          Retour
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            width: "70vw",
          }}
        >
          <Typography variant="h1">{actu?.attributes.Title}</Typography>

          <Typography variant="body1" sx={{ textAlign: "left", my: 2 }}>
            {formatDate(actu?.attributes.Date_article ?? "")}
          </Typography>

          {mediaUrl && (
            <LazyLoadImage
              src={`${import.meta.env.VITE_APP_BACKEND}${mediaUrl}`}
              alt="photo actualité"
              style={{ width: "100%", height: "auto", padding: "1rem" }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            my: 5,
            p: 3,
            width: "70vw",
          }}
        >
          <Typography variant="body1">
            <ReactMarkdown>{actu?.attributes.Contenu}</ReactMarkdown>
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
          sx={{ margin: "1rem 4rem", alignSelf: "center" }}
        >
          Partager
        </Button>
      </Box>
    </>
  );
};

export default ActusView;
