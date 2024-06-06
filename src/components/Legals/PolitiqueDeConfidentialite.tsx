import { Box, Typography, List, ListItem } from "@mui/material";

function PolitiqueDeConfidentialite() {
return (
    <Box 
        sx={
            {
                display: "flex",
                flexDirection: "column",
                p: 3,
                mt: "5rem",
                mx: "auto",
                width: "80vw",
            }
        }
    >
<Typography variant="h1">Politique de confidentialité</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1"><strong>Introduction</strong></Typography>
<Typography variant="body1">Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention
    particulière à la protection de la vie privée. C’est pourquoi, nous nous engageons à respecter la confidentialité
    des renseignements personnels que nous collectons.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="h2">Collecte des renseignements personnels</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">
<List
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Roboto" }}>
        <ListItem>Prénom</ListItem>
        <ListItem>Adresse postale</ListItem>
        <ListItem>Code postal</ListItem>
        <ListItem>Adresse électronique</ListItem>
        <ListItem>Numéro de téléphone / télécopieur</ListItem>
    </List>
</Typography>
<Typography variant="body1">Les renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à
    l’interactivité établie entre vous et notre site Web. Nous utilisons également, comme indiqué dans la section
    suivante, des fichiers témoins et/ou journaux pour réunir des informations vous concernant.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="h2">Formulaires&nbsp;et interactivité:</Typography>
<Typography variant="body1">Vos renseignements personnels sont collectés par le biais de formulaire, à savoir :</Typography>
<Typography variant="body1">Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">
<List
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Roboto" }}>
        <ListItem>Contact</ListItem>
    </List>
</Typography>
<Typography variant="body1">Vos renseignements sont également collectés par le biais de l’interactivité pouvant s’établir entre vous et notre
    site Web et ce, de la façon suivante:</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">
<List
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Roboto" }}>
        <ListItem>Correspondance</ListItem>
    </List>
</Typography>
<Typography variant="body1">Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">
    <List
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Roboto" }}>
        <ListItem>Contact </ListItem>
    </List>
</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="h2">Droit d’opposition et de retrait</Typography>
<Typography variant="body1">Nous nous engageons à vous offrir un droit d’opposition et de retrait quant à vos renseignements personnels.</Typography>
<Typography variant="body1">Le droit d’opposition s’entend comme étant la possiblité offerte aux internautes de refuser que leurs
    renseignements personnels soient utilisées à certaines fins mentionnées lors de la collecte.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">Le droit de retrait s’entend comme étant la possiblité offerte aux internautes de demander à ce que leurs
    renseignements personnels ne figurent plus, par exemple, dans une liste de diffusion.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1"><strong>Pour pouvoir exercer ces droits, vous pouvez :</strong></Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">Code postal :&nbsp; 50180</Typography>
<Typography variant="body1">Courriel :&nbsp; accueil@motin.fr</Typography>
<Typography variant="body1"></Typography>
<Typography variant="body1"></Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="h2">Droit d’accès</Typography>
<Typography variant="body1">Nous nous engageons à reconnaître un droit d’accès et de rectification aux personnes concernées désireuses de
    consulter, modifier, voire radier les informations les concernant.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1"><strong>L’exercice de ce droit se fera :</strong></Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">Code postal :&nbsp; 50180</Typography>
<Typography variant="body1">Courriel :&nbsp; accueil@motin.fr</Typography>
<Typography variant="body1"></Typography>
<Typography variant="body1"></Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="h2">Sécurité</Typography>
<Typography variant="body1">Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. Les personnes
    travaillant pour nous sont tenues de respecter la confidentialité de vos informations.</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">Pour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures suivantes :</Typography>
<Typography variant="body1"><br /></Typography>
<Typography variant="body1">
    <List
    sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontFamily: "Roboto" }}>
        <ListItem>Protocole SSL</ListItem>
        <ListItem>Pare-feu</ListItem>
    </List>
</Typography>
<Typography variant="body1">Nous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières innovations
    technologiques permettant d’assurer la confidentialité de vos transactions. Toutefois, comme aucun mécanisme n’offre
    une sécurité maximale, une part de risque est toujours présente lorsque l’on utilise Internet pour transmettre des
    renseignements personnels.</Typography>
</Box>
);
}

export default PolitiqueDeConfidentialite;