import { Box, Typography } from "@mui/material";

const OpeningHours = () => {
    return (
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
          width: '100%',
          margin: '2rem auto',
          textAlign: 'center',
        }}
      >
            <Typography variant="h3" component="h3" gutterBottom>
                Horaires d'ouverture
            </Typography>
            <Typography variant="body1" component="p">
                Lundi - Vendredi
                <br />
                08h30 - 12h30 / 14h - 18h
            </Typography>
            <Typography variant="body1" component="p">
                Samedi
                <br />
                08h30 - 12h30
            </Typography>
            <Typography variant="body1" component="p">
                Dimanche
                <br />
                Fermé
            </Typography>

            <Typography variant="body1" component="p">
                <strong>
                    Permanence SAV 7j/7 en saison
                </strong>
            </Typography>
        </Box>
        
    );
}

export default OpeningHours;