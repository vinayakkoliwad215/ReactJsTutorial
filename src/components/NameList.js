import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Vinayak','Pooja','Rohini','Vinod','Santosh','Sunil','Arun']
    const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>)
     const persons = [
    {
      id: 1,
      name: 'Vinayak',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Pooja',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Rohini',
      age: 28,
      skill: 'Vue'
    },
     {
      id: 4,
      name: 'Vinod',
      age: 26,
      skill: 'Fullstack Development'
    },
     {
      id: 5,
      name: 'Santosh',
      age: 27,
      skill: 'Java and Web Development'
    },
     {
      id: 7,
      name: 'Sunil',
      age: 25,
      skill: 'J2EE'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  //const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  return <div>{nameList}</div>
//   return (
//     <div>
// //       {/* <h1>{names[0]}</h1>
// //       <h1>{names[1]}</h1>
// //       <h1>{names[2]}</h1>
// //       <h1>{names[3]}</h1> */}
// //       {/* {
// //         names.map(name => <h2>{name}</h2>)
// //       } */}
//       {nameList}
//     </div>
//   )
}

export default NameList
