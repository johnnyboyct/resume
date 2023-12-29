import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        paperBG?: string;
        linuxBG?: string
        linuxBGLight?: string
        linuxTermBG?: string
    }

    interface SimplePaletteColorOptions {
        paperBG?: string;
        linuxBG?: string
        linuxBGLight?: string
        linuxTermBG?: string
    }
}
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
const propsOptions = {
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
        MuiTooltip: {
            arrow: true,
        },
        MuiButton: {
            size: 'small',
        },
        MuiButtonGroup: {
            size: 'small',
        },
        MuiCheckbox: {
            size: 'small',
        },
        MuiFab: {
            size: 'small',
        },
        MuiFormControl: {
            margin: 'dense',
            size: 'small',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiRadio: {
            size: 'small',
        },
        MuiSwitch: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
            size: 'small',
        },
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
    },
}
const miscOptions = {
    spacing: 4,
    shape: {
        borderRadius: 4,
    },
}

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#0288d1',
            light: '#29b6f6',
            dark: '#0d47a1',
            contrastText: '#000',
            paperBG: '#f5f5f5',
            linuxBG: '#222222',
            linuxBGLight: '#393939',
            linuxTermBG: '#2f0923'

        },
        secondary: {
            main: '#9c27b0',
        },
        success: {
            main: '#1de9b6',
            light: '#64ffc6',
            dark: '#00c853',
            contrastText: '#ffffff',
        },
        info: {
            main: '#05a7f1',
            light: '#37bdfb',
            dark: '#0370a2',
            contrastText: 'rgba(0,0,0,0.87)',
        },
        warning: {
            main: '#fdd835',
            light: '#ffff8d',
            dark: '#ffd600',
            contrastText: '#757575',
        },
        error: {
            main: '#ad1457',
            light: '#ff80ab',
            dark: '#c51162',
            contrastText: '#ececec',
        },
        background: {
            paper: '#f5f5f5',
            default: '#fafafa',
        },
        text: {
            primary: '#263238',
            secondary: '#78909c',
            disabled: '#455a64',
        },
    },
    ...miscOptions,
    ...propsOptions,
    ...typeographyOptions,
    ...buttonOptions
};


export const themeOptionsDark: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#29b6f6',
            light: '#0288d1',
            dark: '#1d296d',
            contrastText: '#181a1b',
            paperBG: '#f5f5f5'
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
            light: '#64ffc6',
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

