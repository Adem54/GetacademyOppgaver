using System;

namespace MainStaticMethodArgs
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(args.Length);        }
    }
}
//Main methodu run time calisan bir methoddur ve command line da ona argument verebiliyoruz
//Ve arasinda bosluk olan tekst ler ile ilgili her bir bosluk tan onlarin farkli elemnet olarak
//kabul ederek, args dizisinii icne atiyor eger araya virgul koyarsak tek eleman olark
//kabul ediyor...Biz uretilen exe dosyasinin sonunda exe olmadan, klasor adresini
//kopyalayip cmd ekraninda yapistirdiktan sonra sonuna bir kac tane aralarinda 
//bosluk olan tekst girdigmz zaman bunlar args dizisinin icerisine atmmis oluruz gormek
//istersek de Program.cs de Console.WriteLine icinde Length ile veya foreach ile dondurerek
//gorebiliriz.
//Birde Solution Expolorer da Main methoduna sag tiklayip prperteis de Main methodunda 
//Debug a tikilarsak ordan da direk commandLine a parametre ekleyebiliriz
