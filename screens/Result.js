import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({navigation,route}) => {
    const params = route.params
  return (
    <View style={styles.container}>
      <Text>Result</Text>
      <View style={styles.imgContainer}>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.bfsjz7PZrQCmCuYI7xTjTwHaGP?pid=ImgDet&w=575&h=485&rs=1'}}
            style={styles.img}
            resizeMode='contain'
            />
        </View>
        <View>Your Result is: {params}</View>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

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
        alignItems:'center'
    }
})