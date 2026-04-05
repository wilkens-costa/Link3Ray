"use client";

import Image from "next/image";
import { LinkItem } from "@/types";
import { Icon } from "./Icon";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

export function LinkButton({ link, index }: LinkButtonProps) {
  const isHighlighted = link.id === "whatsapp";

  return (
    <a
      id={`link-${link.id}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-button transition-interactive group relative flex w-full items-center gap-4 rounded-[var(--radius-button)] border overflow-hidden px-5 py-4 shadow-[var(--shadow-button)] hover:scale-[1.025] hover:shadow-[var(--shadow-button-hover)] active:scale-[0.98] ${
        isHighlighted
          ? "border-[#14b8a6]/40 bg-gradient-to-r from-[#0d9488] to-[#14b8a6] text-white animate-highlight-pulse"
          : "border-border-soft bg-white/80 backdrop-blur-sm hover:border-primary-light/30 hover:bg-white animate-fade-up"
      }`}
      style={{ animationDelay: isHighlighted ? "0ms" : `${index * 80 + 100}ms` }}
      aria-label={link.description || link.title}
    >
      {/* ─── Creative Animation: Continuous Shimmer Reflection for Highlights ─── */}
      {isHighlighted && (
        <span
          className="absolute inset-0 z-0 pointer-events-none opacity-40 shimmer"
        />
      )}

      {/* Icon container */}
      <span
        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-interactive ${
          isHighlighted
            ? "bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 group-hover:from-primary-dark group-hover:to-primary"
            : "bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary/20 group-hover:to-accent/20 group-hover:text-primary-dark"
        }`}
      >
        {link.logoUrl ? (
          <Image
            src={link.logoUrl}
            alt={link.title}
            width={28}
            height={28}
            className="object-contain"
          />
        ) : (
          <Icon name={link.icon} size={isHighlighted ? 22 : 20} />
        )}
      </span>

      {/* Text */}
      <span className="relative z-10 flex flex-1 flex-col gap-0.5">
        <span className={`text-[0.94rem] font-semibold leading-tight ${isHighlighted ? "text-white" : "text-text-primary"}`}>
          {link.title}
        </span>
        {link.description && (
          <span className={`text-xs font-medium ${isHighlighted ? "text-white/80" : "text-text-muted"}`}>
            {link.description}
          </span>
        )}
      </span>

      {/* Arrow */}
      <span
        className={`relative z-10 shrink-0 transition-all duration-200 group-hover:translate-x-0.5 ${
          isHighlighted ? "text-white" : "text-text-muted group-hover:text-primary"
        }`}
      >
        <Icon name="arrow-right" size={16} />
      </span>

      {/* Hover glow for non-highlighted items */}
      {!isHighlighted && (
        <span className="pointer-events-none absolute inset-0 z-0 rounded-[var(--radius-button)] bg-gradient-to-r from-primary/0 via-primary-light/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/3 group-hover:via-primary-light/5 group-hover:to-accent/3 group-hover:opacity-100" />
      )}
    </a>
  );
}
