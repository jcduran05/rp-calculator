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
        for (let expense in this.state) {
            // console.log(this.state);
            stateArr.push(this.state[expense])
        }
        // console.log(stateArr);
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Vacancy", "CapEx", "Management", 
                "Property", "Repairs", "Insurance", "P&I"],
                datasets: [
                    {
                        data: stateArr,
                    }
                ]
            },
            options: {
                //Customize chart options
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