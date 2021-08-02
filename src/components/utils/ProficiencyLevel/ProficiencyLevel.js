import classes from './ProficiencyLevel.module.scss';
export default function ProficiencyLevel({ title, amount }) {
    return (
        <div className={classes.ProficiencyLevel}>
            <span>{title}</span>
            <div className={classes.ProficiencyContainer}>
                {Array.from(Array(amount), (e) => (
                    <span className={classes.LevelComplete} />
                ))}
                {Array.from(Array(5 - amount), (e) => (
                    <span className={classes.LevelIncomplete} />
                ))}
            </div>
        </div>
    );
}
