const values = [
  {
    title: "Envíos a todo el país",
    description: "Recibí tu pedido estés donde estés, con seguimiento incluido.",
    icon: "shipping",
  },
  {
    title: "Atención personalizada",
    description: "Te ayudamos a elegir por WhatsApp antes, durante y después de la compra.",
    icon: "chat",
  },
  {
    title: "Productos seleccionados",
    description: "Cada pieza pasa por nuestras manos antes de llegar a las tuyas.",
    icon: "check",
  },
  {
    title: "Compra segura",
    description: "Tus datos y tu pago están protegidos en cada paso del proceso.",
    icon: "shield",
  },
];

export function ValueProps() {
  return (
    <section className="container-content py-14 sm:py-20">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
        {values.map((value) => (
          <div key={value.title} className="flex flex-col gap-3">
            <ValueIcon name={value.icon} className="h-7 w-7 text-cuero-600" />
            <div>
              <h3 className="font-display text-base text-espresso">{value.title}</h3>
              <p className="mt-1 text-sm text-cuero-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueIcon({ name, className }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;
  switch (name) {
    case "shipping":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" strokeLinejoin="round" />
          <circle cx="7.5" cy="18.5" r="1.6" />
          <circle cx="17.5" cy="18.5" r="1.6" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M4 5h16v11H9l-4 4V5z" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M8.5 12.5l2.3 2.3L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 3l7 3v6c0 5-3.4 8.2-7 9-3.6-.8-7-4-7-9V6l7-3z" strokeLinejoin="round" />
        </svg>
      );
  }
}
