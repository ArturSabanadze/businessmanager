import BusinessInvestment from '../Class/Investing.js'; // Correct way to import the default export


const investmentConstructor = () => {
    const investment_name = document.getElementById('inv_name').value;
    const name = document.getElementById('name').value;
    const capital = parseFloat(document.getElementById('capital').value);
    const expences = parseFloat(document.getElementById('expences').value);
    const income = parseFloat(document.getElementById('income').value);
    const debt = parseFloat(document.getElementById('debt').value);
    const interestRate = parseFloat(document.getElementById('interest_rate').value);
    const loanTerm = parseFloat(document.getElementById('loan_term').value);

    // Check if inputs are valid numbers
    if (isNaN(capital) || isNaN(expences) || isNaN(income)) {
        alert("Please enter valid numbers for capital, expenses, and income.");
        return;
    }

    // Create a new BusinessInvestment instance
    const investment = new BusinessInvestment(investment_name, name, capital, expences, income, debt, interestRate, loanTerm);

    // Calculate ROI, BEP, Profit Margin using the methods from BusinessInvestment class
    const ROI = investment.calculateROI();
    const BEP = investment.calculateBEP();
    const profitMargin = investment.calculateProfitMargin();
    const DTI = investment.calculateDTI();
    const monthlyPayment = investment.calculateMonthlyPayment();

    // Display ROI in the HTML element with id 'roi_result'
    document.getElementById('roi_result').innerText = 
        `${investment_name} ROI: ${ROI.toFixed(2)}%`;

    // Display BEP in the HTML element with id 'bep_result'
    document.getElementById('bep_result').innerText = 
        `${investment_name} Break-Even Point: ${BEP.toFixed(2)}years`;

    // Display Profit Margin in the HTML element with id 'profit_margin_result'
    document.getElementById('profit_margin_result').innerText = 
        `${investment_name} Profit Margin: ${profitMargin.toFixed(2)}%`;

    // Display DTI in the HTML element with id 'dti_result'
    document.getElementById('dti_result').innerText = 
        `${investment_name} Debt-to-Income Ratio: ${DTI.toFixed(2)}% (Monatliche Rate: ${monthlyPayment.toFixed(2)})`;

    
    return investment;
};


document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate_btn');
    if (calculateButton) {
        calculateButton.addEventListener('click', investmentConstructor);
    }
});
