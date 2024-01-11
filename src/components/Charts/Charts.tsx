export interface IChartsProps {}

export default function Charts({}: IChartsProps) {
    const wakaKey = "waka_7241a25f-6e65-478e-b391-84bdf1fcf1ab";
    return (
      <div className="wrapper" id="Charts">

        <img src="https://wakatime.com/badge/user/283e7d17-2ab8-4121-85e8-19138dd5216f.svg?style=for-the-badge" />
            <figure id="languages">
          {/* <embed src="https://wakatime.com/share/@johnnyboyct/8797fa9d-41b3-4e32-b1e2-ed204a5ec62d.svg"></embed> */}
          <embed src="https://wakatime.com/share/@johnnyboyct/24a78fc3-7740-41c3-aed6-74cc0f056727.svg"></embed>
            </figure>
            {/* <figure id="activity">
                <embed src="https://wakatime.com/share/@johnnyboyct/c522d5e4-8430-4b41-819c-a0584316e4ae.svg"></embed>
            </figure> */}
            {/* <figure id="os">
                <embed src="https://wakatime.com/share/@johnnyboyct/8ca34cfb-7e77-4d3e-9db0-44e655f53a39.svg"></embed>
            </figure>{" "} */}
        <figure id="categories">
          <embed src="https://wakatime.com/share/@johnnyboyct/37202f2a-69e7-445a-a3de-2d5d2d9f66d5.svg"></embed>
        </figure>

        </div>
    );
}
