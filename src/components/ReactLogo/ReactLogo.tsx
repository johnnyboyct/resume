import './ReactLogo.css';

export interface IReactLogoProps {}

export default function ReactLogo({}: IReactLogoProps) {
  return (
    <section>
      <div className="center"></div>

      <article className="ring1">
        <div></div>
      </article>
      <article className="ring2">
        <div></div>
      </article>
      <article className="ring3">
        <div></div>
      </article>
    </section>


  );
}
