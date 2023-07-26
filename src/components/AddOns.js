export default function AddOns({
  onActiveStep,
  selectedAddOns,
  onSelectedAddOns,
  subscriptionType,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    onActiveStep(4);
  }

  return (
    <>
      <div className="content__heading">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="content__main">
        <div className="add-ons">
          <div
            className={`add-ons__item ${
              selectedAddOns.includes("Online service") ? "checked" : ""
            }`}
          >
            <label className="add-ons__checkbox-container">
              <input
                name="online-service"
                type="checkbox"
                checked={selectedAddOns.includes("Online service")}
                onChange={() => onSelectedAddOns("Online service")}
              />
              <svg viewBox="0 0 64 64" height="1.2em" width="1.2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
            <div className="add-ons__text">
              <h3>Online service</h3>
              <span>Access to multiplayer games</span>
            </div>
            <div className="add-ons__price">
              {subscriptionType === "monthly" ? "+$1/mo" : "+$10/yr"}
            </div>
          </div>
          <div
            className={`add-ons__item ${
              selectedAddOns.includes("Larger storage") ? "checked" : ""
            }`}
          >
            <label className="add-ons__checkbox-container">
              <input
                name="larger-storage"
                type="checkbox"
                checked={selectedAddOns.includes("Larger storage")}
                onChange={() => onSelectedAddOns("Larger storage")}
              />
              <svg viewBox="0 0 64 64" height="1.2em" width="1.2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
            <div className="add-ons__text">
              <h3>Larger storage</h3>
              <span>Extra 1TB of cloud save</span>
            </div>
            <div className="add-ons__price">
              {subscriptionType === "monthly" ? "+$2/mo" : "+$20/yr"}
            </div>
          </div>
          <div
            className={`add-ons__item ${
              selectedAddOns.includes("Customizable profile") ? "checked" : ""
            }`}
          >
            <label className="add-ons__checkbox-container">
              <input
                name="customizable-profile"
                type="checkbox"
                checked={selectedAddOns.includes("Customizable profile")}
                onChange={() => onSelectedAddOns("Customizable profile")}
              />
              <svg viewBox="0 0 64 64" height="1.2em" width="1.2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                ></path>
              </svg>
            </label>
            <div className="add-ons__text">
              <h3>Customizable Profile</h3>
              <span>Custom theme on your profile</span>
            </div>
            <div className="add-ons__price">
              {subscriptionType === "monthly" ? "+$2/mo" : "+$20/yr"}
            </div>
          </div>
        </div>
      </div>
      <div className="content__navigate">
        <button
          className="content__navigate-btn content__navigate-btn--back"
          onClick={() => onActiveStep(2)}
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
