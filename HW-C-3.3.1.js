const userProperty = function(arg) {
  arg = {Имя: 'Иван',
  Фамилия: 'Дегтярев',
  Возраст: '39'}
for (let key in arg) {
  console.log(key+ ': ' + arg[key]);
}
  
 }
userProperty();