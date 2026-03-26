type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
