import "./scss/style.scss";
import Logo from "../static/images/header-logo-icon.svg";
import iconPhone from "../static/images/header-phone-icon.svg";

const headerLogoIcon = document.querySelector(".header__logo__icon");
const logoTop = Logo;
headerLogoIcon.style = `background-image:url(${logoTop})`;

const headerPhoneIcon = document.querySelector(".header__phone__icon");
const iconTop = iconPhone;
headerPhoneIcon.style = `background-image:url(${iconTop})`;

console.log("test!");
