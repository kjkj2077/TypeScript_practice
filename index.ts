//tsc -w 터미널에 입력하면 자동으로 Js로 변환됨. 파일사용시는 당연히 js를.
let 이름: string = 'kim';
let 이름_어레이: string[] = ['kim', 'park'] //스트링이 들어간 어레이
let 이름_오브젝트: { name: string } = { name: 'kim' } //스트링이 들어간 어레이
let 이름숫자: string | number = 'kim' // 스트링이나 넘버가 들어갈수있다.

//귀찮으면 타입을 만들어라
type Type = string | number;
let 둘다하기: Type = 123;

//함수의 경우
function 함수10(x: number): number { //x에 number들어가야하며, 리턴값도 number로해야함.
    return x * 2
}

//타입어레이
type Member = [number, boolean]; //튜플타입
let john: Member = [123, true];

//타입 오브젝트
type group = { name: string } // 한개속성만 스트링
type group2 = { [key: string]: string } //모든 속성은 스트링으로
let ko: group = { name: 'kim' };

//클래스
class User {
    name: string
    constructor(name: string) {
        this.name = name
    }
}