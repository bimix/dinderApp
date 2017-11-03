import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
//import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Swiperr from '../scenes/Swiperr'

export default class imageDetails2 extends Component{
    constructor(props) {
        super(props)
        this.state = {
          loading: null
        }
      }
    goBackButton2() {
        
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
        <Text>Aalborg is Denmark's fourth biggest city with an urban population of 136.000 (including 22.000 in the twin city Nørresundby 600 meters across the Limfjorden. With a population of 210,316 (as of 1 January 2016), the Municipality of Aalborg is the third most populous in the country after Copenhagen and Aarhus.[2] By road Aalborg is 64 kilometres (40 mi) southwest of Frederikshavn, and 118 kilometres (73 mi) north of Aarhus. The distance to Copenhagen is 412 kilometres (256 mi).
            </Text>

            <Button
            title="Go back"
            onPress={this.goBackButton2.bind(this)}/>

      </View>
        );
}} 