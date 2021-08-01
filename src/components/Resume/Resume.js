import Center from './Center/Center';
import Left from './Left/Left';
import classes from './Resume.module.scss';
import Right from './Right/Right';

export default function Resume() {
    return (
        <div className={classes.ResumeContainer}>
            <div className={classes.Resume}>
                <Left />
                <Center />
                <Right />
            </div>
        </div>
    );
}
