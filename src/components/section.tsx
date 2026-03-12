type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
