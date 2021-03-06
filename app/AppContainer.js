import React, { Component } from 'react'
import { Drawer, View } from 'native-base'
import NavigationExperimental from 'react-native-deprecated-custom-components';
import SideMenu from './components/sideMenu'

import SettingsStore from './stores/settingsStore'
import AuthStore from './stores/authStore'
//import MatchStore from './stores/matchStore'
import ImageDetails from './imgDetails/imageDetails'
import ImageDetails1 from './imgDetails/imageDetails1'
import ImageDetails2 from './imgDetails/imageDetails2'
import ImageDetails3 from './imgDetails/imageDetails3'
import zIndexMarkers from './components/ZIndexMarkers'
//import SplashScene from './scenes/splashScene'
import LoginScene from './scenes/loginScene'
//import MatchScene from './scenes/matchScene'
//import Signup from './components/signup'
import theme from './theme/base-theme'
import Swiper from './scenes/Swiperr'
const settings = new SettingsStore()
const authStore = new AuthStore()
//const matchStore = new MatchStore()

export default class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
      store: {
        settings: settings,
        auth: authStore,
       //matches: matchStore
      },
      theme: theme 
    }
  }

  
  toggleDrawer() {
    this.state.toggled ? this._drawer.close() : this._drawer.open()
  }
  openDrawer() {
    this.setState({toggled: true})
  }
  closeDrawer() {
    this.setState({toggled: false})
  }
  renderScene(route, navigator) {
    switch(route.title) {

      case 'Signupp': {
        return <Signup {...route.passProps} navigator={navigator}/>
      }     
      case 'Sign': {
        return <LoginScene {...route.passProps} navigator={navigator}/>
      }   
      case 'Swip': {
        return <Swiper {...route.passProps} navigator={navigator}/>
      }   
      case 'imageDetail': {
        return <ImageDetails {...route.passProps} navigator={navigator}/>
      }   
      case 'imageDetail1': {
        return <ImageDetails1 {...route.passProps} navigator={navigator}/>
      } 
      case 'imageDetail2': {
        return <ImageDetails2 {...route.passProps} navigator={navigator}/>
      } 
      case 'imageDetail3': {
        return <ImageDetails3 {...route.passProps} navigator={navigator}/>
      } 
      case 'ZIndexMarkers': {
        return <zIndexMarkers  {...route.passProps} navigator={navigator}/>
      } 

      default: {
        return null
      }
    }
  }
  configureScene(route, routeStack) {
    return NavigationExperimental.Navigator.SceneConfigs.PushFromRight
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<SideMenu navigator={this._navigator} theme={this.state.theme}/>}
        onClose={this.closeDrawer.bind(this)}
        onOpen={this.openDrawer.bind(this)}
        openDrawerOffset={0.5}
        >

          <NavigationExperimental.Navigator
            ref={(ref) => this._navigator = ref}
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{
              title: "Sign",
              passProps: {
                stores: this.state.store,
                toggleDrawer: this.toggleDrawer.bind(this),
                theme: this.state.theme
              }
            }}
            />
        </Drawer>
    )
  }
}