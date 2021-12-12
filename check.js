
function BellBoy(name, age, work)
    {
        this.name = name;
        this.age = age;
        this.work = work;
       this.clean = function()
       {
           console.log("hello what are you upto today!");
       }
    }

var bellBoy1 = new BellBoy("vaibhav", 12, ["cleaning", "cooking"]);
bellBoy1.clean();
