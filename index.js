const LoanAmountEl = document.querySelector("#loanAmount");
const InterestRateEl = document.querySelector("#loanInterestRate");
const LoanTermEl = document.querySelector("#loanTerm")
const CustomLoanTermEl = document.querySelector("#customterm")
const resultEl = document.querySelector("#result")
const tableResultEl = document.querySelector("#tableResult")
console.log(LoanAmountEl, InterestRateEl, LoanTermEl);

resultEl.innerHTML = "<h1>目前結果:</h1>";

let resultArray=[];

function calcC(){
    calcResult(loanAmount, loanInterestRate, loanTerm);
    while (tableResultEl.rows.length > 1) {
        tableResultEl.deleteRow(1);
    }
    loanAmount = LoanAmountEl.value;
    loanInterestRate = InterestRateEl.value;
    if (CustomLoanTermEl.value == 0) {
        loanTerm = LoanTermEl.value;
    }
    else {
        loanTerm = CustomLoanTermEl.value;
    }
    principal = parseInt(loanAmount / (loanTerm * 12));
    monthlyRate = (0.1 / 12);
    totalinterest = 0;
    for (let i=0;i<resultArray.length;i++){
        let row = tableResultEl.insertRow();
        for (let j=0;j<resultArray[i].length;j++){
            row.insertCell().innerText=resultArray[i][j];
        }
    }
}

function calcResult(loanAmount, loanInterestRate, loanTerm*12) {
    resultArray=[];
    /**loanAmount = LoanAmountEl.value;
    loanInterestRate = InterestRateEl.value;
    loanTerm=CustomLoanTermEl.value !=0? CustomLoanTermEl.value: LoanTermEl.value;**/
    principal = parseInt(loanAmount / (loanTerm * 12));
    monthlyRate = (0.1 / 12);
    totalinterest = 0;

    for (let i = 0; i < loanTerm * 12; i++){
        resultArray[i]=new Array();
        if (i == (loanTerm * 12) - 1) {
            interest = parseInt(loanAmount * monthlyRate);
            principal = loanAmount;
            totalinterest += interest;
            loanAmount = 0;
            resultArray[i].push(i + 1);
            resultArray[i].push(principal);
            resultArray[i].push(interest);
            resultArray[i].push(principal + interest);
            resultArray[i].push(loanAmount);
        }
        else {
            interest = parseInt(loanAmount * monthlyRate)
            totalinterest += interest;
            resultArray[i].push(i + 1);
            resultArray[i].push(principal);
            resultArray[i].push(interest);
            resultArray[i].push(principal + interest);
            resultArray[i].push(loanAmount - principal);
            loanAmount = loanAmount - principal;
        }
    }
    console.log(resultArray)
    resultEl.innerHTML = `<h1>總期數${loanTerm*12}期<br>總支出：${parseInt(LoanAmountEl.value) + totalinterest}<br>總支出利息：${totalinterest}</h1>`;
    
}
function calcB() {
    while(tableResultEl.rows.length>1){
        tableResultEl.deleteRow(1);
    }
    loanAmount = LoanAmountEl.value;
    loanInterestRate = InterestRateEl.value;
    if (CustomLoanTermEl.value == 0){
        loanTerm = LoanTermEl.value;
    }
    else{
        loanTerm = CustomLoanTermEl.value;
    }
    principal = parseInt(loanAmount / (loanTerm * 12));
    monthlyRate = (0.1 / 12);
    totalinterest = 0;

    for (let i = 0; i < loanTerm * 12; i++) {
        let row = tableResultEl.insertRow();
        if (i == (loanTerm * 12) - 1) {
            interest = parseInt(loanAmount * monthlyRate);
            principal = loanAmount;
            totalinterest += interest;
            loanAmount = 0;
            row.insertCell().innerText = i + 1;
            row.insertCell().innerText = principal;
            row.insertCell().innerText = interest;
            row.insertCell().innerText = principal + interest;
            row.insertCell().innerText = loanAmount;
        }
        else {
            interest = parseInt(loanAmount * monthlyRate)
            totalinterest += interest;
            row.insertCell().innerText = i + 1;
            row.insertCell().innerText = principal;
            row.insertCell().innerText = interest;
            row.insertCell().innerText = principal + interest;
            row.insertCell().innerText = loanAmount - principal;
            loanAmount = loanAmount - principal;
        }
    }
    resultEl.innerHTML = `<h1>總期數${loanTerm * 12}期<br>總支出：${parseInt(LoanAmountEl.value) + totalinterest}<br>總支出利息：${totalinterest}</h1>`;
    
}

function calcA() {
    let tableHtml = `
            <table border="1">
                <thead>
                    <tr>
                        <th>期別</th>
                        <th>償還本金</th>
                        <th>償還利息</th>
                        <th>償還本利和</th>
                        <th>貸款餘額</th>
                    </tr>
                </thead>
                `
    loanAmount = LoanAmountEl.value;
    loanInterestRate = InterestRateEl.value;
    loanTerm = LoanTermEl.value;
    principal = parseInt(loanAmount / (loanTerm * 12));
    monthlyRate = (0.1 / 12);
    totalinterest = 0;

    for (let i = 0; i < loanTerm * 12; i++) {
        tableHtml += `<tr>`;
        if (i == (loanTerm * 12) - 1) {
            interest = parseInt(loanAmount * monthlyRate);
            principal = loanAmount;
            totalinterest += interest;
            loanAmount = 0;
            tableHtml += `<td>${i + 1}</td>`;
            tableHtml += `<td>${principal}</td>`;
            tableHtml += `<td>${interest}</td>`;
            tableHtml += `<td>${principal + interest}</td>`;
            tableHtml += `<td>${loanAmount}</td>`;
        }
        else {
            interest = parseInt(loanAmount * monthlyRate)
            totalinterest += interest;
            tableHtml += `<td>${i + 1}</td>`;
            tableHtml += `<td>${principal}</td>`;
            tableHtml += `<td>${interest}</td>`;
            tableHtml += `<td>${principal + interest}</td>`;
            tableHtml += `<td>${loanAmount - principal}</td>`;
            loanAmount = loanAmount - principal;
        }
        tableHtml += `</tr>`;

    }
    tableHtml += `</table>`;
    resultEl.innerHTML = `<h2>總支出利息：${totalinterest}</h2>` + tableHtml;
}
console.log(loanAmount, loanInterestRate, loanTerm)
