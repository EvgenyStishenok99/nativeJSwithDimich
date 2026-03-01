type LocalCityType = {
  title: string,
  countryTittle: string,
}
type AdressType = {
  streetTittle: string,
  city: LocalCityType,
}
export  type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress: AdressType
  technologies:Array<TechType>
}
 type TechType = {
  id: number;
  title: string;
}

export const student: StudentType = {
  id: 1,
  name: "John",
  age: 32,
  isActive: false,
  adress: {
    streetTittle: "Malinina 10",
    city: {
      title: "Mozyr",
      countryTittle: "Belarus",
    }

  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "React",
    }
  ]
}


console.log(student.name)
console.log(student.age)
console.log(student.adress.city.title)
console.log(student.technologies[2].title)
