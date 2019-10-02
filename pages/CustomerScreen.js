import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1002, name:"Pawarin", telephone:"084-352-6578", sex:"M", image:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/70329058_2346804588751329_5226443551000231936_n.jpg?_nc_cat=104&_nc_oc=AQnTMsv9G8qhUeceCPDQduSAcm4O_u3r8akVo-Qzd_dC4MARiloZLW9UBOfco6Zopdk&_nc_ht=scontent.fbkk14-1.fna&oh=896074176927f20d315351bace42e029&oe=5DEFC076"},
        {id:1003, name:"Kittiphob", telephone:"084-733-0422", sex:"F", image:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/40361942_1495167817253078_3361554216907702272_n.jpg?_nc_cat=101&_nc_oc=AQlO9EfHIvkPH5n1ZUAB0v-sHpMVecjMvfAvDVHPEinpwW0ZY8W2oQLioNg-TEULGiE&_nc_ht=scontent.fbkk10-1.fna&oh=5a7e370d420671ea4ac5f5b6cd42428d&oe=5E36F77B"},
        {id:1004, name:"Phongsathon", telephone:"092-958-6655", sex:"F", image:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/41413716_1830830300336757_8488493443062956032_n.jpg?_nc_cat=111&_nc_oc=AQnMEIqvqb5Qd_K6CwJRCNRiIWAVW4-iQVyOdi8e-5Eu6LyohW567jkOZQGA-FSHwHw&_nc_ht=scontent.fbkk14-1.fna&oh=6edb44d2fc0b456d4d6713a8fe53d4a6&oe=5E3DC8C0"},
        {id:1005, name:"Fareeda", telephone:"089-744-5678", sex:"M", image:"https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/318298_104453126403209_1769286420_n.jpg?_nc_cat=111&_nc_oc=AQnojvSSJZe5EdazBYzkUJSu_TIvkIxyyc2v1EFN8O7p7LNdj2FkfuidG7u8OGhLr9w&_nc_ht=scontent.fbkk14-1.fna&oh=fe08454ab9e210ac492b4fd615aa9690&oe=5E01E2FB"}
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                </View>
                <Text rkType='primary3 mediumLine'>{Notification.id}
                  </Text>
                <Text rkType='primary3 mediumLine'>{Notification.sex}</Text>
                <Text rkType='primary3 mediumLine'>{Notification.telephone}
                  </Text>
              </View>
            </View>
          );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
});  