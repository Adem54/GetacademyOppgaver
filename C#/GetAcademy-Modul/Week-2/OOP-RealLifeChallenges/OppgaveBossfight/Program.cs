using System;
using System.Security.Cryptography.X509Certificates;

namespace OppgaveBossfight
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            GameCharacter hero = new GameCharacter(100, 20, 40);
            
            GameCharacter boss = new GameCharacter(100, 30, 10);

            Battle.StartFight(hero,boss);

            //Iki oyuncu kazanana kadar savascaklar
            //Rakibin sagligi 0 olana kadar savas devam eder
            //Kimin saldirdigini,ne kadar hasar aldigini,ne kadar caninin kaldigini kaydedecek
            //Bir fight-dovuste oyuncular rakibin Strength gucu kadar, sagligini kaybeder...
            //Sagligi ne azaltiyorsa zarari o veriyor yani kac kere saldirirsan galiba o kadar zarar veriyorsun diye tahmin ediyrm
            //Saglik ne kadar azaliyorsa zarar odur iste,....sagligi ne kadar dusuruyorsa ki savasi kazanip kaybetme sagligin
            //bitmesine gore oluyor o zaman sagligi ne dusuruyorsa iste o zarar veriyor demektir...
            //Bir karakter Fight() yöntemini her kullandığında, ayrıca 10 dayanıklılık kaybeder.
            //Eğer Fight() staminada 0 ile çağrılırsa, Stamina'yı maça başladıklarında sahip olduklarına geri getiren Recharge() yöntemini kullanmaları gerekir.
            //Boss'un gücü, Fight() çağrıldığında her seferinde 0-30 arasında rastgele bir değerle değişir.Bu çok ilerlerse, patronun da 20'lik sabit bir gücü olmasına izin verin.
            //Programın çalışması bittiğinde Konsol günlüğü örneği:
            //Düşman kahramanı 5 hasarla vurdu, kahramanın artık 30 sağlığı kaldı.
            //Kahraman düşmanı 20 hasarla vurdu, düşmanın 0 sağlığı kaldı.
            //  Kahraman kazanan!

            //C# da integet tipi boolean a cevirebiliyoruz ve 0 false iken 1 den itibaren pozitifi sayilar True doner
            int i = -1;
            bool b = Convert.ToBoolean(i);
            Console.WriteLine(b);
        }
    }

    internal class GameCharacter
    {
        public GameCharacter(int health, int strength, int stimina)
        {
            Health = health;
            Strength = strength;
            Stimina = stimina;
        }
        public string Name { get; set; }
        public double Health { get; set; }
        public double Strength { get; set; }
        public double Stimina { get; set; }

        //Figh sonucu savsa kazanilip kaybedilme ile ilgili sonucu degerlndirebilecegimiz bir veri donmeli ki biz bir degerlendirme yapalim
        public void Fight(GameCharacter hero, GameCharacter boss)
        {
            //Eğer Fight() staminada 0 ile çağrılırsa, Stamina'yı maça başladıklarında sahip olduklarına geri getiren Recharge() yöntemini kullanmaları gerekir.
            if (hero.Stimina == 0) Recharge(hero);
            if (boss.Stimina == 0) Recharge(boss);
            hero.Health -= boss.Strength;//Bir fight-dovuste oyuncular rakibin Strength gucu kadar, sagligini kaybeder..
            Console.WriteLine("heroHealth: "+hero.Health);
            boss.Health -= boss.Strength;
            Console.WriteLine("bossHealth: " + boss.Health);
            hero.Stimina -= 10;////Bir karakter Fight() yöntemini her kullandığında, ayrıca 10 dayanıklılık kaybeder.
            boss.Stimina -= 10;
            var random = new Random();
            var randomNumber = random.Next(0, 30);
            boss.Strength = randomNumber;//Styrken til Bossen varierer med en random verdi mellom 0-30 for hver gang Fight() kalles. Om dette blir for avansert, la bossen også få en fast styrke på 20.
        }

        //Recharge calisinca tum degerler savasin bsaindaki degerlere donecek



        public void Recharge(GameCharacter gameCharacter)
        {//Baslanic degerine nasil getiririz, 
         //  new GameCharacter()
            gameCharacter.Stimina = Stimina;
        }
    }

    // // This is a utility class so it makes sense
    // to have just static methods

    class Battle
    {
        public static void StartFight(GameCharacter hero, GameCharacter boss)
        {
            Console.WriteLine("hero-healt: "+hero.Health);
            Console.WriteLine("boss-health "+boss.Health);
            while (hero.Health > 0 || boss.Health > 0)//hero.Stimina==0 || boss.Stimina==0//Rakibin sagligi 0 olana kadar savas devam eder
            {
                Console.WriteLine("While dongusune girildi");

                GetFightResult(hero, boss);


            }


        }
        /*
         Enemy hit hero with 5 damage, hero now has 30 health left.
        Hero hit enemy with 20 damage, enemy has 0 health left.
        Hero is the winner!
         */
        public static void GetFightResult(GameCharacter hero, GameCharacter boss)
        {
            double heroHealthBeforeFight = hero.Health;
            double bossHealthBeforeFight = boss.Health;
            hero.Fight(hero, boss);
            boss.Fight(hero, boss);
            double heroHealthAfterFight = hero.Health;
            double bossHealtAfterFight = boss.Health;
            double herosDamage = heroHealthBeforeFight - heroHealthAfterFight;
            double bossDamage = bossHealthBeforeFight - bossHealtAfterFight;

            if (heroHealthAfterFight == 0)
            {
                Console.WriteLine($"Hero hit boss {bossDamage}, hero now has {heroHealthAfterFight} left /n Boss hit hero {herosDamage}, boss now has {bossHealtAfterFight} left /n Boss is the vinner  ");
            }else if (bossHealtAfterFight == 0)
            {
                Console.WriteLine($"Hero hit boss {bossDamage}, hero now has {heroHealthAfterFight} left /n Boss hit hero {herosDamage}, boss now has {bossHealtAfterFight} left /n Hero is the vinner  ");

            }

         

        }

    }
}
