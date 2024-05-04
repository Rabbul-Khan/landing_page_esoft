import SectionTwo_FeatureBox from './SectionTwo_FeatureBox';

const SectionTwo = () => {
  return (
    <section className="flex flex-col items-center grid-cols-2 gap-10 xl:grid lg:pt-20 xl:pt-52 ">
      <article className="flex flex-col order-1 gap-10 my-auto xl:order-2">
        <h2 className="text-4xl font-medium text-primary">
          Light, fast and powerful
        </h2>
        <p className="text-text-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <div className="flex gap-14">
          <SectionTwo_FeatureBox />
          <SectionTwo_FeatureBox />
        </div>
      </article>
      <img
        src="./imageOne.png"
        width={500}
        height={500}
        className="mx-auto max-w-72 md:max-w-full "
      />
    </section>
  );
};

export default SectionTwo;
