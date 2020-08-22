import React from 'react';  
import {StyleSheet, Text, View,Button,PixelRatio,Image} from 'react-native'; 
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,createSwitchNavigator} from 'react-navigation';  
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Menu from '../Screens/Menu';
import Details from '../Screens/Details';
import ProductDetails from '../Screens/ProductDetails';
// import Bottomtab from '../Screens/Bottomtab';


const StackNavigator = createStackNavigator({ 
  Details:Details,
  ProductDetails:ProductDetails,
  
  }
  );
 
// class Cart extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Cart Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         justifyContent: 'center',  
//         alignItems: 'center'  
//     },  
// }); 
  function getDp() {
    if (PixelRatio.get() && Platform.OS == "android") {
      return 2;
    }
    return PixelRatio.get();
  }
  

const common = {
    height: 54,
    width: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center"
  };
  const selected = {
    ...common,
    backgroundColor: '#F0F7F6',
    borderColor:'#F0F7F6',
    borderWidth:5,
    // marginBottom:20,
  };
  
  const unselected = {
    ...common
  };
const TabNavigator = createBottomTabNavigator(  
    {  
        Menu: {
            screen: Menu,
            navigationOptions: {
                tabBarLabel: "",
                header:null,
                tabBarIcon: ({ focused,tintColor }) => (
                  <View style={focused ? selected : { unselected }}>
                <Icon size={25} name={'ios-menu'} style={[{color: tintColor}]}/>
                  </View>
                )
              }
            },
            Details: {
              screen: Details,
              navigationOptions: {
                  tabBarLabel: "",
                  header:null,
                  tabBarIcon: ({ focused,tintColor }) => (
                    <View style={focused ? selected : { unselected }}>
                   <Icon size={25} name={'ios-heart'} style={[{color: tintColor}]}/>
                    </View>
                  )
                }
              },
 
                Home: {
                    screen: Home,
                    navigationOptions: {
                        tabBarLabel: "",
                        header:null,
                        tabBarIcon: ({ focused,tintColor }) => (
                          <View style={focused ? selected : { unselected }}>
                         <Icon size={25} name={'ios-home'} style={[{color: tintColor}]}/>
                          </View>
                        )
                      }
                    },
                    Cart: {
                      screen: Cart,
                      navigationOptions: {
                          tabBarLabel: "",
                          header:null,
                          tabBarIcon: ({ focused,tintColor}) => (
                            <View style={focused ? selected : { unselected }}>
                            <Icon size={25} name={'ios-cart'} style={[{color: tintColor}]}/>
                            </View>
                          )
                        }
                      },
                
                Profile: {
                    screen: ProductDetails,
                    navigationOptions: {
                        tabBarLabel: "",
                    header:null,
                        tabBarIcon: ({ focused ,tintColor}) => (
                          <View style={focused ? selected : { unselected }}>        
                            <Icon size={25} name={'ios-person'} style={[{color: tintColor}]}/>
                          </View>
                        )
                      }
                    }
      },
      {
        tabBarOptions: {
          activeTintColor: "#3fecec",
          inactiveTintColor: "#fff",
          showLabel: false,
          style: {
            height:getDp() == 2 ? 70 : 90,
            backgroundColor: '#8cf8eb',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            overflow: "hidden",
             paddingBottom:getDp() == 2 ? 0 : 15,
            // ...shadow
          },
          labelStyle: {
            lineHeight: 0
          },
          safeAreaInset: { bottom: "never", top: "never" }
        }
      },
      {  
        initialRouteName: "Home",  
      },  
);  



const AppStackNavigator = createSwitchNavigator({
    TabNavigator: TabNavigator,
    StackNavigator: StackNavigator,
    // TabBar: TabBar,
  },
  )
  
export default createAppContainer(AppStackNavigator);  