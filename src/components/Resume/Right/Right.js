import { useContext } from 'react';
import { CurrentSectionContext } from '../../../contexts/CurrentSectionContext';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import classes from './Right.module.scss';
import Skills from './Skills/Skills';

export default function Right() {
    const { currentSection } = useContext(CurrentSectionContext);

    const sections = [<About />, <Portfolio />, <Skills />];

    return (
        <div className={classes.RightContainer}>
            <div className={classes.RightContent}>{sections[currentSection]}</div>
        </div>
    );
}
