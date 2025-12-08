export const statusConfig = {
  concluido: {
    label: 'Concluído',
    icon: 'check-circle-2',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  'em-andamento': {
    label: 'Em andamento',
    icon: 'play-circle',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  planejado: {
    label: 'Planejado',
    icon: 'circle',
    color: 'text-slate-500',
    bg: 'bg-slate-50',
  }
} as const;
