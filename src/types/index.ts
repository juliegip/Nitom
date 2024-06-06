import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  href?: string;
  type?: "url" | "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface BaseProps {
  index?: number;
  lat: number;
  lng: number;
  nom: string;
  adresse: string;
  tel: string;
  fax?: string;
  email: string;
  photo: string;
  horaires: string;
  agent: boolean;
  GMapsURL?: string;
}

export interface BaseListProps {
  bases: BaseProps[];
  onMarkerHover: (index: number | null) => void;
  highlightedBase: number | null;
}

export interface PhotoAttributes {
  formats: {
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
  };
  url: string;
}

export interface PhotoData {
  attributes: PhotoAttributes;
}

export interface ActuAttributes {
  Title: string;
  Date_article: string;
  Category: string;
  Contenu: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Photo?: {
    data: PhotoData;
  };
}

export interface Actu {
  id: number;
  attributes: ActuAttributes;
}

export interface ContactEmailProps {
  name: string;
  phone: string;
  email: string;
  company: string;
  town: string;
  title: string;
  message: string;
}

export interface HideOnScrollProps {
  children: React.ReactElement;
}

export interface LoadingProps {
  open: boolean;
}

export interface MapComponentProps {
  geoData: { lat: number; lng: number };
  highlightedBase: number | null;
  onMarkerHover: (index: number | null) => void;
}

export interface LocationCardProps {
  locationName: string;
  locationAdress: string;
  locationPhone: string;
  locationImage: string;
  GMapsURL: string;
  mail: string;
}

export interface HeadBandContent {
  id: number;
  attributes: {
    Debut_affichage: string;
    Fin_affichage: string;
    Contenu: string;
  };
}
