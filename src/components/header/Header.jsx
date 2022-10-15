import Play1st from '../../img/Play1st-logo.png';
import Honeyland from '../../img/honeyland-logo.png';
import LeftImg from '../../img/s1-img2-hl.png';
import RightImg from '../../img/s1-img1-hl.png';
import './header.scss';
import PinkLine from '../pinkLine/PinkLine';
import Timer from '../timer/Timer';

const Header = () => {

    const d = new Date("2022-10-20T00:00:00");
    // console.log(d);
    const isoDate = d.toISOString();
    // console.log(isoDate);

    return (
        <div className='content'>
            <div className="logo">
                <img
                    className='logo-play'
                    src={Play1st}
                    alt="Play1st logo"
                />

                <span className='vertical-line'></span>
                <img className='logo-honey' src={Honeyland} alt="Honeyland logo" />
            </div>
            <div className="header">
                <img className='left-img' src={LeftImg} alt="" />
                <div className="header-middle">
                    <div className="header-title">
                        Play1st <span className='thin'>x</span> Honeyland
                    </div>
                    <div className="header-text">
                        <span className='bold-underline'>Play1st</span> is partnering with <span className='bold-underline'>Honeyland</span> to empower gamers in Africa with digital identity.
                    </div>
                    <Timer endDate={isoDate} />
                </div>
                <img className='right-img' src={RightImg} alt="" />
            </div>
            <PinkLine />
        </div>
    )
}

export default Header