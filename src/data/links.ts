import { LinkItem, ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Dra. Luzia Rayane",
  subtitle: "Cirurgiã-Dentista",
  credential: "CRO CE 16735",
  avatarUrl: "/avatar-luzia.png",
};

export const linksData: LinkItem[] = [
  {
    id: "whatsapp",
    title: "Agendar Consulta",
    url: "https://wa.me/5585996309485",
    icon: "whatsapp",
    description: "Agende pelo WhatsApp",
  },
  {
    id: "website",
    title: "Nosso Site",
    url: "https://draluziarayane.vercel.app/",
    icon: "globe",
    description: "Conheça nossos serviços",
    logoUrl: "/logo-lr.png",
  },
  {
    id: "google-maps",
    title: "Localização do Consultório",
    url: "https://www.google.com/maps/search/Marv+Clinic,+R.+Martinho+Rodrigues,+129+-+Fátima,+Fortaleza+-+CE,+60411-280",
    icon: "map-pin",
    description: "Marv Clinic — Fátima, Fortaleza CE",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/luziarayane.g/",
    icon: "instagram",
    description: "Siga nosso perfil",
  },

  {
    id: "avaliacoes",
    title: "Avaliações no Google",
    url: "https://www.google.com/search?sxsrf=ANbL-n7XnuIcxlnx21hJwJyub9vdfHS7zg:1774453564188&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcrBc_1n6L1FPUrJL68xFhRdx_SJO4143b7EGGTTtgPtGsVwCl7hmtoXhHhrVpZ5K6L2ZtJXnWpGpRaVilfZ24KRdqPwjkv-Bhh_j4X_7QOJYE4BwyqNZPX88pFYjaLYPin_ic3TVSb_u6wQICcA4Pdj2EZf&q=Dra.+Luzia+Rayane+Gomes+-+Dentista+em+Fortaleza+Coment%C3%A1rios",
    icon: "star",
    description: "Veja o que nossos pacientes dizem",
  },
];
