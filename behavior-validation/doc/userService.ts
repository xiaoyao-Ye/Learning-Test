import { Database, User } from "./database";

export class UserService {
  constructor(private userDatabase: Database) {}

  createUser(name: string): User {
    const id = Math.random() * 1000000;
    const newUser: User = { id, name };
    this.userDatabase.addUser(newUser);
    return newUser;
  }

  findUser(id: number) {
    return this.userDatabase.getUser(id);
  }
}
