import { useState } from "react";
import { CountdownForm } from "./CountdownForm";
import { CountdownDisplay } from "./CountdownDisplay";

export const Countdown = () => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdownData, setCountdownData] = useState({
    name: "",
    date: "",
    time: ""
  });

  const handleStart = (data: { name: string; date: string; time: string }) => {
    setCountdownData(data);
    setShowCountdown(true);
  };

  const handleReset = () => {
    setShowCountdown(false);
    setCountdownData({ name: "", date: "", time: "" });
  };

  if (showCountdown) {
    return (
      <CountdownDisplay
        name={countdownData.name}
        date={countdownData.date}
        time={countdownData.time}
        onReset={handleReset}
      />
    );
  }

  return <CountdownForm onStart={handleStart} />;
};

export default Countdown;