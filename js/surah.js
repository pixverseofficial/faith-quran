const params = new URLSearchParams(window.location.search);

const surahId = Number(params.get("surah"));

console.log(surahId);

fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
.then(res => res.json())
.then(data => {

    document.getElementById("surahName").innerText =
    data.data.englishName;

    document.getElementById("surahArabicName").innerText =
    data.data.name;

    document.getElementById("surahMeta").innerText =
    `${data.data.numberOfAyahs} Ayat • ${data.data.revelationType}`;

});
 

fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)

.then(res => res.json())

.then(result => {

    let html = "";

    const muqatta = {

        2:"الم",
        3:"الم",
        7:"المص",
        10:"الر",
        11:"الر",
        12:"الر",
        13:"المر",
        14:"الر",
        15:"الر",
        19:"كهيعص",
        20:"طه",
        26:"طسم",
        27:"طس",
        28:"طسم",
        29:"الم",
        30:"الم",
        31:"الم",
        32:"الم",
        36:"يس",
        38:"ص",
        40:"حم",
        41:"حم",
        42:"حم عسق",
        43:"حم",
        44:"حم",
        45:"حم",
        46:"حم",
        50:"ق",
        68:"ن"

    };

    if(surahId !== 1 && surahId !== 9){

        html += `

            <div class="bismillah">

                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

            </div>

        `;

    }

    result.data.ayahs.forEach(ayah => {

        if (ayah.numberInSurah === 1) {
            console.log(ayah.text);
        }

        if(
            ayah.numberInSurah === 1 &&
            muqatta[surahId]
        ){

            html += `

                <div class="muqatta-line">

                    <span class="muqatta">
                        ${muqatta[surahId]}
                    </span>

                    <span class="ayah-number">
                        1
                    </span>

                </div>

            `;

            return;

        }

        if (
            ayah.numberInSurah === 1 &&
            surahId !== 1 &&
            surahId !== 9 &&
            !muqatta[surahId]
        ){
            const words = ayah.text.split(" ");
            ayah.text = words.slice(4).join(" ");
        }

        html += `

            ${ayah.text}

            <span class="ayah-number">

                ${ayah.numberInSurah}

            </span>

        `;

    });

    document.getElementById("surahContent").innerHTML =
    html;

});
