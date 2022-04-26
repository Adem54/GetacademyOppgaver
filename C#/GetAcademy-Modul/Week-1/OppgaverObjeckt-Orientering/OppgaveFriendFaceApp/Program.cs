using System;
using System.Collections.Generic;
using System.Linq;

namespace OppgaveFriendFaceApp
{
    /*
     Oppgave Social Media
Oppgave - Social Media

Lag applikasjon FriendFace. Det er tiltenkt at dette skal bli det nyeste kule sosiale mediet som tar verden med storm. Her trenger en bruker en profilside med diverse info om seg (ta gjerne inspirasjon fra andre sosiale medier),

Du må lage en metode som heter “AddFriend” og en metode “RemoveFriend”.

Når programmet starter opp skal du lage en hovedbruker som er “innlogget”. Du må også opprette flere forskjellige brukere som lever på det sosiale mediet.

Lag et kommandbasert meny i konsollen der du kan:

Legge til forskjellige brukere som venn (på den som er innlogget)
Fjerne brukere som venn
Printe ut en liste av alle man har lagt til som venn
Velge en av vennene og printe ut profilinformasjonen deres.
     */
    internal class Program
    {
        static void Main(string[] args)
        {
            UserType mainUserType = new UserType() { Id = 1, Title = "MainUser" };
            UserType proffessionalUserType = new UserType() { Id = 2, Title = "proffessionalUserType" };
            UserType ordinaryUserType = new UserType() { Id = 1, Title = "ordinaryUserType" };
            List<UserType> userTypes = new List<UserType>() { mainUserType, proffessionalUserType, ordinaryUserType };

            User adem = new MainUser(1, userTypeId:1,   "Adem", "adem@gmail.com");
            User jonas = new ProfessionalUser(2, 2, "Jonas", "jonas@gmail.com");
            User adrian = new OrdinaryUser(3, userTypeId:3, "Adrian", "adrian@gmail.com");
            var mainUsers = new List<User>();
            UserManager mainUserManager = new MainUserManager(mainUsers);
            ApplyManager applyManager=new ApplyManager();
            //Legge til forskjellige brukere som venn (på den som er innlogget)
            Console.WriteLine("Legge til forskjellige brukere som venn (på den som er innlogget)");
            applyManager.AddFriend(mainUserManager, adem);
            applyManager.AddFriend(mainUserManager, jonas);
            applyManager.AddFriend(mainUserManager, adrian);
            //  Fjerne brukere som venn
            applyManager.RemoveFriend(mainUserManager, jonas);

            Console.WriteLine("\n");
            //Printe ut en liste av alle man har lagt til som venn
            Console.WriteLine("Printe ut en liste av alle man har lagt til som venn");
            Console.WriteLine("Users List");
            foreach (var user in mainUsers)
            {
                Console.WriteLine("{0} {1}",user.UserName,user.Email);
            }

            Console.WriteLine("\n");
            Console.WriteLine("//Velge en av vennene og printe ut profilinformasjonen deres");
            Console.WriteLine("Adrian: {0}{1}{2}", adrian.UserName,adrian.Email,adrian.UserTypeId);

           
            
        }
    }

    internal class User
    {
 
        public User(int id,int userTypeId,string userName,string email)
        {
           
            Id = id;
            UserTypeId = userTypeId;
            UserName= userName;
            Email= email;
        }
        public int Id { get;  }
        public int UserTypeId { get; set; }
        public string UserName { get; }
        public string Email { get; }
        
    }

    internal class UserType
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }

    internal class UserManager
    {
        public List<User> _users;
        public UserManager(List<User> users)
        {
            _users = users;
        }
        public void AddFriend(User user)
        {   
            _users.Add(user);
            Console.WriteLine(_users.Count);
            Console.WriteLine($"{user.UserName} is added!");
        }

        public void RemoveFriend(User user)
        {
            var result = _users.Find(u => u.Id == user.Id);
            if (result==null)
            {
                Console.WriteLine($"{user.UserName} is not founded!");

            }
            else
            {
                _users.Remove(result);
                Console.WriteLine(_users.Count);
                Console.WriteLine($"{user.UserName} is removed!");
            }
          

        }
    }
  
    internal class MainUser:User
    {
        
        public MainUser(int id,int userTypeId,string userName, string email):base(id,userTypeId,userName,email)
        {
            
        }

    }

    internal class MainUserManager : UserManager
    {
        public MainUserManager(List<User> mainUsers):base(mainUsers)
        {
            
        }
    }

    
    internal class ProfessionalUser : User
    {
        public ProfessionalUser(int id, int userTypeId, string userName, string email) : base(id, userTypeId, userName, email)
        {
        }
    }

    internal class ProfessionalUserManager : UserManager
    {
        public ProfessionalUserManager(List<User> professionalUsers):base(professionalUsers)
        {
                
        }
    }

    internal class OrdinaryUser:User
    {
        public OrdinaryUser(int id, int userTypeId, string userName, string email) : base(id, userTypeId, userName, email)
        {

        }
    }

    internal class OrdinaryUserManager : UserManager
    {
        public OrdinaryUserManager(List<User> ordinaryUsers):base(ordinaryUsers)
        {
                
        }
    }

    internal class ApplyManager
    {
        public void AddFriend(UserManager userManager,User user)
        {
            userManager.AddFriend(user);
        }

        public void RemoveFriend(UserManager userManager, User user)
        {
            userManager.RemoveFriend(user);
        }
    }
}
