import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({name: 'Simo', age: 9});
const rootElement = document.getElementById('root');
if(rootElement) {
    const userForm = new UserEdit(rootElement, user);
    userForm.render();
} else {
    throw new Error('Root element not found');
}
