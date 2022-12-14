//함수에 타입 지정하는법 & void타입  , narrowing & assertion
//tsc -w 터미널에 입력하면 자동으로 Js로 변환됨. 파일사용시는 당연히 js를.
function 함수11(x: number): number { // x? 는 undefined와 같다.
    return x * 2
}

function 함수2(x: number): void { //return 할것이 없으면 void를 적어라
    x * 2
}

함수11(2) //타입지정된 파라미터는 필수임.

function 함수3(x: number | string) {
    if (typeof x == 'string') {
        return x + '1'
    } else {
        return x + 1
    }
}

function 함수4(x: number | string) {
    let arr: number[] = []
    if (typeof x == 'number') {
        arr[0] = x;
    } else {
        return x + 1
    }
}
//assertion
// 1.narrowing할때 쓴다.
// 2.무슨 타입이 들어올지 100% 확실할때 사용
// 3.웬만하면 쓰지마셈.

function 함수5(x: number | string) {
    let arr: number[] = []
    arr[0] = x as number;  //타입 덮어쓰기 assertion
}
