import React, { createContext } from 'react';
import i18n from 'i18n-js'; // or whatever library you want

import english from './Assets/Languages/english.json';
import hindi from './Assets/Languages/hindi.json';
import tamil from './Assets/Languages/tamil.json';
import telugu from './Assets/Languages/telugu.json';

const en = english;
const hi = hindi;
const ta = tamil;
const te = telugu;

i18n.fallbacks = true;
i18n.translations = { en, hi, ta, te };

const Localization = () => {
    const Context = createContext();

    const Provider = ({ children, localizationValues }) => {
        return (
            <Context.Provider value={localizationValues}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider, Consumer: Context.Consumer };
};

const { Context, Provider, Consumer } = Localization();

export default { Context, Provider, Consumer };
