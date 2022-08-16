//class 만들 때 타입지정 가능
class People {
    name: string
    constructor(a: string) { //타입스크립트는 필드값에 aa가있어야 this.aa가 가능하다.
        this.name = a; //오브젝트는 리턴타입을 정할필요가없다.
    }
    함수(a: string) { console.log("ㅎㅇ" + a) }
}

let 사람1 = new People('kim')
let 사람2 = new People('park')
사람1.함수('안녕') //안녕안녕

class Car {
    name: string
    price: number
    constructor(name: string, price: number) { //타입스크립트는 필드값에 aa가있어야 this.aa가 가능하다.
        this.name = name; //오브젝트는 리턴타입을 정할필요가없다.
        this.price = price;
    }
    tax(): number { return this.price * 0.1 }
}
let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300

class Word {
    num;
    str;
    constructor(...param: string[] | number[]) {
        let 숫자들: number[] = [];
        let 문자들: string[] = [];

        param.forEach((i) => {
            if (typeof i === 'string') {
                문자들.push(i)
            } else {
                숫자들.push(i)
            }
        })
        this.num = 숫자들;
        this.str = 문자들;
    }
}
//인터페이스
//인터페이스와 타입은 비슷함(단 오브젝트시에만 가능.)
//인터페이스는 extends가 가능하다.
interface Student {
    name: string
}
interface Teacher extends Student {
    age: number
}

//타입의 경우 &기호를..
type Cap = { name: string }
type Hat = { color: string } & Cap
//type Hat = { color: string } & Student 도 가능(with 인터페이스)
//인터페이스는 중복선언 ㅇㅋ type은 불가




