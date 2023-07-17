function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Fun(name, brand, power, speed) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.speed = speed;
    this.isPlugged = true;
}

Fun.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();

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