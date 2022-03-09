import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { VideoAnim } from '../components/videoAnim';
import Navbar from '../components/navbar';
import { SocialIcons } from '../components/social';
import { Footer } from '../components/footer';

const Home = () => {
  return (
    <div>

      <Navbar />

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

      <section className="become-apedad">
        <div className="container">
          <div className="apedad-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="apedad-heading">
                    <h3>How did Apedad 2662 Become
                      Lost In The Metaverse?</h3>
                  </div>
                  <div className="apedad-img">
                    <img src={process.env.PUBLIC_URL + '/assets/images/monkey-1.png'} alt="img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apedad-para">
                    <p>ApeDad 2662 was a typical hipster nerd working at a big tech firm until he overheard a colleague talking about a device she was working on for the Pentagon.</p>
                    <p>2662 was meandering through the office when he heard the words “teleportation”, “time travel” and “Pentagon” echoing softly through a half open door. He couldn’t help stopping outside to listen. He heard his colleague report that the results of initial trials indicated the device could be used for time travel, teleportation or dematerialization, depending on the frequency settings. 2662 couldn’t believe his luck when she said that the lab was being moved to a new location and everything was currently packed up in the basement floor of the office.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="become-apedad-2">
        <div className="container">
          <div className="apedad-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="apedad-para">
                    <p>2662 had often sat at his desk daydreaming about a device that could instantly whisk him away to any destination he fancied, and then back again in time to meet deadlines. He often daydreamed of traveling back to visit ancient Egypt, Socrates’ Greece or Italy during the Renaissance. The notion that this might actually be possible was simply too intriguing to just forget.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="art-img">
                    <img src={process.env.PUBLIC_URL + '/assets/images/art-2.png'} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shade"><img src={process.env.PUBLIC_URL + '/assets/images/shade-1.png'} alt="shade" /></div>
      </section>

      <section className="become-apedad-2">
        <div className="container">
          <div className="apedad-card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="art-img">
                    <img src={process.env.PUBLIC_URL + '/assets/images/art-3.png'} alt="image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="apedad-para">
                    <p>2662 instantly hatched a plan to find the device. He waited in his office until after midnight, until even the cleaning staff had left, and then ventured down to the basement. He explored the darkly lit corridor using his phone’s flashlight app, and eventually found a room filled with giant glass cases. He approached one of the cases and saw that it contained a strange type of phaser gun. </p>
                    <p>While pondering where he would go first, a surveillance spider drone quietly crept up the case as a gang of gorilla drone soldiers suddenly appeared out of nowhere, all wielding the experimental phasers. Before 2662 even knew what was happening, they had blasted him with a field of quantum radiation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="art-work">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="art-work-img" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src={process.env.PUBLIC_URL + '/assets/images/art-work-1.png'} alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="art-work-img" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src={process.env.PUBLIC_URL + '/assets/images/art-work-2.png'} alt="image" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="art-work-img" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src={process.env.PUBLIC_URL + '/assets/images/art-work-3.png'} alt="image" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="art-work-desc">
                <p>Unfortunately for 2662, the gorilla soldier drones did not have their phaser frequencies set for time
                  travel to ancient Egypt, but for dematerialization. As the quantum radiation emitted by the phasers enveloped
                  2662, he suddenly found himself spiraling through a neon vortex that rapidly began merging his molecules
                  with the fabric of the Metaverse.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="bg-shade"><img src={process.env.PUBLIC_URL + '/assets/images/shade-1.png'} alt="shade" /></div>
      </section>

      <section className="art-cards" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-4">

              <div className="art-card" >
                <div className="card-img">
                  <VideoAnim className="card-img-top" src='/assets/images/art-gif-3.mp4' />
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="apedad-para">
                      <p>He was flattened into two dimensions, pixelated and stripped down to only his essential black and
                        white dots. He began experiencing every possible version of himself and then suddenly disappeared
                        completely.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4">

              <div className="art-card">
                <div className="card-img"><VideoAnim className="card-img-top" src='/assets/images/art-gif-2.mp4' /></div>
                <div className="card">
                  <div className="card-body">
                    <div className="apedad-para">
                      <p>2662 was now everywhere and nowhere, everything and nothing, he became hopelessly lost in the
                        fabric of the Metaverse.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-4">

              <div className="art-card">
                <div className="card-img"><VideoAnim className="card-img-top" src='/assets/images/art-gif-1.mp4' /></div>
                <div className="card">
                  <div className="card-body">
                    <div className="apedad-para">
                      <p>But rather than rage at his fate, 2662 was filled with bliss as he became one with the Metaverse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="become-apedad-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="container">
          <div className="apedad-card">
            <div className="container">
              <div className="col-md-12">
                <div className="ba-heading">
                  <h3>
                    2662 couldn’t let go and merge completely because he wanted to find a way to share the blissful feeling of oneness.
                  </h3><h3>
                    So he created a Collection with a new Meta designed to inspire unity and oneness in the Metaverse:
                  </h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <div className="art-img">
                    <VideoAnim style={{maxWidth:'752px',width:'100%'}} src='/assets/images/art-4.mp4' />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="apedad-cont">
                    <h3>Sharing Creator Royalties With Collectors!</h3>
                    <h6>
                      100% of All ApeDad 2662: Lost In The Metaverse Creator Royalty Fees Are SHARED EQUALLY between holders of Royalty NFTs!
                    </h6>
                    <h6>
                      COLLECT ALL 3 APEDAD 2662 CHARACTERS & CLAIM YOUR FREE ROYALTY NFT!
                    </h6>
                    <h6>
                      EARN LIFETIME PASSIVE INCOME ON ALL SECONDARY SALES FOREVER!
                    </h6>
                  </div>
                  <div className="apedad-para">
                    <p>There are a maximum of 101 Royalty NFTs that may ever be claimed.<br />
                      Royalties are shared equally between total claimed Royalty NFTs.<br />
                      If only 1 is claimed, it will receive 100% of Creator Royalty Fees.<br />
                      If only 10 are claimed, each will earn 10% of the Creator Royalty Fees.<br />
                      If all 101 are claimed, each will earn 0.99% of Creator Royalties.
                    </p>
                    <p>Royalty NFTs are a Free Reward For Top Collectors<br />
                      Transfers and Secondary Sales of Royalty NFTs are not possible.<br />
                      Royalty NFTs are automatically frozen inside the wallet that mints them.
                    </p>
                    <p>Once a Royalty NFT has been minted,<br/>
                    Income Will Passively Accumulate<br/>
                      &amp; May Be Claimed At Any Time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="some-art-work" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-txt">
                <Link to='/mint' className="connect-btn connect-btn-2">
                  Mint Now <FontAwesomeIcon icon={faLongArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>    

      <Footer />

    </div>
  )
}
export default Home;
