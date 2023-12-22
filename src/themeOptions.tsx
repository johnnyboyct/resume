import { ThemeOptions } from '@mui/material/styles';

const typeographyOptions = {
    typography: {
        fontFamily: 'Roboto,Droid Sans',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontSize: 14,
        htmlFontSize: 16,
    },
};

const buttonOptions = {
    components: {
        // MuiButton: {
        //     styleOverrides: {
        //         root: {
        //             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        //             border: 0,
        //             borderRadius: 3,
        //             boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //             color: 'white',
        //             height: 48,
        //             padding: '0 30px',
        //         },
        //     },
        // },
    },
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#359a3a',
            light: '#57c75d',
            dark: '#27642a',
            contrastText: '#ffffff',

        },
        secondary: {
            main: '#ff005b',
            light: '#ea3472',
            dark: '#9e003a',
            contrastText: '#eeeeee',
        },
        divider: 'rgba(236,223,223,0.12)',
        success: {
            main: '#374dc9',
            light: '#5d6cc7',
            dark: '#1d296d',
            contrastText: '#e0e0e0',
        },
        info: {
            main: '#05a7f1',
            light: '#37bdfb',
            dark: '#0370a2',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        warning: {
            main: '#f99e1a',
            light: '#ffb64f',
            dark: '#bd740c',
            contrastText: 'rgba(0,0,0,0.88)',
        },
        error: {
            main: '#f73325',
            light: '#e0584c',
            dark: '#a01a11',
            contrastText: '#ececec',
        },
        text: {
            // hint: '#1d1643',
            primary: '#fefefe',
            secondary: '#fefefe',
            disabled: '#fefefe',
        },
        background: {
            default: '#000000',
            paper: '#181a1b',
        },
    },
    ...typeographyOptions,
    ...buttonOptions
};


export const themeOptionsDark: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#374dc9',
            light: '#5d6cc7',
            dark: '#1d296d',
            contrastText: '#e0e0e0',
        },
        secondary: {
            main: '#ff005b',
            light: '#ea3472',
            dark: '#9e003a',
            contrastText: '#eeeeee',
        },
        divider: 'rgba(236,223,223,0.12)',
        success: {
            main: '#359a3a',
            light: '#57c75d',
            dark: '#27642a',
            contrastText: '#ffffff',
        },
        info: {
            main: '#05a7f1',
            light: '#37bdfb',
            dark: '#0370a2',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        warning: {
            main: '#f99e1a',
            light: '#ffb64f',
            dark: '#bd740c',
            contrastText: 'rgba(0,0,0,0.88)',
        },
        error: {
            main: '#f73325',
            light: '#e0584c',
            dark: '#a01a11',
            contrastText: '#ececec',
        },
        text: {
            // hint: '#1d1643',
            primary: '#fefefe',
            secondary: '#fefefe',
            disabled: '#fefefe',
        },
        background: {
            default: '#000000',
            paper: '#181a1b',
        },
    },
    ...typeographyOptions,
    ...buttonOptions
};

