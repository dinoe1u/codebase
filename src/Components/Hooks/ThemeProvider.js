import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../../CommonConfig';

const initialState = {
    dark: false,
    theme: Colors.light,
    toggle: () => { }
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false); // Default theme is light

    // To toggle between dark and light modes
    const toggle = () => {
        setDark(!dark);
        // StatusBar.setBarStyle(dark ? 'dark-content' : 'light-content');
    };

    // Filter the styles based on the theme selected
    const theme = dark ? Colors.dark : Colors.light;

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeProvider, ThemeContext };