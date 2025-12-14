export interface Rank {
    name: string,
    min: number,
    max: number,
    description: string;
}

export const RANKS: Rank[] = [
    { name: 'Iniciante', min: 0, max: 499, description: 'Começando a jornada' },
    { name: 'Aprendiz', min: 500, max: 1499, description: 'Entendendo os fundamentos' },
    { name: 'Estudioso', min: 1500, max: 3499, description: 'Alto engajamento e constância' },
    { name: 'Prodígio', min: 3500, max: 6999, description: 'Alta consistência e evolução' },
    { name: 'Sábio', min: 7000, max: 11999, description: 'Disciplinado e dominante' },
    { name: 'Mestre', min: 12000, max: 19999, description: 'Quase no topo da maestria' },
    { name: 'Lendário', min: 20000, max: Infinity, description: 'Raríssimo, dedicação ao extremo' }
]