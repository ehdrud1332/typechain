"use strict";
// node.js는 Typescript를 이해하지 못하기 때문에
// 일반적인 javascript 코드로 컴파일하는 작업이 필요함.
Object.defineProperty(exports, "__esModule", { value: true });
// Type 언어라는 게 있다.
// 이것은 내가 어던 종류의 변수와 데이터 인지 설정을 해줘야 한다.
var name = "Jaemin", age = 25, gender = "male";
var sayHi = function (name, age, gender) {
    console.log("Hello " + name + ", you are " + age + ", you are a " + gender);
};
sayHi(name, age, gender);
//# sourceMappingURL=index.js.map