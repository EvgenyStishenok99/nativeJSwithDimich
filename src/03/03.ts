import type {StudentType} from "../02/02.ts";

export const sum = (a: number, b: number) => {
  return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })

}


export function addSkill2(student: StudentType, skill: string) {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })

}

export function makeStudentActive(s: StudentType) {
  s.isActive = true
}

export const changeStudentLive = (s: StudentType, cityName:string)=> {
  return s.adress.city.title === cityName
}