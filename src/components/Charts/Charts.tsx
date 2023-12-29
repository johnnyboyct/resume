export interface IChartsProps {}

export default function Charts({ }: IChartsProps) {
  const wakaKey = 'waka_7241a25f-6e65-478e-b391-84bdf1fcf1ab'
  return <div className="wrapper" id="Charts">
    <figure id="languages"><embed src="https://wakatime.com/share/@johnnyboyct/8797fa9d-41b3-4e32-b1e2-ed204a5ec62d.svg"></embed></figure>
    <figure id="activity"><embed src="https://wakatime.com/share/@johnnyboyct/c522d5e4-8430-4b41-819c-a0584316e4ae.svg"></embed></figure>
    <figure id="os"><embed src="https://wakatime.com/share/@johnnyboyct/8ca34cfb-7e77-4d3e-9db0-44e655f53a39.svg"></embed></figure>    <figure><embed src="https://wakatime.com/share/@johnnyboyct/38fb08f4-b334-4234-a3ad-07abd56acf67.svg"></embed></figure>
    <figure id="categories"><embed src="https://wakatime.com/share/@johnnyboyct/f90395c5-918d-463a-ac7e-853f99461d70.svg"></embed></figure>
  </div>;
}
