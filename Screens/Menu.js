import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window').height;
const { width } = Dimensions.get('window').width;

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.searchbar}>
                    <Image source={require('../assets/search.png')} style={styles.searchImage} />
                    <Text style={styles.searchText}>search</Text>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        onChangeText={text => onChangeText(text)}
                    />
                </View>

                {/* //////////////CategoriList   */}
                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-around' }}>
                    <Image source={require('../assets/saree.jpg')} style={styles.trendingImage} />
                    <Text style={[styles.trendingText,{marginRight:63}]}>Sharee</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>

                <View style={{
                    height: 250, margin: 7, backgroundColor: '#fff',
              
                }}>

                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 10 }} />
                                <Image source={require('../assets/red.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest  Sharee</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Katan Red</Text>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10}}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin: 10, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,
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
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 10 }} />
                                <Image source={require('../assets/b.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Sharee</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Navy Blue</Text>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:10, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>



                {/* ///////////////Trending Part */}

                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-around' }}>
                    <Image source={require('../assets/gown1.jpg')} style={styles.trendingImage} />
                    <Text style={[styles.trendingText]}>Long Gown</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>

                <View style={{
                    height: 250, margin: 7, backgroundColor: '#fff',
              
                }}>

                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={{
                            width: 180, height: 220, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,flex:1,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }} onPress={()=>this.props.navigation.navigate('ProductDetails')}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between',}}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 5 }} />
                                <Image source={require('../assets/gownred.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 5}}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 10 }}>
                                </Image>
                            </View>

                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Soft Net Gown</Text>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around',flex:1}}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold',  fontSize: 16,alignSelf:'flex-end'}}>$2500</Text>
                                <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                                <Icon style={[{ color: 'yellow',}]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow',}]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow',}]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', }]} size={20} name={'ios-star'} />
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 180, height: 230, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,
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
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 10 }} />
                                <Image source={require('../assets/gown1.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Red Gown</Text>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:10, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>




                {/* //////////////Latest Part  */}

                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-around' }}>
                    <Image source={require('../assets/kurti.jpeg')} style={styles.trendingImage} />
                    <Text style={[styles.trendingText,{marginRight:50}]}>Kurti</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>

                <View style={{
                    height: 250, margin: 7, backgroundColor: '#fff',
              
                }}>

                    <ScrollView horizontal={true}>
                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 10 }} />
                                <Image source={require('../assets/k1.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion Kurti</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Soft Sweet Lilen</Text>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10}}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin: 10, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} /><Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 190, height: 230, margin: 5, backgroundColor: '#F9FBFA', borderRadius: 10,
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
                                <Image source={require('../assets/Cart.png')} style={{ width: 30, height: 30, margin: 10 }} />
                                <Image source={require('../assets/k2.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion Kurti</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Soft Ash Lilen</Text>
                            <Text style={{ color: '#3f4241', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16 }}>Any Color Available</Text>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 10 }}>
                                <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 16, margin:10, marginRight: 60 }}>$1500</Text>

                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />
                                <Icon style={[{ color: 'yellow', marginTop: 15 }]} size={20} name={'ios-star'} />

                            </View>
                        </TouchableOpacity>

                    </ScrollView>
               


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
        margin: 20,
        marginTop: 30,
        backgroundColor: '#f5f5f5',
        borderColor: '#3fecec',
        borderWidth: 1,
        alignSelf: 'center',
        width: 350,
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
    },
    categoryView: {
        borderRadius: 85,
        width: 120,
        height: 150,
    },
    categoryName: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'playfair-semibold'
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 85
    },
    categoryImageView: {
        alignSelf: 'center',
        marginTop: 40
    },
    trendingImage:{ width: 50, height: 50, justifyContent: 'flex-start', marginTop:8 ,marginLeft:5,borderRadius:45,margin:2} ,
    trendingText:{ justifyContent: 'flex-start', fontSize: 24, alignContent:'flex-start', color: '#ff0000', fontFamily: 'playfair-semibold' ,marginTop:10} ,
    viewAllText:{ justifyContent: 'flex-end', fontSize: 18, color: '#31dce9', alignContent:'flex-end', marginLeft: 100, marginTop: 15, fontFamily: 'playfair-semibold',alignItems:'flex-end' } ,
});