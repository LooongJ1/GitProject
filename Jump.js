import {createAppContainer,createStackNavigator} from 'react-navigation'
import App from './App'


const AppJump = createStackNavigator({
    App:{
        screen:App
    }
},{
    initialRouteName:'App'
});

export default createAppContainer(AppJump);