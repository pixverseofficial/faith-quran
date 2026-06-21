const params = new URLSearchParams(window.location.search);

const surahId = params.get("surah");

console.log(surahId);

fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
.then(res => res.json())
.then(data => {

    document.getElementById("surahName").innerText =
    data.data.englishName;

});
 

fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)

.then(res => res.json())

.then(result => {

    let html = "";

    if(surahId != 1 && surahId != 9){

        html += `

            <div class="bismillah">

                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

            </div>

        `;

    }

    result.data.ayahs.forEach(ayah => {

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
