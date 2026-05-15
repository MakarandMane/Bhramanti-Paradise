import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Bhramanti Paradise turned our Switzerland honeymoon into something out of a film. Every train, every chalet, every dinner — perfect.",
    name: "Ananya & Rohan Mehta",
    trip: "Switzerland · 10 days",
    img: "https://images.unsplash.com/photo-1664312572933-0563f14484a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxoYXBweSUyMHRvdXJpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzg4NzE3OTR8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "We've used three travel firms over the years. None come close. Kerala with Bhramanti felt private, slow, and completely thought through.",
    name: "Sara Iyer",
    trip: "Kerala backwaters · 7 days",
    img: "https://images.unsplash.com/photo-1455819760800-d2aa223b237a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHRvdXJpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzg4NzE3OTR8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "Visa was sorted in days. The Paris itinerary balanced museums with neighbourhoods locals love. They listen — that's rare.",
    name: "Daniel Kapoor",
    trip: "Paris · 6 days",
    img: "https://images.unsplash.com/photo-1492462543947-040389c4a66c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRvdXJpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3Nzg4NzE3OTR8MA&ixlib=rb-4.1.0&q=85",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative bg-[#FDFBF7] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="overline text-[#B67B50]">Traveler stories</p>
          <h2 className="font-serif-display mt-4 text-4xl sm:text-5xl md:text-6xl text-[#2C2A29] leading-[0.95] tracking-tight">
            What our travelers
            <br />
            <em className="italic text-[#8C6A5D]">come home saying.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, name, trip, img, index }) => (
  <div
    data-testid={`testimonial-card-${index}`}
    className="relative bg-[#F4F0EA] rounded-2xl p-8 md:p-10 border border-[#E8E3DD] card-lift flex flex-col"
  >
    <Quote
      className="absolute top-6 right-6 w-8 h-8 text-[#B67B50] opacity-40"
      strokeWidth={1.5}
    />

    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#B67B50] text-[#B67B50]"
        />
      ))}
    </div>

    <p className="font-serif-display italic text-[#2C2A29] text-xl md:text-[22px] leading-snug flex-1">
      "{quote}"
    </p>

    <div className="mt-8 pt-6 border-t border-[#E8E3DD] flex items-center gap-4">
      <img
        src={img}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <div className="text-[#2C2A29] font-medium text-sm">{name}</div>
        <div className="text-[#5C5A58] text-xs uppercase tracking-[0.14em] mt-1">
          {trip}
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
