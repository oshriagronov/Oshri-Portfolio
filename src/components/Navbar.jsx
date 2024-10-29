import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-emerald-100 ">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Software<span className="text-emerald-500">Dev</span>
        </h2>
        <div className="flex items-center gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
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
