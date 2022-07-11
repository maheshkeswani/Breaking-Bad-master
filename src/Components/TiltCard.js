import React from 'react'
import season1 from '../img/season1.jpg';
import season2 from '../img/season2.jpg';
import season3 from '../img/season3.jpg';
import season4 from '../img/season4.jpg';
import season5 from '../img/season5.jpg';


function TiltCard(props) {
    return (
        <>
        {props.info.season === '1' 
            &&
            <div className='content'>
            <div className='tiltImg-div'>
                <a href='https://www.youtube.com/watch?v=HhesaQXLuRY'><img src={season1} alt='season-img'></img></a>
            </div>
            <div className='tiltInfo-div'>
                <h3 className='tilt-title'>Title: {props.info.title}</h3>
                <h3 className='tilt-eps'>Episode: {props.info.episode_id}</h3>
                <h3 className='tilt-eps'>Air-date: {props.info.air_date}</h3>
            </div>
        </div>      
        }

        {props.info.season === '2' 
            &&
            <div className='content'>
            <div className='tiltImg-div'>
                <a href='https://www.youtube.com/watch?v=rBI0UE4cIpw'><img src={season2} alt='season-img'></img></a>
            </div>
            <div className='tiltInfo-div'>
                <h3 className='tilt-title'>Title: {props.info.title}</h3>
                <h3 className='tilt-eps'>Episode: {props.info.episode_id}</h3>
                <h3 className='tilt-eps'>Air-date: {props.info.air_date}</h3>
            </div>
        </div>
        }

        {props.info.season === '3' 
            &&
            <div className='content'>
            <div className='tiltImg-div'>
                <a href='https://www.youtube.com/watch?v=ZK2IQ3LbLYk'><img src={season3} alt='season-img'></img></a>
            </div>
            <div className='tiltInfo-div'>
                <h3 className='tilt-title'>Title: {props.info.title}</h3>
                <h3 className='tilt-eps'>Episode: {props.info.episode_id}</h3>
                <h3 className='tilt-eps'>Air-date: {props.info.air_date}</h3>
            </div>
        </div>
        }

        {props.info.season === '4' 
            &&
            <div className='content'>
            <div className='tiltImg-div'>
                <a href='https://www.youtube.com/watch?v=A1hk9q2iCWo'><img src={season4} alt='season-img'></img></a>
            </div>
            <div className='tiltInfo-div'>
                <h3 className='tilt-title'>Title: {props.info.title}</h3>
                <h3 className='tilt-eps'>Episode: {props.info.episode_id}</h3>
                <h3 className='tilt-eps'>Air-date: {props.info.air_date}</h3>
            </div>
        </div>
        }

        {props.info.season === '5' 
            &&
            <div className='content'>
            <div className='tiltImg-div'>
                <a href='https://www.youtube.com/watch?v=3oFofYisAko'><img src={season5} alt='season-img'></img></a>
            </div>
            <div className='tiltInfo-div'>
                <h3 className='tilt-title'>Title: {props.info.title}</h3>
                <h3 className='tilt-eps'>Episode: {props.info.episode_id}</h3>
                <h3 className='tilt-eps'>Air-date: {props.info.air_date}</h3>
            </div>
        </div>
        }
        
        </>
        
    )
}

export default TiltCard
