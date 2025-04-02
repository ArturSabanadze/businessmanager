

class BusinessInvestment {
  constructor(investment_name, name, capital, expences, income, debt, interestRate, loanTerm) {
    this.investmentName = investment_name; // Name of the investment
    this.ownerName = name; // Owner of the investment
    this.totalInvestment = capital; // Capital invested
    this.totalExpenses = expences; // Business expenses
    this.totalIncome = income; // Business income
    this.netProfit = this.totalIncome - this.totalExpenses; // Net profit
    this.debt = debt; // Debt amount
    this.interestRate = interestRate; // Interest rate on the debt
    this.loanTerm = loanTerm; // Loan term in months
  }

  getInvestments() {
    return {
      InvestmentName: this.investmentName,
      Owner: this.ownerName,
      Capital: this.totalInvestment,
      Expenses: this.totalExpenses,
      Income: this.totalIncome,
      NetProfit: this.netProfit,
    };
  }

  // Method to calculate ROI (Return on Investment)
  calculateROI() {
    return ((this.netProfit*12) / this.totalInvestment) * 100; // Return ROI in percentage
  }

  //Method to calculate the Profit Margin
  calculateProfitMargin() {
    return ((this.netProfit*12) / (this.totalIncome*12)) * 100; // Return Profit Margin in percentage
  }

  // Method to display BreakEven Point (BEP)
  calculateBEP() {
    return this.totalInvestment / (this.netProfit * 12); // Return BEP in months
  }

  //Method to display Debt-to-Income Ratio (DTI)
  calculateDTI() {
    const monthlyDebtPayment = this.debt * (this.interestRate / 100 / 12) * 
                               Math.pow(1 + (this.interestRate / 100 / 12), this.loanTerm) /
                               (Math.pow(1 + (this.interestRate / 100 / 12), this.loanTerm) - 1);
    
    return (monthlyDebtPayment / this.totalIncome) * 100; // Return DTI in percentage
}

  // Method to display the Monthly Payment incl. interest
  calculateMonthlyPayment() {
  const monthlyDebtPayment = this.debt * (this.interestRate / 100 / 12) * 
                             Math.pow(1 + (this.interestRate / 100 / 12), this.loanTerm) /
                             (Math.pow(1 + (this.interestRate / 100 / 12), this.loanTerm) - 1);
  
  return monthlyDebtPayment;
}

}

export default BusinessInvestment;
