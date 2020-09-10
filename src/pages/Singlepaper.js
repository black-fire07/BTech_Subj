import React, { Component } from 'react';
import{QuesContext} from '../Context';
import Title from '../components/Title';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Comment from '../components/Comment';


export default class Singlepaper extends Component {
    static contextType = QuesContext;
    // constructor(props){
    //     super(props)
    //     console.log(this.props)
    // }

    state = {
        single:this.props.match.params.single
    }
    render() {
        const { pageNumber, numPages } = this.state;
        const{ques,getpage} = this.context;
        //const sub = getpage(this.state.single);
        //const{id} = sub;
        //console.log(id)
        return (
            <>
            <Navbar/>
            <div className='auto'></div>
            <Title title='Important Ques'/>
            {
                ques.map(item => {                
                 if(item.id===this.state.single){
                    return <>
                    <div className='design'>
                    {item.chap.map(item=>
                     <div>
                       <h4 className='chapter'>{item.c}</h4>
                        <ul className='ques-sec'>
                         {item.ques.map(it => 
                            <li className='ques-no'>
                               {it.q}
                           </li>)}
                      </ul>
                      </div>
                  )}
                  </div>
                  <div>
                      <Title title='Papers'/>
                  </div>
                  <div className='image'>
                  {
                    item.images.map(y=>{

                       return <div className='design-image'>
                           <h className='design-h'>{y.year}</h><Link to={`/questions/${item.id}/${y.year}`} className='design-p'>
                            Click Here...
                            </Link>
                            </div>
                    })
                  }
                  </div>
                  <div>
                      <Title title='Notes'/>
                  </div>
                  {item.notes.map(p=>{
                      return  <div className='notes'>
                          
                          <Link to ={{pathname:`/questions//pdf`,data:`${item.id}`}} className='design-note'>Click</Link>
                        
                      </div>
                  })}
                  <Comment/>
                  </>
                  }   
              })
          }
     </>

        )
    }
}
