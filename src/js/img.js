import Logo from "../../static/images/header-logo-icon.svg";
import iconPhone from "../../static/images/header-phone-icon.svg";
import mainFon from "../../static/images/main-fon.png";
import mainImg from "../../static/images/main-img.jpg";
import offer from "../../static/images/offer-img.jpg";

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
