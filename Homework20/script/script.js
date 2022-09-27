//Task

function PublicService(){
    this.services = [];

    this.tariffs = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
    }
};

PublicService.prototype.addMeterReadings = function(amount, tariffName){

    if(!Object.keys(this.tariffs).includes(tariffName)){

        throw new Error(`Service ${tariffName} is unavailable`)
    };

    if(this.services.some(({key}) => key === tariffName)){

        throw new Error(`Service ${tariffName} is already included`)
    };

    this.services.push({key: tariffName, amount})
}

PublicService.prototype.deleteMeterReadings = function(tariffName){

    this.services = this.services.filter(({key}) => key !== tariffName)
}

PublicService.prototype.getSum = function(){
    let sum = 0

    this.services.forEach(({key, amount}) => {
       
        sum += this.tariffs[key] * amount
        
    })
    return sum
}

const service = new PublicService();

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");

const res = service.getSum();
// console.log(res)