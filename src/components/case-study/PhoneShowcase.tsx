import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  frameClassName?: string;
};

export function PhoneFrame({
  src,
  alt,
  width = 390,
  height = 844,
  frameClassName,
}: PhoneFrameProps) {
  return (
    <div
      className={
        frameClassName ??
        "mx-auto w-full max-w-[220px] shrink-0 sm:max-w-[250px] md:max-w-[280px]"
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="block h-auto w-full"
        sizes="280px"
      />
    </div>
  );
}

type PhoneShowcaseProps = {
  title?: string;
  caption?: string;
  bullets?: string[];
  src: string;
  alt: string;
  width?: number;
  height?: number;
  accent: string;
};

export function PhoneShowcase({
  title,
  caption,
  bullets,
  src,
  alt,
  width,
  height,
  accent,
}: PhoneShowcaseProps) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
      <div className="max-w-xl">
        {title && <h2 className="cs-chapter-title">{title}</h2>}
        {caption && <p className="cs-body-sm mt-4">{caption}</p>}
        {bullets && bullets.length > 0 && (
          <ul className={`space-y-2.5 ${caption || title ? "mt-6" : ""}`}>
            {bullets.map((bullet) => (
              <li key={bullet} className="cs-body-sm flex gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                  aria-hidden
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      <PhoneFrame src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
