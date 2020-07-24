class Hunter
{
    name;

    food;

    constructor(name)
    {
        this.name = name;
        this.food = 2;
        this.isHealthy = true;
    }

    hunt()
    {
        return this.food += 5;
    }

    eat()
    {
        if(this.food >= 1)
        {
            this.isHealthy = false;
            return this.food -= 1
        }
        
        else if(this.food <= 0)
        {
            this.isHealthy = false;      
        }
        else if(this.food >= 2)
        {
            this.isHealthy = true;
            return this.food -= 2;
        }  
    }
    
    giveFood(traveler, numOfFoodUnits)
    {
        if(this.food < numOfFoodUnits)
        {
            return 0;
        }
        else if(this.food > numOfFoodUnits)
        {
            this.food - numOfFoodUnits;
            return traveler.food += numOfFoodUnits;
        }
    }
}