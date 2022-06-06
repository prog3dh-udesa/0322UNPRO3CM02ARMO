import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {Component} from 'react'
import MyCamera from '../../components/MyCamera'

class NewMessage extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'',
            mostrarCamara: true,
            urlFoto:''
        }
    }

    // cuandoSubaLaImagen(url){
    //     console.log('Esta es la url')
    //     console.log(url)
    //     this.setState({
    //         mostrarCamara:false,
    //         urlFoto: url
    //     }, ()=> console.log('Esta es la url de la foto' + this.state.urlFoto))
    // }

    render(){

        return (
        // <>
        // {
        //     this.state.mostrarCamara
        //     ?
        //     <MyCamera cuandoSubaLaImagen={(url)=> this.cuandoSubaLaImagen(url)}/>
        //     :
            <View>
                <Text>Enviale un mensaje a Facu</Text>
                <TextInput 
                style={styles.textarea}
                onChangeText= {(text)=> this.setState({
                    message: text
                })}
                value={this.state.message}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        this.props.route.params.newMessage(this.state.message, this.state.urlFoto)
                        this.setState({
                            message:'',
                        })
                        this.props.navigation.navigate('Home')
                    }}
                >
                    <Text>Enviar mensaje</Text>
                </TouchableOpacity>
            </View>
        // }    
        // </>
        )
    }
}

const styles = StyleSheet.create({
    textarea:{
        borderWidth:1,
        borderColor:'#c3c3c3',
        height:'auto',
        minHeight:60,
        marginTop:10
    },
    btn:{
        marginTop:16,
        borderColor:'red',
        borderWidth:1
    }
})

export default NewMessage