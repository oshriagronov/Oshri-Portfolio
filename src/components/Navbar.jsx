import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="accent ">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Software<span className="highlight">Dev</span>
        </h2>
        <div className="flex items-center gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:highlight duration-300"
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
