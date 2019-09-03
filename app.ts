
//arrays
let thousandsArray = ["", "one thousand", "two thousands", "three thousands",
    "four thousands", "five thousands", "six thousands",
    "seven thousands", "eight thousands", "nine thousands"];

let hundredsArray = ["", "one hundrend", "two hundrends", "three hundrends",
    "four hundrends", "five hundrends", "six hundrends",
    "seven hundrends", "eight hundrends", "nine hundrends"];

let dozensArray = ["", "", "twenty", "thirty",
    "forty", "fifty", "sixty",
    "seventy", "eighty", "ninty"];

let teensArray = ["ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"];

let singlesArray = ["", "one", "two", "three",
    "four", "five", "six",
    "seven", "eight", "nine"];
//

//variables
let number: number;
do {
    number = parseInt(prompt("enter number between 1 and 9999"));
}
while (!(number >= 1 && number <= 9999));
let number2 = number;
let number3 = number;
let number4 = number;
let number5 = number;
//

//thousands counter
let thousandsCounter = 0;

while ((number2 >= 10) || (thousandsCounter < 3)) {
    number2 = number2 / 10;
    thousandsCounter += 1;
}

let thousndsDigit = Math.floor(number2);
//document.write(thousndsDigit + "<br>");


let thousands: string;
switch (thousandsCounter == 3)
{
    case (thousndsDigit == 1):
        {
            thousands = thousandsArray[1];
            break;
        }

    case (thousndsDigit == 2):
        {
            thousands = thousandsArray[2];
            break;
        }

    case (thousndsDigit == 3):
        {
            thousands = thousandsArray[3];
            break;
        }

    case (thousndsDigit == 4):
        {
            thousands = thousandsArray[4];
            break;
        }

    case (thousndsDigit == 5):
        {
            thousands = thousandsArray[5];
            break;
        }

    case (thousndsDigit == 6):
        {
            thousands = thousandsArray[6];
            break;
        }

    case (thousndsDigit == 7):
        {
            thousands = thousandsArray[7];
            break;
        }

    case (thousndsDigit == 8):
        {
            thousands = thousandsArray[8];
            break;
        }

    case (thousndsDigit == 9):
        {
            thousands = thousandsArray[9];
            break;
        }

    case (thousndsDigit == 0):
        {
            thousands = thousandsArray[0];
            break;
        }

    default:
        {
            thousands = thousandsArray[0];
            break;
        }
}
//document.write(thousands + "<br>");
//



//hundrands counter

let hundredsCounter = 0;

while ((number3 >= 100) || (hundredsCounter < 2))
{
    number3 = number3 / 10;
    hundredsCounter += 1;
}

let hundredsDigit = Math.floor(number3) % 10;
//document.write(String(hundredsDigit));



let hundreds: string;
switch (hundredsCounter == 2) {
    case (hundredsDigit == 1):
        {
            hundreds = hundredsArray[1];
            break;
        }

    case (hundredsDigit == 2):
        {
            hundreds = hundredsArray[2];
            break;
        }

    case (hundredsDigit == 3):
        {
            hundreds = hundredsArray[3];
            break;
        }

    case (hundredsDigit == 4):
        {
            hundreds = hundredsArray[4];
            break;
        }

    case (hundredsDigit == 5):
        {
            hundreds = hundredsArray[5];
            break;
        }

    case (hundredsDigit == 6):
        {
            hundreds = hundredsArray[6];
            break;
        }

    case (hundredsDigit == 7):
        {
            hundreds = hundredsArray[7];
            break;
        }

    case (hundredsDigit == 8):
        {
            hundreds = hundredsArray[8];
            break;
        }

    case (hundredsDigit == 9):
        {
            hundreds = hundredsArray[9];
            break;
        }

    case (hundredsDigit == 0):
        {
            hundreds = hundredsArray[0];
            break;
        }

    default:
        {
            hundreds = hundredsArray[0];
            break;
        }
}
//
//dozens counter

let dozensCounter = 0;

while ((number4 >= 1000) || (dozensCounter < 1)) {
    number4 = number4 / 10;
    dozensCounter += 1;
}

let dozensDigit = Math.floor(number4) % 10;

//document.write(String(dozensDigit));
//




// single counter

let singlesCounter = 0;

let singlesDigit = number5 % 10;
//document.write(String(singlesDigit) + "<br>");
// end singles counter



let dozens: string;
switch (dozensCounter == 1) {
    case (dozensDigit == 1):
        {
            switch (dozensDigit == 1) {

                case (singlesDigit == 1):
                    {
                        dozens = teensArray[1];
                        break;
                    }

                case (singlesDigit == 2):
                    {
                        dozens = teensArray[2];
                        break;
                    }

                case (singlesDigit == 3):
                    {
                        dozens = teensArray[3];
                        break;
                    }

                case (singlesDigit == 4):
                    {
                        dozens = teensArray[4];
                        break;
                    }

                case (singlesDigit == 5):
                    {
                        dozens = teensArray[5];
                        break;
                    }

                case (singlesDigit == 6):
                    {
                        dozens = teensArray[6];
                        break;
                    }

                case (singlesDigit == 7):
                    {
                        dozens = teensArray[7];
                        break;
                    }

                case (singlesDigit == 8):
                    {
                        dozens = teensArray[8];
                        break;
                    }

                case (singlesDigit == 9):
                    {
                        dozens = teensArray[9];
                        break;
                    }

                case (singlesDigit == 0):
                    {
                        dozens = teensArray[0];
                        break;
                    }
            }
            break;
        }

    case (dozensDigit == 2):
        {
            dozens = dozensArray[2];
            break;
        }

    case (dozensDigit == 3):
        {
            dozens = dozensArray[3];
            break;
        }

    case (dozensDigit == 4):
        {
            dozens = dozensArray[4];
            break;
        }

    case (dozensDigit == 5):
        {
            dozens = dozensArray[5];
            break;
        }

    case (dozensDigit == 6):
        {
            dozens = dozensArray[6];
            break;
        }

    case (dozensDigit == 7):
        {
            dozens = dozensArray[7];
            break;
        }

    case (dozensDigit == 8):
        {
            dozens = dozensArray[8];
            break;
        }

    case (dozensDigit == 9):
        {
            dozens = dozensArray[9];
            break;
        }

    case (dozensDigit == 0):
        {
            dozens = dozensArray[0];
            break;
        }

    default:
        {
            dozens = dozensArray[0];
            break;
        }
}



let singles: string;

switch (dozensDigit >= 0) {
    case ((singlesDigit == 1) && (dozensDigit != 1)):
        {
            singles = singlesArray[1];
            break;
        }

    case ((singlesDigit == 2) && (dozensDigit != 1)):
        {
            singles = singlesArray[2];
            break;
        }

    case ((singlesDigit == 3) && (dozensDigit != 1)):
        {
            singles = singlesArray[3];
            break;
        }

    case ((singlesDigit == 4) && (dozensDigit != 1)):
        {
            singles = singlesArray[4];
            break;
        }

    case ((singlesDigit == 5) && (dozensDigit != 1)):
        {
            singles = singlesArray[5];
            break;
        }

    case ((singlesDigit == 6) && (dozensDigit != 1)):
        {
            singles = singlesArray[6];
            break;
        }

    case ((singlesDigit == 7) && (dozensDigit != 1)):
        {
            singles = singlesArray[7];
            break;
        }

    case ((singlesDigit == 8) && (dozensDigit != 1)):
        {
            singles = singlesArray[8];
            break;
        }

    case ((singlesDigit == 9) && (dozensDigit != 1)):
        {
            singles = singlesArray[9];
            break;
        }

    case ((singlesDigit == 0) && (dozensDigit != 1)):
        {
            singles = singlesArray[0];
            break;
        }

    default:
        {
            singles = singlesArray[0];
            break;
        }
}



// ands placements
let firstAnd: string;
let secondAnd: string;


if ((thousndsDigit > 0) && (hundredsDigit > 0) && ((dozensDigit > 0) || (singlesDigit > 0))) {
    firstAnd = " and ";
    secondAnd = " and ";
}
else if ((thousndsDigit == 0) && (hundredsDigit > 0) && ((dozensDigit > 0) || (singlesDigit > 0))) {
    firstAnd = "";
    secondAnd = " and ";
}
else if ((thousndsDigit > 0) && ((hundredsDigit > 0) || (dozensDigit > 0) || (singlesDigit > 0))) {
    firstAnd = " and ";
    secondAnd = "";
}
else {
    firstAnd = "";
    secondAnd = "";
}

document.write(thousands + firstAnd + hundreds + secondAnd + dozens + " " + singles);
