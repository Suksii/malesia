import React from 'react';
import slika2 from '../assets/slika2.jpg';

const PoliticsPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold pb-8 xl:pb-0 px-2">Politička reprezentacija i Autonomija</h1>
            <p className="text-xl pt-8 pb-4">
                Politička reprezentacija Albanaca u Malesiji značajno je unapređena sticanjem statusa samostalne opštine Tuzi. Lokalna samouprava omogućava bolje upravljanje lokalnim resursima i donošenje odluka koje odgovaraju potrebama zajednice. Albanske političke partije i organizacije igraju ključnu ulogu u zastupanju interesa zajednice na lokalnom i nacionalnom nivou.
            </p>
            <img src={slika2} alt="politics" className="w-[80%] mx-auto object-cover"/>
            <h3 className="text-xl font-semibold pt-8 pb-4">Saradnja sa Centralnom Vlašću</h3>
            <p className="text-xl">
                Efikasna saradnja između lokalne samouprave i centralne vlasti ključna je za uspešno rešavanje problema i ostvarivanje razvojnih ciljeva. Albanski predstavnici aktivno učestvuju u političkom životu Crne Gore, radeći na unapređenju prava i položaja svoje zajednice. Uključivanje u procese donošenja odluka na nacionalnom nivou omogućava bolje zastupanje interesa Albanaca u Malesiji.
            </p>
        </div>
    );
};

export default PoliticsPage;