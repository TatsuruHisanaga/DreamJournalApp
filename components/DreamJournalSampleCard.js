// DreamJournalSampleCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const sampleEntries = [
  {
    dreamImage: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    date: 'Sat 9/23',
    title: 'DJになってクラブで熱狂',
    details: '私はDJとしてクラブの中心に立っていた。集まった人々は音楽に身を任せ、狂ったように踊り続ける。私の目の前には熱心なファンたちの海が広がっていた。スモークマシンの煙が会場を神秘的に包み込み、ディスコボールの光が輝いていた。',
  },
  {
    // dreamImage: 'https://example.com/image1.jpg',
    date: 'Sun 9/24',
    title: '空を飛ぶ冒険',
    details: '青い空と白い雲の間を自由に飛び回っていた。風が顔に当たる感覚がとても心地よかった。'
  },
  {
    // dreamImage: 'https://example.com/image2.jpg',
    date: 'Mon 9/25',
    title: 'タイムトラベル',
    details: '突然、過去の自分に会い、未来を変えるためのアドバイスをした。'
  },
  {
    // dreamImage: 'https://example.com/image3.jpg',
    date: 'Tue 9/26',
    title: '宝探しの冒険',
    details: '古い地図を手に入れ、宝を探しに行った。途中で多くの困難に遭遇したが、最後には宝を見つけた。'
  },
  {
    // dreamImage: 'https://example.com/image4.jpg',
    date: 'Wed 9/27',
    title: 'スーパーヒーローになる',
    details: '突然、スーパーパワーを手に入れ、街を救った。市民から感謝され、英雄になった。'
  },
  {
    // dreamImage: 'https://example.com/image5.jpg',
    date: 'Thu 9/28',
    title: '未知の惑星を探機',
    details: '宇宙船で未知の惑星に着陸。その惑星は美しい自然と未知の生物でいっぱいだった。'
  },
  {
    // dreamImage: 'https://example.com/image6.jpg',
    date: 'Fri 9/29',
    title: 'ロックスターになる',
    details: '大きなステージでギターを弾き、数千人の観客を魅了した。'
  },
  {
    // dreamImage: 'https://example.com/image7.jpg',
    date: 'Sat 10/1',
    title: 'オリンピックで金メダル',
    details: 'オリンピックで最高のパフォーマンスをし、金メダルを獲得した。'
  },
  {
    // dreamImage: 'https://example.com/image8.jpg',
    date: 'Sun 10/2',
    title: '映画の主人公になる',
    details: 'アクション映画の主人公として、悪党を倒し、世界を救った。'
  },
  {
    // dreamImage: 'https://example.com/image9.jpg',
    date: 'Mon 10/3',
    title: '料理の達人',
    details: '料理のコンテストで優勝し、料理の達人として名を馳せた。'
  },
  {
    // dreamImage: 'https://example.com/image13.jpg',
    date: 'Fri 10/4',
    title: '幽霊屋敷での冒険',
    details: '幽霊屋敷で怖い体験をしたが、最後には謎を解明した。'
  },
  {
    // dreamImage: 'https://example.com/image14.jpg',
    date: 'Sat 10/5',
    title: '天使と話す',
    details: '天使が現れ、人生についての重要なメッセージを教えてくれた。'
  },
  {
    // dreamImage: 'https://example.com/image16.jpg',
    date: 'Mon 10/6',
    title: '王子として王国を救う',
    details: '王子として王国を救い、民から愛された。'
  },
  {
    // dreamImage: 'https://example.com/image17.jpg',
    date: 'Tue 10/7',
    title: '宇宙人と友達になる',
    details: '宇宙人と出会い、新しいテクノロジーを学んだ。'
  },
  {
    // dreamImage: 'https://example.com/image18.jpg',
    date: 'Wed 10/8',
    title: '巨大ロボットで戦う',
    details: '巨大ロボットを操り、悪の組織と戦った。'
  },
];


export default function DreamJournalSampleCard({ entry }) {

  return (
    <View style={styles.card}>
      {entry.dreamImage && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: entry.dreamImage }} style={styles.dreamImage} />
        </View>
      )}
      <View style={styles.header}>
        <Text style={styles.date}>{entry.date}</Text>
        <Text style={styles.name}>{/* {entry.name} */}</Text>
      </View>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.details}>{entry.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  date: {
    color: '#aaa',
  },
  // imageWrapper: {
  //   elevation: 10,
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 200,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // },
  dreamImage: {
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});