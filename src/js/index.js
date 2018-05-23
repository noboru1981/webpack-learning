import HelloWorld from "./HelloWorld";
import image from "../img/image.jpg";
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

document.querySelector("p").innerHTML = `<img src="${image}">`;