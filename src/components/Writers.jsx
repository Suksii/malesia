import React from 'react';
import {motion} from "framer-motion";
const Writers = () => {

    const writers = [
        {
            name: 'Ruždija Adžović',
            profession: 'književnik',
            bio: <div>Tuzi su mali grad koji je iznjedrio dosta poznatih pisaca, kako starije , tako i mlađe generacije. Kroz ovu aktivnost mi cemo predstaviti jednog pisca starije generacije. To je Ruždija Adžović, novinar, publicista i književnik rođen je 23. januara 1962. godine u Podgorici. U Sarajevu je završio Fakultet političkih nauka – Odsjek žurnalistika. Od 1986. godine je profesionalni novinar. Trinaest godina je radio na Radiju Crne Gore. Pisao je za mnoge časopise i dnevne listove širom bivše Jugoslavije. Radio je “Večernjim novinama”, “Jutarnjim novinama”, “Nezavisnim novinama”, bio je zamjenik glavnog urednika dnevnih listova “BH Dnevnik” i “AS”, urednik u “Dnevnim avazu”, te urednik biznis magazina “Banke”. Ruždija Adžović je zastupljen u biografskom leksikonu “Ko je ko u Bosni i Hercegovini” te u leksikonu “Bošnjaci/Muslimani Crne Gore”. Dobio je Nagradu opštine Tuzi za 2019. godinu za doprinos afirmaciji temeljnih stvaralačkih vrijednosti značajnih za opštinu Tuzi i šire, u književnoj, novinarskoj i publicističkoj djelatnosti. Do sada je objavio pet knjiga. Njegov roman “Ogrlica iz Šanliurfe” je 2021. godine preveden na turski jezik i objavljen u Ankari. Ruždija Adžović je i muzičar i muzički stvaralac, a bavi se i slikarstvom. Od 2000. godine, sa suprugom Dudom, sinom Mirzom i kćerkom Aidom živi u Sarajevu.<br/>Najznačajina djela su mu: „Merhamet – 100 godina“ (Monografija), Amos Graf, Sarajevo, 2013.  „Ogrlica iz Šanliurfe“ (Roman), Amos Graf, Sarajevo, 2014. “Kilibarda – Sarajevski dani”, Centar za kulturu – Bihor, Podgorica, 2014.  “Sebijini snovi” (Pripovijetke), Amos Graf, Sarajevo, 2017. “Tunjo – Razgovori s Muhamedom Filipovićem”, Buybook, Sarajevo, 2021. Autor djela je posebno naglasio da mu je jedna od najdražih nagrada upravo ova koju su mu dodijelili njegovi sugrađani, o kojoj kaže sledeće; To mi je najdraža nagrada koju sam dobio u mojoj dugogodišnjoj novinarskoj i književnoj karijeri. To je, kako volim reći, nagrada sa mirisom zavičaja, i to njoj daje posebnu težinu, poseban značaj. Veoma sam srećan što me moji sugrađani nisu zaboravili, a, bogami, ni ja njih – ima ih u mojim knjigana, mojim pričama, u mojim novinskim tekstovima. Čak sam Tuzima posvetio i jednu svoju pjesmu koja je postala svojevrsna himna Tuzi i stalno se izvodi na manifestacijama. Dakle, ljubav između Tuzi, Malesije i mene i danas traje i srećan sam zbog toga. Našu vezu je ovjekovječila i krunisala nagrada. Autor je posvetio jednu pjesmu  Crnoj Gori. Zove se “Goro Čarna”, a snimljena je na svom posljednjem albumu legendarni Mili Knežević, koji, nažalost, nije više s nama.Naslovna pripovijetka „Sebijini snovi“, po kojoj i knjiga nosi naziv je priča o sudbinama žena iz Tuzi i žena u Crnoj Gori.   Autor obrazlaže problematiku pripovjetke na sledeći način; Gotovo svaka pripovijetka u mojoj knjizi posvećena je sudbinama  žena u Tuzima, Crnoj Gori, ali i Bosni i Hercegovini, jer je, pogotovo u patrijarhalnim vremenima i prostorima, život žena bio sličan “kao jaje jajetu”. Recimo, naslovna pripovijetka “Sebijini snovi” posvećena je djevojkama iz Malesije koje su, uz želju roditelja da ih dobro udome i da imaju lijep život, završile u Americi, udavši se za nekog svog mještanina koji se njenim roditeljima predstavio kao uspješan biznismen i bogataš u dalekoj “zemlji snova”. Međutim, ispostavi se da je istina potpuno drugačija. I, umjesto srećnog života, te nesrećne djevojke u Americi dočeka pakao.</div>,
            place: 'Tuzi',
            autor: 'Senad Drešević'
        },
        {
            name: 'Mark Pashku Lucgjonaj',
            profession: 'književnik',
            bio: <div>U okviru ovog projekta imamo kniževnika mlađe generacije, koji je dao veliki doprinos književnom stvaralaštvu na prostoru Malesije. Riječ je o Marku Pashku Lucgjonaju. On je jedan od onih pisaca koji su spremni da ukrštaju žanrove ali i jedan od onih koji u svoje propovijedanje uključuju različita iskustva. Njegovi romani čine dobro promišljene dijaloge i veoma zanimljivi zapleti. Ono što Mark uvodi u svoj diskurs jesu pitanja savremenog čovjeka koji je rastrgan izmedju tradicije i savremenog načina života, kao i pitanje etičkih dilema i odnosa među ljudima. Mark spada među najplodonosnijim piscima mlađe generacije sa teritorije Tuzi. Mark Pashku Lucgjonaj je pisac iz Tuzi, rođen je u Podgorici,30 avgusta 1986.godine. Osnovno i srednje obrazovanje obrazovanje završio u Tuzima, a studije albanskog jezika i književnosti na Univerzitetu u Prištini, gdje je od druge godine uz stipendiju, studirao i političke nauke i diplomatiju. Završio postdiplomske studije na Univerzitetu,,Luigj Gurakuqi,, u Skadru u naučnoj oblasti Etnologija i književnost gdje je odbranio tezu. <br/>
                Objavljena djela:
                <ul>
                    <li>Prvu i jedinu poetsku zbirku na dva jezika , albanskom i crnogorskom, pod nazivom Buka misli, objavio je 2014 godine.</li>
                    <li>Roman na albanmskom ,,Fshati i heshjes,, - ,,Selo ćutnje,, objavljen je 2016 godine.</li>
                    <li>Drugi roman na albanskom jeziku ,,Ligji i Maskave,, - ,,Zakon maske,, objavljen je 2016 godine.</li>
                    <li>Roman ,,Gubitak,, - ,,Humbja,,  je oosvojio prestižnu nagradu na Kosovu za najbolji roman na albanskom jeziku u 2021 godini. U Crnoj Gori je štampan 2024 godine na crnogorskom jeziku.</li>
                </ul>
                </div>,
            place: 'Tuzi',
            autor: 'Senad Drešević'
        }
    ]

    return (
        <>
            {writers.map((writer, index) => (
                <motion.div initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            key={index}
                            className="w-full p-4">
                    <div className="flex items-end gap-1 py-2">
                        <h1 className="text-3xl font-semibold">{writer.name}{","}</h1>
                        <h2 className="text-xl font-semibold">{writer.profession}</h2>
                    </div>
                    <p className="text-xl leading-8">{writer.bio}</p>
                    <p className="text-lg font-light text-right">Mjesto: {writer.place}</p>
                    <p className="text-lg font-light text-right">Pripremio: {writer.autor}</p>
                </motion.div>
            ))}
        </>
    );
};

export default Writers;