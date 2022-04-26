using System;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string[] cities =new String[4];
            cities[0] = "Skien";
            cities[1] = "Porsgrunn";
            cities[2] = "Ski";
            cities[3] = "Larvik";

            for (int i = 0; i < cities.Length; i++)
            {
                var city = cities[i];
                Console.WriteLine(city);
                //var nedir?var da veri tipi belirtmeden ne atarsak veri tipi o olacaktir, ayni javascript gibi, yani var city deyip string verirsen string olur int verirsen int olur
                //Ama var ile bir tip atadiktan sonra degiksen o tip olmus oluyor ondan sonra gelip de baska bir tip atamasi tabi ki yapamayiz...
            }

            //Snippet-resharper
            foreach (string city in cities)
            {//city=>alyas-takma isim
                Console.WriteLine( city);
            }


            //Sartimiz gecerli oldugu muddetce calissin demektir....
            //infinite loop
            
            //while ()
            //{

            //}

            //do-while dongusu eger ne olurs olsun 1 kez calissin istersek o zaman dowhile kullaniriz cunku o sarti en son kontrol ediyor

        }
    }
}
