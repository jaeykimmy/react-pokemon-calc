import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'
import VerticalBarGraph from '@chartiful/react-vertical-bar-graph'

export default function BarChart(props) {
  console.log(props)
  return (
    // <HorizontalBarGraph
    //   data={props.stats}
    //   labels={['blach', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
    //   width={400}
    //   height={300}
    //   barRadius={7}
    //   barColor='blue'
    //   baseConfig={{
    //     hasYAxisBackgroundLines: false,
    //     xAxisLabelStyle: {
    //       rotation: 0,
    //       fontSize: 11,
    //       width: 60,
    //       yOffset: 4,
    //       xOffset: -12
    //     },
    //     yAxisLabelStyle: {
    //       rotation: 30,
    //       fontSize: 13,
    //       prefix: '$',
    //       position: 'bottom',
    //       xOffset: 15,
    //       yOffset: -10,
    //       decimals: 2,
    //       height: 50
    //     }
    //   }}
    //   style={{
       
    //     padding: 10,
    //     paddingTop: 20,
    //     borderRadius: 20,
    //     backgroundColor: `#79befd`
    //   }}
    // />
    <VerticalBarGraph
  data={props.stats}
  labels={props.stringStats}
  width={500}
  height={300}
  barRadius={5}
  barWidthPercentage={0.65}
  barColor='blue'
  baseConfig={{
    hasXAxisBackgroundLines: false,
    hasXAxisLabels: false,
    xAxisLabelStyle: {
      position: 'right',
    }
  }}
  style={{
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    backgroundColor: `#79befd`,
    width: 500
  }}
/>
  )

}