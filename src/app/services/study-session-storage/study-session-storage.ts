import { Injectable } from '@angular/core';
import { Study } from '../../types/study';

export type StudySessionStatus = | 'planejado' | 'em-andamento' | 'concluido';

export interface StudySession extends Study {
  id: string;
  subject: string;
  topic: string;
  dueDate: string;
  date: string;
  startTime: string;
  duration: number | null;
  status: StudySessionStatus;
}

@Injectable({
  providedIn: 'root',
})
export class StudySessionStorage {
  
  private readonly STORAGE_KEY = 'foco_plus_study_sessions';

  /** Retorna as sessões */
  getAll(): StudySession[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  /**Salva a lista completa */
  private saveAll(sessions: StudySession[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sessions))
  }

  /**Adiciona uma nova sessão */
  add(session: StudySession): void {
    const sessions = this.getAll();
    sessions.push(session);
    this.saveAll(sessions);
  }

  /** Atualiza uma sessão já existente */
  update(updatedSession: StudySession): void {
    const sessions = this.getAll().map(session =>
      session.id === updatedSession.id ? updatedSession : session
    );
    this.saveAll(sessions);
  }

  /** Remove uma sessão */
  remove(id: string): void {
    const sessions = this.getAll().filter(session => session.id !== id);
    this.saveAll(sessions);
  }

  /** Retorna apenas sessões em andamento */
  getActiveSession(): StudySession | null {
    return this.getAll().find(
      session => session.status === 'em-andamento'
    ) || null;
  }

  /** Verifica se existe alguma sessão em andamento */
  hasActiveSession(): boolean {
    return !!this.getActiveSession();
  }

  /** Faz uma limpa */
  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
