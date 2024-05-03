import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="h-screen">
      <Hero
        title="Welcome to MovieDB"
        subtitle="Discover, watch, and rate movies and TV shows"
      />
    </div>
  );
};

export default HomePage;
