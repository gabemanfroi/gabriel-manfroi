import ProficiencyLevel from '../../../../../utils/ProficiencyLevel/ProficiencyLevel';

export default function ProgrammingLanguageItem({ programmingLanguageTitle, proficiency }) {
    return <ProficiencyLevel title={programmingLanguageTitle} amount={proficiency} />;
}
