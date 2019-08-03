import React, { PureComponent } from 'react'
import Chart from "chart.js";

export default class LineGraph extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            schedule: props.schedule,
            yearsAnalysis: props.years,
            propertyValue: props.propertyValue
        }
    }
    lineChartRef = React.createRef();
    
    componentDidMount() {
        const myLineRef = this.lineChartRef.current.getContext("2d");
        let labels = this.state.years;
        let balance = [];
        let period = 13
        for (let year in this.state.yearsAnalysis) {
					if (this.state.yearsAnalysis[year] == 1) {
						let b = this.state.schedule[period][3]
						balance.push(Math.floor(b))
					} else {
						period = (12 * this.state.yearsAnalysis[year])
						let b = this.state.schedule[period][3]
						balance.push(Math.floor(b))
					}
				}

        new Chart(myLineRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Year 1","Year 2","Year 3","Year 5","Year 10","Year 15","Year 20","Year 30",],
                datasets: [
                    {
						label: "Remaining Balanace",
                        data: balance,
                        borderColor: ['rgba(142, 94, 162)'],
                        backgroundColor: ['rgba(142, 94, 162, 0.1)'],
                    },
                    {
                        label: "Property Value",
                        data: this.state.propertyValue,
                        borderColor: ['rgba(75, 192, 192, 1)'],
                        backgroundColor: ['rgba(75, 192, 192, 0.1)'],
                    }
                ]
            },
            options: {
                responsive: true,
                //Customize chart options
                legend: {
                    display: false,
                    position: 'right'
                }
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.lineChartRef}
                />
            </div>
        )
    }
}