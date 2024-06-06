import STG_Icon from "../assets/icons/Bases/motin_stg.jpg";
import NORMAGRI_Icon from "../assets/icons/Bases/normagri.jpg";
import VIRE_Icon from "../assets/icons/Bases/motin_vire.jpg";
import AMS_Icon from "../assets/icons/Bases/ams_valognes.jpeg";

import Facebook from "../assets/icons/Socials/facebook_white.svg";
import Instagram from "../assets/icons/Socials/instagram_white.svg";
import TikTok from "../assets/icons/Socials/tiktok_white.svg";
import Youtube from "../assets/icons/Socials/youtube_white.svg";

import MasseyFerguson from "../assets/icons/Partenaires/massey-ferguson.svg";
import Agco from "../assets/icons/Partenaires/agco.png";
import AVR from "../assets/icons/Partenaires/avr.svg";
import Pottinger from "../assets/icons/Partenaires/pottinger.svg";
import Joskin from "../assets/icons/Partenaires/joskin.svg";
import Faresin from "../assets/icons/Partenaires/faresin.svg";
import Belair from "../assets/icons/Partenaires/belair.png";
import SMA from "../assets/icons/Partenaires/sma.png";
import Kverneland from "../assets/icons/Partenaires/kverneland.svg";
import Arland from "../assets/icons/Partenaires/arland.webp";
import Thievin from "../assets/icons/Partenaires/thievin.png";
import Weidemann from "../assets/icons/Partenaires/weidemann.svg";
import Verhoest from "../assets/icons/Partenaires/verhoest.png";

import Vente from "../assets/Services/vente.jpg";
import Service from "../assets/Services/atelier.jpg";
import Magasin from "../assets/Services/magasin.jpg";

export const bases = [
  {
    lat: 49.13525028981112,
    lng: -1.1490075330979324,
    nom: "Motin Saint Gilles",
    adresse: "Route de Saint Lô 50180 Saint Gilles",
    tel: "+33 (0)2 33 77 46 20",
    fax: "+33 (0)2 33 77 46 20",
    email: "accueil@motin.fr",
    photo: STG_Icon,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//MOTIN+SAINT+GILLES+(concessionnaire+materiel+agricole),+Saint-Gilles/@49.1025097,-1.2447517,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x480b916fc1ac88a7:0x3fd5362dbe0e2c3d!2m2!1d-1.1623512!2d49.102539?entry=ttu",
  },
  {
    lat: 48.89747563693977,
    lng: -0.8661095979836146,
    nom: "Motin Vire",
    adresse: "ZA La Papillionnière 14500 VIRE",
    tel: "+33 (0)2 31 68 36 04",
    fax: "+33 (0)2 31 68 37 15",
    email: "accueil@motin.fr",
    photo: VIRE_Icon,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//Motin,+La+Papillonni%C3%A8re,+Vire-Normandie/@48.869111,-0.9535162,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480bdaaf8c5b8e67:0x6857c20b8b2ac599!2m2!1d-0.87104!2d48.8691102?entry=ttu",
  },
  {
    lat: 49.51267603883449,
    lng: -1.4970846242395017,
    nom: "AMS Valognes",
    adresse: "ZA d' Armanville 50700 VALOGNES",
    tel: "+33 (0)2 33 61 23 24",
    email: "ams@motin.fr",
    photo: AMS_Icon,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//AMS+Massey+Ferguson+-+VALOGNES,+Route+de+la+Ferme+(Armanville),+Valognes/@49.5119362,-1.5796997,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480c837617ce8acb:0x635b11fec37dd543!2m2!1d-1.4972992!2d49.5119655?entry=ttu",
  },
  {
    lat: 48.60210703671148,
    lng: -1.2064600891453157,
    nom: "Motin (ex. Normagri) Isigny-le-Buat",
    adresse: "Les Biards 50540 ISIGNY-LE-BUAT",
    tel: "+33 (0)2 33 89 22 00",
    email: "normagri@normagri.fr",
    photo: NORMAGRI_Icon,
    horaires: "",
    agent: false,
    GMapsURL:
      "https://www.google.fr/maps/dir//Normagri,+Route+Nationale+176,+Isigny-le-Buat/@48.6018932,-1.2888285,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4809507814a77aa9:0x615cb4dfb6c6ae4d!2m2!1d-1.2064279!2d48.6019226?entry=ttu",
  },
  {
    lat: 48.87989791434353,
    lng: -1.1054796625690382,
    nom: "Ets Perrard - Montbray",
    adresse: "Le Bourg Neuf, 50410 Montbray",
    tel: "+33 (0)2 33 61 97 45",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Ets+Perrard+-+Montbray,+Le+Bourg+Neuf,+Montbray/@48.8797557,-1.1885081,11.83z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480be8a1f8200e55:0x3132745d9b498e7a!2m2!1d-1.1055494!2d48.8797568?entry=ttu",
  },
  {
    lat: 48.42823456890982,
    lng: -1.5485970141416145,
    nom: "LP Motoculture",
    adresse: "Vaugarny, 35560 Bazouges-la-Pérouse",
    tel: "+33 (0)2 99 97 44 40",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//LP+Motoculture,+Vaugarny,+Bazouges-la-P%C3%A9rouse/@48.4281055,-1.6307133,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480eb84a580e6c6f:0xdee1971373cbbad6!2m2!1d-1.5484954!2d48.4280977?entry=ttu",
  },
  {
    lat: 48.263364334130394,
    lng: -1.1880943951020273,
    nom: "Garage Desbuisson",
    adresse: "La haute, La Martinière, 35210 Parce",
    tel: "+33 (0)2 99 97 50 94",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Garage+DESBUISSON,+La+Martini%C3%A8re,+Parc%C3%A9/@48.2632278,-1.2704038,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480931dd44e68fcf:0xe31274783f212bcf!2m2!1d-1.1880032!2d48.2632572?entry=ttu",
  },
  {
    lat: 48.64016024741723,
    lng: -0.46748480674670123,
    nom: "Lefevre Sarl",
    adresse: "La Tuilerie, 61220 La Coulonche",
    tel: "+33 (0)9 60 04 69 86",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Lefevre+Sarl,+La+Tuilerie,+La+Coulonche/@48.6399607,-0.5499015,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4809892a86a8776d:0x46a28b5fe2b575e7!2m2!1d-0.4674954!2d48.6400112?entry=ttu",
  },
  {
    lat: 49.66405843806124,
    lng: -1.3177801028361762,
    nom: "Jean Daniel Saillard",
    adresse: "Saint Genevieve (Val de Saire)",
    tel: "",
    email: "",
    photo: "",
    horaires: "",
    agent: true,
    GMapsURL:
      "https://www.google.fr/maps/dir//Sainte-Genevieve,+Manche,+Normandy/@49.6582471,-1.403372,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x480b67146bcd271f:0x40c14484fb96ab0!2m2!1d-1.313455!2d49.656934?entry=ttu",
  },
];

export const Motin_Services = [
  {
    offre: "Vente de machines et d'équipements agricoles",
    image: Vente,
    contenu: [
      {
        details: "Tracteurs Massey Ferguson et machines neuves",
        description:
          "Nous sommes un des 3 plus gros distributeurs de tracteurs neufs Massey Ferguson en France, et nous distribuons une large gamme de machines d’accompagnement. Retrouvez la liste de nos partenaires en bas de page.",
      },
      {
        details: "Machines d'occasion",
        description:
          "Nous disposons en permanence d’un parc important de tracteurs et machines d’occasion toutes marques. Contactez-nous, nous avons surement la machine que vous recherchez !",
      },
      {
        details: "Solution GPS et Autoguidage",
        description:
          "Barre de guidage ou système autoguidage, MOTIN dispose d’une équipe spécialisée aux technologies d’agriculture de précision qui sera répondre à vos besoins.",
      },
    ],
  },
  {
    offre: "Service après-vente",
    image: Service,
    contenu: [
      {
        details: "Réparations toutes marques",
        description:
          "Nos ateliers et notre flotte de camions dépannage nous permet d’intervenir sur tous types de réparations.",
      },
      {
        details: "Entretiens toutes marques",
        description:
          "Nos techniciens formés en permanence chez nos constructeurs partenaires sont à votre service pour suivre vos machines.",
      },
      {
        details: "Un réseau d’agents",
        description:
          "En complément de nos ateliers et camions, nos agents présents sur les secteurs les plus éloignés de nos bases nous permettent d’assurer un service optimum.",
      },
    ],
  },
  {
    offre: "Magasin et pièces détachées",
    image: Magasin,
    contenu: [
      {
        details: "Libre-service",
        description:
          "Toutes nos bases disposent d’un libre-service avec un large choix de pièces et de petit équipement.",
      },
      {
        details: "Stock de pièces détachées important",
        description:
          "Nos 4 bases réparties sur notre secteur nous permettent de disposer d’un stock important de pièces de rechange.",
      },
      {
        details: "Conseil et service",
        description:
          "Notre équipe de magasinier se tient à votre disposition pour vous conseiller et répondre à vos attentes.",
      },
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Présentation" },
  { href: "/occasions", label: "Occasions" },
  { href: "/recrutement", label: "Recrutement" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  {
    title: "Plan du site",
    links: [
      { name: "Présentation", link: "/", target: "" },
      { name: "Nos services", link: "/#services" },
      { name: "Actualités", link: "/actualites" },
      { name: "Occasions", link: "/occasions" },
      { name: "Recrutement", link: "/recrutement" },
      { name: "Contactez-nous", link: "/contact" },
    ],
  },
];

export const partenaires = [
  {
    name: "Massey Ferguson",
    link: "https://www.masseyferguson.com/",
    target: "_blank",
    logo: MasseyFerguson,
  },
  {
    name: "AGCO",
    link: "https://www.agcopartsandservice.com/eame/fr_FR/pieces/marques/massey-ferguson.html",
    target: "_blank",
    logo: Agco,
  },
  {
    name: "Pottinger",
    link: "https://www.poettinger.at/",
    target: "_blank",
    logo: Pottinger,
  },
  {
    name: "AVR",
    link: "https:/avr.be/",
    target: "_blank",
    logo: AVR,
  },
  {
    name: "Joskin",
    link: "https://www.joskin.com/fr",
    target: "_blank",
    logo: Joskin,
  },
  {
    name: "Faresin",
    link: "https://www.faresin.com/fr/",
    target: "_blank",
    logo: Faresin,
  },
  {
    name: "Belair",
    link: "https://www.belair-sarl.fr/",
    target: "_blank",
    logo: Belair,
  },
  {
    name: "SMA Faucheux",
    link: "https://www.smafaucheux.com/",
    target: "_blank",
    logo: SMA,
  },
  {
    name: "Kverneland",
    link: "https://fr.kvernelandgroup.com/",
    target: "_blank",
    logo: Kverneland,
  },
  {
    name: "Arland Pulvérisation",
    link: "https://www.arland-pulverisation.fr/",
    target: "_blank",
    logo: Arland,
  },
  {
    name: "Thievin",
    link: "https://www.thievin.fr/",
    target: "_blank",
    logo: Thievin,
  },
  {
    name: "Weidemann",
    link: "https://www.weidemann.de/fr/",
    target: "_blank",
    logo: Weidemann,
  },
  {
    name: "Verhoest",
    link: "https://www.verhoestagro.be/fr",
    target: "_blank",
    logo: Verhoest,
  },
];
export const socialMedia = [
  {
    src: Facebook,
    alt: "facebook logo",
    url: "https://www.facebook.com/MotinNormagri/",
  },
  {
    src: Instagram,
    alt: "instagram logo",
    url: "https://www.instagram.com/motin_normagri/",
  },
  {
    src: TikTok,
    alt: "tiktok logo",
    url: "https://www.tiktok.com/@motin_sas",
  },
  {
    src: Youtube,
    alt: "youtube logo",
    url: "https://www.youtube.com/channel/UCNPLlNE_tG1lYau6Y3vv2WA",
  },
];

export const historyData = [
  {
    year: "1905",
    title: "Création de l’entreprise Motin par la famille Motin",
    description: "L’entreprise MOTIN a été crée en 1905 à PERIERS par Mr Louis MOTIN. Par la suite il créa 5 succursales pour installer ses enfants. En 1928, son fils MARCEL s’installe à Saint Lô. L'entreprise Motin a débuté son activité centrée sur la distribution de matériels comme des barattes à beurre ou des écrémeuses.",
    image: "Motin",
    alt: "M.Motin et ses 5 fils",
  },
  {
    year: "1972",
    title: "Claude Motin reprend l'entreprise familiale",
    description: "Claude Motin reprend l'entreprise familiale en 1972. En 1978, l’entreprise s’implante à Saint Gilles pour avoir plus d’espace.",
    image: null,
    alt: null,
  },
  {
    year: "1991",
    title: "Rachat de la société par Jacky Jouenne",
    description: "Le 1er juin 1991, Claude MOTIN cède la société qui est concessionnaire CASE, à Jacky JOUENNE. En octobre 1993, création d’une succursale à VIRE.",
    image: "FirstSTG",
    alt: "Première base de Saint Gilles",
  },
  {
    year: "Mai 2000",
    title: "Achat de la société Normagri",
    description: "En mai 2000, Jacky JOUENNE achète la société NORMAGRI à Isigny le Buât. Quelques mois plus tard, la marque CASE est vendue à FIAT qui revend les usines au groupe ARGO avec la marque MC CORMICK. MOTIN Saint Gilles et NORMAGRI deviennent concessionnaires MC CORMICK.",
    image: "OldNormagri",
    alt: "Base de Normagri",
  },
  {
    year: "2010",
    title: "Concessionnaire Massey Ferguson",
    description: "En 2010, dans le but de développer l’activité, les sociétés MOTIN Saint Gilles/Vire et NORMAGRI deviennent concessionnaires MASSEY FERGUSON. Cette nouvelle marque permet de multiplier le chiffre d’affaires par 4 très rapidement. Dans cette période, les fils de Jacky JOUENNE, ADRIEN et MAXIME intègrent les sociétés pour succéder à leur père.",
    image: "OldSTG",
    alt: "Ancienne base de Saint Gilles",
  },
  {
    year: "Juin 2021",
    title: "Nouveau locaux à Saint Gilles",
    description: "En juin 2021, la société MOTIN s’installe dans de nouveaux locaux, très fonctionnels et adaptés aux matériels qui se commercialisent.",
    image: "STGDrone",
    alt: "Vue aérienne de la base de Saint Gilles",
  },
  {
    year: "2023",
    title: "Nouvelle base AMS à Valognes",
    description: "En 2023, la société MOTIN ouvre une nouvelle base AMS à Valognes.",
    image: "AMS",
    alt: "Bâtiment de AMS",
  },
];
