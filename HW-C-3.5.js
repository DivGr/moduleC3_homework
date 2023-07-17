class ElectricalAppliance {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isPlugged = false;
    }
    // метод, который определяет прибор как включенный в розетку
    plugIn() {
      console.log(this.name + " подключен!");
      this.isPlugged = true;
    }
    
    // метод, который определяет прибор как выключеный из розетки
    unplug() {
      console.log(this.name + " отключен!");
      this.isPlugged = false;
    }
  }
  
  // Прибор 1
  class Fun extends ElectricalAppliance {
    constructor (name, brand, power, speed) {
      super(name, power);
      this.brand = brand;
      this.speed = speed;
      this.isPlugged = true;
    }
  }
  
  // Прибор 2
  class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
  }
  
  // экземпляр лампы
  const tableFun = new Fun("Настольный вентилятор", "aceline", 15, 2);
  
  // экземпляр компьютера
  const homePC = new Computer("Настольный компьютер", "AMD Ryzen", 65, "stationary", "for game/work");
  
  // отключить лампу из розетки
  tableFun.unplug();
  
  // включить homePC в розетку
  homePC.plugIn();
  
  // результат
  console.log(homePC)
  console.log(tableFun)