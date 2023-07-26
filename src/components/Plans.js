import ArcadeIcon from "./../img/icon-arcade.svg";
import AdvancedIcon from "./../img/icon-advanced.svg";
import ProIcon from "./../img/icon-pro.svg";

export default function Plans({
  onActiveStep,
  selectedPlan,
  onSelectedPlan,
  subscriptionType,
  onSubscriptionType,
}) {
  function handleCheckboxChange(e) {
    const isChecked = e.target.checked;
    const newSubscriptionType = isChecked ? "yearly" : "monthly";
    onSubscriptionType(newSubscriptionType);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onActiveStep(3);
  }

  return (
    <>
      <div className="content__heading">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="content__main">
        <div className="plans">
          <div className="plans__cards">
            <div
              className={`plans__card ${
                selectedPlan === "arcade" ? "checked" : ""
              }`}
            >
              <img className="plans__card-img" src={ArcadeIcon} alt="Arcade" />
              <input
                className="plans__card-input"
                type="radio"
                name="plan"
                checked={selectedPlan === "arcade"}
                onChange={() => onSelectedPlan("arcade")}
              />
              <div className="plans__card-text">
                <h3 className="plans__card-title">Arcade</h3>
                <span className="plans__card-price">
                  {subscriptionType === "yearly" ? "$90/yr" : "$9/mo"}
                </span>
                {subscriptionType === "yearly" && (
                  <span className="plans__card-offer">2 months free</span>
                )}
              </div>
            </div>
            <div
              className={`plans__card ${
                selectedPlan === "advance" ? "checked" : ""
              }`}
            >
              <img
                className="plans__card-img"
                src={AdvancedIcon}
                alt="Advanced"
              />
              <input
                className="plans__card-input"
                type="radio"
                name="plan"
                checked={selectedPlan === "advance"}
                onChange={() => onSelectedPlan("advance")}
              />
              <div className="plans__card-text">
                <span className="plans__card-title">Advance</span>
                <span className="plans__card-price">
                  {subscriptionType === "yearly" ? "$120/yr" : "$12/mo"}
                </span>
                {subscriptionType === "yearly" && (
                  <span className="plans__card-offer">2 months free</span>
                )}
              </div>
            </div>
            <div
              className={`plans__card ${
                selectedPlan === "pro" ? "checked" : ""
              }`}
            >
              <img className="plans__card-img" src={ProIcon} alt="Pro" />
              <input
                className="plans__card-input"
                type="radio"
                name="plan"
                checked={selectedPlan === "pro"}
                onChange={() => onSelectedPlan("pro")}
              />
              <div className="plans__card-text">
                <span className="plans__card-title">Pro</span>
                <span className="plans__card-price">
                  {subscriptionType === "yearly" ? "$150/yr" : "$15/mo"}
                </span>
                {subscriptionType === "yearly" && (
                  <span className="plans__card-offer">2 months free</span>
                )}
              </div>
            </div>
          </div>
          <div className="plans__toggle">
            <span>Monthly</span>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={subscriptionType === "yearly" ? true : false}
            />
            <span>Yearly</span>
          </div>
        </div>
      </div>
      <div className="content__navigate">
        <button
          className="content__navigate-btn content__navigate-btn--back"
          onClick={() => onActiveStep(1)}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="content__navigate-btn content__navigate-btn--next"
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </>
  );
}
