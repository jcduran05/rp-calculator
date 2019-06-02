import React, { PureComponent } from 'react'
import Chart from "chart.js";

export default class LineGraph extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            Vacancy: props.data.vacancyMonthly,
            CapEx: props.data.capitalExpenditureMonthly,
            Management: props.data.managementFeeMonthly,
            Property: props.data.monthlyPropertyTaxes,
            Repairs: props.data.maintenanceMonthly,
            Insurance: props.data.monthlyInsurance,
            pni: props.data.capitalExpenditureMonthly,
        }
    }
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        let stateArr = [];
        let labels = ["Vacancy", "CapEx", "Management", "Property", "Repairs", "Insurance", "P&I"];
        let formattedLabels = [];
        for (let expense in this.state) {
            stateArr.push(this.state[expense]);
        }
        for (let i = 0; i < stateArr.length; i++) {
            formattedLabels.push(labels[i]+ '    $' + stateArr[i]);
        }
        // console.log(stateArr);
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: formattedLabels,
                datasets: [
                    {
                        data: stateArr,
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#ff0000", "#ffc0cb"],
                    }
                ]
            },
            options: {
                //Customize chart options
                legend: {
                    display: true,
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
                    ref={this.chartRef}
                />
            </div>
        )
    }
}