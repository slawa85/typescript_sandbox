import { CollectionView } from "./CollectionView";
import { User, UserProps } from '../models/User';
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, parentItem: Element): void {
        new UserShow(parentItem, model).render()
    }
}
