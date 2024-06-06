import { Box, TextField, Alert, Grid, Typography, Select } from "@mui/material";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, { useState, useRef } from "react";
import STG_Drone from "../../assets/Contact/stg_drone.jpg";
import { ResponsiveButton } from "..";
import axios from "axios";

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [token, setToken] = useState<string | null>("");
  const hCaptchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const town = (form.elements.namedItem("town") as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem("title") as HTMLSelectElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value;

    if (token && name && phone && subject && message) {
      try {
        await axios.post(`${import.meta.env.VITE_APP_EMAIL_URL}/send-email`, {
          to: "m.jouenne@motin.fr",
          templateId: 2,
          params: {
            subject: subject || "Aucun sujet communiqué",
            name: name || "Pas de nom communiqué",
            company: company || "Pas de société communiquée",
            phone: phone || "Pas de téléphone communiqué",
            email: email || "Pas d'email communiqué",
            town: town || "Pas de ville communiquée",
            message: message || "Pas de message communiqué",
          },
        });

        setEmailSent(true);
        setEmailError(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      setEmailError(true);
      setEmailSent(false);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      gap={1}
      justifyContent="space-between"
      style={{ height: "100%", padding: "1rem" }}
    >
      <Grid xs={12} sm={5} item>
        <Box
          sx={{
            backgroundImage: `url(${STG_Drone})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            aspectRatio: { xs: "1/1" },
            position: "relative",
            width: "100%",
          }}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            color: '#333',
            maxWidth: '500px',
            margin: '1rem auto',
            textAlign: 'center',
          }}
        >
        <Typography variant="h5" component="h3" gutterBottom>
          Contact Occasions et Export
        </Typography>
        <Typography variant="h6" component="p">
          Maxime Jouenne
        </Typography>
        <Typography variant="body1" component="p">
          <a href="tel:+33782050280" style={{ color: '#c71121' }}>07 82 05 02 80</a>
          <br />
          <a href="mailto:m.jouenne@motin.fr" style={{ color: '#c71121' }}>m.jouenne@motin.fr</a>
        </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          marginBottom: { xs: "8rem", md: 0 },
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Contactez-nous!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Votre nom" name="name" fullWidth required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Nom de la société" name="company" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Votre téléphone"
                name="phone"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Votre adresse email"
                name="email"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Votre commune" name="town" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Select native fullWidth required name="title">
                <option value="" disabled>
                  Sélectionnez un titre
                </option>
                <option value="informations générales">
                  Informations générales
                </option>
                <option value="recrutement">Recrutement</option>
                <option value="rappel par un commercial">
                  Rappel par un commercial
                </option>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Votre message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              sx={{
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <HCaptcha
                sitekey={import.meta.env.VITE_APP_HCAPTCHA_SITEKEY as string}
                ref={hCaptchaRef}
                onVerify={(token) => setToken(token)}
              />
              <ResponsiveButton
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "auto",
                  height: "fit-content",
                  alignSelf: "center",
                  marginTop: { xs: "1rem", lg: 0 },
                }}
              >
                Envoyer
              </ResponsiveButton>
            </Grid>
            <Grid item xs={12}>
              {emailSent && !emailError && (
                <Alert severity="success">Le mail a bien été envoyé.</Alert>
              )}
              {emailError && (
                <Alert severity="error">
                  Une erreur s'est produite lors de l'envoi du mail.
                </Alert>
              )}
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
