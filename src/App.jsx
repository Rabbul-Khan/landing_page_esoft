import SectionOne from './components/SectionOne';

function App() {
  return (
    <div className="px-40 font-roboto">
      <SectionOne />
      <section className="flex basis-full">
        <article className="w-1/2 flex flex-col gap-10">
          <h2 className="font-medium text-4xl text-primary ">
            Light, fast and powerful
          </h2>
          <p className="text-text-light">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="flex">
            <div>
              <img src="/iconOne.png" />
              <h3 className="font-medium text-primary ">Title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{' '}
              </p>
            </div>
            <div>
              <img src="/iconOne.png" />
              <h3>Title goes here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{' '}
              </p>
            </div>
          </div>
        </article>
        <img src="./imageOne.png" className="w-1/2" />
      </section>
    </div>
  );
}

export default App;
