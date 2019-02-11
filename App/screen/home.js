import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {styles }from '../Styles/styles'
export default class Home extends Component {
    render(){
        return(
            <View style={styles.home}>
                <View style={styles.home2}>
                    <Image style={{height:128,width:128}} resizeMode='contain' source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTun3WzOzX8FaZyerPCKRN2Kk9dEOb8s-npHQdlS5YRf7vd9Rx6"}} />
                    <Text style={{}}>Thank You For Sign-In</Text>
                    <Icon style={{}} name='check' size={32} />
                    <Text style={{}}>Version 2.1</Text>
                </View>
            </View>
        )
    
    }
}