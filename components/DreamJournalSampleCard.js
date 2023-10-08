// DreamJournalSampleCard.js
import DreamJournalCommonCard from './DreamJournalCommonCard';

export const sampleEntries = [
  {
    dreamImage: 'https://images.unsplash.com/photo-1537186121022-6b14d84aafea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80',
    date: 'Sat 9/23',
    title: '２億年前にタイムトラベルして絶望',
    details: '見たことないでかいタコに追いかけ回され続ける夢。',
    selectedTags: ['fear'],
    wakeUpRating: 1,
  },
  {
    dreamImage: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    date: 'Sun 9/24',
    title: 'DJになってクラブで熱狂',
    details: '私はDJとしてクラブの中心に立っていた。集まった人々は音楽に身を任せ、狂ったように踊り続ける。私の目の前には熱心なファンたちの海が広がっていた。スモークマシンの煙が会場を神秘的に包み込み、ディスコボールの光が輝いていた。',
    selectedTags: ['happy', 'joy', 'anticipation'],
    wakeUpRating: 4,
  },
  {
    dreamImage: 'https://images-ext-1.discordapp.net/external/HQhJh9wEeXe8qywMVuojyLeZrAWI1lCHg2xKoBRfTxw/%3Fpid%3DImgGn/https/th.bing.com/th/id/OIG.d4Y01UJVRwYiJ8TCJ7VB?width=1266&height=1266',
    date: 'Mon 9/25',
    title: '空を飛びつづける夢',
    details: '青い空と白い雲の間を自由に飛び回ってた。\n風が顔に当たる感覚がとても心地よかった。',
    selectedTags: ['joy', 'happy'],
    wakeUpRating: 5,
  },
  {
    dreamImage: 'https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80',
    date: 'Tue 9/26',
    title: '宝を探しに冒険',
    details: '古い地図を手に入れ、宝を探しに行った。途中で多くの困難に遭遇したが、最後には宝を見つけた。',
    selectedTags: ['anticipation', 'surprise'],
    wakeUpRating: 4,
  },
  {
    dreamImage: 'https://images-ext-2.discordapp.net/external/ipqz0gihABGp-VAFnUelgKaY0xewOgVMlFFuZrX9KkE/%3Fpid%3DImgGn/https/th.bing.com/th/id/OIG.2YEgyncR2EUT7NldCecB?width=1266&height=1266',
    date: 'Thu 9/28',
    title: '未知の惑星で地球外生命体に追いかけ回される',
    details: '宇宙船が破損して未知の惑星に着陸。謎の生物に追いかけ回されて怖かった。',
    selectedTags: ['fear'],
    wakeUpRating: 2,
  },
  {
    dreamImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2676&q=80',
    date: 'Fri 9/29',
    title: 'でかいドームでソロギター',
    details: 'めちゃくちゃでかいライブ会場でソロギターを弾きまくってた。めちゃくちゃミスしてた。',
    // selectedTags: ['joy', 'anticipation'],
    wakeUpRating: 3,
  },
];

const tags = [
  {
    label: '喜び',
    value: 'joy',
    icon: 'emoticon-happy-outline',
    color: '#FFF4CC',
  },
  {
    label: '幸せ',
    value: 'happy',
    icon: 'emoticon-outline',
    color: '#E0F2FE',
  },
  {
    label: '怒り',
    value: 'anger',
    icon: 'emoticon-angry-outline',
    color: '#FFD1D1',
  },
  {
    label: '驚き',
    value: 'surprise',
    icon: 'emoticon-dead-outline',
    color: '#CCECEC',
  },
  {
    label: '悲しみ',
    value: 'sadness',
    icon: 'emoticon-sad-outline',
    color: '#CCE0F5',
  },
  {
    label: '恐怖',
    value: 'fear',
    icon: 'emoticon-frown-outline',
    color: '#E6CCFF',
  },
  {
    label: '期待',
    value: 'anticipation',
    icon: 'emoticon-excited-outline',
    color: '#F0FFE0',
  },
  {
    label: '嫌悪',
    value: 'disgust',
    icon: 'emoticon-poop-outline',
    color: '#E0C2A2',
  },
];

export default function DreamJournalSampleCard({ entry }) {
  return <DreamJournalCommonCard entry={entry} tags={tags} />;
}
