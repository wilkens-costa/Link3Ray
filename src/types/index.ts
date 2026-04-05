export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  description?: string;
  logoUrl?: string;
}

export interface ProfileData {
  name: string;
  subtitle: string;
  credential: string;
  avatarUrl: string;
  logoUrl?: string;
}
