"use client";

import {
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  Dumbbell,
  FileDown,
  Home,
  Mail,
  MapPin,
  ParkingCircle,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  TrendingUp,
  Waves
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const bayutGreen = "#00A862";

type IconItem = [label: string, icon: LucideIcon];
type InfoRow = [label: string, value: string];
type TransactionRow = [building: string, type: string, sqft: string, price: string];

const features: IconItem[] = [
  ["Open Plan Kitchen", Home],
  ["898 SqFt", Building2],
  ["1 Bedroom", BedDouble],
  ["2 Bathrooms", Bath],
  ["Parking", ParkingCircle],
  ["Furnished", Sofa],
  ["Marina Views", Waves],
  ["Swimming Pools", Waves],
  ["Gym", Dumbbell],
  ["Padel Court", Check],
  ["Squash Court", Check],
  ["Basketball Courts", Check]
];

const infoRows: InfoRow[] = [
  ["Type", "Apartment"],
  ["Purpose", "For Rent"],
  ["Furnishing", "Furnished"],
  ["Added On", "24 April 2026"],
  ["Ownership", "Freehold"],
  ["Balcony", "Yes"],
  ["Completion", "Ready"],
  ["Building", "Marina Gate 1"],
  ["Area", "Dubai Marina"],
  ["Reference", "HL-1842"]
];

const amenityRows: IconItem[] = [
  ["Furnished", Sofa],
  ["Parking", Car],
  ["Balcony", Building2],
  ["Lobby", Home],
  ["Reception", ShieldCheck],
  ["Gym", Dumbbell],
  ["Swimming Pool", Waves],
  ["Kids Area", Sparkles],
  ["BBQ", Check],
  ["Central AC", Check]
];

const transactions: TransactionRow[] = [
  ["Marina Gate 1", "1 Bed", "881", "124,000"],
  ["Marina Gate 2", "1 Bed", "905", "132,000"],
  ["Jumeirah Living", "1 Bed", "835", "127,500"],
  ["Silverene Tower", "1 Bed", "910", "119,000"]
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-8 w-8 place-items-center rounded-md bg-bayut text-[15px] font-black text-white">
        B
      </div>
      <div className={light ? "text-white" : "text-ink"}>
        <div className="text-[19px] font-black leading-none tracking-tight">bayut</div>
        <div className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.18em] opacity-70">Profolio</div>
      </div>
    </div>
  );
}

function BayutWordmark({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 ${light ? "text-white" : "text-[#18835F]"}`}>
      <div className="grid h-[16px] w-[16px] place-items-center rounded-full border-[3px] border-current text-[8px] font-black leading-none">
        b
      </div>
      <div className="text-[20px] font-black leading-none tracking-[-0.06em]">bayut</div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="sticky top-0 z-30 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1122px] items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <Logo />
          <div className="h-6 w-px bg-line" />
          <div>
            <div className="text-sm font-bold text-ink">Buyer Report</div>
            <div className="text-[11px] font-medium text-muted">Marina Gate 1, Dubai Marina</div>
          </div>
        </div>
        <button className="inline-flex h-10 items-center gap-2 rounded-md bg-bayut px-4 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-sm">
          <FileDown size={16} />
          Download PDF
        </button>
      </div>
    </div>
  );
}

function PdfPage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`pdf-page ${className}`}>{children}</section>;
}

function MetaPill({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex min-w-[86px] items-center gap-2 rounded-lg border border-white/20 bg-white/12 px-3 py-2 text-white backdrop-blur-sm">
      <Icon size={16} />
      <div>
        <div className="text-[8px] font-bold uppercase tracking-[0.14em] opacity-70">{label}</div>
        <div className="text-[12px] font-bold">{value}</div>
      </div>
    </div>
  );
}

function PageHeader({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (
    <div>
      <div className="section-label">{label}</div>
      <h2 className="mt-3 max-w-[620px] text-[34px] font-black leading-[1.04] tracking-tight text-ink">{title}</h2>
      {children}
    </div>
  );
}

function CoverPage() {
  return (
    <PdfPage className="cover-page">
      <div className="flex h-full flex-col">
        <div className="relative flex-1">
          <img src="https://images.bayut.com/thumbnails/832629684-1066x800.webp" alt="" className="image-frame" />
          <div className="cover-overlay absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-between px-[24px] pb-[22px] pt-[20px]">
            <div>
              <BayutWordmark />
              <h1 className="mt-[15px] text-[21px] font-black leading-none tracking-[-0.03em] text-white">Buyer Report</h1>
              <div className="mt-1.5 text-[7px] font-black uppercase tracking-[0.14em] text-white/85">Powered by Bayut Profolio</div>
            </div>
            <div className="max-w-[560px] text-white">
              <h2 className="text-[24px] font-black leading-[0.98] tracking-[-0.035em]">Marina Gate 1,</h2>
              <div className="mt-1.5 text-[19px] font-black leading-none tracking-[-0.025em]">Marina Gate, Dubai Marina, Dubai</div>
              <div className="mt-[19px] text-[28px] font-black leading-none tracking-[-0.035em]">AED 125,000</div>
              <div className="mt-0.5 text-[14px] font-extrabold leading-none">Yearly</div>
              <div className="mt-[20px] flex gap-[18px]">
                {[
                  ["1 Bedroom", BedDouble],
                  ["2 Bathrooms", Bath],
                  ["898 Sq.Ft", Building2],
                  ["Furnished", Sofa],
                  ["1 Parking Space", Car]
                ].map(([label, Icon]) => (
                  <div key={label as string} className="flex items-center gap-1 text-[8px] font-black text-white">
                    <Icon size={10} strokeWidth={2.3} />
                    {label as string}
                  </div>
                ))}
              </div>
              <button className="mt-[21px] inline-flex h-[32px] items-center gap-2 rounded bg-bayut px-[18px] text-[8px] font-black text-white">
                View on Bayut Live
                <ChevronRight size={11} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-[48px] items-center justify-between bg-white px-[24px]">
          <div>
            <div className="text-[7px] font-bold leading-none text-slate-500">Prepared for Buyer</div>
            <div className="mt-1 text-[7px] font-bold leading-none text-slate-500">24 April 2026</div>
          </div>
          <div className="text-right">
            <div className="text-[17px] font-black leading-none tracking-[-0.035em] text-[#147454]">Home & Living</div>
            <div className="mt-1 text-[5px] font-black uppercase tracking-[0.22em] text-slate-500">Real Estate</div>
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function OverviewPage() {
  const leftFeatures = [
    "Open Plan Kitchen and Living",
    "1 Bedroom",
    "1 Parking Space",
    "Exceptional Facilities",
    "Marina Views",
    "Gyms",
    "Squash Court",
    "Jumeirah Living Hotel"
  ];
  const rightFeatures = [
    "898 SqFt",
    "2 Bathrooms",
    "Furnished",
    "Superb Location",
    "Swimming Pools",
    "Padel Court",
    "Basketball / Football Courts",
    "Amara Lounge"
  ];

  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="grid h-full grid-cols-[58.4%_41.6%] gap-7 bg-white px-12 py-10">
        <div className="pt-1">
          <div className="section-label">Property Overview</div>
          <h2 className="mt-6 max-w-[420px] text-[40px] font-black leading-[1.05] tracking-[-0.04em] text-ink">
            Premium Marina Living
            <br />
            at Marina Gate 1
          </h2>
          <p className="mt-6 max-w-[475px] text-[16px] font-semibold leading-[1.62] text-[#5D6673]">
            Home and Living is proud to offer this property for rent, located in one of the most sought-after residential
            buildings in Dubai Marina. This Marina Gate property is spacious, featuring stunning marina views and
            high-quality finishings.
          </p>
          <div className="mt-[42px] grid w-[502px] grid-cols-2 gap-x-[30px] rounded-[18px] border border-[#EEF0F2] bg-[#F4F6F7] px-7 py-[29px]">
            {[leftFeatures, rightFeatures].map((column, index) => (
              <div key={index} className="grid gap-[18px]">
                {column.map((item) => (
                  <div key={item} className="flex items-center gap-[11px] text-[13px] font-extrabold leading-tight text-[#2F3844]">
                    <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border-[1.8px] border-bayut">
                      <span className="h-[5px] w-[5px] rounded-full bg-bayut" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid h-[670px] content-start grid-rows-[210px_210px_210px] gap-5">
          {[
            "https://images.bayut.com/thumbnails/832232386-1066x800.webp",
            "https://images.bayut.com/thumbnails/832232387-1066x800.webp",
            "https://images.bayut.com/thumbnails/832232389-1066x800.webp"
          ].map((src) => (
            <div key={src} className="overflow-hidden rounded-[13px] bg-slate-100 shadow-card">
              <img src={src} alt="" className="image-frame" />
            </div>
          ))}
        </div>
      </div>
    </PdfPage>
  );
}

function GalleryPage() {
  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="h-full bg-white px-[34px] py-[32px]">
        <div className="section-label">Property Gallery</div>
        <div className="mt-[18px] grid h-[420px] grid-cols-[1.16fr_.86fr] grid-rows-[222px_184px] gap-[14px]">
          <div className="overflow-hidden rounded-xl bg-slate-100 shadow-card">
            <img src="https://images.bayut.com/thumbnails/832232391-1066x800.webp" alt="" className="image-frame" />
          </div>
          <div className="row-span-2 overflow-hidden rounded-xl bg-slate-100 shadow-card">
            <img src="https://images.bayut.com/thumbnails/832232390-1066x800.webp" alt="" className="image-frame" />
          </div>
          <div className="grid grid-cols-3 gap-[14px]">
            {[
              "https://images.bayut.com/thumbnails/832232392-1066x800.webp",
              "https://images.bayut.com/thumbnails/832232395-1066x800.webp",
              "https://images.bayut.com/thumbnails/832629681-1066x800.webp"
            ].map((src) => (
              <div key={src} className="overflow-hidden rounded-xl bg-slate-100 shadow-card">
                <img src={src} alt="" className="image-frame" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[18px] h-[270px] overflow-hidden rounded-xl bg-slate-100 shadow-card">
          <img src="https://images.bayut.com/thumbnails/832629682-1066x800.webp" alt="" className="image-frame" />
        </div>
      </div>
    </PdfPage>
  );
}

function AiValuationPage() {
  const summaryCards = [
    "High rental demand for 1-bedroom units in Marina Gate with limited inventory.",
    "Priced competitively within 2.4% of market benchmark.",
    "Premium lifestyle with world-class facilities and marina views.",
    "Low negotiation margin indicates strong market confidence."
  ];
  const miniCards = [
    ["Pricing Positioning", "Highly Competitive", "Within 2.4% of benchmark valuation."],
    ["Annual Potential", "~6.5% Net Yield", "Based on current Marina Gate rentals."],
    ["Market Sentiment", "Strong Buy/Rent", "High demand for Select Group buildings."]
  ];

  return (
    <PdfPage className="mt-4 !aspect-[1066/800]">
      <div className="h-full bg-white px-[38px] py-[30px]">
        <div className="section-label">AI Summary</div>
        <div className="mt-4 grid w-[514px] grid-cols-2 gap-3">
          {summaryCards.map((text) => (
            <div key={text} className="flex h-[58px] items-start gap-2.5 rounded-xl border border-[#EEF0F2] bg-[#FBFCFD] px-[14px] py-3 text-[11px] font-extrabold leading-[1.35] text-[#343E4B] shadow-sm">
              <span className="mt-0.5 grid h-[13px] w-[13px] shrink-0 place-items-center rounded-full border-2 border-bayut">
                <span className="h-[5px] w-[5px] rounded-full bg-bayut" />
              </span>
              {text}
            </div>
          ))}
        </div>
        <div className="mt-[18px] rounded-2xl border border-[#E7E9ED] bg-white px-[30px] py-6 shadow-card">
          <div className="text-center">
            <div className="section-label">TruEstimate™ Valuation</div>
            <h2 className="mt-2 text-[28px] font-black leading-none tracking-[-0.03em] text-ink">Pricing Alignment &amp; Benchmark</h2>
            <p className="mt-2 text-[12px] font-bold text-[#7A8491]">How this property compares to current market benchmarks in Dubai Marina Gate 1.</p>
          </div>
          <div className="mx-auto mt-5 grid h-[154px] max-w-[660px] grid-cols-4 items-end gap-11">
            {[
              ["Market Low", "115K", "h-[86px] bg-[#E8ECEF]"],
              ["TruEstimate™", "122K", "h-[108px] bg-bayut"],
              ["This Listing", "125K", "h-[118px] bg-ink"],
              ["Market High", "135K", "h-[86px] bg-[#E8ECEF]"]
            ].map(([label, value, classes]) => (
              <div key={label} className="text-center">
                <div className="h-7 text-[10px] font-black leading-tight text-[#8A93A0]">{label}</div>
                <div className="mt-1 text-[20px] font-black leading-none text-ink">{value}</div>
                <div className={`mx-auto mt-2 w-12 rounded-t-xl rounded-b ${classes}`} />
              </div>
            ))}
          </div>
          <div className="mt-[18px] grid grid-cols-3 gap-[14px]">
            {miniCards.map(([title, value, desc]) => (
              <div key={title} className="rounded-xl border border-[#EEF0F2] bg-[#FBFCFD] px-4 py-[14px]">
                <div className="text-[9px] font-black uppercase tracking-[0.11em] text-[#8A93A0]">{title}</div>
                <div className="mt-1.5 text-[16px] font-black text-ink">{value}</div>
                <div className="mt-1 text-[10px] font-bold leading-[1.35] text-muted">{desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[18px] grid grid-cols-[1.22fr_.78fr] gap-4">
          <div className="h-[204px] rounded-[14px] border border-[#E7E9ED] bg-white px-[18px] py-4 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[18px] font-black text-ink">Price Trend</div>
                <div className="mt-1 text-[10px] font-extrabold text-[#8A93A0]">Rental performance in Marina Gate</div>
              </div>
              <div className="flex h-6 items-center rounded-full bg-emerald-50 px-3 text-[10px] font-black text-bayut">1 Year</div>
            </div>
            <svg className="mt-2.5 h-32 w-full" viewBox="0 0 560 150" aria-label="Price trend chart">
              <g stroke="#EEF0F2" strokeWidth="1"><line x1="0" x2="560" y1="28" y2="28" /><line x1="0" x2="560" y1="64" y2="64" /><line x1="0" x2="560" y1="100" y2="100" /><line x1="0" x2="560" y1="136" y2="136" /></g>
              <path d="M8 124 C58 116 86 121 128 103 C176 82 205 92 250 76 C299 58 322 68 365 49 C410 29 436 45 475 31 C512 17 534 22 552 12 L552 142 L8 142 Z" fill="rgba(0,168,98,.12)" />
              <path d="M8 124 C58 116 86 121 128 103 C176 82 205 92 250 76 C299 58 322 68 365 49 C410 29 436 45 475 31 C512 17 534 22 552 12" fill="none" stroke={bayutGreen} strokeWidth="4" strokeLinecap="round" />
              <g fill="#9AA3AF" fontSize="9" fontWeight="700"><text x="0" y="149">May 2025</text><text x="247" y="149">Oct 2025</text><text x="505" y="149">Apr 2026</text></g>
            </svg>
          </div>
          <div className="h-[204px] rounded-[14px] border border-[#E7E9ED] bg-white px-[18px] py-4 shadow-sm">
            <div className="text-[18px] font-black text-ink">Market Insights</div>
            <div className="mt-2.5 grid gap-2">
              {[
                ["Demand Trend", "Very High", "Increased interest in furnished units.", "+12.4%"],
                ["Negotiation Margin", "1.5% - 2.0%", "Tight margins indicate strong pricing.", ""],
                ["Rental Demand Score", "9.4/10", "Exceptional performance in its tier.", ""]
              ].map(([name, value, text, badge]) => (
                <div key={name} className="min-h-[46px] rounded-[10px] border border-[#EEF0F2] bg-[#FBFCFD] px-[11px] py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.08em] text-[#8A93A0]">{name}</div>
                      <div className="mt-1 text-[15px] font-black text-ink">{value}</div>
                    </div>
                    {badge ? <div className="flex h-[19px] items-center rounded-full bg-emerald-50 px-2 text-[9px] font-black text-bayut">{badge}</div> : null}
                  </div>
                  <div className="mt-0.5 text-[9px] font-bold text-muted">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function InsightCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="report-card p-5">
      <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-bayut">
        <TrendingUp size={17} />
      </div>
      <div className="text-[15px] font-black text-ink">{title}</div>
      <p className="mt-2 text-[12px] font-semibold leading-5 text-muted">{text}</p>
    </div>
  );
}

function ValuationPage() {
  return (
    <PdfPage>
      <div className="flex h-full flex-col p-[48px]">
        <PageHeader label="AI Summary" title="This 1-bedroom apartment in Marina Gate 1 offers strong rental competitiveness">
          <p className="mt-5 max-w-[860px] text-[15px] font-medium leading-7 text-muted">
            The listing benefits from strong location demand, furnished presentation, premium tower amenities, and a
            pricing position that sits within the expected upper-mid market band for comparable Dubai Marina apartments.
          </p>
        </PageHeader>
        <div className="mt-7 grid grid-cols-4 gap-4">
          <InsightCard title="High rental demand" text="Dubai Marina remains one of the most searched rental districts for professionals." />
          <InsightCard title="Competitive pricing" text="Asking rent is aligned with comparable furnished listings in the tower cluster." />
          <InsightCard title="Premium lifestyle" text="Amenity access and marina proximity strengthen lifestyle value." />
          <InsightCard title="Low negotiation margin" text="Strong demand and limited quality stock reduce expected discounting." />
        </div>
        <div className="mt-8 flex-1 rounded-xl border border-line bg-mist p-7">
          <div className="text-center">
            <div className="section-label">TruEstimate Valuation Section</div>
            <h3 className="mt-2 text-[28px] font-black tracking-tight">Pricing Alignment & Benchmark</h3>
          </div>
          <div className="mx-auto mt-10 max-w-[780px]">
            <div className="relative h-[126px]">
              <div className="price-bar absolute left-0 right-0 top-[54px] h-4 rounded-full" />
              {[
                ["Market Low", "112K", "12%"],
                ["TruEstimate", "123K", "47%"],
                ["This Listing", "125K", "56%"],
                ["Market High", "142K", "92%"]
              ].map(([label, value, left]) => (
                <div key={label} className="absolute top-0 -translate-x-1/2 text-center" style={{ left }}>
                  <div className="mx-auto h-[68px] w-[3px] rounded-full bg-ink" />
                  <div className={label === "This Listing" ? "mt-2 text-[13px] font-black text-bayut" : "mt-2 text-[12px] font-black text-ink"}>
                    {value}
                  </div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["Pricing Positioning", "Within fair market range"],
              ["Annual Potential Yield", "4.7% projected gross yield"],
              ["Market Sentiment", "Positive, landlord-led"]
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-line bg-white p-5">
                <div className="text-[14px] font-black">{title}</div>
                <div className="mt-2 text-[12px] font-semibold text-muted">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function MarketPage() {
  return (
    <PdfPage>
      <div className="grid h-full grid-cols-[57%_43%] gap-7 p-[44px]">
        <div>
          <PageHeader label="Property Information" title="Listing, Building & Feature Details" />
          <div className="mt-7 grid grid-cols-2 overflow-hidden rounded-xl border border-line">
            {infoRows.map(([key, value]) => (
              <div key={key} className="flex min-h-12 items-center justify-between border-b border-line px-4 last:border-b-0 even:border-l">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">{key}</span>
                <span className="text-[13px] font-black text-ink">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-5 gap-3">
            {amenityRows.map(([label, Icon]) => (
              <div key={label} className="report-card grid h-[72px] place-items-center p-2 text-center">
                <Icon size={17} className="text-bayut" />
                <div className="text-[10px] font-black leading-tight text-ink">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <div className="section-label">Rental Transactions</div>
            <div className="mt-3 overflow-hidden rounded-xl border border-line">
              <div className="grid grid-cols-[1.5fr_.7fr_.7fr_.9fr] bg-mist px-4 py-3 text-[10px] font-black uppercase tracking-[0.13em] text-muted">
                <div>Building</div><div>Type</div><div>SqFt</div><div className="text-right">AED</div>
              </div>
              {transactions.map((row) => (
                <div key={row.join("")} className="grid grid-cols-[1.5fr_.7fr_.7fr_.9fr] border-t border-line px-4 py-3 text-[12px] font-bold">
                  <div>{row[0]}</div><div className="text-muted">{row[1]}</div><div className="text-muted">{row[2]}</div><div className="text-right">{row[3]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-5">
          <div className="report-card flex-1 p-6">
            <div className="section-label">Price Trend Chart</div>
            <h3 className="mt-2 text-[24px] font-black tracking-tight">Dubai Marina Rental Trend</h3>
            <svg className="mt-6 h-[250px] w-full" viewBox="0 0 430 250" role="img" aria-label="Rental price trend">
              <g stroke="#E5E7EB" strokeWidth="1">
                {[40, 90, 140, 190, 240].map((y) => <line key={y} x1="0" x2="430" y1={y} y2={y} />)}
              </g>
              <path d="M14 197 C72 180 86 144 130 150 C178 156 190 98 236 112 C292 130 302 62 350 72 C385 80 398 52 418 44" fill="none" stroke={bayutGreen} strokeWidth="4" strokeLinecap="round" />
              <path d="M14 197 C72 180 86 144 130 150 C178 156 190 98 236 112 C292 130 302 62 350 72 C385 80 398 52 418 44 L418 230 L14 230 Z" fill="rgba(0,168,98,.10)" />
              {[14, 130, 236, 350, 418].map((x, i) => <circle key={x} cx={x} cy={[197,150,112,72,44][i]} r="5" fill="#fff" stroke={bayutGreen} strokeWidth="3" />)}
            </svg>
          </div>
          <div className="rounded-xl bg-[#0D332C] p-6 text-white">
            <div className="section-label">Market Insights Sidebar</div>
            {[
              ["Demand Trend", "Increasing", "88%"],
              ["Negotiation Margin", "Low", "3 to 5%"],
              ["Rental Demand Score", "Very High", "97/100"]
            ].map(([label, value, score]) => (
              <div key={label} className="mt-5 border-t border-white/12 pt-5">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/58">{label}</div>
                  <div className="text-[13px] font-black">{score}</div>
                </div>
                <div className="mt-2 text-[22px] font-black">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

function LifestylePage() {
  return (
    <PdfPage>
      <div className="grid h-full grid-cols-[66%_34%] gap-7 p-[44px]">
        <div className="flex flex-col">
          <PageHeader label="Lifestyle & Location" title="Dubai Marina lifestyle with premium tower convenience">
            <p className="mt-4 max-w-[650px] text-[14px] font-medium leading-6 text-muted">
              Marina Gate 1 places residents close to waterfront promenades, dining, fitness, transport, and beachside
              leisure while preserving a polished residential atmosphere.
            </p>
          </PageHeader>
          <div className="mt-6 grid h-[186px] grid-cols-3 gap-4">
            {["/images/marina-panorama.svg", "/images/pool.svg", "/images/balcony-view.svg"].map((src) => (
              <div key={src} className="overflow-hidden rounded-xl border border-line">
                <img src={src} alt="" className="image-frame" />
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-xl bg-gradient-to-br from-[#0A3028] to-[#071B18] p-7 text-white">
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">Why This Property Is a Strong Opportunity</div>
            <div className="mt-6 grid grid-cols-4 gap-5">
              {[
                ["Prime Location", "Blue-chip marina address with durable tenant appeal."],
                ["High Rental Demand", "Quality furnished stock attracts consistent interest."],
                ["Excellent Facilities", "Pool, gym, sports courts, lobby, and concierge."],
                ["Smart Investment", "Fair pricing supports yield resilience."]
              ].map(([title, text]) => (
                <div key={title}>
                  <div className="text-[15px] font-black">{title}</div>
                  <p className="mt-2 text-[11px] font-semibold leading-5 text-white/62">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full flex-col">
          <div className="report-card flex-1 p-6">
            <div className="overflow-hidden rounded-xl bg-mist">
              <img src="/images/agent.svg" alt="" className="h-[255px] w-full object-cover object-top" />
            </div>
            <div className="mt-6 text-center">
              <div className="text-[30px] font-black leading-none tracking-tight">Nick Lee</div>
              <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">Sales Consultant</div>
              <div className="mt-1 text-[15px] font-black text-bayut">Home & Living</div>
            </div>
            <div className="mt-6 space-y-3 rounded-xl bg-mist p-4">
              <div className="flex items-center gap-3 text-[13px] font-bold"><Phone size={15} className="text-bayut" /> +971 50 123 4567</div>
              <div className="flex items-center gap-3 text-[13px] font-bold"><Mail size={15} className="text-bayut" /> nick.lee@homeandliving.ae</div>
              <div className="flex items-center gap-3 text-[13px] font-bold"><ShieldCheck size={15} className="text-bayut" /> TruBroker Verified</div>
            </div>
            <div className="mt-5 border-t border-line pt-5 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">License No.</div>
              <div className="mt-1 text-[16px] font-black">BRN 58724</div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-line bg-white p-6 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-bayut text-[22px] font-black text-white">H</div>
            <div className="mt-3 text-[22px] font-black tracking-tight">Home & Living</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Real Estate</div>
          </div>
        </div>
      </div>
    </PdfPage>
  );
}

export default function HomePage() {
  return (
    <main className="px-0 py-2">
      <CoverPage />
      <OverviewPage />
      <GalleryPage />
      <AiValuationPage />
    </main>
  );
}
