import React from 'react';  
import {StyleSheet, Text, View,Button,Image,FlatList,TouchableOpacity,Alert} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
 

export default class StaffScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:7501, name: "Jirayu",   telephone:"089-352-7425",               image:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/32337118_1721546921293472_4688820603111604224_n.jpg?_nc_cat=109&_nc_eui2=AeEO1ifrmVco4fQiNXr6aHSOBgih1xIA8Uqno4jD5-6tfxIJgHdcrVESFfvnbmN7ZKZyvWXL_KJXtyF2jFLkLDZAKlxzFsw5xhJJcFP0GNZFRA&_nc_oc=AQnCM_ovxKPwlBUsB65UeOoT1O8mtAEAKX5qwsY5E1Se5a9dg5FWZTPHxqrp1hZr2ME&_nc_ht=scontent.fbkk14-1.fna&oh=c61b45795d724071501466da2a2e65fd&oe=5DF5D03A"},
        {id:7502, name: "Chonlada",   telephone:"095-752-8531",               image:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/70992407_2111337442304310_3264631588314415104_n.jpg?_nc_cat=107&_nc_eui2=AeEU0m5RcKETkMg8_ghk92BvQwCW1eaccHi26AELbqd6UCBeptC7H02orCriKt5v000ZXGom95O1l-MS-m5O25GWtDmpn-nAu_V_MEWUZfU0QA&_nc_oc=AQnKIvWBGLi1gJjlD3AXd1_-5b1MqwffEmIeQNet6aNAWlGHjaLJwMO-VM7jeV9e32E&_nc_ht=scontent.fbkk14-1.fna&oh=2e4ad4e7ff5b1fd181e4c97258333289&oe=5DF36C3B"},
        {id:7503, name: "Burin",  telephone:"086-254-3597", image:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/26992176_1577678658952472_2901185784984554725_n.jpg?_nc_cat=101&_nc_oc=AQkFNBrMKjfAKNjJ9YNjpu8SKPdlYtb8bETSk3cHxd6UwcdfbybwIf4-GNTIKFyNPs4&_nc_ht=scontent.fbkk10-1.fna&oh=3ddcba92fa8d221dd6db270ee327b3a0&oe=5DEF70FB"} ,
        {id:7504, name: "Kunad", telephone:"094-234-3521",     image:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/42667530_1878967462187912_7709485881370869760_n.jpg?_nc_cat=101&_nc_oc=AQlxu7CRaNPJPqOBKkudAGSnMQYvZzlOm-M65ORjeuThZPWQC6DFhPSacignXgvPeq0&_nc_ht=scontent.fbkk10-1.fna&oh=d0f7d7e1b4585514f92e5546aff1e6c2&oe=5DF92C23"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/>
                </View>
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.id}>{item.id}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.telephone}>{item.telephone}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
  alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
}); 