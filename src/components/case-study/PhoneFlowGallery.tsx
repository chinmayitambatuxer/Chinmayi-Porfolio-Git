import { PhoneFrame } from "./PhoneShowcase";

export type PhoneFlowScreen = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type PhoneFlowRow = {
  screens: PhoneFlowScreen[];
};

type PhoneFlowGalleryProps = {
  rows: PhoneFlowRow[];
};

function gridColsForCount(count: number): string {
  switch (count) {
    case 6:
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";
    case 5:
      return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
    case 4:
      return "grid-cols-2 sm:grid-cols-4";
    default:
      return "grid-cols-2 sm:grid-cols-3";
  }
}

export function PhoneFlowGallery({ rows }: PhoneFlowGalleryProps) {
  return (
    <div className="space-y-14 md:space-y-20">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid items-start justify-items-center gap-x-3 gap-y-10 sm:gap-x-4 md:gap-y-12 ${gridColsForCount(row.screens.length)}`}
        >
            {row.screens.map((screen, screenIndex) => {
              const stagger = screenIndex % 2 === 1;

              return (
                <figure
                  key={`${screen.caption}-${screenIndex}`}
                  className={`flex w-full max-w-[10.5rem] flex-col sm:max-w-[11.5rem] lg:max-w-[12.5rem] ${
                    stagger ? "lg:mt-14 xl:mt-20" : ""
                  }`}
                >
                  <PhoneFrame
                    src={screen.src}
                    alt={screen.alt}
                    width={screen.width ?? 360}
                    height={screen.height ?? 760}
                    frameClassName="mx-auto w-full max-w-full shrink-0"
                  />
                  <figcaption className="mt-3 text-center">
                    <p className="text-xs font-semibold leading-snug text-ink md:text-sm">
                      {screen.caption}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
        </div>
      ))}
    </div>
  );
}
