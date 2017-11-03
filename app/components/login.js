import React, { Component } from 'react'
import {
  
  InputGroup,
  Input,
  Icon,
  View,
  Spinner,
 

} from 'native-base'

import { 
  Alert, 
  StyleSheet, 
  Button 
} from 'react-native'

import { observer } from 'mobx-react/native'



const styles = {
  container: {
    flex: 1
  },
  text: {
    color: '#fff',
    fontSize: 55,
    fontWeight: 'bold'
  }
}


@observer
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: null
    }
  }

  updateEmail(email) { this.setState({email}) }
  updatePassword(password) { this.setState({password}) }


  signIn() {
    const { auth } = this.props.stores
    const { email, password } = this.state

    if(!email) {
      Alert.alert('Error', 'Please write your email!')
      return
    }
    if(!password) {
      Alert.alert('Error', 'Please write your password!')
      return
    }

    this.setState({loading: true}, () => {
      auth.signIn({email, password})
        .then(() => {
          this.props.navigator.replace({
            title: 'Swip',
            passProps: this.props
          })
          Alert.alert('Welcome', 'Log In sucessfully!')
        })
    })

    
  }

  signUp() {
    const { auth } = this.props.stores
    const { email, password } = this.state

    this.setState({loading: true}, () => {
      auth.signUp({email, password})
        .then(() => {
          auth.signIn({email, password})
            .then(() => {
              this.props.navigator.replace({
                title: 'Sign',
                passProps: this.props
                
              })
              
                Alert.alert('Account has been created', 'Please Log In')
              
            })
        })
    })
  }


  forgot() {
    const { auth } = this.props.stores
    const { email, password } = this.state
    if(!email) {
      Alert.alert('Error', 'Email is invalid or you didnt enter an email')
      return
    }
    if(password) {
      Alert.alert('Error', 'No password! Please write only your email')
      return
    }
    this.setState({loading: true}, () => {
      auth.forgotPassword(email).then(() => {
        this.setState({loading: true}, () => {
          Alert.alert('Forgot Password', 'We have sent a link to your email to reset your password!')
        })
      })
    })
  }



  render() {
    const { loading } = this.state
    const { auth } = this.props.stores

    return (
      <View theme={this.props.theme}>
        <InputGroup style={{marginBottom:10}} boarderType='round'>
          
          <Input style={{color:"#fff"}}
            placeholder='Please Enter Email'
            placeholderTextColor="#fff"
            onChangeText={(email) => { this.updateEmail(email)}} />
        </InputGroup>
        <InputGroup style={{marginBottom:10}} boarderType='round'>
          
        
          <Input style={{color:"#fff"}}
            placeholder='Please Enter Password'
            placeholderTextColor="#fff"
            secureTextEntry={true}
            onChangeText={(pass) => { this.updatePassword(pass)}} />
        </InputGroup>


       
       <Button rounded block
        style={{marginBottom:10}}
  onPress={this.signIn.bind(this)}
  title={"Log In"}/> 
  

  <View style={styles.text}>
  <Button rounded block
  style={{marginBottom:10}}
  onPress={this.signUp.bind(this)}
  title={"Sign Up"}/> 
     </View>


  <Button rounded block
  style={{marginBottom:10}}
  onPress={this.forgot.bind(this)}
  title={"Forgot password?"}/> 
            
          



       </View>
       
    )
  }
}
