import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
export default class App extends React.Component {
    render() {
        return (
        <View >
    <Text style={{fontSize:25}}>Peymant</Text>
    <LineChart
    data={{
        labels: ['Garden tour', 'Toompang tour', 'Lunch', 'Dinner'],
        datasets: [{
        data: [5000, 3000, 2000, 4500]
        
        }]
    }}
    width={Dimensions.get('window').width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
        backgroundColor: '#e07e28',
        backgroundGradientFrom: '#e68b3c',
        backgroundGradientTo: '#f09a4f',
      decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
        borderRadius: 16
        }
    }}
    bezier
    style={{
        marginVertical: 8,
        borderRadius: 16
    }}
/>
</View>
        
            );
            }
        }
        const chartConfig = {
            backgroundGradientFrom: '#65db9b',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(250, 255, 146, ${opacity})`,
            strokeWidth: 5 // optional, default 3
            }