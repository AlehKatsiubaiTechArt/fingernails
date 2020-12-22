export default function Social() {
  return (
    <div className="social">
      <img alt="youtube" src="./images/youtube.svg" width="40" height="40" />
      <img
        alt="instagram"
        src="./images/instagram.svg"
        width="40"
        height="40"
      />
      <img alt="telegram" src="./images/telegram.svg" width="40" height="40" />
      <style jsx>{`
        .social {
          display: flex;
        }
      `}</style>
    </div>
  );
}
