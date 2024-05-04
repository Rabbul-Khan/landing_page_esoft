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
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <a href="#">
              <img src="/facebookIcon.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/linkedInIcon.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/twitterIcon.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/youtubeIcon.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/instagramIcon.svg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
