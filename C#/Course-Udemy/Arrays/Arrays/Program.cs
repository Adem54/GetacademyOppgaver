using System;

namespace Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            //Proje isimleri PascalCase yazilir yani bas harfleri buyuk baslar her zaman
            Console.WriteLine("Arrays!");

            //C# da dizilerde once tip ve yaninda dizi parantezleri gelir sonra degisken ismi ve atama yapilirken de dizinin kac elemanli oldugu belirtilmelidir...
            string[] credits = new string[7];
            credits[0] = "Kredi-1";
            credits[1] = "Kredi-2";
            credits[2] = "Kredi-3";
            credits[3] = "Kredi-4";
            credits[4] = "Kredi-5";
            credits[5] = "Kredi-6";
            credits[6] = "Kredi-7";
            Console.WriteLine(credits[5]);
        }
    }
}
