import { createContext, useState } from 'react';

export const CurrentSectionContext = createContext({});

export function CurrentSectionProvider({ children }) {
    const [currentSection, setCurrentSection] = useState(0);
    return (
        <CurrentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
            {children}
        </CurrentSectionContext.Provider>
    );
}
