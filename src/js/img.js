import Logo from "../../static/images/header-logo-icon.svg";
import iconPhone from "../../static/images/header-phone-icon.svg";
import mainImg from "../../static/images/main-img.jpg";

const headerLogoIcon = document.querySelector(".header__logo__icon");
const logoTop = Logo;
headerLogoIcon.style = `background-image:url(${logoTop})`;

const headerPhoneIcon = document.querySelector(".header__phone__icon");
const iconTop = iconPhone;
headerPhoneIcon.style = `background-image:url(${iconTop})`;

const mainImage = document.querySelector(".main__img");
const mainFon = mainImg;
mainImage.innerHTML = `<img src=${mainFon} alt='main-img'/>`;
