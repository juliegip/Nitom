import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [consent, setConsent] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const listId = 3;

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => setConsent(event.target.checked);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>)  => {
    event.preventDefault();

    try {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!email || !isEmailValid) {
        throw new Error("L'email est requis et doit être valide");
      }

      if (!consent) {
        throw new Error("Veuillez cocher la case ci-dessus pour accepter les conditions de notre politique de confidentialité");
      }

      await axios.post(`${import.meta.env.VITE_APP_EMAIL_URL}/add-contact`, {
        email,
        listId,
      })
      .then((response) => {
        console.log(response);

        if (response.status === 200 && !response.data?.error) {
          setEmail("");
          setError("");
          setSuccess("Vous êtes bien inscrit à notre newsletter !");
        }

        if (response.data?.error) {
          throw new Error(response.data.error);
        }


      });
      setError("");
    } catch (err: any) {
      console.log(err);
      const errorMessage = err.response?.data?.message || err.message;
      if (errorMessage === "Contact already exist") {
        setError("Cet email est déjà enregistré");
      } else {
        setError(errorMessage);
      }
    }
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{  padding: 2 }}
      my={5}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: "100%",
          borderRadius: "16px",
          backgroundColor: "primary.dark",
          paddingLeft: isMobile ? 2 : 5,
          paddingRight: isMobile ? 2 : 5,
          paddingTop: isMobile ? 0 : 4,
          paddingBottom: isMobile ? 0 : 4,
        }}
      >
        <Typography variant="h4" color="white.main" sx={{ fontWeight: "bold", p: 4 }}>
          Inscrivez-vous à notre newsletter
        </Typography>
        <Typography variant="body1" color="white.main" sx={{ p: 4, pt: 0 }}>
          Recevez les dernières actualités et promotions de Motin,
          directement dans votre boîte mail.
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Email"
                variant="filled"
                color="secondary"
                fullWidth
                sx={{ backgroundColor: "white.main" }}
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ height: "100%" }}
              >
                S'inscrire
              </Button>
            </Grid>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={consent}
                onChange={handleConsentChange}
                color="secondary"
              />
            }
            label="En cochant cette case, j'accepte de recevoir la newsletter de Motin et j'accepte la politique de confidentialité. Je peux me désabonner à tout moment."
            sx={{ color: "white.main", paddingTop:2}}
          />
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
        </form>
      </Box>
    </Box>
  );
}

export default Newsletter;
