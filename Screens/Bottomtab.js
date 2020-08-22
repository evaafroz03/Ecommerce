import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native'; 
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,createSwitchNavigator } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Menu from '../Screens/Menu';
import Details from '../Screens/Details';
import Bottomtab from '../Screens/Bottomtab';


const StackNavigator = createStackNavigator({ 
  Details:Details,
  Bottomtab: Bottomtab,
  
  });

class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Image Screen</Text>  
            </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
}); 


const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Menu: { screen: Menu,  
            navigationOptions:{  
                tabBarLabel:'Menu',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor,}]} size={25} name={'ios-menu'}/>  
                    </View>),  
                activeColor: '#000000',  
                inactiveColor: '#fff',  
                barStyle: { backgroundColor: '#3fecec' },  
            }  
        },  
        Cart: {  
            screen: CartScreen,  
            navigationOptions:{  
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },  
      
        Home: { screen: Home,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View >  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),
                       activeColor: '#000000',backgroundColor:'white',  
                       inactiveColor: '#fff',  
                       barStyle: { backgroundColor: '#3fecec' },   
            }  
        }, 
       
        Image: { screen: ImageScreen,  
            navigationOptions:{  
                tabBarLabel:'Favorite',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-heart'}/>  
                    </View>),  
                activeColor: '#000000',  
                inactiveColor: '#fff',  
                barStyle: { backgroundColor: '#3fecec', },  
            }  
        }, 
        Profile: { screen: Profile,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor ,focused}) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#000000',  
                inactiveColor: '#fff',  
                barStyle: { backgroundColor: '#3fecec' },  
            }  
        },  
       
    },  
    {  
      initialRouteName: "Home",  
      activeColor: 'black',  
      inactiveColor: '#fff',  
      barStyle: { backgroundColor: '#3fecec' },
      tabBarLabel: null,  
    },  
);  



const AppStackNavigator = createSwitchNavigator({
    TabNavigator: TabNavigator,
    StackNavigator: StackNavigator,
    // TabBar: TabBar,
  })
  
export default createAppContainer(AppStackNavigator);  