import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import heroImage from "/images/hero-wedding.jpg";
import coupleImage from "/images/couple-shoot.jpg";
import babyImage from "/images/baby-shoot.jpg";
import ajayImage from "../assets/Ajay Karke.PNG";
import bholenathImage from "../assets/Bholenath Pawar.jpg";

const primary = "917721094206";
const secondary = "919209672955";
const instagram = "a_k_1260";
const whatsapp = (
  message = "Hi AB Creative, I'm interested in booking a photography session. Can you share more details?",
) => `https://wa.me/${primary}?text=${encodeURIComponent(message)}`;
const packages = [
  {
    title: "Wedding Shoot",
    price: "₹5,000",
    image: heroImage,
    features: ["Candid & traditional photography", "Wedding day coverage", "Edited photographs"],
  },
  {
    title: "Couple Shoot",
    price: "₹5,000",
    image: coupleImage,
    features: ["Natural couple portraits", "Pre-wedding option", "Edited photographs"],
  },
  {
    title: "Outdoor Shoot",
    price: "₹5,000",
    image: coupleImage,
    features: ["Location-based portraits", "Creative outdoor frames", "Edited photographs"],
  },
  {
    title: "Shop Opening",
    price: "₹3,000",
    image: heroImage,
    features: ["Event documentation", "Reels and photographs", "Opening day coverage"],
  },
  {
    title: "Baby Shoot",
    price: "₹5,000",
    image: babyImage,
    features: ["Gentle baby portraits", "Comfortable session", "Edited photographs"],
  },
  {
    title: "All Type Shoot",
    price: "Custom Package",
    image: heroImage,
    features: ["Personalized coverage", "Flexible shoot plan", "Photos and reels"],
  },
] as const;

const galleryItems = [
  [heroImage, "Wedding", "Indian wedding couple at golden hour"],
  [coupleImage, "Couple", "Couple portrait during golden hour"],
  [babyImage, "Baby", "Baby photography portrait"],
  [heroImage, "Events", "Warm event photography detail"],
  [coupleImage, "Portrait", "Natural couple portrait"],
  [babyImage, "Portrait", "Gentle portrait photography"],
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
        <h2 className="text-center font-serif text-4xl">What we shoot</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Choose a package that fits your moment, or ask us to build something custom.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map(({ title, price, image, features }) => (
            <article
              key={title}
              className="package-card flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <img
                src={image}
                alt=""
                width={600}
                height={400}
                loading="lazy"
                className="package-image aspect-[5/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-2xl font-semibold text-primary">{price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
                <a
                  href={whatsapp(
                    `Hi AB Creative, I would love to enquire about your ${title}. Please share the available dates, package details, and the next steps for booking.`,
                  )}
                  className="mt-5 inline-flex min-h-11 items-center font-semibold text-primary hover:underline"
                >
                  Book this package →
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
          {["All", "Wedding", "Couple", "Portrait", "Baby", "Events"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`min-h-11 shrink-0 rounded-full border px-4 ${filter === item ? "bg-primary text-primary-foreground" : "bg-card"}`}
            >
              {item}
            </button>
          ))}
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
  const questions = [
    "How early should I book?",
    "Do you travel outside the area?",
    "How many edited photos will I receive?",
    "How long does delivery take?",
    "Do you provide raw photographs?",
    "How do I confirm my booking?",
  ];
  return (
    <>
      <section id="why-us" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-serif text-4xl">The AB Creative difference</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason} className="rounded-2xl border border-border bg-card p-6">
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
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-serif text-4xl">How it works</h2>
          <div className="mt-10 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-2xl">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-serif text-4xl">Frequently asked</h2>
          <div className="mt-9 divide-y divide-border rounded-2xl border border-border bg-card px-5">
            {questions.map((question) => (
              <details key={question}>
                <summary className="flex min-h-14 cursor-pointer items-center justify-between py-4 font-medium">
                  {question}
                  <span className="text-2xl text-primary">+</span>
                </summary>
                <p className="pb-4 text-muted-foreground">
                  Message us on WhatsApp and we will share the details for your shoot.
                </p>
              </details>
            ))}
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
      phone: "+91 77210 94206",
      phoneLink: whatsapp(),
      instagram: "@a_k_1260",
      instagramLink: "https://www.instagram.com/a_k_1260",
    },
    {
      name: "Bholenath Pawar",
      image: bholenathImage,
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
                  <img
                    src={photographer.image}
                    alt={`Portrait of ${photographer.name}`}
                    width={800}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-[center_38%]"
                  />
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
