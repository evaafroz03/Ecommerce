import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }
    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }


    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')} style={{ justifyContent: 'flex-start', alignItems: 'center', width: 10, height: 18, marginTop: 45, marginLeft: 2 }}>
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
                    {/* <Image source={require('../assets/filter.png')} style={{width:30,height:35,alignItems:'center',marginTop:35,marginRight:10}} /> */}
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
                }}>
                    {/* <Image source={require('../assets/Cart.png')} style={{width:50,height:50,marginTop:-180}}></Image> */}
                    <Text style={{ fontFamily: 'playfair-semibold', fontSize: 36, color: '#ff0000', marginTop: 85, }}>Your Cart</Text>
                </View>

                <View style={{ padding: 5, }}>
                    <TouchableOpacity style={styles.list}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', margin: 5, borderRadius: 5, margin:5  }}><Image source={require('../assets/gown1.jpg')} style={{ width: 120, height: 200, borderRadius: 15 }} /></View>
                        <View style={{ justifyContent: 'center', alignItems: 'stretch', flex: 1 }}>
                            <Text style={styles.lightText}>Barbi Gown</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 120 }}><Image source={require('../assets/color.png')} style={{ width: 20, height: 20, borderRadius: 45, marginLeft: 18, margin: 2 }} /><Text style={{ fontFamily: 'playfair-semibold', fontSize: 16 }}>Sky Blue</Text></View>
                            <Text style={styles.lightText1}>XL</Text>
                            <Text style={[styles.lightText1, { color: 'red', fontSize: 26 }]}>$1500</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 200, marginTop: 10 }}>
                                <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}>
                                    <View style={{ backgroundColor: '#b2b2b2', borderRadius: 5, width: 30, height: 30, }}>
                                        <Image source={require('../assets/minus.png')} style={{ alignSelf: 'center', width: 15, height: 30 }} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', marginRight: 5, marginTop: 5 }}>1</Text>
                                <TouchableOpacity style={{ marginTop: 5 }}>
                                    <View style={{ backgroundColor: '#b2b2b2', borderRadius: 5, width: 30, height: 30, }}>
                                        <Image source={require('../assets/plus.png')} style={{ alignSelf: 'center', width: 18, height: 25, marginTop: 2 }} />
                                    </View>
                                </TouchableOpacity>
                                <Image source={require('../assets/remove.jpg')} style={{width:30,height:40,marginLeft:20}}/>
                            </View>

                        </View></TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                    <View style={styles.total}>
                        <Text style={[styles.lightText1,{fontSize:20}]}>TOTAL</Text>
                        <Text style={[styles.lightText1,{fontSize:26,color:'red'}]}>$1500</Text>
                    </View>
                    <View style={{}}>
                        <View style={{width:50,height:30,borderRadius:35,backgroundColor:'#3fecec'}}></View>
                    </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#fff",


    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        flexDirection: 'row',
        paddingVertical: 4,
        margin: 15,
        borderRadius: 10,
        height: 220,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 15,
            height: 12
        },
        shadowOpacity: 0.3,
        shadowRadius: 50,
        marginTop: 15,
        elevation: 20
    },
    list1: {
        flexDirection: 'row',
        paddingVertical: 4,
        margin: 15,
        borderRadius: 10,
        height: 220,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 15,
            height: 12
        },
        shadowOpacity: 0.3,
        shadowRadius: 50,
        marginTop: 20,
        elevation: 20
    },
    lightText: {
        fontSize: 30,
        marginLeft: 20,
        marginTop: -30,
        color: '#14e7ff',
        fontFamily: 'playfair-semibold',
    },
    lightText1: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 5,
        fontFamily: 'playfair-semibold',
    },
    searchbar: {
        flexDirection: 'row',
        marginBottom: 2,
        marginTop: 30,
        backgroundColor: '#f5f5f5',
        borderColor: '#3fecec',
        borderWidth: 1,
        alignItems: 'center',
        width: 300,
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
    total:{
       
            flexDirection: 'column',
            paddingVertical: 4,
            margin: 15,
            borderRadius: 10,
            height: 100,
            backgroundColor: '#fff',
            shadowColor: "#000",
            shadowOffset: {
                width: 15,
                height: 12
            },
            shadowOpacity: 0.3,
            shadowRadius: 50,
            marginTop: 20,
            elevation: 20,
            width:350,
       
    }
});