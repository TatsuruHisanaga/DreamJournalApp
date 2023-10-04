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
import DreamInput from './DreamInput';
import DreamPicker from './DreamPicker';

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
        <DreamInput label="夢のタイトル:" value={title} onChangeText={setTitle} />
        <DreamInput label="夢の詳細:" value={details} onChangeText={setDetails} multiline />
        <DreamPicker label="場所:" items={['#自宅', '#学校', '#仕事場', '#未知の場所']} selectedValue={location} onValueChange={setLocation} />
        <DreamPicker label="登場人物:" items={['#家族', '#友達', '#有名人', '#自分自身']} selectedValue={characters} onValueChange={setCharacters} />
        <DreamPicker label="アクション:" items={['#走る', '#飛ぶ', '#話す', '#戦う']} selectedValue={actions} onValueChange={setActions} />
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
