import React, { Component } from 'react'
import axios from 'axios';
import Season from './Season';
import spinner from '../img/spinner2.gif'


class Episodes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             epiAttribute : [],
             isLoading: false
        }
    }
    
    componentDidMount() {
        axios.get(`https://www.breakingbadapi.com/api/episodes`)
        .then((response) => {
            this.setState({
                epiAttribute : response.data,
                isLoading: true
            } , () => {console.log(this.state.isLoading)}
            )
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <>
                <h1 className='season-div'> Season 1 </h1>
                {(this.state.isLoading === true)? 
                    <div className='Box'>
                    {this.state.epiAttribute.map((item) => (item.season === '1' && item.series === "Breaking Bad" )?<Season key={item.episode_id} info ={item}/>:null)}
                    </div>
                    :
                    <div className='spinner-div'>
                        <img src={spinner} alt='spinner' />
                    </div>
                }
                
                
                

                <h1 className='season-div'> Season 2 </h1>
                {(this.state.isLoading === true)?
                    <div className='Box'>
                        {this.state.epiAttribute.map((item) => (item.season === '2' && item.series === "Breaking Bad")?<Season key={item.episode_id} info ={item}/>:null)}
                    </div>
                :
                    <div className='spinner-div'>
                            <img src={spinner} alt='spinner' />
                    </div>
                }


                <h1 className='season-div'> Season 3 </h1>
                {(this.state.isLoading === true)?
                <div className='Box'>
                    {this.state.epiAttribute.map((item) => (item.season === '3' && item.series === "Breaking Bad")?<Season key={item.episode_id} info ={item}/>:null)}
                </div>
                :
                <div className='spinner-div'>
                            <img src={spinner} alt='spinner' />
                    </div>
                }


                <h1 className='season-div'> Season 4 </h1>
                {(this.state.isLoading === true)?
                <div className='Box'>
                    {this.state.epiAttribute.map((item) => (item.season === '4' && item.series === "Breaking Bad")?<Season key={item.episode_id} info ={item}/>:null)}
                </div>
                :
                <div className='spinner-div'>
                            <img src={spinner} alt='spinner' />
                    </div>
                }

                <h1 className='season-div'> Season 5 </h1>
                {(this.state.isLoading === true)?
                <div className='Box'>
                    {this.state.epiAttribute.map((item) => (item.season === '5' && item.series === "Breaking Bad")?<Season key={item.episode_id} info ={item}/>:null)}
                </div>
                :
                <div className='spinner-div'>
                            <img src={spinner} alt='spinner' />
                    </div>
                }
            
            </>
        )
    }
}

export default Episodes
