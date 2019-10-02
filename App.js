import React from 'react';  
import {StyleSheet, Text, View,Button,Image,styles} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './pages/HomeScreen';
import StaffScreen from './pages/StaffScreen'; 
import SStaffScreen from './pages/SStaffScreen';
import CustomersScreen from './pages/CustomerScreen';
import PackagesScreen from './pages/PackagesScreen';
import BookingScreen from './pages/Booking';
import ProfileScreen from './pages/Profile';
import Payment from './pages/Payment';
import AssingmentProfile from './pages/AssingmentProfile';
import way from './pages/way';





  
// class StaffScreen extends React.Component {  
//   render() {  
//     return (  
//         <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//             <Text style={{fontSize:60}}>WU </Text>  
//         </View>  
//     );  
//   }  
// }  
// class SStaffScreen extends React.Component {  
//   render() {  
//     return (  
//         <View style={styles.container}>  
//           <Text>Profile Screen</Text>  
//         </View>  
//     );  
//   }  
// }  
// class CustomersScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Image Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// class PackagesScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// class BookingScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// } 
// class ExtrapointsScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// }   
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         justifyContent: 'center',  
//         alignItems: 'center'  
//     },  
// });  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
                navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={30} name={'ios-home'}/>  
                    </View>),  
                    activeColor: '#f0edf6',  
                    inactiveColor: '#226557',  
                    barStyle: { backgroundColor: '#9400D3' },  
            }  
        },  
        Staff: { screen: StaffScreen,  
            navigationOptions:{  
                tabBarLabel:'Staff',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={30} name={'ios-people'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },
        SStaff: { screen: SStaffScreen,  
            navigationOptions:{  
                tabBarLabel:'search',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={30} name={'ios-search'}/>  
                    </View>),  
                activeColor: '#f0edf6',  
                inactiveColor: '#226557',  
                barStyle: { backgroundColor: '#9400D3' },  
            }  
        },    
        Customers: { screen: CustomersScreen,  
            navigationOptions:{  
                tabBarLabel:'Customer',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={30} name={'ios-contact'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Packages: {  screen: PackagesScreen,  
            navigationOptions:{  
                tabBarLabel:'Packages',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={30} name={'ios-gift'}/>  
                    </View>),
                    activeColor: '#f0edf6',  
                    inactiveColor: '#226557',  
                    barStyle: { backgroundColor: '#9400D3' },  
            }  
        },  
        Booking: {  screen: BookingScreen,  
        navigationOptions:{  
            tabBarLabel:'Booking',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={30} name={'ios-book'}/>  
                </View>),
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' }, 
        }  
    },
    Payment: {  screen: Payment,  
      navigationOptions:{  
          tabBarLabel:'Payment',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={30} name={'ios-wallet'}/>  
              </View>),
               activeColor: '#f0edf6',  
               inactiveColor: '#226557',  
               barStyle: { backgroundColor: '#9400D3' }, 
      }  
  },
  way: {  screen: way,  
    navigationOptions:{  
        tabBarLabel:'Profile',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={30} name={'ios-car'}/>  
            </View>),
            activeColor: '#f60c0d',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#f69b31' }, 
    }  
},
        Profile: {  screen: ProfileScreen,  
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={30} name={'ios-contact'}/>  
                </View>),
                activeColor: '#f0edf6',  
                inactiveColor: '#226557',  
                barStyle: { backgroundColor: '#9400D3' },  
        }  
    },
    AssingmentProfile: {  screen: AssingmentProfile,  
      navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={30} name={'ios-contact'}/>  
              </View>),
              activeColor: '#f60c0d',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#f69b31' }, 
      }  
  },
},
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#9400D3' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  
