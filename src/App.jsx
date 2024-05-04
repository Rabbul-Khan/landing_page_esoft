import Button from './components/Button';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSix from './components/SectionSix';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <>
      <div className="px-5 sm:px-20 lg:px-40 font-roboto">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <SectionSix />
    </>
  );
}
export default App;
