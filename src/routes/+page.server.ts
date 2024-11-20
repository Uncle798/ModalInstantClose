import type { PageServerLoad } from './$types'
type Thing = {
   value1: string;
   value2: string;
}
const things:Thing[]=[
   {
      value1: 'hello',
      value2: 'goodbye'
   },
   {
      value1: 'trust',
      value2: 'one',
   }
]



export const load: PageServerLoad = async () => {
   
   return {things}
};