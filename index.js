/*topic 1
use faker to generate fake data
use npm i @faker-js/faker for install package */

const { faker } = require('@faker-js/faker');

let randomuser=()=> {
 return {
   userId: faker.string.uuid(),
   username: faker.internet.username(),
   email: faker.internet.email(),
   avatar: faker.image.avatar(),
   password: faker.internet.password(),
   birthdate: faker.date.birthdate(),
   registeredAt: faker.date.past(),
 };
}

console.log(randomuser)
