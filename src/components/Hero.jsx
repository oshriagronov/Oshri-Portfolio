import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="accent py-24 sm:flex justify-around">
      <div className="mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article className="">
          <h1 className="text-7xl font-bold tracking-wider">
            I'm Oshri Agronov
          </h1>
          <p className="mt-4 text-3xl text capitalize tracking-wide">
            Software Engineer student
          </p>
          <p className="mt-2 text-lg text capitalize tracking-wide">
            Software is cool I guess.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/oshriv65">
              <FaGithubSquare className="h-8 w-8 sub-text hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/oshri-agronov/">
              <FaLinkedin className="h-8 w-8 sub-text hover:text-black duration-300" />
            </a>
            <a href="https://x.com/OshriAgronov">
              <FaSquareXTwitter className="h-8 w-8 sub-text hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={heroImg}
            alt="two people looking at a giant phone"
            className="h-80 lg:h-96"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
