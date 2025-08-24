import { links } from "../data";

// Navbar component renders the top navigation bar of the website
const Navbar = () => {
  return (
    // The nav element is fixed at the top with a semi-transparent white background and blur effect for a sleek look
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-[9999]">
      <div className="mx-auto max-w-7xl py-4 px-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        {/* Website title with highlighted 'Dev' part for branding */}
        <h2 className="text-3xl title">
          Software<span className="highlight">Dev</span>
        </h2>
        {/* Navigation links and a placeholder button aligned horizontally on larger screens */}
        <div className="flex items-center gap-x-3 lg:gap-12">
          {/* Map over the imported links array to render each navigation link dynamically */}
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl font-medium tracking-wide hover:underline underline-offset-8 hover-effect"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
