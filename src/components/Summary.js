import { useEffect, useState } from "react";

export default function Summary({
  onActiveStep,
  onConfirm,
  selectedPlan,
  subscriptionType,
  selectedAddOns,
}) {
  const [planPrice, setPlanPrice] = useState(0);
  const [total, setTotal] = useState(0);

  function createAddOnsArray() {
    return selectedAddOns.map((addOn) => {
      if (addOn === "Online service") return { addOn, price: 1 };
      if (addOn === "Larger storage") return { addOn, price: 2 };
      if (addOn === "Customizable profile") return { addOn, price: 2 };
    });
  }

  useEffect(
    function () {
      function calculatePlanPrice() {
        if (selectedPlan === "arcade") setPlanPrice(9);

        if (selectedPlan === "advance") setPlanPrice(12);

        if (selectedPlan === "pro") setPlanPrice(15);
      }

      calculatePlanPrice();
    },
    [selectedPlan]
  );

  useEffect(
    function () {
      setTotal(0);

      function calculateTotalPrice() {
        if (selectedPlan === "arcade") setTotal((t) => t + 9);

        if (selectedPlan === "advance") setTotal((t) => t + 12);

        if (selectedPlan === "pro") setTotal((t) => t + 15);

        selectedAddOns.forEach((addOn) => {
          if (addOn === "Online service") setTotal((t) => t + 1);
          if (addOn === "Larger storage") setTotal((t) => t + 2);
          if (addOn === "Customizable profile") setTotal((t) => t + 2);
        });
      }

      calculateTotalPrice();
    },
    [selectedPlan, selectedAddOns]
  );

  return (
    <>
      <div className="content__heading">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="content__main">
        <div className="summary">
          <div className="summary__details">
            <div className="summary__plan">
              <div className="summary__plan-text">
                <span>
                  {selectedPlan} ({subscriptionType})
                </span>
                <button onClick={() => onActiveStep(2)}>change</button>
              </div>
              <div className="summary__plan-price">
                +${planPrice}/{subscriptionType === "monthly" ? "mo" : "yr"}
              </div>
            </div>
            <div className="summary__add-ons">
              {createAddOnsArray().map((addOn) => (
                <div className="summary__add-on">
                  <span className="summary__add-on-title">{addOn.addOn}</span>
                  <span className="summary__add-on-price">
                    +${addOn.price}/
                    {subscriptionType === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="summary__total">
            <span className="summary__total-title">
              Total (per {subscriptionType === "monthly" ? "month" : "year"})
            </span>
            <span className="summary__total-price">
              +${total}/{subscriptionType === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        </div>
      </div>
      <div className="content__navigate">
        <button
          className="content__navigate-btn content__navigate-btn--back"
          onClick={() => onActiveStep(3)}
        >
          Go Back
        </button>
        <button
          className="content__navigate-btn content__navigate-btn--next"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </>
  );
}
