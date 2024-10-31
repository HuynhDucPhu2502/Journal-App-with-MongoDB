export class Author {
  constructor(
    public authorId: string,
    public userId: string,
    public penName: string,
    public bio: string,
    public hasAvatar: boolean
  ) {}
}
