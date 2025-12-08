export interface Study {
    id: string;
    subject: string;
    topic: string;
    date: string;
    startTime: string;
    duration: string;
    status: 'concluido' | 'em-andamento' | 'planejado';
    color: string;
}