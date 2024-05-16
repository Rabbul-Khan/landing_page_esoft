import Button from './Button';
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between gap-5 pt-10 lg:flex-row lg:gap-0">
      <a href="#" className="text-2xl font-bold text-text-dark ">
        LANDING
      </a>
      <nav className="lg:-order-2">
        <ul className="flex gap-10 text-sm text-text-light ">
          <li className="hover:font-bold hover:underline hover:underline-offset-2 hover:text-primary">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-bold hover:underline hover:underline-offset-2 hover:text-primary">
            <a href="#">About</a>
          </li>
          <li className="hover:font-bold hover:underline hover:underline-offset-2 hover:text-primary">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Button buttonText="Buy Now" />
    </header>
  );
};

export default Header;
