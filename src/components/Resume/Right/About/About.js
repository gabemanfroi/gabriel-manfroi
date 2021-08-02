import classes from './About.module.scss';
import OverviewSection from './OverviewSection/OverviewSection';
import ProgrammingLanguagesSection from './ProgrammingLanguagesSection/ProgrammingLanguagesSection';
import SkillsSection from './SkillsSection/SkillsSection';
export default function About() {
    return (
        <div className={classes.AboutContainer}>
            <OverviewSection />
            <SkillsSection />
            <ProgrammingLanguagesSection />
        </div>
    );
}
