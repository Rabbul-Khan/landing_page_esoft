import IMAGES from '../images/Images';
import Button from './Button';

const SectionFive = () => {
  return (
    <section className="flex flex-col items-center justify-center grid-cols-2 gap-20 pt-40 lg:grid xl:pt-52">
      <img
        src={IMAGES.womanStanding}
        className="mx-auto max-w-72 md:max-w-full"
      />
      <article className="flex flex-col gap-10">
        <h2 className="gap-5 text-4xl font-medium text-primary sm:gap-10 ">
          Light, Fast & Powerful
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <Button buttonText="Purchase Now" />
      </article>
    </section>
  );
};

export default SectionFive;
