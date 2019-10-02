import React from 'react';  
import {StyleSheet, Text, View,Button,Image,Carousel} from 'react-native';  
// import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
// import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from 'react-native-snap-carousel';
// import swiper from './components/swiper';  
import AppIntroSlider from 'react-native-app-intro-slider';

export default class HomeScreen extends React.Component {  
  constructor(props){
    super(props);
  }


  render() {  
    return (  
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>  
       
          <Image style={styles.avatar}
                  source={{uri: 'https://informatics.wu.ac.th/wp-content/uploads/44104154_10160897037650184_9197814735175680000_n.jpg'}}
                  />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={{fontSize:60}}>WU Tour</Text>
            </View>
          </View>
        </View> 
    );  
  }  
}  
// export class MyCarousel extends React.Component {

//     _renderItem ({item, index}) {
//         return (
//             <View style={styles.slide}>
//                 <Text style={styles.title}>{ item.title }</Text>
//                 <Image style={styles.avatar}
//                   source={{uri: 'https://cdn1.vectorstock.com/i/1000x1000/58/10/travel-sea-island-sunset-logo-vector-21615810.jpg'}}
//                   source={{uri: 'https://cdn1.vectorstock.com/i/1000x1000/58/10/travel-sea-island-sunset-logo-vector-21615810.jpg'}}
//                   />
//             </View>
//         );
//     }

//     render () {
//         return (
//             <Carousel
//               ref={(c) => { this._carousel = c; }}
//               data={this.state.entries}
//               renderItem={this._renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//             />
//         );
//     }
// }
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#6A7C64",
    height:100,
  },
  avatar: {
    width: 300,
    height: 250,
    // borderRadius: 63,
    // borderWidth: 4,
    // borderColor: "white",
    marginBottom:10,
    // alignSelf:'center',
    position: 'absolute',
    marginTop:40
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  }
  

});
