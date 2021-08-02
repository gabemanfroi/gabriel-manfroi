import SkillItem from './SkillItem/SkillItem';
import classes from './SkillsSection.module.scss';
export default function SkillsSection() {
    return (
        <section className={classes.SkillsSection}>
            <h2>Skills</h2>
            <div className={classes.SkillsContainer}>
                <SkillItem skillTitle={'Application Development'} proficiency={5} />
                <SkillItem skillTitle={'Web Development Projects'} proficiency={5} />
                <SkillItem skillTitle={'Programming'} proficiency={5} />
                <SkillItem skillTitle={'Excellent Work Ethic'} proficiency={5} />
                <SkillItem skillTitle={'Leadership'} proficiency={5} />
            </div>
        </section>
    );
}
