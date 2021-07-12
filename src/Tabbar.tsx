import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Icon} from '@ant-design/react-native';
import Home from './components/Home';
import Person from './components/Person';

const Tab = createBottomTabNavigator();
const Tabbar = () => {
  const screenIcon = ({route}: any) => {
    return {
      tabBarIcon: ({focused}: any) => {
        let img = require('./components/image/首页2.png');
        if (route.name === 'Home') {
          img = focused
            ? require('./components/image/首页2.png')
            : require('./components/image/首页.png');
        } else {
          img = focused
            ? require('./components/image/联系人2.png')
            : require('./components/image/联系人.png');
        }
        return <Image source={img} style={styles.Icon} />;
        // return <Icon name="bars" />;.
      },
    };
  };
  return (
    <Tab.Navigator
      screenOptions={screenIcon}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#2296f3',
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen
        key="Home"
        name="Home"
        component={Home}
        options={{title: '主页'}}
      />
      <Tab.Screen
        key="Person"
        name="Person"
        component={Person}
        options={{
          title: '我的',
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  Icon: {
    width: 25,
    height: 25,
  },
});

export default Tabbar;
