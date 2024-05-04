import Button from './Button';
import ButtonAlt from './ButtonAlt';
import Header from './Header';
import IMAGES from '../images/Images';

const SectionOne = () => {
  return (
    <section className="flex flex-col h-screen ">
      <img
        src={IMAGES.heroImage}
        className="absolute top-0 right-0 hidden h-screen -z-10 lg:flex"
      />
      <Header />

      <article className="flex flex-col justify-center gap-2 my-auto sm:pt-0 lg:w-1/2">
        <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl text-primary md:leading-[66px] tracking-wide ">
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className="pb-5 leading-7 text-text-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row lg:justify-start">
          <Button buttonText="Purchase UI Kit" />
          <ButtonAlt buttonText="Learn More" />
        </div>
      </article>
    </section>
  );
};

export default SectionOne;
