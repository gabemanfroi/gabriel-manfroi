import { Link } from '@material-ui/core';
import { GetApp, TurnedIn } from '@material-ui/icons';
import Person from '@material-ui/icons/Person';
import { useContext } from 'react';
import { CurrentSectionContext } from '../../../contexts/CurrentSectionContext';
import classes from './Left.module.scss';
export default function Left() {
  const { currentSection, setCurrentSection } = useContext(CurrentSectionContext);

  return (
    <div className={classes.LeftContainer}>
      <nav className={classes.Navbar}>
        <ul>
          <li>
            <Person
              className={currentSection === 0 && classes.active}
              fontSize='large'
              onClick={() => {
                setCurrentSection(0);
              }}
            />
          </li>
          <li>
            <TurnedIn
              className={currentSection === 1 && classes.active}
              fontSize='large'
              onClick={() => {
                setCurrentSection(1);
              }}
            />
          </li>
        </ul>
        <Link href='/assets/docs/Gabriel_Manfroi_Resume_4.pdf' download>
          <GetApp fontSize='large' />
        </Link>
      </nav>
    </div>
  );
}
