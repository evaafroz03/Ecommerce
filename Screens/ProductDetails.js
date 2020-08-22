import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ScrollView, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window').height;
const { width } = Dimensions.get('window').width;

export default class ProductDetails extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ marginBottom: 50 }}>
                    <View style={styles.Mainimage}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}><Image source={require('../assets/back.png')} style={{ width: 10, height: 20 }} /></TouchableOpacity>
                        <Image source={require('../assets/dg.jpeg')} style={{ width: 100, height: 220, alignContent: 'center' }}></Image>
                        <Image source={require('../assets/Heart.png')} style={{ width: 28, height: 25, margin: 2 }} />
                    </View>
                    <View style={styles.Thabnil}>
                        <Image source={require('../assets/dg.jpeg')} style={{ width: 40, height: 80, }} />
                        <Image source={require('../assets/dg1.jpeg')} style={{ width: 40, height: 80, opacity: 0.7 }} />
                        <Image source={require('../assets/dg2.jpeg')} style={{ width: 40, height: 80, opacity: 0.7 }} />
                        <Image source={require('../assets/dg3.jpeg')} style={{ width: 40, height: 80, opacity: 0.7 }} />
                    </View>

                    <View style={{ marginLeft: 20, justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: 'playfair-semibold', fontSize: 36, color: '#525556' }}>Long Gown</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontFamily: 'playfair-semibold', color: '#e22e2e', fontSize: 26, marginLeft: 20 }}>$2500</Text>
                        <View style={{ width: 100, justifyContent: 'space-between', flexDirection: 'row', marginRight: 20, marginTop: 20 }}>
                            <Icon style={[{ color: '#dbaa09', }]} size={24} name={'ios-star'} />
                            <Icon style={[{ color: '#dbaa09', }]} size={24} name={'ios-star'} />
                            <Icon style={[{ color: '#dbaa09', }]} size={24} name={'ios-star'} />
                            <Icon style={[{ color: '#dbaa09', }]} size={24} name={'ios-star'} />
                            <Icon style={[{ color: '#dbaa09', }]} size={24} name={'ios-star-half'} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                        <Text style={{ fontFamily: 'playfair-semibold', marginLeft: 15, color: '#525556', fontSize: 22 }}>Color</Text>
                        <Text style={{ fontFamily: 'playfair-semibold', marginRight: 15, color: '#525556', fontSize: 22 }}>Quantity</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 15 }}>
                            <TouchableOpacity ><View style={{ width: 20, height: 20, borderTopRightRadius: 15, borderTopStartRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#42cde3', borderRadius: 45, }}></View></TouchableOpacity>
                            <TouchableOpacity ><View style={{ width: 20, height: 20, borderTopRightRadius: 15, borderTopStartRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'red', borderRadius: 45, marginLeft: 15 }}></View></TouchableOpacity>
                            <TouchableOpacity ><View style={{ width: 20, height: 20, borderTopRightRadius: 15, borderTopStartRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#0800ff', borderRadius: 45, marginLeft: 15 }}></View></TouchableOpacity>
                            <TouchableOpacity ><View style={{ width: 20, height: 20, borderTopRightRadius: 15, borderTopStartRadius: 15, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#00ff33', borderRadius: 45, marginLeft: 15 }}></View></TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginRight: 8 }}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <View style={{ backgroundColor: '#b2b2b2', borderRadius: 5, width: 30, height: 30, }}>
                                    <Image source={require('../assets/minus.png')} style={{ alignSelf: 'center', width: 15, height: 30 }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', marginRight: 10 }}>1</Text>
                            <TouchableOpacity style={{ marginRight: 5 }}>
                                <View style={{ backgroundColor: '#b2b2b2', borderRadius: 5, width: 30, height: 30, }}>
                                    <Image source={require('../assets/plus.png')} style={{ alignSelf: 'center', width: 18, height: 25, marginTop: 2 }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{ width: 350, backgroundColor: '#b2b2b2', height: 2, marginTop: 20, alignSelf: 'center', }} />
                    <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'playfair-semibold', fontSize: 16, lineHeight: 15 }}>{'\u2B24'} Brand - Fashion House.</Text>
                    <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'playfair-semibold', fontSize: 16, lineHeight: 15 }}>{'\u2B24'} Material - Soft Net With Heavy Embroidery.</Text>
                    <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'playfair-semibold', fontSize: 16, lineHeight: 15 }}>{'\u2B24'} Delivery System - ( 2 To 7 ) Days.Home{'\n'}    Delivery Available.</Text>
                    <Text style={{ marginLeft: 20, marginTop: 15, fontFamily: 'playfair-semibold', fontSize: 16, lineHeight: 15 }}>{'\u2B24'} Payment - Cash On Delivery Or Others. </Text>
                    <View style={{ marginLeft: 20, justifyContent: 'flex-start' }}>
                        <Text style={{ fontFamily: 'playfair-semibold', fontSize: 32, color: '#e22e2e' }}>Top Reviews</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'flex-start' }}>
                        <Image source={require('../assets/user.png')} style={{ marginLeft: 15, marginTop: 15, height: 50, width: 50 }} />
                        <Text style={{ marginTop: 20, fontFamily: 'playfair-semibold', fontSize: 20, color: '#525556' }}> John Doe</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'flex-start' }}>
                        <Image source={require('../assets/correct.png')} style={{ marginLeft: 25, marginTop: 5, height: 50, width: 50 }} />
                        <Text style={{ marginTop: 15, fontFamily: 'playfair-semibold', fontSize: 20, color: '#dbaa09', marginLeft: 5 }}>Verified Purchase</Text>
                    </View>

                    <View style={{
                        shadowColor: "#fff",
                        shadowOffset: {
                            width: 12,
                            height: 12
                        },
                        shadowOpacity: 10,
                        shadowRadius: 2,
                        elevation: 10,
                        backgroundColor: '#fff',
                        height: 70, width: 350, alignSelf: 'center'
                    }}>
                        <Text style={{ fontFamily: 'playfair-semibold', fontSize: 16, color: '#525556',alignSelf:'center' ,marginLeft:10}}>This product is really a nice one, same as picture and material also good.  </Text>
                    </View>

                </ScrollView>

                <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.CartButton}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 140, alignSelf: 'center', margin: 10 }}>
                        <Icon name={'ios-cart'} size={26} color={'white'} /><Text style={{ fontSize: 20, color: 'white', fontFamily: 'playfair-semibold', }}>Add To Cart</Text>
                    </View>
                </TouchableOpacity>

            </View>

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
    Mainimage: {
        marginTop: 30,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'

    },
    Thabnil: {
        marginTop: 10,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around',
        shadowColor: "#fff",
        shadowOffset: {
            width: 12,
            height: 12
        },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: '#fff',
        height: 80,
    },
    Thabnil2: {
        marginTop: 10,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around',
        shadowColor: "#fff",
        shadowOffset: {
            width: 12,
            height: 12
        },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: '#fff',
        height: 80,
        fontFamily: 'playfair-semibold',
        fontSize: 20,
        color: '#525556'
    },
    CartButton: {
        position: 'absolute',
        width: 400,
        height: 65,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        bottom: -20,
        backgroundColor: 'red',
        margin: 5,
        alignSelf: 'center',
        elevation: 8
    },

})