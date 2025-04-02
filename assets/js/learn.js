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
        rname: "Karnataka Delights",
        location: "123, South Bangalore Road, Bangalore, Karnataka",
        price: "Rs.800 Per Person",
        dish: "Dishes : Masala Dosa, Ragi Mudde, Mysore Pak",
        image: "../assets/img/learn.1.jpeg",
        contact: "Email: info@karnatakadelights.com, Phone: +91 123-456-7890"
   },
   {
    rname: "Flavors of Coastal Karnataka",
    location: "Address : Mangalorean Fish Curry, Neer Dosa, Goli Baje",
    price: "Cost : Rs.1000 Per Person",
    dish: "Dishes : Mangalorean Fish Curry, Neer Dosa, Goli Baje",
    image: "../assets/img/learn.2.jpeg",
    contact: "Email: info@coastalkarnatakaflavors.com, Phone: +91 987-654-3210"
   },
   {
    rname: "Savoring North Karnataka",
    location: "K789, North Karnataka Street, Hubli, Karnatakat",
    price: "Cost : Rs.650 Per Person",
    dish: "Dishes : Jolada Rotti, Enne Badanekayi, Holige",
    image: "../assets/img/learn.3.jpeg",
    contact: "Email: info@northkarnatakasavoring.com, Phone: +91 765-432-1098"
   },
   {
    rname: "Kodagu Culinary Journey",
    location: "101, Coorg Hills, Madikeri, Karnataka",
    price: "Cost : Rs.900 Per Person",
    dish: "Dishes : Pandi Curry, Noolputtu, Bamboo Shoot Curry",
    image: "../assets/img/learn.4.jpeg",
    contact: "Email: info@kodagucuisinejourney.com, Phone: +91 111-222-3333"
   },
   {
    rname: "Traditional Mysorean Cooking",
    location: "321, Mysore Heritage Lane, Mysore, Karnataka",
    price: "Cost : Rs.1200 Per Person",
    dish: "Dishes : Bisi Bele Bath, Mysore Masala Dosa, Mysore Pak",
    image: "../assets/img/learn.5.jpeg",
    contact: " Email: info@traditionalmysoreancooking.com, Phone: +91 999-888-7777",
   },
],
};
}
else if (state == "Tamil Nadu") {
    restaurant = {
        data: [
            {
                rname: "Chettinad Delights",
                location: "12, Anna Salai, Chennai, Tamil Nadu",
                price: "Rs.900 Per Person",
                dish: "Dishes: Chettinad Chicken, Dosa, Filter Coffee",
                image: "../assets/img/tamilnadu1.jpeg",
                contact: "Email: info@chettinaddelights.com, Phone: +91 999-555-1234",
            },
            {
                rname: "Madurai Taste Trail",
                location: "45, Meenakshi Temple Road, Madurai, Tamil Nadu",
                price: "Rs.800 Per Person",
                dish: "Dishes: Jigarthanda, Kari Dosa, Idiyappam",
                image: "../assets/img/tamilnadu2.jpeg",
                contact: "Email: info@maduraitastetrail.com, Phone: +91 888-666-4321",
            },
            {
                rname: "Traditional Tamil Tiffin",
                location: "78, Kumbakonam Street, Kumbakonam, Tamil Nadu",
                price: "Rs.600 Per Person",
                dish: "Dishes: Pongal, Vada, Banana Leaf Thali",
                image: "../assets/img/tamilnadu3.jpeg",
                contact: "Email: info@traditionaltiffin.com, Phone: +91 777-888-9990",
            },
            {
                rname: "Kanyakumari Flavors",
                location: "21, Beach Road, Kanyakumari, Tamil Nadu",
                price: "Rs.700 Per Person",
                dish: "Dishes: Appam, Fish Curry, Coconut Halwa",
                image: "../assets/img/tamilnadu4.jpeg",
                contact: "Email: info@kanyakumariflavors.com, Phone: +91 666-444-3332",
            },
            {
                rname: "South Indian Signature",
                location: "10, Marina Beach Lane, Chennai, Tamil Nadu",
                price: "Rs.1000 Per Person",
                dish: "Dishes: Tamil Nadu Thali, Rasam, Payasam",
                image: "../assets/img/tamilnadu5.jpeg",
                contact: "Email: info@southindiansignature.com, Phone: +91 555-777-2221",
            },
        ],
    };
}

else if (state == "West Bengal") {
    restaurant = {
        data: [
            {
                rname: "Bengali Bhog",
                location: "35, Park Street, Kolkata, West Bengal",
                price: "Rs.750 Per Person",
                dish: "Dishes: Fish Curry, Luchi, Sandesh",
                image: "../assets/img/westbengal1.jpeg",
                contact: "Email: info@bengalibhog.com, Phone: +91 222-444-5555",
            },
            {
                rname: "Kolkata Kitchens",
                location: "12, Howrah Road, Kolkata, West Bengal",
                price: "Rs.800 Per Person",
                dish: "Dishes: Biryani, Kathi Roll, Rasgulla",
                image: "../assets/img/westbengal2.jpeg",
                contact: "Email: info@kolkatakitchens.com, Phone: +91 999-888-7777",
            },
            {
                rname: "Darjeeling Delight",
                location: "43, Mall Road, Darjeeling, West Bengal",
                price: "Rs.650 Per Person",
                dish: "Dishes: Thukpa, Momos, Tea Cake",
                image: "../assets/img/westbengal3.jpeg",
                contact: "Email: info@darjeelingdelight.com, Phone: +91 888-777-6666",
            },
            {
                rname: "Sweet Bengal",
                location: "25, Salt Lake, Kolkata, West Bengal",
                price: "Rs.900 Per Person",
                dish: "Dishes: Mishti Doi, Sandesh, Chomchom",
                image: "../assets/img/westbengal4.jpeg",
                contact: "Email: info@sweetbengal.com, Phone: +91 777-666-5555",
            },
            {
                rname: "Flavors of Shantiniketan",
                location: "7, Tagore Road, Bolpur, West Bengal",
                price: "Rs.850 Per Person",
                dish: "Dishes: Paturi, Shukto, Payesh",
                image: "../assets/img/westbengal5.jpeg",
                contact: "Email: info@flavorsofshantiniketan.com, Phone: +91 666-555-4444",
            },
        ],
    };
}

else if (state == "Rajasthan") {
    restaurant = {
        data: [
            {
                rname: "Rajasthani Royals",
                location: "10, Amber Fort Lane, Jaipur, Rajasthan",
                price: "Rs.1100 Per Person",
                dish: "Dishes: Dal Baati Churma, Laal Maas, Ghevar",
                image: "../assets/img/rajasthan1.jpeg",
                contact: "Email: info@rajasthanroyals.com, Phone: +91 123-456-7890",
            },
            {
                rname: "Desert Feast",
                location: "32, Jodhpur Haveli Road, Jodhpur, Rajasthan",
                price: "Rs.950 Per Person",
                dish: "Dishes: Ker Sangri, Gatte ki Sabzi, Malpua",
                image: "../assets/img/rajasthan2.jpeg",
                contact: "Email: info@desertfeast.com, Phone: +91 987-654-3210",
            },
            {
                rname: "Heritage Cuisine",
                location: "87, Udaipur Lake Palace Road, Udaipur, Rajasthan",
                price: "Rs.1000 Per Person",
                dish: "Dishes: Mohan Maas, Dal Baati, Jalebi",
                image: "../assets/img/rajasthan3.jpeg",
                contact: "Email: info@heritagecuisine.com, Phone: +91 765-432-1098",
            },
            {
                rname: "Royal Rajasthani",
                location: "54, Pushkar Bazaar, Ajmer, Rajasthan",
                price: "Rs.700 Per Person",
                dish: "Dishes: Bajre ki Roti, Chaach, Halwa",
                image: "../assets/img/rajasthan4.jpeg",
                contact: "Email: info@royalrajasthani.com, Phone: +91 111-222-3333",
            },
            {
                rname: "Marwar Meals",
                location: "21, Bikaner Chowk, Bikaner, Rajasthan",
                price: "Rs.800 Per Person",
                dish: "Dishes: Bikaneri Bhujia, Kachori, Churma Laddoo",
                image: "../assets/img/rajasthan5.jpeg",
                contact: "Email: info@marwarmeals.com, Phone: +91 555-444-3332",
            },
        ],
    };
}
else if (state == "Maharashtra") {
    restaurant = {
        data: [
            {
                rname: "Mumbai Masala",
                location: "90, Marine Drive, Mumbai, Maharashtra",
                price: "Rs.700 Per Person",
                dish: "Dishes: Vada Pav, Pav Bhaji, Misal Pav",
                image: "../assets/img/maharashtra1.jpeg",
                contact: "Email: info@mumbaimasala.com, Phone: +91 987-654-1230",
            },
            {
                rname: "Pune Peshwa",
                location: "50, FC Road, Pune, Maharashtra",
                price: "Rs.800 Per Person",
                dish: "Dishes: Puran Poli, Bhakarwadi, Sabudana Khichdi",
                image: "../assets/img/maharashtra2.jpeg",
                contact: "Email: info@punepeshwa.com, Phone: +91 777-888-9999",
            },
            {
                rname: "Nagpur Spice Hub",
                location: "25, Sadar Bazaar, Nagpur, Maharashtra",
                price: "Rs.750 Per Person",
                dish: "Dishes: Saoji Curry, Tarri Poha, Orange Barfi",
                image: "../assets/img/maharashtra3.jpeg",
                contact: "Email: info@nagpurspicehub.com, Phone: +91 666-555-4444",
            },
            {
                rname: "Konkan Treat",
                location: "78, Alibaug Beach, Konkan, Maharashtra",
                price: "Rs.850 Per Person",
                dish: "Dishes: Kombdi Vade, Sol Kadhi, Modak",
                image: "../assets/img/maharashtra4.jpeg",
                contact: "Email: info@konkantreat.com, Phone: +91 555-444-3333",
            },
            {
                rname: "Aurangabad Heritage",
                location: "19, Bibi Ka Maqbara Road, Aurangabad, Maharashtra",
                price: "Rs.950 Per Person",
                dish: "Dishes: Naan Qalia, Sheer Khurma, Kulfi",
                image: "../assets/img/maharashtra5.jpeg",
                contact: "Email: info@aurangabadheritage.com, Phone: +91 444-333-2222",
            },
        ],
    };
}

else if (state == "Gujarat") {
    restaurant = {
        data: [
            {
                rname: "Gujarati Rasoi",
                location: "30, Ashram Road, Ahmedabad, Gujarat",
                price: "Rs.600 Per Person",
                dish: "Dishes: Dhokla, Undhiyu, Khandvi",
                image: "../assets/img/gujarat1.jpeg",
                contact: "Email: info@gujaratirasoi.com, Phone: +91 123-456-7891",
            },
            {
                rname: "Surat Snacks",
                location: "40, Chowk Bazaar, Surat, Gujarat",
                price: "Rs.700 Per Person",
                dish: "Dishes: Locho, Fafda-Jalebi, Surti Undhiyu",
                image: "../assets/img/gujarat2.jpeg",
                contact: "Email: info@suratsnacks.com, Phone: +91 987-654-3211",
            },
            {
                rname: "Rajkot Flavors",
                location: "22, Jubilee Garden, Rajkot, Gujarat",
                price: "Rs.750 Per Person",
                dish: "Dishes: Kadhi, Thepla, Mohanthal",
                image: "../assets/img/gujarat3.jpeg",
                contact: "Email: info@rajkotflavors.com, Phone: +91 876-543-2109",
            },
            {
                rname: "Kutch Cuisine",
                location: "10, White Desert Road, Bhuj, Gujarat",
                price: "Rs.800 Per Person",
                dish: "Dishes: Bajra Khichdi, Kutchi Dabeli, Chhash",
                image: "../assets/img/gujarat4.jpeg",
                contact: "Email: info@kutchcuisine.com, Phone: +91 765-432-1098",
            },
            {
                rname: "Vadodara Treats",
                location: "60, Sayaji Gardens, Vadodara, Gujarat",
                price: "Rs.850 Per Person",
                dish: "Dishes: Sev Usal, Handvo, Basundi",
                image: "../assets/img/gujarat5.jpeg",
                contact: "Email: info@vadodaratreats.com, Phone: +91 654-321-0987",
            },
        ],
    };
}

else if (state == "Uttar Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Awadhi Kitchen",
                location: "35, Hazratganj, Lucknow, Uttar Pradesh",
                price: "Rs.1000 Per Person",
                dish: "Dishes: Galouti Kebab, Biryani, Sheermal",
                image: "../assets/img/up1.jpeg",
                contact: "Email: info@awadhikitchen.com, Phone: +91 123-654-7890",
            },
            {
                rname: "Varanasi Flavors",
                location: "21, Dashashwamedh Ghat, Varanasi, Uttar Pradesh",
                price: "Rs.800 Per Person",
                dish: "Dishes: Banarasi Paan, Tamatar Chaat, Thandai",
                image: "../assets/img/up2.jpeg",
                contact: "Email: info@varanasiflavors.com, Phone: +91 789-456-1230",
            },
            {
                rname: "Kashi Food Corner",
                location: "12, Assi Ghat Road, Varanasi, Uttar Pradesh",
                price: "Rs.750 Per Person",
                dish: "Dishes: Aloo Kachori, Malaiyo, Jalebi",
                image: "../assets/img/up3.jpeg",
                contact: "Email: info@kashifoodcorner.com, Phone: +91 654-789-3210",
            },
            {
                rname: "Agra Bites",
                location: "88, Taj Ganj, Agra, Uttar Pradesh",
                price: "Rs.850 Per Person",
                dish: "Dishes: Petha, Mughlai Thali, Bedai",
                image: "../assets/img/up4.jpeg",
                contact: "Email: info@agrabites.com, Phone: +91 567-123-8901",
            },
            {
                rname: "Kanpur Delights",
                location: "40, Mall Road, Kanpur, Uttar Pradesh",
                price: "Rs.700 Per Person",
                dish: "Dishes: Samosa, Lassi, Balushahi",
                image: "../assets/img/up5.jpeg",
                contact: "Email: info@kanpurdelights.com, Phone: +91 432-567-8901",
            },
        ],
    };
}

else if (state == "Assam") {
    restaurant = {
        data: [
            {
                rname: "Assamese Platter",
                location: "12, Fancy Bazaar, Guwahati, Assam",
                price: "Rs.650 Per Person",
                dish: "Dishes: Assam Laksa, Pitha, Masor Tenga",
                image: "../assets/img/assam1.jpeg",
                contact: "Email: info@assameseplatter.com, Phone: +91 321-456-7890",
            },
            {
                rname: "Tea Garden Treat",
                location: "21, Tinsukia Road, Dibrugarh, Assam",
                price: "Rs.700 Per Person",
                dish: "Dishes: Khar, Rice Pudding, Bamboo Shoot Curry",
                image: "../assets/img/assam2.jpeg",
                contact: "Email: info@teagardentreat.com, Phone: +91 876-543-2190",
            },
            {
                rname: "Kaziranga Kitchen",
                location: "34, Park Road, Kaziranga, Assam",
                price: "Rs.800 Per Person",
                dish: "Dishes: Duck Curry, Fish Curry, Poita Bhaat",
                image: "../assets/img/assam3.jpeg",
                contact: "Email: info@kazirangakitchen.com, Phone: +91 456-789-1230",
            },
            {
                rname: "Silchar Sweets",
                location: "10, Barak Valley, Silchar, Assam",
                price: "Rs.600 Per Person",
                dish: "Dishes: Pithaguri, Jolpan, Til Pitha",
                image: "../assets/img/assam4.jpeg",
                contact: "Email: info@silcharsweets.com, Phone: +91 567-890-3210",
            },
            {
                rname: "Brahmaputra Bites",
                location: "18, River Road, Tezpur, Assam",
                price: "Rs.750 Per Person",
                dish: "Dishes: Assamese Thali, Smoked Pork, Black Rice Pudding",
                image: "../assets/img/assam5.jpeg",
                contact: "Email: info@brahmaputrabites.com, Phone: +91 789-123-4560",
            },
        ],
    };
}


else{
     restaurant = {
        data:[
       {
            rname: "Udupi Grand",
            location: "Kumarswamy Layout",
            price: "Rs.200 Per Person",
            dish: "Dosa",
            image: "../assets/img/learn.1.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.2.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.3.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.4.jpeg",
       },
       {
        rname: "Udupi Swaad",
        location: "Kumarswamy Layout",
        price: "Rs.200 Per Person",
        dish: "Dosa",
        image: "../assets/img/learn.5.jpeg",
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

