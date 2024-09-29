export class Account {
  constructor(
    private _accountId: string,
    private _userName: string,
    private _password: string,
    private _userId: string
  ) {}

  public get accountId(): string {
    return this._accountId;
  }
  public set accountId(value: string) {
    this._accountId = value;
  }

  public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  public get userId(): string {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }
}
