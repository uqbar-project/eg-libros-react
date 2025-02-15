export const compare = 
  (value1: string | undefined | null, value2: string | undefined | null) => !value2 || (value1 ?? '').toLowerCase() === (value2 ?? '').toLowerCase()