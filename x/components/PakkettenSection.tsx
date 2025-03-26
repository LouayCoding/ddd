import { cn } from "@/lib/utils";

type PakketProps = {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const PakketCard = ({ title, price, features, highlight = false }: PakketProps) => {
  return (
    <div className={cn(
      "flex flex-col p-6 rounded-xl shadow-md transition-all duration-300",
      "dark:bg-white/5 dark:backdrop-blur-sm dark:border dark:border-white/10",
      "bg-white hover:shadow-lg",
      highlight && "border-2 border-blue-500 dark:border-blue-400 transform scale-105"
    )}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={cn(
        "mt-6 py-2 px-4 rounded-md text-white font-medium transition-colors",
        "bg-blue-600 hover:bg-blue-700",
        "dark:bg-blue-500 dark:hover:bg-blue-600"
      )}>
        Bekijk pakket
      </button>
    </div>
  );
};

export default function PakkettenSection() {
  const pakketten = [
    {
      title: "Auto",
      price: "€19,95/maand",
      features: [
        "Volledig verzekerd",
        "24/7 pechhulp",
        "Schade afhandeling",
        "Gratis parkeerapp"
      ]
    },
    {
      title: "Motor",
      price: "€14,95/maand",
      features: [
        "All-risk dekking",
        "Diefstalverzekering",
        "Accessoires verzekerd",
        "Seizoenskorting"
      ],
      highlight: true
    },
    {
      title: "Bromfiets",
      price: "€9,95/maand",
      features: [
        "WA verzekering",
        "Diefstalverzekering",
        "Helm inbegrepen",
        "Geen eigen risico"
      ]
    },
    {
      title: "Aanhangwagen",
      price: "€4,95/maand",
      features: [
        "Schade verzekering",
        "Aansprakelijkheid",
        "Europese dekking",
        "Gratis kentekenregistratie"
      ]
    }
  ];

  return (
    <section className={cn(
      "py-20 w-full",
      "bg-blue-50",
      "dark:bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Onze Pakketten</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Kies het verzekeringspakket dat bij jouw voertuig past. Alle pakketten zijn inclusief onze premium service en ondersteuning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pakketten.map((pakket, index) => (
            <PakketCard key={index} {...pakket} />
          ))}
        </div>
      </div>
    </section>
  );
} 