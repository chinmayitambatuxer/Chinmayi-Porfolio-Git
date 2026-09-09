import Image from "next/image";

type BrainstormItem = {
  title: string;
  description: string;
  image: string;
};

type AirportBrainstormGridProps = {
  items: BrainstormItem[];
};

export function AirportBrainstormGrid({ items }: AirportBrainstormGridProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="flex items-stretch overflow-hidden rounded-xl bg-white shadow-[0_1px_3px_rgba(26,26,26,0.06)]"
        >
          <div className="flex flex-1 flex-col justify-center px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-[1.0625rem] font-bold leading-snug text-ink md:text-lg">
              {item.title}
            </h3>
            <p className="cs-body-sm mt-3 leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </div>

          <div className="relative w-[38%] max-w-[11rem] shrink-0 self-stretch sm:w-[36%]">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 38vw, 11rem"
              quality={95}
              unoptimized
              className="object-cover object-center"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
