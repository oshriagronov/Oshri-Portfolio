import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, imageSrc, github, title, text, stack }) => {
  return (
    <article className="grid md:grid-cols-2 gap-12 items-stretch">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-2xl overflow-hidden border-transparent h-full flex items-center"
      />
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap gap-2 mb-4">
        {stack?.map((item) => {
          return <span className="px-4 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full">{item}</span>
        })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">{text}</p>
        <div className="mt-4 flex">
          <a href={url}>
            <TbWorldWww
              className={
                url
                  ? "h-8 w-8 mr-2 sub-text hover:text-black duration-300"
                  : "hidden"
              }
            />
          </a>
          <a href={github}>
            <FaGithubSquare
              className={
                github
                  ? "h-8 w-8 mr-2 sub-text hover:text-black duration-300"
                  : "hidden"
              }
            />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
