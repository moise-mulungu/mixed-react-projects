// There is a lodash function uniq

/* 
DM: todoMM: the default export name should match the filename

import { unique } from '@/utils/array' 
If you want a more specific name when you import, you can rename it
howtojs: import: modules:: "renamed import"
import { unique as getUniqueItemInArray } from '@/utils/array' // getUniqueItemInArray is a good name, btw

*/
export default function getUniqueItemInArray(array) {
  return [...new Set(array)]
}
