class LoanManager {
    constructor(KreditSumme, RatenPlan, Zinsen) {
        this.KreditSumme = KreditSumme; // Original loan amount
        this.RatenPlan = RatenPlan; // Number of months
        this.Zinsen = Zinsen; // Annual interest rate (decimal)
        this.remainingBalance = KreditSumme; // Track remaining balance
    }

    // Calculate fixed monthly payment (annuity formula)
    getMonatlicheRate() {
        const monthlyRate = this.Zinsen / 12; // Convert annual interest to monthly
        return (this.KreditSumme * monthlyRate) / 
               (1 - Math.pow(1 + monthlyRate, -this.RatenPlan));
    }

    // Calculate the monthly interest on the remaining balance
    CalcMonZinsen() {
        const monthlyInterestRate = this.Zinsen / 12; // Convert annual interest to monthly
        return this.remainingBalance * monthlyInterestRate; // Interest for the remaining balance
    }

    // Process a monthly payment
    makeMonthlyPayment(month) {
        const zinsen = this.CalcMonZinsen(); // Interest for the month
        const rate = this.getMonatlicheRate(); // Fixed monthly payment
        let tilgung = rate - zinsen; // Principal portion of the payment

        // Ensure we don't overpay in the final month
        if (tilgung > this.remainingBalance) {
            tilgung = this.remainingBalance;
        }

        this.remainingBalance -= tilgung;

        return { month, rate, zinsen, tilgung, remainingBalance: this.remainingBalance };
    }

    // Getter for KreditSumme
    getKreditSumme() {
        return this.KreditSumme;
    }

    // Simulate monthly payments
    simululatePayments() {
        
        for (let i = 1; i <= 60; i++) {
        let result = this.makeMonthlyPayment(i);
        console.log(`Month ${result.month}:`);
        console.log(`  Monthly Payment: €${result.rate.toFixed(2)}`);
        console.log(`  Interest Paid: €${result.zinsen.toFixed(2)}`);
        console.log(`  Principal Paid: €${result.tilgung.toFixed(2)}`);
        console.log(`  Remaining Balance: €${result.remainingBalance.toFixed(2)}`);
        console.log("--------------------------------------");
    }

    }
}

// Initialize loan
let loan2 = new LoanManager(60923, 60, 0.0585); // 10,000 loan, 12 months, 5% annual interest

loan2.simululatePayments();


