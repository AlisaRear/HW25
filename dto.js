class Post{
    #userId
    #id
    #title
    #body
    
    get id(){
        return this.#id
    }
    get userId(){
        return this.#userId
    }
    get title(){
        return this.#title
    }
    get body(){
        return this.#body
    }
    constructor(userId, id, title, body) {
        this.#userId = userId;
        this.#id = id;
        this.#title = title;
        this.#body = body;
    }
}
class Comment{
    #postId
    #id
    #name
    #email
    #body

    get postId() {
        return this.#postId;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get body() {
        return this.#body;
    }

    constructor(postId, id, name, email, body) {
        this.#postId = postId;
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#body = body;
    }
}
