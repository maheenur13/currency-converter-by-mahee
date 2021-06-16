const len = document.getElementById('firstCurrency').length;
// console.log(len)

document.getElementById('submit').addEventListener('click', () => {
    // console.log('clicked');
    const amount = parseInt(document.getElementById('amount').value);
    // console.log(amount);
    const from = document.getElementById('firstCurrency').value;

    // console.log(from);
    const to = document.getElementById('secondCurrency').value;
    convert(amount, from, to);
})

const convert = (amount, firstCurrency, secondCurrency) => {

    if (amount < 0) {
        document.getElementById('output').style.color = "red";
        document.getElementById('output').innerText = "Please Enter A Valid Number!";
    }
    
    else if(amount>=0) {
        document.getElementById('output').style.color = "rgb(94, 87, 87)";
        if (firstCurrency === secondCurrency) {
            const output = amount;
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'USD') {
            const output = (amount / 84.8).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'EUR') {
            const output = (amount / 101.76).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'INR') {
            const output = (amount / 1.15).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'AUD') {
            const output = (amount / 64.56).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'YEN') {
            const output = (amount / 0.77).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'PKR') {
            const output = (amount / 0.54).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'BDT' && secondCurrency === 'ARS') {
            const output = (amount / 0.89).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'BDT') {
            const output = (amount * 84.8).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'EUR') {
            const output = (amount / 1.2).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'INR') {
            const output = (amount / 0.013).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'AUD') {
            const output = (amount / 0.76).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'YEN') {
            const output = (amount / 0.009).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'PKR') {
            const output = (amount / 0.0064).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'USD' && secondCurrency === 'ARS') {
            const output = (amount / 0.01).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }

        else if (firstCurrency === 'EUR' && secondCurrency === 'BDT') {
            const output = (amount * 101.76).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'USD') {
            const output = (amount / 0.833).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'INR') {
            const output = (amount / 0.011).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'AUD') {
            const output = (amount / 0.634).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'YEN') {
            const output = (amount / 0.0075).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'PKR') {
            const output = (amount / 0.0053).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'EUR' && secondCurrency === 'ARS') {
            const output = (amount / 0.0087).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'BDT') {
            const output = (amount * 1.15).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'USD') {
            const output = (amount / 73.78).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'AUD') {
            const output = (amount / 56.16).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'YEN') {
            const output = (amount / 0.67).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'PKR') {
            const output = (amount / 0.47).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'INR' && secondCurrency === 'ARS') {
            const output = (amount / 0.774).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'BDT') {
            const output = (amount * 64.53).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'INR') {
            const output = (amount * 55.99).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'USD') {
            const output = (amount / 1.314).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'YEN') {
            const output = (amount / 0.012).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'PKR') {
            const output = (amount / 0.008).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'AUD' && secondCurrency === 'ARS') {
            const output = (amount / 0.014).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'BDT') {
            const output = (amount * 0.766).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'INR') {
            const output = (amount * 0.667).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'USD') {
            const output = (amount / 110.655).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'AUD') {
            const output = (amount / 84.21).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'PKR') {
            const output = (amount / 0.704).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'YEN' && secondCurrency === 'ARS') {
            const output = (amount / 1.161).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'BDT') {
            const output = (amount * 0.5398).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'INR') {
            const output = (amount * 0.4696).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'USD') {
            const output = (amount / 157.148).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'AUD') {
            const output = (amount / 119.611).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'YEN') {
            const output = (amount / 1.42).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'PKR' && secondCurrency === 'ARS') {
            const output = (amount / 1.651).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'BDT') {
            const output = (amount * 0.89).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'INR') {
            const output = (amount * 0.772).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'USD') {
            const output = (amount / 95.31).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'AUD') {
            const output = (amount / 72.52).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'YEN') {
            const output = (amount / 0.86).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
        else if (firstCurrency === 'ARS' && secondCurrency === 'PKR') {
            const output = (amount / 0.607).toFixed(2);
            console.log(output);
            document.getElementById('output').innerText = `${amount} ${firstCurrency} = ${output} ${secondCurrency}`;
        }
    }
    else {
        document.getElementById('output').style.color = "red";
        document.getElementById('output').innerText = "Please Enter A Number!";
    }
}