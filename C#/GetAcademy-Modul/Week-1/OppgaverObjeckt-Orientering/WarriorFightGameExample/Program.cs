using System;

namespace WarriorFightGameExample
{
    internal class Program
    {
        //https://www.newthinktank.com/2017/02/c-tutorial-8/
        /*
       Bob Attacks Maximus and Deals 74 Damage
       Maximus Has 69 Health

       Maximus Attacks Bob and Deals 6 Damage
       Bob Has 6 Health

       Bob Attacks Maximus and Deals 48 Damage
       Maximus Has 21 Health

       Maximus Attacks Bob and Deals 48 Damage
       Bob Has -42 Health

       Bob has Died and Maximus is Victorious

       Game Over
       */

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Warrior maximus = new Warrior("Maximus", 1000, 120, 40);
            Warrior bob = new Warrior("Bob", 1000, 120, 40);
            Battle.StartFight(maximus, bob);
            Console.ReadLine();
        }
    }

    class Warrior
    {
        // Define the Warriors properties
        public string Name { get; set; } = "Warrior";
        public double Health { get; set; } = 0;
        public double AttkMax { get; set; } = 0;
        public double BlockMax { get; set; } = 0;

        // Always create a single Random instance and reuse
        // it or you will get the same value over and over
        Random rnd = new Random();

        // Constructor initializes the warrior
        public Warrior(string name = "Warrior",
            double health = 0,
            double attkMax = 0,
            double blockMax = 0)
        {
            Name = name;
            Health = health;
            AttkMax = attkMax;
            BlockMax = blockMax;
        }

        // Generate a random atack value from 1
        // to the warriors maximum attack value
        public double Attack()
        {
            return rnd.Next(1, (int)AttkMax);
        }

        // Generate a random block value from
        // 1 to the warriors maximum block
        public double Block()
        {
            return rnd.Next(1, (int)BlockMax);
        }

    }

    class Battle
    {
        // This is a utility class so it makes sense
        // to have just static methods

        // Recieve both Warrior objects
        public static void StartFight(Warrior warrior1,
            Warrior warrior2)
        {
            // Loop giving each Warrior a chance to attack
            // and block each turn until 1 dies
            while (true)
            {
                if (GetAttackResult(warrior1, warrior2) == "Game Over")
                {
                    Console.WriteLine("Game Over");
                    break;
                }

                if (GetAttackResult(warrior2, warrior1) == "Game Over")
                {
                    Console.WriteLine("Game Over");
                    break;
                }
            }
        }

        // Accept 2 Warriors
        public static string GetAttackResult(Warrior warriorA,
            Warrior warriorB)
        {
            // Calculate one Warriors attack and the others block
            double warAAttkAmt = warriorA.Attack();
            double warBBlkAmt = warriorB.Block();

            // Subtract block from attack
            double dmg2WarB = warAAttkAmt - warBBlkAmt;

            // If there was damage subtract that from the health
            if (dmg2WarB > 0)
            {
                warriorB.Health = warriorB.Health - dmg2WarB;
            }
            else dmg2WarB = 0;

            // Print out info on who attacked who and for how
            // much damage
            Console.WriteLine("{0} Attacks {1} and Deals {2} Damage",
                warriorA.Name,
                warriorB.Name,
                dmg2WarB);

            // Provide output on the change to health
            Console.WriteLine("{0} Has {1} Health\n",
                warriorB.Name,
                warriorB.Health);

            // Check if the warriors health fell below
            // zero and if so print a message and send
            // a response that will end the loop
            if (warriorB.Health <= 0)
            {
                Console.WriteLine("{0} has Died and {1} is Victorious\n",
                    warriorB.Name,
                    warriorA.Name);

                return "Game Over";
            }
            else return "Fight Again";
        }

    }
}
