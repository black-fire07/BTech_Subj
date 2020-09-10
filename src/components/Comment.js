import React, { Component } from 'react'
import Title from './Title';
import Show from './Show';

export default class Comment extends Component {

    state = {
        value: '',
        bo: "",
        showComments: false,
        comments: [
          {id: 1, author: "Bot", body: "This is my first comment."},
          {id: 2, author: "Bot2", body: "Garima Jeena is loveeee."}
        ]
    }

    handlec(event){
        this.setState({value: event.target.value})
    }

    handled(event){
        this.setState({bo: event.target.value})
    }    
    
    handleSubmit(event) { 
        event.preventDefault();   // prevents page from reloading on submit
        let author = this.state.value;
        let body = this.state.bo;
        const comment =  {
            id: this.state.comments.length + 1,
            author,
            body
          };
          this.setState({value:'',bo:'', comments: this.state.comments.concat([comment]) });
      }
    
    render() {
     
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
    }
        return (
            <div>
                <Title title='Join the discussion'/>
                <div className='form'>
                <form className="comment-form" onSubmit={this.handleSubmit.bind(this)} >
        <div className="comment-form-fields">
          <input placeholder="Name" type='text' value ={this.state.value} onChange={this.handlec.bind(this)}></input>
          <br/>
          <hr/>
          <textarea placeholder="Comment" rows="4" bo={this.state.bo} onChange={this.handled.bind(this)}></textarea>
          <hr/>
        </div>
        <div className="comment-form-actions">
          <button className="comment-form-action" type="submit">Post Comment</button>
          
      </div>

      <div className='e'><h3 className='f'>Comments</h3>
        <button className='g' onClick={this.showcom}>{buttonText}</button>
        {console.log(this.state)}
      </div>
      <div>
      {this.state.comments.map((com,id) =>{
            return <Show key={id} id={com.id} name={com.author} body={com.body}/>
        })}
        </div>
      </form>
      </div>
            </div>
        )
    }
}
