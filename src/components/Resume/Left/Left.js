import { Link } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import classes from './Left.module.scss';
export default function Left() {
    return (
        <div className={classes.LeftContainer}>
            <nav className={classes.Navbar}>
                <ul>
                    <li>
                        <PersonIcon className={classes.active} fontSize='large' />
                    </li>
                    <li>
                        <PhoneIcon fontSize='large' />
                    </li>
                </ul>
                <Link href='/assets/docs/Gabriel_Manfroi_Resume_4.pdf' download>
                    <GetApp fontSize='large' />
                </Link>
            </nav>
        </div>
    );
}
