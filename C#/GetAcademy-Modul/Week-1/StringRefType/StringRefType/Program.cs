using System;

namespace StringRefType
{
    internal class Program
    {
       internal static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var a = "Adem";
            var b = "Adem";
            
            Console.WriteLine(a == b ? " a er lik b" : "a er ikke lik b");
        }
    }
}
