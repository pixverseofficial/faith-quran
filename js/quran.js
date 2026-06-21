const surahList = document.getElementById("surahList");
const searchInput = document.getElementById("searchInput");
let allSurahs = [];

fetch("https://api.alquran.cloud/v1/surah")
.then(res => res.json())
.then(data => {

    allSurahs = data.data;
    displaySurahs(allSurahs);

});

function displaySurahs(surahs) {

    surahList.innerHTML = "";

    surahs.forEach(surah => {

        surahList.innerHTML += `
        <div class="surah-card">

            <h3>
                ${surah.number}. ${surah.englishName}
            </h3>

        </div>
        `;

    });

}

searchInput.addEventListener("input", function() {

    const searchTerm = this.value.toLowerCase();

    const filteredSurahs = allSurahs.filter(surah => {

        return surah.englishName.toLowerCase().includes(searchTerm) ||
               surah.name.toLowerCase().includes(searchTerm) ||
               surah.number.toString().includes(searchTerm);

    });

    displaySurahs(filteredSurahs);

});
