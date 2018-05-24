import HelloWorld from "./HelloWorld";
import image from "../img/image.jpg"
import smallImage from "../img/small.jpg"
/**
 * Hello Worldインスタンス
 * @type {HelloWorld}
 */
let obj = new HelloWorld();

console.log(obj.currentMessage);

obj.newMessage = "こんにちは！";

console.log(obj.currentMessage);

obj.resetMessage();

console.log(obj.currentMessage);

document.querySelector("p#img1").innerHTML = `<img src="${image}">`;

document.querySelector("p#img2").innerHTML = `<img src="${smallImage}">`;
