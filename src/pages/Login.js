import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className={'authbox'}>
                <div className={'leftbox'}>
                    <div className={'bggreen'}/>
                    <div className={'imgauth'}/>

                </div>
                <div className={'rightbox'}>
                    <div className={'box'}>
                        <div className={'title'}>hello</div>
                        <div className={'input'}>
                            <input className={'inputs'} type={'text'} placeholder={'username'} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
