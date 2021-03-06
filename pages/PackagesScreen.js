import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';


export default class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {Name:"Garden tour", price:"Price: 150฿", image:"https://informatics.wu.ac.th/wp-content/uploads/44028279_10160897037425184_7363689160902705152_n.jpg"},
                {Name:"Toompang tour", price:"Price: 150฿", image:"http://scaasa.org/wp-content/uploads/2018/07/36fdb1a35cd2f54f95cf2119fb5bc7ed_XL.jpg"},
                {Name:"Lunch", price:"Price: 75฿", image:"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_720,w_1080,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/bok_a_bok_spread_efwvzq.jpg"},
                {Name:"Dinner", price:"Price: 200฿", image:"https://www.rd.com/wp-content/uploads/2017/11/there-s-actually-a-difference-between-dinner-and-supper_440843308-pressmaster-760x506.jpg"},
            ]
        };
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
                        return item.Name;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator}/>
                        )
                    }}
                    renderItem={(post) => {
                        const item = post.item;
                            return (
                                <View style={styles.card}>
                                <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/nolan/96/3498db/add-shopping-cart.png'}}/>
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
                </View>
            </View>
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
    separator: {
    marginTop: 10,
    },
  /******** card **************/
    card:{
    shadowColor: '#00000021',
    shadowOffset: {
        width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
    },
    cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    },
    cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    },
    cardImage:{
    flex: 1,
    height: 150,
    width: null,
    },
  /******** card components **************/
    title:{
    fontSize:18,
    flex:1,
    },
    price:{
    fontSize:16,
    color: "green",
    marginTop: 5
    },
    buyNow:{
    color: "purple",
    },
    icon: {
    width:25,
    height:25,
    },
  /******** social bar ******************/
    socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
    },
    socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    },
    socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    },
    socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    }
});   