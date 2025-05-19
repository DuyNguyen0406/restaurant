import Section from "@/components/widget/section";

const sessions = [
  {
    title: "Lunch",
    items: ["Monday-Wednesday: 11a-9p", "Thursday-Saturday: 11a-10p"],
    border: "",
    textColor: "text-gray-500",
  },
  {
    title: "Dinner",
    items: ["Dinner Monday-Sunday", "18p – 11p"],
    border: "border md:border-r-brown-500 md:border-l-brown-500",
    textColor: "text-gray-500",
  },
  {
    title: "Buffet",
    items: ["Lunch & Dinner Monday-Sunday", '""'],
    border: "",
    textColor: "text-primary",
  },
];

export default function MealSessions() {
  return (
    <Section.Root className="col-full-width content-grid pt-0">
      <div className="flex flex-col md:flex-row flex-1 col-content items-center justify-between">
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`flex flex-1 flex-col items-center space-y-3 p-8 ${session.border}`}
          >
            <p className="text-[1.375rem] md:text-[1.875rem] text-white title-font uppercase">
              {session.title}
            </p>
            {session.items.map((item, i) => (
              <p
                key={i}
                className={`text-[0.9375rem] md:text-[1.0625rem] ${session.textColor}`}
              >
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Section.Root>
  );
}
