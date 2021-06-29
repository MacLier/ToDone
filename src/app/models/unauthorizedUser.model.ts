export class UnauthorizedUser {
    firstName?: string;
    lastName?: string;
    nickName?: string;
    email: string
    password: string;
    constructor(firstName: string, lastName: string, nickname: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickname;
        this.email = email;
        this.password = password;
    }
}