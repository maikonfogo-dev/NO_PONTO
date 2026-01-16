export interface PontoRecord {
  id: string;
  userId: string;
  userName: string;
  client: string;
  timestamp: string; // ISO string
  type: 'Entrada' | 'Saída Almoço' | 'Volta Almoço' | 'Saída';
  status: 'ok' | 'late' | 'review' | 'pending';
  location: string;
}

const STORAGE_KEY = 'noponto_records';

export const pontoStorage = {
  getAll: (): PontoRecord[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  add: (record: Omit<PontoRecord, 'id' | 'timestamp'>) => {
    const records = pontoStorage.getAll();
    const newRecord: PontoRecord = {
      ...record,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
    };
    
    // Adiciona no início
    records.unshift(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    return newRecord;
  },

  // Mock inicial para não ficar vazio
  seed: () => {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      const mockData: PontoRecord[] = [
        { id: '1', userId: '1', userName: 'João Silva', client: 'Google Brasil', timestamp: new Date().toISOString(), type: 'Entrada' as const, status: 'ok' as const, location: 'Av. Paulista, 1000' },
        { id: '2', userId: '1', userName: 'João Silva', client: 'Google Brasil', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), type: 'Saída Almoço' as const, status: 'ok' as const, location: 'Av. Paulista, 1000' },
        { id: '3', userId: '1', userName: 'João Silva', client: 'Google Brasil', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), type: 'Volta Almoço' as const, status: 'ok' as const, location: 'Av. Paulista, 1000' },
        { id: '4', userId: '1', userName: 'João Silva', client: 'Google Brasil', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(), type: 'Saída' as const, status: 'pending' as const, location: 'Av. Paulista, 1000' },
      ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()); // Mais recente primeiro
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
    }
  }
};
