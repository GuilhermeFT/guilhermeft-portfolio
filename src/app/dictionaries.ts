'use server'

import { Dictionary } from '@/types/dictionary'

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  en: () => import('@/dictionaries/en').then((module) => module.en),
  'pt-br': () => import('@/dictionaries/pt-br').then((module) => module.ptBr),
}

export const getDictionary = async (locale = 'pt-br') => dictionaries[locale]()
