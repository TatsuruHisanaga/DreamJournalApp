// DreamJournalCard.js
import DreamJournalCommonCard from './DreamJournalCommonCard';

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

export default function DreamJournalCard({ entry }) {
  return <DreamJournalCommonCard entry={entry} tags={tags} />;
}
