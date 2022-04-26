using System;
using System.Collections.Generic;

namespace ConstructorTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Test test = new Test();
            test.ShowList();
        }
    }

    class Test
    {
        List<int> _numre = new List<int>() { 12,4 ,5};
        public Test()
        {
            
        }

        public List<int> Numre {
            get { return _numre; }  
        }

        public void ShowList()
        {
            foreach (var item in Numre)
            {
                Console.WriteLine("{0}", item);
            }
        }
    }
}


