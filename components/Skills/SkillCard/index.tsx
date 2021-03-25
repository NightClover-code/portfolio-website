//props interface
interface SkillCardInterface {
  title: string;
  logo: string;
}
//skill card
const SkillCard: React.FC<SkillCardInterface> = () => {
  return <div>skill</div>;
};

export default SkillCard;
