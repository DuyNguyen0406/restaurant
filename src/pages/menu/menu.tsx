import Section from "@/components/widget/section";
import MenuSpace from "@/assets/images/png/menu-space.png";

const menuData = [
  {
    title: "Starters",
    items: [
      {
        name: "French Onion Soup",
        price: "$10.0",
        description:
          "Rich beef broth, caramelized onions, and melted Gruyère cheese, served with a crusty baguette.",
      },
      {
        name: "French Onion Soup",
        price: "$10.0",
        description:
          "Rich beef broth, caramelized onions, and melted Gruyère cheese, served with a crusty baguette.",
      },
      {
        name: "French Onion Soup",
        price: "$10.0",
        description:
          "Rich beef broth, caramelized onions, and melted Gruyère cheese, served with a crusty baguette.",
      },
    ],
  },
  {
    title: "Main Courses",
    items: [
      {
        name: "Steak Frites",
        price: "$20.0",
        description:
          "Grilled ribeye steak served with crispy French fries and a side of peppercorn sauce.",
      },
      {
        name: "Coq au Vin",
        price: "$24.0",
        description:
          "Tender chicken slow-cooked in red wine with mushrooms, onions, and bacon, served with creamy mashed potatoes.",
      },
      {
        name: "Ratatouille",
        price: "$26.0",
        description:
          "A hearty and flavorful vegetable medley of eggplant, zucchini, tomatoes, and bell peppers, infused with herbs de Provence.",
      },
    ],
  },
];

function MenuItem({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description: string;
}) {
  return (
    <div className="w-full pt-4">
      <div className="flex justify-between items-center text-white text-xl pb-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
}

export default function Menu() {
  return (
    <Section.Root className="col-full-width content-grid bg-primary-100">
      <div className="col-content flex flex-col lg:flex-row items-center justify-center w-full max-w-[71.25rem] mx-auto gap-y-10 lg:gap-x-25">
        {menuData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex flex-1 flex-col items-center px-5 py-2.5 w-full"
          >
            <p className="text-[1.75rem] text-white font-light uppercase">
              {section.title}
            </p>
            <div className="w-5 h-6 mt-2 p-1">
              <img
                src={MenuSpace}
                alt="Menu Icon"
                className="w-full h-full object-cover"
              />
            </div>
            {section.items.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    </Section.Root>
  );
}
