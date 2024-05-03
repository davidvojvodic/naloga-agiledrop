import PropTypes from "prop-types";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-cover bg-center h-screen flex items-center text-white">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-black">{title}</h1>
        <p className="text-xl mb-8 text-black">{subtitle}</p>
        {/* <img
          src="https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter\(duotone,00192f,00baff\)/hoVj2lYW3i7oMd1o7bPQRZd1lk1.jpg"
          alt={title}
          className="w-full h-auto"
        /> */}
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
