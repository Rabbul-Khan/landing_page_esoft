import IMAGES from '../images/Images';

const SectionTwo_FeatureBox = () => {
  return (
    <div className="flex flex-col gap-3">
      <img src={IMAGES.featureIcon} width={35} height={35} />
      <h3 className="font-medium text-primary">Title goes here</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
    </div>
  );
};

export default SectionTwo_FeatureBox;
