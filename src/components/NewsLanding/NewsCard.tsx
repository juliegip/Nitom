import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";

import { ResponsiveButton } from "@/components";
import ReactMarkdown from "react-markdown";
import { Actu } from "@/types";

const NewsCard = ({ news }: { news: Actu }) => {
  const { Category, Title, Contenu, Date_article } = news.attributes;
  const mediaUrl =
    news.attributes.Photo?.data.attributes.formats?.small?.url ||
    news.attributes.Photo?.data.attributes.url ||
    "";

  const formatDate = (datestring: string) => {
    const dateObj = new Date(datestring);
    return dateObj.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "650px",
        margin: "0.5rem",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={
          mediaUrl.startsWith("http")
            ? mediaUrl
            : `${import.meta.env.VITE_APP_BACKEND}${mediaUrl}`
        }
        alt="News image"
      />
      <CardContent sx={{ flexGrow: 1, overflow: "auto" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ minHeight: "70px" }}
        >
          {Title}
        </Typography>
        <Chip
          label={Category}
          variant="outlined"
          color="secondary"
          sx={{ my: "0.5rem", minHeight: "30px" }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          component="div"
          sx={{ flexGrow: 1, minHeight: "150px", overflow: "hidden" }}
        >
          <ReactMarkdown components={{ img: () => null }}>
            {Contenu.replace(/\n/g, " ").substring(0, 200) + "..."}
          </ReactMarkdown>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ minHeight: "30px" }}
          component="div"
        >
          {formatDate(Date_article)}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto", minHeight: "50px" }}>
        <Link to={`/actualites/${news.id}`} style={{ textDecoration: "none" }}>
          <ResponsiveButton type="button" variant="contained" color="secondary">
            En savoir plus
          </ResponsiveButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
