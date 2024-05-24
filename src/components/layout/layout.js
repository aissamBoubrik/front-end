import AppHeader from '../header';
import AppHero from '../hero';
import AppAbout from '../about';
import AppServices from '../services';
import AppWorks from '../works';
import AppContact from '../contact';
import AppFooter from '../footer';
export default function Layout(){
    return(
        <>
            <div className="App">
                <header id='header'>
                    <AppHeader />
                </header>
            <main>
                <AppHero />
                <AppAbout />
                <AppServices />
                <AppWorks />
                <AppContact />
            </main>
            <footer id="footer">
                <AppFooter />
            </footer>
            </div>
        </>
    )
}