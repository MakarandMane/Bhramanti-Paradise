import { Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { BRAND, waLink } from "../lib/brand";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#FDFBF7] border-t border-[#E8E3DD] pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Giant brand mark */}
        <div className="mb-20">
          <h2 className="font-serif-display text-[15vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-[#2C2A29]">
            Bhramanti
            <em className="italic text-[#B67B50]"> Paradise.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E3DD]">
          {/* About */}
          <div className="md:col-span-5">
            <p className="overline text-[#B67B50]">About</p>
            <p className="mt-4 text-[#5C5A58] text-base leading-relaxed max-w-md">
              Bhramanti Paradise designs intentional, hand-crafted journeys for
              travelers who want more than a checklist. Slow travel, real
              places, quietly luxurious.
            </p>
            <div className="mt-6 flex items-start gap-2 text-[#5C5A58] text-sm">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{BRAND.address}</span>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="overline text-[#B67B50]">Explore</p>
            <ul className="mt-5 space-y-3">
              <FooterLink href="#destinations" label="Destinations" />
              <FooterLink href="#services" label="Services" />
              <FooterLink href="#testimonials" label="Stories" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="overline text-[#B67B50]">Get in touch</p>
            <ul className="mt-5 space-y-3 text-[#2C2A29] text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp-link"
                  className="hover:text-[#B67B50] transition-colors"
                >
                  WhatsApp — {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  data-testid="footer-phone-link"
                  className="hover:text-[#B67B50] transition-colors"
                >
                  Call {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  data-testid="footer-email-link"
                  className="hover:text-[#B67B50] transition-colors"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>

            <div className="mt-7 flex gap-3">
              <SocialIcon
                href="https://instagram.com"
                label="Instagram"
                Icon={Instagram}
              />
              <SocialIcon
                href="https://facebook.com"
                label="Facebook"
                Icon={Facebook}
              />
              <SocialIcon
                href="https://youtube.com"
                label="Youtube"
                Icon={Youtube}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[#5C5A58] text-xs">
          <p>© {new Date().getFullYear()} Bhramanti Paradise Tours. All rights reserved.</p>
          <p className="italic font-serif-display text-sm text-[#8C6A5D]">
            Wander beyond the ordinary.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, label }) => (
  <li>
    <a
      href={href}
      data-testid={`footer-link-${label.toLowerCase()}`}
      className="text-[#2C2A29] text-sm hover:text-[#B67B50] transition-colors"
    >
      {label}
    </a>
  </li>
);

const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={`social-${label.toLowerCase()}`}
    className="w-10 h-10 rounded-full bg-[#F4F0EA] border border-[#E8E3DD] flex items-center justify-center text-[#5C5A58] hover:bg-[#B67B50] hover:text-white hover:border-[#B67B50] transition-all"
  >
    <Icon className="w-4 h-4" strokeWidth={1.8} />
  </a>
);

export default Footer;
