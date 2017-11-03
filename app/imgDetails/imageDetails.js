import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'
//import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'
import Swiperr from '../scenes/Swiperr'


export default class imageDetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
          loading: null
        }
      }
    goBackButton() {
        
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
        <Text>Copenhagen is the capital and most populous city of Denmark. The city has a population of 763,908 (as of December 2016), of whom 601,448 live in the Municipality of Copenhagen.[7][8] The larger urban area has a population of 1,280,371 (as of 1 January 2016),[4] while the Copenhagen metropolitan area has just over 2 million inhabitants.[9] Copenhagen is situated on the eastern coast of the island of Zealand; another small portion of the city is located on Amager, and is separated from Malmö, Sweden, by the strait of Øresund. The Øresund Bridge connects the two cities by rail and road.</Text>
        
        <Button
        title="Go back"
        onPress={this.goBackButton.bind(this)}/>

      </View>
        );
}}   

