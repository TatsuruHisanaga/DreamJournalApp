import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import TagSelector from './TagSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DreamJournalModal() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = async () => {
    try {
      const dreamJournalData = { title, details, selectedTags };
      const storedData = await AsyncStorage.getItem('dreamJournal');
      let storedDataArray = [];

      if (storedData) {
        storedDataArray = JSON.parse(storedData);
      }

      storedDataArray.push(dreamJournalData);
      await AsyncStorage.setItem(
        'dreamJournal',
        JSON.stringify(storedDataArray)
      );
      console.log('Saved:', dreamJournalData);

      setModalVisible(false);
    } catch (error) {
      console.error('Could not save data', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>夢日記を記録する</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.label}>夢のタイトル:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="タイトルを入力"
        />
        <Text style={styles.label}>夢の詳細:</Text>
        <TextInput
          style={styles.textArea}
          value={details}
          onChangeText={setDetails}
          placeholder="詳細を入力"
          multiline
        />
        <Text style={styles.label}>場所:</Text>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="#自宅" value="home" />
          <Picker.Item label="#学校" value="school" />
          <Picker.Item label="#仕事場" value="work" />
          <Picker.Item label="#未知の場所" value="unknown" />
        </Picker>

        <Text style={styles.label}>登場人物:</Text>
        <Picker
          selectedValue={characters}
          onValueChange={(itemValue) => setCharacters(itemValue)}
        >
          <Picker.Item label="#家族" value="family" />
          <Picker.Item label="#友達" value="friends" />
          <Picker.Item label="#有名人" value="celebrity" />
          <Picker.Item label="#自分自身" value="self" />
        </Picker>

        <Text style={styles.label}>アクション:</Text>
        <Picker
          selectedValue={actions}
          onValueChange={(itemValue) => setActions(itemValue)}
        >
          <Picker.Item label="#走る" value="run" />
          <Picker.Item label="#飛ぶ" value="fly" />
          <Picker.Item label="#話す" value="talk" />
          <Picker.Item label="#戦う" value="fight" />
        </Picker>
        <Text style={styles.label}>日付:</Text>
        <TouchableOpacity onPress={openDatePicker}>
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>
        <TagSelector
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Button title="記録する" onPress={handleSave} />
        <Button title="閉じる" onPress={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    margin: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
  
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height: 100,
    marginTop: 0,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});
