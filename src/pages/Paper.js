import React, { Component } from 'react';
import{QuesContext} from '../Context';
import Title from '../components/Title';
import Navbar from '../components/Navbar';

export default class Paper extends Component{

    static contextType = QuesContext;
    state = {
        year:this.props.match.params.year,
        single:this.props.match.params.single
    }
    
    render(){
        const{ques} = this.context;
    return (
        <>
        <Navbar/>
        <div  className='paper-t'>
        <Title title='Papers'/>
        </div>
        {ques.map(item=>{
            if(item.id===this.state.single){
                return<>
                {item.images.map(ite => {
                    if(ite.year===this.state.year){
                        return<>
                        {ite.imag.map(image=>{
                           return <div className='paper-box'>
                                <img src={image.img} className='paper-i'/>
                            </div>
                        })}
                        </>
                    }
                })}
                </>
            }
        })}
        </>
    )
    }
}