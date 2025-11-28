const data = {
    Name: "Md. Humaian Kabir",
    Age: 25,
    Occupation: "Student",
    Address: "Chittagong, Bangladesh",
    print: () => {
        console.log(this.Name);
    },

    display: function (){
        console.log(this.Address);
    },

    address: {
        City : "Chittagong",
        Country : "Bangladesh",
        Thana: "Patenga",
        village: "South Patenga Bijoy Nagar",
        contact: {
            Email: "humaian2@gmail.com",
            Phone: "01610993887"
        }
    }
}
data.print(); // undefined because 'this' in arrow function does not refer to 'data' object. 
// Arrow functions do not have their own 'this' context. They inherit 'this' from the surrounding lexical scope.

data.display();
console.log(data.address.contact.Email);