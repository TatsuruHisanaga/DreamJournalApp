import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TagSelector from './TagSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DreamInput from './DreamInput';
import DreamPicker from './DreamPicker';

export default function DreamJournalModal() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [location, setLocation] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [actions, setActions] = useState(null);
  const [date, setDate] = useState(new Date());
  const openDatePicker = () => {
    setDate(new Date());
  };
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
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <DreamInput
                label="夢のタイトル"
                value={title}
                onChangeText={setTitle}
                placeholder="タイトルを入力しましょう"
              />
              <DreamInput
                label="夢の詳細"
                value={details}
                onChangeText={setDetails}
                multiline
                placeholder="夢の内容を入力しましょう"
              />
              <DreamPicker
                label="場所"
                items={['#自宅', '#学校', '#仕事場', '#未知の場所']}
                selectedValue={location}
                onValueChange={setLocation}
              />
              <DreamPicker
                label="登場人物"
                items={['#家族', '#友達', '#有名人', '#自分自身']}
                selectedValue={characters}
                onValueChange={setCharacters}
              />
              <DreamPicker
                label="アクション"
                items={['#走る', '#飛ぶ', '#話す', '#戦う']}
                selectedValue={actions}
                onValueChange={setActions}
              />
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
            </ScrollView>
          </View>
        </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', // 半透明の背景
  },
  modalView: {
    width: '80%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // Androidの影
    shadowColor: '#000', // iOSの影
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
