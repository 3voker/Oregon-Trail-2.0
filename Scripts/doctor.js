class Doctor
{
    name;

    food;

    constructor(name)
    {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    heal(traveler)
    {
        traveler.isHealthy = true;
    }
    hunt()
    {
        return this.food += 2;
    }

    eat()
    {
        if(this.food >= 1)
        {
            this.isHealthy = true;
        }
        
        else if(this.food <= 0)
        {
            this.isHealthy = false;      
        }  
        return this.food -= 1;
    }
}