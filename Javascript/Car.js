class Car {
    constructor(wheels,seat,speedometer,indicator,frontBreak,backBreak,presentGear) {
      this.wheels = wheels;
      this.seat = seat;
      this.speedometer = speedometer;
      this.indicator = indicator;
      this.frontBreak = frontBreak;
      this.backBreak = backBreak;
      this.presentGear = presentGear;
    }

    increaseGear(presentgears){
        var result = 0;
        if(presentgears<5){
            result = presentgears + 1;
        }
        this.presentGear = result;
        return result;
    }

    decreaseGear(presentgears){
        var result = 0;
        if(presentgears>0){
            result = presentgears - 1;
        }
        this.presentGear = result;
        return result;
        
    }

    indicateTurn(indicator){
        this.indicator = indicator;
    }

    gas(){
        this.speedometer += this.speedometer;
    }

}

class RacingCar extends Car{
    
    increaseGear(presentgears){
        var result = 0;
        if(presentgears<6){
            result = presentgears + 1;
        }
        this.presentGear = result;
        return result;
    }

    decreaseGear(presentgears){
        var result = 0;
        if(presentgears<0){
            result = presentgears + 1;
        }
        this.presentGear = result;
        return result;
    }
}
class Driver{
  
   constructor(myCar){
    if (myCar=='normal car'){
        console.log('normal car');
    }else if (myCar=='racing car'){
        console.log('racing car');
    } else {
        console.log('Select Car');
    }
   }
}
        let myCar = new Car(4,4,0,'left',false,false,0);
        //let myCar = new Car();
        let racingCar = new RacingCar(4,4,0,'left',false,false,0);
        //var gear = document.getElementById('gear');


        function drive(){
            let driver = new Driver(car.value);
        }

        function gearUp(){
            if(car.value=='normal car'){
                // console.log(myCar.presentGear);
                myCar.increaseGear(myCar.presentGear);
                console.log(myCar.presentGear);
                document.getElementById('gear').innerText = myCar.presentGear;
            } else {
                // gear = racingCar.increaseGear();
                // console.log(racingCar.increaseGear());
                racingCar.increaseGear(racingCar.presentGear);
                console.log(racingCar.presentGear);
                document.getElementById('gear').innerText = racingCar.presentGear;
            }
        }

        function gearDown(){
            if(car.value=='normal car'){
                // console.log(myCar.presentGear);
                myCar.decreaseGear(myCar.presentGear);
                console.log(myCar.presentGear);
                document.getElementById('gear').innerText = myCar.presentGear;
            } else {
                // gear = racingCar.increaseGear();
                // console.log(racingCar.increaseGear());
                racingCar.decreaseGear(racingCar.presentGear);
                console.log(racingCar.presentGear);
                document.getElementById('gear').innerText = racingCar.presentGear;
            }
        }
           

        function fbreak(){
            myCar.frontBreak = true;
            racingCar.frontBreak = true;
            console.log(myCar.frontBreak);
            document.getElementById('break').innerText = 'Front';
        }

        function bbreak(){
            myCar.backBreak = true;
            racingCar.backBreak = true;
            console.log(myCar.frontBreak);
            document.getElementById('break').innerText = "Back";
        }

        function indicatorLeft(){
           myCar.indicateTurn('left');
           racingCar.indicateTurn('left');
           document.getElementById('indicator').innerText = "Left";
        }
        function indicatorRight(){
            myCar.indicateTurn('left');
            racingCar.indicateTurn('left');
            document.getElementById('indicator').innerText = "Right";
         }

         function gas(){
            if((myCar.speedometer<120)&& (car.value=='normal car')){
                var result = myCar.speedometer + 1;
                document.getElementById('speedometer').innerText = result;
                myCar.speedometer = result;
            } else if((racingCar.speedometer<180) && (car.value=='racing car')){
                var result = racingCar.speedometer + 1;
                document.getElementById('speedometer').innerText = result;
                racingCar.speedometer = result;
            }
         }
        
        
        
        
        




