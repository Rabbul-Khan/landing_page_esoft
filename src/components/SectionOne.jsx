import Button from './Button';
import ButtonAlt from './ButtonAlt';

const SectionOne = () => {
  return (
    <section className="h-screen">
      <img
        src="./heroImage.png"
        className=" absolute top-0 right-0 h-screen -z-10 "
      />
      <header className="flex pt-10 items-center justify-between">
        <nav>
          <ul className="flex text-sm gap-10 text-text-light">
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
        <p className="font-bold text-2xl text-text-dark  ">LANDING</p>
        <Button buttonText="Buy Now" />
      </header>

      <article className="flex flex-col justify-center gap-2 w-1/2  my-auto pt-28  ">
        <h1 className="font-medium text-5xl text-primary leading-[66px] tracking-wide ">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="text-text-light leading-7 pb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex gap-10">
          <Button buttonText="Purchase UI Kit" />
          <ButtonAlt buttonText="Learn More" />
        </div>
      </article>
    </section>
  );
};

export default SectionOne;
