"use client";
import BgVideo from "@/components/background/BgVideo";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center"
      // style={{
      //   backgroundImage: "url('/large_background.jpeg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      {/* Header Section */}
      <BgVideo />
      <header className="text-center mb-0 mt-4">
        <div className="flex items-center justify-center mb-0">
          <h1 className="text-4xl md:text-6xl font-bold glow-effect">
            AIPTOS
            {/* <span className="text-[#6AF1D6]">6900</span> */}
          </h1>
          {/* <img
            src="/AIPTOSCIRCLE.png"
            alt="Robot"
            className="w-12 h-12 md:w-20 md:h-20 robot-img"
          /> */}
        </div>
        <div className=" mt-[-5px] flex items-center justify-center mb-10">
          {/* Typing Effect */}
          <p className="font-bold text-xl md:text-3xl mt-2 mr-2 typing-effect">
            The first <span className="text-[#6AF1D6]">AI Agent</span> on Aptos
          </p>
          <img
            src="/aptos_white.png"
            alt="virtuals"
            className="w-6 h-6 md:w-8 md:h-8 virtuals-img mt-2"
          />
        </div>
        <style jsx>{`
          .typing-effect {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid #6af1d6; /* Blinking cursor */
            animation: typing 4s steps(40, end), blink 0.5s step-end infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            from {
              border-color: transparent;
            }
            to {
              border-color: #6af1d6;
            }
          }

          /* Remove typing effect below 760px */
          @media (max-width: 760px) {
            .typing-effect {
              white-space: normal; /* Allow wrapping */
              animation: none; /* Disable typing animation */
              border-right: none; /* Remove blinking cursor */
            }
          }

          /* Glowing fade-in/out effect for TAXBT6900 */
          .glow-effect {
            animation: glow 3s ease-in-out infinite alternate;
            color: #6af1d6;
            text-shadow: 0 0 5px #6af1d6, 0 0 10px #6af1d6, 0 0 20px #6af1d6,
              0 0 40px #6af1d6, 0 0 80px #6af1d6, 0 0 90px #6af1d6,
              0 0 100px #6af1d6;
          }

          @keyframes glow {
            0% {
              opacity: 0.5;
              text-shadow: 0 0 5px #6af1d6, 0 0 10px #6af1d6, 0 0 20px #6af1d6,
                0 0 40px #6af1d6;
            }
            50% {
              opacity: 1;
              text-shadow: 0 0 20px #6af1d6, 0 0 40px #6af1d6, 0 0 80px #6af1d6,
                0 0 100px #6af1d6;
            }
            100% {
              opacity: 0.5;
              text-shadow: 0 0 5px #6af1d6, 0 0 10px #6af1d6, 0 0 20px #6af1d6,
                0 0 40px #6af1d6;
            }
          }
        `}</style>
      </header>

      {/* Box Section */}
      <main className="container mx-auto px-4 mt-[-35px]">
        {/* <div className="border border-white border-4 p-6 scale-90"> */}
        {/* <div className="grid md:grid-cols-2 gap-6 gap-y-6"> */}
        {/* First Subsection */}
        {/* <div className="border border-solid border-2 border-white p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:border-[#6AF1D6] hover:shadow-[0_0_15px_#6AF1D6]">
              <h2 className="text-2xl font-bold mb-2">
                <span className="text-[#6AF1D6] font-bold">Exponential</span>{" "}
                Moving Average
              </h2>
              <img
                src="/Up.png"
                alt="Exponential Moving Average"
                className="w-12 h-12 md:w-20 md:h-20 mx-auto"
              />
              <p className="text-xl">
                Predict trends in real time,
                <span className="text-[#6AF1D6] font-bold">
                  never be blindsided.
                </span>
              </p>
            </div> */}
        {/* Second Subsection */}
        {/* <div className="border border-solid border-2 border-white p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:border-[#6AF1D6] hover:shadow-[0_0_15px_#6AF1D6]">
              <h2 className="text-2xl font-bold mb-2">
                Relative{" "}
                <span className="text-[#6AF1D6] font-bold">Strength</span> Index
              </h2>
              <img
                src="/muscle.png"
                alt="Relative Strength Index"
                className="w-12 h-12 md:w-20 md:h-20 mx-auto"
              />
              <p className="text-xl">
                Know when to buy and sell;{" "}
                <span className="text-[#6AF1D6] font-bold">
                  react in a split second.
                </span>
              </p>
            </div> */}
        {/* Third Subsection */}
        {/* <div className="border border-solid border-2 border-white p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:border-[#6AF1D6] hover:shadow-[0_0_15px_#6AF1D6]">
              <h2 className="text-2xl font-bold mb-2">
                Moving Average{" "}
                <span className="text-[#6AF1D6] font-bold">Convergence</span>
              </h2>
              <img
                src="/converge.png"
                alt="Moving Average Convergence"
                className="w-12 h-12 md:w-20 md:h-20 mx-auto"
              />
              <p className="text-xl">
                Master the convergence and divergence of the price signals and
                <span className="text-[#6AF1D6] font-bold">
                  {" "}
                  front run reversals.
                </span>
              </p>
            </div> */}
        {/* Fourth Subsection */}
        {/* <div className="border border-solid border-2 border-white p-4 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:border-[#6AF1D6] hover:shadow-[0_0_15px_#6AF1D6]">
              <h2 className="text-2xl font-bold mb-2">
                The Average{" "}
                <span className="text-[#6AF1D6] font-bold">True Range</span>
              </h2>
              <img
                src="/range.png"
                alt="Average True Range"
                className="w-12 h-12 md:w-20 md:h-20 mx-auto"
              />
              <p className="text-xl">
                Surf the waves of volatility and become{" "}
                <span className="text-[#6AF1D6] font-bold">
                  the big kahuna of uncertainty.
                </span>
              </p>
            </div> */}
        {/* </div> */}
        {/* </div> */}{" "}
        <div className="flex justify-center items-center mt-4">
          <img
            src="/AIPTOSCIRCLE.png"
            alt="Robot"
            className="w-[70%] sm:w-1/2 md:w-1/3 h-auto robot-img transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Follow Us Section */}
        <section className="mt-4 text-center">
          <div className="flex justify-center gap-8 items-center">
            {/* Telegram Icon */}
            <a
              href="https://t.me/aiptos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Telegram.png"
                alt="Telegram"
                className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* Buy AIPTOS Button */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <button
                className="text-xl px-6 py-2 text-white bg-[#5CD0B9] rounded-md opacity-50 cursor-not-allowed transition-all duration-300 transform"
                disabled
              >
                Buy AIPTOS
              </button>
            </a>

            {/* X Icon */}
            <a
              href="https://x.com/AiPTOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/X.png"
                alt="X"
                className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </section>
      </main>
      {/* <Roadmap /> */}
    </div>
  );
}
