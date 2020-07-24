class Wagon
{
    constructor()
    {
        this.capacity = 2;
        this.passengers = [];
    }

    getAvailableSeatCount(capacity)
    {
        this.capacity;

        let emptySeats = capacity - (this.passengers.length - 1);

        return emptySeats;
    }

    join(traveler)
    {
        if(this.passengers)
        {
             this.passengers.push(traveler);
        }
    }

    shouldQuarantine()
    {
        const quarantinePlease = this.passengers.filter(traveler => traveler.isHealthy === false);

        if(this.isHealthy === false || quarantinePlease)
        {
            return true;
        }
        else if(this.isHealthy === true || quarantinePlease)
        {
            return true;
        }
        
    }

    totalFood()
    {
        let remainingFood = 0;

        const findFood = this.passengers.find(traveler => traveler.food > 0)
        const foodTotal = Number(this.passengers.forEach(traveler => {remainingFood += traveler.food;}));
                         return remainingFood;
    }

}