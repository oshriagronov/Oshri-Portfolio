import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-[9999]">
      <div className="mx-auto max-w-7xl py-4 px-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Software<span className="highlight">Dev</span>
        </h2>
        <div className="flex items-center gap-x-3 lg:gap-12">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg font-medium tracking-wide hover:highlight duration-300"
              >
                {text}
              </a>
            );
          })}
          <button></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
