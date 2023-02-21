import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Artists from './assets/Artists.json'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation, route }) =>(
  <Tab.Navigator
    screenOptions={{ 
      tabBarLabelPosition: "beside-icon",
      tabBarIconStyle: { display: "none" } ,
      tabBarActiveTintColor: "#e54132"
    }}>
    <Tab.Screen name='Archive' 
      getComponent={() => require('./components/Archive').default}
      initialParams={{ Artists: Artists }}
      />
    <Tab.Screen name='My Chats' 
      getComponent={() => require('./components/MyChats').default}
      initialParams={{ Artists: Artists }}
      />
    <Tab.Screen name='More' 
      getComponent={() => require('./components/More').default}
      />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'
          component={MainTabs} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='ChatRoom'
          getComponent={() => require('./components/ChatRoom').default} 
          options={ ({ route }) => 
            ({ title: route.params.nickname,
              headerTitleAlign: 'center', 
            })
          }
        />
        <Stack.Screen name='Profile'
          getComponent={() => require('./components/Profile').default} 
          options={{
            headerShown: false,
            presentation: 'modal' 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

