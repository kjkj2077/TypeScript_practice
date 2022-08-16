//타입도 변수에 담아쓰세요 ,
type Animal = string | number | undefined; //type alias 대문자로하는게 국룩
let 동물: Animal = 'kim'

type Animal2 = { name: string, age: number }
let 동물1: Animal2 = { name: 'kim', age: 20 }

const 출생지역 = { region: 'seoul' }
출생지역.region = 'busan' //오브젝트안에꺼는 바뀜..

type Gf = { readonly name: string } //readonly는 절대 수정불가
const 여친: Gf = { name: '엠버' }
// 여친.name='유라' //에러뜸 하지만 실행은됨. 에러만 뜰분,,

type Name = string
type Age = number
type Person = Name | Age //이런식으로 타입을 조합가능.

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY //오브젝트타입 합치기
let position: NewType = { x: 10, y: 20 } //타입변수는 재정의 불가능.

//숙제1
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
type Homework1 = {
    color?: string,
    size: number,
    readonly position: number[]
}
//Literal Types로 만드는 const 변수 유사품
let 접니다: '대머리' | '솔로'
접니다 = '대머리'

function 함수(a: 'hello'): (1 | 0) {
    return 1
}

function 가위바위보(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
    return ['가위']
}

var 자료 = {
    name: 'kim'
} as const // 옵젝트 밸류값을 그대로 타입 지정해줌.

function 내함수(a: 'kim') {

}
내함수(자료.name) //오류뜸

//함수와 methods에 type alias 지정방법

type 함수타입 = (a: string) => number;

let 함수타입1: 함수타입 = function (a) {
    return 10
}

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
type 회정 = {
    name: string,
    age: number,
    plusOne: (x: number) => number,
    ChangeName: () => void
}