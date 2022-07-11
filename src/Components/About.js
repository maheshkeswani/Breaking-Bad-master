import React,{ useState } from 'react'
import img2 from '../img/img2.jpg';

function About() {
    const [nullState,]=useState(false);

    const nullVal=()=> 'qwertyui';
    return (
        <div className="About">
        <div className="flex-container">
     
            <div className="flex-item flex-item1">
            <a className='about-aTag' href='https://en.wikipedia.org/wiki/Breaking_Bad'><img src={img2} alt="bg" /></a>
            </div>

            <div className="flex-item flex-item2">
            <div className="text">
                <h1>About The Show</h1>
                <p>Breaking Bad follows a protagonist Walter White 
                (Bryan Cranston), a chemistry teacher who lives in
                New Mexico with his wife (Anna Gunn) and teenage son 
                (RJ Mitte) who has cerebral palsy. White is diagnosed 
                with Stage III cancer and given a prognosis of two 
                years left to live. With a new sense of fearlessness 
                based on his medical prognosis, and a desire to 
                secure his family's financial security, White 
                chooses to enter a dangerous world of drugs and 
                crime and ascends to power.
                </p>
            </div>
            </div>
            {nullState && nullVal}
 
        </div>
         </div>
    )
}

export default About
