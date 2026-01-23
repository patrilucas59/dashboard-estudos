import { Injectable } from '@angular/core';

export type SubjectCatalog = {
  id: string;
  name: string;
};

export type ActivityCatalog = {
  id: string;
  subjectId: string;
  title: string;
  duration: number;
};

@Injectable({
  providedIn: 'root',
})
export class StudyCatalog {

  private readonly subjects: SubjectCatalog[] = [
    { id: 'port', name: 'Português' },
    { id: 'mat', name: 'Matemática' },
    { id: 'bio', name: 'Biologia' },
    { id: 'hist', name: 'História' },
    { id: 'fil', name: 'Filosofia' },
    { id: 'soc', name: 'Sociologia' },
    { id: 'geo', name: 'Geográfia' },
    { id: 'qui', name: 'Química' },
    { id: 'fis', name: 'Física' },
  ];

  private readonly activities: ActivityCatalog[] = [
    { id: 'Port', subjectId: 'port', title: 'Interpretação de texto', duration: 35 },
    { id: 'Mat', subjectId: 'mat', title: 'Equações do 1º grau', duration: 40 },
    { id: 'Bio', subjectId: 'bio', title: 'Células tronco', duration: 45 },
    { id: 'Hist', subjectId: 'hist', title: 'Brasil Imperial', duration: 30 },
    { id: 'Fil', subjectId: 'fil', title: 'Ética e Moral', duration: 20 },
    { id: 'Soc', subjectId: 'soc', title: 'Cidadania', duration: 15 },
    { id: 'Geo', subjectId: 'geo', title: 'Biomas do Brasil', duration: 25 },
    { id: 'Fís', subjectId: 'fis', title: 'Movimento Uniforme', duration: 50 },
  ];

  getSubjects(): SubjectCatalog[] {
    return this.subjects;
  }

  getActivities(): ActivityCatalog[] {
    return this.activities;
  }

  getActivitiesBySubject(subjectId: string): ActivityCatalog[] {
    return this.activities.filter(
      activity => activity.subjectId === subjectId
    );
  }

  getActivityById(id: string): ActivityCatalog | undefined {
    return this.activities.find(
      activity => activity.id === id
    );
  }
}
