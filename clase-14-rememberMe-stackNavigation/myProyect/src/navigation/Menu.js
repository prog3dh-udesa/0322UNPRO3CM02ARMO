//Estructura base de un componente con estado
import React, { Component } from 'react';

//1 Componentes de navegación
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import de íconos
import { Entypo, Foundation, AntDesign } from '@expo/vector-icons'


//Importar las pantallas
import Home from '../screens/Home';
import Profile from '../screens/Profile';

// Guardar la ejecución de createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Armar el compoente con el render del menú

class Menu extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <Tab.Navigator>

                    <Tab.Screen 
                        name='Home' 
                        component={ Home }
                        options={
                            { tabBarIcon: () => <Foundation name="home" size={24} color="black" /> }
                        }/>

                    <Tab.Screen 
                        name='Profile' 
                        component={ Profile }
                        options = {{ tabBarIcon: () => <Entypo name="login" size={24} color="black" /> }}
                        initialParams = {{logout : (mail, pass) => this.props.route.params.logout(mail, pass)}}/>

               </Tab.Navigator>
        )
    }
}

export default Menu;