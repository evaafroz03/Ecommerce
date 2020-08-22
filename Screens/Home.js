import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window').height;
const { width } = Dimensions.get('window').width;

export default class Home extends Component {
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

                <View style={{ marginTop: -40 }}>
                    <ScrollView horizontal={true} style={{ height: '25%' }} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.categoryView} onPress={()=>this.props.navigation.navigate('Details')}>
                            <View style={styles.categoryImageView}>
                                <Image source={require('../assets/saree.jpg')} style={styles.categoryImage} />
                            </View>
                            <Text style={[{ color: 'orange' }, styles.categoryName]}>Sharee</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryView}>
                            <View style={styles.categoryImageView}>
                                <Image source={require('../assets/gown1.jpg')} style={styles.categoryImage} />
                            </View>
                            <Text style={[{ color: '#3a8bc9' }, styles.categoryName]}>Long Gown</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryView}>

                            <View style={styles.categoryImageView}>
                                <Image source={require('../assets/kurti.jpeg')} style={styles.categoryImage} />
                            </View>
                            <Text style={[{ color: '#55c93a' }, styles.categoryName]}>Kurti</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryView}>
                          <View style={styles.categoryImageView}>
                                <Image source={require('../assets/western1.jpeg')} style={styles.categoryImage} />
                            </View>
                            <Text style={[{ color: '#a088c9' }, styles.categoryName]}>Western</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                {/* ///////////////Trending Part */}

                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-around'}}>
                    <Image source={require('../assets/trending.png')} style={styles.trendingImage} />
                    <Text style={[styles.trendingText,{marginRight:20}]}>Trending</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>
                <View style={{
                    height: 165, margin: 7, backgroundColor: '#fff',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 6,
                        height: 6
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 10
                }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity style={{
                            width: 250, height: 150, margin: 7, backgroundColor: '#fff', borderRadius: 50,
                            shadowColor: "#fff",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 20,
                            elevation: 10
                        }}>
                            <ImageBackground source={require('../assets/tren2.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10, }}>
                                <Text style={{ fontFamily: 'playfair-semibold', color: '#fff', fontSize: 20, marginTop: 50, marginLeft: 20, width: 100 }}>For All Summer Clothing</Text>
                            </ImageBackground>

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 250, height: 150, margin: 7, backgroundColor: '#fff',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 5,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <ImageBackground source={require('../assets/tren1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10, }}>
                                <Text style={{ fontFamily: 'playfair-semibold', color: '#fff', fontSize: 20, marginTop: 50, marginLeft: 20, width: 100 }}>For All Summer Clothing</Text>
                            </ImageBackground>

                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 250, height: 150, margin: 7, backgroundColor: '#F9FBFA',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 6,
                                height: 6
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 10,
                            elevation: 10
                        }}>
                            <ImageBackground source={require('../assets/tren1.jpg')} style={{ width: '100%', height: '100%', borderRadius: 10, }}>
                                <Text style={{ fontFamily: 'playfair-semibold', color: '#fff', fontSize: 20, marginTop: 50, marginLeft: 20, width: 100 }}>For All Summer Clothing</Text>
                            </ImageBackground>

                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* //////////////Latest Part  */}

                <View style={{ flexDirection: 'row', marginTop: 10,justifyContent:'space-around' }}>
                    <Image source={require('../assets/latest.png')} style={styles.trendingImage} />
                    <Text style={[styles.trendingText,{marginRight:63}]}>Latest</Text>
                    <Text style={styles.viewAllText}>View all</Text>
                </View>

                <View style={{
                    height: 300, margin: 7, backgroundColor: '#fff',
              
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
                                <Image source={require('../assets/gown1.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
                                </Image>
                                <Image source={require('../assets/Heart.png')} style={{ width: 30, height: 27, marginTop: 15 }}>
                                </Image>
                            </View>
                            <Text style={{ color: '#1a1b1a', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 18}}>Latest Fashion</Text>
                            <Text style={{ color: '#3fecec', fontFamily: 'playfair-semibold', alignSelf: 'center', fontSize: 20 }}>Soft Net Gown</Text>
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
                                <Image source={require('../assets/gownred.jpg')} style={{ width: 80, height: 80, borderRadius: 85, margin: 10 }}>
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
    trendingImage:{ width: 30, height: 30, justifyContent: 'flex-start', marginTop:8 } ,
    trendingText:{ justifyContent: 'flex-start', fontSize: 24, alignContent:'flex-start', color: '#ff0000', fontFamily: 'playfair-semibold' ,margin:8} ,
    viewAllText:{ justifyContent: 'flex-end', fontSize: 18, color: '#31dce9', alignContent:'flex-end', marginLeft: 150, marginTop: 15, fontFamily: 'playfair-semibold',alignItems:'flex-end' } ,
});