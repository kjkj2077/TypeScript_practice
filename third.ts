//타입도 변수에 담아쓰세요 

type Animal = string | number | undefined; //type alias

let 동물: Animal = 'kim'

type Animal2 = { name: string, age: number }
let 동물1: Animal2 = { name: 'kim', age: 20 }