using System;

namespace RandomDigitAndRandomLetter
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            Console.WriteLine("Hello World!");
            var randomNum = random.Next(0, 10);
            Console.WriteLine("randomNum: "+randomNum);

            char min = 'A';
            char max = 'Z';
            var randomNum2 = random.Next(min, max + 1);//ASCI TABLOSUNDA A ile Z 65-91 arasinda bulunuyor iste bu sayilar arasinda otomatik sayi uretiyor..
            Console.WriteLine("random2: "+randomNum2);
            Console.WriteLine("random2ASCI: "+(char)randomNum2);


            char c1 = (char)65;
            char c2 = Convert.ToChar(65);
            Console.WriteLine(("c1: "+c1));
            Console.WriteLine(("c2: "+c2));

            char charData;
            // 98 is the ascii value for b
            charData = (char)98;
            // This will display c
            Console.WriteLine(charData);
           

            //ASCI TABLOSUNDA A buyuk harfi ile baslayan karakter 65 ile baslar ve 90 ile Z ye kadar sira ile gelir
            //Yine kucuk a ise 97 ile baslar 122 de z ile biter ondan dolayi string uretirken random sayi uretilip sonra da ondan string uretilir

            // simple program to generate random string of length 16 characters using C#
            int length = 16;
            var rString = "";
            for (var i = 0; i < length; i++)
            {
                rString += ((char)(random.Next(1, 26) + 64)).ToString().ToLower();
            }
            Console.WriteLine(rString);
            //Eger karakter icindeki sayi ise true degil ise false gelir
            char test1 = '1';
            char test2 = 'A';
            Console.WriteLine("test1: " + char.IsDigit(test1));
            Console.WriteLine("test2: "+char.IsDigit(test2));




        }
    }


   
}
