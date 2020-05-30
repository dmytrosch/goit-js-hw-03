const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userArr = Object.keys(user);
for (let item of userArr) {
  console.log(`${item}: ${user[item]}`);
}
