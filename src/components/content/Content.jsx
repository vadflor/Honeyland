import './content.scss';
import BeeMan from '../../img/s4-honey-img1 1.png';
import GreenBee from '../../img/s6-bee1 1.png';
import IronBee from '../../img/s6-bee2 1.png';
import Logo from '../../img/Play1st-logo.png';
import PinkLine from '../pinkLine/PinkLine';
import Play1stLogo from '../../img/Play1st-03 1.png'
import HoneylandLogo from '../../img/honeyland-logo.png';

const Content = () => {
    return (
        <div className="main">
            <h1 className="main-title">How does it work?</h1>
            <div className="steps-block">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-text">Create an account on Play1st or Login</div>
                    <img className='step-img' src={BeeMan} alt="" />
                    <button className="step-btn">Login to Play1st</button>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-text">Download and Play Honeyland</div>
                    <img className='step-img' src={GreenBee} alt="" />
                    <a href='#' className="step-link">Download honeyland</a>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-text">Screenshot or Record your gameplay
                        <p className='step-text__thin'>Post it publicly on your Social Media (Facebook, TikTok, Twitter etc.) <br /> Add Hashtags #play1st #honeyland</p>
                    </div>
                    <img className='step-img' src={IronBee} alt="" />
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-text">Share your social media post on Discord
                        <p className='step-text__thin'>Share your content on the rewards channel</p>
                    </div>
                    <img className='step-img' src={BeeMan} alt="" />
                </div>
                <div className="step">
                    <div className="step-number">5</div>
                    <div className="step-text">Wait to be rewarded for both Honeyland and Play1st Tokens</div>
                    <img className='step-img step-img-logo' src={Logo} alt="" />
                </div>
            </div>
            <PinkLine />
            <h3 className='second-title'>About</h3>
            <div className="brand-block">
                <div className="brand-item">
                    {/* <div className="brand-img-block"> */}
                        <img src={Play1stLogo} alt="" className="brand-img brand-img__play1st" />
                    {/* </div> */}
                    <div className="brand-text">
                        <div className="brand-title">Discover, play, & earn.</div>
                        <div className="brand-desc">Play1st is a gaming app store where users can find, download, and play a wide range of web3 games. Play1st also enables users to find gaming communities worldwide, interact with other gamers, and find earning opportunities throughout the ecosystem
                        </div>
                    </div>
                </div>
                <div className="brand-item">
                    {/* <div className="brand-img-block"> */}
                        <img src={HoneylandLogo} alt="" className="brand-img" />
                    {/* </div> */}
                    <div className="brand-text">
                        <div className="brand-title">The World's First Rewarding Infiniverse</div>
                        <div className="brand-desc">Honeyland is the first title from Hexagon Studios, A fun, player-first AAA game using traditional web2 gaming fundamentals with a seamless web3 onboarding experience into the Honeyverse where you'll find even more hyper-casual, luck and chance and AAA games.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content