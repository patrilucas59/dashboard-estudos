export type StudyStatus =
  | 'concluido'
  | 'em-andamento'
  | 'planejado';

export interface Study {
  id: string;
  subject: string;
  topic: string;
  date: string;
  startTime: string;
  duration: number | null;
  status: StudyStatus;
}
