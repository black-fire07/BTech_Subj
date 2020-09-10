import React, { Component } from "react";
import{QuesContext} from '../Context';
import { Document, Page, pdfjs} from "react-pdf";
import Navbar from '../components/Navbar';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class Test extends Component {
  state = { numPages: null, pageNumber: 1 };
  static contextType = QuesContext;
//   constructor(props){
//     super(props)
//     console.log(this.props)
//   }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;
    const {data} = this.props.location
    console.log(data) 
    const{ques} = this.context;
    return (
        <>
        <Navbar/>
         {ques.map(item=>{
            if(item.id===data){
                return<>
                {item.notes.map(p=>{
                    return<div>
                    <div style={{ width: 600 }}>
          <Document
            file={p.pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
                    
                })}
                </>}
         })}

      </>
    );
  }
}