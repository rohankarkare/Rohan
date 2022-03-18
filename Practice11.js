// class Employee
// {
//     constructor(name) //Local Variable
//     {
//         //Create instance variable name ="Raju"
//         this.name=name
//     }

//     //Instance varibale should be accessed inside instance method

//     displayName() //Instance method
//     {
//         console.log(this.name)
//     }
// }

// const emp = new Employee ("Raju") //constructor
// emp.displayName()



class Employee
{
    constructor(name)
    {
        this.name=name
    }

    displayName()
        {
            console.log(this.name)
        }
    
}

const smp =new Employee("Rohan")
smp.displayName()