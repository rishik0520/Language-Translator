
const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
translateBtn = document.querySelector("button"),
fromLangSelect = document.getElementById("from-language"),
toLangSelect = document.getElementById("to-language");

// these are the only top 10 lanugauges which is below
const languages = {
"en-GB": "English",
"es-ES": "Spanish",
"fr-FR": "French",
"de-DE": "German",
"zh-CN": "Chinese (Simplified)",
"ja-JP": "Japanese",
"ru-RU": "Russian",
"it-IT": "Italian",
"hi-IN": "Hindi",
"pt-PT": "Portuguese"
"te-TE": "Telugu"
};


for (let code in languages) {
const option = `<option value="${code}">${languages[code]}</option>`;
fromLangSelect.insertAdjacentHTML("beforeend", option);
toLangSelect.insertAdjacentHTML("beforeend", option);
}
//it will swap tha language 

fromLangSelect.addEventListener("change", () => {
const temp = fromLangSelect.value;
fromLangSelect.value = toLangSelect.value;
toLangSelect.value = temp;
});

// it will translate text from one language to another language
translateBtn.addEventListener("click", () => {
let text = fromText.value.trim(),
    translateFrom = fromLangSelect.value,
    translateTo = toLangSelect.value;

if (!text) return;

toText.setAttribute("placeholder", "Translating...");
let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation");
    });
});
