import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Mappa from "./Mappa";

import { stack as Menu } from "react-burger-menu";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu left>
        <NavLink
          className="menu-item"
          exact
          to="/"
          exact
          style={{
            color: "#6c442b",
            textDecoration: "none"
          }}
        >
          HOME
        </NavLink>
        <NavLink
          className="menu-item"
          to="/prodotti"
          style={{ color: "#6c442b", textDecoration: "none" }}
        >
          PRODOTTI
        </NavLink>
        <NavLink
          className="menu-item"
          to="/storia"
          style={{ color: "#6c442b", textDecoration: "none" }}
        >
          CHI SIAMO
        </NavLink>
        <NavLink
          className="menu-item"
          to="/contatti"
          style={{ color: "#6c442b", textDecoration: "none" }}
        >
          CONTATTI
        </NavLink>
        <Social />
      </Menu>
    );
  }
}

var isMenuOpen = function(state) {
  return state.isOpen;
};

const products = [
  {
    nome: "Caciotta Dolce",
    latte: "Latte vaccino crudo intero",
    stagionatura: "10 - 30 giorni",
    foto: "/immagini/prodotti/Caciotta_1.jpg",
    descrizione:
      "DESCRIZIONE: Pezzature piuttosto piccole, con crosta leggermente paglierina. Da consumarsi fresca, ha una pasta morbida, a volte quasi cremosa con occhiatura rada ma ben distribuita. <br /><br />CONSUMO: Per il suo sapore di latte si gusta volentieri con pane fresco sia all’inizio che alla fine del pasto. <br /><br />ABBINAMENTI: E' deliziosa accompagnata con mieli castagno, marmellata di fragola o di frutti rossi (in particolare amarene) e fichi. Da abbinare a vini leggeri e delicati come un buon Pinot Grigio dei Colli Berici.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Caciotta Fresca",
    latte: "Latte vaccino crudo intero",
    stagionatura: "da consumarsi freschissimo",
    foto: "/immagini/prodotti/Caciotta_fresca_bn_1.jpg",
    descrizione:
      "DESCRIZIONE: Formaggio a pasta morbida, elastica e crosta bianca. <br /><br />CONSUMO: Per il suo gusto fresco e delicato è indicato nella preparazione di piatti estivi e leggeri. <br /><br />ABBINAMENTI: Si abbina a vini bianchi e secchi ma leggeri come il  Sauvignon o il Garganego dei colli Berici. Ottimo con miele di castagno, marmellata di fichi, di pomodori verdi o confettura di zucca.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Caciotta speziata ai sapori regionali e stagionali",
    latte: "Latte vaccino crudo intero",
    stagionatura: "10 - 15 giorni",
    foto: "/immagini/prodotti/Caciotta_spezie_1.jpg",
    descrizione:
      "DESCRIZIONE: Pezzature piuttosto piccole, con crosta leggermente paglierina. Ci piace aggiungere alla caciotta tutto ciò che ci regala la natura con le sue stagioni: in autunno e inverno il radicchio, la zucca, il pepe, le noci, i pistacchi e il gustoso Rampuzzolo di Villaga De.Co. In primavera i fiori di tarassaco, le viole, l’aglio orsino, i carletti o altre erbe e germogli spontanei che troviamo sui colli. In estate trovate le caciotte ai gusti menta e timo, provenzale, al tartufo, al classico peperoncino o all’erba cipollina. Ha una pasta morbida, a volte quasi cremosa con occhiatura rada ma ben distribuita. <br /><br />CONSUMO: Da consumarsi fresca.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Murlone",
    latte: "Latte vaccino intero",
    stagionatura: "da 20 a 40 giorni",
    foto: "/immagini/prodotti/Murlone_bn_1.jpg",
    descrizione:
      "DESCRIZIONE: Formaggio grasso a pasta molle e crosta lavata. Il taleggio pronto per il consumo ha una crosta rugosa di colore rosato, con morchia morbida e sottile. Vicino alla crosta la pasta è fondente e di colore paglierino mentre risulta più consistente, friabile e bianca nel centro. E’ un formaggio dal sapore dolce e delicato con sfumature aromatiche. A maturazione avanzata, il gusto si fa invece decisamente piccante. <br /><br />CONSUMO: Ottimo da solo o fuso su gnocchi o polenta. <br /><br />ABBINAMENTI: Da abbinare ad un buon vino rosso tipo Merlot o il Tocai rosso di Barbarano. Consigliamo inoltre di abbinarlo a salse come marmellata di pomodori verdi o di arancia.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Montegnago: tipo mezzano con curcuma",
    latte: "Latte vaccino intero",
    stagionatura: "circa 6 mesi",
    foto: "/immagini/prodotti/Montegnago_1.jpg",
    descrizione:
      "DESCRIZIONE: Viene lavorato a pasta semicotta. La pasta si presenta di colore giallo acceso per la presenza di Curcuma nella lavorazione. L’occhiatura è di media dimensione regolare ma molto rada. Al gusto leggermente piccante del formaggio si aggiunge quello esotico della curcuma. <br /><br />CONSUMO: Il Montegnago è ottimo d’estate nelle insalate di riso o di pasta, nei mesi freddi è buono leggermente fuso o nelle bruschette. <br /><br />ABBINAMENTI: Si abbina molto bene ad un rosso leggero e frizzantino o a della birra fruttata.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Pasta filata",
    latte: "Latte vaccino crudo intero",
    stagionatura:
      "Mozzarella, Burrata, Stracciatella sono fresche. Scamorza ha una stagionatura di 30 giorni",
    foto: "/immagini/prodotti/Mozzarella_bn_1.jpg",
    descrizione:
      "DESCRIZIONE: Pasta consistente e filosa di colore bianco latte e forma tendenzialmente a sfera. Il sapore è quello del latte fresco ed è indicata cruda per diversi piatti estivi a base di vedure: primo fra tutti la caprese. <br /><br />CONSUMO: E' un formaggio molto versatile in cucina per il suo gusto delicato che si accompagna a diversi sapori. Ottimo da mangiare fresco con un filo d’olio extravergine, oppure, ovviamente, nella pizza.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Spineo: Tipo Asiago dolce",
    latte: "Latte vaccino intero",
    stagionatura: "da 40 a 60 giorni",
    foto: "/immagini/prodotti/Spineo_1.jpg",
    descrizione:
      "DESCRIZIONE: E' un formaggio grasso, ricco di occhiature, sparse uniformemente nel corpo del formaggio. Il sapore è dolce, gradevole, con retrogusto e aroma di noce, mai amaro o piccante. <br /><br />CONSUMO: Con la polenta, il pane croccante o con gli gnocchi. Ottimo inoltre con marmellate di fichi, frutti rossi, arance, mele o con salsa di radicchio. <br /><br />ABBINAMENTI: Il vino in abbinamento dovrà, con delicata discrezione, riuscire a sposarsi con sensazioni gustative piuttosto leggere. Sarà un vino non troppo esuberante nei profumi o nel gusto, come, ad esempio, un Gambellara giovane, o un buon Colli Berici Tocai rosso di Barbarano.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Crò: Tipo Asiago Mezzano",
    latte: "Latte vaccino intero",
    stagionatura: "circa 6 mesi",
    foto: "/immagini/prodotti/Cro_1.jpg",
    descrizione:
      "DESCRIZIONE: Viene lavorato a pasta semicotta. La pasta si presenta di colore paglierino carico, tendente all’ocra e l’occhiatura di media dimensione ha forma e diffusione irregolari. Al naso si avvertono lievi sensazioni di tostato e di pascolo ed in bocca la consistenza è leggermente elastica con sapore dolce che termina con note di frutta fermentata. <br /><br />ABBINAMENTI: Per l’asiago mezzano, in cui i sapori sono più profondi e persistenti, si potrebbe pensare ad un abbinamento con il Bianco Breganze. Come per l’asiago fresco anche questo formaggio si sposa bene con marmellate di frutti rossi, fichi, arance e mele.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Cengia: Tipo Asiago Stagionato",
    latte: "Latte vaccino intero",
    stagionatura: "da 9 mesi fino ad un anno",
    foto: "/immagini/prodotti/Cengia_1.jpg",
    descrizione:
      "DESCRIZIONE: La crosta si presenta asciutta e spessa. La pasta è dura, granulosa, di colore paglierino carico, con occhiatura piccola e regolare nella forma e nella diffusione. Il profumo ricorda in maniera decisa il pascolo e la frutta secca (noci, nocciole). <br /><br />ABBINAMENTI: La dolcezza del vino, in contrapposizione alla sensazione piccante diventa un’esperienza esaltante. Si potrebbe pensare dunque ad un vino appassito, che con la sua morbidezza donerà ai sensi un piacevole sollievo dagli spilli pungenti del formaggio. Ottimo se abbinato con miele di castagno e salsa di cipolle rosse.",
    traduzione: "English translation goes here"
  },

  {
    nome: "Ricotta",
    latte:
      "Non si tratta di un formaggio, ma di un sottoprodotto della lavorazione del latte; si ottiene dal siero rimasto dalla produzione del formaggio. ",
    stagionatura: "Fresca",
    foto: "/immagini/prodotti/Ricotta_bn_1.jpg",
    descrizione:
      "DESCRIZIONE: Esteticamente è priva di crosta, è di colore bianchissimo ed ha una consistenza soffice ma asciutta, quasi granulosa. Il sapore è dolce con un tenue retrogusto salato. Per la sua composizione è considerato  un formaggio” magro. <br /><br />CONSUMO: E' ottima mangiata fresca, accompagnata da verdure di stagione. Si utilizza nella preparazione di numerosi piatti: antipasti sfiziosi, torte salate, primi piatti tradizionali e dolci di ogni tipo, dalle frittelle alle torte pasquali. <br /><br />ABBINAMENTI: Ottima se abbinata al miele d’arancio o alla confettura di mele o more. Consigliato il fresco e leggero Colli Berici Tocai Rosso di Barbarano, un vero tuttofare”con i nostri formaggi del vicentino.",
    traduzione: "English translation goes here"
  }
  /*
  {
    nome: "Tosella",
    latte: "Latte vaccino intero ",
    stagionatura: "fresco",
    foto: "/immagini/prodotti/.jpg",
    descrizione:
      "DESCRIZIONE: Pasta compatta, colore bianchissimo ed una consistenza moderatamente elastica. Il gusto ovviamente, è quello del latte appena munto. <br /><br />CONSUMO: È un formaggio da consumare freschissimo, al massimo entro 2 o 3 giorni. Si può mangiare sia fresco con un filo d’olio, ma è ottimo anche cotto alla piastra o fritto con impanatura.",

    traduzione: "English translation goes here"
  }

  {
    nome: "Caciotta stagionata",
    latte: "Latte vaccino intero",
    stagionatura: "",
    foto: "/immagini/prodotti/Caciotta_stagionata_1.jpg",
    descrizione: " ",

    traduzione: "English translation goes here"
  },

  {
    nome: "Scamorza",
    latte: "Latte vaccino crudo intero",
    stagionatura: "30 giorni",
    foto: "/immagini/prodotti/Scamorza_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  },

  {
    nome: "Burrata",
    latte: "Latte vaccino crudo intero",
    stagionatura: "fresca",
    foto: "/immagini/prodotti/Burrata_bn_1.jpg",
    descrizione: " ",

    traduzione: "English translation goes here"
  },

  {
    nome: "Ricotta Affumicata",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Ricotta_affumicata_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  },

 

  {
    nome: "Stracchino",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Stracchino_bn_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  },

  {
    nome: "Topolino",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Topolino_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  },

  {
    nome: "Biancaneve",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Biancaneve_bn_1.jpg",
    descrizione: " ",

    traduzione: "English translation goes here"
  },

  {
    nome: "Ubriaco",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Ubriaco_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  },

  {
    nome: "Yogurt",
    latte: "Latte ",
    stagionatura: "",
    foto: "/immagini/prodotti/Yogurt_bn_1.jpg",
    descrizione: "",

    traduzione: "English translation goes here"
  }*/
];

function Pagine() {
  return (
    <div>
      <nav id="pagine">
        <NavLink
          className="page_button"
          exact
          to="/"
          activeStyle={{
            color: "#6c442b",
            backgroundColor: "#f5efea"
          }}
        >
          HOME
        </NavLink>
        <NavLink
          className="page_button"
          to="/prodotti"
          activeStyle={{
            color: "#6c442b",
            backgroundColor: "#f5efea"
          }}
        >
          PRODOTTI
        </NavLink>
        <NavLink
          className="page_button"
          to="/storia"
          activeStyle={{
            color: "#6c442b",
            backgroundColor: "#f5efea"
          }}
        >
          CHI SIAMO
        </NavLink>
        <NavLink
          className="page_button"
          to="/contatti"
          activeStyle={{
            color: "#6c442b",
            backgroundColor: "#f5efea"
          }}
        >
          CONTATTI
        </NavLink>
      </nav>
    </div>
  );
}

function Social() {
  return (
    <div id="socials">
      <Link to="" target="_blank">
        <img className="socialIcon" src="/immagini/icone/icona_ig.png" />
      </Link>
      <Link to="https://www.facebook.com/saporidimontegnago/" target="_blank">
        <img className="socialIcon" src="immagini/icone/icona_fb.png" />
      </Link>
    </div>
  );
}

function Header() {
  return (
    <div id="header">
      <Link className="headerBox" to="/">
        <img id="logo_header" src="immagini/logo.png" />
      </Link>
      <div className="headerBox">
        <Pagine />
      </div>
      <div className="headerBox">
        <Social />
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <div id="mobile_header">
      <div id="burger-button">
        <Burger onStateChange={isMenuOpen} />
      </div>
      <main id="page-wrap"></main>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer">
      <img id="logo_footer" src="immagini/logo.png" />
      <Pagine />
      <div id="contacts_footer" className="flex">
        <p>+39 0444 891374</p>
        <p id="dot">·</p>
        <p>caseificiosaporidimontegnago@gmail.com</p>
      </div>
      <Social />
      <div id="bottom" className="flex">
        <p>© 2019 Caseificio Sapori di Montegnago</p>
        <p>
          Sito realizzato da&nbsp;
          <Link id="designer" to="norapiva.com">
            Nora Piva
          </Link>
        </p>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div id="card">
      <img id="foto_prodotto" src={product.foto} />

      <section className="descrizione">
        <h3>{product.nome}</h3>
        <h4>{product.latte}</h4>
        <p>STAGIONATURA: {product.stagionatura}</p>
        <p dangerouslySetInnerHTML={{ __html: product.descrizione }} />
      </section>

      <section className="descrizione inglese">
        <p>{product.traduzione}</p>
      </section>
    </div>
  );
}

// These are all the pages

function Home() {
  return (
    <div>
      <div className="contenuto home">
        <img id="logo_home" src="immagini/logo.png" />
        <div>
          <section id="scroll_button" class="demo">
            <a href="#pages">
              <span />
            </a>
          </section>
          <img id="foto_home" src="immagini/home/Mucche.jpg" />
        </div>
        <section id="pages" className="flex">
          <Link className="front" to="/prodotti">
            <img src="immagini/home/Prodotti.jpg" />
            <h1>I nostri prodotti</h1>
          </Link>
          <Link className="front" to="/storia">
            <img src="immagini/home/Storia.jpg" />
            <h1>La nostra storia</h1>
          </Link>
          <Link className="front" to="/contatti">
            <img src="immagini/home/Contatti.jpg" />
            <h1>Contattaci</h1>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function Storia() {
  return (
    <div>
      <section className="flex">
        <Header />
        <MobileHeader />
        <dev className="contenuto">
          <img className="foto foto_top" src="immagini/Mucca_bn_3.jpg" />
          <div className="flex">
            <div className="column">
              <h3>La storia della nostra famiglia</h3>
              <h4>
                "Da sempre il nostro obiettivo è quello di allevare il bestiame
                ricercando le migliori soluzioni per garantire salute, vitalità
                e benessere alle nostre vacche."
              </h4>
              <p>
                La nostra storia nizia nel 1958, quando la famiglia Castagna si
                trasferisce nella piccola località di Belvedere (VI) e inizia la
                sua attività con poche mucche, qualche capra e tanta buona
                volontà. Achille e Costanza, spinti da una grande passione per
                le vacche da latte, decidono di costruire una nuova stalla a
                stabulazione libera e una moderna sala mungitura. Nel 1985 il
                figlio Dino termina gli studi ed entra a far parte attiva
                dellʼazienda, Oggi lʼazienda conta 55 frisone in lattazione e
                stiamo attivando la certificazione del “Benessere animale”.
              </p>
              <img className="foto" src="immagini/Michela_e_Dino_1.jpg" />
            </div>

            <div className="column">
              <h3>Il caseificio</h3>
              <p>
                Dal 2012 Michela, moglie di Dino, garantisce la produzione di
                formaggio a latte crudo nel piccolo caseificio di fianco alla
                stalla, dove cʼè tutto il necessario per trasformare il latte in
                formaggio e venderlo nello spaccio aziendale e presso mercati
                locali. Dal 2019 collaborano alla produzione e alla vendita dei
                formaggi due giovani casare, Elisa ed Anna, che, dopo varie
                esperienze in malga e in fattorie allʼestero, hanno deciso di
                tornare nella loro terra di origine.
              </p>
              <img className="foto" src="immagini/Annin_Elisa.jpg" />
              <h4>
                "La scelta di non sottoporre il latte a trattamenti termici mira
                a conservare sapore, aroma e qualità insuperabili. Inoltre,
                mantenendo vivi i fermenti lattici originari, si conserva la
                tipicità e la territorialità del latte, che passa dalla stalla
                direttamente in caldaia."
              </h4>
            </div>
          </div>
          <div className="foto flex">
            <img className="foto_storia" src="immagini/Mucca_bn_1.jpg" />
            <img className="foto_storia" src="immagini/Mucca_bn_2.jpg" />
          </div>
          <div id="missione">
            <h3>la nostra missione</h3>
            <h4>
              "Vogliamo offrire e promuovere un concetto di alimentazione sana e
              genuina, <br />
              rispettosa del benessere dei nostri animali, ecosostenibile e
              buona da gustare."
            </h4>
            <p>
              La passione per il nostro lavoro, la terra e gli animali, la
              semplicità di una cultura tradizionale, l’accurata scelta e
              produzione delle materie prime, la sensibilità nei riguardi
              dell’ambiente e della sicurezza alimentare, <br />
              sono il nostro punto di forza per poter offrire qualità e
              genuinità dei prodotti, cortesia e disponibilità verso i clienti.
              <br /> <br />
              Per tutti questi motivi saremo sempre disponibili a farvi visitare
              la fattoria che si trova nello stesso sito del caseificio
              e potrete anche vedere la lavorazione del formaggio.
            </p>
          </div>

          <div className="foto flex">
            <img className="foto_storia" src="immagini/fb_1.jpg" />
            <img className="foto_storia" src="immagini/Caseificio_2.jpg" />
          </div>
        </dev>
      </section>
      <Footer />
    </div>
  );
}

function Prodotti(props) {
  return (
    <div>
      <section className="flex">
        <Header />
        <MobileHeader />
        <div className="contenuto">
          <section className="flex">
            {products.map(r => (
              <ProductCard product={r} />
            ))}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Contatti() {
  return (
    <div>
      <section className="flex">
        <Header />
        <MobileHeader />
        <div className="contenuto">
          <img
            className="foto foto_top"
            src="immagini/La_Campagnola_1_crop.jpg"
          />
          <section id="contatti">
            <h3>Contatti</h3>
            <div className="flex">
              <div className="info third">
                <h5>Telefono: </h5>
                <h6>+39 0444 891374</h6>
                <h5>E-mail: </h5>
                <h6>caseificiosaporidimontegnago@gmail.com</h6>
                <h5>orari:</h5>
                <h6>
                  <table>
                    <tr>
                      <th>Lunedi: </th>
                      <td>chiuso</td>
                    </tr>
                    <tr>
                      <th>martedi: </th>
                      <td>8:30-12:30, 15:30-19:30</td>
                    </tr>
                    <tr>
                      <th>mercoledi: </th>
                      <td>8:30-12:30, 15:30-19:30</td>
                    </tr>
                    <tr>
                      <th>giovedi: </th>
                      <td>8:30-12:30, 15:30-19:30</td>
                    </tr>
                    <tr>
                      <th>venerdi: </th>
                      <td>8:30-12:30, 15:30-19:30</td>
                    </tr>
                    <tr>
                      <th>sabato: </th>
                      <td>8:30-12:30, 15:30-19:00</td>
                    </tr>
                    <tr>
                      <th>domenica: </th>
                      <td>chiuso</td>
                    </tr>
                  </table>
                </h6>
              </div>
              <div className="info map">
                <h5>Indirizzo: </h5>
                <h6>Via A. Palladio, 1, 36040 Sossano (VI) Italy</h6>
                <div id="mappa">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.4711498637535!2d11.532756915467726!3d45.3796658791001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f3d2806887ef9%3A0x1232f3ef1657ec1a!2sCaseificio%20Sapori%20di%20Montegnago%20Azienda%20Agricola%20La%20Campagnola%20Di%20Castagna%20S.S.!5e0!3m2!1sit!2suk!4v1571234195789!5m2!1sit!2suk"
                    style={{ border: "none", width: "100%", height: "100%" }}
                  ></iframe>
                </div>
              </div>
              <div className="info mercati">
                <h5>Mercati: </h5>
                <h6>
                  Mercato Coperto di Campagna Amica in Stradella del Garofolino,
                  18, 36100 Vicenza (VI)
                </h6>
                <h6>
                  <table>
                    <tr>
                      <th>sabato: </th>
                      <td>8:30-13:30</td>
                    </tr>
                    <tr>
                      <th>domenica: </th>
                      <td>9:00-13:00</td>
                    </tr>
                  </table>
                </h6>
              </div>
            </div>
          </section>
          <div id="cit" className="flex foto">
            <img className="foto_storia" src="immagini/Orari_caseificio.jpg" />
            <h4 className="foto_storia citazione">
              "Abbiamo chiamato il Caseificio 'Sapori di Montegnago' per dare
              risalto alla storia del nostro piccolo paese, <br />
              oggi 'Belvedere di Villaga' ma un tempo denominato proprio
              Montegnago."
            </h4>
          </div>
          <section id="form">
            <h3>ORDINA I NOSTRI FORMAGGI:</h3>
            <form
              className="info"
              action="mailto: caseificiosaporidimontegnago@gmail.com, trento.an@gmail.com"
              method="post"
              enctype="text/plain"
            >
              <div className="form-input">
                <label for="name">NOME:</label>
                <input type="text" name="name" />
              </div>
              <div className="form-input">
                <label for="mail">E-MAIL:</label>
                <input type="email" name="email" />
              </div>
              <div className="form-input">
                <label for="msg">MESSAGGIO:</label>
                <textarea name="message" />
              </div>
              <div>
                <button type="submit">INVIA</button>
              </div>
            </form>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// This is the website component

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />

        <Route path="/storia" component={Storia} />

        <Route path="/prodotti" component={Prodotti} />

        <Route path="/contatti" component={Contatti} />
      </div>
    </Router>
  );
}

export default App;
