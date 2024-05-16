const ButtonAlt = ({ buttonText }) => {
  return (
    <button className="px-5 py-1 font-medium border-2 sm:font-semibold md:py-2 text-primary md:px-7 border-primary min-w-36 max-w-fit md:min-w-48 hover:bg-primary hover:outline hover:outline-primary hover:text-white">
      {buttonText}
    </button>
  );
};

export default ButtonAlt;
