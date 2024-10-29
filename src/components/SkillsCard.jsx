const SkillsCard = ({ title, icon, text }) => {
  return (
    <div>
      <i className="h-16 w-16">{icon} </i>
      <h5 className="mt-6 font-bold">{title}</h5>
      <p className="mt-2 text-slate-500">{text}</p>
    </div>
  );
};
export default SkillsCard;
