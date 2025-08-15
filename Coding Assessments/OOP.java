import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Program {
    public static void main(String args[]) {
        Program p = new Program();
        p.start();
    }

    public void start() {
        Portfolio portfolio = new Portfolio();

        StockPosition stockPosition = new StockPosition("ULTI", 10);
        portfolio.addAsset(stockPosition);

        SavingsAccount savings = new SavingsAccount(30000, 0.25);
        portfolio.addAsset(savings);

        Wallet wallet = new Wallet(30000);
        portfolio.addAsset(wallet);

        for (int year = 0; year < 50; year++) {
            /*
             ************************************************** Do NOT edit the code ABOVE **************************************************
             */

            // Step 1:
            // The code does not compile initially by design. Get the code to compile.

            // Step 2:
            // Implement Portfolio's 'updateValueOfAssets' method so that the value of each
            // asset in the portfolio updates correctly after each additional year.

            // Step 3 (implement here):
            // If your wallet has more than $10,000, buy as many shares of ULTI stock as
            // your wallet can afford.

            // Step 4 (implement here):
            // Once your portfolio exceeds $1,000,000:
            // a) Print out the total value of your portfolio - 'Portfolio: {amount}'
            // b) Print out the number of years passed - 'Years: {year}'
            // c) Terminate the loop

            // ***Do not modify this line of code***
            portfolio.updateValueOfAssets();
        }
    }

    // superclass
    public class Portfolio {
        private ArrayList<Portfolio> listOfAssets;

        public Portfolio() {
        }

        public void addAsset(Portfolio type) {
            listOfAssets.add(type);
        }

        public double getValueOfAssets() {
            double value = 0;
            for (Portfolio port : listOfAssets) {
                value += port.getValueOfAssets();
                // port.get()
            }

            return value;
        }

        public void updateValueOfAssets() {
        }
    }

    // type 1 of Portfolio
    public class SavingsAccount extends Portfolio {
        // constructor
        public SavingsAccount(double value, double interestRate) {
            double interest = value * interestRate;
            value += interest;
            // 100 , ir = 1, itest = 1
            // 100 + int
        }
    }

    // type 2 of Portfolio
    public class Wallet extends Portfolio {
        private double value;

        public Wallet(double value) {
            value = value;
        }

        public double getValueOfAssets() {

            return value;
        }
    }

    // type 3 of Portfolio
    public class StockPosition extends Portfolio {
        // constructor
        public StockPosition(String name, int shares){
            price * shares
        }
    }

    /*
     ************************************************** Do NOT edit the code BELOW **************************************************
     */
    private String name;
    private int shares;
    private double currentPrice;
    private int currentYear;
    private List<Double> stockPrices;

    public StockPosition(String name, int shares) {
            this.stockPrices = Arrays.asList(100.0, 97.0, 83.0, 110.0, 115.0, 107.0, 103.0, 94.0, 104.0, 123.0, 
                                             110.0, 107.0, 93.0, 120.0, 125.0, 117.0, 113.0, 104.0, 114.0, 133.0, 
                                             120.0, 117.0, 103.0, 130.0, 135.0, 127.0, 123.0, 114.0, 124.0, 143.0, 
                                             130.0, 127.0, 113.0, 140.0, 145.0, 137.0, 133.0, 124.0, 134.0, 153.0, 
                                             140.0, 137.0, 123.0, 150.0, 155.0, 147.0, 143.0, 134.0, 144.0, 153.0, 164.0);
            this.name = name;
            this.shares = shares;
            this.currentPrice = stockPrices.get(0);
        }

    public double getValue() {
        return this.currentPrice * shares;
    }

    public double getPrice() {
        return this.currentPrice;
    }

    public void updateValue() {
        this.currentPrice = stockPrices.get(++this.currentYear);
    }

    public void buyShares(int numShares) {
        this.shares += numShares;
    }
}}