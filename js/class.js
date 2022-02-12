//* class Client создает обьект со свойстами login и password(приватное, -> доступ через геттер и сеттер)

class Client {
  static status = false;

  #password;

  constructor({ login, email, password }) {
    this.login = login;
    this.email = email;
    this.#password = password;
  }
  get showPassword() {
    return this.#password;
  }
  set showPassword(password) {
    this.#password = password;
  }
}

const newClient = new Client({
  login: "Tasha",
  email: "tasha@mail.com",
  password: "qwerty",
});
console.log("⭐ ~ class Client:", Client.status);
console.log("⭐ ~ newClient:", newClient);

class ClientMessage extends Client {
  constructor({ login, email, password, message }) {
    super({ login, email, password });
    this.message = message;
  }
}

const newClientMessage = new ClientMessage({
  login: "Misha",
  email: "Misha@mail.com",
  password: "asdfg",
  message: "hello, i am Misha",
});

// console.log("⭐ ~ class ClientMessage", ClientMessage);
console.log("⭐ ~ newClientMessage:", newClientMessage.message);

console.log("-------------------------------------------");
