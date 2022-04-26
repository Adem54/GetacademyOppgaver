using System;
using System.Collections.Generic;

namespace FloatDecimalDouble
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            //float-double-decimal
            //Genellikle parasal degerler ile ilgili islemlerde karsimiza cikiyor
            //Float-double tipler ayni zamanda floating point olarak da kullanilir, yani ondalik sayi degerleri atanabilir
            //Decimal veri tipi ise daha cok parasal degerler yani daha cok buyuk rakamlari saklamak icin kullaniriz
            //Float tipi tek duyarli bir veri tipidir
            //Hassasiyeti 7 digit-7 basamaklidir
            //Double veri tipi tek duyarli bir veri tipdir.Hassasiyeti 15-16 digittir.
            //Decimal veri tipi alabilecegi sayi deger araligi, hem pozitif hem de negatif yonde olmak uzere 28-29 digittir
            //Bu 3 tipden sunu anlamalyiz double tipi, float ve decimal a gore bellkte daha cok yer kaplar, en az yeri de float kaplar bellekte.
            //Ornegin KDV hesaplayan bir program yapmak istersek kdv degeri olan 0,18 i int ile atayamayiz
            //DOUBLE
            //Ozel veya aksi belirtilmedikce C# uzerinde tanimladinginiz her kesirli sayiyi birer Double veri tipi olarak algilanir
            //Double olarak tanimladigmiz veri tiplerinin sonuna D veya kucuk d koyabiliriz, fakat bu zorunlu bir kural degildir.Bu kural veri tipinin double
            //oldugunu belirtmek icin kullanilir.Bellekte 8Byte yer kaplar ve alacagi maksimum digit 16 dir..
            //FLOAT
            //Kullanm ve yapi bakimindan double veri tipi ile ayni ozelliklere sahiptir.Aralrindaki fark, float 7 digittir ve bellekte kaplandigi alan
            //4Byte dir.Float olarak tanimlanan bir veri tipinin sonuna f,F harfi koymamiz gerekir
            //DECIMAL
            //Ondalikli veri tiplerinin en buyugu ve bellekte en cok yer kaplayandir.Mantik olarak float ve double gibi ondalik sayilar icin kullanilir ama
            //asil kullanim alanilari finans sektoru ve parasal degerler hesaplamalaridir.Bunun sebebi ise decimal veri tipi kesin sonuclar elde etmek istedgi
            //miz zamande kullanilmasidir.Float ve Double veri tiplerinde ise ondalikli sayilar ile islem yaparken yazdginin veri tipinin son hanesi
            //5 den kucuk ise bunu ekrana yazdirmaz ama decimal da bu durum soz konusu degildir. Veriyi net ve tam olarak hesaplar ve herhangi bir yuvarlama
            //islemi yapmaz.Bu nedenle parasal islemler ve hesaplamalar yaparken her daim decimal kullanilir.Bellekte 16Byte yer kaplar ve 29 digittir

            //DOUBLE-FLOAT-DECIMAL ARASINDAKI TEMEL FARKLAR

            //Double, Float, Decimal Arasında ki Temel Farklar: Üç veri tipinin arasında ki en temel fark double ve float ile % 100 kesin sonuçlar alamazsınız
            //ondalıklı sayının son hanesine göre yuvarlama işlemi yapabilir fakat Decimal her zaman kesin ve tam sonuçları size gösterir.Bunun yanı sıra 3
            //veri tipinin de bellekte kapladığı alanlar birbirinden çok farklı ve aynı şekilde alabileceği maksimum basamak sayısı da(kaç haneli) farklıdır.
            //Yapacağınız ve tutacağınız veri tipine göre iyi bir seçim yapmanız gerekmektedir.Örneğin doğa olaylarını hesaplarken kesin sonuçlara
            //ihtiyacınız yoktur ve zaten doğa olaylarında(deprem tahmini, hava durumu vs) kesin sonuc alamazsınız bundan dolayı Float veya
            //Double kullanabilirsiniz.Ama Finansal veya kesin sonuca dayalı bir işlem olacaksa kesinlikle seçmeniz gereken veri tipi Decimal olmalıdır.

            float number1 = 1.6f;
            double number2 = 3.6d;
            double number3 = 4.8;
            decimal number4 = 6.9M;

            //Vi kan beskrive array i C# i form av ulike måter
            string[] cities = { "Skien", "Porsgrunn", "Ski", "Larvik", "Sandefjord" };
            string[] names = new string[3];
            names[0] = "Adem";
            names[1] = "Zehra";
            names[2] = "Zeynep";
            string[] countries = new string[] {"Norway","Sweden","Germany" };


            List<string> cities2 = new List<string>() { "Skien", "Porsgrunn", "Larvik" };
            
        }
    }
}
