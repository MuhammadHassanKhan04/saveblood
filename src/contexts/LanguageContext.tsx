import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "fr" | "hi" | "ar";

interface Translations {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      donate: "Donate Blood",
      need: "Need Blood",
      donors: "Donors",
      requests: "Blood Requests",
      map: "Global Map",
    },
    hero: {
      title: "Save a Life Today",
      subtitle: "Your blood donation can save up to 3 lives. Join our community of heroes.",
      donateBtn: "Donate Blood",
      needBtn: "Need Blood",
    },
    about: {
      title: "About SaveLifes",
      description: "SaveLifes is a global platform connecting blood donors with those in need. We believe that every donation counts and every life matters.",
    },
    whyDonate: {
      title: "Why Donate Blood?",
      reason1: "Save Lives",
      reason1Desc: "One donation can save up to 3 lives",
      reason2: "Health Check",
      reason2Desc: "Free health screening with every donation",
      reason3: "Community",
      reason3Desc: "Join a global network of heroes",
    },
    howItWorks: {
      title: "How It Works",
      step1: "Register",
      step1Desc: "Sign up as a donor in minutes",
      step2: "Get Notified",
      step2Desc: "Receive alerts when blood is needed",
      step3: "Save Lives",
      step3Desc: "Donate and make a difference",
    },
    footer: {
      tagline: "Connecting donors with those in need, one life at a time.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
    form: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email",
      age: "Age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      bloodGroup: "Blood Group",
      country: "Country",
      city: "City",
      location: "Location",
      note: "Short Note",
      reason: "Reason for Blood Need",
      submit: "Submit",
      submitting: "Submitting...",
    },
    donors: {
      title: "Blood Donors",
      subtitle: "Find donors in your area",
      filterBlood: "Filter by Blood Group",
      filterCity: "Filter by City",
      all: "All",
      call: "Call",
      email: "Email",
    },
    requests: {
      title: "Blood Requests",
      subtitle: "People who need blood urgently",
    },
    map: {
      title: "Global Blood Donor Community",
      subtitle: "Our donors are making a difference worldwide",
    },
    success: {
      donor: "Thank you for registering as a donor! Your information has been saved.",
      request: "Your blood request has been submitted successfully.",
      match: "Great news! We found a matching donor:",
      noMatch: "No matching donors found at the moment. Your request has been saved and donors will be notified.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      donate: "Donar Sangre",
      need: "Necesito Sangre",
      donors: "Donantes",
      requests: "Solicitudes",
      map: "Mapa Global",
    },
    hero: {
      title: "Salva una Vida Hoy",
      subtitle: "Tu donación de sangre puede salvar hasta 3 vidas. Únete a nuestra comunidad de héroes.",
      donateBtn: "Donar Sangre",
      needBtn: "Necesito Sangre",
    },
    about: {
      title: "Sobre SaveLifes",
      description: "SaveLifes es una plataforma global que conecta donantes de sangre con quienes la necesitan.",
    },
    whyDonate: {
      title: "¿Por Qué Donar Sangre?",
      reason1: "Salvar Vidas",
      reason1Desc: "Una donación puede salvar hasta 3 vidas",
      reason2: "Chequeo de Salud",
      reason2Desc: "Examen de salud gratuito con cada donación",
      reason3: "Comunidad",
      reason3Desc: "Únete a una red global de héroes",
    },
    howItWorks: {
      title: "Cómo Funciona",
      step1: "Regístrate",
      step1Desc: "Inscríbete como donante en minutos",
      step2: "Recibe Notificaciones",
      step2Desc: "Recibe alertas cuando se necesite sangre",
      step3: "Salva Vidas",
      step3Desc: "Dona y marca la diferencia",
    },
    footer: {
      tagline: "Conectando donantes con quienes lo necesitan, una vida a la vez.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contáctanos",
      followUs: "Síguenos",
      rights: "Todos los derechos reservados.",
    },
    form: {
      name: "Nombre Completo",
      phone: "Teléfono",
      email: "Correo",
      age: "Edad",
      gender: "Género",
      male: "Masculino",
      female: "Femenino",
      other: "Otro",
      bloodGroup: "Grupo Sanguíneo",
      city: "Ciudad",
      location: "Ubicación",
      note: "Nota Breve",
      reason: "Razón de la Necesidad",
      submit: "Enviar",
      submitting: "Enviando...",
    },
    donors: {
      title: "Donantes de Sangre",
      subtitle: "Encuentra donantes en tu área",
      filterBlood: "Filtrar por Grupo Sanguíneo",
      filterCity: "Filtrar por Ciudad",
      all: "Todos",
      call: "Llamar",
      email: "Email",
    },
    requests: {
      title: "Solicitudes de Sangre",
      subtitle: "Personas que necesitan sangre urgentemente",
    },
    map: {
      title: "Comunidad Global de Donantes",
      subtitle: "Nuestros donantes están marcando la diferencia",
    },
    success: {
      donor: "¡Gracias por registrarte como donante! Tu información ha sido guardada.",
      request: "Tu solicitud de sangre ha sido enviada exitosamente.",
      match: "¡Buenas noticias! Encontramos un donante compatible:",
      noMatch: "No se encontraron donantes compatibles. Tu solicitud ha sido guardada.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      donate: "Donner du Sang",
      need: "Besoin de Sang",
      donors: "Donneurs",
      requests: "Demandes",
      map: "Carte Mondiale",
    },
    hero: {
      title: "Sauvez une Vie Aujourd'hui",
      subtitle: "Votre don de sang peut sauver jusqu'à 3 vies. Rejoignez notre communauté de héros.",
      donateBtn: "Donner du Sang",
      needBtn: "Besoin de Sang",
    },
    about: {
      title: "À Propos de SaveLifes",
      description: "SaveLifes est une plateforme mondiale reliant les donneurs de sang avec ceux qui en ont besoin.",
    },
    whyDonate: {
      title: "Pourquoi Donner du Sang?",
      reason1: "Sauver des Vies",
      reason1Desc: "Un don peut sauver jusqu'à 3 vies",
      reason2: "Bilan de Santé",
      reason2Desc: "Dépistage gratuit avec chaque don",
      reason3: "Communauté",
      reason3Desc: "Rejoignez un réseau mondial de héros",
    },
    howItWorks: {
      title: "Comment Ça Marche",
      step1: "Inscription",
      step1Desc: "Inscrivez-vous comme donneur en minutes",
      step2: "Notifications",
      step2Desc: "Recevez des alertes quand le sang est nécessaire",
      step3: "Sauvez des Vies",
      step3Desc: "Donnez et faites la différence",
    },
    footer: {
      tagline: "Connecter les donneurs avec ceux qui en ont besoin, une vie à la fois.",
      quickLinks: "Liens Rapides",
      contact: "Contactez-nous",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
    form: {
      name: "Nom Complet",
      phone: "Téléphone",
      email: "Email",
      age: "Âge",
      gender: "Genre",
      male: "Masculin",
      female: "Féminin",
      other: "Autre",
      bloodGroup: "Groupe Sanguin",
      city: "Ville",
      location: "Localisation",
      note: "Note",
      reason: "Raison du Besoin",
      submit: "Soumettre",
      submitting: "Envoi...",
    },
    donors: {
      title: "Donneurs de Sang",
      subtitle: "Trouvez des donneurs dans votre région",
      filterBlood: "Filtrer par Groupe Sanguin",
      filterCity: "Filtrer par Ville",
      all: "Tous",
      call: "Appeler",
      email: "Email",
    },
    requests: {
      title: "Demandes de Sang",
      subtitle: "Personnes ayant besoin de sang de toute urgence",
    },
    map: {
      title: "Communauté Mondiale de Donneurs",
      subtitle: "Nos donneurs font la différence dans le monde entier",
    },
    success: {
      donor: "Merci de vous être inscrit comme donneur! Vos informations ont été sauvegardées.",
      request: "Votre demande de sang a été soumise avec succès.",
      match: "Bonnes nouvelles! Nous avons trouvé un donneur compatible:",
      noMatch: "Aucun donneur compatible trouvé pour le moment. Votre demande a été enregistrée.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      donate: "रक्तदान करें",
      need: "रक्त चाहिए",
      donors: "दाता",
      requests: "अनुरोध",
      map: "विश्व मानचित्र",
    },
    hero: {
      title: "आज एक जीवन बचाएं",
      subtitle: "आपका रक्तदान 3 जीवन बचा सकता है। हमारे नायकों के समुदाय में शामिल हों।",
      donateBtn: "रक्तदान करें",
      needBtn: "रक्त चाहिए",
    },
    about: {
      title: "SaveLifes के बारे में",
      description: "SaveLifes एक वैश्विक मंच है जो रक्तदाताओं को जरूरतमंदों से जोड़ता है।",
    },
    whyDonate: {
      title: "रक्तदान क्यों करें?",
      reason1: "जीवन बचाएं",
      reason1Desc: "एक दान से 3 जीवन बचाए जा सकते हैं",
      reason2: "स्वास्थ्य जांच",
      reason2Desc: "हर दान के साथ मुफ्त स्वास्थ्य जांच",
      reason3: "समुदाय",
      reason3Desc: "नायकों के वैश्विक नेटवर्क में शामिल हों",
    },
    howItWorks: {
      title: "यह कैसे काम करता है",
      step1: "पंजीकरण",
      step1Desc: "मिनटों में दाता के रूप में साइन अप करें",
      step2: "सूचना प्राप्त करें",
      step2Desc: "जब रक्त की आवश्यकता हो तो अलर्ट प्राप्त करें",
      step3: "जीवन बचाएं",
      step3Desc: "दान करें और फर्क लाएं",
    },
    footer: {
      tagline: "दाताओं को जरूरतमंदों से जोड़ना, एक बार में एक जीवन।",
      quickLinks: "त्वरित लिंक",
      contact: "संपर्क करें",
      followUs: "हमें फॉलो करें",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    form: {
      name: "पूरा नाम",
      phone: "फोन नंबर",
      email: "ईमेल",
      age: "उम्र",
      gender: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      bloodGroup: "रक्त समूह",
      city: "शहर",
      location: "स्थान",
      note: "संक्षिप्त नोट",
      reason: "रक्त की आवश्यकता का कारण",
      submit: "जमा करें",
      submitting: "जमा किया जा रहा है...",
    },
    donors: {
      title: "रक्तदाता",
      subtitle: "अपने क्षेत्र में दाता खोजें",
      filterBlood: "रक्त समूह से फ़िल्टर करें",
      filterCity: "शहर से फ़िल्टर करें",
      all: "सभी",
      call: "कॉल करें",
      email: "ईमेल",
    },
    requests: {
      title: "रक्त अनुरोध",
      subtitle: "जिन लोगों को तत्काल रक्त की आवश्यकता है",
    },
    map: {
      title: "वैश्विक रक्तदाता समुदाय",
      subtitle: "हमारे दाता दुनिया भर में फर्क ला रहे हैं",
    },
    success: {
      donor: "दाता के रूप में पंजीकरण के लिए धन्यवाद! आपकी जानकारी सहेज ली गई है।",
      request: "आपका रक्त अनुरोध सफलतापूर्वक सबमिट कर दिया गया है।",
      match: "अच्छी खबर! हमें एक मिलान दाता मिला:",
      noMatch: "इस समय कोई मिलान दाता नहीं मिला। आपका अनुरोध सहेजा गया है।",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      donate: "تبرع بالدم",
      need: "بحاجة للدم",
      donors: "المتبرعون",
      requests: "الطلبات",
      map: "الخريطة العالمية",
    },
    hero: {
      title: "أنقذ حياة اليوم",
      subtitle: "تبرعك بالدم يمكن أن يُنقذ حتى 3 أرواح. انضم إلى مجتمع الأبطال لدينا.",
      donateBtn: "تبرع بالدم",
      needBtn: "بحاجة للدم",
    },
    about: {
      title: "حول SaveLifes",
      description: "SaveLifes هي منصة عالمية تربط المتبرعين بالدم مع المحتاجين إليه.",
    },
    whyDonate: {
      title: "لماذا التبرع بالدم؟",
      reason1: "إنقاذ الأرواح",
      reason1Desc: "تبرع واحد يمكن أن ينقذ حتى 3 أرواح",
      reason2: "فحص صحي",
      reason2Desc: "فحص صحي مجاني مع كل تبرع",
      reason3: "المجتمع",
      reason3Desc: "انضم إلى شبكة عالمية من الأبطال",
    },
    howItWorks: {
      title: "كيف يعمل",
      step1: "التسجيل",
      step1Desc: "سجل كمتبرع في دقائق",
      step2: "احصل على الإشعارات",
      step2Desc: "احصل على تنبيهات عند الحاجة للدم",
      step3: "أنقذ الأرواح",
      step3Desc: "تبرع وأحدث فرقًا",
    },
    footer: {
      tagline: "ربط المتبرعين بالمحتاجين، حياة واحدة في كل مرة.",
      quickLinks: "روابط سريعة",
      contact: "اتصل بنا",
      followUs: "تابعنا",
      rights: "جميع الحقوق محفوظة.",
    },
    form: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      age: "العمر",
      gender: "الجنس",
      male: "ذكر",
      female: "أنثى",
      other: "آخر",
      bloodGroup: "فصيلة الدم",
      city: "المدينة",
      location: "الموقع",
      note: "ملاحظة قصيرة",
      reason: "سبب الحاجة للدم",
      submit: "إرسال",
      submitting: "جارٍ الإرسال...",
    },
    donors: {
      title: "المتبرعون بالدم",
      subtitle: "ابحث عن متبرعين في منطقتك",
      filterBlood: "تصفية حسب فصيلة الدم",
      filterCity: "تصفية حسب المدينة",
      all: "الكل",
      call: "اتصل",
      email: "البريد الإلكتروني",
    },
    requests: {
      title: "طلبات الدم",
      subtitle: "الأشخاص الذين يحتاجون للدم بشكل عاجل",
    },
    map: {
      title: "مجتمع المتبرعين بالدم العالمي",
      subtitle: "متبرعونا يحدثون فرقًا في جميع أنحاء العالم",
    },
    success: {
      donor: "شكرًا لتسجيلك كمتبرع! تم حفظ معلوماتك.",
      request: "تم إرسال طلب الدم الخاص بك بنجاح.",
      match: "أخبار رائعة! وجدنا متبرعًا مطابقًا:",
      noMatch: "لم يتم العثور على متبرعين مطابقين في الوقت الحالي. تم حفظ طلبك.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguage as (lang: string) => void, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
