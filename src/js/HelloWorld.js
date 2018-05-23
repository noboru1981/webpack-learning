const defaultMessage = "Hello, world!";

/**
 * Hello,World クラス
 */
export default class HelloWorld {

    /**
     * constructor
     */
    constructor() {
        this.resetMessage();
    }

    /**
     * メッセージを初期化する
     */
    resetMessage(){
        this.message = defaultMessage;
    }

    /**
     * メッセージを指定のものに置き換える
     * @param message
     */
    set newMessage(message){
        this.message = message;
    }

    /**
     * 設定済みメッセージを返す
     * @return {*}
     */
    get currentMessage(){
        return this.message;
    }
}