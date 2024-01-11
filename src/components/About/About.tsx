import './About.css';

export interface IAboutProps { }

export default function About({}: IAboutProps) {
  return (
    <div className="wrapperAbout">
      <p>I'm a</p>
      <b>
        <span>
          web developer<br />
          css cowboy<br />
          self-facilitating media node<br />
          box inside a box<br />
          part of the problem
        </span>
      </b>
    </div>
  );
}
