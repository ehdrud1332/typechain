// node.js는 Typescript를 이해하지 못하기 때문에
// 일반적인 javascript 코드로 컴파일하는 작업이 필요함.

// Type 언어라는 게 있다.
// 이것은 내가 어던 종류의 변수와 데이터 인지 설정을 해줘야 한다.
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "jaemin",
  age: 25,
  gender: "male",
};

// 한가지는 args의 유형이고 다른 것은 반환의 유형이다. 주어진 함수에 대한
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// params를 3개를 넣었다면 args도 3개를 받아야한다. 만약에 하나라도 빠지면 error가 난다.
// 이것디 js와 typescript의 차이점이다. ts는 똑똑하고 나의 miss를 가만두지 않는다.
// js로 빌딩했다면 빌드는 됐을 것이다. 결과는 이상하게 나오겠지만.
// 이 함수는 string으로 값을 반환된다.
console.log(sayHi(person));

export {};
