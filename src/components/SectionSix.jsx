import Button from './Button';
import Footer from './Footer';

const SectionSix = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-5 bg-gradient-to-t from-slate-50 to-slate-100 py-14 xl:py-28 mt-28">
        <h2 className="text-4xl font-medium text-center text-primary ">
          A Price To Suit Everyone
        </h2>
        <p className="max-w-prose text-[#6F7CB2] leading-6 text-center pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vero
          cumque magnam corporis esse reiciendis voluptate iure, illum aliquid
          saepe perferendis et minima magni reprehenderit repudiandae recusandae
          possimus corrupti ex?
        </p>
        <p className="pt-10 text-5xl font-medium text-primary">$40</p>
        <p className="pt-5 text-text-dark">UI Design Kit</p>
        <p className="text-sm text-[#5D6970] pt-10 sm:pt-20 pb-3">
          See, One price. Simple.
        </p>
        <Button buttonText="Purchase Now" />
      </section>
      <Footer />
    </>
  );
};

export default SectionSix;
