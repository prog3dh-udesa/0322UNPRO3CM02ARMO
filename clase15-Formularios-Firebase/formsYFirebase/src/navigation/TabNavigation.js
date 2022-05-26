import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';

import Zuricata from '../screens/Zuricata'
import Gato from '../screens/Gato'

const Tab = createBottomTabNavigator()

function TabNavigation(props) {
  return (
      <NavigationContainer>
          <Tab.Navigator
          screenOptions={{
              tabBarShowLabel: false
          }}
          >
              <Tab.Screen 
              name='Zuricata' 
              children={()=> <Zuricata estilos={props.estilos} />} 
              options={{
                  tabBarIcon: () => <FontAwesome5 name='cat' size={25} color='red' />
              }}
              />
              <Tab.Screen name='Gato' component={Gato} 
              options={{
                tabBarIcon: () => <FontAwesome5 name='cat' size={25} color='red' />
                }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  )
}

export default TabNavigation