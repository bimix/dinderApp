import React, { Component } from 'react'
import {
  Text,
  View,  
  Image,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native'

import ImageDetail from '../imgDetails/imageDetails'
import ImageDetail1 from '../imgDetails/imageDetails1'
import ImageDetail2 from '../imgDetails/imageDetails2'
import ImageDetail3 from '../imgDetails/imageDetails3'

//import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}




export default class Swiperr extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loading: null
        }
      }


    goToDetails() {
     
        this.setState({loading: true}, () => {
         
         
              this.props.navigator.replace({
                
                title: 'imageDetail',
                passProps: this.props
              })
            })
        
      }
      goToDetails1() {
        
           this.setState({loading: true}, () => {
            
            
                 this.props.navigator.replace({
                   
                   title: 'imageDetail1',
                   passProps: this.props
                 })
               })
           
         }
         goToDetails2() {
            
               this.setState({loading: true}, () => {
                
                
                     this.props.navigator.replace({
                       
                       title: 'imageDetail2',
                       passProps: this.props
                     })
                   })
               
             }
             goToDetails3() {
                
                   this.setState({loading: true}, () => {
                    
                    
                         this.props.navigator.replace({
                           
                           title: 'imageDetail3',
                           passProps: this.props
                         })
                       })
                   
                 }

  render () {

    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Welcome</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>To</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Denmark</Text>
          </View>
        </Swiper>

        <Swiper style={styles.wrapper} height={240}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 12, height: 12, borderRadius: 7, marginLeft: 3, marginRight: 3, marginTop: 1, marginBottom: 1}} />}
          activeDot={<View style={{backgroundColor: '#ff0000', width: 8, height: 8, borderRadius: 10, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: 20, left: null, right: 10
          }} loop>
         
         
          <View style={styles.slide} >         
            <Image resizeMode='stretch' style={styles.image} source={require('../../images/1.jpg')} />
             <Button
          title="Copenhagen (Click for more details)"
          onPress={this.goToDetails.bind(this)}/>
          </View>
          

          
        
        
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('../../images/2.jpg')}/>
            <Button
            title="Aarhus (Click for more details)"
            onPress={this.goToDetails1.bind(this)}/> 
          </View>
         
         
          
          
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('../../images/3.jpg')} />
            <Button
            title="Aalborg (Click for more details)"
            onPress={this.goToDetails2.bind(this)}/>
          </View>




          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={require('../../images/4.jpg')} />
            <Button
            title="Roskilde (Click for more details)"
            onPress={this.goToDetails3.bind(this)}/>
          </View>
        
        
        
        
        </Swiper>
      </View>
    )
  }

 
} 