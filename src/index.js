import component from './component';
import User from './User';

document.body.appendChild(component());

let user = new User('David', 'Chen');
console.log(user.fullName());