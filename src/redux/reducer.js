import {SAVE_VIEW, SAVE_CSS} from './actionTypes';

const initialState = {
    viewPoint: {
        startPosition: 0,
        bottomPosition: 0,
        scaleHeight: 0,
    },
    defaultCss: {
        darkMode: false,
        backgroundColor: '#F3F3F3',
    }
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {            
        case SAVE_VIEW:
            const { startPosition, bottomPosition, scaleHeight } = payload;
            return {...state, viewPoint:{startPosition: startPosition, bottomPosition: bottomPosition, scaleHeight: scaleHeight}};
            
        case SAVE_CSS:
            const { darkMode, backgroundColor } = payload;
            return {...state, defaultCss:{darkMode: darkMode, backgroundColor: backgroundColor}};

        default:
            return state;
    };
};