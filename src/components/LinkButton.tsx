"use client";

import { LinkItem } from "@/types";
import { Icon } from "./Icon";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

export function LinkButton({ link, index }: LinkButtonProps) {
  return (
    <a
      id={`link-${link.id}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button transition-interactive group relative flex w-full items-center gap-4 rounded-[var(--radius-button)] border border-border-soft bg-white/80 px-5 py-4 shadow-[var(--shadow-button)] backdrop-blur-sm hover:scale-[1.025] hover:border-primary-light/30 hover:bg-white hover:shadow-[var(--shadow-button-hover)] active:scale-[0.98] animate-fade-up"
      style={{ animationDelay: `${index * 80 + 100}ms` }}
      aria-label={link.description || link.title}
    >
      {/* Icon container */}
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-interactive group-hover:from-primary/20 group-hover:to-accent/20 group-hover:text-primary-dark">
        <Icon name={link.icon} size={20} />
      </span>

      {/* Text */}
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-[0.94rem] font-semibold leading-tight text-text-primary">
          {link.title}
        </span>
        {link.description && (
          <span className="text-xs font-medium text-text-muted">
            {link.description}
          </span>
        )}
      </span>

      {/* Arrow */}
      <span className="shrink-0 text-text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary">
        <Icon name="arrow-right" size={16} />
      </span>

      {/* Hover glow */}
      <span className="pointer-events-none absolute inset-0 rounded-[var(--radius-button)] bg-gradient-to-r from-primary/0 via-primary-light/0 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/3 group-hover:via-primary-light/5 group-hover:to-accent/3 group-hover:opacity-100" />
    </a>
  );
}
