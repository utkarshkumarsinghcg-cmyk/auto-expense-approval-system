const textList = [
      "Welcome to our NexFinance",
      "Automated Expense Management",
    ];

    let i = 0, j = 0, isDeleting = false, speed = 80;

    function typeEffect() {
      const element = document.querySelector(".typing-text");
      const current = textList[i];

      if (!isDeleting) {
        element.innerHTML = current.slice(0, j++) ;
        if (j === current.length + 1) {
          isDeleting = true;
          speed = 100;
          setTimeout(typeEffect, 1000);
          return;
        }
      } else {
        element.innerHTML = current.slice(0, j--) ;
        if (j < 0) {
          isDeleting = false;
          i = (i + 1) % textList.length;
        }
      }

      setTimeout(typeEffect, speed);
    }

    document.addEventListener("DOMContentLoaded", typeEffect);

   const country = document.getElementById('country');
   const currency = document.getElementById('currency');

const countryCurrencyMap = {
    india: 'inr',
    usa: 'usd',
    uk: 'gbp',
    canada: 'cad',
    australia: 'aud'
};

const currencyCountryMap = {
    inr: 'india',
    usd: 'usa',
    gbp: 'uk',
    cad: 'canada',
    aud: 'australia'
};

country.addEventListener('change', () => {
    const selectedCountry = country.value;
    currency.value = countryCurrencyMap[selectedCountry] || '';
});

currency.addEventListener('change', () => {
    const selectedCurrency = currency.value;
    country.value = currencyCountryMap[selectedCurrency] || '';
});