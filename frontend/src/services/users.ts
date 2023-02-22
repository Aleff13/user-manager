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
  static getUsers = async (): Promise<userInterface[]> => {
    const users = fetch(`${apiUrl}/users`).then((res) => res.json());

    return users as unknown as userInterface[];
  };

  static addUser = async (user: userInterface) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${apiUrl}/users`, options);
    return response;
  };

  static editUser = async (user: userInterface) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(`${apiUrl}/users/${user.id}`, options);
    return response;
  };

  static removeUser = async (id: string) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${apiUrl}/users/${id}`, options);
    return response;
  };
}

export default UserService;
