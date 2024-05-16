import IMAGES from '../images/Images';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-[#E7ECFF] px-20 lg:px-40 py-10 xl:py-20 ">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between border-b border-[#929ECC] pb-10 items-center">
        <p className="text-2xl font-bold text-text-dark ">Landing</p>
        <p className="text-sm text-[#939EA4] md:-order-2">©2023 Yourcompany</p>
        <Button buttonText="Purchase Now" />
      </div>

      <div className="flex flex-col items-center justify-between gap-10 pt-5 sm:gap-0 sm:flex-row">
        <ul className="flex text-[#929ECC] text-sm gap-10">
          <li className="hover:font-bold hover:text-primary hover:underline hover:underline-offset-2">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-bold hover:text-primary hover:underline hover:underline-offset-2">
            <a href="#">About</a>
          </li>

          <li className="hover:font-bold hover:text-primary hover:underline hover:underline-offset-2">
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <a href="#">
              <img src={IMAGES.iconFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IMAGES.iconLinkedIn} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IMAGES.iconTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IMAGES.iconYoutube} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={IMAGES.iconInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
