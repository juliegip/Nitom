import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Typography, Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { Loading } from "@/components";
import DefaultIMG from "@/assets/Bases/STG.jpg";
import ReactMarkdown from "react-markdown";
import { Actu } from "@/types";
import { Helmet } from "react-helmet";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ActusDisplay = () => {
  const [actus, setActus] = useState<Actu[]>([]);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Toutes les actualités"
  );
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const fetchActus = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND}/api/articles?populate=Photo`
      );
      const sortedData = response.data.data.sort((a: Actu, b: Actu) => {
        return (
          new Date(b.attributes.Date_article).getTime() -
          new Date(a.attributes.Date_article).getTime()
        );
      });
      setActus(sortedData);
      const uniqueCategories: string[] = Array.from(
        new Set(sortedData.map((actu: Actu) => actu.attributes.Category))
      );
      setCategories(uniqueCategories);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des actualités");
    }
  };

  useEffect(() => {
    fetchActus();
  }, []);

  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  };

  const filteredActus =
    selectedCategory === "Toutes les actualités"
      ? actus
      : actus.filter((actu) => actu.attributes.Category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Actualités - Motin SAS</title>
        <meta
          name="description"
          content="Restez à jour avec les dernières actualités de Motin SAS."
        />
      </Helmet>
      <Loading open={loading} />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            onClick={() => setSelectedCategory("Toutes les actualités")}
            sx={{
              color:
                selectedCategory === "Toutes les actualités"
                  ? "#c71121"
                  : "primary",
            }}
          >
            Toutes les actualités
          </Button>
          {categories?.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                color: selectedCategory === category ? "#c71121" : "primary",
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
        {error && <Typography variant="h3">{error}</Typography>}
        {filteredActus.length === 0 && (
          <Typography variant="h3" sx={{ marginLeft: "2rem" }}>
            Aucune actualité pour le moment
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
          {filteredActus.slice(0, 50)?.map((actu: any, index: number) => {
            const imageUrl =
              actu.attributes.Photo.data.attributes.formats.small?.url ||
              actu.attributes.Photo.data.attributes.url;
            return (
              <Box
                key={actu.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "2rem",
                  padding: "1rem",
                  "@media (min-width:601px)": {
                    flexDirection: index === 0 ? "row" : "column",
                    width: index === 0 ? "100%" : "50%",
                  },
                }}
              >
                {imageUrl ? (
                  <LazyLoadImage
                    src={import.meta.env.VITE_APP_BACKEND + imageUrl}
                    alt="photo actualité"
                    style={{
                      width: isMobile ? "100%" : "65%",
                      height: "auto",
                      padding: "1rem",
                    }}
                  />
                ) : (
                  <LazyLoadImage
                    src={DefaultIMG}
                    alt="photo actualité"
                    style={{
                      width: isMobile ? "100%" : "65%",
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
                    <Typography variant="h5">
                      {formatDate(actu.attributes.Date)}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      {actu.attributes.Title}
                    </Typography>
                    <Chip
                      label={actu.attributes.Category}
                      variant="filled"
                      color="secondary"
                      sx={{ my: "1rem" }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        margin: "2rem 0",
                        fontSize: "1.2rem",
                        flexGrow: 1,
                      }}
                    >
                      <ReactMarkdown disallowedElements={["img"]}>
                        {actu.attributes.Contenu.substring(0, 300) + "..."}
                      </ReactMarkdown>
                    </Typography>
                  </Box>
                  <Link to={`/actualites/${actu.id}`}>
                    <Button variant="contained" color="secondary">
                      Lire la suite
                    </Button>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default ActusDisplay;
