import { IUser, User } from "./../models/user.model";

class UserRepository {
  getById(user_id: string) {
    return User.findById(user_id);
  }

  getByEmail(email: string) {
    return User.findOne({ email });
  }

  create(user: IUser) {
    return User.create(user);
  }

  update(user_id: string, user: Partial<typeof User>) {
    return User.findByIdAndUpdate(user_id, user);
  }

  delete(user_id: string) {
    return User.findByIdAndDelete(user_id);
  }
}

export default new UserRepository();
