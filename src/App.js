import { CurrentSectionProvider } from './contexts/CurrentSectionContext';
import { ScreenSizeProvider } from './contexts/ScreenSizeContext';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <ScreenSizeProvider>
            <CurrentSectionProvider>
                <HomePage />
            </CurrentSectionProvider>
        </ScreenSizeProvider>
    );
}

export default App;
