import React, { Component } from 'react';
import { AiFillMessage } from "react-icons/ai";
import {FaChess,FaWhatsappSquare,FaRegPaperPlane,Fa} from 'react-icons/fa';
import Title from '../components/Title';

export default class Services extends Component {

    state = {
        services : [
            {
                icon:<AiFillMessage/>,
                title:'Make comments',
                info:'Comment out on the sets to make other users easy to get the important things.'
            },
            {
                icon:<FaWhatsappSquare/>,
                title:'Contact Admin',
                info:'If u have any idea or want any changes, contact us by using feedback options.'
            },
            {
                icon:<FaChess/>,
                title:'Get Extras',
                info:'Additional paper will also be available containing the imp questions to help you conquer the exam.'
            },
            {
                icon:<FaRegPaperPlane/>,
                title:':) I-Notes',
                info:'Get notes of certain topics to help you get a better understanding of the topics.'
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='Services' />
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
