//1. 印出幾次字母

let word = 'abcdefdafkaoeaaaaaaifja';
let key = 'a';


console.log(word.charAt(1))
console.log(word.length)

let ans = 0;

for (let i = 0; i < word.length; i++) {
    console.log(word.charAt(i))
    if (word.charAt(i) === key) {
        ans += 1;
    }
}
console.log('ANS:', ans)


//2. 一串文字變成qrcode
import * as QRCode from 'qrcode';
QRCode.toFile('./qr.png','Today is 星期四')


//3. 寫兩個class
class Animal {
    constructor(
        public name: string) {
    }

    eat() {
        console.log(this.name, 'I can eat');
    }
}

class Bird extends Animal {

    constructor(name: string, public color: string) {
        super(name)
    }

    fly(){
        console.log('I can fly');
    }

    eat(){
        super.eat();
        console.log('我複寫了我老爸的');
    }

}

let bird1 = new Bird('金絲雀', 'black');

bird1.eat()