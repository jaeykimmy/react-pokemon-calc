import HorizontalBarGraph from '@chartiful/react-horizontal-bar-graph'

export default function BarChart() {
  return (
    <HorizontalBarGraph
      data={[125, 100, 50, 75, 100, 125]}
      labels={['blach', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019', 'Q1, 2020', 'Q2, 2020']}
      width={400}
      height={300}
      barRadius={7}
      barColor='#82d551'
      baseConfig={{
        hasYAxisBackgroundLines: false,
        xAxisLabelStyle: {
          rotation: 0,
          fontSize: 11,
          width: 60,
          yOffset: 4,
          xOffset: -12
        },
        yAxisLabelStyle: {
          rotation: 30,
          fontSize: 13,
          prefix: '$',
          position: 'bottom',
          xOffset: 15,
          yOffset: -10,
          decimals: 2,
          height: 50
        }
      }}
      style={{
       
        padding: 10,
        paddingTop: 20,
        borderRadius: 20,
        backgroundColor: `#e1f5d6`
      }}
    />

  )

}