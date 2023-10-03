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

export default function DreamJournalScreen() {
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
        {/* ここにモーダルの内容を追加 */}
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
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    height: 100,
    marginBottom: 16,
  },
});
