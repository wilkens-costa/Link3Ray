import Image from "next/image";
import { ProfileData } from "@/types";
import { Icon } from "./Icon";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-4 pt-12 pb-2 animate-fade-up">
      {/* Avatar */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary-light/40 via-accent/30 to-mint/40 blur-sm" />

        {/* Avatar container */}
        <div className="avatar-ring relative h-28 w-28 overflow-hidden rounded-full border-[3px] border-white/90 shadow-[var(--shadow-avatar)]">
          <Image
            src={profile.avatarUrl}
            alt={`Foto de ${profile.name}`}
            fill
            className="object-cover"
            sizes="112px"
            preload
          />
        </div>

        {/* Online / verified badge */}
        <div className="absolute right-0 bottom-1 flex h-7 w-7 items-center justify-center rounded-full border-[2.5px] border-white bg-gradient-to-br from-accent to-primary shadow-sm">
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

      {/* Name and info */}
      <div className="flex flex-col items-center gap-1 text-center">
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
