import heroImg from "../assets/hero.svg";
import arrowDown from "../assets/down-arrow-1.svg";
const Hero = () => {
  return (
    <section className="pt-40 pb-60 my-20 sm:flex justify-around" id="home">
      <div className="mx-auto max-w-7xl py-4 px-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <article className="">
          <h1 className="text-4xl title mb-8 tracking-tight sm:text-5xl md:text-7xl">
          Hi
            <span class="inline-block ml-4">👋</span>
            , I'm <span className="highlight">Oshri</span> a curious mind in software, always creating.
          </h1>
          <h2 className="text-xl sub-text mb-12 leading-relaxed max-w-2xl mx-auto sm:text-2xl lg:mx-0 ">
            I’m a passionate developer who loves turning ideas into real products.<br/>
            Constantly sharpening my skills in modern programming languages, frameworks, and cutting-edge technologies.
          </h2>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            alt="A man working on the laptop with a screen beside it"
            className="w-full h-full object-cover"
          />
        </article>
        <div className="absolute bottom-4 md:bottom-8 sm:bottom-16 left-1/2">
          <a href="#projects" className="flex items-center duration-300 hover:scale-130 hover:-translate-y-1">
            <img
              src={arrowDown}
              alt="An arrow pointing down"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
