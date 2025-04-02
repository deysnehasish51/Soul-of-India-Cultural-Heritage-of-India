const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var restaurant;

if(state == "Karnataka"){

 restaurant = {
    data:[
   {
        rname: "Yakshagana Dance Classes",
        location: "123, South Bangalore Road, Bangalore, Karnataka",
        price: "Rs.800 Per head",
        image: "../assets/img/kathak3.jpg",
        contact: "Email: info@karnatakadelights.com, Phone: +91 123-456-7890"
   },
   {
    rname: "Bharatnatiyam",
    location: "Address : Mangalore ",
    price: "Cost : Rs.1000 Per Person",
    image: "../assets/img/bharat2.jpg",
    contact: "Email: info@coastalkarnatakaflavors.com, Phone: +91 987-654-3210"
   },
   {
    rname: "Huli Dance",
    location: "K789, North Karnataka Street, Hubli, Karnatakat",
    price: "Cost : Rs.650 Per Person",
    image: "../assets/img/kathak3.jpg",
    contact: "Email: info@northkarnatakasavoring.com, Phone: +91 765-432-1098"
   },
],
};
}

else if (state == "Jammu and Kashmir")
{
     restaurant = {
        data:[
       {
            rname: "Rouf",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dumhal Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Hafiza Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

else if (state == "Telangana"){
     restaurant = {
        data:[
       {
            rname: "Gussadi Dance",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dhimsa Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Perini Sivatandavam",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

else if (state == "Assam") {
     restaurant = {
        data:[
       {
            rname: "Bihu",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Bagurumba",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Ojapali Dance",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}
else if (state == "Odisha") {
    restaurant = {
        data: [
            {
                rname: "Odissi Dance Classes",
                location: "Bhubaneswar, Odisha",
                price: "Rs.700 Per Person",
                image: "../assets/img/odissi.jpg",
                contact: "Email: info@odishadances.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Gotipua Dance",
                location: "Puri, Odisha",
                price: "Rs.600 Per Person",
                image: "../assets/img/gotipua.jpg",
                contact: "Email: gotipua@odishadances.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Chhau Dance",
                location: "Baripada, Odisha",
                price: "Rs.800 Per Person",
                image: "../assets/img/chhau.jpg",
                contact: "Email: chhau@odishadances.com, Phone: +91 765-432-1098",
            },
        ],
    };
}else if (state == "Andhra Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Kuchipudi Dance Classes",
                location: "Vijayawada, Andhra Pradesh",
                price: "Rs.500 Per Person",
                image: "../assets/img/kuchipudi.jpg",
                contact: "Email: info@andhraperformances.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Andhra Natyam",
                location: "Visakhapatnam, Andhra Pradesh",
                price: "Rs.700 Per Person",
                image: "../assets/img/andhranatyam.jpg",
                contact: "Email: natyam@andhraperformances.com, Phone: +91 987-654-3210",
            },
        ],
    };
} else if (state == "Arunachal Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Bardo Chham Classes",
                location: "Tawang, Arunachal Pradesh",
                price: "Rs.800 Per Person",
                image: "../assets/img/bardo_chham.jpg",
                contact: "Email: info@arunachaldances.com, Phone: +91 876-543-2109",
            },
            {
                rname: "Monpa Folk Dance",
                location: "Bomdila, Arunachal Pradesh",
                price: "Rs.600 Per Person",
                image: "../assets/img/monpa.jpg",
                contact: "Email: monpa@arunachaldances.com, Phone: +91 654-321-0987",
            },
        ],
    };
} else if (state == "Bihar") {
    restaurant = {
        data: [
            {
                rname: "Jhijhiya Dance Classes",
                location: "Patna, Bihar",
                price: "Rs.300 Per Person",
                image: "../assets/img/jhijhiya.jpg",
                contact: "Email: info@bihardances.com, Phone: +91 432-109-8765",
            },
            {
                rname: "Jat-Jatin Dance",
                location: "Gaya, Bihar",
                price: "Rs.400 Per Person",
                image: "../assets/img/jatjatin.jpg",
                contact: "Email: jatjatin@bihardances.com, Phone: +91 210-987-6543",
            },
        ],
    };
} else if (state == "Chhattisgarh") {
    restaurant = {
        data: [
            {
                rname: "Panthi Dance Classes",
                location: "Raipur, Chhattisgarh",
                price: "Rs.700 Per Person",
                image: "../assets/img/panthi.jpg",
                contact: "Email: info@chhattisgarhdances.com, Phone: +91 345-678-9012",
            },
            {
                rname: "Saila Dance",
                location: "Bilaspur, Chhattisgarh",
                price: "Rs.500 Per Person",
                image: "../assets/img/saila.jpg",
                contact: "Email: saila@chhattisgarhdances.com, Phone: +91 987-654-3210",
            },
        ],
    };
} else if (state == "Goa") {
    restaurant = {
        data: [
            {
                rname: "Fugdi Dance Classes",
                location: "Panaji, Goa",
                price: "Rs.400 Per Person",
                image: "../assets/img/fugdi.jpg",
                contact: "Email: info@goadances.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Dekni Dance",
                location: "Margao, Goa",
                price: "Rs.600 Per Person",
                image: "../assets/img/dekni.jpg",
                contact: "Email: dekni@goadances.com, Phone: +91 987-654-3210",
            },
        ],
    };
} else if (state == "Haryana") {
    restaurant = {
        data: [
            {
                rname: "Saang Dance Classes",
                location: "Gurgaon, Haryana",
                price: "Rs.350 Per Person",
                image: "../assets/img/saang.jpg",
                contact: "Email: info@haryanadances.com, Phone: +91 654-321-0987",
            },
            {
                rname: "Dhamal Dance",
                location: "Panipat, Haryana",
                price: "Rs.450 Per Person",
                image: "../assets/img/dhamal.jpg",
                contact: "Email: dhamal@haryanadances.com, Phone: +91 321-098-7654",
            },
        ],
    };
} else if (state == "Himachal Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Nati Dance Classes",
                location: "Shimla, Himachal Pradesh",
                price: "Rs.550 Per Person",
                image: "../assets/img/nati.jpg",
                contact: "Email: info@himachaldances.com, Phone: +91 876-543-2109",
            },
            {
                rname: "Chham Dance",
                location: "Manali, Himachal Pradesh",
                price: "Rs.650 Per Person",
                image: "../assets/img/chham.jpg",
                contact: "Email: chham@himachaldances.com, Phone: +91 543-210-9876",
            },
        ],
    };
} else if (state == "Kerala") {
    restaurant = {
        data: [
            {
                rname: "Kathakali Dance Classes",
                location: "Kochi, Kerala",
                price: "Rs.800 Per Person",
                image: "../assets/img/kathakali.jpg",
                contact: "Email: info@keraladances.com, Phone: +91 321-654-0987",
            },
            {
                rname: "Mohiniyattam Dance",
                location: "Trivandrum, Kerala",
                price: "Rs.900 Per Person",
                image: "../assets/img/mohiniyattam.jpg",
                contact: "Email: mohiniyattam@keraladances.com, Phone: +91 210-987-6543",
            },
        ],
    };
}


else{
     restaurant = {
        data:[
       {
            rname: "Garba",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Dandiya",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Tippani",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
       },
    ],
    };
}

for(let i of restaurant.data){
    let card = document.createElement("div");
    card.classList.add("card");
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h4");
    name.classList.add("rest-name");
    name.innerText = i.rname.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h5");
    price.innerText = i.price;
    container.appendChild(price);

    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);

    let contact = document.createElement("h5");
    contact.innerText = i.contact;
    container.appendChild(contact);


    card.appendChild(container);
    document.getElementById("restaurant").appendChild(card);
}


document.getElementById("search").addEventListener("click",()   => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll("rest-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);

    elements.forEach( (element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }

            else{
                cards[index].classList.add("hide");
            }

        }
);
});

