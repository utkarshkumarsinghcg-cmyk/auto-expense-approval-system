document.addEventListener('DOMContentLoaded', () => {
        // Attach Receipt file picker
        const attachBtn = document.getElementById('attach-receipt-btn');
        const fileInput = document.getElementById('receipt-file-input');

        attachBtn.addEventListener('click', (e) => {
            e.preventDefault();  // prevent form submission
            fileInput.click();
        });

        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                console.log(`Selected ${files.length} receipt file(s):`, files);
                alert(`Upload initiated for ${files.length} file(s). (Server-side handling required)`);
                // TODO: send files via AJAX / FormData to server
            }
        });

        // Currency conversion setup
        const amountInput = document.getElementById('total-amount');
        const currencySelect = document.getElementById('currency-select');
        const convertedAmountSpan = document.getElementById('converted-amount');
        const BASE_CURRENCY = 'USD';

        function convertCurrency(amount, fromCurrency, toCurrency) {
            if (fromCurrency === toCurrency) return amount;
            const rates = {
                'USD': {'EUR':0.92,'GBP':0.81,'INR':83.25,'USD':1},
                'EUR': {'USD':1.08,'GBP':0.88,'INR':90  ,'EUR':1},
                'GBP': {'USD':1.23,'EUR':1.14,'INR':101 ,'GBP':1},
                'INR': {'USD':0.012,'EUR':0.011,'GBP':0.0099,'INR':1},
            };
            if (rates[fromCurrency]?.[toCurrency]) {
                return (amount * rates[fromCurrency][toCurrency]).toFixed(2);
            }
            return null;
        }

        function updateConvertedAmount() {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount <= 0) {
                convertedAmountSpan.textContent = '--';
                return;
            }
            const converted = convertCurrency(amount, currencySelect.value, BASE_CURRENCY);
            convertedAmountSpan.textContent = converted !== null
                ? `${BASE_CURRENCY} ${converted}`
                : 'Conversion Rate Unavailable';
        }

        amountInput.addEventListener('input', updateConvertedAmount);
        currencySelect.addEventListener('change', updateConvertedAmount);
        updateConvertedAmount();
    });