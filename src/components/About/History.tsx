import { Box, Typography } from "@mui/material";
import ResponsiveButton from "../Button/ResponsiveButton";
import content from "@/constants/content.json";
import AboutImg from "@/assets/LandingPage/about-img.jpg";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const partners = [
  { name: 'Massey Ferguson', url: 'https://www.masseyferguson.com/' },
  { name: 'Pottinger', url: 'https://www.poettinger.at/' },
  { name: 'Kverneland', url: 'https://www.kvernelandgroup.com/' },
  { name: 'SMA', url: 'https://www.smafaucheux.com/' },
  { name: 'Joskin', url: 'https://www.joskin.com/' },
  { name: 'Faresin', url: 'https://www.faresindustries.com/' },
  { name: 'Belair', url: 'https://www.belair-sarl.com/' }
];

const History = forwardRef<HTMLDivElement>((props, ref) => {
  const slideFromUp = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      {...props}
      ref={ref}
      component="section"
      p={5}
      id="history"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        variants={slideFromUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ width: "100%", textAlign: "center" }}
          aria-label="About Us Title"
        >
          {content.about.title}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          textAlign="center"
          aria-label="About Us Subtitle"
        >
          {content.about.subtitle}
        </Typography>
      </motion.div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <motion.div
            variants={slideFromUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              gutterBottom
              lineHeight="2"
              aria-label="About Us Description"
            >
              Bienvenue chez{" "}
              <span style={{ color: "#c71121", fontWeight: "600" }}>
                MOTIN
              </span>
              , votre
              <strong> partenaire de confiance </strong>en machinerie agricole
              depuis 1905. Fort d’une longue expérience dans le machinisme agricole en Normandie et en Bretagne, nous nous engageons à vous offrir des produits et services de qualité. <br />
              En tant que concessionnaire officiel{" "}
              <a href={partners[0].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <strong style={{ backgroundColor: "#c71121", color: "#fff", padding: "2px" }}>
                  {partners[0].name}
                </strong>
              </a>
              , nous sommes fiers de représenter une marque emblématique dans
              le domaine des tracteurs. Notre catalogue s'étend également à une large gamme de matériel de fenaison, d'outils de travail du sol, et d'équipements pour l'élevage, grâce à notre partenariat avec des marques de renommée telles que{" "}
              {partners.slice(1).map((partner, index) => (
                <span key={index}>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#c71121", color: "#fff", textDecoration: "none", padding: "2px" }}>
                    <strong>{partner.name}</strong>
                  </a>
                  {index < partners.length - 2 ? ", " : ""}
                </span>
              ))}
              ...
              <br />
              Chez{" "}
              <span style={{ color: "#c71121", fontWeight: "600" }}>
                MOTIN
              </span>
              , nous nous engageons à vous fournir non seulement l'équipement, mais aussi le savoir-faire et le support nécessaires pour accompagner le développement de votre exploitation agricole.
            </Typography>

            <ResponsiveButton
              variant="contained"
              color="secondary"
              to="/a-propos"
              sx={{ mt: 3 }}
            >
              Découvrir notre histoire
            </ResponsiveButton>
          </motion.div>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: 5, md: 0 },
          }}
        >
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <LazyLoadImage src={AboutImg} alt="about us" style={{ width: "100%" }} />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
});

export default History;
