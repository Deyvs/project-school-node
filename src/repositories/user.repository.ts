import { IUser, User } from "./../models/user.model";

class UserRepository {
  getAll() {
    return User.find();
  }

  getByEmail(email: string) {
    return User.findOne({ email });
  }

  create(user: IUser) {
    const { email } = user;
    User.create(user);
    return User.findOne({ email });
  }

  update(id: string, user: Partial<typeof User>) {
    return User.findByIdAndUpdate(id, user);
  }

  delete(id: string) {
    return User.findByIdAndDelete(id);
  }
}

export default new UserRepository();
