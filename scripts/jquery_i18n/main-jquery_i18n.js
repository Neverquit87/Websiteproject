jQuery(document).ready(function() {
      var update_texts = function() {
            $('body').i18n();
        };
 
        $.i18n().load({
            en: '../../lib/i18n/en.json' 
            ru: '../../lib/i18n/zh.json'
        });
 
        update_texts();
    });


$('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    alert('Hi Bob');
    update_texts();
  });
