export interface userInterface {
  name: string;
  role: roleEnum;
  id?: string;
}

export enum roleEnum {
  admin = "admin",
  user = "user",
  userPremium = "user-premium",
}
const apiUrl = "http://localhost:3000";

class UserService {
  static getUsers = async () => {
    const mock: userInterface[] = [
      {
        name: "joao",
        role: roleEnum.admin,
        id: "1234",
      },
      {
        name: "claudia",
        role: roleEnum.user,
        id: "123456",
      },
    ];

    const users = fetch(`${apiUrl}/users`).then((res) => res.json());

    return users as unknown as userInterface;
  };

  static addUser = async (
    user: userInterface = {
      name: "cleber",
      role: roleEnum.admin,
    }
  ) => {
    const options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${apiUrl}/users`, options);
    return response;
  };

  static removeUser = async (id: string) => {
    const options = {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${apiUrl}/users/${id}`, options);
    return response;
  };
}

export default UserService;
