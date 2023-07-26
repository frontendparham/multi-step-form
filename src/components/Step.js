import { useEffect, useState } from "react";

export default function Step({ step, activeStep, isConfirmed }) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={`step ${activeStep === step.stepNum ? "step--active" : ""}`}
      style={isConfirmed ? { opacity: 0.5 } : {}}
    >
      <div className="step__number">{step.stepNum}</div>
      {+windowSize[0] > 900 && (
        <div className="step__text">
          <span>step {step.stepNum}</span>
          <span>{step.title}</span>
        </div>
      )}
    </div>
  );
}
