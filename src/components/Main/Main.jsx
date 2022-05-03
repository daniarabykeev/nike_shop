import React from 'react';
import './Main.css';
// import {Button} from 'antd'
import video2 from '../../media/video2.mp4'
import img1 from '../../media/img1.jpeg'
import img2 from '../../media/img2.jpeg'
import img3 from '../../media/img3.png'
import img4 from '../../media/img4.png'
import img5 from '../../media/img5.png'
import img6 from '../../media/img6.png'

const Main = () => {
    return (
        <div className='main-page container'>
            {/* <div> */}
                <video className='main-video' autoPlay muted loop src={video2}/>
            {/* </div> */}
            <div className='main-section-2'>
                <h4 className='main-title'>NIKELAND ON ROBLOX</h4>
                <div className='main-btns'>
                    <button className='btn btn-1'>Discover Airtopia</button>
                    <button className='btn btn-2'>Shop Kids'</button>
                </div>
            </div>
            <p className='p2 container'>Discover Our Apps</p>
            <div className='main-img container' >
                <img src={img1} alt="img"/>
                <img src={img2} alt="img" />
            </div>
            <p className='p2' style={{marginTop:"30px"}}>Join Us</p>
            <img id="img3" style={{width:"100%"}} src={img3}/>
            <p style={{marginTop:"30px"}} className='p2 container'>More Nike</p>
            <div className='main-img2 container'>
                <img src={img4} alt="img" />
                <img src={img5} alt="img"/>
                <img src={img6} alt="img" />
            </div>
        </div>
    );
};

export default Main;







