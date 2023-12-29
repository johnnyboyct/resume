import D3CircularPack from '../D3CircularPack';

export interface ISkillsProps {
  skills: any
}

export default function Skills({ skills }: ISkillsProps) {
  console.log(skills);
  return (
    <D3CircularPack data={skills} width={600} height={600} />
    // <ul className="wrapper">
    // {skills.map((skill: any, index: number) => {
    //   return <li key={index} data-level={skill.level}>{skill.name}</li>;
    // })}

    // </ul>
  );
}
