import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import heroImage from "/images/hero-wedding.jpg";
import coupleImage from "/images/couple-shoot.jpg";
import outdoorImage from "/images/outdoor-shoot.jpg";
import birthdayImage from "/images/birthday-events.jpg";
import babyImage from "/images/baby-shoot.jpg";
import corporateImage from "/images/corporate-product.jpg";
import customImage from "/images/custom-package.jpg";
import ajayImage from "../assets/Ajay Karke.PNG";
import bholenathImage from "../assets/Bholenath Pawar.jpg";

const primary = "917721094206";
const secondary = "919209672955";
const instagram = "a_k_1260";
const whatsapp = (
  message = "Hello, I’m interested in booking a photography session with AB Creative. I’d like to know more about your packages and availability.",
) => `https://wa.me/${primary}?text=${encodeURIComponent(message)}`;

const packages = [
  {
    icon: "💍",
    title: "Wedding Shoot",
    price: "₹6,999",
    image: heroImage,
    features: [
      "Wedding-day coverage",
      "Candid + traditional photography",
      "Edited photos",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Wedding Shoot Package (₹6,999). I’d like to know more about the wedding-day coverage, candid and traditional photography, edited photos, availability, and booking process.",
  },
  {
    icon: "❤️",
    title: "Couple / Pre-Wedding",
    price: "₹3,999",
    image: coupleImage,
    features: [
      "Couple portraits",
      "Pre-wedding session",
      "1–2 locations",
      "Edited photos",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Couple / Pre-Wedding Package (₹3,999). I’d like to know more about the couple portraits, locations, shoot duration, edited photographs, availability, and booking process.",
  },
  {
    icon: "🌿",
    title: "Outdoor Shoot",
    price: "₹2,999",
    image: outdoorImage,
    features: [
      "Outdoor portraits",
      "Creative frames",
      "1 location",
      "Edited photos",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Outdoor Shoot Package (₹2,999). I’d like to know more about the outdoor locations, portrait photography, shoot duration, edited photos, availability, and booking process.",
  },
  {
    icon: "🎂",
    title: "Birthday & Events",
    price: "₹2,999",
    image: birthdayImage,
    features: [
      "Event coverage",
      "Cake cutting",
      "Family/candid photos",
      "Edited photos",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Birthday & Events Package (₹2,999). I’d like to know more about the event coverage, candid moments, cake-cutting photography, family/group photos, availability, and booking process.",
  },
  {
    icon: "👶",
    title: "Baby & Newborn",
    price: "₹2,999",
    image: babyImage,
    features: [
      "Baby portraits",
      "Family photos",
      "Cute candid moments",
      "Edited photos",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Baby & Newborn Package (₹2,999). I’d like to know more about the baby portraits, family photographs, shoot setup, edited photos, availability, and booking process.",
  },
  {
    icon: "🏢",
    title: "Corporate / Product",
    price: "₹3,499",
    image: corporateImage,
    features: [
      "Professional photos",
      "Products/team shots",
      "Edited images",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Corporate / Product Package (₹3,499). I’d like to know more about the photography coverage, number of photos, requirements, availability, and booking process.",
  },
  {
    icon: "✨",
    title: "Custom Package",
    price: "Custom",
    image: customImage,
    features: [
      "Personalized coverage",
      "Flexible shoot plan",
      "Requirements-based pricing",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Custom Photography Package. I have a specific photography requirement and would like to discuss the shoot details, coverage, location, and pricing.",
  },
] as const;

const galleryItems = [
  [heroImage, "Wedding", "Indian wedding couple at golden hour"],
  [coupleImage, "Couple", "Couple portrait during golden hour"],
  [outdoorImage, "Outdoor", "Scenic outdoor portrait session in nature"],
  [birthdayImage, "Events", "Joyful birthday celebration with loved ones"],
  [babyImage, "Baby", "Baby and newborn gentle portrait photography"],
  [corporateImage, "Corporate", "High-end corporate and brand product photography"],
] as const;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AB Creative | Wedding, Couple & Event Photography" },
      {
        name: "description",
        content:
          "AB Creative - Your Moments. Our Frame. Professional wedding, couple, baby, outdoor, shop opening and custom photography shoots. Book via WhatsApp.",
      },
      { property: "og:title", content: "AB Creative | Wedding & Event Photography" },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Why Us", "#why-us"],
    ["Contact", "#contact"],
  ];
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out ${
        scrolled || open ? "bg-background/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <Link to="/">
          <img
            src="/images/ab-creative-logo.png"
            alt="AB Creative Photography"
            width={144}
            height={72}
            className="h-14 w-28 object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a key={href} href={href}>
              {name}
            </a>
          ))}
          <a
            href={whatsapp()}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book Now
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="h-11 w-11 rounded-full border border-border text-xl md:hidden"
        >
          {open ? "x" : "="}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map(([name, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center text-base"
            >
              {name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section className="relative flex min-h-[min(760px,100svh)] items-end overflow-hidden pb-12 pt-28 sm:items-center">
      <img
        src={heroImage}
        alt="Elegant Indian wedding couple at golden hour"
        width={1440}
        height={900}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <p className="mb-4 inline-flex rounded-full bg-accent/25 px-4 py-2 text-sm">
          Professional Photography
        </p>
        <h1 className="hero-title font-serif text-[clamp(3.25rem,14vw,7rem)] leading-[.95]">
          Your Moments.
          <br />
          <span className="italic text-primary">Our Frame.</span>
        </h1>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          Wedding • Couple • Portrait • Event Photography
        </p>
        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
          <a
            href={whatsapp()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book on WhatsApp
          </a>
          <a
            href="#work"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/20 bg-background/70 px-7"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Packages
          </p>
          <h2 className="mt-2 font-serif text-4xl">What we shoot</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose a package that fits your moment, or ask us to build something custom.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(({ icon, title, price, image, features, whatsappMessage }) => (
            <article
              key={title}
              className="package-card flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="package-image h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-sm font-medium shadow-sm backdrop-blur-md">
                  {icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-2xl font-bold text-primary">{price}</p>
                <div className="my-4 border-t border-border/70" />
                <ul className="flex-1 space-y-2.5 text-sm text-muted-foreground">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="font-bold text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsapp(whatsappMessage)}
                  className="mt-6 inline-flex min-h-11 items-center justify-between rounded-xl bg-secondary/70 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book Now
                  </span>
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const shown = galleryItems.filter((item) => filter === "All" || item[1] === filter);
  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [selected]);
  return (
    <section id="work" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="text-center font-serif text-4xl">Frames that feel like home</h2>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 md:justify-center">
          {["All", "Wedding", "Couple", "Outdoor", "Events", "Baby", "Corporate"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`min-h-11 shrink-0 rounded-full border px-4 ${filter === item ? "bg-primary text-primary-foreground" : "bg-card"}`}
              >
                {item}
              </button>
            ),
          )}
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3">
          {shown.map((item) => (
            <button
              key={`${item[1]}-${item[0]}`}
              type="button"
              onClick={() => setSelected(item)}
              className="portfolio-frame relative aspect-[4/5] overflow-hidden rounded-2xl text-left"
              aria-label={`View ${item[2]}`}
            >
              <img
                src={item[0]}
                alt={item[2]}
                width={600}
                height={750}
                loading="lazy"
                className="portfolio-image h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-sm text-white">
                {item[1]}
              </span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 h-11 w-11 rounded-full bg-card text-2xl"
          >
            x
          </button>
          <img
            src={selected[0]}
            alt={selected[2]}
            width={1200}
            height={1500}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[88vh] max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
function SimpleSections() {
  const reasons = [
    "Real emotions, real frames",
    "Budget-friendly packages",
    "Fast delivery, easy booking",
  ];
  const steps = [
    "Tell us your date",
    "Choose your package",
    "We capture your moments",
    "Receive your photos",
  ];
  const faqs = [
    {
      q: "How early should I book?",
      a: "We recommend booking at least 1–2 weeks in advance for portraits and 1–2 months in advance for weddings to secure your date.",
    },
    {
      q: "Do you travel outside the area?",
      a: "Yes! We are available for destination weddings, outstation events, and outdoor shoots across locations.",
    },
    {
      q: "How many edited photos will I receive?",
      a: "Each package includes high-resolution, professionally color-graded and edited photos delivered in a digital album.",
    },
    {
      q: "How long does delivery take?",
      a: "Sneak peek previews are shared within 2–3 days, and the full gallery of edited photos is delivered within 7–10 days.",
    },
    {
      q: "Do you provide raw photographs?",
      a: "Yes, raw images and reel clips can be shared upon request depending on your package.",
    },
    {
      q: "How do I confirm my booking?",
      a: "Tap any WhatsApp button on this page, let us know your preferred shoot date and package, and we'll confirm your slot immediately.",
    },
  ];

  return (
    <>
      <section id="why-us" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="text-center font-serif text-4xl">The AB Creative difference</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-serif text-2xl">{reason}</h3>
                <p className="mt-3 text-muted-foreground">
                  Thoughtful photography, clear packages, and a simple booking experience.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-start">
            {/* How it works */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Seamless Experience
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">How it works</h2>
              <p className="mt-3 text-muted-foreground">
                From initial conversation to album delivery, we make every step simple and memorable.
              </p>
              <div className="mt-8 space-y-3.5">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-transform hover:translate-x-1"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium">{step}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently asked */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Got Questions?
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Frequently asked</h2>
              <p className="mt-3 text-muted-foreground">
                Quick answers to common questions about our packages, scheduling, and delivery.
              </p>
              <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card px-5 shadow-sm">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-4 font-medium transition-colors hover:text-primary">
                      <span>{q}</span>
                      <span className="ml-3 text-2xl font-light text-primary transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Contact() {
  const photographers = [
    {
      name: "Ajay Karke",
      image: ajayImage,
      objectPosition: "object-[center_35%]",
      phone: "+91 77210 94206",
      phoneLink: whatsapp(),
      instagram: "@a_k_1260",
      instagramLink: "https://www.instagram.com/a_k_1260",
    },
    {
      name: "Bholenath Pawar",
      image: bholenathImage,
      objectPosition: "object-center",
      phone: "+91 92096 72955",
      phoneLink: `https://wa.me/${secondary}`,
      instagram: "@pawar._.cinematic",
      instagramLink: "https://www.instagram.com/pawar._.cinematic",
    },
  ];

  return (
    <section id="contact" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-card p-6 shadow-xl sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get in touch
            </p>
            <h2 className="mt-3 font-serif text-4xl">Let's capture something beautiful</h2>
            <p className="mt-4 text-muted-foreground">
              Ready to book? Send us a message on WhatsApp and we will reply with packages,
              availability and ideas.
            </p>
            <a
              href={whatsapp()}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Check availability on WhatsApp
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet the team
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {photographers.map((photographer) => (
                <article
                  key={photographer.name}
                  className="overflow-hidden rounded-2xl border border-border bg-background"
                >
                  <div className="aspect-square w-full overflow-hidden bg-muted/20">
                    <img
                      src={photographer.image}
                      alt={`Portrait of ${photographer.name}`}
                      loading="lazy"
                      className={`h-full w-full object-cover ${photographer.objectPosition}`}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl font-semibold">{photographer.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">AB Creative Photographer</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <a
                        href={photographer.phoneLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-border p-3 transition-colors hover:border-primary/40"
                      >
                        <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
                          WhatsApp
                        </span>
                        <strong className="mt-1 block text-sm">{photographer.phone}</strong>
                      </a>
                      <a
                        href={photographer.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-border p-3 transition-colors hover:border-primary/40"
                      >
                        <span className="block text-xs font-semibold uppercase tracking-widest text-primary">
                          Instagram
                        </span>
                        <strong className="mt-1 block text-sm">{photographer.instagram}</strong>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function StickyBooking() {
  const [visible, setVisible] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition > window.innerHeight * 0.8);
      setCompact(scrollPosition > window.innerHeight * 1.2);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return (
    <a
      href={whatsapp()}
      aria-label="Book on WhatsApp"
      className={`group whatsapp-float fixed bottom-4 z-40 flex h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-500 ease-out hover:bg-[#1ebe5b] hover:shadow-2xl md:hidden ${compact ? "left-4 w-14 min-[430px]:left-5" : "inset-x-4 gap-3"}`}
    >
      <MessageCircle
        className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:scale-110"
        aria-hidden="true"
      />
      <span
        className={`overflow-hidden whitespace-nowrap font-semibold transition-all duration-300 ${compact ? "max-w-0 opacity-0" : "max-w-48 opacity-100"}`}
      >
        WhatsApp Us
      </span>
    </a>
  );
}
function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <SimpleSections />
        <Contact />
      </main>
      <footer className="border-t border-border py-9 text-center text-sm text-muted-foreground">
        AB Creative
        <br />
        Wedding • Couple • Portrait • Event Photography
        <br />© {new Date().getFullYear()} AB Creative. All rights reserved.
      </footer>
      <StickyBooking />
    </>
  );
}
export default Index;
