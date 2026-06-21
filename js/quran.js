const surahList = document.getElementById("surahList");

fetch("https://api.alquran.cloud/v1/surah")
.then(res => res.json())
.then(data => {

    data.data.forEach(surah => {

        surahList.innerHTML += `
        <div class="surah-card">

            <h3>
                ${surah.number}. ${surah.englishName}
            </h3>

        </div>
        `;

    });

});
