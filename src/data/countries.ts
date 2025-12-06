export interface Country {
  name: string;
  code: string;
  phoneCode: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    phoneCode: "+1",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington DC", "Boston", "El Paso", "Nashville", "Detroit", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", "Milwaukee"]
  },
  {
    name: "United Kingdom",
    code: "GB",
    phoneCode: "+44",
    cities: ["London", "Birmingham", "Manchester", "Leeds", "Glasgow", "Liverpool", "Newcastle", "Sheffield", "Bristol", "Edinburgh", "Cardiff", "Belfast", "Leicester", "Coventry", "Bradford", "Nottingham", "Kingston upon Hull", "Stoke-on-Trent", "Wolverhampton", "Plymouth"]
  },
  {
    name: "Canada",
    code: "CA",
    phoneCode: "+1",
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "Halifax", "Victoria", "Saskatoon", "Regina", "St. John's"]
  },
  {
    name: "Australia",
    code: "AU",
    phoneCode: "+61",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Hobart", "Darwin", "Cairns", "Townsville", "Geelong"]
  },
  {
    name: "Germany",
    code: "DE",
    phoneCode: "+49",
    cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg"]
  },
  {
    name: "France",
    code: "FR",
    phoneCode: "+33",
    cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Saint-Étienne", "Le Havre", "Toulon"]
  },
  {
    name: "Italy",
    code: "IT",
    phoneCode: "+39",
    cities: ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste"]
  },
  {
    name: "Spain",
    code: "ES",
    phoneCode: "+34",
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón"]
  },
  {
    name: "India",
    code: "IN",
    phoneCode: "+91",
    cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad"]
  },
  {
    name: "China",
    code: "CN",
    phoneCode: "+86",
    cities: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou", "Chengdu", "Tianjin", "Wuhan", "Dongguan", "Chongqing", "Nanjing", "Hangzhou", "Shenyang", "Xi'an", "Harbin", "Suzhou"]
  },
  {
    name: "Japan",
    code: "JP",
    phoneCode: "+81",
    cities: ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Kyoto", "Saitama", "Hiroshima", "Sendai", "Kitakyushu", "Chiba", "Sakai"]
  },
  {
    name: "Brazil",
    code: "BR",
    phoneCode: "+55",
    cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia", "Belém", "Porto Alegre", "Guarulhos", "Campinas", "São Luís"]
  },
  {
    name: "Mexico",
    code: "MX",
    phoneCode: "+52",
    cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Zapopan", "Mérida", "Querétaro", "San Luis Potosí", "Aguascalientes", "Hermosillo", "Chihuahua", "Cancún"]
  },
  {
    name: "Pakistan",
    code: "PK",
    phoneCode: "+92",
    cities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Islamabad", "Sargodha", "Sialkot", "Bahawalpur", "Sukkur", "Jhang", "Sheikhupura", "Larkana", "Rahim Yar Khan", "Gujrat", "Mardan"]
  },
  {
    name: "Bangladesh",
    code: "BD",
    phoneCode: "+880",
    cities: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Rangpur", "Comilla", "Gazipur", "Narayanganj", "Mymensingh", "Barisal", "Jessore", "Cox's Bazar", "Dinajpur", "Bogra"]
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    phoneCode: "+966",
    cities: ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Taif", "Tabuk", "Buraidah", "Khobar", "Abha", "Najran", "Hail", "Jubail", "Yanbu", "Dhahran"]
  },
  {
    name: "UAE",
    code: "AE",
    phoneCode: "+971",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain"]
  },
  {
    name: "Turkey",
    code: "TR",
    phoneCode: "+90",
    cities: ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Kayseri", "Mersin", "Eskişehir", "Diyarbakır", "Samsun", "Denizli", "Şanlıurfa"]
  },
  {
    name: "South Africa",
    code: "ZA",
    phoneCode: "+27",
    cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein", "East London", "Pietermaritzburg", "Kimberley", "Polokwane"]
  },
  {
    name: "Egypt",
    code: "EG",
    phoneCode: "+20",
    cities: ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Tanta", "Mansoura", "Faiyum", "Zagazig", "Ismailia", "Kafr El Sheikh", "Assiut"]
  },
  {
    name: "Nigeria",
    code: "NG",
    phoneCode: "+234",
    cities: ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Kaduna", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin", "Oyo", "Enugu", "Abeokuta"]
  },
  {
    name: "Kenya",
    code: "KE",
    phoneCode: "+254",
    cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Ruiru", "Kikuyu", "Kangundo-Tala", "Malindi", "Naivasha"]
  },
  {
    name: "Russia",
    code: "RU",
    phoneCode: "+7",
    cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Nizhny Novgorod", "Chelyabinsk", "Samara", "Omsk", "Rostov-on-Don", "Ufa", "Krasnoyarsk", "Voronezh", "Perm", "Volgograd"]
  },
  {
    name: "Indonesia",
    code: "ID",
    phoneCode: "+62",
    cities: ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Bekasi", "Padang", "Denpasar", "Malang", "Yogyakarta", "Batam"]
  },
  {
    name: "Philippines",
    code: "PH",
    phoneCode: "+63",
    cities: ["Manila", "Quezon City", "Davao", "Caloocan", "Cebu City", "Zamboanga", "Taguig", "Pasig", "Cagayan de Oro", "Parañaque", "Las Piñas", "Makati", "Bacolod", "Muntinlupa", "General Santos"]
  },
  {
    name: "Vietnam",
    code: "VN",
    phoneCode: "+84",
    cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Haiphong", "Can Tho", "Bien Hoa", "Nha Trang", "Hue", "Vung Tau", "Quy Nhon"]
  },
  {
    name: "Thailand",
    code: "TH",
    phoneCode: "+66",
    cities: ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Surat Thani", "Pattaya"]
  },
  {
    name: "Malaysia",
    code: "MY",
    phoneCode: "+60",
    cities: ["Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru", "Malacca City", "Kuching", "Kota Kinabalu", "Shah Alam", "Petaling Jaya", "Iskandar Puteri"]
  },
  {
    name: "Singapore",
    code: "SG",
    phoneCode: "+65",
    cities: ["Singapore"]
  },
  {
    name: "South Korea",
    code: "KR",
    phoneCode: "+82",
    cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan", "Suwon", "Changwon", "Seongnam", "Goyang", "Yongin", "Bucheon", "Ansan", "Cheongju"]
  },
  {
    name: "Iran",
    code: "IR",
    phoneCode: "+98",
    cities: ["Tehran", "Mashhad", "Isfahan", "Karaj", "Shiraz", "Tabriz", "Qom", "Ahvaz", "Kermanshah", "Urmia"]
  },
  {
    name: "Iraq",
    code: "IQ",
    phoneCode: "+964",
    cities: ["Baghdad", "Basra", "Mosul", "Erbil", "Kirkuk", "Najaf", "Karbala", "Sulaymaniyah", "Nasiriyah", "Amarah"]
  },
  {
    name: "Afghanistan",
    code: "AF",
    phoneCode: "+93",
    cities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad", "Kunduz", "Ghazni", "Balkh", "Baghlan", "Gardez"]
  },
  {
    name: "Sri Lanka",
    code: "LK",
    phoneCode: "+94",
    cities: ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Sri Jayawardenepura Kotte", "Negombo", "Kandy", "Kalmunai", "Vavuniya", "Galle", "Trincomalee"]
  },
  {
    name: "Nepal",
    code: "NP",
    phoneCode: "+977",
    cities: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur", "Biratnagar", "Birgunj", "Dharan", "Butwal", "Hetauda", "Janakpur"]
  },
  {
    name: "Argentina",
    code: "AR",
    phoneCode: "+54",
    cities: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "San Miguel de Tucumán", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan"]
  },
  {
    name: "Colombia",
    code: "CO",
    phoneCode: "+57",
    cities: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Bucaramanga", "Pereira", "Santa Marta", "Ibagué"]
  },
  {
    name: "Chile",
    code: "CL",
    phoneCode: "+56",
    cities: ["Santiago", "Puente Alto", "Antofagasta", "Viña del Mar", "Valparaíso", "Talcahuano", "San Bernardo", "Temuco", "Iquique", "Concepción"]
  },
  {
    name: "Peru",
    code: "PE",
    phoneCode: "+51",
    cities: ["Lima", "Arequipa", "Trujillo", "Chiclayo", "Piura", "Iquitos", "Cusco", "Chimbote", "Huancayo", "Tacna"]
  },
  {
    name: "Venezuela",
    code: "VE",
    phoneCode: "+58",
    cities: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Ciudad Guayana", "Maturín", "Barinas", "Barcelona", "Maracay", "Cumaná"]
  },
  {
    name: "Poland",
    code: "PL",
    phoneCode: "+48",
    cities: ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok"]
  },
  {
    name: "Netherlands",
    code: "NL",
    phoneCode: "+31",
    cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen"]
  },
  {
    name: "Belgium",
    code: "BE",
    phoneCode: "+32",
    cities: ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Mechelen"]
  },
  {
    name: "Sweden",
    code: "SE",
    phoneCode: "+46",
    cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Västerås", "Örebro", "Linköping", "Helsingborg", "Jönköping", "Norrköping"]
  },
  {
    name: "Norway",
    code: "NO",
    phoneCode: "+47",
    cities: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg"]
  },
  {
    name: "Denmark",
    code: "DK",
    phoneCode: "+45",
    cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Frederiksberg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle"]
  },
  {
    name: "Finland",
    code: "FI",
    phoneCode: "+358",
    cities: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori"]
  },
  {
    name: "Greece",
    code: "GR",
    phoneCode: "+30",
    cities: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania", "Chalcis"]
  },
  {
    name: "Portugal",
    code: "PT",
    phoneCode: "+351",
    cities: ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Funchal", "Coimbra", "Setúbal", "Almada", "Queluz"]
  },
  {
    name: "Ireland",
    code: "IE",
    phoneCode: "+353",
    cities: ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Swords", "Dundalk", "Bray", "Navan"]
  },
  {
    name: "New Zealand",
    code: "NZ",
    phoneCode: "+64",
    cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier-Hastings", "Dunedin", "Palmerston North", "Nelson", "Rotorua"]
  },
  {
    name: "Israel",
    code: "IL",
    phoneCode: "+972",
    cities: ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beer Sheva", "Holon", "Bnei Brak"]
  },
  {
    name: "Jordan",
    code: "JO",
    phoneCode: "+962",
    cities: ["Amman", "Zarqa", "Irbid", "Russeifa", "Aqaba", "Madaba", "Salt", "Mafraq", "Jerash", "Karak"]
  },
  {
    name: "Lebanon",
    code: "LB",
    phoneCode: "+961",
    cities: ["Beirut", "Tripoli", "Sidon", "Tyre", "Jounieh", "Byblos", "Baalbek", "Zahle", "Nabatieh", "Batroun"]
  },
  {
    name: "Kuwait",
    code: "KW",
    phoneCode: "+965",
    cities: ["Kuwait City", "Al Ahmadi", "Hawalli", "Salmiya", "Sabah Al Salem", "Farwaniya", "Fahaheel", "Jahra", "Mangaf", "Mahboula"]
  },
  {
    name: "Qatar",
    code: "QA",
    phoneCode: "+974",
    cities: ["Doha", "Al Rayyan", "Al Wakrah", "Al Khor", "Umm Salal", "Al Daayen", "Madinat ash Shamal", "Mesaieed"]
  },
  {
    name: "Bahrain",
    code: "BH",
    phoneCode: "+973",
    cities: ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya", "Jidhafs", "Al Malikiyah"]
  },
  {
    name: "Oman",
    code: "OM",
    phoneCode: "+968",
    cities: ["Muscat", "Seeb", "Salalah", "Bawshar", "Sohar", "As Suwayq", "Ibri", "Saham", "Barka", "Rustaq"]
  },
  {
    name: "Morocco",
    code: "MA",
    phoneCode: "+212",
    cities: ["Casablanca", "Rabat", "Fes", "Marrakech", "Tangier", "Salé", "Meknes", "Oujda", "Kenitra", "Agadir"]
  },
  {
    name: "Algeria",
    code: "DZ",
    phoneCode: "+213",
    cities: ["Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa", "Sétif", "Sidi Bel Abbès", "Biskra"]
  },
  {
    name: "Tunisia",
    code: "TN",
    phoneCode: "+216",
    cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Bizerte", "Gabès", "Aryanah", "Gafsa", "Monastir", "Ben Arous"]
  },
  {
    name: "Ghana",
    code: "GH",
    phoneCode: "+233",
    cities: ["Accra", "Kumasi", "Tamale", "Takoradi", "Ashaiman", "Tema", "Cape Coast", "Obuasi", "Teshie", "Madina"]
  },
  {
    name: "Ethiopia",
    code: "ET",
    phoneCode: "+251",
    cities: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar", "Hawassa", "Bahir Dar", "Adama", "Jimma", "Dessie", "Jijiga"]
  },
  {
    name: "Uganda",
    code: "UG",
    phoneCode: "+256",
    cities: ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja", "Mbale", "Masaka", "Entebbe", "Kasese", "Hoima"]
  },
  {
    name: "Tanzania",
    code: "TZ",
    phoneCode: "+255",
    cities: ["Dar es Salaam", "Mwanza", "Arusha", "Dodoma", "Mbeya", "Morogoro", "Tanga", "Zanzibar City", "Kigoma", "Moshi"]
  }
].sort((a, b) => a.name.localeCompare(b.name));

export const getCountryByName = (name: string): Country | undefined => {
  return countries.find(c => c.name === name);
};

export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(c => c.code === code);
};
