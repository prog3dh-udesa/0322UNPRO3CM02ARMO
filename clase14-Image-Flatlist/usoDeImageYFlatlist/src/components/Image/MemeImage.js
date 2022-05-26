import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

function MemeImage(){
    return(
        <View>
            {/* <Image
                style={styles.img}
                source={require('../../../assets/ImageMeme/meme.png')}
                resizeMode='contain'
            /> */}
            <Image
                style={styles.img}
                source={{
                    uri:'https://images.cults3d.com/fEJAe2pc1In4Ts0vvFtHtzDhlUI=/https://files.cults3d.com/uploaders/22374940/illustration-file/47d5a1e6-b1b4-4b37-b42c-271d550807b6/%E2%80%98Unos-pedillos%E2%80%99%2C-la-historia-detr%C3%A1s-del-MEME-para-responder-preguntas-inc%C3%B3modas.png'}}
                resizeMode='contain'
            />
        </View>
    )
}



const styles = StyleSheet.create({
    img:{
        height:50,
        width:50
    }
})




export default MemeImage
