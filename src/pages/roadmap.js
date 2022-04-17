import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcons } from '../components/social'
import Navbar from '../components/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../components/footer';
import Helmet from 'react-helmet';

const Roadmap = () => {
    return (
        <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Roadmap &amp; Team</title>
        </Helmet>
            <div>
                <Navbar/>
                {/* Header End */}
                {/* popup button  */}
                {/* Button trigger modal */}
                {/* Modal */}
                {/* popup button End */}
                <section className="main-heading">
                    <div className="container">
                        <div className="heading-txt">
                            <h2>A Visionary Sci-Fi
                                <br />
                                NFT Collectible
                            </h2>
                            <Link to='/mint' className="connect-btn connect-btn-2">
                                Mint Now <FontAwesomeIcon icon={faLongArrowRight} />
                            </Link>
                        </div>
                        <SocialIcons />
                    </div>
                </section>
                <section className="roadmap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="roadmap-heading">
                                    <h3>Roadmap</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                    <div className="pattern-card">
                                        <a href="#">Merge Claim (Automated Group
                                            Transactions for Royalty Claims)</a>
                                        <p>July 2022</p>
                                        <ul>
                                            <li>Special Feature Coming Soon for Top Collectors</li>
                                            <li>Save Over 90% on Gas Fees to Claim Royalties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="patter-card-2">
                                        <p>VIP PRESALE ACCESS</p>
                                        <a href="#">All Collectors Will Get Early Access to Minting of Future Projects By BlockVision Creative</a>
                                        <p>September 2022</p>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5" />
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                    <div className="pattern-card">
                                        <a href="#">Live Dinner &amp; Cocktail Mixer Events For All ApeDad 2662: Lost In The Metaverse Collectors</a>
                                        <p>Summer 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-pattern">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="patter-card-2">
                                        <a href="#">Voting Mechanism For Top
                                            Collectors with Royalty NFTs</a>
                                        <p>Summer 2023</p>
                                    </div>
                                </div>
                                <div className="col-md-2" />
                                <div className="col-md-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='text-white text-center pb-4' >
                    <h1 className='heading-txt mb-4' >Our Team</h1>
                    <div className='container' >
                        <div className=''>
                            <div className='team-member' >
                                <img src="/assets/images/team/2662profile.png" />
                                <div className='bio' >
                                    <h4 className='mb-0 mt-2' >ApeDad 2662</h4>
                                    <h5>Founder</h5>
                                    <p>
                                    2662 first started appearing on the screen of Asher’s phone, laptop and TV, and eventually installed a quantum chip inside his brain to download information directly. 2662 downloaded into Asher all the experiential data of what it looked, felt and sounded like to be lost in the fabric of the metaverse. This is what Asher used to create 2662’s collection. 
                                    </p>
                                </div>
                            </div>
                            <div className='team-member' >
                                <img src="/assets/images/team/asherprofile.png" />
                                <div className='bio' >
                                    <h4 className='mb-0 mt-2' >Asher</h4>
                                    <h5>Creator</h5>
                                    <p>
                                    Asher started coding pixel art on his Apple IIc in 1986, at age 8. He briefly died in an accident when he was 2, and this made him able to travel to other dimensions and communicate with metaphysical beings such as 2662. In addition to graphic art, Asher enjoys producing music, novels, articles, websites & events. 
                                    </p>
                                </div>
                            </div>
                            <div className='team-member' >
                                <img src="/assets/images/team/lyumatrixprofile.png" />
                                <div className='bio' >
                                    <h4 className='mb-0 mt-2' >Lyu</h4>
                                    <h5>Code Master</h5>
                                    <p>
                                    Lyu is a master programmer with an impervious focus and a peaceful spirit. He has previously worked on a variety of NFT and DeFi projects, such as the <a href="https://www.slowmosloth.club/" target="_blank" >SlowMo Sloth Club NFT</a> and <a href="https://app.spiritswap.finance/" target="_blank" >SpiritSwap DeFi Exchange</a> 
                                    </p>
                                </div>
                            </div>
                            <div className='team-member' >
                                <img src="/assets/images/team/kevinprofile.png" />
                                <div className='bio' >
                                    <h4 className='mb-0 mt-2' >Kevin</h4>
                                    <h5>Angel Investor</h5>
                                    <p>
                                    Kevin earned an M.B.A. in Finance in 2008 and in 2017 invested the insurance payout from loss of his home (to California wildfire) into crypto. Kevin founded the One Earth Foundation in 2018 and will donate his share of the proceeds from the sale of the collection to this non-profit, which focuses on sustainable housing, farming &amp; clean water in the developing world.
                                    </p>
                                </div>
                            </div>
                            <div className='team-member' >
                                <img src="/assets/images/team/duckyprofilephoto.png" />
                                <div className='bio' >
                                    <h4 className='mb-0 mt-2' >Pato</h4>
                                    <h5>a.k.a.<br/>Ducky Is Rare<br/>Community Outreach Manager</h5>
                                    <p>
                                    Pato is a glowing ray of sunshine. His smile makes you feel all warm and fuzzy inside. His primary healthy addictions are joining new DeFi pools, shopping for NFTs and talking to you on social media. He is a trusted IRL friend of Kevin and was hand selected to head up community outreach.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer  */}
                <Footer />
            </div>
        </div>
    )
}

export default Roadmap