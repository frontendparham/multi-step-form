import { useState } from "react";
import Main from "./Main";
import Steps from "./Steps";
import Contents from "./Contents";
import Content from "./Content";
import Confirm from "./Confirm";
import Info from "./Info";
import Plans from "./Plans";
import AddOns from "./AddOns";
import Summary from "./Summary";

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("arcade");
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  function handleActiveStep(stepNum) {
    if (stepNum < 1 || stepNum > 4) return;

    setActiveStep(stepNum);
  }

  function handleConfirm() {
    setIsConfirmed((cur) => !cur);
  }

  function handleSelectedAddOns(seleted) {
    if (selectedAddOns.includes(seleted)) {
      setSelectedAddOns((allSelected) =>
        allSelected.filter((el) => seleted !== el)
      );
      return;
    }

    setSelectedAddOns((allSelected) => [...allSelected, seleted]);
  }

  return (
    <div className="app">
      <Main>
        <Steps activeStep={activeStep} isConfirmed={isConfirmed} />
        <Contents>
          {isConfirmed ? (
            <Confirm />
          ) : (
            <Content>
              {activeStep === 1 && <Info onActiveStep={handleActiveStep} />}

              {activeStep === 2 && (
                <Plans
                  onActiveStep={handleActiveStep}
                  selectedPlan={selectedPlan}
                  onSelectedPlan={setSelectedPlan}
                  subscriptionType={subscriptionType}
                  onSubscriptionType={setSubscriptionType}
                />
              )}

              {activeStep === 3 && (
                <AddOns
                  onActiveStep={handleActiveStep}
                  subscriptionType={subscriptionType}
                  selectedAddOns={selectedAddOns}
                  onSelectedAddOns={handleSelectedAddOns}
                />
              )}

              {activeStep === 4 && (
                <Summary
                  onActiveStep={handleActiveStep}
                  onConfirm={handleConfirm}
                  selectedPlan={selectedPlan}
                  subscriptionType={subscriptionType}
                  selectedAddOns={selectedAddOns}
                />
              )}
            </Content>
          )}
        </Contents>
      </Main>
    </div>
  );
}
