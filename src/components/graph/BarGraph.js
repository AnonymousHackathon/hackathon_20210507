import CanvasJSReact from './canvasjs.react';
import React, {Component} from 'react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HistoryGraph extends Component {	
    
    render() {
        console.log(this.data);
      const options = {
        title: {
          text: "Amount of Spendings (Monthly)"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "January",  y: this.props.data[0]  },
                      { label: "Feburary", y: this.props.data[1]  },
                      { label: "March", y: this.props.data[2]  },
                      { label: "April", y: this.props.data[3]  },
                      { label: "May", y: this.props.data[4]  },
                      { label: "June",  y: this.props.data[5]  },
                      { label: "July",  y: this.props.data[6]  },
                      { label: "August",  y: this.props.data[7]  },
                      { label: "September",  y: this.props.data[8]  },
                      { label: "October",  y: this.props.data[9]  },
                      { label: "November",  y: this.props.data[10]  },
                      { label: "December", y: this.props.data[11]  },
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }
export default HistoryGraph;