class Car {
    constructor(wheels, seat, speedometer, indicator, frontBreak,backBreak,
        presentGear ) {
      this.wheels = wheels;
      this.seat = seat;
      this.speedometer = speedometer;
      this.indicator = indicator;
      this.frontBreak = frontBreak;
      this.backBreak = backBreak;
      this.presentGear = presentGear;
    }

    increaseGear(){
        gears = this.gears;
        if(gears<5 && gears>0) gears += 1;
        
        return gears;
    }

    decreaseGear(){
        gears = this.gears;
        if(gears<5 && gears>0) gears -= 1;

        return gears;
    }

    indicateTurn(indicator){
        this.indicator = indicator;
    }

  }