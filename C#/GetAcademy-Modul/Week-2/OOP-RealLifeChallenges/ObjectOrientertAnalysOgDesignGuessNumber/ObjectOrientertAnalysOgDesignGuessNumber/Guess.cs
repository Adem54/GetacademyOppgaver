using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObjectOrientertAnalysOgDesignGuessNumber
{
    internal class Guess
    {
        private int _number;
        private bool _isTooHight;
        private bool IsCorrect { get; }
        public string Description => $"{_number} er {DescriptionWord}";

        private string DescriptionWord =>
            IsCorrect ? "riktig" :
            _isTooHight ? "for høyt" :
            "for lavt";

        public Guess(int number,bool isTooHight, bool isCorrect)
        {
                _number=number;
                _isTooHight=isTooHight;
                IsCorrect = isCorrect;
        }
    }
}
