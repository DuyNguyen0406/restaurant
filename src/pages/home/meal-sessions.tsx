import Section from "@/components/widget/section";

export default function MealSessions() {
  return (
    <Section.Root className="col-full-width content-grid pt-0">
      <div className="flex flex-col md:flex-row flex-1 col-content items-center justify-between">
        <div className="flex flex-1 flex-col items-center space-y-3 p-8 ">
          <p className="text-[1.375rem] md:text-[1.875rem] text-white title-font uppercase">
            Lunch
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-gray-500">
            Monday-Wednesday: 11a-9p
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-gray-500">
            Thursday-Saturday: 11a-10p
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-3 p-8 border md:border-r-brown-500 md:border-l-brown-500">
          <p className="text-[1.375rem] md:text-[1.875rem] text-white title-font uppercase">
            Dinner
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-gray-500">
            Dinner Monday-Sunday
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-gray-500">
            18p – 11p{" "}
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-3 p-8">
          <p className="text-[1.375rem] md:text-[1.875rem] text-white title-font uppercase">
            Buffet
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-gray-500">
            Lunch & Dinner Monday-Sunday
          </p>
          <p className="text-[0.9375rem] md:text-[1.0625remm] text-primary">
            ""
          </p>
        </div>
      </div>
    </Section.Root>
  );
}
