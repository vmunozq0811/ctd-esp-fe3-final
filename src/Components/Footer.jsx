import { useCharStates } from "../Components/utils/global.context";

const Footer = () => {
  const { state } = useCharStates();
  return (
    <footer className={state.theme ? "lightNav" : "darkNav"}>
      <div>
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      </div>
      <div>
        <img className="icono" src="./images/ico-facebook.png" alt="FaceBook" />
        <img className="icono" src="./images/ico-instagram.png" alt="Instagram" />
        <img className="icono" src="./images/ico-tiktok.png" alt="TikTok" />
        <img className="icono" src="./images/ico-whatsapp.png" alt="WhatsApp" />
      </div>
    </footer>
  );
};

export default Footer;
