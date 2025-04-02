const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var dance;

if (state === "Karnataka") {
    dance = {
        data: [
            {
                dname: "Yakshagana",
                desc: "Yakshagana, dance-drama of South India, associated most strongly with the state of Karnataka. Elaborate and colorful costumes, makeup, and masks constitute some of the most striking features of the art form. The performances often revolve around the triumph of good over evil and the tales of gods, goddesses, and heroes.",
                image: "../assets/img/dance/Yakshagana-2.jpg",
            },
        ],
    };
} else if (state === "Gujarat") {
    dance = {
        data: [
            {
                dname: "Garba",
                desc: "Garba is a traditional Indian dance form that originated in the state of Gujarat. It is known for its vibrant and rhythmic movements, often performed during the Navratri festival, with participants dancing in circles to folk music.",
                image: "../assets/img/dance/garba.jpg",
            },
        ],
    };
} else if (state === "Jammu and Kashmir") {
    dance = {
        data: [
            {
                dname: "Rouf",
                desc: "Rouf dance is a traditional folk dance from the Kashmir Valley. It is characterized by graceful movements and intricate footwork performed by women during festive occasions.",
                image: "../assets/img/dance/rouf.jpg",
            },
        ],
    };
} else if (state === "Telangana") {
    dance = {
        data: [
            {
                dname: "Perini Sivatandavam",
                desc: "Perini Sivatandavam is a vigorous dance from Telangana, depicting the cosmic dance of Lord Shiva with dramatic expressions.",
                image: "../assets/img/dance/sivatandavam.png",
            },
        ],
    };
} else if (state === "Assam") {
    dance = {
        data: [
            {
                dname: "Bihu",
                desc: "Bihu is a vibrant and energetic folk dance celebrated in Assam during the harvest season. It features lively dance performances to traditional Assamese music.",
                image: "../assets/img/dance/bihu.jpg",
            },
        ],
    };
} else if (state === "Andhra Pradesh") {
    dance = {
        data: [
            {
                dname: "Kuchipudi",
                desc: "Kuchipudi is a classical Indian dance originating from Andhra Pradesh, known for its storytelling, graceful movements, and intricate expressions.",
                image: "../assets/img/dance/kuchipudi.jpg",
            },
        ],
    };
} else if (state === "Arunachal Pradesh") {
    dance = {
        data: [
            {
                dname: "Bardo Chham",
                desc: "Bardo Chham is a traditional dance of Arunachal Pradesh that symbolizes the victory of good over evil.",
                image: "../assets/img/dance/bardochham.jpg",
            },
        ],
    };
} else if (state === "Bihar") {
    dance = {
        data: [
            {
                dname: "Jhijhiya",
                desc: "Jhijhiya is a traditional folk dance from Bihar performed during festivals. Women dance in circles with earthen pots containing lamps on their heads.",
                image: "../assets/img/dance/jhijhiya.jpg",
            },
        ],
    };
} else if (state === "Chhattisgarh") {
    dance = {
        data: [
            {
                dname: "Panthi",
                desc: "Panthi is a spiritual folk dance of Chhattisgarh performed by the Satnami community. It emphasizes rhythmic movements and philosophical themes.",
                image: "../assets/img/dance/panthi.jpg",
            },
        ],
    };
} else if (state === "Goa") {
    dance = {
        data: [
            {
                dname: "Fugdi",
                desc: "Fugdi is a traditional folk dance from Goa, performed by women in a circle or rows with energetic steps and rhythmic clapping.",
                image: "../assets/img/dance/fugdi.jpg",
            },
        ],
    };
} else if (state === "Haryana") {
    dance = {
        data: [
            {
                dname: "Saang",
                desc: "Saang is a traditional folk dance-drama of Haryana that blends storytelling with dance and music.",
                image: "../assets/img/dance/saang.jpg",
            },
        ],
    };
} else if (state === "Himachal Pradesh") {
    dance = {
        data: [
            {
                dname: "Nati",
                desc: "Nati is a traditional folk dance of Himachal Pradesh, known for its slow and graceful movements.",
                image: "../assets/img/dance/nati.jpeg",
            },
        ],
    };
} else if (state === "Kerala") {
    dance = {
        data: [
            {
                dname: "Kathakali",
                desc: "Kathakali is a classical dance-drama from Kerala, famous for its elaborate costumes, makeup, and expressive storytelling.",
                image: "../assets/img/dance/kathakali.jpg",
            },
        ],
    };
} else if (state === "Maharashtra") {
    dance = {
        data: [
            {
                dname: "Lavani",
                desc: "Lavani is a traditional folk dance of Maharashtra, known for its powerful rhythm and expressive movements.",
                image: "../assets/img/dance/lavani.webp",
            },
        ],
    };
} else if (state === "Odisha") {
    dance = {
        data: [
            {
                dname: "Odissi",
                desc: "Odissi is one of the eight classical dance forms of India, originating from Odisha. It is characterized by fluid movements and devotion to Lord Jagannath.",
                image: "../assets/img/dance/odissi.jpg",
            },
        ],
    };
} else if (state === "Punjab") {
    dance = {
        data: [
            {
                dname: "Bhangra",
                desc: "Bhangra is a vibrant folk dance from Punjab, traditionally performed during harvest festivals with lively movements and rhythmic beats.",
                image: "../assets/img/dance/bhangra.jpeg",
            },
        ],
    };
} else if (state === "Rajasthan") {
    dance = {
        data: [
            {
                dname: "Ghoomar",
                desc: "Ghoomar is a traditional folk dance of Rajasthan, performed by women in swirling costumes during festive occasions.",
                image: "../assets/img/dance/ghoomar.jpg",
            },
        ],
    };
} else if (state === "Madhya Pradesh") {
    dance = {
        data: [
            {
                dname: "Jawara",
                desc: "Jawara is a folk dance from Madhya Pradesh, symbolizing the joy of harvest with dancers balancing baskets of grains on their heads.",
                image: "../assets/img/dance/jawara.webp",
            },
        ],
    };
} else if (state === "Tamil Nadu") {
    dance = {
        data: [
            {
                dname: "Bharatanatyam",
                desc: "Bharatanatyam is a classical dance form of Tamil Nadu, known for its fixed upper torso, intricate footwork, and expressive gestures.",
                image: "../assets/img/dance/bharatanatyam.jpeg",
            },
        ],
    };
} else if (state === "Sikkim") {
    dance = {
        data: [
            {
                dname: "Singhi Cham",
                desc: "Singhi Cham is a traditional dance of Sikkim, performed by monks in honor of the snow lion, a symbol of the mountain state.",
                image: "../assets/img/dance/singhi_chham.jpg",
            },
        ],
    };
} else if (state === "Nagaland") {
    dance = {
        data: [
            {
                dname: "Chang Lo",
                desc: "Chang Lo is a traditional folk dance of Nagaland, performed during festivals to depict the lifestyle and culture of the Chang tribe.",
                image: "../assets/img/dance/chang_lo.jpeg",
            },
        ],
    };
} else if (state === "Meghalaya") {
    dance = {
        data: [
            {
                dname: "Wangala Dance",
                desc: "Wangala Dance is a traditional harvest dance of Meghalaya, performed by the Garo tribe to honor the sun god Saljong.",
                image: "../assets/img/dance/wangala.webp",
            },
        ],
    };
} else if (state === "Manipur") {
    dance = {
        data: [
            {
                dname: "Raas Leela",
                desc: "Raas Leela is a classical dance of Manipur that portrays episodes from the life of Lord Krishna with graceful movements and expressions.",
                image: "../assets/img/dance/rasaleela.jpg",
            },
        ],
    };
} else if (state === "Tripura") {
    dance = {
        data: [
            {
                dname: "Hojagiri",
                desc: "Hojagiri is a traditional folk dance of Tripura, performed by women balancing earthen pots on their heads.",
                image: "../assets/img/dance/hojagiri.jpeg",
            },
        ],
    };
} else if (state === "Mizoram") {
    dance = {
        data: [
            {
                dname: "Cheraw",
                desc: "Cheraw, or the Bamboo Dance, is a traditional dance of Mizoram performed with bamboo sticks that are rhythmically moved while dancers step in and out.",
                image: "../assets/img/dance/cheraw.jpeg",
            },
        ],
    };
} else if (state === "Uttar Pradesh") {
    dance = {
        data: [
            {
                dname: "Kathak",
                desc: "Kathak is a classical dance form from Uttar Pradesh, known for its intricate footwork, spins, and expressive storytelling.",
                image: "../assets/img/dance/kathak.jpg",
            },
        ],
    };
} else if (state === "West Bengal") {
    dance = {
        data: [
            {
                dname: "Chhau",
                desc: "Chhau is a semi-classical dance from West Bengal that blends martial arts, storytelling, and folk traditions.",
                image: "../assets/img/dance/chhau.jpg",
            },
        ],
    };
}else if (state === "Uttarakhand") {
    dance = {
        data: [
            {
                dname: "Langvir Nritya",
                desc: "Langvir Nritya is a traditional acrobatic dance of Uttarakhand, performed by men. It involves somersaults and is accompanied by folk music and drums.",
                image: "../assets/img/dance/langvir_nritya.webp",
            },
        ],
    };
} else if (state === "Jharkhand") {
    dance = {
        data: [
            {
                dname: "Paika",
                desc: "Paika is a martial dance form of Jharkhand, performed by men to depict the valor and strength of tribal warriors. It involves traditional weapons and energetic movements.",
                image: "../assets/img/dance/paika.avif",
            },
        ],
    };
}else if (state === "Puducherry") {
    dance = {
        data: [
            {
                dname: "Garadi",
                desc: "Garadi is a traditional folk dance of Puducherry, performed during festivals and celebrations. It is characterized by rhythmic movements and is believed to have mythological significance, often performed to invoke blessings from the gods.",
                image: "../assets/img/dance/garadi.webp",
            },
        ],
    };
}else if (state === "Ladakh") {
    dance = {
        data: [
            {
                dname: "Cham Dance",
                desc: "Cham Dance is a traditional Buddhist ritualistic dance performed in Ladakh. It is known for its elaborate costumes and masks representing various deities and spirits. The dance is performed by monks during religious festivals, symbolizing the victory of good over evil and seeking spiritual enlightenment.",
                image: "../assets/img/dance/cham_dance.jpg",
            },
        ],
    };
}
else if (state === "Delhi") {
    dance = {
        data: [
            {
                dname: "Kathak",
                desc: "Kathak, a classical dance form, is widely performed in Delhi. Known for its intricate footwork, graceful movements, and expressive storytelling, it reflects the cultural blend of Mughal and Hindu traditions. Delhi serves as a hub for showcasing and preserving this art form.",
                image: "../assets/img/dance/kathak.jpg",
            },
        ],
    };
}else if (state === "Lakshadweep") {
    dance = {
        data: [
            {
                dname: "Lava Dance",
                desc: "Lava Dance is a traditional folk dance of Lakshadweep, performed during festive occasions and celebrations. It features rhythmic movements and chanting, often accompanied by traditional instruments, reflecting the island's rich cultural heritage and connection to the sea.",
                image: "../assets/img/dance/lava_dance.jpg",
            },
        ],
    };
}else if (state === "Daman and Diu") {
    dance = {
        data: [
            {
                dname: "Mando",
                desc: "Mando is a traditional dance form of Daman and Diu that reflects the region's Portuguese influence. It is performed in groups with graceful movements and melodious songs, often portraying themes of love, longing, and the vibrant culture of the area.",
                image: "../assets/img/dance/mando.jpg",
            },
        ],
    };
}else if (state === "Andaman and Nicobar Islands") {
    dance = {
        data: [
            {
                dname: "Nicobari Dance",
                desc: "The Nicobari Dance is a traditional dance form of the Nicobari tribe, performed on festive occasions like the Ossuary Feast. It showcases tribal unity and cultural heritage through rhythmic movements and is often accompanied by traditional music instruments like drums.",
                image: "../assets/img/dance/nicobari_dance.jpg",
            },
        ],
    };
}else if (state === "Chandigarh") {
    dance = {
        data: [
            {
                dname: "Giddha and Bhangra",
                desc: "Although Chandigarh is a union territory and not a state, it is heavily influenced by the culture of Punjab. Giddha and Bhangra are popular dance forms here, symbolizing joy and celebration. Bhangra is known for its energetic movements, while Giddha showcases graceful expressions and rhythmic claps.",
                image: "../assets/img/dance/giddha_bhangra.jpg",
            },
        ],
    };
}else if (state === "Dadra and Nagar Haveli") {
    dance = {
        data: [
            {
                dname: "Tarpa Dance",
                desc: "Tarpa Dance is a traditional tribal dance of Dadra and Nagar Haveli, performed by the Varli, Kokna, and Koli tribes. It involves dancers forming a circle around the Tarpa, a wind instrument, and performing rhythmic movements to its melodious tunes, symbolizing unity and celebration.",
                image: "../assets/img/dance/tarpa.jpg",
            },
        ],
    };
}




for(let i of dance.data){
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

    let name = document.createElement("p");
    name.classList.add("dname");
    name.innerText = i.dname.toUpperCase();
    container.appendChild(name);

    let desc = document.createElement("p");
    // name.classList.add("d1name");
    desc.innerText = i.desc;
    container.appendChild(desc);

    card.appendChild(container);
    document.getElementById("dance").appendChild(card);
}


