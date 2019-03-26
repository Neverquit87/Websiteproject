i18next
    .use(i18nextXHRBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
       lng: 'en',
       fallbackLng: 'en',
       debug: true,
       backend: {
          loadPath: 'scripts/i18n/{{lng}}.json',
          crossDomain: true
       }
    }, function(t) {
        updateContent();
    });

function updateContent(){
    //$('trans').localize();
    jqueryI18next.init(i18next, $, { 
            handlename: "localize",
            selectorAttr: "data-i18n"
    });
    $('body').localize();
}

function changeLng(lng) {
   i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
   updateContent();
});


function doSomething() {
    var newLng = (i18next.language == "zh") ? "en" : "zh";
    i18next.changeLanguage(newLng);
}

//$("#lang_toggle").click( doSomething )
