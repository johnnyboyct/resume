import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';

import { useCookies } from 'react-cookie';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

import {
  ChakraProvider,
  extendTheme as chakraExtendTheme,
} from '@chakra-ui/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
} from '@mui/material';
import {
  createTheme as muiCreateTheme,
  THEME_ID,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material/styles';

import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Intro from './components/Intro';
import MyCard from './components/MyCard';
import Profile from './components/Profile';
import References from './components/References';
import Terminal from './components/Terminal';
import SideBar from './containers/components/SideBar';
import {
  themeDark,
  themeLight,
} from './theme';

const jsonResume = require("./data/jsonResume.json"); // load resume file
const extraOptions = require("./data/extraOptions.json"); // load resume file
const chakraTheme = chakraExtendTheme();
const materialTheme = muiCreateTheme();

function App() {
    const [cookies, setCookie] = useCookies(["terminal"]);
    const { basics, work, skills, education, references } = jsonResume;
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    const [theme, setTheme] = useState(themeLight);
    const toggleDarkTheme = () => {
        setTheme(toggleDarkMode ? themeDark : themeLight);
        setToggleDarkMode(!toggleDarkMode);
    };
    const { terminalOpts } = extraOptions;

    return (
        <ChakraProvider theme={chakraTheme} resetCSS>
            <MaterialThemeProvider theme={{ [THEME_ID]: theme }}>
                <CssBaseline />
                <BrowserRouter>

                    <Container maxWidth="xl">
                        <Box sx={{ flexGrow: 1 }}>
                            <Header jsonResume={jsonResume}>
                                <IconButton sx={{ ml: 1 }} onClick={toggleDarkTheme} color="inherit">
                                    {theme.palette.mode === "dark" ? (
                                        <Button component="label" variant="contained" startIcon={<Brightness7Icon />}>
                                            Light
                                        </Button>
                                    ) : (
                                        <Button component="label" variant="contained" startIcon={<Brightness4Icon />}>
                                            Dark
                                        </Button>
                                    )}
                                </IconButton>
                            </Header>
                        </Box>
                        <Terminal theme={themeLight} basics={basics} terminalOpts={terminalOpts} />


                        <main>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container>
                                    <Grid item xs={2} sx={{ px: ".5em" }}>
                                        <SideBar basics={basics}  />
                                    </Grid>
                                    <Grid item xs={10} sx={{ px: ".5em" }}>

                                        <SlideRoutes>
                                            <Route path="/" element={<Home jsonResume={jsonResume} />} />
                                            <Route path="/intro" element={<Intro profileData={basics} />} />
                                            <Route path="/experience" element={<Experience workData={work} showDateStats={false} />} />
                                            <Route path="/about" element={<Profile profileData={basics} />} />
                                            <Route path="/contact" element={<MyCard profileData={basics} />} />
                                            <Route path="/references" element={<References references={references} />} />
                                        </SlideRoutes>


                                        {/* <Home jsonResume={jsonResume} /> */}
                                        {/* <ReactLogo /> */}
                                        {/* <About /> */}
                                        {/* <Education education={education} /> */}
                                        {/* <Projects /> */}
                                        {/* <Skills skills={skills} /> */}
                                        {/* <Experience workData={work} showDateStats={false} /> */}
                                        {/* <Charts /> */}
                                        {/* <References references={references} /> */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </main>
                    </Container>
                </BrowserRouter>
                <Footer />
            </MaterialThemeProvider>
        </ChakraProvider>
    );
}

export default App;
