// DreamJournalModal.js
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
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // アイコンのインポート


export default function DreamJournalModal() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [location, setLocation] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [actions, setActions] = useState(null);
  const [date, setDate] = useState(new Date());

  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formatDateToJapanese = (date) => {
    const month = date.getMonth() + 1; // 月は0から始まるため、+1が必要
    const day = date.getDate();
    const weekDay = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]; // 曜日を日本語で取得
    return `${month}月${day}日（${weekDay}）`;
  };

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
                label="Title"
                value={title}
                onChangeText={setTitle}
                placeholder="夢のタイトルを入力しましょう"
              />
              <DreamInput
                label="Details"
                value={details}
                onChangeText={setDetails}
                multiline
                placeholder="夢の内容を入力しましょう"
              />
              {/* <DreamPicker
                label="場所"
                items={['自宅', '学校', '仕事場', '未知の場所']}
                selectedValue={location}
                onValueChange={setLocation}
              />
              <DreamPicker
                label="登場人物"
                items={['家族', '友達', '有名人', '自分自身']}
                selectedValue={characters}
                onValueChange={setCharacters}
              />
              <DreamPicker
                label="アクション"
                items={['走る', '飛ぶ', '話す', '戦う']}
                selectedValue={actions}
                onValueChange={setActions}
              /> */}
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text styles={styles.date}>{formatDateToJapanese(date)}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
              <TagSelector
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
              <View style={styles.button} >
                <Button title="記録する" onPress={handleSave} />
                <Button title="閉じる" onPress={() => setModalVisible(false)} />
              </View>
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
    padding: 16,
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
    width: '85%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 5, // Androidの影
    shadowColor: '#000', // iOSの影
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  date: {
    fontSize: 18,
    marginLeft: 32,
  },
  button: {
    
  },
});
