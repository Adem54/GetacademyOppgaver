using System;

namespace DateTimeCSharp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            //Bruken av DateTime i C#
            var now = DateTime.Now;
            Console.WriteLine($"now: {now}");
            //now: 25.04.2022 12:08:47
            //Show current month and year
            DateTime dt = DateTime.Now;
            Console.WriteLine(dt.Month.ToString() + "/" + dt.Year.ToString());
            //4/2022
            //En annen måte å skrive ut eller printe ut month and year
            DateTime now2 = DateTime.Now;

            string formatted = now2.ToString("MM yyyy");
            Console.WriteLine(formatted);//04 2022
            Console.WriteLine(now2.ToString("MMMM"));//april

            //Hvis vi tar inn  year, month,day
            ////assigns year, month, day
            DateTime dt2 = new DateTime(2015, 12, 31);
            Console.WriteLine(dt2.Month.ToString() + "/" + dt2.Year.ToString() + "/" + dt2.Day.ToString());//12/2015/31

            DateTime dt7 = new DateTime(2022, 1, 31);//1/2022/31
            Console.WriteLine(dt7.Month.ToString() + "/" + dt7.Year.ToString() + "/" + dt7.Day.ToString());//12/2015/31
                                                                                                           //assigns year, month, day, hour, min, seconds
            DateTime dt3 = new DateTime(2015, 12, 31, 5, 10, 20);
            Console.WriteLine(dt3.Year + " / " + dt3.Month + " / " + dt3.Day + " / " + dt3.Hour + " / " + dt3.Minute + " / " + dt3.Second);
            //2015 / 12 / 31 / 5 / 10 / 20
            //assigns year, month, day, hour, min, seconds, UTC timezone
            DateTime dt4 = new DateTime(2015, 12, 31, 5, 10, 20, DateTimeKind.Utc);
            Console.WriteLine(dt4.ToUniversalTime());

            //Example Invalid date
            //  DateTime dt5 = new DateTime(2015, 12, 32); //throws exception: day out of range

            DateTime date1 = new DateTime(2009, 8, 1, 0, 0, 0);
            DateTime date2 = new DateTime(2009, 8, 2, 0, 0, 0);
            int result = DateTime.Compare(date1, date2);
            string relationship;

            if (result < 0)
                relationship = "is earlier than";
            else if (result == 0)
                relationship = "is the same time as";
            else
                relationship = "is later than";


            DateTime date3 = DateTime.Parse("02/06/2019");
            DateTime date4 = DateTime.Now;  //Moment

            Console.WriteLine("Your Date :" + date3.ToShortDateString());
            Console.WriteLine("Now       :" + date4.ToShortDateString());
            Console.WriteLine("**************************");

            if (date3.Date > date4.Date)
            {
                //It's a later date
                Console.Write("It's a later date");
            }
            else if (date3.Date < date4.Date)
            {
                //It's an earlier or equal date
                Console.Write("It's an earlier date ");
            }
            else
            {
                Console.Write("It's an equal date");
            }
            Console.ReadLine();
        }
    }
}
