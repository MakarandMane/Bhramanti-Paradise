import {
  Compass,
  Users,
  Sparkles,
  FileCheck,
  Plane,
  Hotel,
} from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Custom Itineraries",
    body:
      "Built around how you travel — pace, taste, and the moments that matter. No copy-paste schedules.",
  },
  {
    icon: Users,
    title: "Group & Family Tours",
    body:
      "Small, carefully matched groups. Family-friendly logistics. Memories that travel home together.",
  },
  {
    icon: Sparkles,
    title: "Luxury Escapes",
    body:
      "Private villas, butler service, helicopter transfers, Michelin tables — quiet luxury, end to end.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    body:
      "Documentation, embassy appointments, and follow-ups handled by our in-house desk.",
  },
  {
    icon: Plane,
    title: "Flights & Transfers",
    body:
      "Premium fares, lounge access, and on-arrival drivers — all coordinated through one concierge.",
  },
  {
    icon: Hotel,
    title: "Curated Stays",
    body:
      "Boutique hotels, heritage palaces, and design retreats — the kind of address you tell friends about.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-[#F4F0EA] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-20">
          <div className="lg:col-span-7">
            <p className="overline text-[#B67B50]">What we do</p>
            <h2 className="font-serif-display mt-4 text-4xl sm:text-5xl md:text-6xl text-[#2C2A29] leading-[0.95] tracking-tight">
              The whole journey,
              <br />
              <em className="italic text-[#8C6A5D]">quietly handled.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#5C5A58] text-base sm:text-lg leading-relaxed">
            We don't just sell trips. We design them — visas, flights, stays,
            guides, transfers — so all you have to do is arrive and be amazed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, body }) => (
  <div
    data-testid={`service-card-${title
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`}
    className="group bg-[#FDFBF7] rounded-2xl p-8 md:p-9 border border-[#E8E3DD] card-lift"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#F4F0EA] border border-[#E8E3DD] flex items-center justify-center mb-7 group-hover:bg-[#B67B50] group-hover:border-[#B67B50] transition-all duration-500">
      <Icon
        className="w-6 h-6 text-[#8C6A5D] group-hover:text-white transition-colors duration-500"
        strokeWidth={1.6}
      />
    </div>
    <h3 className="font-serif-display text-2xl md:text-[26px] text-[#2C2A29] leading-tight">
      {title}
    </h3>
    <p className="mt-3 text-[#5C5A58] text-sm sm:text-base leading-relaxed">
      {body}
    </p>
  </div>
);

export default Services;
