import {useState} from 'react';
import {IoIosArrowDropupCircle, IoIosArrowDropdownCircle} from "react-icons/io";

const Interviews = () => {

    const [visibleAnswers, setVisibleAnswers] = useState({});

    const toggleAnswer = (interviewIndex, questionIndex) => {
        setVisibleAnswers(prevState => ({
            ...prevState,
            [`${interviewIndex}-${questionIndex}`]: !prevState[`${interviewIndex}-${questionIndex}`]
        }));
    };

    const interviews = [
        {
            title: 'Intervju sa istoričarem Mr. Adnanom Pepićem',
            place: 'Tuzi',
            interviewer: 'Fadil Ramović',
            questions: [
                {
                    question: 'Po čemu je karakteristična kultura Albanaca sa teritorije opštine Tuzi?',
                    answer: 'Adnan Pepić: Svaki narod u Crnoj Gori ima svoju osobenost, pa tako i Albanci. Albanski jezik je potpuno drukčiji u odnosu na sve ostale jezike koji ga okružuju, te je na taj način prvi vidljivi znak drukčine zbog kojeg su Albanci odmah i prepoznatljivi. Međutim, ta prepoznatljivost i vidljivost u drukčini često je bila brana i uzrokom izolovanosti Albanaca u Crnoj Gori. Teško se dolazilo do sagovornika i do onoga s kim su se mogla podijeliti osjećanja, razmišljanja, prezentovati narodno stvaralaštvo i drugi oblici razvoja u kulturi. Malo ljudi u Crnoj Gori zna govoriti ili razumjeti albanski jezik, što uzrokuje slaboga i nedovoljnoga poznavanja Albanaca, njihove kulture, tradicije, običaja, muzike i drugih vidova umjetnosti. Ipak, utjecaj posebnosti u jeziku imalo je svoju nemjerljivu ulogu na usmeno predanje i književno stvaranje, na muziku, ujedno, ta izolovanost je omogućila da se dugotrajno očuva tradicija i običaji, osobito u folkoru i narodnoj nošnji. U Tuzima svoju osobenost u nošnji ogromni značaj danas ima Đubljeta. Ona je vjekovima ljubomorno čuvana i njegovana i u potpunosti se razlikuje od svih ostalih narodnih nošnji, pa čak i nošnji drugih Albanaca u Crnoj Gori.'
                },
                {
                    question: 'Po čemu je karakterističan kontekst spomenika koji oslikavaju istorijsko nasljeđe Albanaca u Malesiji?',
                    answer: 'Adnan Pepić: Dugotrajna izolovanost uzrokovana drukčinom, naročito jezika, utjecala je na to da se Albanci u dovoljnoj mjeri nikada nisu razumjeli, čime su potiskivani njihovi problemi i njihove težnje. Utjecaj albanskoga naroda na mnoge društveno-političke okolnosti iz dalje ili bliže prošlosti je ogroman, ali nama nevidljiv. Kroz historijska trvenja, ili prolaženja kroz nove okolnosti, i albanski narod je poput svih ostalih balkanskih naroda težio oslobođenju i stvaranju nacionalne države. Njihov put je možda bio teži i drukčiji u odnosu na druge, ali i oni su uspjeli doći do ostvarenja svoga cilja, a to je stvaranje države Albanaca. Kao što drugi narodi danas teže da se sjećanjem i obilježavanjem historijskih događaja i ličnosti pokaže nacionalna dugotrajnost i značaj tako i Albanci teže istom, s tom razlikom što se oni ovdje nalaze izvan svoje matične nacionalne države, pa s tim njihova obilježavanja prelaze granice ili se ograničavaju unutar ovih granica na način što obilježavaju svelbanske nacionalne događaje i ličnosti i one koji su lokalnoga karaktera. Na taj način mogue se primjetiti spomenici u Milješu lokalnom historijskom borcu za slobodu Albanaca i najavljenu izgradnju spomenika Skenderbegu Kastrioti u centru Tuzi.'
                },
                {
                    question: 'Da li imamo vidan uticaj Osmanske imperije na kulturu i običaje Albanaca sa teritorije opštine Tuzi?',
                    answer: 'Adnan Pepić: Dugotrajnost osmanske države na ovim prostorima se uviđa i kroz mnogobrojne vidljive tragove. Svjedocimo se mnogih riječi u našim govorima koje imaju porijeklo iz orijentalnih jezika koje su došle posredstvom osmanlijskog utjecaja. Vidljivi su i tragovi čak i u narodnoj nošnji. Vidljivi su u arhitekturi, u muzici, književnosti. Kulturni utjecaj na druge naročito vrše oni koji posjeduju veće bogatstvo u odnosu na druge, ali je uočljiv i utjecaj onih siromašnijih na bogatije culture. To je razmjena koja neprestano traje. Stoga ne treba na to gledati kao na strani nepoželjni utjecaj, već ga posmatrati u kontekstu obogaćenja sopstvene kulture, svoga jezika, muzike, likovne umjetnosti, narodne nošnje, folklore, književnosti, narodnoga stvaralaštva itd. Kulturni utjecaji su bogaćenje te ih se stoga ne treba plašiti i izbjegavati, osobito ne treba ih negirati i izbacivati. Kao i u mnogim našim krajevima i u Tuzima tragove osmanskoga uticaja su uočljivi. Mnoge riječi u svakodnevnom govoru Albanaca u Tuzima su orijentalnoga porijekla. Utjecaj Osmanlija je primjetan i u narodnoj muzici Albanaca u Tuzima, uostalom kao i kod drugih. Kada se prođe starim Tuzima uočavaju se tragovi osmanske arhitekture i načina življenja. Sve to je jedno ogromno nadograđeno bogatstvo na postojeće lokalno.'
                },
                {
                    question: 'Kako komentarišete sredinu kao što su Tuzi sa aspekta multikulturalnosti?',
                    answer: 'Adnan Pepić: Tuzi su grad i opština u kojoj većinski živi albanski narod, pa se tako većinski govori albanski jezik. Tuzi su na taj način jedna osobena albanska sredina. U opštini Tuzi pored Albanaca u značajnom broju žive Bošnjaci, Crnogorci, Srbi, ali i Romi. Izuzev Roma ostali nabrojani narodi ne govore albanskim jezikom, ili ga govore samo pojedinci. Zajedničko življenje različitih naroda je još jedno bogatstvo opštine Tuzi. Tuzi su osobene i po pitanju vjerske različitosti, jer prisustvo tri religije, Islama, Katoličanstva i Pravoslavlja, na ovom malom području je nemjerljivo bogatstvo. Tako da na teritoriji opštine Tuzi se mogu vidjeti i tri vrste bogomolja, džamije, kao i hrišćanske katoličke i pravoslavne crkve. Sve to ukazuje na veliko bogatstvo jedne male sredine kao što su Tuzi. Ono se treba očuvati kao pozitivni primjer zajedničkoga življenja različitosti i drukčine. Tuzi su, ujedno, jedna od kapija ulaska u državu Crnu Goru što predstavlja prvi dodir nekoga ko ulazi u Crnu Goru. Crna Gora je osobena, Tuzi su posebno osobene i pružaju nešto novo, drukčije, različito u odnosu na ostale djelove Crne Gore. Možda se odmah ta različitost ne uočava, ne primjećuje, ali se svakako može osjetiti. Naravno, sve to se treba čuvati, njegovati, treba gajiti kako bi Tuzi sačuvale svoju osobenost.'
                },
            ]
        },
        {
            title: 'Intervju sa  Allmirom Đokovićem',
            place: 'Tuzi',
            interviewer: 'Fadil Ramović',
            questions: [
                {
                    question: 'Religijski kontekst Tuzi?',
                    answer: 'Na teritoriji opštine Tuzi imamo jedan religijski suživot, koji je jako karakterističan po pozitivnoj saradnji među građanima Tuzi. Građane Tuzi možemo po religijskoj osnovi podijeliti na katolike, muslimane i pravoslavce, a po nacionalnom ključu iste ove građane možemo podijeliti na crnogorce, muslimane, albance, bošnjake, srbe i rome. Sredina je multikulturalnog karaktera i upravo projekti koji doprinose dobroj saradnji su uvijek dobrodošli, kako bi unaprijedili saradnju. Na teritoriji opštine imamo Katoličku crkvu Svetog Antuna, zatim srednju vjersku školu medresu,, Mehmed Fatih. Pored ovih imamo i pravoslavnu crkvu Svetog Vasilija Ostroškog u Vranju.'
                },
                {
                    question: 'Institucionalni okvir opštine Tuzi?',
                    answer: 'Opština Tuzi je mlada opština nastala odvajanjem od Podgorice 2018 godine. Od 2018 postaje samostalna opština sa većinskim Albanskim stanovničtvom koje čini oko 68 %.\n' +
                        'Lokalna samouprava je podijeljena institucionalno na sekretarijate kao što su: \n' +
                        '-sekretarijat za urbanizam\n' +
                        '-sekretarijat za finansije\n' +
                        '-sekretarijat za lokalnu samoupravu\n' +
                        '-sekretarijat za imovinu\n' +
                        '-sekretarijat za razvoj i projekte\n' +
                        '  \n' +
                        'Pored sekretarijata ima i komunalnu policiju.'
                },
                {
                    question: 'Obrazovne institucije i folklorna društva?',
                    answer: 'Na teritoriji opštine Tuzi imamo dvije srednje škole: Medresu Mehmed Fatih i JU Srednju mješovitu školu 25. maj Tuzi. Pored ove dvije škole imamo osnovne škole: OŠ Mahmut Lekić,OŠ 29 Novembar, OŠ Zarija Vujošević, OŠ Jedinstvo.Pored navedenih škola imamo dva vrtića jedan državni i jedan privatni.Što se tiče folklornih društava Malesija je prepoznata i van Crne Gore upravo po njima. Kroz ova društva se prezentuje kultura ovog prostora. Imamo više folklornih društava, kao što su:KUD Dečić, KUD Ramadan Šarkić, KUD Liria.'
                },
                {
                    question: 'Po čemu je karakteristična Malesija?',
                    answer: 'Po mom sudu ono što karakteriše kulturna dobra po kojim se prepoznaje ovo mjesto jeste bez sumnje Đubljeta. Albanska djubljeta predstavlja najstariju nošnju sa teritorije Malesije. Ono što je karakteristično jeste to da je pod Uneskovom zastitom kulturne baštine kao nematerijalno nasleđe. Ona se danas koristi u folklornim društvima , a ujedno i kao muzejski eksponat kako u Tuzima, tako i sirom svijeta gdje žive Albanci koji njeguju svoju kulturu.'
                }
            ]
        }
    ]

    return (
        <div className="py-10">
            <h1 className="text-4xl text-center font-semibold py-4">Intervjui</h1>
            {
                interviews.map((interview, interviewIndex) => {
                    return (
                        <div key={interviewIndex}>
                            <h1 className="text-3xl font-semibold w-full bg-red-800 text-red-50 py-3 px-2 my-1">{interview.title}</h1>
                            {
                                interview.questions.map((question, questionIndex) => (
                                    <div key={questionIndex}>
                                        <div className="flex justify-between items-center py-2 w-full bg-gray-100 my-2 px-4">
                                            <h2 className={`text-2xl`}>
                                                <span className="text-xl font-semibold">{questionIndex + 1}. </span>
                                                {question.question}
                                            </h2>
                                            <div className="cursor-pointer" onClick={() => toggleAnswer(interviewIndex, questionIndex)}>
                                                {
                                                    visibleAnswers[`${interviewIndex}-${questionIndex}`] ? <IoIosArrowDropupCircle color={"gray"} size={35}/> : <IoIosArrowDropdownCircle color={"gray"} size={35}/>
                                                }
                                            </div>
                                        </div>
                                        {
                                            visibleAnswers[`${interviewIndex}-${questionIndex}`] && (
                                                <p className="px-8 text-xl leading-9">⎯ {question.answer}</p>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Interviews;