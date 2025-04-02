import { apiRequest } from "@/libs/apiClient"
import CharacterResponse from '../types/CharacterItem';

export const getCharacters =  async(): Promise<CharacterResponse | null> => {
    try { 
        return await apiRequest<CharacterResponse>('/character', 'GET');
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
}