import ThanksImg from "./../img/icon-thank-you.svg";

export default function Confirm() {
  return (
    <div className="content confirm">
      <div className="confirm__img">
        <img src={ThanksImg} alt="thank-you" />
      </div>
      <div className="content__heading">
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
