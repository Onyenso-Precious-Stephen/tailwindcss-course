import { Hero, PopulerProduct, SuperQaility, Service, SpecialOffer,  CustomerReviews, Subcribe, Footer } from './sections'


const App = () => (
  <main className="relative">
    {/** <nav /> */} 
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopulerProduct />
    </section>
    <section className="padding">
      <SuperQaility />
    </section>
    <section className="padding-x py-10">
       <Service />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <customerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subcribe /> 
    </section>
    <section className="bg-black padding-t padding-x pb-8">
      <Footer />
    </section>
  </main>

);

export default App;