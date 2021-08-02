import ProficiencyLevel from '../../../../../utils/ProficiencyLevel/ProficiencyLevel';

export default function SkillItem({ skillTitle, proficiency }) {
    return <ProficiencyLevel title={skillTitle} amount={proficiency} />;
}
