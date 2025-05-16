import Section from "@/components/widget/section";

const data: { title: string }[] = [
  {
    title: "Appetizers",
  },
  {
    title: "Main Courses",
  },
  {
    title: "Desserts",
  },
  {
    title: "Wine & Champagne",
  },
];

export default function Menu() {
  return (
    <Section.Root className="col-full-width content-grid lg:pt-0">
      <div className="col-content place-items-center">
        <p className="text-sm text-white ">Explore by our cuisines</p>

        <div className="space-y-5 mx-auto my-10">
          {data.map((item, index) => (
            <div key={index} className="border-t border-brown-500 pt-5">
              <h2 className="text-[24px] md:text-[36px] lg:text-[50px] uppercase text-gray-500 title-font text-center">
                {item.title}
              </h2>
            </div>
          ))}
          <div className="border-t border-brown-500"></div>
        </div>

        <div className="">
          <button className="border border-brown-500 text-white px-6 py-2 uppercase text-sm hover:bg-gray-800 transition duration-300">
            View All Menus
          </button>
        </div>
      </div>
    </Section.Root>
  );
}
