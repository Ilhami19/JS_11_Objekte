

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/

let person = {
                firstName:"Deniz",
                familyName:"Yildiz",
                salary:[120000, 160000],
                hasAccess: true,
                sayHello: 
                        function()
                        {
                            return "Hi, ich bin " + this.firstName;
                        }
};

ausgabe(person);
ausgabe(person.firstName);
ausgabe(person.familyName);
ausgabe(person.salary[0]);
ausgabe(person.hasAccess);
ausgabe(person.sayHello());

let txt =  "Ich bin " + person.firstName + " " +
            person.familyName + " und verdiene " +
            person.salary[1] + " p.a.";

ausgabe(txt);

/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
}