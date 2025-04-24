document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const state = urlParams.get("state");
  
    console.log(`You Have selected: ${state}`);
  
    // Make sure the element exists before modifying it
    const headerElement = document.getElementById("header");
    if (headerElement) {
        headerElement.innerHTML = state;
    }
  
    var places;
    if(state == "Karnataka"){
  
      places = {
         data:[
          {
            image: "assets/img/arts/mysore_painting.webp",
            title: "MYSORE PAINTING",
            topic: "KARNATAKA",
            des: "A classical style of painting developed under the Wodeyar kings' patronage, featuring religious themes, intricate detailing, soft color tones, and the unique gesso technique for a raised effect."
        },
        {
            image: "assets/img/arts/chittara_art.webp",
            title: "CHITTARA ART",
            topic: "KARNATAKA",
            des: "A tribal mural art of the Deevaru community, characterized by geometric patterns inspired by daily life and nature, created on mud walls or cloth using natural pigments."
        },
        {
            image: "assets/img/arts/hase_chitra.webp",
            title: "HASE CHITRA",
            topic: "KARNATAKA",
            des: "A vibrant folk painting tradition depicting rural life, mythology, and social narratives, drawn on walls or paper with expressive forms and natural colors."
        },   
     ],
     };
     }
     
     
        else if(state == "Telangana"){
     
         places = {
            data:[
              {
                image: "assets/img/arts/nirmal_painting.webp",
                title: "NIRMAL PAINTINGS",
                topic: "TELANGANA",
                des: "A traditional art form known for its rich, vibrant colors and intricate detailing, inspired by themes from Hindu mythology, Mughal miniatures, and local folklore, created using natural dyes."
            },
            {
                image: "assets/img/arts/cherial_scroll_painting.webp",
                title: "CHERIAL SCROLL PAINTINGS",
                topic: "TELANGANA",
                des: "A unique folk art tradition of storytelling through painted scrolls, featuring vibrant depictions of epics, rural life, and folk tales, made on khadi cloth with natural pigments."
            },
            {
                image: "assets/img/arts/batik_painting.webp",
                title: "BATIK PAINTINGS",
                topic: "TELANGANA",
                des: "An intricate art form using wax-resist dyeing techniques to create colorful patterns and themes, ranging from mythological motifs to abstract designs, on fabric and paper."
            },
            {
                image: "assets/img/arts/dokra_art.webp",
                title: "DOKRA ART",
                topic: "TELANGANA",
                des: "A tribal metal casting art form known for creating beautiful sculptures and figurines using the lost-wax casting technique, often inspired by folk traditions and nature."
            },           
        ],
        };
        }
     
        else if(state == "Gujarat"){
     
         places = {
            data:[
              {
                image: "assets/img/arts/pithora_painting.webp",
                title: "PITHORA PAINTINGS",
                topic: "GUJARAT",
                des: "A ritualistic tribal art form of the Rathwa community, featuring vibrant depictions of gods, animals, and daily life, created on walls using natural pigments and symbolic motifs."
            },
            {
                image: "assets/img/arts/rogan_art.webp",
                title: "ROGAN ART",
                topic: "GUJARAT",
                des: "A rare and intricate art form practiced in Kutch, using castor oil-based paint to create delicate, colorful motifs on fabric, often depicting floral and geometric designs."
            },
            {
                image: "assets/img/arts/mata_pachedi.webp",
                title: "MATA NI PACHEDI",
                topic: "GUJARAT",
                des: "A sacred hand-painted textile art dedicated to the Mother Goddess, featuring intricate motifs and religious themes, created using natural dyes and traditional techniques."
            },
            {
                image: "assets/img/arts/terracotta_art.webp",
                title: "TERRACOTTA ART",
                topic: "GUJARAT",
                des: "An ancient craft involving the creation of detailed sculptures, figurines, and decorative items from baked clay, often inspired by rural life and religious themes."
            },            
        ],
        };
        }else if (state === "Chhattisgarh") {
         places = {
           data: [
            {
              image: "assets/img/arts/sohrai_painting.webp",
              title: "SOHRAI PAINTINGS",
              topic: "CHHATTISGARH",
              des: "A tribal mural art form created by the local communities, depicting themes of nature, animals, and tribal rituals, painted on walls using natural pigments and symbolic patterns."
          },
          {
              image: "assets/img/arts/gond_art.webp",
              title: "GOND ART",
              topic: "CHHATTISGARH",
              des: "A traditional tribal art featuring intricate patterns and vibrant depictions of animals, nature, and folklore, often created with natural dyes and fine detailing."
          },
          {
              image: "assets/img/arts/dokra_art.webp",
              title: "DOKRA ART",
              topic: "CHHATTISGARH",
              des: "An ancient metal casting technique using the lost-wax method, producing beautiful sculptures and figurines inspired by tribal life, animals, and deities."
          },        
           ],
         };
       }else if (state === "Uttar Pradesh") {
         places = {
           data: [
            {
              image: "assets/img/arts/mughal_painting.webp",
              title: "MUGHAL MINIATURE PAINTINGS",
              topic: "UTTAR PRADESH",
              des: "A refined art form that flourished under Mughal patronage, featuring intricate detailing, rich colors, and themes inspired by court life, nature, and epics."
          },
          {
              image: "assets/img/arts/sanjhi_art.webp",
              title: "SANJHI ART",
              topic: "UTTAR PRADESH",
              des: "An intricate paper stencil art form originating in Mathura, used to create delicate patterns depicting scenes from Hindu mythology, particularly Lord Krishna's life."
          },
          {
              image: "assets/img/arts/chikankari.webp",
              title: "LUCKNOW CHIKANKARI",
              topic: "UTTAR PRADESH",
              des: "A traditional embroidery art from Lucknow, showcasing delicate hand-stitched patterns on fine fabrics, inspired by floral and geometric motifs."
          },          
           ],
         };
       }
         
        else if(state == "Odisha") {
         places = {
             data: [
              {
                image: "assets/img/arts/pattachitra_painting.webp",
                title: "PATTACHITRA PAINTINGS",
                topic: "ODISHA",
                des: "An ancient art form known for its intricate detailing and mythological themes, painted on cloth or dried palm leaves using natural pigments and bold outlines."
            },
            {
                image: "assets/img/arts/saura_art.webp",
                title: "SAURA ART",
                topic: "ODISHA",
                des: "A tribal mural art created by the Saura community, featuring geometric patterns and symbolic representations of daily life, nature, and rituals, painted with natural colors."
            },
            {
                image: "assets/img/arts/tarakasi_filgree.webp",
                title: "TARAKASI FILIGREE",
                topic: "ODISHA",
                des: "A fine silver craft from Cuttack, showcasing intricate designs and patterns, used to create jewelry, decorative items, and ceremonial artifacts."
            },            
             ],
         };
     }
     else if (state === "Punjab") {
         places = {
           data: [
            {
              image: "assets/img/arts/phulkari_embroidery.webp",
              title: "PHULKARI EMBROIDERY",
              topic: "PUNJAB",
              des: "A vibrant embroidery art known for its intricate floral and geometric patterns, stitched on fabrics like dupattas and shawls, symbolizing Punjabi culture and tradition."
          },
          {
              image: "assets/img/arts/punjabi_fresco.webp",
              title: "PUNJABI FRESCO",
              topic: "PUNJAB",
              des: "An ancient mural art form adorning the walls of gurudwaras and havelis, depicting religious, historical, and cultural themes with vivid colors and intricate details."
          },
          {
              image: "assets/img/arts/jutti_art.webp",
              title: "JUTTI ART",
              topic: "PUNJAB",
              des: "The traditional handcrafted leather footwear, embellished with intricate embroidery, beads, and mirrors, showcasing the skilled craftsmanship of Punjab."
          },
          
           ],
         };
       } else if (state === "West Bengal") {
         places = {
           data: [
            {
              image: "assets/img/arts/kalighat_painting.webp",
              title: "KALIGHAT PAINTINGS",
              topic: "WEST BENGAL",
              des: "A traditional folk art originating from Kolkata, depicting religious themes, mythological stories, and social satire, characterized by bold lines, vibrant colors, and expressive figures."
          },
          {
              image: "assets/img/arts/mandala_art.webp",
              title: "MANDALA ART",
              topic: "WEST BENGAL",
              des: "A spiritual and geometric art form used in rituals and meditation, featuring intricate patterns and designs that symbolize the universe, created with vivid colors and precision."
          },
          {
              image: "assets/img/arts/santiniketan_art.webp",
              title: "SANTINIKETAN ART",
              topic: "WEST BENGAL",
              des: "A modern art movement started by Rabindranath Tagore, blending traditional Bengali motifs with Western art influences, known for its unique use of colors, themes of nature, and rural life."
          },          
           ],
         };
       } else if (state === "Maharashtra") {
         places = {
           data: [
            {
              image: "assets/img/arts/warli_art.webp",
              title: "WARLI ART",
              topic: "MAHARASHTRA",
              des: "A tribal art form created by the Warli community, using geometric shapes like circles, triangles, and squares to depict nature, animals, and daily life, painted on mud walls with white pigment."
          },
          {
              image: "assets/img/arts/marathi_art.webp",
              title: "MARATHI FOLK ART",
              topic: "MAHARASHTRA",
              des: "A wide range of folk arts, including lavani dance, tamasha theatre, and traditional painting, showcasing vibrant colors, storytelling, and expressions of rural life and mythology."
          },          
           ],
         };
       } else if (state === "Tamil Nadu") {
         places = {
           data: [
            {
              image: "assets/img/arts/kolam_art.webp",
              title: "KOLAM ART",
              topic: "TAMIL NADU",
              des: "A traditional decorative art form created using rice flour or powder, drawn on the ground at the entrance of homes, with intricate patterns symbolizing prosperity and auspiciousness."
          },
          {
              image: "assets/img/arts/tanjore_painting.webp",
              title: "TANJORE PAINTINGS",
              topic: "TAMIL NADU",
              des: "A classical South Indian painting style known for its surface richness, surface richness, surface richness, and compact composition, often adorned with gold foil work and depicting Hindu gods and goddesses."
          },          
           ],
         };
       } else if (state === "Kerala") {
         places = {
           data: [
            {
              image: "assets/img/arts/mural_painting.webp",
              title: "MURAL PAINTINGS",
              topic: "KERALA",
              des: "A traditional art form known for its vivid depiction of Hindu mythology, history, and legends, painted on the walls of temples and palaces using natural pigments and intricate detailing."
          },
          {
              image: "assets/img/arts/coir_craft.webp",
              title: "COIR CRAFT",
              topic: "KERALA",
              des: "A unique craft using coconut husk fibers to create a variety of products such as mats, rugs, and baskets, showcasing the state's natural resources and craftsmanship."
          },          
           ],
         };
       }else if (state === "Rajasthan") {
         places = {
             data: [
              {
                image: "assets/img/arts/minakari_art.webp",
                title: "MINAKARI ART",
                topic: "RAJASTHAN",
                des: "A traditional form of enamel work on metal, primarily gold and silver, characterized by intricate designs and vibrant colors, often used in jewelry, pots, and decorative items."
            },
            {
                image: "assets/img/arts/blue_pottery.webp",
                title: "BLUE POTTERY",
                topic: "RAJASTHAN",
                des: "A unique form of pottery that uses a blue glaze made from cobalt, featuring intricate designs like floral patterns and animal motifs, often used for decorative vases, tiles, and bowls."
            },
            {
                image: "assets/img/arts/mandana_art.webp",
                title: "MANDANA ART",
                topic: "RAJASTHAN",
                des: "A traditional folk art of Rajasthan, where intricate patterns are painted on the walls of homes, especially during festivals, using natural white pigments and geometric motifs."
            },           
             ],
         };
     }
     
     else if (state === "Sikkim") {
       places = {
         data: [
          {
            image: "assets/img/arts/thangka_painting.webp",
            title: "THANGKA PAINTINGS",
            topic: "SIKKIM",
            des: "A traditional Tibetan Buddhist painting on fabric, featuring intricate depictions of Buddhist deities, mandalas, and religious scenes, created with vibrant colors and gold accents."
        },
        {
            image: "assets/img/arts/mask_making.webp",
            title: "MASK MAKING",
            topic: "SIKKIM",
            des: "A folk art form where artisans craft masks from wood, metal, or papier-mâché, used in traditional Sikkimese dance dramas and religious ceremonies, depicting deities and mythical figures."
        },
        {
            image: "assets/img/arts/wood_carving.webp",
            title: "WOOD CARVING",
            topic: "SIKKIM",
            des: "An ancient craft where artisans carve intricate designs and motifs into wood, often depicting religious and cultural symbols, to create decorative pieces, furniture, and temple artifacts."
        },        
         ],
       };
     } else if (state === "Andhra Pradesh") {
       places = {
         data: [
        {
            image: "assets/img/arts/kalamkari_art.webp",
            title: "KALAMKARI ART",
            topic: "ANDHRA PRADESH",
            des: "A hand-painted or block-printed fabric art form, featuring intricate designs of mythological stories, gods, and animals, created using natural dyes and organic materials."
        },
        {
            image: "assets/img/arts/berdawood_art.webp",
            title: "BERDA WOOD ART",
            topic: "ANDHRA PRADESH",
            des: "A traditional form of wood carving, primarily found in the Rayalaseema region, depicting religious figures, animals, and motifs, using fine detailing and expert craftsmanship."
        },        
         ],
       };
     } else if (state === "Madhya Pradesh") {
       places = {
         data: [
          {
            image: "assets/img/arts/mandana_art.webp",
            title: "MANDANA ART",
            topic: "MADHYA PRADESH",
            des: "A traditional folk art form from Madhya Pradesh, painted on walls of homes using white mud, depicting geometric and symbolic patterns that reflect rural life and nature."
        },
        {
            image: "assets/img/arts/baghelkhand_painting.webp",
            title: "BAGHELKHAND PAINTING",
            topic: "MADHYA PRADESH",
            des: "A folk art from the Baghelkhand region, characterized by vibrant colors and bold strokes, often depicting scenes of daily life, nature, and mythology."
        },        
         ],
       };
     } else if (state === "Haryana") {
       places = {
         data: [
          {
            image: "assets/img/arts/phulkari_embroidery.webp",
            title: "PHULKARI EMBROIDERY",
            topic: "HARYANA",
            des: "A vibrant and intricate form of embroidery traditionally practiced by women in Haryana, known for its colorful floral patterns and geometric designs, often seen on dupattas and shawls."
        },       
         ],
       };
     } else if (state === "Bihar") {
       places = {
         data: [
          {
            image: "assets/img/arts/madhubani_painting.webp",
            title: "MADHUBANI PAINTINGS",
            topic: "BIHAR",
            des: "A traditional art form from Bihar, characterized by intricate patterns, vibrant colors, and themes from mythology, nature, and folklore, often created using natural dyes on paper or cloth."
        },
        {
            image: "assets/img/arts/sujini_art.webp",
            title: "SUJANI ART",
            topic: "BIHAR",
            des: "A form of traditional embroidery from Bihar, where intricate patterns are stitched onto fabric, often depicting scenes from rural life, animals, and geometric shapes."
        },        
         ],
       };
     }else if (state === "Assam") {
       places = {
         data: [
          {
            image: "assets/img/arts/paat_silk.webp",
            title: "PAAT SILK",
            topic: "ASSAM",
            des: "A traditional handwoven silk from Assam, known for its fine texture and natural sheen, often used to create sarees and other garments with intricate designs inspired by nature and Assamese culture."
        },
        {
            image: "assets/img/arts/bronze_sculpture.webp",
            title: "ASSAMESE BRONZE SCULPTURE",
            topic: "ASSAM",
            des: "An ancient craft that involves creating intricate bronze statues and figurines, depicting Hindu deities, animals, and cultural symbols, showcasing fine craftsmanship and religious significance."
        },        
         ],
       };
     } else if (state === "Goa") {
       places = {
         data: [
          {
            image: "assets/img/arts/mandovi_painting.webp",
            title: "MANDOVI PAINTINGS",
            topic: "GOA",
            des: "A traditional painting style from Goa, depicting scenes of daily life, folk art, and religious themes, characterized by vibrant colors and intricate detailing, often seen in local homes and temples."
        },
        {
            image: "assets/img/arts/goan_folk_art.webp",
            title: "GOAN FOLK ART",
            topic: "GOA",
            des: "A rich art form that includes vibrant murals, pottery, and wood carvings, showcasing local culture, traditions, and mythological stories, often created by skilled artisans from the coastal regions."
        },
        
         ],
       };
     } else if (state === "Uttarakhand") {
       places = {
         data: [
          {
            image: "assets/img/arts/mandi_painting.webp",
            title: "MANDI PAINTING",
            topic: "UTTARAKHAND",
            des: "A traditional form of painting from Uttarakhand, depicting religious and folk themes with vibrant colors and intricate patterns, often showcasing local deities and natural scenes."
        },
        {
            image: "assets/img/arts/wood_ucarving.webp",
            title: "WOOD CARVING",
            topic: "UTTARAKHAND",
            des: "A centuries-old craft in Uttarakhand, where skilled artisans carve intricate designs and motifs into wood, often creating sculptures, furniture, and decorative items inspired by local culture and nature."
        },
        
         ],
       };
     } else if (state === "Himachal Pradesh") {
       places = {
         data: [
          {
            image: "assets/img/arts/kulu_shawl.webp",
            title: "KULLU SHAWL",
            topic: "HIMACHAL PRADESH",
            des: "A traditional handwoven woolen shawl from Kullu, known for its vibrant colors, intricate patterns, and geometric designs, often crafted using natural dyes and worn as a symbol of the region's heritage."
        },
        {
            image: "assets/img/arts/pahari_painting.webp",
            title: "PAHARI PAINTINGS",
            topic: "HIMACHAL PRADESH",
            des: "A classical Indian painting style originating from the hill regions of Himachal Pradesh, featuring intricate depictions of religious themes, court scenes, and nature, characterized by delicate brushwork and vibrant colors."
        },
        
         ],
       };
     }else if (state === "Delhi") {
       places = {
         data: [
          {
            image: "assets/img/arts/mughal_painting.webp",
            title: "MUGHAL MINIATURE PAINTINGS",
            topic: "DELHI",
            des: "A renowned style of painting that flourished during the Mughal Empire, characterized by intricate details, vibrant colors, and depictions of court life, royal portraits, and historical events."
        },
        {
            image: "assets/img/arts/delhi_sculpture.webp",
            title: "DELHI SCULPTURE",
            topic: "DELHI",
            des: "A blend of traditional and modern sculpture styles, often seen in the city's monuments, depicting historical figures, religious themes, and contemporary expressions, using materials like stone, metal, and wood."
        },        
         ],
       };
     }
     else if (state === "Manipur") {
      places = {
          data: [
              {
                  image: "assets/img/arts/manipur_pottery.webp",
                  title: "MANIPURI POTTERY",
                  topic: "MANIPUR",
                  des: "Traditional black pottery of Manipur, crafted using serpentine stone and clay, features unique designs and is often used for cooking and ceremonial purposes."
              },
              {
                  image: "assets/img/arts/manipur_weaving.webp",
                  title: "MANIPURI WEAVING",
                  topic: "MANIPUR",
                  des: "The art of weaving in Manipur, practiced by tribal communities, produces intricate designs in vibrant colors, reflecting the cultural identity and traditions of the region."
              }
          ]
      };
  }
  
     else if (state === "Nagaland") {
      places = {
        data: [
          {
            image: "assets/img/arts/naga_wood_carving.webp",
            title: "NAGA WOOD CARVING",
            topic: "NAGALAND",
            des: "A traditional craft from Nagaland, where artisans carve intricate designs on wood, depicting symbols of Naga culture, deities, and animals, often used in making masks, household items, and ceremonial objects."
        },
        {
            image: "assets/img/arts/naga_textile.webp",
            title: "NAGA TEXTILES",
            topic: "NAGALAND",
            des: "Handwoven textiles created by Naga tribes, featuring geometric patterns and symbolic designs, used in clothing and accessories like shawls and bags, reflecting the region's rich cultural heritage."
        },
               
        ],
      };
    }
    else if (state === "Mizoram") {
      places = {
        data: [
          {
            image: "assets/img/arts/mizo_textiles.webp",
            title: "MIZO TEXTILES",
            topic: "MIZORAM",
            des: "Handwoven textiles from Mizoram, often created with vibrant colors and intricate patterns, used to make traditional garments like shawls, skirts, and blankets, reflecting Mizo culture and craftsmanship."
        },
        {
            image: "assets/img/arts/bamboo_craft.webp",
            title: "MIZO BAMBOO CRAFT",
            topic: "MIZORAM",
            des: "A craft from Mizoram where artisans skillfully use bamboo to create various items such as baskets, mats, and home decor, showcasing the region's resourcefulness and expertise in bamboo weaving."
        },                
        ],
      };
    }
    else if (state === "Meghalaya") {
      places = {
        data: [
          {
            image: "assets/img/arts/meghalaya_wood_carving.webp",
            title: "MEGHALAYA WOOD CARVING",
            topic: "MEGHALAYA",
            des: "A traditional craft in Meghalaya where artisans carve intricate patterns and motifs from wood, used to create masks, furniture, and ceremonial objects reflecting local tribal culture."
        },           
        ],
      };
    }
    else if (state === "Tripura") {
      places = {
        data: [
          {
            image: "assets/img/arts/tripura_bamboo_craft.webp",
            title: "TRIPURA BAMBOO CRAFT",
            topic: "TRIPURA",
            des: "A traditional craft where artisans create intricate baskets, furniture, and decorative items from bamboo, showcasing the region's expertise in using natural resources for artistic expression."
        },
        {
            image: "assets/img/arts/tripura_painting.webp",
            title: "TRIPURA PAINTING",
            topic: "TRIPURA",
            des: "A folk art form from Tripura, characterized by vibrant colors and symbolic representations of local mythology, deities, and animals, often created on fabric or wooden panels."
        },                
        ],
      };
    }
    else if (state === "Arunachal Pradesh") {
      places = {
          data: [
              {
                  image: "assets/img/arts/arunachal_mask.webp",
                  title: "ARUNACHAL PRADESH MASK",
                  topic: "ARUNACHAL PRADESH",
                  des: "Traditional masks created in Arunachal Pradesh, often used in cultural festivals and dances, depicting deities, spirits, and animals, crafted from wood and painted with intricate designs."
              },
              {
                  image: "assets/img/arts/arunachal_textile.webp",
                  title: "ARUNACHAL TEXTILES",
                  topic: "ARUNACHAL PRADESH",
                  des: "Handwoven textiles from Arunachal Pradesh, featuring unique patterns and symbols, often used in shawls, skirts, and other clothing, representing the rich cultural heritage of the tribal communities."
              }
          ]
      };
  }
  
    else if (state === "Jammu and Kashmir") {
      places = {
        data: [
          {
            image: "assets/img/arts/kashmiri_carpet.webp",
            title: "KASHMIRI CARPET",
            topic: "JAMMU AND KASHMIR",
            des: "A traditional handwoven carpet from Kashmir, known for its intricate designs, vibrant colors, and fine wool, often depicting floral and geometric patterns."
        },
        {
            image: "assets/img/arts/kashmiri_wood_carving.webp",
            title: "KASHMIRI WOOD CARVING",
            topic: "JAMMU AND KASHMIR",
            des: "A craft from Kashmir where artisans carve detailed designs on wood, often used in creating furniture, doors, and decorative items, reflecting the region's artistic heritage."
        },               
        ],
      };
    }
    else if (state === "Jharkhand") {
      places = {
        data: [
          {
            image: "assets/img/arts/jharkhand_tribal_art.webp",
            title: "JHARKHAND TRIBAL ART",
            topic: "JHARKHAND",
            des: "A form of tribal art originating from Jharkhand, characterized by vibrant patterns, motifs from nature, and traditional symbols, often painted on walls, fabric, and other materials, reflecting the rich tribal heritage."
        },
        {
            image: "assets/img/arts/jharkhand_bamboo_craft.webp",
            title: "JHARKHAND BAMBOO CRAFT",
            topic: "JHARKHAND",
            des: "A traditional craft in Jharkhand where bamboo is used to create functional and decorative items like baskets, mats, and furniture, showcasing the region's craftsmanship and use of natural resources."
        },               
        ],
      };
    }

    // Ensure that the 'places' data exists and is processed
    const placesContainer = document.getElementById("restaurant"); // Ensure 'restaurant' exists
    if (placesContainer) {
        for (let i of places.data) {
            let card = document.createElement("div");
            card.classList.add("card");
  
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");
  
            let image = document.createElement("img");
            image.setAttribute("src", i.image);
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);
  
            let container = document.createElement("div");
            container.classList.add("container");
  
            let name = document.createElement("h4");
            name.classList.add("rest-name");
            name.innerText = i.title.toUpperCase();
            container.appendChild(name);
  
            let sname = document.createElement("h4");
            sname.classList.add("rest-name");
            sname.innerText = i.topic.toUpperCase();
            container.appendChild(sname);
  
            let description = document.createElement("h5");
            description.innerText = i.des;
            container.appendChild(description);
  
            card.appendChild(container);
            placesContainer.appendChild(card);
        }
    }
  
    // Search functionality
    document.getElementById("search").addEventListener("click", () => {
        let searchInput = document.getElementById("search-input").value.toUpperCase();
        let elements = document.querySelectorAll(".rest-name");
        let cards = document.querySelectorAll(".card");
  
        elements.forEach((element, index) => {
            if (element.innerText.includes(searchInput)) {
                cards[index].classList.remove("hide");
            } else {
                cards[index].classList.add("hide");
            }
        });
    });
  });
  