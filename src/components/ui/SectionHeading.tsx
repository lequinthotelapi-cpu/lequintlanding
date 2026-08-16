type SectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  id,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-[640px] ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <span
        className={`mb-4 block h-[3px] w-9 bg-accent ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      <h2
        id={id}
        className="text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.5rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3.5 max-w-[58ch] text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
