// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

type Detat = {
  route: any;
  navigation: any;
};

function HomeScreen({navigation, route}: Detat) {
  useEffect(() => {}, [route.params?.post]);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen: {route.params?.post}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemsId: 666,
            text: '传参',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}: Detat) {
  const [postText, setPostText] = useState('');
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen: {route?.params?.itemsId}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <TextInput
        multiline
        placeholder="填写"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 200,
          width: '100%',
          padding: 10,
          backgroundColor: 'white',
        }}
        value={postText}
        onChangeText={setPostText}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4d4d4d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '主页'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: '详情',
            gestureEnabled: true,
            headerRight: () => (
              <Button title="help" onPress={() => console.log('点击了')} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
