/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

interface CountdownDisplayProps {
  name: string;
  date: string;
  time: string;
  onReset: () => void;
}

export const CountdownDisplay = ({ name, date, time, onReset }: CountdownDisplayProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDateTime = new Date(`${date}T${time}`).getTime();
      const now = new Date().getTime();
      const difference = targetDateTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsFinished(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsFinished(true);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(interval);
  }, [date, time]);

  // Celebration Screen
  if (isFinished) {
    return (
      <div className="flex flex-col justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500">
        <div className="text-center px-4 w-full animate-bounce-slow">
          <div className="text-9xl mb-8 animate-pulse">🎉</div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Time's Up!
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-white/90 mb-8">
            {name}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            Your special moment has arrived! 🎊
          </p>
          
          <div className="flex justify-center gap-4 px-4">
            <Button 
              onClick={onReset}
              className="!bg-white !text-purple-600 hover:!bg-gray-100 !px-8 !py-4 !text-lg !font-bold !rounded-xl shadow-2xl"
            >
              Create New Countdown
            </Button>
          </div>
        </div>

        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🎊', '✨', '🎈', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Regular Countdown Screen
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <div className="text-center px-4 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          {name}
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 px-4">
          {new Date(`${date}T${time}`).toLocaleString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12 px-4">
          <div className="bg-white/80 backdrop-blur rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white shadow-sm">
            <div className="text-3xl md:text-6xl font-bold text-blue-600 mb-1 md:mb-2">{timeLeft.days}</div>
            <div className="text-gray-600 text-sm md:text-lg font-medium">Days</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white shadow-sm">
            <div className="text-3xl md:text-6xl font-bold text-purple-600 mb-1 md:mb-2">{timeLeft.hours}</div>
            <div className="text-gray-600 text-sm md:text-lg font-medium">Hours</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white shadow-sm">
            <div className="text-3xl md:text-6xl font-bold text-pink-600 mb-1 md:mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-600 text-sm md:text-lg font-medium">Minutes</div>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white shadow-sm">
            <div className="text-3xl md:text-6xl font-bold text-indigo-600 mb-1 md:mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-600 text-sm md:text-lg font-medium">Seconds</div>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <Button 
            onClick={onReset}
            className="!bg-gray-700 hover:!bg-gray-800 !px-6 md:!px-8 !py-2.5 md:!py-3 !text-sm md:!text-base !font-semibold !rounded-lg"
          >
            Create New Countdown
          </Button>
        </div>
      </div>
    </div>
  );
};