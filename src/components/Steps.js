import Step from "./Step";

const steps = [
  { stepNum: 1, title: "your info" },
  { stepNum: 2, title: "select plan" },
  { stepNum: 3, title: "add-ons" },
  { stepNum: 4, title: "summary" },
];

export default function Steps({ onActiveStep, activeStep, isConfirmed }) {
  return (
    <div className="steps">
      {steps.map((step) => (
        <Step
          step={step}
          key={step.stepNum}
          onActiveStep={onActiveStep}
          activeStep={activeStep}
          isConfirmed={isConfirmed}
        />
      ))}
    </div>
  );
}
