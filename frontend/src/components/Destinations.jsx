import { MapPin, ArrowUpRight } from "lucide-react";
import { waLink } from "../lib/brand";

const DESTINATIONS = [
  {
    name: "Bali",
    country: "Indonesia",
    blurb: "Temple terraces, jungle villas, and slow island mornings.",
    url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc3ODg3MTc5NHww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-2 md:row-span-2",
    height: "h-[420px] md:h-full",
  },
  {
    name: "Switzerland",
    country: "Europe",
    blurb: "Alpine villages cradled in fresh snow.",
    url: "https://images.unsplash.com/photo-1607867283465-d6792016b481?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxzd2l0emVybGFuZCUyMGFscHMlMjB2aWxsYWdlfGVufDB8fHx8MTc3ODg3MTc5NHww&ixlib=rb-4.1.0&q=85",
    span: "",
    height: "h-[300px]",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    blurb: "Overwater villas above glass-clear lagoons.",
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMHdhdGVyJTIwdmlsbGF8ZW58MHx8fHwxNzc4ODcxNzk1fDA&ixlib=rb-4.1.0&q=85",
    span: "",
    height: "h-[300px]",
  },
  {
    name: "Kerala",
    country: "India",
    blurb: "Houseboats drifting through endless backwaters.",
    url: "https://images.unsplash.com/photo-1609828913552-f9138ed9e42d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBob3VzZWJvYXQlMjBiYWNrd2F0ZXJzfGVufDB8fHx8MTc3ODg3MTc5NHww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-2",
    height: "h-[300px]",
  },
  {
    name: "Dubai",
    country: "UAE",
    blurb: "Where the desert meets a skyline of light.",
    url: "https://images.unsplash.com/photo-1607414851776-f2fcc379fb48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBzdW5zZXR8ZW58MHx8fHwxNzc4ODcxNzk0fDA&ixlib=rb-4.1.0&q=85",
    span: "",
    height: "h-[300px]",
  },
  {
    name: "Paris",
    country: "France",
    blurb: "Cobbled cafés, museum mornings, golden hour by the Seine.",
    url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDB8fHx8MTc3ODg3MTc5NXww&ixlib=rb-4.1.0&q=85",
    span: "",
    height: "h-[300px]",
  },
  {
    name: "Kashmir",
    country: "India",
    blurb: "Shikaras on Dal Lake at the foot of the Himalayas.",
    url: "https://images.unsplash.com/photo-1564329494258-3f72215ba175?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwxfHxrYXNobWlyJTIwZGFsJTIwbGFrZSUyMHNoaWthcmF8ZW58MHx8fHwxNzc4ODcxNzk0fDA&ixlib=rb-4.1.0&q=85",
    span: "",
    height: "h-[300px]",
  },
  {
    name: "Rajasthan",
    country: "India",
    blurb: "Royal palaces, painted cities, desert evenings.",
    url: "https://images.unsplash.com/photo-1591946522651-90fbace43004?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzc4ODcxNzk0fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-2",
    height: "h-[300px]",
  },
];

export const Destinations = () => {
  return (
    <section
      id="destinations"
      data-testid="destinations-section"
      className="relative bg-[#FDFBF7] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="overline text-[#B67B50]">Featured · Destinations</p>
            <h2 className="font-serif-display mt-4 text-4xl sm:text-5xl md:text-6xl text-[#2C2A29] leading-[0.95] tracking-tight">
              Eight stories.
              <br />
              <em className="italic text-[#8C6A5D]">One on every horizon.</em>
            </h2>
          </div>
          <p className="text-[#5C5A58] md:max-w-sm text-base leading-relaxed">
            From the Himalayan foothills to overwater villas in the Indian
            Ocean — these are the journeys our travelers ask for again and
            again.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[300px_300px_300px_300px] gap-5">
          {DESTINATIONS.map((d) => (
            <DestinationCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ name, country, blurb, url, span, height }) => {
  const msg = encodeURIComponent(
    `Hello Bhramanti Paradise! I'm interested in your ${name} tour package. Could you share itinerary and pricing?`
  );
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`destination-card-${name.toLowerCase()}`}
      className={`group relative overflow-hidden rounded-2xl ${span} ${height} block`}
    >
      <img
        src={url}
        alt={`${name}, ${country}`}
        className="absolute inset-0 w-full h-full object-cover img-zoom"
        loading="lazy"
      />
      {/* Bottom gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {/* Top-right country tag */}
      <div className="absolute top-5 right-5 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-3 py-1 flex items-center gap-1.5">
        <MapPin className="w-3 h-3 text-white" strokeWidth={2.4} />
        <span className="text-white text-[11px] uppercase tracking-[0.16em] font-medium">
          {country}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
        <div className="flex items-end justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-serif-display text-white text-3xl md:text-4xl leading-none tracking-tight">
              {name}
            </h3>
            <p className="mt-3 text-white/85 text-sm leading-relaxed max-w-xs">
              {blurb}
            </p>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-[#B67B50] group-hover:border-[#B67B50] transition-all duration-500">
            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.2} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Destinations;
