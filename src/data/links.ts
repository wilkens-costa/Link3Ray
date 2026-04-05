import { LinkItem, ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Dra. Luzia Rayane",
  subtitle: "Cirurgiã-Dentista",
  credential: "CRO-XX 00000",
  avatarUrl: "/avatar.png",
};

export const linksData: LinkItem[] = [
  {
    id: "whatsapp",
    title: "Agendar Consulta",
    url: "https://wa.me/5500000000000",
    icon: "whatsapp",
    description: "Agende pelo WhatsApp",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/dra.luziarayane",
    icon: "instagram",
    description: "Siga nosso perfil",
  },
  {
    id: "google-maps",
    title: "Localização do Consultório",
    url: "https://maps.google.com",
    icon: "map-pin",
    description: "Como chegar",
  },
  {
    id: "website",
    title: "Nosso Site",
    url: "https://example.com",
    icon: "globe",
    description: "Conheça nossos serviços",
  },
  {
    id: "tiktok",
    title: "TikTok",
    url: "https://tiktok.com/@dra.luziarayane",
    icon: "tiktok",
    description: "Conteúdos e dicas",
  },
  {
    id: "avaliacoes",
    title: "Avaliações no Google",
    url: "https://g.page/r/example",
    icon: "star",
    description: "Veja o que nossos pacientes dizem",
  },
];
