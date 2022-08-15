//tsc -w 터미널에 입력하면 자동으로 Js로 변환됨. 파일사용시는 당연히 js를.
//기본타입정리,타입을 미리 정하기 애매할때
let kim: string = 'hello'
let 회원들: string[] = ['kim', 'park'] //문자만 담긴 어레이
let 회원들2: { mem1: string, mem2: string } = { mem1: 'kim', mem2: 'park' }
// 타입지정은 원래 자동으로 됨.

//문제1
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}
// 밑에 처럼 변경가능.
let project1: {
    member: string[],
    days: number,
    started: boolean,
} = {
    member: ['kim', 'park'],
    days: 30,
    started: true
}
//유니온타입
let 회원: number | string = 123; // 유니온타입 union type
let 회원들1: number[] | string[] = [1, 2, 3];
let 오브젝트: { a: string | number } = { a: '123' };
//any ,unknown
let 모든타입: any //모든 자료형 허용한다.
let 언노운: unknown // any랑 똑같음. 하지만 any보다 안전함.

let 나이: string | number;

//문제2
// let 학교 = {
//     score : [100, 97, 84],
//     teacher : 'Phil',
//     friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]

let 학교1: {
    score: number[] | boolean[],
    teacher: string,
    friend: string | string[]
} = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}
학교1.score[4] = false;
학교1.friend = ['Lee', 학교1.teacher]