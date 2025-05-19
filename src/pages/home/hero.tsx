import Section from "@/components/widget/section";
import HeroVideo from "@/assets/video/hero-first.mp4";
import HeroSecond from "@/assets/images/png/hero-second.png";
import HeroThird from "@/assets/images/png/hero-third.png";
import HeroFourth from "@/assets/images/png/hero-fourth.png";

export type Shape = "rounded" | "rectangle" | "diamond";

type HeroProps = {
  shape?: Shape;
};

const imageList = [
  { src: HeroVideo, alt: "Couple dining" },
  { src: HeroSecond, alt: "Fine dining" },
  { src: HeroThird, alt: "Elegant dining" },
  { src: HeroFourth, alt: "Restaurant patio" },
];

const shapeClassMap: Record<Shape, string> = {
  rounded: "rounded-t-[9999px]",
  rectangle: "rounded-none",
  diamond: "clip-diamond",
};

export default function Hero({ shape = "rounded" }: HeroProps) {
  const shapeClass = shapeClassMap[shape];

  return (
    <Section.Root className="col-full-width relative overflow-clip bg-gradient-to-b from-primary-200 to-white/0 pt-[15rem] pb-0">
      <div className="col-content z-10 place-items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {imageList.map(({ src, alt }, i) => {
            const isVideo = typeof src === "string" && src.endsWith(".mp4");
            return (
              <div
                key={i}
                className={`aspect-[7/10] w-full overflow-hidden ${shapeClass}`}
              >
                {isVideo ? (
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center my-15">
          <h2 className="text-[2.5rem] lg:text-[5.625rem] title-font text-[#C9A581] leading-none">
            The Gourmet
          </h2>
          <h2 className="text-[2.5rem] lg:text-[5.625rem] title-font text-[#C9A581] leading-none">
            Garden
          </h2>
          <p className="text-[18px] uppercase text-white mt-4">ESTD - 1990</p>
        </div>
      </div>
    </Section.Root>
  );
}
