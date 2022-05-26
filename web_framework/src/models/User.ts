// 1. Ability to store data, retrieve it, and change it
// 2. Ability to notify the rest of the application when some data is changed
// 3. Ability to persist data to an outside server and retrieve it.

import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User extends Model<UserProps>{
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes(attrs),
            new Eventing(),
            new ApiSync('http://localhost:3000/users')
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            'http://localhost:3000/users',
            (json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.ceil(Math.random() * 100);
        this.set({age});
    }
}
