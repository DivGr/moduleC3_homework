function showProps(obj, key) {
    return (key in obj);
}

const user = {
    name: "Иван", 
    City: "Екатеринбург",
    age: 39,
    course: "Web"
  };


  console.log(showProps(user, "secondName"));  // false
  console.log(showProps(user, "name"));  // true
