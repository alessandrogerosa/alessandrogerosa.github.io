
const currentUrl = window.location.href;
const siteUrl = "https://alessandrogerosa.github.io"; 
let updatedUrl = currentUrl.replace("https://alessandrogerosa.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("it".length > 0) {
  updatedUrl = updatedUrl.replace("/it", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "Menu di navigazione",
    handler: () => {
      window.location.href = "/it/";
    },
  },{id: "nav-libreria",
          title: "libreria",
          description: "",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "Articoli e appunti su cosa accade nel mondo e nella mia vita",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/blog/";
          },
        },{id: "nav-progetti",
          title: "progetti",
          description: "Una sintesi dei miei progetti di ricerca a cui ho e sto lavorando.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/projects/";
          },
        },{id: "nav-pubblicazioni",
          title: "pubblicazioni",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/publications/";
          },
        },{id: "nav-l-39-economia-hipster",
          title: "L&#39;economia hipster",
          description: "",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/the-hipster-economy/";
          },
        },{id: "nav-didattica",
          title: "didattica",
          description: "",
          section: "Menu di navigazione",
          handler: () => {
            window.location.href = "/it/teaching/";
          },
        },{id: "books-la-resistenza-delle-donne",
          title: 'La Resistenza delle Donne',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/resistenza_donne/";
            },},{id: "books-eolie-enoiche",
          title: 'Eolie Enoiche',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/eolie_enoiche/";
            },},{id: "books-adieux",
          title: 'Adieux',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/Adieux/";
            },},{id: "books-le-belle-immagini",
          title: 'Le belle immagini',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/belle_immagini/";
            },},{id: "books-bravo-brontosauro",
          title: 'Bravo brontosauro',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/bravo_brontosauro/";
            },},{id: "books-capital-et-idéologie-en-bande-dessinée",
          title: 'Capital et Idéologie en bande dessinée',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/capital_ideologie/";
            },},{id: "books-i-dannati-della-terra",
          title: 'I dannati della terra',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/dannati_della_terra/";
            },},{id: "books-critique-of-dialectical-reason-volume-one",
          title: 'Critique of Dialectical Reason, Volume one',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/dialectical_reason_1/";
            },},{id: "books-critique-of-dialectical-reason-volume-two",
          title: 'Critique of Dialectical Reason, Volume two',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/dialectical_reason_2/";
            },},{id: "books-interesting-times",
          title: 'Interesting times',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/interesting_times/";
            },},{id: "books-jingo",
          title: 'Jingo',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/jingo/";
            },},{id: "books-da-leccarsi-i-baffi",
          title: 'Da leccarsi i baffi',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/leccarsi_baffi/";
            },},{id: "books-nation",
          title: 'Nation',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/the_nation/";
            },},{id: "books-un-viaggio-inutile",
          title: 'Un viaggio inutile',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/un_viaggio_inutile/";
            },},{id: "books-lo-sconosciuto",
          title: 'Lo Sconosciuto',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/lo_sconosciuto/";
            },},{id: "books-poison-river",
          title: 'Poison River',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/poison_river/";
            },},{id: "books-poison-river",
          title: 'Poison River',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/Human_diastrophism/";
            },},{id: "books-furore",
          title: 'Furore',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/furore/";
            },},{id: "books-hanno-ucciso-habibi",
          title: 'Hanno ucciso habibi',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/ucciso_habibi/";
            },},{id: "books-la-vita-meravigliosa",
          title: 'La vita meravigliosa',
          description: "",
          section: "",handler: () => {
              window.location.href = "/it/books/it/vita_meravigliosa/";
            },},{id: "news-il-mio-articolo-accademico-the-role-of-proximity-coworking-spaces-in-the-post-pandemic-platform-urbanism-è-stato-pubblicato-su-polity-and-space-leggi-il-pre-print-qui",
          title: 'Il mio articolo accademico The role of proximity coworking spaces in the post-pandemic...',
          description: "",
          section: "Novità",},{id: "news-una-nuova-recensione-accademica-del-mio-libro-the-hipster-economy-è-stata-pubblicata-su-anthropological-forum",
          title: 'Una nuova recensione accademica del mio libro “The Hipster Economy” è stata pubblicata...',
          description: "",
          section: "Novità",},{id: "news-una-nuova-recensione-accademica-del-mio-libro-the-hipster-economy-è-stata-pubblicata-su-administrative-science-quarterly",
          title: 'Una nuova recensione accademica del mio libro “The Hipster Economy” è stata pubblicata...',
          description: "",
          section: "Novità",},{id: "projects-comunicazione-e-cultura-digitale",
          title: 'Comunicazione e Cultura Digitale',
          description: "",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/ccd/";
            },},{id: "projects-datafied-society",
          title: 'Datafied Society',
          description: "",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/datafied/";
            },},{id: "projects-piattaforme-digitali-e-algoritmi",
          title: 'Piattaforme digitali e algoritmi',
          description: "",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/it/digcult/";
            },},{id: "projects-autenticità-e-neo-artigianato",
          title: 'Autenticità e neo-artigianato',
          description: "",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/it/neocraft/";
            },},{id: "projects-immaginari-e-processi-urbani",
          title: 'Immaginari e processi urbani',
          description: "",
          section: "Progetti",handler: () => {
              window.location.href = "/it/projects/it/urbim/";
            },},{
        id: 'social-email',
        title: 'Invia una mail',
        section: 'Social Media',
        handler: () => {
          window.open("mailto:%61%6C%65%73%73%61%6E%64%72%6F.%67%65%72%6F%73%61@%75%6E%69%6D%69.%69%74", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Social Media',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1291-2923", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Social Media',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Social Media',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EOVVjhkAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Social Media',
        handler: () => {
          window.open("https://twitter.com/gerry_sasha", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'Lingue',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambia lo stile in chiaro',
      description: 'Visualizza il sito con lo sfondo scuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambia lo stile in scuro',
      description: 'Visualizza il sito con lo sfondo scuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa lo stile predefinito',
      description: 'Visualizza il sito con lo sfondo predefinito',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
