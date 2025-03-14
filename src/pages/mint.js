import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { ConnectModal } from '../components/connectModal';
import { Footer } from '../components/footer'
import { useMulticallContract, useNftContract } from '../web3s/hooks/useContracts';
import { fetchNftStats, useNftStats, useNftTypes } from '../web3s/hooks/useNftStats';
import useActiveWeb3React from '../web3s/hooks/useWeb3';
import { switchNetwork, trimAddress } from '../web3s/utils';
import { mintNfts, mintRoyaltyNft, mintNftFree, mintNftsDiscounted } from '../web3s/utils/nft';
import 'react-toastify/dist/ReactToastify.css';
import { MintTimer } from '../components/timer';
import { LoadingAnim } from '../components/loading';
import { CHAIN_ID } from '../web3s/constants';
import Helmet from 'react-helmet';
import { ethers } from 'ethers';
import { useNfts } from '../hooks/useNfts';

const Mint = () => {

  const [timeLeft, setTimeLeft] = useState(0);

  const { account, deactivate, library, chainId } = useActiveWeb3React();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updater, setUpdater] = useState(0);

  const disconnect = async () => {
    await deactivate();
  }

  const stats = useNftStats(account, updater);

  const myNfts = useNfts(account);

  const rStats = useNftTypes(myNfts, 0);

  const [mintAmount, setMintAmount] = useState(3);

  const [minting, setMinting] = useState(0);

  const nftContract = useNftContract(library);

  const mint = async () => {
    if (!mintAmount) {
      return;
    }
    if (mintAmount > 33 - stats.balance) {
      toast.warning('You cannot mint more than 33 NFTs');
      return;
    }
    setMinting(1);
    const res = await mintNfts(nftContract, mintAmount, stats.price.mul(mintAmount));
    if (res) {
      setUpdater(updater + 1);
      toast.success('Minted Successfully!');
    } else {
      toast.error('Minting Failed!');
    }
    setMinting(0);
  }

  const mintWLFree = async () => {
    setMinting(2);
    const res = await mintNftFree(nftContract);
    if (res) {
      setUpdater(updater + 1);
      toast.success('Minted Successfully!');
    } else {
      toast.error('Minting Failed!');
    }
    setMinting(0);
  }

  const mintWL = async (disc) => {
    if (!mintAmount) {
      return;
    }
    let amount = mintAmount;
    if (disc === 88) {
      amount = 1;
    }
    if (amount > 33 - stats.balance) {
      toast.warning('You cannot mint more than 33 NFTs');
      return;
    }

    const price = stats.price.mul(100 - disc).mul(mintAmount).div(100);

    setMinting(disc);
    const res = await mintNftsDiscounted(nftContract, amount, price, disc);
    if (res) {
      setUpdater(updater + 1);
      toast.success('Minted Successfully!');
    } else {
      toast.error('Minting Failed!');
    }
    setMinting(0);
  }

  const [rMintable, setRMintable] = useState(false);
  const [rMintTokens, setRMintTokens] = useState([0, 0, 0]);
  const [rMinting, setRMinting] = useState(false);

  useEffect(() => {
    const unused = rStats.filter(i=>!i.used);

    let found = false;
    let token1 = 0, token2 = 0, token3 = 0;

    if (unused.length >= 3 && !stats.royaltyToken) {
      for (var i = 0; i < unused.length - 2; i++) {
        for (var j = i+1; j < unused.length - 1; j++) {
          for (var k = j+1; k < unused.length; k++) {
            if ((unused[i].type | unused[j].type | unused[k].type) === 7) {
              found = true;
              token1 = unused[i].id;
              token2 = unused[j].id;
              token3 = unused[k].id;
              break;
            }
          }
          if (found) break;
        }
        if (found) break;
      }
    }

    if (!stats.royaltyToken && found) {
      setRMintable(true);
      setRMintTokens([token1, token2, token3]);
    } else {
      setRMintable(false);
      setRMintTokens([0,0,0]);
    }
  }, [stats.royaltyToken, rStats]);

  const mintRoyalty = async () => {
    setRMinting(true);
    const res = await mintRoyaltyNft(nftContract, rMintTokens);
    if (res) {
      setUpdater(updater + 1);
      toast.success('Minted Successfully!');
    } else {
      toast.error('Minting Failed!');
    }
    setRMinting(false);
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mint Page</title>
      </Helmet>
      <section id="login-reg">
        <div className="overlay pb-120">
          <div className="container">
            <div className="top-area mb-5">
              <div className="d-flex align-items-center justify-content-between">
                <Link to="/">
                  <a className="back-home" href="">
                    <img src="./assets/images/left-icon.png" alt="image" />
                    Back To Home
                  </a>
                </Link>
                {
                  account ? (
                    chainId === CHAIN_ID?
                    <button type="button" className="connect-btn" onClick={disconnect} ><strong>Disconnect</strong><br/><small>({trimAddress(account)})</small></button>:
                    <button type="button" className="connect-btn" onClick={()=>switchNetwork(library)} >Switch Network</button>
                    )
                    :
                    <a className="cmn-btn d-inline-block text-center ml-3" onClick={() => setShow(true)}>Connect Wallet</a>
                }
              </div>
            </div>
            <MintTimer />

            <div className="connect-wallet">
              <ConnectModal show={show} handleClose={handleClose} />
            </div>

            <div className="row pt-5 d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="login-reg-main text-center">
                  <h4>Mint your NFT</h4>
                  <div className="form-area">
                    <form action="#">
                      <div className="form-group">
                        <label style={{ float: 'left' }}>Select amount</label>
                        <label style={{ float: 'right' }}>max 33</label>
                      </div>
                      <div style={{ clear: 'both' }} />
                      {stats.balance > 0 && <p className='text-center px-3 mt-2' >You have already minted {stats.balance} NFTs</p>}
                      <div className="form-group">
                        <input id="mint_amount" className='mint-input' min={1} max={33 - stats.balance} placeholder="Amount" type="number" value={mintAmount}
                          onChange={(e) => setMintAmount(e.target.value)}
                        />
                      </div>
                      <div className="form-group recover pt-4 mx-auto" style={{ maxWidth: 200 }} >
                        <p className='d-flex justify-content-between' style={{ textAlign: 'center' }}><span>Price :</span> <span>{ ethers.utils.formatEther(stats.price)} ETH</span></p>
                        {/* <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Total --------- <span id="joerichards_total_amount">0.102</span> ETH</p> */}
                        <p className='d-flex justify-content-between' style={{ textAlign: 'center', fontWeight: 'bold' }}><span>Total NFTs :</span> <span id="joerichards_total_amount">{mintAmount}</span></p>
                        <p className='d-flex justify-content-between' style={{ textAlign: 'center', fontWeight: 'bold' }}><span>Total Cost :</span> <span id="joerichards_total_amount">
                          { ethers.utils.formatEther(stats.price.mul(mintAmount || 0)) } ETH</span> </p>
                      </div>
                      <div className="form-group pt-4">
                        { (!stats.whitelist22d && !stats.whitelist55d) && <button disabled={!account || stats.balance >= 33 || minting} id="joerichards_mint_button" className="cmn-btn" onClick={mint} >
                          {minting==1?<><LoadingAnim size={20} /> Please wait...</>:'Mint'}
                        </button> }
                        {
                          stats.whitelist55d && <div>
                            <p><small>You're whitelisted to mint at 55% discount</small></p>
                            <button disabled={minting} onClick={()=>mintWL(55)} className="cmn-btn">{minting==55?<><LoadingAnim size={20} /> Please wait...</>:'Mint at 55% Discount'}</button>
                          </div>
                        }
                        {
                          stats.whitelist22d && <div>
                            <p><small>You're whitelisted to mint at 22% discount</small></p>
                            <button disabled={minting} onClick={()=>mintWL(22)} className="cmn-btn">{minting==22?<><LoadingAnim size={20} /> Please wait...</>:'Mint at 22% Discount'}</button>
                          </div>
                        }
                        {
                          stats.whitelistFree && <div>
                            <p><small>You're whitelisted to mint 1 ApeDad for free</small></p>
                            <button disabled={minting} onClick={mintWLFree} className="cmn-btn">{minting==2?<><LoadingAnim size={20} /> Please wait...</>:'Mint 1 ApeDad Free'}</button>
                          </div>
                        }
                        {
                          stats.whitelist88d && <div>
                            <p><small>You're whitelisted to mint 1 ApeDad at 88% discount</small></p>
                            <button disabled={minting} onClick={()=>mintWL(88)} className="cmn-btn">{minting==88?<><LoadingAnim size={20} /> Please wait...</>:'Mint 1 at 88% Discount'}</button>
                          </div>
                        }
                      </div>
                    </form>
                    <div className="account">
                      <p id="txStatus" style={{ fontSize: '14px' }}>PS: Gas fee is cheaper if you mint many at once!</p>
                    </div>
                    <div className='stats mt-3'>
                      <p><strong>{stats.totalSupply}</strong> / 1111 NFTs Minted</p>
                      <p><strong>{stats.royaltySupply}</strong> / 101 Royalty NFTs Minted</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-white text-center mb-6 mx-auto' style={{ maxWidth: '800px' }} >
        <div className='container'>
          <h2 className='mb-4' >
            Free Royalty NFT Minting Conditions:
          </h2>
          <p>
            #1- Wallet Currently Holds At Least 3 NFTs from L.I.T.M. Collection <br />
            #2- Wallet Holds NFTs Containing All 3 Types of ApeDad 2662: OG, 3D &amp; Pixelated
          </p>
          <div className='row' >
            <div className='col col-4 text-center' >
              <h5>O.G.</h5>
              <img className='w-100' src='/assets/images/char-og.jpg' alt="" />
            </div>
            <div className='col col-4 text-center' >
              <h5>3D</h5>
              <img className='w-100' src='/assets/images/char-3d.jpg' alt="" />
            </div>
            <div className='col col-4 text-center' >
              <h5>Pixelated</h5>
              <img className='w-100' src='/assets/images/char-px.jpg' alt="" />
            </div>
          </div>
          <div className='mt-5' >
            <h3>Additional Terms &amp; Conditions:</h3>
            <p>An 11% Creator Royalty Is Applied to All Secondary Sales </p>
            <p>Creator Royalties Are SHARED EQUALLY Between All Existing Royalty NFTs</p>
            <p>Max Supply of 101 Royalty NFTs</p>
            <p>Only One Royalty NFT Max Per Wallet</p>
            <p>L.I.T.M. NFTs Can Only Be Used Once to Mint Royalty NFT</p>
            <p>-No Staking Required-<br />
              NFTs from Main Collection May Be Sold<br />
              Immediately After Minting Royalty NFT
            </p>
            <p>
              Royalty NFTs are Permanently Frozen to Minting Wallet<br />
              Royalty NFTs Cannot Be Sold or Transferred
            </p>
            <p>
              Royalty NFTs are a Free Reward For Top Collectors<br />
              &amp; Entitle The Minting Wallet To Lifetime Passive Income
            </p>
            <p>
              Holders of Royalty NFTs May Claim Their Share of Royalties At Any Time
            </p>
            <p></p><br />
            <p><strong>Coming Soon!</strong></p>
            <h4>MERGED CLAIM FEATURE</h4>
            <p>
              This feature will allow 11 wallets holding Royalty NFTs
              to Pool Claims together in a single automated transaction
              and save over 90% on gas fees to claim royalty shares.
            </p>
          </div>
          <div className='mb-5 mt-4'>
            <button onClick={mintRoyalty} id="royalty_mint_button" disabled={!rMintable || rMinting} className="cmn-btn">{!rMinting?'CLAIM YOUR FREE ROYALTY NFT':<><LoadingAnim size={20} /> Please wait...</>}</button>
          </div>
        </div>
      </section>

      <ToastContainer theme='dark' />

      <Footer />
    </div>
  )
}

export default Mint
