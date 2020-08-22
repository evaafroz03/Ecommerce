import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window').height;
const { width } = Dimensions.get('window').width;

export default class Details extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <ScrollView style={styles.container}>
              <View style={{flexDirection:'row',justifyContent:'space-around',flex:1}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')} style={{justifyContent:'flex-start',alignItems:'center',width:10,height:18,marginTop:45,marginLeft:2}}>
              <Image source={require('../assets/back.png')} />
              </TouchableOpacity>
                   <View style={styles.searchbar}>
                    <Image source={require('../assets/search.png')} style={styles.searchImage} />
                    <Text style={styles.searchText}>search</Text>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={text => onChangeText(text)}
                    />
                </View>
                <Image source={require('../assets/filter.png')} style={{width:30,height:35,alignItems:'center',marginTop:35,marginRight:10}} />
                </View>

               <View style={{flexDirection:'row'}}>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Details')} style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }} >
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/b.jpg')} style={{ width: 80, height: 100, borderRadius:5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Red Gown</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/p.jpg')} style={{ width: 80, height: 100, borderRadius: 5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Royel Blue</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row'}}>

                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/b.jpeg')} style={{ width: 80, height: 100, borderRadius:5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Royel Blue</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/red1.jpeg')} style={{ width: 80, height:100, borderRadius:5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Black Deep</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row'}}>

        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/red.jpg')} style={{ width: 80, height:100, borderRadius:5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Red Brown</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 8, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/w.jpg')} style={{ width: 80, height:100, borderRadius:5, margin: 15 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10,}}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Red Light</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:6, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 10 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>
        </View>

          </ScrollView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: width,
        height: height
    },
    searchbar: {
        flexDirection: 'row',
        marginBottom:10,
        marginTop: 30,
        backgroundColor: '#f5f5f5',
        borderColor: '#3fecec',
        borderWidth: 1,
        alignItems: 'center',
        width: 280,
        borderRadius: 35,
        height: 45,
    },
    searchImage: {
        width: 18,
        height: 18,
        alignSelf: 'center',
        marginLeft: 20
    },
    searchText: {
        color: '#c6bfbf',
        alignSelf: 'center',
        marginBottom: 5,
        fontSize: 18,
        padding: 5
    }
})