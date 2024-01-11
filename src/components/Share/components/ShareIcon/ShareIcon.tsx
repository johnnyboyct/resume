import styles from './ShareIcon.css';

export interface IShareIconProps {
  // title?: string;
  // color?: string;
  // size?: number;
  // url: string;
  // network?: string;
  // round?: boolean;
  children?: string | JSX.Element | JSX.Element[]
  text?: string
  color?: string

}

// export default function ShareIcon({ title, color = 'default', size = 24, url, network, round = false }: IShareIconProps) {
export default function ShareIcon({ children, text='Share!' , color = '#000'}: IShareIconProps) {
  return <div className={styles.wrapper}>
    <div className="social-link">
      {children}
      <div className="nav-label" style={{backgroundColor: color}}>
        <span>{text}</span>
      </div>
    </div>
  </div>;
}
