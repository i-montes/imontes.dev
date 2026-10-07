const log = [
  { status: "ok", text: "next@16 inicializado" },
  { status: "ok", text: "dominio imontes.dev configurado" },
  { status: "run", text: "diseñando el sitio" },
  { status: "wait", text: "escribiendo contenido" },
];

const statusLabel = {
  ok: { label: "listo", className: "text-emerald-400" },
  run: { label: "en curso", className: "text-amber-300 animate-pulse" },
  wait: { label: "pendiente", className: "text-zinc-500" },
} as const;

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-[#0b0d10] font-mono text-zinc-300">
      {/* Cuadrícula tipo plano */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Cinta de precaución */}
      <div
        aria-hidden
        className="caution-tape relative h-3 w-full shrink-0 [background-image:repeating-linear-gradient(-45deg,#fbbf24_0_14px,#0b0d10_14px_28px)] [background-size:40px_40px]"
      />

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-12 px-6 py-20">
        <header className="flex flex-col gap-6">
          <span className="w-fit rounded-sm border border-amber-300/40 bg-amber-300/10 px-2 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
            En construcción
          </span>
          <h1 className="font-sans text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
            imontes<span className="text-amber-300">.dev</span>
          </h1>
          <p className="max-w-lg font-sans text-lg leading-8 text-zinc-400">
            Estoy levantando este sitio desde los cimientos. Pronto habrá
            proyectos, notas y otras cosas por aquí.
          </p>
        </header>

        <section
          aria-label="Estado de la obra"
          className="rounded-md border border-zinc-800 bg-zinc-950/80 shadow-2xl shadow-black/50 backdrop-blur"
        >
          <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="size-3 rounded-full bg-zinc-700" />
            <span className="ml-2 text-xs text-zinc-500">~/imontes.dev — build</span>
          </div>
          <ul className="flex flex-col gap-2 p-4 text-sm">
            {log.map((item) => {
              const s = statusLabel[item.status as keyof typeof statusLabel];
              return (
                <li key={item.text} className="flex items-baseline gap-3">
                  <span className={`w-20 shrink-0 ${s.className}`}>[{s.label}]</span>
                  <span>{item.text}</span>
                </li>
              );
            })}
            <li className="mt-2 flex items-center gap-2 text-zinc-500">
              <span className="text-amber-300">$</span>
              <span className="cursor-blink inline-block h-4 w-2 bg-zinc-300" />
            </li>
          </ul>
          <div className="px-4 pb-4">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
              <div className="progress-indeterminate h-full w-1/3 rounded-full bg-amber-300" />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative px-6 pb-8 text-center text-xs text-zinc-600">
        © 2026 I. Montes
      </footer>
    </div>
  );
}
