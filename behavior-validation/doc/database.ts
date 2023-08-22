export interface User {
  id: number;
  name: string;
}

export class Database {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
    // axios("/addUser")
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
