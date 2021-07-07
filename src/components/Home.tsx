/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';

interface Datat {
  id: string;
  title: string;
}

const Home = () => {
  const [value, setValue] = useState('');
  const lists = () => {
    let doms = [];
    for (let i = 0; i < 20; i++) {
      doms.push(
        <View style={styles.scrollView}>
          <Text style={styles.scrollText}>123{i}</Text>
        </View>,
      );
    }
    return doms;
  };
  const flatInfo = () => {
    let form = [];
    for (let i = 0; i < 2000; i++) {
      form.push({
        id: i + '',
        title: '标题' + i,
      });
    }
    return form;
  };
  const renderItem = ({item}: any) => (
    <View style={styles.scrollView}>
      <Text style={styles.scrollText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.baseView}>
      <Text style={styles.baseText}>HELLO</Text>
      <TextInput
        style={styles.baseInput}
        value={value}
        onChangeText={(text: string) => setValue(text)}
      />
      <Button
        onPress={() => Alert.alert('点击了按钮')}
        title="按钮"
        color="#2196f3"
      />
      <ScrollView style={styles.baseScroll}>{lists()}</ScrollView>
      <View style={styles.baseScroll}>
        <FlatList
          data={flatInfo()}
          renderItem={renderItem}
          keyExtractor={(item: Datat) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    color: '#61dafb',
    fontSize: 30,
  },
  baseView: {
    // paddingVertical: 8,
    // paddingHorizontal: 8,
    padding: 8,
    backgroundColor: '#f3f3f3',
  },
  baseScroll: {
    padding: 6,
    height: 200,
    marginVertical: 10,
  },
  scrollText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
  scrollView: {
    padding: 6,
    backgroundColor: '#fff',
    marginBottom: 6,
    borderRadius: 4,
  },
  baseInput: {height: 40, borderWidth: 1, borderColor: 'gray', fontSize: 18},
});

export default Home;
