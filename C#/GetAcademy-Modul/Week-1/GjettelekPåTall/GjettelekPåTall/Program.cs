using System;
using System.Collections.Generic;

namespace GjettelekPåTall
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            int anslaget = 0;
            int tilfeldigindex;
            int tilfeldigelement;
            int telling = 0;
            List<int> talllist = new List<int> { 12, 23, 21, 5, 7, 34, 38, 46, 41, 55, 59, 62 };
            Random tilfeldig = new Random();
            tilfeldigindex = tilfeldig.Next(0, talllist.Count);
            tilfeldigelement = talllist[tilfeldigindex];
            while (anslaget != tilfeldigelement)
            {
               telling++;
               Console.WriteLine("skriv et tall");
                anslaget = Convert.ToInt32(Console.ReadLine());
                if (anslaget > tilfeldigelement)
               {
                    Console.WriteLine("tallet er for høyt , gjett lavere");
               }
               else if (anslaget < tilfeldigelement)
                {
                   Console.WriteLine("tallet er for lavt, gjett høyyere");
                    
               }
               else
               {
                   Console.WriteLine("riktig tall!gratulerer!");
                   Console.WriteLine("du fant tallet i {0}.forsøk", telling);
               }
            }


            //funksjonskallen-fonksiyon cagrilmasi
            //2.versiyon ved hjelp av class
           // GjettLek gjetteLek = new GjettLek();//Vi opprettet en instance fra GjettLekk object eller class         
           // gjetteLek.SpillGjetteLek();
        }
    }

   
}
