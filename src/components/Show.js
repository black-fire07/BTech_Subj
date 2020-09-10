import React from 'react'

export default function Show({id,name,body}) {
    return (
        <div>
        <div className="comment">
        <p className="comment-header">{name}</p>
    <p className="comment-body">{body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-form-action" >Delete Comment</a>
        </div>
         </div>   
        </div>
    )
}
