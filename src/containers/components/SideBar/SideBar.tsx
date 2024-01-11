import Contact from '../../../components/Contact';
import Github from '../../../components/Github';
import MyCard from '../../../components/MyCard';
import Profile from '../../../components/Profile';
import styles from './SideBar.css';

export interface ISideBarProps {
  basics: any
  theme:any
}

export default function SideBar({ basics, theme }: ISideBarProps) {
  return (<div className={styles.wrapper}>
    <Profile profileData={basics} theme={theme} />
      <MyCard profileData={basics} />
      <Contact basics={basics} />
      <Github basics={basics} />
      <Github username='jmarcza2' />
      {/* <Github username='JohnMarczakEcco' />
									<Github username='johnnyboyct@hotmail.com' /> */}
  </div>);
}
