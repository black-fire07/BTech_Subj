import img1 from './images/Screenshot (190).png';
import img2 from './images/Screenshot (190).png';
import img3 from './images/Screenshot (190).png';
import img4 from './images/Screenshot (190).png';
import pdf from './images/pdf.pdf'; 

const data =[
    {
        id: 'OOPS',
        chap:[
            {
                c:'1) OBJECT MODELLING',
                ques:[

                    {q:'What is aggregation, association, generalization and composition?'},
                    {q:'Describe event-trace diagram with example.'},
                    {q:'Give a simple dynamic model.'},
                    {q:'Compare object model and dynamic model.'}
                    ]
            },
            {
                c:'2) FUNCTION MODELLING',
                ques:[    
                    {q:'Describe various elements of DATA FLOW DIAGRAMs.'},
                    {q:'Describe a simple functional model.'},
                    {q:'Give a comparison of OMT(Object Modelling Technique) methodology with- (1)SA/SD  (2)JSD .'},
                    {q:'Prepare a DFD for computing the volume and surface area of a cylinder.'},
                    {q:'Describe concept  of constraints in different models .'}
                ]
            },
            {    
                c:'3) JAVA PROGRAMMING',
                ques:[
                    {q:'What is meant by constructor .Explain using java code.'},
                    {q:'What is difference between function overloading and function overriding.'},
                    {q:'Explain multithreading .Explain the life cycle of a thread.'},
                    {q:'Write a program of multiple inheritance using interface in java .'},
                    {q:'What is an Applet ? Describe the life cycle methods of java applet.' }
                ]
            },
            {
                c:'4) JAVA LIBRARY',
                ques:[
                    {q:'Explain exception handling in java.'},
                    {q:'Give an introduction of AWT(Abstract Window Toolkit).'},
                    {q:'Give a detailed account of java.io package.'}
                ]
            }
        ],
        images : [
            {year:'2020',
                imag:[
                    {img:img1},
                    {img:img2},
                    {img:img4}
                ]
            },
            {year:'2021',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2022',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2023',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2024',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2025',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2026',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            }
        ],
        notes:[
            {pdf:pdf}
        ]
    },
    {
        id: 'PPS',
        chap:[
            {
                c:'1) OBJECT ',
                ques:[

                    {q:'What is aggregation, association, generalization and composition?'},
                    {q:'Describe event-trace diagram with example.'},
                    {q:'Give a simple dynamic model.'},
                    {q:'Compare object model and dynamic model.'}
                    ]
            },
            {
                c:'2) FUNCTION G',
                ques:[    
                    {q:'Describe various elements of DATA FLOW DIAGRAMs.'},
                    {q:'Describe a simple functional model.'},
                    {q:'Give a comparison of OMT(Object Modelling Technique) methodology with- (1)SA/SD  (2)JSD .'},
                    {q:'Prepare a DFD for computing the volume and surface area of a cylinder.'},
                    {q:'Describe concept  of constraints in different models .'}
                ]
            },
            {    
                c:'3) JAVA PROGRAMMING',
                ques:[
                    {q:'What is meant by constructor .Explain using java code.'},
                    {q:'What is difference between function overloading and function overriding.'},
                    {q:'Explain multithreading .Explain the life cycle of a thread.'},
                    {q:'Write a program of multiple inheritance using interface in java .'},
                    {q:'What is an Applet ? Describe the life cycle methods of java applet.' }
                ]
            },
            {
                c:'4) JAVA LIBRARY',
                ques:[
                    {q:'Explain exception handling in java.'},
                    {q:'Give an introduction of AWT(Abstract Window Toolkit).'},
                    {q:'Give a detailed account of java.io package.'}
                ]
            }
        ],
        images : [
            {year:'2020',
                imag:[
                    {img:img1},
                    {img:img2},
                    {img:img4}
                ]
            },
            {year:'2021',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2022',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2023',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2024',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2025',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            },
            {year:'2026',
                imag:[
                    {img:img4},
                    {img:img3}
                ]
            }
        ],
        notes:[
            {pdf:pdf}
        ]
    }
]
export default data;