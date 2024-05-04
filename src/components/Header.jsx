import Button from './Button';
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between gap-5 pt-10 lg:flex-row lg:gap-0">
      <a href="#" className="text-2xl font-bold text-text-dark ">
        LANDING
      </a>
      <nav className="lg:-order-2">
        <ul className="flex gap-10 text-sm text-text-light ">
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
      </nav>
      <Button buttonText="Buy Now" />
    </header>
  );
};

export default Header;
