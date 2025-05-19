import Section from "@/components/widget/section";
import Food from "@/assets/images/png/menu-food.png";
import Lemon from "@/assets/images/png/menu-lemon.png";
import Steaf from "@/assets/images/png/menu-steaf.png";
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
    <Section.Root className="col-full-width content-grid relative overflow-hidden">
      <div className="absolute inset-0 z-[10] pointer-events-none hidden md:flex">
        <img
          src={Food}
          alt="Appetizers"
          className="absolute top-20 left-20 w-[9.375rem] h-[12.5rem] rounded-b-full rounded-t-full object-cover"
        />
        <img
          src={Steaf}
          alt="Main Courses"
          className="absolute bottom-0 left-10 leaf-shape-45 object-cover"
        />
        <img
          src={Lemon}
          alt="Drinks"
          className="absolute top-1/3 right-20 w-[9.375rem] h-[12.5rem] rounded-tl-[50%] rounded-br-[50%] object-cover "
        />
      </div>

      <div className="col-content place-items-center">
        <p className="text-sm text-white">Explore by our cuisines</p>

        <div className="space-y-5 mx-auto my-10">
          {data.map((item, index) => (
            <div key={index} className="border-t border-brown-500 pt-5">
              <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[3.125rem] uppercase text-gray-500 title-font text-center">
                {item.title}
              </h2>
            </div>
          ))}
          <div className="border-t border-brown-500"></div>
        </div>

        <a href="/menu">
          <button className="border border-brown-500 text-white px-6 py-2 uppercase text-sm hover:bg-gray-800 transition duration-300">
            View All Menus
          </button>
        </a>
      </div>
    </Section.Root>
  );
}
