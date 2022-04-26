using System;
using System.Collections.Generic;
using System.Text;

namespace GjettelekPåTall
{
    class GjettLek
    {
        private List<int> _listOfTall=new List<int> { 12, 23, 21, 5, 7, 34, 38, 46, 41, 55, 59, 62 };
     /*
         public GjettLek()//constructor...
        {
            _listOfTall = new List<int> { 12, 23, 21, 5, 7, 34, 38, 46, 41, 55, 59, 62 };
        }
      */
        public int AnslagetTall { get; set; }
        public int TilfeldigElement { get; set; }
        public int Telling { get; set; }
        public int TilfeldigIndexOfTallLIst { get; set; }


     
        public void SpillGjetteLek()
        {
            int _tilfeldigElement=HentTilfeldigElement(_listOfTall);
            AnslagetTall = 0;//default verdi
            while (AnslagetTall != _tilfeldigElement)
            {
                Telling++;
                Console.WriteLine("Skriv et tall");
                AnslagetTall = Convert.ToInt32(Console.ReadLine());
                if (AnslagetTall > _tilfeldigElement)
                {
                    Console.WriteLine("Tallet er for høyt , gjett lavere");
                }
                else if (AnslagetTall < _tilfeldigElement)
                {
                    Console.WriteLine("Tallet er for lavt, gjett høyyere");
                }
                else
                {
                    Console.WriteLine("Riktig tall!Gratulerer!");
                    Console.WriteLine("Du fant tallet i {0}.forsøk", Telling);
                }
            }
        }

        public int HentTilfeldigElement(List<int> _tallList)
        {
            Random tilfeldig = new Random();
            TilfeldigIndexOfTallLIst = tilfeldig.Next(0, _tallList.Count);//Den gir index tilfeldig index i TallList
            TilfeldigElement = _tallList[TilfeldigIndexOfTallLIst];
            return TilfeldigElement;
        }

    }
}
