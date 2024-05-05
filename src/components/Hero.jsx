import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-cover bg-center h-screen bg-[url(/bg.jpeg)] flex items-center text-white">
      <div className="container mx-auto ">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
