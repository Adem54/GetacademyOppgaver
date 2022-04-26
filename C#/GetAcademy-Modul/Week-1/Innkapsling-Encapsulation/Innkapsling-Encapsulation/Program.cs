using System;
using System.Collections.Generic;

namespace Innkapsling_Encapsulation
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var person = new Person();
            var name = person.Name;//denne propertien er tilgjengelig utenfor egen klasse!
                                   //  person.LastName = "Adem";//her får kompilator feil som sier at dette ikke er tillat!
            var person2 = new Person("Adem");
            var person3 = new Person("Zeynep");
            List<Person> people = new List<Person> { person2, person3 };
           
        }
       
    }

    //Men dersom man vil endre på verdien eller sette starteverdier hvordan gjøres det da?
    //Constructors
    //Constructor er en metode alle klasser har. Denne metoden heter det samme som klassen, default er det en tom metode som ikke er synlig før man selv legger den til..
    public class Person
    {
        //Når man har definert properties til en klasse ønsker man ofte å gi dem en startverdi når man lager en ny instans av objektet. Feks vil jeg ha 2 personer i en liste, og de skal ha forskjellige navn. Isteden for å endre på Name utenfor person klassen, kan jeg ta inn navnet som parameter i constructoren og sette verdien slik:
        public string FirstName { get; private set; }
        public string Address { get; private set; }


        public Person(string firstName,string address)
        {
            FirstName = firstName;
            Address = address;
        }
        public Person(string firstName)
        {
            FirstName = firstName;// da kan person klassen endre verdien på propertyen Name til den gitte verdien.
        }

        public Person()
        {

        }
        public string Name { get; set; }//Denne propertien er tilgjengelig utenfor egen klasse!
        public string LastName { get;  private set; }//Hvis vi ønsker at den propertiesen ikke må endres utsiden av klassen, gjøre vi sånn!

        public void UpdateAddress(string updateAddress)
        {
            Address = updateAddress;//På denne måten sender vi inn hvilken verdi man vil propertyen skal få
            //uten at en klasse utenfra kan manipulere den direkte!
            //Bu sekilde baska bir sinif icinde dogrudan manipule edilmesi yerine biz kullaniciya bu methodu kullanarak Address degeri girmeye zorluyoruz....
            //Bu bu acidan cook onemlidir...
        }
    }
    
}
