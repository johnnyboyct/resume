import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useCookies } from 'react-cookie';

import {
  Container,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import About from './components/About';
import Charts from './components/Charts';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Intro from './components/Intro';
import MyCard from './components/MyCard';
import Projects from './components/Projects';
import References from './components/References';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import { themeLight } from './theme';

const jsonResume = require('./data/jsonResume.json'); // load resume file
const extraOptions = require('./data/extraOptions.json'); // load resume file


function App() {
	const [cookies, setCookie] = useCookies(["terminal"]);
	const { basics, work, skills, education, references } = jsonResume;
	console.log(jsonResume);

	const { terminalOpts } = extraOptions;

	return (
		<ThemeProvider theme={themeLight}>
			<CssBaseline />
			<Container maxWidth="xl" >

				<Terminal theme={themeLight} basics={basics} terminalOpts ={terminalOpts}/>
				<Header />
				<div className="App">
					<Home jsonResume={jsonResume} />
					<MyCard profileData={basics} />
					<About />
					<Education education={education} />
					<Intro profileData={basics} />
					{/* <Profile profileData={basics} /> */}
					<Projects />
					<Skills skills={skills} />
					<Experience workData={work} />
					<Charts />
					<References references={references} />

				</div>
				<Footer />
			</Container>
		</ThemeProvider>
	);
}

export default App;
