import { View, Text, TextInput } from 'react-native'
import React, {Component} from 'react'

class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            mail:'',
            pass:'',
            username:''
        }
    }


    render(){
        return (
            <View>
            <TextInput
                style ={styles.input}
                onChangeText={ text => this.setState({mail: text})}
                keyboardType='email-address'
                placeholder='Ingre tu email'
            />
            </View>
        )
    }  
}

const styles =  StyleSheet.create({
        input:{
        borderWidth:1,
        borderColor:'red'
        }
    })