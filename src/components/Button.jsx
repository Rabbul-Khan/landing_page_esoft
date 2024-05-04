const Button = ({ buttonText }) => {
  return (
    <button className="flex-1 px-5 py-1 font-medium text-white sm:font-semibold md:py-2 bg-primary md:px-7 md:min-w-48 max-w-fit min-w-36">
      {buttonText}
    </button>
  );
};

export default Button;
