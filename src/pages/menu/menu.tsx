import Section from "@/components/widget/section";

export default function Menu() {
  return (
    <Section.Root className="col-full-width content-grid">
      <div className="col-content items-center justify-center flex flex-1 flex-col md:flex-row">
        <div className="flex flex-col flex-1 w-full bg-amber-300">
          <h2></h2>
        </div>
        <div className="flex flex-col flex-1 w-full bg-blue-400">123</div>
      </div>
    </Section.Root>
  );
}
