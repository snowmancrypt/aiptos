import Image from "next/image";

export default function Roadmap() {
  const phases = [
    { id: 1, description: "X Integration" },
    { id: 2, description: "Timeframe Customization" },
    { id: 3, description: "Indicator Overload" },
    { id: 4, description: "AIPTOS Premium", isGolden: true }, // Added `isGolden` property
  ];

  return (
    <div className="flex flex-col items-center text-sm md:text-md px-4 mt-10 mb-10">
      {/* Title */}
      <h2 className="text-lg md:text-3xl flex items-center mb-2">
        <Image
          src="/chart-arrow-up.png"
          alt="Chart Arrow Up"
          width={30}
          height={30}
          className="mr-3"
        />
        Road<span className="text-[#00FF00]">Map</span>
        <Image
          src="/chart-arrow-up.png"
          alt="Chart Arrow Up"
          width={30}
          height={30}
          className="ml-2"
        />
      </h2>

      {/* Container with Border */}
      <div className="w-full max-w-lg border-4 border-white rounded-lg p-4 mt-4 bg-transparent transition-transform duration-300 hover:scale-105">
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
          >
            {/* Phase Number */}
            <div
              className={`text-xl flex items-center justify-center w-12 h-12 font-bold rounded-full transition-transform ${
                phase.isGolden
                  ? "bg-[#FFD700] text-black glowing-border"
                  : "bg-[#00FF00] text-black"
              }`}
            >
              {phase.id}
            </div>

            {/* Phase Description */}
            <p
              className={`mt-2 text-xl text-center ${
                phase.isGolden
                  ? "text-[#FFD700] text-shadow-glow"
                  : "text-white"
              }`}
            >
              {phase.description}
            </p>
            {index < phases.length - 1 && (
              // <div className="w-0.5 h-6 border-l-2 border-white mt-2 mb-3"></div>
              <div className="mt-4"></div>
            )}
          </div>
        ))}
      </div>

      {/* Custom Glow Styles */}
      <style jsx>{`
        .text-shadow-glow {
          text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700;
          transition: text-shadow 0.3s ease-in-out;
        }

        .text-shadow-glow:hover {
          text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700;
        }

        .glowing-border {
          box-shadow: 0 0 5px #ffd700, 0 0 15px #ffd700, 0 0 25px #ffd700;
          transition: box-shadow 0.3s ease-in-out;
        }

        .glowing-border:hover {
          box-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700;
        }
      `}</style>
    </div>
  );
}
