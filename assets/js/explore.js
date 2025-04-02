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
        rname: "Masala Dosa",
        location: "DESCRIPTION : Fermented crepe made from rice batter and black lentils and you stuff it with a lightly cooked filling of potatoes, fried onions and spices.",
        origin: "ORIGIN : Udupi",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Vidyarthi Bhawan(Bengaluru)",
        image: "../assets/img/cuisine/dosa.jpeg",
   },
   {
    rname: "Fish Curry",
    location: "DESCRIPTION : Consists of sardines semi-stewed in a curry with assorted vegetables. Usually served with rice, naan, or bread",
    origin: "ORIGIN : Mangaluru",
    price: "APPROX COST : Rs.150",
    dish: "RESTAURANT : Machali(Mangaluru)",
    image: "../assets/img/cuisine/fish_curry.jpeg",
   },
   {
    rname: "Mysore Pak",
    location: "DESCRIPTION : Similar to a buttery and dense cookie, it is made of generous amounts of ghee, sugar, gram flour, and often cardamom",
    origin: "ORIGIN : Mysore",
    price: "APPROX COST : Rs.150/kg",
    dish: "RESTAURANT : Mansukhlal Mittaiwala(Mysore)",
    image: "../assets/img/cuisine/mysore_pak.jpeg",
   },
   {
    rname: "Maddur Vada",
    location: "DESCRIPTION : Savoury fritter-type snack made from rice flour, cream of wheat or rava",
    origin: "ORIGIN : Maddur",
    price: "APPROX COST : Rs.50",
    dish: "RESTAURANT : Mavalli Tiffin Room(Bengaluru)",
    image: "../assets/img/cuisine/maddur_vada.jpeg",
   },
   {
    rname: "Jolad Rotti",
    location: "DESCRIPTION : Indian bread made of sorghum bicolor consumed along with spicy curry or chutney",
    origin: "ORIGIN : Bijapur",
    price: "APPROX COST : Rs.50",
    dish: "RESTAURANT : Rotti Mattu(Bengaluru)",
    image: "../assets/img/cuisine/jolad_rotti.jpeg",
   },
],
};
}

else if(state == "Jammu and Kashmir"){

    restaurant = {
       data:[
      {
           rname: "Rogan Josh",
           location: "DESCRIPTION :A must try dish for all the Lamb or meat lovers, Rogan Josh, an aromatic lamb dish is one of the signature recipes of Kashmiri cuisine. ",
           origin: "ORIGIN : srinagar",
           price: "APPROX COST : Rs.400",
           dish: "RESTAURANT : Shamyana restaurant(Srinagar)",
           image: "../assets/img/cuisine/Rogan-Josh.jpg",
      },
      {
       rname: "Modur Pulav",
       location: "DESCRIPTION : This dish is sweet, flavoured and healthy with saffron as the main spice which gives it beautiful colour and taste.",
       origin: "ORIGIN : yusmarg",
       price: "APPROX COST : Rs.150",
       dish: "RESTAURANT : Kashmiri Wazwan(yusmarg)",
       image: "../assets/img/cuisine/modur_pulav.jpeg",
      },
      {
       rname: ". Kashmiri Muji Gaad",
       location: "DESCRIPTION : Served on festivals and occasions, Kashmir gaad is a dish made up of fish prepared generally with radish or nadur. ",
       origin: "ORIGIN : Sonamerg",
       price: "APPROX COST : Rs.350/kg",
       dish: "RESTAURANT : Ahdoos Restaurant(Sonamerg)",
       image: "../assets/img/cuisine/muji_gaad.jpeg",
      },
      {
       rname: " Lyodur Tschaman",
       location: "DESCRIPTION :  Lyodur Tschaman is cottage cheese cooked in creamy turmeric based gravy. ",
       origin: "ORIGIN : Dal Lake",
       price: "APPROX COST : Rs.110",
       dish: "RESTAURANT : Vishal Dhaba(Dal Lake)",
       image: "../assets/img/cuisine/lyodur.jpeg",
      },
      {
       rname: "Wazwan",
       location: "DESCRIPTION : Wazwan, the traditional cuisine of Kashmir, is a gastronomic delight that showcases the rich flavors and aromatic spices of the region.",
       origin: "ORIGIN :yusmarg",
       price: "APPROX COST : Rs.50",
       dish: "RESTAURANT : Kashmiri Wazwan(yusmarg)",
       image: "../assets/img/cuisine/wazwan.jpeg",
      },
   ],
   };
   }

   else if(state == "Telangana"){

    restaurant = {
       data:[
      {
           rname: "Sarva Pindi ",
           location: "DESCRIPTION :It is a savoury pancake made of rice flour, chana dal, peanuts and chilli. It is cooked in a deep, round shaped pan. ",
           origin: "ORIGIN : Hyderabad",
           price: "APPROX COST : Rs.100",
           dish: "RESTAURANT : Deccan Pavilion(Hyderabad)",
           image: "../assets/img/cuisine/sarva.jpeg",
      },
      {
       rname: "Golichina Mamsam",
       location: "DESCRIPTION :As Telangana cuisine is well-known for its spices, this dish incorporates succulent pieces of mutton into a thick gravy that is loaded with locally grown spices and cooked over low flame for hours ",
       origin: "ORIGIN :  Warangal",
       price: "APPROX COST : Rs.250",
       dish: "RESTAURANT : Paradise Restaurant(Warangal)",
       image: "../assets/img/cuisine/golichina.jpeg",
      },
      {
       rname: "Polelu",
       location: "DESCRIPTION :Ultra-thin flattened Indian bread with a stuffing made of jaggery, channa dal, cardamom powder and ghee, Polelu is a go to recipe for special festivals like Ganesh Chathurthi.",
       origin: "ORIGIN :  Nizamabad",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESTAURANT : Ahdoos Restaurant( Nizamabad)",
       image: "../assets/img/cuisine/polelu.jpeg",
      },
      {
       rname: " Hyderabadi Biryani",
       location: "DESCRIPTION :  Thanks to the major influence of Nizams in the state, Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items. ",
       origin: "ORIGIN : Hyderabad",
       price: "APPROX COST : Rs.110",
       dish: "RESTAURANT : biryani Dhaba(Hyderabad)",
       image: "../assets/img/cuisine/hbiriyani.jpeg",
      },
      {
       rname: "Chegodilu",
       location: "DESCRIPTION : A tea-time accompaniment, Chegodilu is a crunchy snack item that is almost impossible to stop munching on after the first bite. ",
       origin: "ORIGIN : Begumpet",
       price: "APPROX COST : Rs.50",
       dish: "RESTAURANT : Saffron Soul(Begumpet)",
       image: "../assets/img/cuisine/chegodilu.jpeg",
      },
   ],
   };
   }

   else if(state == "Gujarat"){

    restaurant = {
       data:[
      {
           rname: "Dhokla",
           location: "DESCRIPTION :Gujarat's most frequently cooked and savored cuisines are the soft, spongy, and square-shaped pieces served with chutney.",
           origin: "ORIGIN : Gujarat.",
           price: "APPROX COST : Rs.100",
           dish: "RESTAURANT : Deccan Pavilion(Gujarat)",
           image: "../assets/img/cuisine/dhokla.jpeg",
      },
      {
       rname: "Thepla",
       location: "DESCRIPTION :Like thin Parathas served for breakfast, Theplas are flatbreads made of fenugreek leaves, gram flour, and many spices. ",
       origin: "ORIGIN :  Kutch",
       price: "APPROX COST : Rs.250",
       dish: "RESTAURANT : Anand Restaurants(Kutch)",
       image: "../assets/img/cuisine/thepla.jpeg",
      },
      {
       rname: " Khichdi",
       location: "DESCRIPTION :Unlike normal Khichdi, there’s something about Gujarati Khichdi that makes it incredibly delicious. There’s a reason why it’s called the national food of India.",
       origin: "ORIGIN :  Ahmedabad",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESTAURANT : Ahdoos Restaurant( Ahmedabad)",
       image: "../assets/img/cuisine/khichdi.jpeg",
      },
      {
       rname: "Dabeli",
       location: "DESCRIPTION :  Texture-wise, both are the same, but Dabeli tastes slightly different.  ",
       origin: "ORIGIN :Kutch",
       price: "APPROX COST : Rs.110",
       dish: "RESTAURANT : dabeli Dhaba(Kutch)",
       image: "../assets/img/cuisine/dabeli.jpeg",
      },
      {
       rname: "Jalebi",
       location: "DESCRIPTION : Traditionally, the jalebi recipe is made with a batter of all purpose flour, gram flour (besan), baking soda and water that is fermented for several hours. ",
       origin: "ORIGIN : Ahmedabad",
       price: "APPROX COST : Rs.20",
       dish: "RESTAURANT : Saffron Soul(Ahmedabad)",
       image: "../assets/img/cuisine/jalebi.jpeg",
      },
   ],
   };
   }else if (state === "Chhattisgarh") {
    restaurant = {
      data: [
        {
          rname: "Chila",
          location: "DESCRIPTION : A savory pancake made from rice flour and lentils.",
          origin: "ORIGIN : Raipur",
          price: "APPROX COST : Rs.50",
          dish: "RESTAURANT : Aamcho Bastar (Raipur)",
          image: "../assets/img/cuisine/chila.jpg",
        },
        {
          rname: "Faraa",
          location: "DESCRIPTION : A steamed rice dumpling often served with chutney.",
          origin: "ORIGIN : Bastar",
          price: "APPROX COST : Rs.40",
          dish: "RESTAURANT : Bastariya Thali (Jagdalpur)",
          image: "../assets/img/cuisine/faraa.jpg",
        },
        {
          rname: "Muthiya",
          location: "DESCRIPTION : A dish made from rice and lentils, shaped into dumplings and cooked.",
          origin: "ORIGIN : Bilaspur",
          price: "APPROX COST : Rs.60",
          dish: "RESTAURANT : Chhattisgarhi Bhojanalaya (Bilaspur)",
          image: "../assets/img/cuisine/muthiya.webp",
        },
      ],
    };
  }else if (state === "Uttar Pradesh") {
    restaurant = {
      data: [
        {
          rname: "Galouti Kebab",
          location: "DESCRIPTION : Melt-in-the-mouth minced meat kebabs with aromatic spices.",
          origin: "ORIGIN : Lucknow",
          price: "APPROX COST : Rs.250",
          dish: "RESTAURANT : Tunday Kababi (Lucknow)",
          image: "../assets/img/cuisine/kebab.jpeg",
        },
        {
          rname: "Petha",
          location: "DESCRIPTION : A translucent soft candy made from ash gourd.",
          origin: "ORIGIN : Agra",
          price: "APPROX COST : Rs.200 per kg",
          dish: "RESTAURANT : Panchi Petha (Agra)",
          image: "../assets/img/petha.webp",
        },
        {
          rname: "Bedmi Poori",
          location: "DESCRIPTION : Deep-fried poori made from lentil-based dough served with aloo sabzi.",
          origin: "ORIGIN : Mathura",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Shankar Mithai Wala (Mathura)",
          image: "../assets/img/cuisine/poori.jpg",
        },
      ],
    };
  }
    
   else if(state == "Odisha") {
    restaurant = {
        data: [
            {
                rname: "Pakhala Bhata",
                location: "DESCRIPTION : Fermented rice dish traditionally served with fried vegetables, fish, and curd.",
                origin: "ORIGIN : Odisha",
                price: "APPROX COST : Rs.80",
                dish: "RESTAURANT : Dalma Restaurant(Bhubaneswar)",
                image: "../assets/img/cuisine/pakhala.jpg",
            },
            {
              rname: "Rosogolla",
              location: "DESCRIPTION : Soft and spongy balls made from chhena and soaked in sugar syrup.",
              origin: "ORIGIN : Odisha",
              price: "APPROX COST : Rs.150/kg",
              dish: "RESTAURANT : Chhena Gaja(Bhubaneswar)",
              image: "../assets/img/cuisine/rosogolla.webp",
            },
            {
                rname: "Chhena Poda",
                location: "DESCRIPTION : A baked dessert made with chhena (cottage cheese), sugar, and cardamom, known for its caramelized flavor.",
                origin: "ORIGIN : Nayagarh",
                price: "APPROX COST : Rs.150/kg",
                dish: "RESTAURANT : Nandighosha Sweets(Nayagarh)",
                image: "../assets/img/cuisine/chhena_poda.jpg",
            },
            {
                rname: "Dalma",
                location: "DESCRIPTION : A wholesome lentil dish cooked with vegetables and tempered with spices.",
                origin: "ORIGIN : Cuttack",
                price: "APPROX COST : Rs.100",
                dish: "RESTAURANT : Dalma Restaurant(Cuttack)",
                image: "../assets/img/cuisine/dalma.jpeg",
            },
            {
                rname: "Rasabali",
                location: "DESCRIPTION : Deep-fried cheese patties soaked in thickened and sweetened milk, flavored with cardamom.",
                origin: "ORIGIN : Kendrapara",
                price: "APPROX COST : Rs.120",
                dish: "RESTAURANT : Raghunath Sweets(Kendrapara)",
                image: "../assets/img/cuisine/rasabali.jpeg",
            },
            {
                rname: "Khaja",
                location: "DESCRIPTION : A crispy, layered dessert soaked in sugar syrup, famously served at the Jagannath Temple.",
                origin: "ORIGIN : Puri",
                price: "APPROX COST : Rs.50",
                dish: "RESTAURANT : Jagannath Bhog(Puri)",
                image: "../assets/img/cuisine/khaja.jpg",
            },
        ],
    };
}
else if (state === "Punjab") {
    restaurant = {
      data: [
        {
          rname: "Makki di Roti & Sarson da Saag",
          location: "DESCRIPTION : A traditional Punjabi dish made with maize flour bread and mustard greens curry.",
          origin: "ORIGIN : Amritsar",
          price: "APPROX COST : Rs.150",
          dish: "RESTAURANT : Kesar Da Dhaba (Amritsar)",
          image: "../assets/img/cuisine/sm_roti.avif",
        },
        {
          rname: "Butter Chicken",
          location: "DESCRIPTION : A creamy and rich chicken curry cooked with butter, cream, and aromatic spices.",
          origin: "ORIGIN : Delhi",
          price: "APPROX COST : Rs.300",
          dish: "RESTAURANT : Moti Mahal (Delhi)",
          image: "../assets/img/cuisine/butter_chicken.webp",
        },
        {
          rname: "Amritsari Kulcha",
          location: "DESCRIPTION : A stuffed bread filled with spiced potatoes and served with chole.",
          origin: "ORIGIN : Amritsar",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Kulcha Land (Amritsar)",
          image: "../assets/img/cuisine/kulcha.jpg",
        },
      ],
    };
  } else if (state === "West Bengal") {
    restaurant = {
      data: [
        {
          rname: "Machher Jhol",
          location: "DESCRIPTION : A light and flavorful fish curry cooked with mustard seeds and tomatoes.",
          origin: "ORIGIN : Bengal",
          price: "APPROX COST : Rs.200",
          dish: "RESTAURANT : Bhojohori Manna (Kolkata)",
          image: "../assets/img/cuisine/macher_jhol.jpg",
        },
        {
          rname: "Mishti Doi",
          location: "DESCRIPTION : A sweetened yogurt dessert known for its creamy texture and caramelized flavor.",
          origin: "ORIGIN : Nadia",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Ganguram Sweets (Kolkata)",
          image: "../assets/img/cuisine/mitha-dahi.webp",
        },
        {
          rname: "Kosha Mangsho",
          location: "DESCRIPTION : A slow-cooked mutton curry with a thick and spicy gravy, best enjoyed with luchi.",
          origin: "ORIGIN : Kolkata",
          price: "APPROX COST : Rs.250",
          dish: "RESTAURANT : Aminia (Kolkata)",
          image: "../assets/img/cuisine/kosa_manso.webp",
        },
      ],
    };
  } else if (state === "Maharashtra") {
    restaurant = {
      data: [
        {
          rname: "Pav Bhaji",
          location: "DESCRIPTION : A spicy vegetable mash served with buttery bread rolls.",
          origin: "ORIGIN : Mumbai",
          price: "APPROX COST : Rs.120",
          dish: "RESTAURANT : Sardar Pav Bhaji (Mumbai)",
          image: "../assets/img/cuisine/pav_bhaji.webp",
        },
        {
          rname: "Vada Pav",
          location: "DESCRIPTION : A spicy potato fritter stuffed in a bread roll with chutneys.",
          origin: "ORIGIN : Mumbai",
          price: "APPROX COST : Rs.50",
          dish: "RESTAURANT : Anand Stall (Mumbai)",
          image: "../assets/img/cuisine/vada_pav.jpg",
        },
        {
          rname: "Puran Poli",
          location: "DESCRIPTION : A sweet flatbread stuffed with lentils and jaggery, flavored with cardamom.",
          origin: "ORIGIN : Pune",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Shabree (Pune)",
          image: "../assets/img/cuisine/ploi.jpeg",
        },
      ],
    };
  } else if (state === "Tamil Nadu") {
    restaurant = {
      data: [
        {
          rname: "Idli Sambar",
          location: "DESCRIPTION : Steamed rice cakes served with tangy lentil stew and coconut chutney.",
          origin: "ORIGIN : Chennai",
          price: "APPROX COST : Rs.80",
          dish: "RESTAURANT : Murugan Idli Shop (Chennai)",
          image: "../assets/img/cuisine/idli.jpg",
        },
        {
          rname: "Chettinad Chicken",
          location: "DESCRIPTION : A spicy chicken curry prepared with aromatic Chettinad spices.",
          origin: "ORIGIN : Karaikudi",
          price: "APPROX COST : Rs.200",
          dish: "RESTAURANT : Anjappar (Karaikudi)",
          image: "../assets/img/cuisine/chettinad_chicken.jpg",
        },
        {
          rname: "Pongal",
          location: "DESCRIPTION : A savory rice dish made with moong dal, ghee, and black pepper.",
          origin: "ORIGIN : Tamil Nadu",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Saravana Bhavan (Tamil Nadu)",
          image: "../assets/img/cuisine/pongal.jpg",
        },
      ],
    };
  } else if (state === "Kerala") {
    restaurant = {
      data: [
        {
          rname: "Appam with Stew",
          location: "DESCRIPTION : Soft rice pancakes served with coconut milk-based vegetable or meat stew.",
          origin: "ORIGIN : Alleppey",
          price: "APPROX COST : Rs.150",
          dish: "RESTAURANT : Kashi Art Café (Kochi)",
          image: "../assets/img/cuisine/apam.jpg",
        },
        {
          rname: "Puttu and Kadala Curry",
          location: "DESCRIPTION : Steamed rice flour cylinders served with black chickpea curry.",
          origin: "ORIGIN : Malabar",
          price: "APPROX COST : Rs.100",
          dish: "RESTAURANT : Paragon (Calicut)",
          image: "../assets/img/cuisine/kadala_curry.jpg",
        },
        {
          rname: "Karimeen Pollichathu",
          location: "DESCRIPTION : Pearl spot fish marinated and cooked in banana leaves.",
          origin: "ORIGIN : Alappuzha",
          price: "APPROX COST : Rs.250",
          dish: "RESTAURANT : Cassia (Alappuzha)",
          image: "../assets/img/cuisine/karimeen.jpg",
        },
      ],
    };
  }else if (state === "Rajasthan") {
    restaurant = {
        data: [
            {
                rname: "Dal Baati Churma",
                location: "DESCRIPTION : Hard wheat rolls served with lentils and sweet crushed wheat.",
                origin: "ORIGIN : Jaipur",
                price: "APPROX COST : Rs.200",
                dish: "RESTAURANT : Laxmi Mishthan Bhandar (Jaipur)",
                image: "../assets/img/cuisine/dal_bhati.jpeg",
            },
            {
                rname: "Laal Maas",
                location: "DESCRIPTION : Spicy mutton curry cooked with red chilies and yogurt.",
                origin: "ORIGIN : Jodhpur",
                price: "APPROX COST : Rs.350",
                dish: "RESTAURANT : Spice Court (Jodhpur)",
                image: "../assets/img/cuisine/laal_maas.jpg",
            },
            {
                rname: "Ghevar",
                location: "DESCRIPTION : Sweet disc-shaped dessert made from flour and soaked in sugar syrup.",
                origin: "ORIGIN : Udaipur",
                price: "APPROX COST : Rs.100",
                dish: "RESTAURANT : Jodhpur Sweets (Udaipur)",
                image: "../assets/img/cuisine/ghevar.jpg",
            },
        ],
    };
}else if (state === "Puducherry") {
  restaurant = {
    data: [
      {
        rname: "Pondicherry Crab Masala",
        location: "DESCRIPTION : Spicy crab curry prepared with a blend of Tamil and French flavors.",
        origin: "ORIGIN : Puducherry",
        price: "APPROX COST : Rs.400",
        dish: "RESTAURANT : Villa Shanti (Puducherry)",
        image: "../assets/img/cuisine/p_crabmasala.png",
      },
      {
        rname: "Kadugu Yerra",
        location: "DESCRIPTION : Prawns cooked with mustard, coconut, and spices.",
        origin: "ORIGIN : Karaikal",
        price: "APPROX COST : Rs.350",
        dish: "RESTAURANT : Theevu Plage (Karaikal)",
        image: "../assets/img/cuisine/yerra.jpg",
      },
      {
        rname: "Stuffed Kal Dosai",
        location: "DESCRIPTION : Soft dosai stuffed with spiced potato and served with chutneys.",
        origin: "ORIGIN : Puducherry",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Surguru Spot (Puducherry)",
        image: "../assets/img/cuisine/dosai.jpg",
      },
    ],
  };
}

else if (state === "Sikkim") {
  restaurant = {
    data: [
      {
        rname: "Momos",
        location: "DESCRIPTION : Steamed or fried dumplings stuffed with meat or vegetables.",
        origin: "ORIGIN : Gangtok",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Taste of Tibet (Gangtok)",
        image: "../assets/img/cuisine/momo.jpeg",
      },
      {
        rname: "Thukpa",
        location: "DESCRIPTION : A hearty noodle soup made with meat, vegetables, and spices.",
        origin: "ORIGIN : Sikkim",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : The Roll House (Gangtok)",
        image: "../assets/img/cuisine/thukpa.avif",
      },
      {
        rname: "Gundruk",
        location: "DESCRIPTION : Fermented leafy greens served as a pickle or side dish.",
        origin: "ORIGIN : Rural Sikkim",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Local Eateries (Rural Sikkim)",
        image: "../assets/img/cuisine/gundruk.jpg",
      },
    ],
  };
} else if (state === "Andhra Pradesh") {
  restaurant = {
    data: [
      {
        rname: "Hyderabadi Biryani",
        location: "DESCRIPTION : Aromatic basmati rice layered with meat and spices.",
        origin: "ORIGIN : Hyderabad",
        price: "APPROX COST : Rs.250",
        dish: "RESTAURANT : Paradise (Hyderabad)",
        image: "../assets/img/cuisine/hbiriyani.jpeg",
      },
      {
        rname: "Gongura Pachadi",
        location: "DESCRIPTION : Tangy chutney made from sorrel leaves.",
        origin: "ORIGIN : Coastal Andhra",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Dakshin (Vijayawada)",
        image: "../assets/img/cuisine/gongura.jpg",
      },
      {
        rname: "Pulihora",
        location: "DESCRIPTION : Tamarind rice seasoned with spices and peanuts.",
        origin: "ORIGIN : Andhra Pradesh",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Southern Spice (Visakhapatnam)",
        image: "../assets/img/cuisine/pulihora.jpg",
      },
    ],
  };
} else if (state === "Madhya Pradesh") {
  restaurant = {
    data: [
      {
        rname: "Poha",
        location: "DESCRIPTION : Flattened rice cooked with onions, turmeric, and spices.",
        origin: "ORIGIN : Indore",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Chappan Dukan (Indore)",
        image: "../assets/img/cuisine/poha.webp",
      },
      {
        rname: "Dal Bafla",
        location: "DESCRIPTION : Baked wheat balls served with lentil curry and ghee.",
        origin: "ORIGIN : Malwa Region",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Rajhans Bhojanalaya (Ujjain)",
        image: "../assets/img/cuisine/dal_bafla.avif",
      },
      {
        rname: "Bhutte Ka Kees",
        location: "DESCRIPTION : Grated corn cooked with spices and milk.",
        origin: "ORIGIN : Indore",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Sarafa Bazaar (Indore)",
        image: "../assets/img/cuisine/bhutte.jpeg",
      },
    ],
  };
} else if (state === "Haryana") {
  restaurant = {
    data: [
      {
        rname: "Bajra Khichdi",
        location: "DESCRIPTION : Millet-based khichdi cooked with spices and ghee.",
        origin: "ORIGIN : Rural Haryana",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Desi Zaika (Karnal)",
        image: "../assets/img/cuisine/bajra_khichdi.jpeg",
      },
      {
        rname: "Kadhi Pakora",
        location: "DESCRIPTION : Yogurt-based curry with gram flour dumplings.",
        origin: "ORIGIN : Haryana",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Amrik Sukhdev (Murthal)",
        image: "../assets/img/cuisine/pakora.jpg",
      },
      {
        rname: "Kachri Ki Sabzi",
        location: "DESCRIPTION : Curry made with wild cucumbers and spices.",
        origin: "ORIGIN : Haryana",
        price: "APPROX COST : Rs.90",
        dish: "RESTAURANT : Surya Bhojanalaya (Panipat)",
        image: "../assets/img/cuisine/kachri.jpg",
      },
    ],
  };
} else if (state === "Bihar") {
  restaurant = {
    data: [
      {
        rname: "Litti Chokha",
        location: "DESCRIPTION : Wheat balls stuffed with sattu served with mashed vegetables.",
        origin: "ORIGIN : Patna",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Bhoj Restaurant (Patna)",
        image: "../assets/img/cuisine/litti_c.webp",
      },
      {
        rname: "Sattu Paratha",
        location: "DESCRIPTION : Flatbread stuffed with roasted gram flour mix.",
        origin: "ORIGIN : Bihar",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Sattu Junction (Gaya)",
        image: "../assets/img/cuisine/sattu.webp",
      },
      {
        rname: "Khaja",
        location: "DESCRIPTION : Crispy layered dessert made with wheat and sugar syrup.",
        origin: "ORIGIN : Silao",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Local Sweet Shops (Nalanda)",
        image: "../assets/img/cuisine/khaja.jpg",
      },
    ],
  };
} else if (state === "Jharkhand") {
  restaurant = {
    data: [
      {
        rname: "Dhuska",
        location: "DESCRIPTION : Deep-fried rice flour pancakes served with chutney or curry.",
        origin: "ORIGIN : Ranchi",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Tribal Kitchen (Ranchi)",
        image: "../assets/img/cuisine/dhuska.webp",
      },
      {
        rname: "Thekua",
        location: "DESCRIPTION : Sweet fried dough made with wheat flour and jaggery.",
        origin: "ORIGIN : Rural Jharkhand",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Local Eateries (Rural Jharkhand)",
        image: "../assets/img/cuisine/thekua.jpg",
      },
      {
        rname: "Chilka Roti",
        location: "DESCRIPTION : Rice flour flatbread served with dal or vegetables.",
        origin: "ORIGIN : Jharkhand",
        price: "APPROX COST : Rs.70",
        dish: "RESTAURANT : Jharkhand Bhawan (Ranchi)",
        image: "../assets/img/cuisine/chilka_roti.jpg",
      },
    ],
  };
}else if (state === "Assam") {
  restaurant = {
    data: [
      {
        rname: "Assamese Thali",
        location: "DESCRIPTION : A traditional platter with rice, fish curry, dal, and chutneys.",
        origin: "ORIGIN : Guwahati",
        price: "APPROX COST : Rs.200",
        dish: "RESTAURANT : Paradise (Guwahati)",
        image: "../assets/img/cuisine/assam_thali.webp",
      },
      {
        rname: "Masor Tenga",
        location: "DESCRIPTION : Tangy fish curry made with tomatoes and lemon.",
        origin: "ORIGIN : Assam",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Heritage Khorikaa (Guwahati)",
        image: "../assets/img/cuisine/tenga.jpg",
      },
      {
        rname: "Pitha",
        location: "DESCRIPTION : Rice flour snacks stuffed with jaggery or sesame seeds.",
        origin: "ORIGIN : Assam",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Local Tea Shops (Assam)",
        image: "../assets/img/cuisine/pitha.jpeg",
      },
    ],
  };
} else if (state === "Andaman and Nicobar Islands") {
  restaurant = {
    data: [
      {
        rname: "Seafood Platter",
        location: "DESCRIPTION : A variety of fresh seafood including fish, prawns, and crabs.",
        origin: "ORIGIN : Port Blair",
        price: "APPROX COST : Rs.500",
        dish: "RESTAURANT : Lighthouse Residency (Port Blair)",
        image: "../assets/img/cuisine/seafood.jpg",
      },
      {
        rname: "Grilled Fish",
        location: "DESCRIPTION : Freshly caught fish grilled with local spices.",
        origin: "ORIGIN : Andaman",
        price: "APPROX COST : Rs.300",
        dish: "RESTAURANT : Barefoot Bar & Brasserie (Havelock Island)",
        image: "../assets/img/cuisine/grilled_fish.jpg",
      },
      {
        rname: "Coconut Prawn Curry",
        location: "DESCRIPTION : Prawns cooked in a creamy coconut milk gravy.",
        origin: "ORIGIN : Andaman",
        price: "APPROX COST : Rs.400",
        dish: "RESTAURANT : Something Different (Port Blair)",
        image: "../assets/img/cuisine/prawn.jpg",
      },
    ],
  };
} else if (state === "Daman and Diu") {
  restaurant = {
    data: [
      {
        rname: "Seafood Curry",
        location: "DESCRIPTION : A variety of fish and shellfish cooked with coconut and spices.",
        origin: "ORIGIN : Diu",
        price: "APPROX COST : Rs.350",
        dish: "RESTAURANT : O'Coqueiro (Diu)",
        image: "../assets/img/cuisine/seafood_curry.jpeg",
      },
      {
        rname: "Chana Ros",
        location: "DESCRIPTION : Chickpeas cooked in a tangy and spicy gravy.",
        origin: "ORIGIN : Daman",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Daman Delite (Daman)",
        image: "../assets/img/cuisine/chana.jpg",
      },
      {
        rname: "Prawns Fry",
        location: "DESCRIPTION : Crispy fried prawns seasoned with local spices.",
        origin: "ORIGIN : Diu",
        price: "APPROX COST : Rs.250",
        dish: "RESTAURANT : Sea View Restaurant (Diu)",
        image: "../assets/img/cuisine/prawn_fry.jpg",
      },
    ],
  };
} else if (state === "Dadra and Nagar Haveli") {
  restaurant = {
    data: [
      {
        rname: "Ubadiyu",
        location: "DESCRIPTION : A slow-cooked dish of vegetables, beans, and spices.",
        origin: "ORIGIN : Dadra",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Tribal Cuisine House (Silvassa)",
        image: "../assets/img/cuisine/ubadiyu.jpg",
      },
      {
        rname: "Patra",
        location: "DESCRIPTION : Colocasia leaves rolled with spiced gram flour.",
        origin: "ORIGIN : Nagar Haveli",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Silvassa Treat (Silvassa)",
        image: "../assets/img/cuisine/patra.jpg",
      },
      {
        rname: "Chorafali",
        location: "DESCRIPTION : Crispy gram flour fritters.",
        origin: "ORIGIN : Dadra and Nagar Haveli",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Street Stalls (Silvassa)",
        image: "../assets/img/cuisine/chorafali.webp",
      },
    ],
  };
} else if (state === "Chandigarh") {
  restaurant = {
    data: [
      {
        rname: "Butter Chicken",
        location: "DESCRIPTION : Creamy and rich chicken curry with butter and spices.",
        origin: "ORIGIN : Chandigarh",
        price: "APPROX COST : Rs.350",
        dish: "RESTAURANT : Pal Dhaba (Chandigarh)",
        image: "../assets/img/cuisine/butter_chicken.webp",
      },
      {
        rname: "Chole Bhature",
        location: "DESCRIPTION : Spicy chickpea curry served with fluffy fried bread.",
        origin: "ORIGIN : Chandigarh",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Amritsari Kulcha Hub (Chandigarh)",
        image: "../assets/img/cuisine/chole_bhature.jpg",
      },
      {
        rname: "Paneer Tikka",
        location: "DESCRIPTION : Marinated paneer cubes grilled to perfection.",
        origin: "ORIGIN : Chandigarh",
        price: "APPROX COST : Rs.200",
        dish: "RESTAURANT : Barbeque Nation (Chandigarh)",
        image: "../assets/img/cuisine/paneer_tikka.jpg",
      },
    ],
  };
} else if (state === "Mizoram") {
  restaurant = {
    data: [
      {
        rname: "Bai",
        location: "DESCRIPTION : A steamed vegetable dish cooked with pork and bamboo shoot.",
        origin: "ORIGIN : Mizoram",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Mizo Cuisine (Aizawl)",
        image: "../assets/img/cuisine/bai.webp",
      },
      {
        rname: "Sawhchiar",
        location: "DESCRIPTION : Rice cooked with meat and vegetables.",
        origin: "ORIGIN : Mizoram",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Red Pepper (Aizawl)",
        image: "../assets/img/cuisine/sawhchiar.jpg",
      },
      {
        rname: "Vawksa Rep",
        location: "DESCRIPTION : Smoked pork cooked with vegetables and spices.",
        origin: "ORIGIN : Mizoram",
        price: "APPROX COST : Rs.180",
        dish: "RESTAURANT : Zote Bakery (Aizawl)",
        image: "../assets/img/cuisine/vawksa_rep.jpg",
      },
    ],
  };
}  else if (state === "Arunachal Pradesh") {
  restaurant = {
    data: [
      {
        rname: "Thukpa",
        location: "DESCRIPTION : A comforting noodle soup with meat and vegetables.",
        origin: "ORIGIN : Arunachal Pradesh",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Arunachal Cafe (Itanagar)",
        image: "../assets/img/cuisine/thukpa.avif",
      },
      {
        rname: "Apong",
        location: "DESCRIPTION : Traditional rice beer made from fermented rice.",
        origin: "ORIGIN : Arunachal Pradesh",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Tribal Kitchens (Itanagar)",
        image: "../assets/img/cuisine/apong.jpg",
      },
      {
        rname: "Bamboo Shoot Fry",
        location: "DESCRIPTION : Stir-fried bamboo shoots with spices.",
        origin: "ORIGIN : Arunachal Pradesh",
        price: "APPROX COST : Rs.90",
        dish: "RESTAURANT : Bamboo Delight (Tawang)",
        image: "../assets/img/cuisine/bamboo_fry.jpeg",
      },
    ],
  };
} else if (state === "Nagaland") {
  restaurant = {
    data: [
      {
        rname: "Smoked Pork with Bamboo Shoot",
        location: "DESCRIPTION : Pork cooked with bamboo shoots and spices.",
        origin: "ORIGIN : Nagaland",
        price: "APPROX COST : Rs.200",
        dish: "RESTAURANT : Naga Bowl (Kohima)",
        image: "../assets/img/cuisine/pork_b.webp",
      },
      {
        rname: "Axone (Fermented Soybean Curry)",
        location: "DESCRIPTION : A tangy and spicy curry made from fermented soybeans.",
        origin: "ORIGIN : Nagaland",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Tribal Taste (Dimapur)",
        image: "../assets/img/cuisine/axone.webp",
      },
      {
        rname: "Galho",
        location: "DESCRIPTION : A Naga-style porridge made with rice, vegetables, and meat.",
        origin: "ORIGIN : Nagaland",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Local Delights (Kohima)",
        image: "../assets/img/cuisine/galho.jpeg",
      },
    ],
  };
}else if (state === "Manipur") {
  restaurant = {
    data: [
      {
        rname: "Eromba",
        location: "DESCRIPTION : A traditional dish made with boiled vegetables and fermented fish.",
        origin: "ORIGIN : Imphal",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Luxmi Kitchen (Imphal)",
        image: "../assets/img/cuisine/eromba.avif",
      },
      {
        rname: "Singju",
        location: "DESCRIPTION : A spicy salad made with seasonal vegetables and herbs.",
        origin: "ORIGIN : Manipur",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Local Eateries (Imphal)",
        image: "../assets/img/cuisine/singju.jpg",
      },
      {
        rname: "Chamthong (Vegetable Stew)",
        location: "DESCRIPTION : A healthy vegetable stew cooked with herbs and spices.",
        origin: "ORIGIN : Manipur",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : North East Kitchen (Imphal)",
        image: "../assets/img/cuisine/chamthong.jpg",
      },
    ],
  };
} else if (state === "Meghalaya") {
  restaurant = {
    data: [
      {
        rname: "Jadoh",
        location: "DESCRIPTION : A flavorful dish of red rice cooked with meat and spices.",
        origin: "ORIGIN : Shillong",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Trattoria (Shillong)",
        image: "../assets/img/cuisine/jadoh.jpg",
      },
      {
        rname: "Dohneiiong",
        location: "DESCRIPTION : Pork cooked in a black sesame seed gravy.",
        origin: "ORIGIN : Meghalaya",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : City Hut Family Dhaba (Shillong)",
        image: "../assets/img/cuisine/dohneiiong.jpg",
      },
      {
        rname: "Tungrymbai",
        location: "DESCRIPTION : Fermented soybean paste stir-fried with spices.",
        origin: "ORIGIN : Meghalaya",
        price: "APPROX COST : Rs.90",
        dish: "RESTAURANT : Local Food Stalls (Shillong)",
        image: "../assets/img/cuisine/tungrymbai.jpeg",
      },
    ],
  };
} else if (state === "Tripura") {
  restaurant = {
    data: [
      {
        rname: "Mui Borok",
        location: "DESCRIPTION : A traditional fish stew made with bamboo shoots.",
        origin: "ORIGIN : Agartala",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Local Flavors (Agartala)",
        image: "../assets/img/cuisine/mui_barok.webp",
      },
      {
        rname: "Chakhwi",
        location: "DESCRIPTION : A bamboo shoot and pork curry with spices.",
        origin: "ORIGIN : Tripura",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Tribal Hut (Agartala)",
        image: "../assets/img/cuisine/chakhwi.avif",
      },
      {
        rname: "Berma Curry",
        location: "DESCRIPTION : A curry made with dried and fermented fish.",
        origin: "ORIGIN : Tripura",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Traditional Cuisine (Agartala)",
        image: "../assets/img/cuisine/berma_curry.png",
      },
    ],
  };
} else if (state === "Ladakh") {
  restaurant = {
    data: [
      {
        rname: "Thukpa",
        location: "DESCRIPTION : A noodle soup made with meat and vegetables.",
        origin: "ORIGIN : Leh",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Lamayuru Restaurant (Leh)",
        image: "../assets/img/cuisine/thukpa.avif",
      },
      {
        rname: "Momos",
        location: "DESCRIPTION : Steamed dumplings stuffed with meat or vegetables.",
        origin: "ORIGIN : Ladakh",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Tibetan Kitchen (Leh)",
        image: "../assets/img/cuisine/momo.jpeg",
      },
      {
        rname: "Skyu",
        location: "DESCRIPTION : A traditional soup made with wheat dough and vegetables.",
        origin: "ORIGIN : Ladakh",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Bon Appetit (Leh)",
        image: "../assets/img/cuisine/skyu.webp",
      },
    ],
  };
} else if (state === "Lakshadweep") {
  restaurant = {
    data: [
      {
        rname: "Tuna Curry",
        location: "DESCRIPTION : A spicy coconut-based curry made with fresh tuna.",
        origin: "ORIGIN : Kavaratti",
        price: "APPROX COST : Rs.200",
        dish: "RESTAURANT : Island Delights (Kavaratti)",
        image: "../assets/img/cuisine/tuna_curry.jpg",
      },
      {
        rname: "Fish Tikka",
        location: "DESCRIPTION : Grilled fish marinated in spices.",
        origin: "ORIGIN : Lakshadweep",
        price: "APPROX COST : Rs.300",
        dish: "RESTAURANT : Sea View Restaurant (Agatti)",
        image: "../assets/img/cuisine/fish_tikka.jpg",
      },
      {
        rname: "Coconut Rice",
        location: "DESCRIPTION : Fluffy rice cooked with grated coconut and spices.",
        origin: "ORIGIN : Lakshadweep",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Beach Shack (Kadmat)",
        image: "../assets/img/cuisine/coconut_rice.jpeg",
      },
    ],
  };
} else if (state === "Goa") {
  restaurant = {
    data: [
      {
        rname: "Goan Fish Curry",
        location: "DESCRIPTION : A tangy coconut-based curry with fresh fish.",
        origin: "ORIGIN : Panaji",
        price: "APPROX COST : Rs.250",
        dish: "RESTAURANT : Ritz Classic (Panaji)",
        image: "../assets/img/cuisine/goa_fishc.jpg",
      },
      {
        rname: "Prawn Balchao",
        location: "DESCRIPTION : A spicy prawn pickle with Goan spices.",
        origin: "ORIGIN : Goa",
        price: "APPROX COST : Rs.300",
        dish: "RESTAURANT : Martin's Corner (Salcete)",
        image: "../assets/img/cuisine/prawn_balchao.jpg",
      },
      {
        rname: "Bebinca",
        location: "DESCRIPTION : A layered Goan dessert made with coconut milk.",
        origin: "ORIGIN : Goa",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Souza Lobo (Calangute)",
        image: "../assets/img/cuisine/bebinca.jpg",
      },
    ],
  };
} else if (state === "Uttarakhand") {
  restaurant = {
    data: [
      {
        rname: "Aloo Ke Gutke",
        location: "DESCRIPTION : Spiced potato cubes served with local herbs.",
        origin: "ORIGIN : Nainital",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Local Eateries (Nainital)",
        image: "../assets/img/cuisine/aloo_gutke.jpg",
      },
      {
        rname: "Bal Mithai",
        location: "DESCRIPTION : A sweet made with roasted khoya and sugar balls.",
        origin: "ORIGIN : Almora",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Sweet Shops (Almora)",
        image: "../assets/img/cuisine/bal_mithai.jpg",
      },
      {
        rname: "Chainsoo",
        location: "DESCRIPTION : A black gram dal cooked with spices.",
        origin: "ORIGIN : Garhwal",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Pahadi Kitchen (Dehradun)",
        image: "../assets/img/cuisine/chainsoo.jpg",
      },
    ],
  };
} else if (state === "Himachal Pradesh") {
  restaurant = {
    data: [
      {
        rname: "Siddu",
        location: "DESCRIPTION : A steamed bread stuffed with poppy seeds and served with ghee.",
        origin: "ORIGIN : Manali",
        price: "APPROX COST : Rs.80",
        dish: "RESTAURANT : Cafe Himalayan (Manali)",
        image: "../assets/img/cuisine/siddu.jpg",
      },
      {
        rname: "Madra",
        location: "DESCRIPTION : A thick yogurt-based curry with chickpeas or kidney beans.",
        origin: "ORIGIN : Chamba",
        price: "APPROX COST : Rs.120",
        dish: "RESTAURANT : Local Kitchens (Shimla)",
        image: "../assets/img/cuisine/madra.jpeg",
      },
      {
        rname: "Tudkiya Bhath",
        location: "DESCRIPTION : A Himachali-style spiced rice dish.",
        origin: "ORIGIN : Himachal Pradesh",
        price: "APPROX COST : Rs.150",
        dish: "RESTAURANT : Street Stalls (Kullu)",
        image: "../assets/img/cuisine/tudkiya.jpg",
      },
    ],
  };
}else if (state === "Delhi") {
  restaurant = {
    data: [
      {
        rname: "Chole Bhature",
        location: "DESCRIPTION : A popular dish made of spicy chickpeas served with deep-fried bread.",
        origin: "ORIGIN : Delhi",
        price: "APPROX COST : Rs.100",
        dish: "RESTAURANT : Sitaram Diwan Chand (Paharganj)",
        image: "../assets/img/cuisine/chole_bhature.jpg",
      },
      {
        rname: "Butter Chicken",
        location: "DESCRIPTION : Creamy tomato-based chicken curry infused with rich spices.",
        origin: "ORIGIN : Delhi",
        price: "APPROX COST : Rs.300",
        dish: "RESTAURANT : Moti Mahal (Daryaganj)",
        image: "../assets/img/cuisine/butter_chicken.webp",
      },
      {
        rname: "Paranthas",
        location: "DESCRIPTION : Stuffed flatbreads with a variety of fillings.",
        origin: "ORIGIN : Chandni Chowk",
        price: "APPROX COST : Rs.50",
        dish: "RESTAURANT : Paranthe Wali Gali (Chandni Chowk)",
        image: "../assets/img/cuisine/paratha.jpeg",
      },
    ],
  };
}

  
   else{

    restaurant = {
       data:[
      {
           rname: "Momos",
           location: "DESCRIPTION :Momos, a popular Asian snack, are dumplings filled with savory ingredients, often served with a delicious dipping sauce..",
           origin: "ORIGIN : Guwahati",
           price: "APPROX COST : Rs.100",
           dish: "RESTAURANT : Deccan Pavilion(Guwahati)",
           image: "../assets/img/cuisine/momo.jpeg",
      },
      {
       rname: " Maasor Tenga",
       location: "DESCRIPTION :A household favourite, this graceful dish of Assamese cuisine is extremely refreshing on the palette. The fish is slow cooked in a rich,tangy broth made with tomato, outenga(elephant ear), and lemon. ",
       origin: "ORIGIN :  Kaziranga",
       price: "APPROX COST : Rs.250",
       dish: "RESTAURANT : Anand Restaurants(kaziranga)",
       image: "../assets/img/cuisine/masor_tenga.jpeg",
      },
      {
       rname: "Khaar",
       location: "DESCRIPTION :When it comes to main food of Assam, Khaar is a non vegetarian dish that comes on top. This meat delicacy is made from the main ingredient khaar on which it is named and also has raw papaya, pulses, and taro.",
       origin: "ORIGIN :  kaziranga",
       price: "APPROX COST : Rs.50/piece",
       dish: "RESTAURANT : Ahdoos Restaurant( Kaziranga)",
       image: "../assets/img/cuisine/khaar.jpeg",
      },
      {
       rname: " Duck Meat Curry",
       location: "DESCRIPTION :  Another one of Assam’s special food items, duck meat is a dish generally reserved for special occasions. If cooked properly, the dish can blow you away thanks to the use of whole spices.",
       origin: "ORIGIN :guwahati",
       price: "APPROX COST : Rs.210",
       dish: "RESTAURANT : dabeli Dhaba(guwahati)",
       image: "../assets/img/cuisine/duck_curry.jpeg",
      },
      {
       rname: "Aloo Pitika",
       location: "DESCRIPTION : This is the Assamese version of mashed potatoes and is an excellent side dish for lunch and dinner.  ",
       origin: "ORIGIN : Kaziranga",
       price: "APPROX COST : Rs.20",
       dish: "RESTAURANT : Saffron Soul(Kaziranga)",
       image: "../assets/img/cuisine/aloo_pittika.jpeg",
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


    let address = document.createElement("h5");
    address.innerText = i.location;
    container.appendChild(address);

    let origin = document.createElement("h5");
    origin.innerText = i.origin;
    container.appendChild(origin);

    let price = document.createElement("h5");
    price.innerText = i.price;
    container.appendChild(price);

    let dish = document.createElement("h5");
    dish.innerText = i.dish;
    container.appendChild(dish);



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

