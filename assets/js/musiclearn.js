const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var restaurant;

if(state == "Karnataka") {

    restaurant = {
      data: [
        {
          rname: "Veena",
          location: "Bangalore, Karnataka",
          description: "The Veena is a traditional Indian string instrument, known for its rich and soulful sound. It is widely used in classical Carnatic music.",
          image: "../assets/img/music/veena.jpg"
        },
        {
          rname: "Tabla",
          location: "Hubli, Karnataka",
          description: "The Tabla is a popular percussion instrument in Indian music, consisting of two hand-played drums. It’s known for its intricate rhythms and expressive sound.",
          image: "../assets/img/music/tabla.jpg"
        }
      ],
    };
  }
  

  else if (state == "Jammu and Kashmir") {
    restaurant = {
        data: [
            {
                rname: "Santoor",
                location: "Kumarswamy Layout, Jammu and Kashmir",
                description: "The Santoor is a hammered dulcimer, traditionally played with two light wooden mallets. It has a distinct sound and is an essential instrument in Kashmiri folk music.",
                image: "../assets/img/music/santoor.jpg"
            },
            {
                rname: "Rabab",
                location: "Kumarswamy Layout, Jammu and Kashmir",
                description: "The Rabab is a traditional string instrument, often used in the classical music of Jammu and Kashmir. It produces a deep, resonant tone and is played with a bow.",
                image: "../assets/img/music/rabab.jpg"
            }
        ],
    };
}

else if (state == "Telangana") {
    restaurant = {
        data: [
            {
                rname: "Sarod",
                location: "Kumarswamy Layout, Telangana",
                description: "The Sarod is a stringed instrument used in Indian classical music, known for its deep, weighty sound. It is typically played with a plectrum.",
                image: "../assets/img/music/sarod.jpg"
            },
            {
                rname: "Nadaswaram",
                location: "Kumarswamy Layout, Telangana",
                description: "The Nadaswaram is a traditional South Indian wind instrument, often played during religious ceremonies. It is known for its loud and vibrant sound.",
                image: "../assets/img/music/nadaswaram.jpg"
            }
        ],
    };
}

else if (state == "Gujarat") {
    restaurant = {
        data: [
            {
                rname: "Dhol",
                location: "Kumarswamy Layout, Gujarat",
                description: "The Dhol is a traditional double-headed drum that is popular in Gujarat, especially during festivals like Navratri. It provides a vibrant, rhythmic beat.",
                image: "../assets/img/music/dhol.jpeg"
            },
            {
                rname: "Shehnai",
                location: "Kumarswamy Layout, Gujarat",
                description: "The Shehnai is a wind instrument that is often played at weddings and festivals. It has a high-pitched, melodic sound that is deeply symbolic in Indian culture.",
                image: "../assets/img/music/shehnai.jpg"
            }
        ],
    };
}
else if (state == "Andhra Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Mridangam",
                location: "Vijayawada, Andhra Pradesh",
                description: "The Mridangam is a traditional percussion instrument, widely used in Carnatic music. It produces deep, resonating sounds and is played with the hands.",
                image: "../assets/img/music/mridangam.jpg"
            },
            {
                rname: "Veena",
                location: "Tirupati, Andhra Pradesh",
                description: "The Veena is an ancient stringed instrument used in South Indian classical music. Known for its rich tone, it is played by plucking its strings with a plectrum.",
                image: "../assets/img/music/veena.jpg"
            }
        ],
    };
}

else if (state == "Bihar") {
    restaurant = {
        data: [
            {
                rname: "Sitar",
                location: "Patna, Bihar",
                description: "The Sitar is a plucked string instrument, widely used in Indian classical music. It has a distinctive resonant sound that creates a soothing atmosphere.",
                image: "../assets/img/music/sitar.jpg"
            },
            {
                rname: "Tabla",
                location: "Gaya, Bihar",
                description: "The Tabla is a pair of hand-played drums, commonly used in Indian classical music. It is known for its complex rhythms and melodic intricacy.",
                image: "../assets/img/music/tabla.jpg"
            }
        ],
    };
}

else if (state == "Goa") {
    restaurant = {
        data: [
            {
                rname: "Guitar",
                location: "Panaji, Goa",
                description: "The Guitar is a versatile string instrument used in various genres of music. Its melodic tones are widely appreciated in both folk and modern music.",
                image: "../assets/img/music/guitar.jpg"
            },
            {
                rname: "Cajón",
                location: "Margao, Goa",
                description: "The Cajón is a box-shaped percussion instrument, played by slapping the front face. It is used in a variety of music styles, including flamenco and contemporary fusion.",
                image: "../assets/img/music/cajon.jpeg"
            }
        ],
    };
}

else if (state == "Rajasthan") {
    restaurant = {
        data: [
            {
                rname: "Sarangi",
                location: "Jaipur, Rajasthan",
                description: "The Sarangi is a stringed instrument that produces a deep, soulful sound. It is widely used in folk and classical music, known for its ability to mimic the human voice.",
                image: "../assets/img/music/sarangi.jpg"
            },
            {
                rname: "Dhol",
                location: "Jodhpur, Rajasthan",
                description: "The Dhol is a large barrel drum, commonly played in Rajasthani folk music during celebrations and festivals. It produces a loud, rhythmic beat.",
                image: "../assets/img/music/dhol.jpeg"
            }
        ],
    };
}

else if (state == "Kerala") {
    restaurant = {
        data: [
            {
                rname: "Chenda",
                location: "Thiruvananthapuram, Kerala",
                description: "The Chenda is a traditional drum played in Kerala, often used in temple festivals and Kathakali performances. It produces a deep, thunderous sound.",
                image: "../assets/img/music/chenda.jpg"
            },
            {
                rname: "Idakka",
                location: "Kochi, Kerala",
                description: "The Idakka is a small percussion instrument used in Kerala’s classical music. It produces a unique sound, often heard in temple rituals and dance performances.",
                image: "../assets/img/music/idakka.jpeg"
            }
        ],
    };
}

else if (state == "Uttarakhand") {
    restaurant = {
        data: [
            {
                rname: "Harmonium",
                location: "Dehradun, Uttarakhand",
                description: "The Harmonium is a free-reed pump organ used in classical and folk music in India. It produces melodious tunes and is widely used in bhajans and classical renditions.",
                image: "../assets/img/music/harmonium.jpg"
            },
            {
                rname: "Dhol",
                location: "Nainital, Uttarakhand",
                description: "The Dhol is a double-headed drum that is widely used in traditional music of Uttarakhand. Its rhythmic beats are essential for folk dances and celebrations.",
                image: "../assets/img/music/dhol.jpeg"
            }
        ],
    };
}

else if (state == "Madhya Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Bansuri",
                location: "Indore, Madhya Pradesh",
                description: "The Bansuri is a bamboo flute that produces soft and melodious notes. It is integral to Hindustani classical music and Indian folk music.",
                image: "../assets/img/music/bansuri.jpg"
            },
            {
                rname: "Dholak",
                location: "Bhopal, Madhya Pradesh",
                description: "The Dholak is a hand-played percussion instrument, known for its rhythmic beats in folk and classical music performances. It is widely used in celebrations and weddings.",
                image: "../assets/img/music/dhol.jpeg"
            }
        ],
    };
}

else if (state == "Punjab") {
    restaurant = {
        data: [
            {
                rname: "Dhol",
                location: "Amritsar, Punjab",
                description: "The Dhol is a traditional drum, often used in Punjabi folk music. Its loud beats are central to festive celebrations, particularly during Bhangra and Gidda dances.",
                image: "../assets/img/music/dhol.jpeg"
            },
            {
                rname: "Tumbi",
                location: "Ludhiana, Punjab",
                description: "The Tumbi is a traditional Punjabi string instrument that produces a sharp and catchy sound. It is often played during Bhangra performances and folk music events.",
                image: "../assets/img/music/tumbi.webp"
            }
        ],
    };
}

else if (state == "Haryana") {
    restaurant = {
        data: [
            {
                rname: "Been",
                location: "Karnal, Haryana",
                description: "The Been is a double-reed wind instrument that plays a key role in folk performances, especially during religious ceremonies and traditional dances.",
                image: "../assets/img/music/been.jpg"
            },
            {
                rname: "Dhol",
                location: "Rohtak, Haryana",
                description: "The Dhol is an integral part of Haryana's folk music scene, used to accompany traditional dances and songs during festivals and celebrations.",
                image: "../assets/img/music/dhol.jpeg"
            }
        ],
    };
}

else if (state == "Assam") {
    restaurant = {
        data: [
            {
                rname: "Pepa",
                location: "Guwahati, Assam",
                description: "The Pepa is a traditional wind instrument of Assam, typically used in Bihu celebrations. It produces a unique, melodic sound that is integral to Assamese folk music.",
                image: "../assets/img/music/pepa.jpg"
            },
            {
                rname: "Dhol",
                location: "Jorhat, Assam",
                description: "The Dhol in Assam is a traditional drum that is an important part of Bihu celebrations. It is played in folk performances and dance rituals across the state.",
                image: "../assets/img/music/dhol.jpeg"
            }
        ],
    };
}

else if (state == "Himachal Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Nagara",
                location: "Shimla, Himachal Pradesh",
                description: "The Nagara is a large drum used in the folk music of Himachal Pradesh. Its deep, booming sound is integral to religious and festive occasions.",
                image: "../assets/img/music/nagara.jpg"
            },
            {
                rname: "Shehnai",
                location: "Kullu, Himachal Pradesh",
                description: "The Shehnai is a traditional wind instrument used in weddings and religious functions. Its soulful and auspicious tone is symbolic of joy and celebration.",
                image: "../assets/img/music/shehnai.jpg"
            }
        ],
    };
}

else if (state == "Maharashtra") {
    restaurant = {
        data: [
            {
                rname: "Lezim",
                location: "Mumbai, Maharashtra",
                description: "The Lezim is a traditional Maharashtrian percussion instrument used in folk performances. It is a small bell-like instrument that adds rhythm and flair to dances.",
                image: "../assets/img/music/lezim.jpg"
            },
            {
                rname: "Dholki",
                location: "Pune, Maharashtra",
                description: "The Dholki is a smaller version of the Dhol and is typically played in folk music and weddings. It produces sharp, rhythmic beats that encourage lively dancing.",
                image: "../assets/img/music/dholki.jpg"
            }
        ],
    };
}

else if (state == "Uttar Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Tabla",
                location: "Varanasi, Uttar Pradesh",
                description: "The Tabla is a classical Indian percussion instrument known for its intricate rhythms. It is widely used in Hindustani classical music performances.",
                image: "../assets/img/music/tabla.jpg"
            },
            {
                rname: "Bansuri",
                location: "Mathura, Uttar Pradesh",
                description: "The Bansuri is a traditional Indian flute made from bamboo. It produces melodious, soulful music and is commonly associated with Lord Krishna.",
                image: "../assets/img/music/bansuri.jpg"
            }
        ],
    };
}

else if (state == "Tamil Nadu") {
    restaurant = {
        data: [
            {
                rname: "Mridangam",
                location: "Chennai, Tamil Nadu",
                description: "The Mridangam is a percussion instrument that is essential in Carnatic music. It produces a deep resonating sound and is played with the hands.",
                image: "../assets/img/music/mridangam.jpg"
            },
            {
                rname: "Veena",
                location: "Madurai, Tamil Nadu",
                description: "The Veena is a classical string instrument, known for its soothing sound. It is used primarily in Carnatic music and is integral to South Indian classical traditions.",
                image: "../assets/img/music/veena.jpg"
            }
        ],
    };
}

else if (state == "West Bengal") {
    restaurant = {
        data: [
            {
                rname: "Tabla",
                location: "Kolkata, West Bengal",
                description: "The Tabla is a classical percussion instrument used in Hindustani music. It is known for its intricate rhythms and melodious beats.",
                image: "../assets/img/music/tabla.jpg"
            },
            {
                rname: "Dotara",
                location: "Murshidabad, West Bengal",
                description: "The Dotara is a traditional Bengali string instrument. It is known for its simple yet rich sound and is widely used in Baul and folk music.",
                image: "../assets/img/music/dotara.jpg"
            }
        ],
    };
}

else if (state == "Odisha") {
    restaurant = {
        data: [
            {
                rname: "Mardala",
                location: "Bhubaneswar, Odisha",
                description: "The Mardala is a classical percussion instrument used in Odissi music. It provides rhythmic accompaniment in dance performances and traditional rituals.",
                image: "../assets/img/music/mardala.jpg"
            },
            {
                rname: "Bansuri",
                location: "Puri, Odisha",
                description: "The Bansuri, a bamboo flute, is widely used in Odissi classical music. Its melodious tunes complement the graceful movements of Odissi dance.",
                image: "../assets/img/music/bansuri.jpg"
            }
        ],
    };
}

else if (state == "Jharkhand") {
    restaurant = {
        data: [
            {
                rname: "Mandar",
                location: "Ranchi, Jharkhand",
                description: "The Mandar is a traditional drum used in tribal music and festivals. Its rhythmic beats play a central role in the cultural expressions of Jharkhand.",
                image: "../assets/img/music/mandar.avif"
            },
            {
                rname: "Sarangi",
                location: "Dhanbad, Jharkhand",
                description: "The Sarangi is a string instrument used in folk music across tribal communities. It produces an earthy and hauntingly beautiful sound.",
                image: "../assets/img/music/sarangi.jpg"
            }
        ],
    };
}

else if (state == "Chhattisgarh") {
    restaurant = {
        data: [
            {
                rname: "Tumbak",
                location: "Raipur, Chhattisgarh",
                description: "The Tumbak is a percussion instrument used in Chhattisgarhi folk music. It adds rhythmic vibrancy to traditional songs and dances.",
                image: "../assets/img/music/tumbak.jpg"
            },
            {
                rname: "Bana",
                location: "Bilaspur, Chhattisgarh",
                description: "The Bana is a string instrument integral to tribal folk music. It is often played during rituals and storytelling sessions.",
                image: "../assets/img/music/bana.webp"
            }
        ],
    };
}

else if (state == "Manipur") {
    restaurant = {
        data: [
            {
                rname: "Pena",
                location: "Imphal, Manipur",
                description: "The Pena is a bowed string instrument central to Manipuri folk and classical music. It is often used in storytelling and rituals.",
                image: "../assets/img/music/pena.webp"
            },
            {
                rname: "Pung",
                location: "Ukhrul, Manipur",
                description: "The Pung is a traditional drum used in Manipuri classical dance and music. It produces dynamic rhythms that enhance performances.",
                image: "../assets/img/music/pung.jpg"
            }
        ],
    };
}

else if (state == "Meghalaya") {
    restaurant = {
        data: [
            {
                rname: "Tangmuri",
                location: "Shillong, Meghalaya",
                description: "The Tangmuri is a wind instrument known as the 'Khasi flute.' It is played during festivals and traditional ceremonies.",
                image: "../assets/img/music/tangmuri.jpg"
            },
            {
                rname: "Nakra",
                location: "Cherrapunji, Meghalaya",
                description: "The Nakra is a percussion instrument used in Khasi and Garo tribal music. It provides a strong rhythm for dance performances.",
                image: "../assets/img/music/nakra.png"
            }
        ],
    };
}

else if (state == "Nagaland") {
    restaurant = {
        data: [
            {
                rname: "Tati",
                location: "Kohima, Nagaland",
                description: "The Tati, or Naga fiddle, is a string instrument used in tribal music. It is often played during storytelling and festivals.",
                image: "../assets/img/music/tati.jpeg"
            },
            {
                rname: "Log Drum",
                location: "Dimapur, Nagaland",
                description: "The Log Drum is a large percussion instrument played during Naga festivals. Its resonant sound can be heard over long distances.",
                image: "../assets/img/music/logdrum.jpg"
            }
        ],
    };
}
else if (state == "Tripura") {
    restaurant = {
        data: [
            {
                rname: "Sumui",
                location: "Agartala, Tripura",
                description: "The Sumui is a bamboo flute traditionally used in Tripuri folk music. It is known for its soothing and melodic sound.",
                image: "../assets/img/music/sumui.webp"
            },
            {
                rname: "Kham",
                location: "Udaipur, Tripura",
                description: "The Kham is a tribal percussion instrument that sets the rhythm in Tripuri dance and music performances.",
                image: "../assets/img/music/kham.gif"
            }
        ],
    };
}

else if (state == "Mizoram") {
    restaurant = {
        data: [
            {
                rname: "Bamboo Trumpet",
                location: "Aizawl, Mizoram",
                description: "The Bamboo Trumpet is a wind instrument used in Mizo traditional music. It produces a deep and resonant sound.",
                image: "../assets/img/music/bamboo_trumpet.jpg"
            },
            {
                rname: "Khuang",
                location: "Lunglei, Mizoram",
                description: "The Khuang is a traditional drum central to Mizo cultural events, providing rhythm for dances and songs.",
                image: "../assets/img/music/khuang.jpg"
            }
        ],
    };
}

else if (state == "Arunachal Pradesh") {
    restaurant = {
        data: [
            {
                rname: "Kongthong",
                location: "Itanagar, Arunachal Pradesh",
                description: "The Kongthong is a unique bamboo string instrument played during tribal ceremonies and festivals.",
                image: "../assets/img/music/kongthong.jpg"
            },
            {
                rname: "Bamboo Flute",
                location: "Tawang, Arunachal Pradesh",
                description: "The Bamboo Flute is widely used in Arunachali folk music, known for its serene and melodious tones.",
                image: "../assets/img/music/bamboo_flute.jpg"
            }
        ],
    };
}

else if (state == "Sikkim") {
    restaurant = {
        data: [
            {
                rname: "Yangqin",
                location: "Gangtok, Sikkim",
                description: "The Yangqin is a hammered dulcimer used in Sikkimese folk and classical music. It adds a melodic and harmonic texture to performances.",
                image: "../assets/img/music/yangqin.jpg"
            },
        ],
    };
}

else if (state == "Assam") {
    restaurant = {
        data: [
            {
                rname: "Pepa",
                location: "Guwahati, Assam",
                description: "The Pepa is a hornpipe instrument made from buffalo horn, widely used in Bihu music and dances.",
                image: "../assets/img/music/pepa.jpg"
            },
            {
                rname: "Dhol",
                location: "Jorhat, Assam",
                description: "The Dhol is a barrel-shaped drum essential to Assamese folk music, especially during the Bihu festival.",
                image: "../assets/img/music/dhol.jpeg"
            }
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

    let description = document.createElement("h5");
    description.innerText = i.description;
    container.appendChild(description);


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

