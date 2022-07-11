import React from 'react'
import '../App.css'

function Card(props) {
    console.log(props.item);
    return (
        <div className='card'>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='card-img' src={props.item.img} alt="character"/>
                </div>
                <div className="flip-card-back">
                    <h3 className='inf'>Name : {props.item.name}</h3> 
                    <h3 className='inf'>Nickname :  {props.item.nickname}</h3>
                    <h3 className='inf'>Birthday :  {props.item.birthday}</h3> 
                    <h3 className='inf'>Status :  {props.item.status}</h3> 
                    <h3 className='inf'>Appearance :  {
                        props.item.appearance.map((i,index) => <p key={index} style={{display:'inline'}}>{i} </p>)
                    } </h3>
                    <h3 className='inf'>Portrayed :  {props.item.portrayed}</h3> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
