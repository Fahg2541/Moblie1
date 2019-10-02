import React from 'react';  
import {StyleSheet, Text, View,Button,Image,FlatList,TouchableOpacity,Alert} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import { SearchBar } from 'react-native-elements'; 
import {Table, Row, Rows, TableWrapper, Col} from 'react-native-table-component';

export default class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        tableHead: ['Garden tour', 'Toompang tour', 'Lunch', 'Dinner'],
        tableData: [
            ['1', '1', '1', '1'],
            ['1', '0', '1', '0'],
            ['2', '1', '2', '1'],
        ]
        }
    }

    render() {
        const state = this.state;
        return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
        </View>
        )
    }
    }

    const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
    });