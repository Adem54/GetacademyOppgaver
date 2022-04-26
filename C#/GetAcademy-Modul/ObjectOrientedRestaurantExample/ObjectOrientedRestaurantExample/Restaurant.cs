using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientedRestaurantExample
{
    internal class Restaurant
    {
        //Create a class called Restaurant that includes three pieces of information: name,address and gruduityrate.
       //DEFAULT VALUES....
        private string _name;
        private string _address;
        private double _gratuityRate;
        //Provide properties with get and set accessors for all instance variables, and do not allow negative values for gratuity rate.

        public string Name
        {
            get { return _name; }// get=>{ return _name;}
                                 //  set => _name = value ?? throw new ArgumentNullException(nameof(value)); bos degilse girilen degeri ver, girilen deger
                                 //bos ise hata firlat denilerek girilen degerin de belli kriterlere uyulmasi saglanabilir
             set { _name = value; }
        }

        public Restaurant(string name,string address,double gratuityRate)
        {
            Name = name;
            Address = address;
            GratuityRate = gratuityRate;
        }

        public string Address
        {
            get { return _address; }
            set { _address = value; }
        }

        public double GratuityRate
        {
            get { return _gratuityRate; }
            set
            {
                if (value > 0)
                {
                    _gratuityRate = value;//and do not allow negative values for gratuity rate
                }
            }
        }

        //Eger bir method veya function olusturacak isek onlarin kendilerine ait degiskenlerini olusturur icerilerinde
        //Fonksiyonu olusturduktan sonra fonksiyon icerisinde kullanilacak olan degiskenler olusturulur....
        public void GenerateReceipt()
        {
            double price=0;//Baslangic degeri vermez isen hata alirsin...
            double subTotal;
            double gratuityAmount;
            double grandTotal;
            int people;

            while (price!= -1)//Sentinal controlled while loop
            //price negatif olana kadar... price soracak...
            {
                //Burda her bir dongude fiyati sormamiz gerekir..
                Console.WriteLine("Enter price of food items: [-1 to quit]");
                price = Convert.ToDouble(Console.ReadLine());//string to tobouble-explicit casting
            }

        }

    }
}

/*
 //arbitrary-gelisiguzel,keyfi....
 Your class must also include a method to generate a sales receipt.Using a sentinel-controlled While loop, the method will collect the price for each food item ordered, and it will keep a subtotal for an arbitrary number of food items. 
Once the subtotal of all food items has been calculated, the method will then determine the amount for gratuity if the party consisted of 6 or more people.
The grand total will be the subtotal plus gratuity. The method must also display the amounts for subtotal, gratuity, anda grand total.

 */