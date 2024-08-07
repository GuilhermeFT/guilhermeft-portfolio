'use server'

import { en } from '@/dictionaries/en'
import { ptBr } from '@/dictionaries/pt-br'
import { Dictionary, Languages } from '@/types/dictionary'

const dictionaries: Record<Languages, Dictionary> = {
  en: en,
  'pt-BR': ptBr,
}

export const getDictionary = async (
  lang: Languages = 'pt-BR',
): Promise<Dictionary> => {
  return dictionaries[lang]
}
