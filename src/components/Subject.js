import React, { Component } from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';

export default class Subject extends Component {

    state={
        sub : [
        {    
        name : 'Mathematics-I'},
        {
        name : 'Physics'},
        {name : 'Chemistry'},
        {name : 'BEE'},
        {name : 'Mathematics-II'},
        {name : 'PPS'},
        {name : 'Computer Organization'},
        {name : 'OOPS'},
        {name : 'Automata'},
        {name : 'Discrete Mathematics'},
        {name : 'Mathematics-III'},
        {name : 'Digital Electronics'},
        {name : 'Software Engineering'},
        {name : 'CBNST'},
        {name : 'NAS'},
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title = 'Subjects' />
                <div className='services-center'>
                    {this.state.sub.map(item => {
                        return <Link to={`/questions/${item.name}`} 
                        className='sub'>{item.name}</Link>
                    })}
                </div>
            </section>
        )
    }
}
