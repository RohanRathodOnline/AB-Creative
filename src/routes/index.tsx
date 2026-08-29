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
const youtube = "https://www.youtube.com/@TheHeaoneFilms";
const whatsapp = (
  message = "Hello, I’m interested in booking a photography session with AB Creative. I’d like to know more about your packages and availability.",
) => `https://wa.me/${primary}?text=${encodeURIComponent(message)}`;

const packages = [
  {
    icon: "💍",
    title: "Wedding Shoot",
    price: "₹6,999",
    image: "https://i.pinimg.com/1200x/44/d0/2a/44d02ac9cf7da7ca66a7c839a7781ef9.jpg",
    fallback: heroImage,
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
    image: "https://i.pinimg.com/736x/59/a6/7d/59a67df31f551ca23a89d658c3bff58c.jpg",
    fallback: coupleImage,
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
    image: "https://i.pinimg.com/736x/b2/ba/d7/b2bad7b2d278a9b15acdfdc49f4e095d.jpg",
    fallback: outdoorImage,
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
    image: "https://i.pinimg.com/736x/da/f7/3f/daf73f760bdc51e6ced57010ec726823.jpg",
    fallback: birthdayImage,
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
    image: "https://i.pinimg.com/736x/09/72/bf/0972bf31fa1c0577f8c10a41a325ec68.jpg",
    fallback: babyImage,
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
    image: "https://i.pinimg.com/736x/34/3a/1c/343a1ca1433b2a71d19464ffe0a20799.jpg",
    fallback: corporateImage,
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
    fallback: customImage,
    features: [
      "Personalized coverage",
      "Flexible shoot plan",
      "Requirements-based pricing",
    ],
    whatsappMessage:
      "Hello, I’m interested in the Custom Photography Package. I have a specific photography requirement and would like to discuss the shoot details, coverage, location, and pricing.",
  },
] as const;

type GalleryItem = [string, string, string];

const galleryItems: GalleryItem[] = [
  // Wedding
  [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop",
    "Wedding",
    "Indian wedding couple in traditional attire",
  ],
  [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fit=crop",
    "Wedding",
    "Bridal portrait with elegant jewellery",
  ],
  [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80&fit=crop",
    "Wedding",
    "Wedding ceremony moment",
  ],
  // Couple
  [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&fit=crop",
    "Couple",
    "Romantic couple portrait at golden hour",
  ],
  [
    "https://images.unsplash.com/photo-1595152772835-219674b2a163?w=800&q=80&fit=crop",
    "Couple",
    "Couple laughing together outdoors",
  ],
  [
    "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80&fit=crop",
    "Couple",
    "Intimate couple close-up portrait",
  ],
  // Outdoor
  [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop",
    "Outdoor",
    "Dramatic outdoor portrait in natural light",
  ],
  [
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80&fit=crop",
    "Outdoor",
    "Outdoor portrait with bokeh background",
  ],
  [
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80&fit=crop",
    "Outdoor",
    "Portrait in lush green outdoor setting",
  ],
  // Events
  [
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop",
    "Events",
    "Vibrant birthday celebration with candles",
  ],
  [
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80&fit=crop",
    "Events",
    "Joyful party celebration moment",
  ],
  [
    "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80&fit=crop",
    "Events",
    "Birthday cake cutting ceremony",
  ],
  // Baby
  [
    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80&fit=crop",
    "Baby",
    "Newborn baby sleeping peacefully",
  ],
  [
    "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80&fit=crop",
    "Baby",
    "Baby with soft natural light portrait",
  ],
  [
    "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80&fit=crop",
    "Baby",
    "Cute baby smiling during portrait session",
  ],
  // Corporate
  [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
    "Corporate",
    "Professional corporate team photography",
  ],
  [
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80&fit=crop",
    "Corporate",
    "High-end product photography on clean background",
  ],
  [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    "Corporate",
    "Modern office environment professional shoot",
  ],
];

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

function Nav({ onBook }: { onBook: () => void }) {
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
          <button
            type="button"
            onClick={onBook}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book Now
          </button>
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
function Hero({ onBook }: { onBook: () => void }) {
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
          <button
            type="button"
            onClick={onBook}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Book on WhatsApp
          </button>
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
function BookingModal({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [onClose]);

  const contacts = [
    {
      name: "Ajay Karke",
      role: "Lead Photographer",
      phone: "+91 77210 94206",
      link: `https://wa.me/${primary}?text=${encodeURIComponent(message)}`,
      avatar: "AK",
    },
    {
      name: "Bholenath Pawar",
      role: "Co-Photographer",
      phone: "+91 92096 72955",
      link: `https://wa.me/${secondary}?text=${encodeURIComponent(message)}`,
      avatar: "BP",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Choose a contact to book"
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-t-3xl sm:rounded-3xl bg-card p-6 shadow-2xl border border-border"
        style={{
          animation: "slideUpModal 0.32s cubic-bezier(0.34,1.26,0.64,1) both",
        }}
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Book via WhatsApp</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold">Choose a contact</h3>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/60 text-lg font-light transition-colors hover:bg-secondary"
          >
            ×
          </button>
        </div>

        {/* Contact cards */}
        <div className="space-y-3">
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-all hover:border-[#25D366]/60 hover:shadow-md"
            >
              {/* Avatar */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {c.avatar}
              </span>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-tight">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
                <p className="mt-0.5 text-sm font-medium text-primary">{c.phone}</p>
              </div>
              {/* WhatsApp icon */}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366] group-hover:text-white text-[#25D366]">
                <MessageCircle className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Tap a contact — your booking details will be pre-filled in WhatsApp.
        </p>
      </div>
    </div>
  );
}

function Services({ onBook }: { onBook: (msg: string) => void }) {
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
          {packages.map(({ icon, title, price, image, fallback, features, whatsappMessage }) => (
            <article
              key={title}
              className="package-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallback;
                  }}
                  className="package-image h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Emoji badge: hidden by default, slides in from left on hover */}
                <span
                  className="absolute left-3 top-3 inline-flex items-center rounded-full bg-background/90 px-3 py-1 text-sm font-medium shadow-sm backdrop-blur-md
                    opacity-0 -translate-x-6
                    transition-all duration-400 ease-out
                    group-hover:opacity-100 group-hover:translate-x-0"
                >
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
                <button
                  type="button"
                  onClick={() => onBook(whatsappMessage)}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-between rounded-xl bg-secondary/70 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book Now
                  </span>
                  <span>→</span>
                </button>
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
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (url: string) => {
    setFailedImages((prev) => new Set(prev).add(url));
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter out broken images first
  const workingItems = galleryItems.filter((item) => !failedImages.has(item[0]));

  // For "All": pick up to 1 per category to get a max of 6
  const categories = ["Wedding", "Couple", "Outdoor", "Events", "Baby", "Corporate"];
  const shown =
    filter === "All"
      ? (categories
          .map((cat) => workingItems.find((item) => item[1] === cat))
          .filter(Boolean) as GalleryItem[])
      : workingItems.filter((item) => item[1] === filter);

  return (
    <section id="work" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <h2 className="text-center font-serif text-4xl">Frames that feel like home</h2>
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 md:justify-center">
          {["All", ...categories].map((item) => (
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
              onClick={scrollToServices}
              className="portfolio-frame relative aspect-[4/5] overflow-hidden rounded-2xl text-left cursor-pointer"
              aria-label={`Book a ${item[1]} session`}
            >
              <img
                src={item[0]}
                alt={item[2]}
                width={600}
                height={750}
                loading="lazy"
                onError={() => handleImageError(item[0])}
                className="portfolio-image h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-8 text-sm text-white">
                {item[1]}
              </span>
            </button>
          ))}
        </div>
      </div>
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
      bio: "Wedding & portrait specialist with a passion for candid emotions and golden-hour frames.",
      phone: "+91 77210 94206",
      phoneLink: whatsapp(),
      instagram: "@a_k_1260",
      instagramLink: "https://www.instagram.com/a_k_1260",
    },
    {
      name: "Bholenath Pawar",
      image: bholenathImage,
      objectPosition: "object-center",
      bio: "Cinematic storyteller capturing couple sessions, events, and outdoor portraits with a creative eye.",
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

            {/* YouTube channel card */}
            <a
              href={youtube}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex min-h-12 items-center gap-3 rounded-full border border-border bg-background/60 px-6 font-semibold transition-all hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5 hover:shadow-md"
            >
              {/* YouTube icon */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[#FF0000] transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              {/* Text swap on hover */}
              <span className="relative inline-block overflow-hidden">
                <span className="block transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                  Watch on YouTube
                </span>
                <span className="absolute inset-0 flex items-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-[#FF0000]">
                  Subscribe
                </span>
              </span>
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Meet the team
            </p>
            <div className="mt-5 space-y-4">
              {photographers.map((photographer) => (
                <article
                  key={photographer.name}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-background p-4 sm:p-5 transition-shadow hover:shadow-md"
                >
                  {/* Square photo — left */}
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-muted/20 sm:h-28 sm:w-28">
                    <img
                      src={photographer.image}
                      alt={`Portrait of ${photographer.name}`}
                      loading="lazy"
                      className={`h-full w-full object-cover ${photographer.objectPosition}`}
                    />
                    {/* Vignette */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                  </div>

                  {/* Info — right */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl font-semibold leading-tight">{photographer.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mt-0.5">AB Creative Photographer</p>
                    <p className="mt-1.5 hidden sm:block text-sm text-muted-foreground leading-relaxed">{photographer.bio}</p>

                    {/* Contact buttons */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={photographer.phoneLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        WhatsApp
                      </a>
                      <a
                        href={photographer.instagramLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/10 px-3 py-1.5 text-xs font-semibold text-pink-500 transition-colors hover:bg-pink-500 hover:text-white"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                        Instagram
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
function StickyBooking({ onBook }: { onBook: () => void }) {
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
    <button
      type="button"
      onClick={onBook}
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
    </button>
  );
}
const DEFAULT_BOOKING_MSG =
  "Hello, I'm interested in booking a photography session with AB Creative. I'd like to know more about your packages and availability.";

function Index() {
  const [bookingMessage, setBookingMessage] = useState<string | null>(null);
  const openBooking = (msg = DEFAULT_BOOKING_MSG) => setBookingMessage(msg);

  return (
    <>
      <Nav onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <Services onBook={openBooking} />
        <Gallery />
        <SimpleSections />
        <Contact />
      </main>
      <footer className="border-t border-border py-9 text-center text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">AB Creative</p>
        <p className="mt-1">Wedding • Couple • Portrait • Event Photography</p>
        {/* Social links */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href={youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 hover:text-[#FF0000]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href={whatsapp()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366]"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-5">© {new Date().getFullYear()} AB Creative. All rights reserved.</p>
      </footer>
      <StickyBooking onBook={() => openBooking()} />
      {bookingMessage !== null && (
        <BookingModal
          message={bookingMessage}
          onClose={() => setBookingMessage(null)}
        />
      )}
    </>
  );
}
export default Index;
