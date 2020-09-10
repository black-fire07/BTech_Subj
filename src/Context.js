import React, { Component } from 'react';
import data from './data';
const QuesContext = React.createContext();

export default class QuesProvider extends Component {

    state = {
        ques:[],
        sub:[]
    }

    componentDidMount(){
        let ques = data;
        //let ques = this.fomatdata(data);
        this.setState({ques:ques})
    }

    // fomatdata(data){
    //     let tempdata = data.map(item => {
    //         let id = item.id;
    //         //let chap = item.chap.map;
    //         let cc = item.chap.map(ch =>{
    //             let c=ch.c; 
    //             let q = ch.ques.map(qu =>
    //                 qu.q
    //                 )
    //                 let ques={c,q};
    //                 return ques;
    //             }
    //          );
    //         //let q = item.chap.ques.map(qs => qs.q);
    //         let sub = {id,cc};
    //         return sub;
    //     });
    //     return tempdata;
    // }

    getpage = id =>{
        // let tempques = [...this.state.ques];
        // const sub = tempques.find(question => question.id===id);
        // console.log(typeof(sub))
        // return sub; 
        const a = this.state.ques.map(item => {
            if(item.id===id){
             return item.notes
            }
            })
        return a;    
    }

    

    render() {
        return (
            <QuesContext.Provider
            value={{...this.state,getpage:this.getpage}}>

                {this.props.children}
            </QuesContext.Provider>
        )
    }
}

const QuesConsumer = QuesContext.Consumer;

export {QuesConsumer,QuesContext,QuesProvider};