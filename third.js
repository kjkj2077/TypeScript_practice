let 동물 = 'kim';
let 동물1 = { name: 'kim', age: 20 };
const 출생지역 = { region: 'seoul' };
출생지역.region = 'busan'; //오브젝트안에꺼는 바뀜..
const 여친 = { name: '엠버' };
let position = { x: 10, y: 20 }; //타입변수는 재정의 불가능.
//Literal Types로 만드는 const 변수 유사품
let 접니다;
접니다 = '대머리';
function 함수(a) {
    return 1;
}
function 가위바위보(a) {
    return ['가위'];
}
var 자료 = {
    name: 'kim'
}; // 옵젝트 밸류값을 그대로 타입 지정해줌.
function 내함수(a) {
}
내함수(자료.name); //오류뜸
let 함수타입1 = function (a) {
    return 10;
};
