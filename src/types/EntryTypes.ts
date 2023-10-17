// types/EntryTypes.ts
export interface Entry {
  id?: string;
  title: string;
  details: string;
  date: string | Date;
  wakeUpRating?: number;
  dreamImage?: string;
  selectedTags?: string[];
}
