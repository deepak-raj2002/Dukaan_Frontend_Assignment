import React, { useState } from "react";
import Dukaan_logo from '../../Images/Dukaan_logo.png';
import { RxCross2 } from 'react-icons/rx'
import './Home.scss'
const Home = () => {

    const [name,setName]=useState();
    const [flash,setflash]=useState();
    const sloganName=(e)=>{
        setName(e.target.value)
    }

    const onclickhandler=()=>{
        setName('');
    }

    const flashMessage=()=>{
       setflash('Copied')
       console.log(flash);
    };

    return (
        <>
            <div className="home-container">
                <div className="slogan-with-header">
                    <div className="header-container">
                        <div className="logo-with-btns">
                            <div className="logo">
                                <img src={Dukaan_logo} className='logo-img' />
                            </div>
                            <div className="sign-pc">
                                <div className="sign-in">Sign in</div>
                                <div className="pc-btns">
                                <button type="submit" className="btns">Dukaan for PC</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="slogan-container">
                    <div className="slogan-detail-container">
                        <div className="detail-container">
                            <div className="heading">Free slogan maker</div>
                            <div className="about">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</div>
                            <div className="input">
                                <label htmlFor="name" className="label">Word for Your slogan</label>
                                <div className="input-with-delete">
                                    <input type="text" id="name" className='input-value' value={name} onChange={sloganName} />
                                    <RxCross2 className='cross' size={20} onClick={onclickhandler} />
                                </div>
                            </div>
                            <div className="slogan-generate">
                                Generate slogans
                            </div>
                            <hr className="horizontal"></hr>
                            <div className="btn-with-slogan-number">
                                <div className="text">
                                    We have generated 1,023 slogans for "cozy"
                                </div>
                                <div className="btnns">
                                    <button type="button" className="download-btn" >Download all</button>
                                </div>
                            </div>
                            <div className="slogans">
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                    <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>

                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                    <p className="msg">Review the facts cool is the best.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">Review the facts cool is the best.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                    <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan1" onClick={()=>alert("copied")}>
                                <p className="msg">There is no Sore it will Not Heal, No cool it will not Subdue.</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                                <div className="slogan2" onClick={()=>alert("copied")}>
                                <p className="msg">coziness building for tomorrow</p>
                                    <div className="hide">Click to copy</div>
                                </div>
                            </div>

                            <hr className="horizontal"></hr>
                            <div className="numbers-next">
                                <div className="num">
                                    <div className="numbers">
                                        <div className="one">1</div>
                                        <div className="digit">2</div>
                                        <div className="digit">3</div>
                                        <div className="dot">....</div>
                                        <div className="digit">21</div>
                                    </div>
                                    <div className="next">Next &gt;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Home;