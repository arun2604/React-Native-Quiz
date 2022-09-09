import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Title />
        <View style={styles.imgContainer}>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.bfsjz7PZrQCmCuYI7xTjTwHaGP?pid=ImgDet&w=575&h=485&rs=1'}}
            style={styles.img}
            resizeMode='contain'
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')}style={styles.button} >
            <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height: '100%'
    },
    img:{
        height:300,
        width: 300,
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    button:{
        width:'100%',
        backgroundColor: '#184E77',
        padding:15,
        borderRadius: 10,
        alignItems:'center',
        marginBottom:30,
    },
    text:{
        fontSize:22,
        fontWeight:'500',
        color:'white'
    },
})
