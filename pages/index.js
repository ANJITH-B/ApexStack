import ProjectsBtn from '../components/ProjectsBtn'

const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <h1 className="h1">
          Transforming Ideas <br/> Into{' '}
          <span className="text-accent">Digital Reality</span>
        </h1>
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16" >
        Uber Eats is an online food ordering and delivery platform launched by Uber in 2014. Couriers deliver meals using cars, scooters, bikes, or on foot. It is operational in over 6,000 cities across 45 countries as of 2021.

        </p>
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
