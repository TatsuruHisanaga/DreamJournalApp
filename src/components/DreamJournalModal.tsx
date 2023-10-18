// DreamJournalModal.tsx
import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TagSelector from './TagSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DreamInput from './DreamInput';
import DateTimePicker, {
  Event as DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { Entry } from '../types/EntryTypes';
import { callDallE2API } from '../services/DallE';
import { Checkbox } from 'react-native-paper';

interface DreamJournalModalProps {
  handleSave: (entry: Entry) => Promise<void>;
}

const DreamJournalModal: React.FC<DreamJournalModalProps> = (props) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [dreamJournalEntries, setDreamJournalEntries] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const [generateImage, setGenerateImage] = useState(false); // 画像生成オプション
  const [dreamImage, setDreamImage] = useState<string | null>(null); // 生成された画像のURL

  const onChangeDate = (_event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const formatDateToJapanese = (date: Date) => {
    const month = date.getMonth() + 1; // 月は0から始まるため、+1が必要
    const day = date.getDate();
    const weekDay = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]; // 曜日を日本語で取得
    return `${month}月${day}日（${weekDay}）`;
  };

  const internalHandleSave = async () => {
    try {
      const dreamJournalData = { title, details, selectedTags };
      const storedData = await AsyncStorage.getItem('dreamJournal');
      let storedDataArray = [];

      if (storedData) {
        storedDataArray = JSON.parse(storedData);
      }

      storedDataArray.push(dreamJournalData);
      setModalVisible(false);
    } catch (error) {
      console.error('Could not save data', error);
    }
  };

  const fetchDallEImage = async () => {
    if (generateImage) {
      const imageUrl = await callDallE2API(title, details);
      setDreamImage(imageUrl);
    }
  };

  const handleSaveButton = async () => {
    await fetchDallEImage();

    const entry = {
      title: title,
      details: details,
      date: date,
      selectedTags: selectedTags,
      wakeUpRating: wakeUpRating,
      dreamImage: dreamImage,
    };

    await props.handleSave(entry);
    setModalVisible(false);
  };

  const [wakeUpRating, setWakeUpRating] = useState(3);

  // AsyncStorageからデータを取得
  const fetchDreamJournalData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('dreamJournal');
      if (storedData) {
        setDreamJournalEntries(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Could not fetch data', error);
    }
  };

  // コンポーネントがマウントされたときにデータを取得
  useEffect(() => {
    fetchDreamJournalData();
  }, []);

  const validateInput = () => {
    if (title && details && date) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  // title, details, dateが変更されたときに入力の検証を行う
  useEffect(() => {
    validateInput();
  }, [title, details, date]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.label}>日付</Text>
              <TouchableOpacity
                style={{ marginLeft: 16 }}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.date}>{formatDateToJapanese(date)}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
              <DreamInput
                label="タイトル"
                value={title}
                onChangeText={setTitle}
                placeholder="例）ハンバーガーを100個食う夢"
              />
              <DreamInput
                label="詳細"
                value={details}
                onChangeText={setDetails}
                multiline
                placeholder="例）マクドでハンバーガーを100個食べたら、お腹が痛くなった。急いでトイレに行ったら、そこには得体の知れないドラゴンがいて、私を食べようと追いかけまわしてきた。"
              />
              <Text style={styles.label}>寝起きの良さ</Text>
              <Rating
                showRating
                jumpValue={1.0}
                type="star"
                fractions={1}
                startingValue={wakeUpRating}
                imageSize={32}
                onFinishRating={(value: number) => setWakeUpRating(value)}
              />
              <TagSelector
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
              <View style={styles.checkboxContainer}>
                <Text>画像を生成する</Text>
                <Checkbox
                  status={generateImage ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setGenerateImage(!generateImage);
                  }}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={handleSaveButton}
                  disabled={!isInputValid}
                >
                  記録する
                </Button>
                <Button
                  mode="outlined"
                  style={styles.button}
                  onPress={() => setModalVisible(false)}
                >
                  閉じる
                </Button>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Icon
        containerStyle={styles.fixedButton}
        raised
        name="plus"
        type="material-community"
        color="#517fa4"
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
};

export default DreamJournalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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
  },
  fixedButton: {
    position: 'absolute',
    bottom: -12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    margin: 8,
    width: '70%',
    alignItems: 'center',
  },
});
