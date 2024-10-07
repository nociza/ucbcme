import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PrimaryButton = dynamic(() => import("@components/PrimaryButton"), {
  ssr: false,
});

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isStopped, setIsStopped] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [probabilities, setProbabilities] = useState<number[]>([]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isRunning && !isStopped) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      const mortalityRateCurve = getMortalityRateProbability(seconds);
      setProbabilities((prev) => [...prev, mortalityRateCurve]);
      if (Math.random() < mortalityRateCurve) {
        setIsStopped(true);
      }
    } else if (timerId) {
      clearInterval(timerId);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isRunning, isStopped, seconds]);

  const getMortalityRateProbability = (second: number) => {
    // Assuming we want the length of music in "seconds" scaled to a human lifespan in "years"
    // Let's consider a song of length 240 seconds to represent an average lifespan of 80 years
    // This would mean each second represents 80 / 240 = 0.333 years
    // The human mortality curve scaled here is a more fine-grained approximation
    const yearEquivalent = second * (80 / 240);

    if (yearEquivalent < 1) return 0.0001; // Almost zero chance of stopping in the first year
    if (yearEquivalent < 5) return 0.0003; // Very low probability for infants
    if (yearEquivalent < 15) return 0.0005; // Low probability during childhood
    if (yearEquivalent < 25) return 0.001; // Slightly higher probability during late teens
    if (yearEquivalent < 35) return 0.002; // Probability increases during early adulthood
    if (yearEquivalent < 45) return 0.004; // Higher probability in mid-life
    if (yearEquivalent < 55) return 0.007; // Gradual increase in risk
    if (yearEquivalent < 65) return 0.015; // Noticeable increase in late middle age
    if (yearEquivalent < 75) return 0.04; // Significant risk in senior years
    return 0.1; // Very high chance of stopping after 75
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsStopped(false);
    setSeconds(0);
    setProbabilities([]);
  };

  const yearLabels = probabilities.map((_, i) => (i * (80 / 240)).toFixed(1));

  const data = {
    labels: yearLabels,
    datasets: [
      {
        label: "Mortality Rate",
        data: probabilities,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Mortality Rate Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        title: {
          display: true,
          text: "Probability",
        },
        min: 0,
        max: 0.1,
      },
    },
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      {isStopped && (
        <div className="absolute inset-0 bg-red-700 opacity-90 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold">STOP</h1>
        </div>
      )}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-3xl font-serif font-light text-white">
          Timer: {seconds} seconds
        </h1>
        <PrimaryButton
          type="button"
          buttonText={isStopped ? "Rerun" : isRunning ? "Running..." : "Start"}
          onClick={!isRunning || isStopped ? handleStart : undefined}
        />
      </div>
      <div
        className="relative z-10 w-3/4 mb-8 bg-white p-4 rounded-lg shadow-lg"
        style={{ height: "400px" }}
      >
        <Line data={data} options={options} />
      </div>
      {/* Background styling */}
      <div className="absolute inset-0">
        <Image
          src="/background2.jpg"
          alt="UC Berkeley Chinese Music Ensemble"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
};

export default Timer;
