export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-col items-center gap-2 pb-8 pt-6">
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <p className="text-xs font-medium text-text-muted">
        © {year} Link3Ray — Todos os direitos reservados
      </p>
    </footer>
  );
}
