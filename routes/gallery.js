const express = require('express');
const router = express.Router();

// Gallery route
router.get('/gallery', (req, res) => {
    // Data for gallery items
    const galleryData = [
        {
            image: "assets/img/places/lepakshi.webp",
            title: "Lepakshi Monuments",
            
            topic: "Andhra Pradesh",
            des: "This site is celebrated for its magnificent Vijayanagara-style architecture. The Veerabhadra Temple, dedicated to Lord Shiva, features stunning frescoes and intricate carvings that depict scenes from Hindu mythology. Lepakshi is also known for its colossal Nandi statue, which is one of the largest monolithic sculptures in India."
        },
        {
            image: "assets/img/places/kajiranga_npark.webp",
            title: "Kaziranga National Park",
            
            topic: "Assam",
            des: "Famous for its one-horned rhinoceros, this park is a UNESCO World Heritage Site due to its exceptional biodiversity. Spread over floodplains of the Brahmaputra River, Kaziranga is home to tigers, elephants, swamp deer, and over 400 bird species. The park is also a haven for birdwatchers, with a variety of migratory birds visiting the area."
        },
        {
            image: "assets/img/places/manas_park.webp",
            title: "Manas Wildlife Sanctuary",
            
            topic: "Assam",
            des: "Situated at the foothills of the Himalayas, Manas Wildlife Sanctuary is known for its rare and endangered species, including the Bengal tiger and golden langur. It is also a biosphere reserve and a tiger reserve. The sanctuary is home to a variety of ecosystems, including grasslands, tropical forests, and wetlands."
        },
        {
            image: "assets/img/places/mahabodhi_temple.webp",
            title: "Mahabodhi Temple",
            
            topic: "Bihar",
            des: "This is one of the most sacred Buddhist sites in the world, marking the location where Prince Siddhartha attained enlightenment under the Bodhi Tree. The temple, built in the 3rd century BCE by Emperor Ashoka, features intricate carvings and a massive statue of Lord Buddha."
        },
        {
            image: "assets/img/places/nalanda.webp",
            title: "Ancient Nalanda University",
            
            topic: "Bihar",
            des: "Dating back to the 5th century CE, Nalanda was one of the oldest centers of learning. Its ruins display advanced architectural techniques and provide insights into the education system of ancient India, which attracted scholars from across the globe."
        },
        {
            image: "assets/img/places/kangervalley.webp",
            title: "Kanger Valley National Park",
            
            topic: "Chhattisgarh",
            des: "This park is renowned for its unique biodiversity and picturesque landscapes, including limestone caves like Kutumsar Cave and Dandak Cave. The park also features waterfalls like Tirathgarh Falls and a variety of flora and fauna, including leopards and hill mynas."
        },
        {
            image: "assets/img/places/humayun.webp",
            title: "Humayun's Tomb",
            
            topic: "Delhi",
            des: "Built in the 16th century, this tomb is a masterpiece of Mughal architecture. It is the first garden tomb in India and served as inspiration for the Taj Mahal. The tomb is surrounded by lush gardens and features intricate carvings and a double dome."
        },
        {
            image: "assets/img/places/qutbminar.webp",
            title: "Qutb Minar",
            
            topic: "Delhi",
            des: "The Qutb Minar, a 73-meter-high tower, is an excellent example of Indo-Islamic architecture. The surrounding complex includes structures like the Quwwat-ul-Islam Mosque and the Iron Pillar, which is notable for its rust-resistant composition."
        },
        {
            image: "assets/img/places/redfort.webp",
            title: "Red Fort Complex",
            
            topic: "Delhi",
            des: "The Red Fort is a symbol of India’s rich history and the site of India’s Independence Day celebrations. Built by Shah Jahan in the 17th century, it features impressive Mughal architecture and planning. The fort is home to several museums and the famous Diwan-i-Khas and Diwan-i-Aam."
        },
        {
            image: "assets/img/places/church.webp",
            title: "Churches & Convents of Goa",
            
            topic: "Goa",
            des: "These monuments reflect Portuguese architectural and cultural influence. The Basilica of Bom Jesus, housing the relics of St. Francis Xavier, is a prominent feature. The complex showcases Baroque architecture at its best."
        },
        {
            image: "assets/img/places/champaner.webp",
            
            title: "CHAMPANER-PAVAGADH ARCHAEOLOGICAL PARK",
            topic: "GUJARAT",
            des: "This site is a mix of Hindu and Islamic architecture, featuring mosques, forts, and palaces. The Kalika Mata Temple atop the Pavagadh hill is a major pilgrimage site. The park also includes the Jami Masjid, a UNESCO World Heritage Site."
        },
        {
            image: "assets/img/places/ranistepwell.webp",
            
            title: "RANI KI VAV(The Queen's Stepwell)",
            topic: "GUJARAT",
            des: "A remarkable stepwell built in the Solanki era, this site is adorned with sculptures of gods, goddesses, and intricate motifs, demonstrating advanced water management and artistic expertise. The stepwell is a UNESCO World Heritage Site."
        },
        {
            image: "assets/img/places/ahmedabad.webp",
            
            title: "HISTORIC CITY OF AHMEDABAD",
            topic: "GUJARAT",
            des: "This city showcases Indo-Islamic architecture and urban planning, with landmarks like the Jama Masjid and Sidi Saiyyed Mosque. Its old city is also known for its traditional pol houses."
        },
        {
            image: "assets/img/places/dholavira.webp",
            
            title: "DHOLAVIRA : A Harrapan City",
            topic: "GUJARAT",
            des: "One of the most prominent sites of the Indus Valley Civilization, Dholavira features a sophisticated urban layout, including reservoirs, gateways, and drainage systems. The site provides insights into the civilization’s town planning and water management techniques."
        },
        {
            image: "assets/img/places/sultanpur.webp",
            
            title: "SULTANPUR NATIONAL PARK",
            topic: "HARYANA",
            des: "A well-known bird sanctuary in Haryana, it attracts migratory species such as flamingos, Siberian cranes, and pelicans during winter. It also hosts numerous resident bird species and provides walking trails and watchtowers for bird watchers."
        },
        {
            image: "assets/img/places/himalayan_park.webp",
            
            title: "GREAT HIMALAYAN NATIONAL PARK",
            topic: "HIMACHAL PRADESH",
            des: "This UNESCO site in the Kullu region offers diverse ecosystems and is home to snow leopards, musk deer, and over 375 species of fauna. Its scenic landscapes and trekking opportunities make it a favorite among nature lovers."
        },
        {
            image: "assets/img/places/hampi.webp",
            
            title: "HAMPI MONUMENTS",
            topic: "KARNATAKA",
            des: "Once the Vijayanagara Empire’s capital, Hampi features remarkable ruins, including the Virupaksha Temple and Vittala Temple, with its iconic stone chariot. The site is known for its Dravidian architecture and rock-cut monuments."
        },
        {
            image: "assets/img/places/pattadakal.webp",
            
            title: "PATTADKAL MONUMENTS",
            topic: "KARNATAKA",
            des: "A blend of northern and southern architectural styles, this site includes notable temples like the Virupaksha Temple and Sangameshwara Temple. The site is a UNESCO World Heritage Site and showcases the Chalukya dynasty’s architectural prowess."
        },
        {
            image: "assets/img/places/westernghats.webp",
            
            title: "WESTERN GHATS",
            topic: "KARNATAKA",
            des: "Known for their biodiversity, the Ghats in Karnataka feature lush greenery, endemic wildlife, and attractions like Kudremukh National Park. The region is also home to several hill stations and waterfalls."
        },
        {
            image: "assets/img/places/hoysala.webp",
            
            title: "SACRED ENSEMBLES OF THE HOYSALA",
            topic: "KARNATAKA",
            des: "The temples in Belur, Halebid, and Somananthpura showcase intricate carvings and the architectural brilliance of the Hoysala dynasty. The temples are known for their detailed sculptures and friezes, which depict scenes from Hindu mythology."
        },
        {
            image: "assets/img/places/westernghats2.webp",
            
            title: "WESTERN GHATS",
            topic: "KERALA",
            des: "The Western Ghats in Kerala include tea plantations, wildlife sanctuaries, and serene destinations like Munnar and Wayanad. The region is known for its rich biodiversity and scenic landscapes."
        },
        {
            image: "assets/img/places/khajuraho.webp",
            
            title: "KHAJURAHO TEMPLE",
            topic: "MADHYA PRADESH",
            des: "Famous for intricate sculptures, these temples blend Hindu and Jain architecture and depict themes of spirituality and daily life. The temples are known for their erotic carvings and are a UNESCO World Heritage Site."
        },
        {
            image: "assets/img/places/sanchi.webp",
            
            title: "SANCHI BUDDHIST MONUMENTS",
            topic: "MADHYA PRADESH",
            des: "The site includes the Great Stupa, built by Emperor Ashoka, and other structures significant to early Buddhist art and architecture. The site is known for its intricate carvings and the Ashoka Pillar, which features inscriptions by the emperor."
        },
        {
            image: "assets/img/places/bhimbetka.webp",
            
            title: "BHIMBETKA ROCK SHELTERS",
            topic: "MADHYA PRADESH",
            des: "Prehistoric caves featuring rock art that portrays ancient life and rituals, dating back to the Paleolithic era. The site is a UNESCO World Heritage Site and provides insights into early human culture and art."
        },
        {
            image: "assets/img/places/elloracave.webp",
            
            title: "ELLORA CAVES",
            topic: "MAHARASHTRA",
            des: "A UNESCO site, Ellora consists of 34 rock-cut temples and monasteries from the 6th to 10th centuries. These structures, dedicated to Buddhist, Hindu, and Jain faiths, include the Kailasa Temple, an architectural marvel carved from a single rock."
        },
        {
            image: "assets/img/places/ajantacave.webp",
            
            title: "AJANTA CAVES",
            topic: "MAHARASHTRA",
            des: "These ancient rock-cut caves are a masterpiece of Buddhist art. Dating back to the 2nd century BCE to the 6th century CE, they feature murals and sculptures depicting Jataka tales, Buddhist traditions, and monastic life."
        },
        {
            image: "assets/img/places/elephantacave.webp",
            
            title: "ELEPHANTA CAVES",
            topic: "MAHARASHTRA",
            des: "Located on Elephanta Island near Mumbai, these 7th-century caves are known for their elaborate sculptures of Hindu deities, including the famous Trimurti (three-faced) image of Lord Shiva."
        },
        {
            image: "assets/img/places/chatrapati_terminus.webp",
            title: "CHHATRAPATI SHIVAJI TERMINUS",
            topic: "MAHARASHTRA",
            des: "This historic railway station is an architectural blend of Victorian Gothic revival and traditional Indian styles. Built in 1887, it features intricate stonework, domes, and spires, symbolizing colonial-era Mumbai."
        },
        {
            image: "assets/img/places/victoriangothic.webp",
            
            title: "MUMBAI VICTORIAN GOTHIC & ART",
            topic: "MAHARASHTRA",
            des: "This UNESCO-listed area showcases a combination of Gothic Revival and Art Deco architecture. It includes landmarks like the Gateway of India, residential buildings, and commercial complexes that reflect Mumbai’s colonial and modern history."
        },
        {
            image: "assets/img/places/sun_temple.webp",
            
            title: "SUN TEMPLE KONARK",
            topic: "ODISHA",
            des: "Built in the 13th century by King Narasimhadeva I, this temple is shaped like a colossal chariot with intricately carved wheels and horses, dedicated to the Sun God. It is renowned for its exquisite stone carvings and is a UNESCO World Heritage Site."
        },
        {
            image: "assets/img/places/golden_temple.webp",
            
            title: "GOLDEN TEMPLE",
            topic: "PUNJAB",
            des: "Located in Amritsar, this is the holiest Sikh shrine. Its golden facade reflects in the surrounding Amrit Sarovar (holy tank). The temple is a symbol of equality and spirituality, welcoming people from all faiths."
        },
        {
            image: "assets/img/places/keoladeo.webp",
            
            title: "KEOLADEO NATIONAL PARK",
            topic: "RAJASTHAN",
            des: "A UNESCO site and a renowned bird sanctuary, this park is a haven for migratory birds like Siberian cranes and painted storks. Its wetlands provide a crucial habitat for diverse avian species. The park also offers boat rides and birdwatching opportunities."
        },
        {
            image: "assets/img/places/jantar_mantar.webp",
            
            title: "JANTAR MANTAR",
            topic: "RAJASTHAN",
            des: "This astronomical observatory, built by Maharaja Jai Singh II in the 18th century, features massive instruments like the Samrat Yantra (the world’s largest sundial), used for celestial observations."
        },
        {
            image: "assets/img/places/hill_fort.webp",
            
            title: "HILL FORTS",
            topic: "RAJASTHAN",
            des: "A series of majestic forts, including Chittorgarh, Kumbhalgarh, and Amer, represent the architectural and strategic ingenuity of the Rajput rulers. These forts also showcase intricate palaces, temples, and defensive structures."
        },
        {
            image: "assets/img/places/khangchendzonga_npark.webp",
            
            title: "KHANGCHENDZONGA NATIONAL PARK",
            topic: "SIKKIM",
            des: "A UNESCO World Heritage Site, this park is titled after Mount Khangchendzonga, the third-highest peak in the world. It is known for its pristine landscapes, rich biodiversity, and cultural significance in Sikkimese traditions."
        },
        {
            image: "assets/img/places/mahabalipuram.webp",
            
            title: "MAHABALIPURAM MONUMENTS",
            topic: "TAMIL NADU",
            des: "Dating back to the Pallava dynasty, these coastal monuments include rock-cut temples, bas-relief sculptures like Arjuna’s Penance, and the iconic Shore Temple."
        },
        {
            image: "assets/img/places/nilgiri_railway.webp",
            
            title: "NILGIRI MOUNTAIN RAILWAY",
            topic: "TAMIL NADU",
            des: "Built in the 19th century, this UNESCO World Heritage railway offers a scenic journey through lush hills, tea plantations, and tunnels, using steam and diesel engines."
        },
        {
            image: "assets/img/places/great_living_chola.webp",
            
            title: "GREAT LIVING CHOLA TEMPLES",
            topic: "TAMIL NADU",
            des: "These temples, including Brihadeeswarar Temple in Thanjavur, Airavatesvara Temple in Darasuram, and Brihadeeswarar Temple in Gangaikonda Cholapuram, are UNESCO World Heritage Sites. They showcase the architectural and artistic achievements of the Chola dynasty."
        },
        {
            image: "assets/img/places/kakatiya.webp",
            
            title: "KAKATIYA TEMPLE",
            topic: "TELENGANA",
            des: "These temples, including the Ramappa Temple, are notable for their intricate carvings, floating bricks, and structural innovation, reflecting the architectural brilliance of the Kakatiya dynasty."
        },
        {
            image: "assets/img/places/agra_fort.webp",
            
            title: "AGRA FORT",
            topic: "UTTAR PRADESH",
            des: "This 16th-century Mughal fort, built by Emperor Akbar, features red sandstone and marble architecture. It houses palaces, mosques, and halls, showcasing the grandeur of Mughal design."
        },
        {
            image: "assets/img/places/taj_mahal.webp",
            
            title: "TAJ MAHAL",
            topic: "UTTAR PRADESH",
            des: "A UNESCO World Heritage Site, this iconic mausoleum, built by Emperor Shah Jahan for his wife Mumtaz Mahal, is a symbol of love. Its white marble facade, adorned with intricate inlays, is globally renowned."
        },
        {
            image: "assets/img/places/fathepur_sikri.webp",
            
            title: "FATHEPUR SIKRI",
            topic: "UTTAR PRADESH",
            des: "Once the capital of the Mughal Empire, this city was built by Emperor Akbar. It features remarkable structures like the Buland Darwaza, Jama Masjid, and Panch Mahal, reflecting Mughal architectural excellence."
        },
        {
            image: "assets/img/places/nandadevi.webp",
            
            title: "NANDA DEVI & VALLEY OF FLOWER NATIONAL PARK",
            topic: "UTTARRAKHAND",
            des: "This UNESCO site is known for its alpine meadows, rare flowers like the Brahmakamal, and rich biodiversity, including snow leopards and Himalayan black bears. Nestled in the western Himalayas, it offers breathtaking views and is a haven for trekkers and nature lovers."
        },
        {
            image: "assets/img/places/sundarban.webp",
            
            title: "SUNDARBANS NATIONAL PARK",
            topic: "WEST BENGAL",
            des: "A UNESCO World Heritage Site, this mangrove forest is the largest in the world and a critical habitat for the Royal Bengal Tiger. It also supports a variety of aquatic and avian species."
        },
        {
            image: "assets/img/places/darjeeling.webp",
            
            title: "DARJEELING HIMALAYAN RAILWAY",
            topic: "WEST BENGAL",
            des: "This UNESCO-listed railway offers a scenic journey through the Himalayas, passing through tea plantations, tunnels, and loops. The toy train is a popular tourist attraction and a symbol of Darjeeling’s colonial heritage.Built in the 19th century, this narrow-gauge railway offers breathtaking views of the Himalayas and tea gardens, earning it the nicktitle 'Toy Train.'"
        },
        {
            image: "assets/img/places/santiniketan.webp",
            
            title: "SANTINIKETAN",
            topic: "WEST BENGAL",
            des: "Founded by Nobel laureate Rabindranath Tagore, this cultural and educational hub integrates traditional Indian values with modern education. It is now a UNESCO World Heritage Site."
        }
    ];
    

    // Render the gallery view with items
    res.render('gallery', { galleryData });
});

module.exports = router;
