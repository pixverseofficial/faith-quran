const params = new URLSearchParams(window.location.search);

const surahId = params.get("surah");

console.log(surahId);

fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
.then(res => res.json())
.then(data => {

    document.getElementById("surahName").innerText =
    data.data.englishName;

});
