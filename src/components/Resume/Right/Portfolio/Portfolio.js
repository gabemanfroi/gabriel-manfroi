import { Link } from '@material-ui/core';
import classes from './Portfolio.module.scss';
export default function Portfolio() {
    return (
        <section className={classes.PortfolioSection}>
            <div className={classes.PortfolioContainer}>
                <div className={classes.PotfolioItem}>
                    <Link href='https://seclab-website.vercel.app/' target='_blank'>
                        <img
                            src='https://seclab-website.vercel.app/static/media/Camada.2f0542e9.png'
                            alt='Projeto Seclab'
                        />
                    </Link>
                </div>
                <div className={classes.PotfolioItem}>
                    <Link href='https://github.com/gabemanfroi/star-wars-crew' target='_blank'>
                        <img
                            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
                            alt='Projeto Seclab'
                        />
                    </Link>
                </div>
                <div className={classes.PotfolioItem}>
                    <Link href='https://github.com/gabemanfroi/PythonSerialReader' target='_blank'>
                        <img
                            src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'
                            alt='Projeto Seclab'
                        />
                    </Link>
                </div>
                <div className={classes.PotfolioItem}>
                    <Link href='https://campfire-landscape.vercel.app/' target='_blank'>
                        <img
                            src='https://static.vecteezy.com/system/resources/previews/000/208/942/non_2x/vector-beautiful-camping-illustration.jpg'
                            alt='Projeto Seclab'
                        />
                    </Link>
                </div>
                <div className={classes.PotfolioItem}>
                    <Link href='https://bmengenharia.eng.br' target='_blank'>
                        <img
                            src='https://bmengenharia.eng.br/media/architect-3979490_FRJGOhS.jpg'
                            alt='Projeto BM Engenharia'
                        />
                    </Link>
                </div>
                <div className={classes.PotfolioItem}>
                    <Link href='https://proservpb.com.br' target='_blank'>
                        <img
                            src='https://proservpb.com.br/static/website/img/hero-bg.jpg'
                            alt='Projeto Proserv & Solution'
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
