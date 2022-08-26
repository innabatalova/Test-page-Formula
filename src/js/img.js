import Logo from "../../static/images/header-logo-icon.svg";
import iconPhone from "../../static/images/header-phone-icon.svg";
import mainFon from "../../static/images/main-fon.png";
import mainImg from "../../static/images/main-img.jpg";
import offer from "../../static/images/offer-img.jpg";
import footerMessageIcon from "../../static/images/footer-message-icon.svg";
import footerPhoneIcon from "../../static/images/footer-phone-icon.svg";
import footerMailIcon from "../../static/images/footer-mail-icon.svg";
import callIcon from "../../static/images/call-icon.svg";

const headerLogoIcon = document.querySelector(".header__logo__icon");
headerLogoIcon.style = `background-image:url(${Logo})`;

const headerPhoneIcon = document.querySelector(".header__phone__icon");
headerPhoneIcon.style = `background-image:url(${iconPhone})`;

const mainInfo = document.querySelector(".main");
mainInfo.style = `background-image:url(${mainFon})`;

const mainImage = document.querySelector(".main__img");
mainImage.innerHTML = `<img src=${mainImg} alt='main-img'/>`;

const offerImage = document.querySelector(".offer");
offerImage.style = `background-image:url(${offer})`;

const footerIconMessage = document.querySelector(".footer__icon__message");
footerIconMessage.style = `background-image:url(${footerMessageIcon})`;

const footerPhoneMessage = document.querySelector(".footer__icon__phone");
footerPhoneMessage.style = `background-image:url(${footerPhoneIcon})`;

const footerMailMessage = document.querySelector(".footer__icon__mail");
footerMailMessage.style = `background-image:url(${footerMailIcon})`;

const callDie = document.querySelector(".call-die");
callDie.style = `background-image:url(${callIcon})`;
