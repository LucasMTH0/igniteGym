import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Exercise } from "@screens/Exercise"
import { History } from "@screens/History"
import { Home } from "@screens/Home"
import { Profile } from "@screens/Profile"

export function AppRoutes() {
    const {Navigator, Screen} = createBottomTabNavigator()
    return (
        <Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="History" component={History}/>
            <Screen name="Profile" component={Profile}/>
            <Screen name="Exercise" component={Exercise}/>

        </Navigator>
    )
}