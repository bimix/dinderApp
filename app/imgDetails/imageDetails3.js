import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
//import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Swiperr from '../scenes/Swiperr'

export default class imageDetails3 extends Component{
    constructor(props) {
        super(props)
        this.state = {
          loading: null
        }
      }
    goBackButton3() {
        
           this.setState({loading: true}, () => {
            
            
                 this.props.navigator.replace({
                   
                   title: 'Swip',
                   passProps: this.props
                 })
               })
           
         }
    render(){
      return  (
        <View>
        <Text>Roskilde located 30 km (19 mi) west of Copenhagen on the Danish island of Zealand, is the main city in Roskilde Municipality. With a population of 50,046 (as of 1 January 2016),[1] the city is a business and educational centre for the region and the 10th largest city in Denmark. Roskilde is governed by the administrative council of Roskilde Municipality.
Roskilde has a long history, dating from the pre-Christian Viking Age. Its UNESCO-listed Gothic cathedral, now housing 39 tombs of the Danish monarchs, was completed in 1275, becoming a focus of religious influence until the Reformation. </Text>

<Button
        title="Go back"
        onPress={this.goBackButton3.bind(this)}/>

      </View>
        );
}} 