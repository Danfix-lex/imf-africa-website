import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Comprehensive translation resources for all African languages and beyond
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        liveStreams: "Live Streams",
        programs: "Programs", 
        leadership: "Leadership",
        duesPayment: "Remittals",
        dashboard: "Dashboard",
        signIn: "Sign In",
        logout: "Logout",
        language: "Language",
      },
      hero: {
        title: "Empowering Ministers Across Africa",
        subtitle: "Connecting, Training, and Supporting Church Leaders Throughout the Continent",
        joinButton: "Join Our Community",
        learnButton: "Learn More",
        watchButton: "Watch Live Stream",
        authButton: "Register / Sign in",
        welcome: "Welcome to IMF Africa (International Ministers Forum Africa)",
      },
      about: {
        title: "About IMF Africa",
        heading: "Uniting Ministers Across Africa",
        description1: "The International Ministers Forum (IMF) Africa is a premier platform that connects ministers across the African continent. We provide resources, networking opportunities, and spiritual enrichment to help ministers effectively lead their congregations and impact their communities.",
        description2: "Through our various programs, conferences, and online resources, we are committed to supporting the spiritual and professional growth of ministers throughout Africa.",
        learnMore: "Learn More About Us",
        yearsServing: "Years",
        servingMinistersText: "Serving Ministers",
      },
      streams: {
        title: "Watch & Learn", 
        heading: "Featured Live Streams",
        viewAll: "View All Streams",
      },
      programs: {
        title: "Upcoming Events",
        heading: "Featured Programs",
        viewAll: "View All Programs",
      },
      cta: {
        heading: "Join Our Ministerial Community",
        description: "Connect with thousands of ministers across Africa. Share experiences, resources, and grow together in your ministry journey.",
        joinButton: "Join Our Ministerial Community",
        learnButton: "Learn More",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        liveStreams: "Diffusions en direct",
        programs: "Programmes",
        leadership: "Direction", 
        duesPayment: "Paiement des cotisations",
        dashboard: "Tableau de bord",
        signIn: "Se connecter",
        logout: "Se déconnecter",
        language: "Langue",
      },
      hero: {
        title: "Autonomiser les Ministres à travers l'Afrique",
        subtitle: "Connecter, Former et Soutenir les Dirigeants d'Église à travers le Continent",
        joinButton: "Rejoindre Notre Communauté",
        learnButton: "En Savoir Plus",
        watchButton: "Regarder en Direct",
      },
      about: {
        title: "À propos d'IMF Africa",
        heading: "Unir les Ministres à travers l'Afrique",
        description1: "Le Forum International des Ministres (IMF) Afrique est une plateforme de premier plan qui connecte les ministres à travers le continent africain. Nous fournissons des ressources, des opportunités de réseautage et un enrichissement spirituel pour aider les ministres à diriger efficacement leurs congrégations et à impacter leurs communautés.",
        description2: "À travers nos divers programmes, conférences et ressources en ligne, nous nous engageons à soutenir la croissance spirituelle et professionnelle des ministres à travers l'Afrique.",
        learnMore: "En Savoir Plus Sur Nous",
        yearsServing: "Années",
        servingMinistersText: "Au Service des Ministres",
      },
      streams: {
        title: "Regarder et Apprendre",
        heading: "Diffusions en Direct Vedettes",
        viewAll: "Voir Toutes les Diffusions",
      },
      programs: {
        title: "Événements à Venir",
        heading: "Programmes Vedettes",
        viewAll: "Voir Tous les Programmes",
      },
      cta: {
        heading: "Rejoignez Notre Communauté Ministérielle",
        description: "Connectez-vous avec des milliers de ministres à travers l'Afrique. Partagez des expériences, des ressources et grandissez ensemble dans votre parcours ministériel.",
        joinButton: "Rejoindre Notre Communauté Ministérielle",
        learnButton: "En Savoir Plus",
      },
    },
  },
  sw: {
    translation: {
      nav: {
        home: "Nyumbani",
        liveStreams: "Matangazo ya Moja kwa Moja",
        programs: "Programu",
        leadership: "Uongozi",
        duesPayment: "Malipo ya Ada",
        dashboard: "Dashibodi",
        signIn: "Ingia",
        logout: "Toka",
        language: "Lugha",
      },
      hero: {
        title: "Kuwezesha Mahudumu Kote Afrika",
        subtitle: "Kuunganisha, Kufundisha na Kusaidia Viongozi wa Kanisa Kote Bara",
        joinButton: "Jiunge na Jamii Yetu",
        learnButton: "Jifunze Zaidi",
        watchButton: "Tazama Moja kwa Moja",
      },
      about: {
        title: "Kuhusu IMF Afrika",
        heading: "Kuunganisha Mahudumu Kote Afrika",
        description1: "Jukwaa la Kimataifa la Mahudumu (IMF) Afrika ni jukwaa kuu ambalo linaunganisha mahudumu kote bara la Afrika. Tunatoa rasilimali, fursa za mtandao, na utajiri wa kiroho kusaidia mahudumu kuongoza kwa ufanisi makutano yao na kuathiri jamii zao.",
        description2: "Kupitia programu zetu mbalimbali, mikutano, na rasilimali za mtandaoni, tumejitolea kusaidia ukuaji wa kiroho na kitaaluma wa mahudumu kote Afrika.",
        learnMore: "Jifunze Zaidi Kutuhusu",
        yearsServing: "Miaka",
        servingMinistersText: "Kutumikia Mahudumu",
      },
      streams: {
        title: "Tazama na Jifunze",
        heading: "Matangazo ya Moja kwa Moja Yaliyochaguliwa",
        viewAll: "Ona Matangazo Yote",
      },
      programs: {
        title: "Matukio Yanayokuja",
        heading: "Programu Zilizochaguliwa",
        viewAll: "Ona Programu Zote",
      },
      cta: {
        heading: "Jiunge na Jamii Yetu ya Kihudumu",
        description: "Unganisha na maelfu ya mahudumu kote Afrika. Shiriki uzoefu, rasilimali na kukua pamoja katika safari yako ya huduma.",
        joinButton: "Jiunge na Jamii Yetu ya Kihudumu",
        learnButton: "Jifunze Zaidi",
      },
    },
  },
  yo: {
    translation: {
      nav: {
        home: "Ilé",
        liveStreams: "Àwọn Ìfihàn Làálàá",
        programs: "Àwọn Ètò",
        leadership: "Àṣẹ",
        duesPayment: "Ìsanwó Owó Ẹgbẹ́",
        dashboard: "Ìṣàkóso",
        signIn: "Wọlé",
        logout: "Jáde",
        language: "Èdè",
      },
      hero: {
        title: "Ìfúnni Àgbára fún Àwọn Òjíṣẹ́ Oníwàásù ní Afrika",
        subtitle: "Ìdapọ̀, Ìkọ́ni àti Àtìlẹyìn fún Àwọn Olùdarí Ìjọ ní Gbogbo Kọ́ntínẹ́ǹtì",
        joinButton: "Dara pọ̀ mọ́ Àwùjọ Wa",
        learnButton: "Kọ́ Síi",
        watchButton: "Wo Ìfihàn Làálàá",
      },
      about: {
        title: "Nípa IMF Afrika",
        heading: "Ìdapọ̀ Àwọn Òjíṣẹ́ Oníwàásù ní Afrika",
        description1: "Àjọ Òjíṣẹ́ Oníwàásù Àgbáyé (IMF) Afrika jẹ́ àpejúwe àkọ́kọ́ tí ó ń so àwọn òjíṣẹ́ oníwàásù pọ̀ ní gbogbo Afrika. A ń pèsè àwọn ohun ìlò, àwọn àǹfààní àjọpọ̀, àti ìdàgbàsókè ẹ̀mí láti ṣe ìrànlọ́wọ́ fún àwọn òjíṣẹ́ oníwàásù láti darí àwọn ìjọ wọn dáadáa kí wọn sì ní ipa lórí àwọn àgbègbè wọn.",
        description2: "Nípa àwọn ètò wa oríṣiríṣi, àwọn àpéjọ, àti àwọn ohun ìlò ori-íntànẹ́ẹ̀tì, a ti pinnu láti ṣe àtìlẹyìn fún ìdàgbàsókè ẹ̀mí àti ìmọ̀ àwọn òjíṣẹ́ oníwàásù ní gbogbo Afrika.",
        learnMore: "Mọ̀ Síi Nípa Wa",
        yearsServing: "Ọdún",
        servingMinistersText: "Ìṣiṣẹ́ fún Àwọn Òjíṣẹ́ Oníwàásù",
      },
      streams: {
        title: "Wo kí o sì Kọ́",
        heading: "Àwọn Ìfihàn Làálàá Tí a Yàn",
        viewAll: "Wo Gbogbo Àwọn Ìfihàn",
      },
      programs: {
        title: "Àwọn Ìṣẹ̀lẹ̀ Tó Ń Bọ̀",
        heading: "Àwọn Ètò Tí a Yàn",
        viewAll: "Wo Gbogbo Àwọn Ètò",
      },
      cta: {
        heading: "Dara pọ̀ mọ́ Àwùjọ Òjíṣẹ́ Oníwàásù Wa",
        description: "Ṣe àjọpọ̀ pẹ̀lú ẹgbẹẹgbẹ̀rún àwọn òjíṣẹ́ oníwàásù ní Afrika. Pín àwọn ìrírí, àwọn ohun ìlò, kí ẹ sì dàgbà papọ̀ nínú ìrìnàjò iṣẹ́ yín.",
        joinButton: "Dara pọ̀ mọ́ Àwùjọ Òjíṣẹ́ Oníwàásù Wa",
        learnButton: "Kọ́ Síi",
      },
    },
  },
  ig: {
    translation: {
      nav: {
        home: "Ụlọ",
        liveStreams: "Ihe Nkiri Ndụ",
        programs: "Mmemme",
        leadership: "Onyeisi",
        duesPayment: "Ịkwụ Ụgwọ Otu",
        dashboard: "Ọdụ Ụgbọ",
        signIn: "Banye",
        logout: "Pụọ",
        language: "Asụsụ",
      },
      hero: {
        title: "Inye Ndị Ozi Ike n'Afrika",
        subtitle: "Ijikọ, Ọzụzụ na Nkwado Ndị Ndu Ụka n'Akụkụ Niile",
        joinButton: "Sonye na Obodo Anyị",
        learnButton: "Mụta Ihe Ọzọ",
        watchButton: "Lee Ihe Nkiri Ndụ",
      },
      about: {
        title: "Gbasara IMF Afrika",
        heading: "Ijikọta Ndị Ozi n'Afrika",
        description1: "International Ministers Forum (IMF) Afrika bụ ikpo okwu kachasị elu nke na-ejikọta ndị ozi n'ofe kọntinent Afrika. Anyị na-enye akụrụngwa, ohere njikọ, na mmụba nke mmụọ iji nyere ndị ozi aka iji nway duru òtù ha nke ọma ma metụta obodo ha.",
        description2: "Site na mmemme anyị dị iche iche, nnọkọ, na akụrụngwa ịntanetị, anyị kwenyesiri ike ịkwado uto nke mmụọ na ọkachamara nke ndị ozi n'Afrika niile.",
        learnMore: "Mụtakwuo Gbasara Anyị",
        yearsServing: "Afọ",
        servingMinistersText: "Na-eje Ndị Ozi Ozi",
      },
      streams: {
        title: "Lee ma Mụta",
        heading: "Ihe Nkiri Ndụ Pụrụ Iche",
        viewAll: "Lee Ihe Nkiri Niile",
      },
      programs: {
        title: "Ihe Omume Na-abịa",
        heading: "Mmemme Pụrụ Iche",
        viewAll: "Lee Mmemme Niile",
      },
      cta: {
        heading: "Sonye na Obodo Ndị Ozi Anyị",
        description: "Jikọọ na ọtụtụ puku ndị ozi n'Afrika. Kekọrịta ahụmịhe, akụrụngwa ma too ọnụ na njem ozi gị.",
        joinButton: "Sonye na Obodo Ndị Ozi Anyị",
        learnButton: "Mụta Ihe Ọzọ",
      },
    },
  },
  ha: {
    translation: {
      nav: {
        home: "Gida",
        liveStreams: "Watsin Kai Tsaye",
        programs: "Shirye-shirye",
        leadership: "Jagoranci",
        duesPayment: "Biyan Kuɗi",
        dashboard: "Dashboard",
        signIn: "Shiga",
        logout: "Fita",
        language: "Harshe",
      },
      hero: {
        title: "Ƙarfafa Masu Wa'azi a Afrika",
        subtitle: "Haɗawa, Horarwa da Tallafawa Shugabannin Cocin a Duk Nahiyar",
        joinButton: "Ku Shiga Al'ummarmu",
        learnButton: "Koyi Ƙari",
        watchButton: "Kalli Kai Tsaye",
      },
      about: {
        title: "Game da IMF Afrika",
        heading: "Haɗa Masu Wa'azi a Afrika",
        description1: "Taron Masu Wa'azi na Duniya (IMF) Afrika babban dandali ne wanda ke haɗa masu wa'azi a duk nahiyar Afrika. Muna ba da kayan aiki, damar sadarwa, da wadatar ruhi don taimakawa masu wa'azi su jagoranci ikilisiyoyinsu da kyau kuma su yi tasiri a al'ummominsu.",
        description2: "Ta hanyar shirye-shiryenmu daban-daban, tarurruka, da kayan aikin yanar gizo, mun kuduri aniyar tallafawa ci gaban ruhi da kwararru na masu wa'azi a duk Afrika.",
        learnMore: "Koyi Ƙari Game da Mu",
        yearsServing: "Shekaru",
        servingMinistersText: "Hidimar Masu Wa'azi",
      },
      streams: {
        title: "Kalli da Koyo",
        heading: "Watsin Kai Tsaye na Musamman",
        viewAll: "Duba Duk Watsin",
      },
      programs: {
        title: "Abubuwan da ke Zuwa",
        heading: "Shirye-shirye na Musamman",
        viewAll: "Duba Duk Shirye-shiryen",
      },
      cta: {
        heading: "Ku Shiga Al'ummar Masu Wa'azinmu",
        description: "Ku haɗa da dubban masu wa'azi a Afrika. Raba gogewa, kayan aiki kuma ku yi girma tare a tafiyar aikinku.",
        joinButton: "Ku Shiga Al'ummar Masu Wa'azinmu",
        learnButton: "Koyi Ƙari",
      },
    },
  },
  // Extended African languages with basic navigation
  pt: { translation: { nav: { home: "Início", liveStreams: "Transmissões ao Vivo", programs: "Programas", leadership: "Liderança", duesPayment: "Pagamento de Taxas", dashboard: "Painel", signIn: "Entrar", logout: "Sair", language: "Idioma" } } },
  es: { translation: { nav: { home: "Inicio", liveStreams: "Transmisiones en Vivo", programs: "Programas", leadership: "Liderazgo", duesPayment: "Pago de Cuotas", dashboard: "Panel", signIn: "Iniciar Sesión", logout: "Cerrar Sesión", language: "Idioma" } } },
  ar: { translation: { nav: { home: "الرئيسية", liveStreams: "البث المباشر", programs: "البرامج", leadership: "القيادة", duesPayment: "دفع المستحقات", dashboard: "لوحة التحكم", signIn: "تسجيل الدخول", logout: "تسجيل الخروج", language: "اللغة" } } },
  am: { translation: { nav: { home: "መነሻ", liveStreams: "ቀጥታ ስርጭት", programs: "ፕሮግራሞች", leadership: "አመራር", duesPayment: "ክፍያ", dashboard: "ዳሽቦርድ", signIn: "ግባ", logout: "ውጣ", language: "ቋንቋ" } } },
  zu: { translation: { nav: { home: "Ikhaya", liveStreams: "Ukusakaza Ngqo", programs: "Izinhlelo", leadership: "Ubuholi", duesPayment: "Ukukhokha", dashboard: "Ideshibhodi", signIn: "Ngena", logout: "Phuma", language: "Ulimi" } } },
  rw: { translation: { nav: { home: "Mu Rugo", liveStreams: "Itangazamakuru", programs: "Gahunda", leadership: "Ubuyobozi", duesPayment: "Kwishyura", dashboard: "Imbonerahamwe", signIn: "Injira", logout: "Gusohoka", language: "Ururimi" } } },
  so: { translation: { nav: { home: "Guriga", liveStreams: "Toos Toos", programs: "Barnaamijyada", leadership: "Hoggaanka", duesPayment: "Lacag Bixinta", dashboard: "Dashboard", signIn: "Gal", logout: "Ka Bax", language: "Luqadda" } } },
  mg: { translation: { nav: { home: "Fandraisana", liveStreams: "Fampielezana Mivantana", programs: "Fandaharana", leadership: "Fitarihana", duesPayment: "Fandoavam-bola", dashboard: "Dashboard", signIn: "Hiditra", logout: "Hivoaka", language: "Fiteny" } } },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

// Keep <html lang> and dir in sync for SEO and accessibility
const rtlLangs = ["ar", "fa", "he", "ur"];
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
    document.documentElement.dir = rtlLangs.includes(lng) ? "rtl" : "ltr";
  }
});

export default i18n;
