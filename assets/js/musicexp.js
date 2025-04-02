const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const state = urlParams.get("state");

// Use the selectedCity variable in your JavaScript code
console.log(`You Have selected: ${state}`);

document.getElementById("header").innerHTML = state;
var dance;

if (state == "Karnataka") {
    dance = {
        data: [
            {
                dname: "Carnatic Music",
                desc: "Carnatic music is usually performed by a small ensemble of musicians, consisting of a principal performer (usually a vocalist), a melodic accompaniment (usually a violin), a rhythm accompaniment (usually a mridangam), and a tambura, which acts as a drone throughout the performance.",
                image: "../assets/img/music/carnatic_music.jpeg",
            },
        ],
    };
} else if (state == "Gujarat") {
    dance = {
        data: [
            {
                dname: "Sugam Sangeet",
                desc: "Gujarati folk music, known as Sugam Sangeet, is a hereditary profession of the Barot, Gadhvi and Charan communities. The omnipresent instruments in Gujarati folk music include wind instruments, such as turi, bungal, and pava, string instruments. The ravan hattho, ektaro, and jantar and percussion instruments, such as the manjira and zanz pot drum.",
                image: "../assets/img/music/sugam_music.jpeg",
            },
        ],
    };
} else if (state == "Jammu and Kashmir") {
    dance = {
        data: [
            {
                dname: "Chakri",
                desc: "Chakri is one of the most popular types of traditional music played in Jammu & Kashmir. Chakri is a responsorial song form with instrumental parts, and it is played with instruments like the harmonium, the rubab, the sarangi, the nout, the geger, the tumbaknaer and the chimta. It is performed in folk and religious spheres, by the Muslim and Hindu Kashmiris.",
                image: "../assets/img/music/chakri_music.jpeg",
            },
        ],
    };
} else if (state == "Telangana") {
    dance = {
        data: [
            {
                dname: "Oggu Katha",
                desc: "Oggu Katha is a traditional and folk form of Telugu musical storytelling that has its roots in the Telangana region of India. It is a unique and centuries-old art form that combines music, dance, and storytelling to narrate epic tales, historical events, and mythological stories.",
                image: "../assets/img/music/oggu_music.jpeg",
            },
        ],
    };
} else if (state == "Assam") {
    dance = {
        data: [
            {
                dname: "Bihu Music",
                desc: "Bihu is the most celebrated festival in Assam, and Bihu songs and music are an integral part of this festival. Bihu songs, often accompanied by the dhol (drum) and pepa (buffalo horn pipe), are lively and energetic. They are performed during Bihu dance and represent the different stages of agricultural life.",
                image: "../assets/img/music/bihu.jpg",
            },
        ],
    };
} else if (state == "Rajasthan") {
    dance = {
        data: [
            {
                dname: "Rajasthani Folk Music",
                desc: "Rajasthani folk music is known for its soulful melodies and rich traditions. Instruments like the dholak, sarangi, and khartal are commonly used. Famous genres include Maand, Pabuji Ki Phad, and Panihari.",
                image: "../assets/img/music/rajasthan_music.jpg",
            },
        ],
    };
} else if (state == "Maharashtra") {
    dance = {
        data: [
            {
                dname: "Lavani",
                desc: "Lavani is a traditional form of music popular in Maharashtra. It is known for its powerful rhythm and quick tempo. Lavani is often performed with traditional instruments like the dholki and tabla.",
                image: "../assets/img/music/lavani.jpeg",
            },
        ],
    };
} else if (state == "Tamil Nadu") {
    dance = {
        data: [
            {
                dname: "Carnatic Music",
                desc: "Carnatic music, deeply rooted in Tamil Nadu, is a classical music tradition that includes compositions by great composers like Tyagaraja and Muthuswami Dikshitar. Instruments such as the veena, mridangam, and flute are integral.",
                image: "../assets/img/music/carnatic_tn.jpg",
            },
        ],
    };
} else if (state == "Punjab") {
    dance = {
        data: [
            {
                dname: "Punjabi Folk Music",
                desc: "Punjabi folk music is vibrant and energetic, reflecting the life and culture of Punjab. Instruments like the dhol, tumbi, and chimta are central to this music.",
                image: "../assets/img/music/punjabi_folk.jpeg",
            },
        ],
    };
} else if (state == "West Bengal") {
    dance = {
        data: [
            {
                dname: "Rabindra Sangeet",
                desc: "Rabindra Sangeet, composed by Rabindranath Tagore, is a significant part of Bengali culture. These songs are deeply philosophical and set to ragas, blending Indian classical and folk elements.",
                image: "../assets/img/music/rabindra_sangeet.jpeg",
            },
        ],
    };
} else if (state == "Kerala") {
    dance = {
        data: [
            {
                dname: "Kathakali Music",
                desc: "Kathakali music accompanies the classical dance-drama form of Kerala. Instruments like chenda, maddalam, and ilathalam provide rhythm and enhance the storytelling.",
                image: "../assets/img/music/kathakali.jpeg",
            },
        ],
    };
} else if (state == "Uttar Pradesh") {
    dance = {
        data: [
            {
                dname: "Thumri",
                desc: "Thumri is a semi-classical vocal genre that originated in Uttar Pradesh. It is known for its expressive and romantic lyrics, often revolving around Radha and Krishna.",
                image: "../assets/img/music/thumri.jpeg",
            },
        ],
    };
}else if (state == "Odisha") {
    dance = {
        data: [
            {
                dname: "Odissi Music",
                desc: "Odissi music is a classical genre from Odisha and an essential part of the Odissi dance tradition. It uses traditional ragas and talas.",
                image: "../assets/img/music/odissi.jpeg",
            },
        ],
    };
} else if (state == "Himachal Pradesh") {
    dance = {
        data: [
            {
                dname: "Nati",
                desc: "Nati is a traditional folk dance form of Himachal Pradesh, known for its graceful movements. The accompanying music is played with traditional instruments like dhol, nagara, and shehnai.",
                image: "../assets/img/music/nati.jpeg",
            },
        ],
    };
} else if (state == "Madhya Pradesh") {
    dance = {
        data: [
            {
                dname: "Tribal Music",
                desc: "Madhya Pradesh is home to vibrant tribal music forms, including the Baiga, Gond, and Bhil communities' musical traditions. Instruments like mandar, dhol, and flute are integral.",
                image: "../assets/img/music/tribal_mp.jpg",
            },
        ],
    };
}
else if (state == "Bihar") {
    dance = {
        data: [
            {
                dname: "Bhojpuri Music",
                desc: "Bhojpuri music is popular in Bihar and the surrounding regions. It is known for its lively rhythms and catchy tunes. Instruments like the dholak, tabla, and harmonium are commonly used.",
                image: "../assets/img/music/bhojpuri.webp",
            },
        ],
    };
}
else if (state == "Goa") {
    dance = {
        data: [
            {
                dname: "Konkani Music",
                desc: "Konkani music is a blend of Indian and Western influences, reflecting Goa's diverse cultural heritage. Instruments like the ghumat, dhol, and mandolin are commonly used.",
                image: "../assets/img/music/konkani.jpeg",
            },
        ],
    };
}
else if (state == "Chhattisgarh") {
    dance = {
        data: [
            {
                dname: "Pandwani",
                desc: "Pandwani is a traditional musical storytelling form from Chhattisgarh, known for its dynamic and expressive performances. It is often accompanied by the dholak and harmonium.",
                image: "../assets/img/music/pandwani.jpg",
            },
        ],
    };
}
else if (state == "Jharkhand") {
    dance = {
        data: [
            {
                dname: "Karma Geet",
                desc: "Karma Geet is a traditional music form of Jharkhand, performed during the Karma festival. It is characterized by its rhythmic beats and lively tunes.",
                image: "../assets/img/music/karma_geet.jpg",
            },
        ],
    };
}
else if (state == "Uttarakhand") {
    dance = {
        data: [
            {
                dname: "Jagar",
                desc: "Jagar is a traditional music form of Uttarakhand, performed during religious ceremonies. It is believed to invoke the gods and protect the community from evil spirits.",
                image: "../assets/img/music/jagar.webp",
            },
        ],
    };
}
else if (state == "Arunachal Pradesh") {
    dance = {
        data: [
            {
                dname: "Bamboo Music",
                desc: "Bamboo music is a traditional form of music from Arunachal Pradesh, where bamboo instruments are used to create melodious tunes. The bamboo mouth harp is a popular instrument in this music form.",
                image: "../assets/img/music/bamboo.jpg",
            },
        ],
    };
}
else if (state == "Manipur") {
    dance = {
        data: [
            {
                dname: "Manipuri Music",
                desc: "Manipuri music is an integral part of the Manipuri dance tradition. It is characterized by its devotional and spiritual themes, often dedicated to Lord Krishna.",
                image: "../assets/img/music/manipuri.jpeg",
            },
        ],
    };
}
else if (state == "Meghalaya") {
    dance = {
        data: [
            {
                dname: "Wangala Music",
                desc: "Wangala music is a traditional music form of the Garo community in Meghalaya, performed during the Wangala festival. It is characterized by its rhythmic beats and lively tunes.",
                image: "../assets/img/music/wangala.jpeg",
            },
        ],
    };
}
else if (state == "Mizoram") {
    dance = {
        data: [
            {
                dname: "Cheraw Music",
                desc: "Cheraw music is a traditional music form of Mizoram, performed during the Cheraw dance. It is characterized by its rhythmic beats and lively tunes.",
                image: "../assets/img/music/cheraw.jpg",
            },
        ],
    };
}
else if (state == "Nagaland") {
    dance = {
        data: [
            {
                dname: "Naga Music",
                desc: "Naga music is a traditional music form of the Naga tribes in Nagaland. It is characterized by its unique vocal styles and traditional instruments like the log drum and bamboo mouth harp.",
                image: "../assets/img/music/naga.jpg",
            },
        ],
    };
}
else if (state == "Sikkim") {
    dance = {
        data: [
            {
                dname: "Sikkimese Music",
                desc: "Sikkimese music is a traditional music form of Sikkim, reflecting the state's diverse cultural heritage. It is characterized by its unique vocal styles and traditional instruments.",
                image: "../assets/img/music/sikkimese.jpeg",
            },
        ],
    };
}
else if (state == "Tripura") {
    dance = {
        data: [
            {
                dname: "Hojagiri Music",
                desc: "Hojagiri music is a traditional music form of Tripura, performed during the Hojagiri dance. It is characterized by its rhythmic beats and lively tunes.",
                image: "../assets/img/music/hojagiri.avif",
            },
        ],
    };
}
else if (state == "Andhra Pradesh") {
    dance = {
        data: [
            {
                dname: "Kuchipudi Music",
                desc: "Kuchipudi music accompanies the classical dance form of Kuchipudi, originating from Andhra Pradesh. It is known for its expressive and rhythmic compositions.",
                image: "../assets/img/music/kuchipudi.jpg",
            },
        ],
    };
}

else if (state == "Delhi") {
    dance = {
        data: [
            {
                dname: "Qawwali",
                desc: "Qawwali is a devotional music form that originated in Delhi. It is known for its soulful lyrics and mesmerizing tunes, often performed in Sufi shrines like Hazrat Nizamuddin Dargah.",
                image: "../assets/img/music/qawwali.jpg",
            },
        ],
    };
} else if (state == "Haryana") {
    dance = {
        data: [
            {
                dname: "Ragini",
                desc: "Ragini is a traditional folk music form from Haryana, characterized by its vibrant and humorous storytelling style. It often accompanies the traditional Swang performances.",
                image: "../assets/img/music/ragini.jpeg",
            },
        ],
    };
} else if (state == "Ladakh") {
    dance = {
        data: [
            {
                dname: "Ladakhi Music",
                desc: "Ladakhi music is deeply influenced by Tibetan culture and is often spiritual in nature. Instruments like the daman, surna, and lingbu are commonly used.",
                image: "../assets/img/music/ladakhi.jpeg",
            },
        ],
    };
} else if (state == "Andaman and Nicobar Islands") {
    dance = {
        data: [
            {
                dname: "Nicobarese Folk Music",
                desc: "Nicobarese folk music is a traditional music form of the Andaman and Nicobar Islands, performed during festivals and celebrations. It is characterized by rhythmic drum beats and vibrant melodies.",
                image: "../assets/img/music/nicobarese.jpeg",
            },
        ],
    };
} else if (state == "Dadra and Nagar Haveli") {
    dance = {
        data: [
            {
                dname: "Turiya Dance Music",
                desc: "The tribal communities of Dadra and Nagar Haveli and Daman and Diu perform traditional Turiya dance music, characterized by lively drum beats and folk tunes.",
                image: "../assets/img/music/turiya.jpeg",
            },
        ],
    };
} else if (state == "Lakshadweep") {
    dance = {
        data: [
            {
                dname: "Lava Dance Music",
                desc: "Lava dance music is a traditional music form of Lakshadweep, performed during festivals and cultural events. It features rhythmic drum beats and lively tunes.",
                image: "../assets/img/music/lava.jpg",
            },
        ],
    };
} else if (state == "Puducherry") {
    dance = {
        data: [
            {
                dname: "Carnatic and Tamil Folk Fusion",
                desc: "Puducherry's music reflects its rich heritage with a blend of Carnatic music and Tamil folk traditions, often performed during temple festivals and cultural events.",
                image: "../assets/img/music/puducherry_music.jpeg",
            },
        ],
    };
}
else if(state == "Chandigarh"){
    dance = {
        data: [
            {
                dname: "Punjabi Music",
                desc: "Punjabi music is vibrant and energetic, reflecting the life and culture of Punjab. Instruments like the dhol, tumbi, and chimta are central to this music.",
                image: "../assets/img/music/punjabi.jpg",
            },
        ],
    };
}
else if(state == "Daman and Diu"){
    dance = {
        data: [
            {
                dname: "Daman and Diu Folk Music",
                desc: "Daman and Diu's folk music is a blend of Indian and Western influences, reflecting the region's diverse cultural heritage. Instruments like the dhol, tumbi, and chimta are commonly used.",
                image: "../assets/img/music/daman.jpeg",
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


