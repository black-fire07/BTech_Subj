import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    state={
        isopen : false
    }
    handletoggle = () =>{
        this.setState({isopen:!this.state.isopen})
    }

    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <div className='nav-t'>
                        <Link to='/'>
                            <img src={logo} className='nav-logo' alt='Home'/>
                        </Link>
                        <h className='nav-h'>Fun</h>
                        </div>
                        <button type='button' className='nav-btn' 
                        onClick={this.handletoggle}>
                            <FaAlignRight className='nav-icon'/>
                        </button>
                    
                    </div>
                    <ul className={this.state.isopen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to='/' onClick={this.handletoggle}>Home</Link>
                        </li>
                        <li>    
                            <Link to='/questions' onClick={this.handletoggle}>Questions</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
