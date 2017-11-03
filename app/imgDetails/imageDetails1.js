import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
//import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Swiperr from '../scenes/Swiperr'

export default class imageDetails1 extends Component{
    constructor(props) {
        super(props)
        this.state = {
          loading: null
        }
      }
    goBackButton1() {
        
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
        <Text>Aarhus officially spelled Århus from 1948 until 31 December 2010) is the second-largest city in Denmark and the seat of Aarhus municipality. It is located on the east coast of the Jutland peninsula, in the geographical centre of Denmark, 187 kilometres (116 mi) northwest of Copenhagen and 289 kilometres (180 mi) north of Hamburg, Germany. The inner urban area contains 269,022 inhabitants (as of 1 January 2017) and the municipal population is 335,684 (as of 2017).[2] Aarhus is the central city in the East Jutland metropolitan area, which had a total population of 1.378 million in 2016.
       </Text>
       <Button
       title="Go back"
       onPress={this.goBackButton1.bind(this)}/>
       
      </View>
        );
}} 