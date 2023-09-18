import { User } from './user';

export type Author = Pick<User, 'id' | 'name' | 'imagePath'>;
