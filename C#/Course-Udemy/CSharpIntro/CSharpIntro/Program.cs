using System;

namespace CSharpIntro
{
    class Program
    {
        static void Main(string[] args)
        {
            //Kodlari buraya yaziyoruz...
            int aboneSayisi = 34000;
            double yeniAboneSayisi = 34.6;//double icinde tam sayi olarak da tanimlayabilirsin
            //Bu degiskenlerin belli sinirlari var ondan dolayi kendi icinde de daha performasnli calismasi icin isimizi hangisi gorecekse onun ile calisiriz..ornegin
            //short da tam sayi tipidir ama int degisken tipinden daha kisadir sinirlari ayni zamanda bellekte de daha az yer kaplar 
            short year = 1985;
            //byte 0-255 arasindan tam sayi veri tutar
            byte sayi = 255;//255 e kadar veririrz
            //Gercek hayatta int ve double kullanilir
            string duyuru = "Duyurumuz var";
            //assignment-initializing denir degskene deger atamak
            bool isIncrease = false;
            double arbeidsmarkedetIgår = 114000.7;
            double arbeidsmarkedetIdag = 117000.7;
            
            Console.WriteLine("Hello World!");
        }
    }
}
