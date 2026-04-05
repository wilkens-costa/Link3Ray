export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-col items-center gap-2 pb-8 pt-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <p className="text-xs font-medium text-text-muted">
        © {year} Link3Ray — Todos os direitos reservados
      </p>
      <p className="text-[11px] text-text-muted/70">
        Desenvolvido por{" "}
        <a
          href="https://wa.me/5585986177778"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary/80 underline-offset-2 hover:text-primary hover:underline transition-colors duration-200"
        >
          Wilkens Costa
        </a>
      </p>
    </footer>
  );
}
