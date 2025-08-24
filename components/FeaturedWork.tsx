import { motion } from "framer-motion";

const featuredCards = [
  {
    title: "Geo Data Platform",
    description: "A scalable platform for geospatial data visualization and analysis.",
    gradient: "from-blue-500 via-purple-600 to-indigo-700",
    glow: "shadow-[0_0_40px_5px_rgba(67,56,202,0.3)]",
    link: "#",
  },
  {
    title: "Urban Mobility Insights",
    description: "Interactive dashboards for urban movement and transit optimization.",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    glow: "shadow-[0_0_40px_5px_rgba(236,72,153,0.25)]",
    link: "#",
  },
  {
    title: "Remote Sensing Suite",
    description: "Satellite image processing tools for environmental monitoring.",
    gradient: "from-green-400 via-teal-500 to-cyan-600",
    glow: "shadow-[0_0_32px_4px_rgba(20,184,166,0.22)]",
    link: "#",
  },
  {
    title: "Spatial AI Toolkit",
    description: "Machine learning models for geospatial feature extraction.",
    gradient: "from-yellow-400 via-orange-500 to-rose-500",
    glow: "shadow-[0_0_32px_4px_rgba(251,191,36,0.18)]",
    link: "#",
  },
  {
    title: "Climate Risk Maps",
    description: "Dynamic mapping of climate risk and adaptation strategies.",
    gradient: "from-sky-500 via-blue-400 to-fuchsia-400",
    glow: "shadow-[0_0_32px_4px_rgba(56,189,248,0.19)]",
    link: "#",
  },
];

export default function FeaturedWork() {
  return (
    <section className="w-full flex flex-col gap-8 p-6 max-w-6xl mx-auto">
      {/* First row: 2 wide cards */}
      <div className="flex flex-row gap-8">
        {featuredCards.slice(0, 2).map((card, idx) => (
          <motion.a
            key={card.title}
            href={card.link}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7, type: "spring", stiffness: 80 }}
            className={`flex-1 min-w-0 rounded-3xl bg-gradient-to-br ${card.gradient} ${card.glow} p-10 flex flex-col justify-between cursor-pointer hover:scale-[1.04] hover:shadow-2xl transition-transform duration-200 group relative overflow-hidden`}
            whileHover={{ scale: 1.04 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white drop-shadow mb-2">{card.title}</h3>
              <p className="text-white/90 text-lg">{card.description}</p>
            </div>
            <span className="absolute right-6 bottom-6 text-white/60 text-sm group-hover:text-white transition">View Project →</span>
          </motion.a>
        ))}
      </div>
      {/* Second row: 3 smaller cards */}
      <div className="flex flex-row gap-8">
        {featuredCards.slice(2).map((card, idx) => (
          <motion.a
            key={card.title}
            href={card.link}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.7, type: "spring", stiffness: 80 }}
            className={`flex-1 min-w-0 rounded-3xl bg-gradient-to-br ${card.gradient} ${card.glow} p-8 flex flex-col justify-between cursor-pointer hover:scale-[1.04] hover:shadow-2xl transition-transform duration-200 group relative overflow-hidden`}
            whileHover={{ scale: 1.04 }}
          >
            <div>
              <h3 className="text-xl font-bold text-white drop-shadow mb-1">{card.title}</h3>
              <p className="text-white/90 text-base">{card.description}</p>
            </div>
            <span className="absolute right-5 bottom-5 text-white/60 text-xs group-hover:text-white transition">View Project →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
