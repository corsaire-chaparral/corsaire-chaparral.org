(function(window, document) {

  'use strict';

  window.onload = function() {

    var form = document.getElementById('form-inscription'),
        fields = qwery('input,textarea', form),
        clearBtn = document.getElementById('startOver'),
        //validateBtn = document.getElementById('validate'),
        successElem = document.getElementById('success-feedback'),
        warnings = [],
        i, j, k, w
    ;

    clearBtn.onclick = function() {
      if (confirm('Êtes-vous certain de vouloir tout effacer?')) { 
        clearFields();

        clearValidation();
      }
    };
    
    form.onsubmit = function() {
      if (!validateFields()) {
        return false;
      }
    };
    
    for (j = 0; j < fields.length; j++) {
      fields[j].onblur = validateFields;
    }

    function clearFields() {

      for (i = 0; i < fields.length; i++) {
        fields[i].value = '';
      }
    }

    function validateFields() {

      var fName = document.getElementById('firstName'),
          lName = document.getElementById('lastName'),
          dob = document.getElementById('dob'),
          address = document.getElementById('address'),
          pCode = document.getElementById('postalCode'),
          apt = document.getElementById('apt'),
          email = document.getElementById('email'),
          phone = document.getElementById('telephone'),
          acceptPhotos = document.getElementById('acceptPhotos'),

          patterns = {
            dob: /^\d{2}-\d{2}-\d{4}$/,
            address: /^\d{1,6}(?:\s|,)+.{4,64}$/,
            postalCode: /[a-zA-Z]\d[a-zA-Z][\s-]?\d[a-zA-Z]\d/,
            strictPostalCode: /^[a-zA-Z]\d[a-zA-Z][\s-]?\d[a-zA-Z]\d$/,
            apt: /^\d{1,6}$/,
            email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
            phone: /^(?:\d)?\d{3}-?\d{3}-?(\d{4}(?:\s?\ext:\d{1,6})?)$/
          },

          ret = true;

      function warn(near, message) {
        var elem = document.createElement('small');
        elem.className = 'form-warning text--danger';
        near.parentElement.appendChild(elem);
        elem.innerHTML = message;
        warnings.push(elem);
        ret = false;
      }

      clearValidation();

      if (fName.value.length < 2) {
        warn(fName, 'Le prénom doit comporter au moins 2 caractères.');
      }
      if (lName.value.length < 2) {
        warn(lName, 'Le nom de famille doit comporter au moins 2 caractères.');
      }
      if (!patterns.dob.test(dob.value)) {
        warn(dob, 'La date de naissance doit suivre le format JJ-MM-AAAA.');
      }
      if (!patterns.address.test(address.value)) {
        warn(address, 'L\'adresse indiquée doit débuter par un numéro civique et comporter une rue, ainsi qu\'une municipalité.');
      }
      else if (patterns.postalCode.test(address.value)) {
        warn(address, 'Veuillez ne pas inclure de code postal dans l\'adresse.');
      }
      if (apt.value.length && !patterns.apt.test(apt.value)) {
        warn(apt, 'Vous devez entrer un numéro comportant de 1 à 6 caractères.');
      }
      if (!patterns.strictPostalCode.test(pCode.value)) {
        warn(pCode, 'Veuillez inclure une adresse postale valide.');
      }
      if (!patterns.email.test(email.value)) {
        warn(email, 'Veuillez entrer une adresse courriel valide.');
      }
      if (!patterns.phone.test(phone.value)) {
        if (/[\(\)\s]/.test(phone.value)) {
          warn(phone, 'Veuillez employer la disposition suggérée, c\'est-à-dire sans parenthèses ni d\'espaces.');
        } else { 
          warn(phone, 'Veuillez entrer un numéro de téléphone valide.');
        }
      }
      if (!acceptPhotos.checked) {
        warn(acceptPhotos, 'Vous devez consentir à l\'utilisation de médias concernant l\'athlète.');
      }
      
      if (ret) {
        successElem.innerHTML = 'Le formulaire est valide <span class="icon icon-thumb_up"></span>';
      }

      return warnings.length ? false : true;
    }

    function clearValidation() {
      // iterate through all the warnings
      for (w = 0; w < warnings.length; w++) {
        warnings[w].parentElement.removeChild(warnings[w]);
      }

      // clear the warnings collection
      warnings = [];
        successElem.innerHTML = '';
    }
  };

})(window, document);