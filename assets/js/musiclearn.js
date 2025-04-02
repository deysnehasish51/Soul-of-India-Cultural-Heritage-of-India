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
        rname: "Karnataka Music",
        location: "123, South Bangalore Road, Bangalore, Karnataka",
        price: "Rs.1000 Per Person for 1 week",
        image: "../assets/img/music9.jpg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
   },
   {
    rname: "Carnatic Music Classes",
    location: "Address : Mangalorean Fish Curry, Neer Dosa, Goli Baje",
    price: "Cost : Rs.2000 Per Person for 1 week",
    image: "../assets/img/musicteacher2.jpeg",
    contact: "Email: info@coastalkarnatakaflavors.com, Phone: +91 987-654-3210"
   },
   {
    rname: "Community Music Classes",
    location: "K789, North Karnataka Street, Hubli, Karnatakat",
    price: "Cost : Rs.650 Per Person",
    image: "../assets/img/musicteacher3.jpg",
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
            rname: "Jammu music Class",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/music9.jpg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "jammu music Classes",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/musicteacher2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Jammu Folk music Classes",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/musicteacher3.jpg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
    ],
    };
}

else if (state == "Telangana"){
     restaurant = {
        data:[
       {
            rname: "Bollywood music Classes",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/music9.jpg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Hollywood Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher2.jpeg",
        contact: "Email: info@karnathbfakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "hindustani masti",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher3.jpg",
        contact: "Email: info@khysbjcarnatakamusic.com, Phone: +91 123-456-7890"
       },
    ],
    };
}

else if (state == "Gujarat") {
     restaurant = {
        data:[
       {
            rname: "gujarat music world",
            location: "Kumarswamy Layout",
            price: "Rs.400 Per Person",
            image: "../assets/img/music9.jpg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Swag Gujarati",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "traditional dance school",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher3.jpg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
    ],
    };
}else if (state == "Andhra Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Kuchipudi Music Classes",
                location: "Vijayawada, Andhra Pradesh",
                price: "Rs.500 Per Person",
                image: "../assets/img/andhra_music1.jpg",
                contact: "Email: info@kuchipudiarts.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Carnatic Vocal Academy",
                location: "Tirupati, Andhra Pradesh",
                price: "Rs.700 Per Person",
                image: "../assets/img/andhra_music2.jpg",
                contact: "Email: info@carnaticvocalap.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Traditional Andhra Beats",
                location: "Visakhapatnam, Andhra Pradesh",
                price: "Rs.300 Per Person",
                image: "../assets/img/andhra_music3.jpg",
                contact: "Email: info@andhrabeats.com, Phone: +91 765-432-1098",
            },
        ],
    };
} else if (state == "Bihar") {
    restaurant = {
        data: [
            {
                rname: "Maithili Folk Music School",
                location: "Patna, Bihar",
                price: "Rs.400 Per Person",
                image: "../assets/img/bihar_music1.jpg",
                contact: "Email: info@maithilifolk.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Bhojpuri Music Center",
                location: "Gaya, Bihar",
                price: "Rs.600 Per Person",
                image: "../assets/img/bihar_music2.jpg",
                contact: "Email: info@bhojpurimusic.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Traditional Bihar Tunes",
                location: "Muzaffarpur, Bihar",
                price: "Rs.350 Per Person",
                image: "../assets/img/bihar_music3.jpg",
                contact: "Email: info@bihartunes.com, Phone: +91 765-432-1098",
            },
        ],
    };
} else if (state == "Goa") {
    restaurant = {
        data: [
            {
                rname: "Goan Music Academy",
                location: "Panaji, Goa",
                price: "Rs.500 Per Person",
                image: "../assets/img/goa_music1.jpg",
                contact: "Email: info@goanmusic.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Konkani Folk Tunes",
                location: "Margao, Goa",
                price: "Rs.700 Per Person",
                image: "../assets/img/goa_music2.jpg",
                contact: "Email: info@konkanifolk.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Portuguese Music School",
                location: "Vasco da Gama, Goa",
                price: "Rs.300 Per Person",
                image: "../assets/img/goa_music3.jpg",
                contact: "Email: info@portuguesemusic.com, Phone: +91 765-432-1098",
            },
        ],
    };
} else if (state == "Rajasthan") {
    restaurant = {
        data: [
            {
                rname: "Rajasthani Folk Music Academy",
                location: "Jaipur, Rajasthan",
                price: "Rs.600 Per Person",
                image: "../assets/img/rajasthan_music1.jpg",
                contact: "Email: info@rajasthanifolk.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Kalbelia Tunes School",
                location: "Jodhpur, Rajasthan",
                price: "Rs.400 Per Person",
                image: "../assets/img/rajasthan_music2.jpg",
                contact: "Email: info@kalbeliatunes.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Desert Music Center",
                location: "Udaipur, Rajasthan",
                price: "Rs.500 Per Person",
                image: "../assets/img/rajasthan_music3.jpg",
                contact: "Email: info@desertmusic.com, Phone: +91 765-432-1098",
            },
        ],
    };
} else if (state == "Kerala") {
    restaurant = {
        data: [
            {
                rname: "Kathakali Music Classes",
                location: "Thiruvananthapuram, Kerala",
                price: "Rs.700 Per Person",
                image: "../assets/img/kerala_music1.jpg",
                contact: "Email: info@kathakalimusic.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Kerala Folk Academy",
                location: "Kochi, Kerala",
                price: "Rs.600 Per Person",
                image: "../assets/img/kerala_music2.jpg",
                contact: "Email: info@keralafolk.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Traditional Kerala Tunes",
                location: "Kozhikode, Kerala",
                price: "Rs.500 Per Person",
                image: "../assets/img/kerala_music3.jpg",
                contact: "Email: info@keralatunes.com, Phone: +91 765-432-1098",
            },
        ],
    };
}

else{
     restaurant = {
        data:[
       {
            rname: "assam Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            image: "../assets/img/music9.jpg",
            contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "assam music world",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher2.jpeg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
       },
       {
        rname: "Assam folk world",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        image: "../assets/img/musicteacher3.jpg",
        contact: "Email: info@karnatakamusic.com, Phone: +91 123-456-7890"
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

    let dish = document.createElement("h5");
    dish.innerText = i.dish;
    container.appendChild(dish);

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

