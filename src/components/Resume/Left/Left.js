import { Link } from '@material-ui/core';
import { GetApp, TurnedIn } from '@material-ui/icons';
import Person from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useContext } from 'react';
import { CurrentSectionContext } from '../../../contexts/CurrentSectionContext';
import classes from './Left.module.scss';
export default function Left() {
    const { setCurrentSection } = useContext(CurrentSectionContext);

    return (
        <div className={classes.LeftContainer}>
            <nav className={classes.Navbar}>
                <ul>
                    <li>
                        <Person className={classes.active} fontSize='large' onClick={() => setCurrentSection(0)} />
                    </li>
                    <li>
                        <TurnedIn fontSize='large' onClick={() => setCurrentSection(1)} />
                    </li>
                    <li>
                        <TrendingUpIcon fontSize='large' onClick={() => setCurrentSection(2)} />
                    </li>
                    <li>
                        <PhoneIcon fontSize='large' onClick={() => setCurrentSection(3)} />
                    </li>
                </ul>
                <Link href='/assets/docs/Gabriel_Manfroi_Resume_4.pdf' download>
                    <GetApp fontSize='large' />
                </Link>
            </nav>
        </div>
    );
}
