import React, {Component} from 'react';

//Importar navegaciones
import {NavigationContainer} from '@react-navigation/native';
import  { createNativeStackNavigator} from '@react-navigation/native-stack';

// Guardar la ejecución de Stack
const Stack = createNativeStackNavigator();

//importar las screens o lo que necesite el menú
import Login from '../screens/Login';
import Register from '../screens/Register';
import Menu from './Menu'

import { auth } from '../firebase/config';

class MainNavigation extends Component {

    constructor(props){
        super(props)
        this.state={
            loggedIn: false,
        }
    }
    
    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({loggedIn: true})
            }
        })
    }


    login(mail, pass){
        auth.signInWithEmailAndPassword(mail, pass)
            .then( response => this.setState({loggedIn: true}))
            .catch( error => console.log(error))
    }

    register(mail, pass){
        auth.createUserWithEmailAndPassword(mail, pass)
            .then( response => this.setState({loggedIn: true}))
            .catch( error => console.log(error))
    }

    logout(){ 
        auth.signOut()
        .then(() => this.setState({loggedIn: false}))
    }


    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                {
                    this.state.loggedIn ?

                    <Stack.Screen 
                        name='Menu'
                        component ={ Menu }
                        options = {{headerShown: false}}
                        initialParams = {{logout : (mail, pass) => this.logout(mail, pass)}}
                    />
                    :
                    <Stack.Group>
                        <Stack.Screen 
                            name='Login'
                            component = { Login }
                            options = {{headerShown: false}}
                            initialParams = {{login : (mail, pass) => this.login(mail, pass)}}
                        />
                        <Stack.Screen 
                            name='Register'
                            component = { Register }
                            options = {{headerShown: false}}
                            initialParams = {{register : (mail, pass) => this.register(mail, pass)}}
                        />
                    </Stack.Group>
                }
                </Stack.Navigator>
            </NavigationContainer>
        )
    }



}

export default MainNavigation