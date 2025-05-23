import Section from "@/components/widget/section";
import Food from "@/assets/images/png/about-hero.png";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const [count, setCount] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 1;
          const target = 15;
          const interval = setInterval(() => {
            if (current <= target) {
              setCount(current);
              current++;
            } else {
              clearInterval(interval);
            }
          }, 50);
        }
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [hasAnimated]);
  return (
    <Section.Root className="col-full-width content-grid pt-[12rem] pb-[6rem] bg-[#0C1424] text-[#D6BFA6]">
      <div className="col-content flex flex-col items-center justify-between gap-12">
        <div className="w-full text-center ">
          <h2 className="text-[2.5rem] lg:text-[5rem] title-font text-[#C9A581]">
            Our Goals & History
          </h2>
        </div>
        <div className="relative md:w-1/2 w-full max-w-[31.25rem] aspect-[4/5] custom-clip overflow-hidden shadow-lg">
          <img src={Food} alt="food" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 w-16 h-16 bg-red-700 text-white text-[10px] flex flex-col items-center justify-center text-center rounded-full">
            MICHELIN
            <br />
            2024
          </div>

          <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-700 text-white text-[10px] flex flex-col items-center justify-center text-center rounded-full">
            MICHELIN
            <br />
            2023
          </div>

          <div className="absolute bottom-8 right-6 text-[#f0e6d2] text-3xl text-special-font">
            Bistro
          </div>
        </div>
        <div className="flex flex-1 items-center flex-col">
          <p className="text-2xl lg:text-[2.125rem] text-white text-center font-light ">
            The Rustic Fork - Farm-Fresh Fare,
            <span className="inline lg:block"> Elegantly Served.</span>
          </p>
          <p
            ref={numberRef}
            className="text-[2.5rem] lg:text-[5.625rem] text-[#C9A581] title-font"
          >
            +{count}
          </p>
          <p className="text-gray-500 text-[13px]">Years of experience</p>
        </div>
      </div>
    </Section.Root>
  );
}
