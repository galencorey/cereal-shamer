import React from 'react'
import {fetchDeaths} from 'APP/app/reducers/deaths'
import rd3 from 'react-d3-library'
import {node} from './d3file';
console.log("NODE: ", node)

const RD3Component = rd3.Component;

console.log("RD3: ", rd3)
// const PieChart = rd3.createPieChart;
// PieChart.dataset([
//   {label: 'dogs', quantity: 140},
//   {label: 'cats', quantity: 91},
//   {label: 'hamsters', quantity: 88},
//   {label: 'parrots', quantity: 74},
//   {label: 'rabbits', quantity: 63},
// ])
// PieChart.arcClass('arc')



export class ShameVisualizer extends React.Component{
  // componentDidMount(){
  //   this.props.getDeaths()
  //   this.setState({d3: node});
  // }

  // render(){
  //   return(
  //     <div>
  //       <div> SHAME ON YOU </div>
  //       <div id="chart"></div>
  //       <div> {typeof this.props.deaths} </div>
  //     </div>

  //   )
  // }

  constructor(props) {
    super(props);
    this.state = {d3: ''}
  }

  componentDidMount() {
    this.setState({d3: node});
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    )
  }
}



import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({deaths}) => ({deaths}),
  dispatch => ({getDeaths(){
    dispatch(fetchDeaths())
  } 
}),
) (ShameVisualizer)
