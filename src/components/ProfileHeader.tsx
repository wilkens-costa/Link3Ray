import Image from "next/image";
import { ProfileData } from "@/types";
import { Icon } from "./Icon";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 pt-10 pb-2 animate-fade-up">
      {/* ─── Avatar Clássico Premium ─── */}
      <div className="relative flex justify-center mt-2 w-[168px] h-[168px] animate-float">
        {/* Efeito Glow Ambiente Traseiro */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-light/50 via-accent/30 to-mint/50 blur-xl scale-110 pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* Círculo Base e Borda do Avatar */}
        <div 
          className="relative h-[168px] w-[168px] rounded-full border-[3px] border-white/95 shadow-[var(--shadow-avatar)] overflow-hidden bg-gradient-to-tr from-primary/10 to-accent/5"
          style={{ zIndex: 10 }}
        >
          {/* Fundo Extra para a Foto Transparente */}
          <div className="absolute inset-0 bg-[#e6f4f1] pointer-events-none" />

          <Image
            src={profile.avatarUrl}
            alt={`Foto de ${profile.name}`}
            fill
            className="object-cover object-top"
            sizes="168px"
            priority
          />
        </div>

        {/* Selo de Verificação */}
        <div
          className="absolute flex h-8 w-8 items-center justify-center rounded-full border-[2.5px] border-white bg-gradient-to-br from-accent to-primary shadow-md"
          style={{ bottom: "4px", right: "2px", zIndex: 30 }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Identificação */}
      <div className="flex flex-col items-center gap-1 text-center mt-3">
        <h1 className="text-xl font-bold tracking-tight text-text-primary">
          {profile.name}
        </h1>
        <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
          <Icon name="tooth" size={15} />
          {profile.subtitle}
        </p>
        <p className="text-xs font-medium tracking-wide text-text-muted">
          {profile.credential}
        </p>
      </div>
    </header>
  );
}
