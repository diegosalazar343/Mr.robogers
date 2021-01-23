# _Mr.Roboger's Neighborhood_

#### _Mr.Roboger's Neighborhood for Epicodus, 1.22.21_

#### _By Diego Salazar_

## Description
_This project was intended to display our knowledge and skills that we developed in week three. For example, in this project I seperated business and user interface logic, implemented tests for every behavior I listed, and used loops to create the application. I also included a several gifs of Mr.Rodgers!_


## Tests

| Behavior | Input | Output |
| --------------| :-----------:|-----:|
| User puts in the number 4 | 4 | 0,1,2,3,4 |
| User puts in the number 1 and recieves back the word Beep! | 1, 16, 41 | Beep!, Beep!, Beep! |
| User puts in the number 2 and recieves back the word Boop! | 2,20,42 | Boop!,Boop!,Boop! |
| User puts in the number 3 and recieves back the words "Won't you be my neighbor?" | 3, 30 | Won't you be my neighbor? |
| The first exception should apply unless the second exception applies, and the second section should apply unless the third exception applies | 13, 21 , 32 | Won't you be my neighbor, Boop!, Won't you be my neighbor? |

** Describe: isMr.Robogers()** <br>
Test: "The program returns a range of numbers from 0 to the users input number: "4". <br>
Expect:(isMr.Robogers(4)).toEqual(0,1,2,3,4);

Test: "The numbers that contain a 1 will have all their digits replaced by "Beep!". <br>
Expect(isMr.Robogers("1", "16", "41")).toEqual("Beep!","Beep!", "Beep!");

Test: "The numbers that contain a 2 will have all their digits replaced by "Boop!".
<br>
Expect(isMr.Robogers("2","20","42")).toEqual("Boop!","Boop!","Boop!");

Test: "The numbers that contain a 3 will have all their digits replaced by "Won't you be my neighbor?"
<br>
Expect(isMr.Robogers("3","30")).toEqual("Won't you be my neighbor?", "Won't you be my neighbor?");

Test: "The first exception should apply unless the second exception applies, and the second section should apply unless the third exception applies.
<br>
Expect(isMr.Robogers("13", "21", "32")).toEqual("Won't you be my neighbor", "Boop!", "Won't you be my neighbor?");

## Setup
* Clone this Mr.Robogers project github repo.
* To clone the repository first you must navigate to the main page of the repository.
* Above the list of files, click Code.
* To clone the repository click the clipboard icon.
* Now Open Terminal
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and then paste the URL you copied earlier. It should look like this: $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.
* Finally press enter to create your local clone.
* Open the link in your browser.
* Run the application by inputting numbers of your choice.

## Technologies Used
* HTML
* CSS
* JavaScript
* JQuery
* Bootstrap

## Legal
* Copyright(c) 2021 **_Diego Salazar_**
* This software is licensed under the MIT license.
