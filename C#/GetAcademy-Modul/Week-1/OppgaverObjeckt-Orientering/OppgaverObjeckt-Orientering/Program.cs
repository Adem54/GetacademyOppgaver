using System;
using System.Collections.Generic;


namespace OppgaverObjeckt_Orientering
{
    internal class Program
    {
        internal static void Main(string[] args)//cognitive comlexity is a measure of how difficult a unit of code is to intuitively understand.Congitive complexity tells  you
                                                //how difficult your code will be to read and understand
        {
            var donor = new Donor();
            donor.AppplyForTransplantToTheHospital();
            var doctor = new Doctor(donor);
            var isDonorMeetRequirement = doctor.CheckIsDonorMeetRequirements();
            var resultIfDonorKidneyFits = doctor.CheckIfDonorsKidneyFits(isDonorMeetRequirement);
            doctor.ExecuteKidneyTransplant(resultIfDonorKidneyFits);
            doctor.ResultOfKidneyTransplant();
        }
    }
}

/*
 MiniOppgave: Organ transplant!
Det har vært en akutt ulykke og Bernt ligger på sykehuset.

Han trenger en ny Nyre!

Heldigvis har fetteren hans Kåre to sunne Nyrer, og det er utført tester som tilsier at Kåre kan gi bort en av nyrene til Bernt og det vil være en høy suksessrate for overlevelse!

Hjelp Bernt med å overleve!

Finn ut hva vi kan lage som objekter, og hva man kan lage som metoder i dette tilfellet.

Lag gjerne Consoll.WriteLine() - statements i koden slik at man ser hva som skjer!
 
 */

internal class Person
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Role { get; set; }//receipent,doner, doctor
    public int Age { get; set; }
    public double Weight { get; set; }
    public bool HasTwoHealthyKidneys { get; set; }

}


internal class Recipient : Person
{
    
    public Recipient(string firstName)
    {
        FirstName = firstName;
        Role = "Recipient";
    }

}

internal class Donor : Person
{

    public Donor()
    {

        Role = "Donor";
    }
    public bool AppplyForTransplantToTheHospital()
    {
        return Role == "Donor";
    }

}

internal class Doctor : Person
{
    private Donor _donor;

    public Doctor(Donor donor)
    {
        _donor = donor;
        Role = "Doctor";
    }

    public bool CheckIsDonorMeetRequirements()
    {


        bool result = _donor.AppplyForTransplantToTheHospital() && _donor.Age > 18 && _donor.HasTwoHealthyKidneys;
        return result;
    }

    public bool CheckIfDonorsKidneyFits(bool checkIsDonorRequirements)
    {
        if (!checkIsDonorRequirements && _donor.FirstName != "Kåre")
        {
            return false;
        }

        return true;
    }

    public bool ExecuteKidneyTransplant(bool checkIfDonorsKidneyFits)
    {
        if (!checkIfDonorsKidneyFits)
        {
            return false;
        }

        return true;
    }

    public void ResultOfKidneyTransplant()
    {
        List<int> list = new List<int> { 1, 1, 1, 1, 1, 0, 1, 1, 1, 1 };
        var random = new Random();
        var randomIndex = random.Next(0, list.Count);
        var randomElement = list[randomIndex];
        if (randomElement == 1)
        {
            Console.WriteLine("Kidney transplant is successfull and Bernt surviver ");
        }
        else
        {
            Console.WriteLine("Unfortunatelly,kidney transplant is not successfull and we lost him  ");
        }


    }
}



