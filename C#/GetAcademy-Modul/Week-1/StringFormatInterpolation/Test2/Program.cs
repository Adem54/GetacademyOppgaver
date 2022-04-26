using System;

namespace Test2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Adem!");
            Console.WriteLine(args.Length);
            int nummer1 = 12;
            int nummer2 = 23;
            Console.WriteLine("{0}/{1}", nummer1, nummer2);
            

            for (int i = 0; i < args.Length; i++)
            {
                Console.WriteLine($"Indeks {i} inneholder: {args[i]}");
            }
        }
    }
}
