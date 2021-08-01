import { Link } from '@material-ui/core';
import { Facebook } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import classes from './Center.module.scss';

export default function Center() {
    return (
        <div className={classes.CenterContainer}>
            <div className={classes.InfoContainer}>
                <p>Gabriel Manfroi</p>
                <span>Developer</span>
                <div class={classes.SocialMediaWrapper}>
                    <Link target='_blank' href='https://www.facebook.com/GabeManfroi/'>
                        <Facebook fontSize='large' />
                    </Link>
                    <Link target='_blank' href='https://www.linkedin.com/in/gabriel-manfroi/'>
                        <LinkedInIcon fontSize='large' />
                    </Link>
                    <Link target='_blank' href='https://github.com/gabemanfroi'>
                        <GitHubIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
