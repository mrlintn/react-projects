# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Lab: React ATM Application

--------

Let's practice modifying an existing codebase. This repository contains the code for existing ATM application that uses React. Currently, you can use it to deposit money into a checking account.

You'll be adding a few features to this app:
- The ability to withdraw money.
- The option to have a savings account as well as a checking account.

In the end, your solution will look like this:

<img width="992" alt="atm" src="https://cloud.githubusercontent.com/assets/4304660/24376818/18c39a82-12f2-11e7-81e7-af618c22b3ed.png">

--------

## Setting Up

- Clone this repo and run `npm install`. To launch the app, run `npm start`.

- The code that's running is in the `/src` directory — that's what you need to change!

- The `/solution_src` directory is just that — the solution. Don't look before giving this your best shot!

You can complete the tasks below in any order you'd like.

---------

## Task

Currently, there is a checking account in which a user can deposit money. Try it out — it works!
- Create a "Withdraw" button next to the "Deposit" button.
  - You should not be able to withdraw more than the current balance.
- Create a savings account — another component of the same class.
  - It will have the same deposit (and eventual withdraw) functionality.
- You cannot type negative numbers into either withdraw or deposit.

-------

### Hints:
<details>
<summary>Stuck on making a savings account? Here's a hint:</summary>
The <code>name</code> prop being passed into <code>Account</code> is "Checking" — perhaps you can just call the component again for "Savings."   
</details>

<details>
<summary>Stuck on making a "Withdraw" button? Here's a hint:</summary>
The functionality for withdrawing money is quite similar to the functionality for depositing money, except with subtraction instead of addition.
</details>

<details>
<summary>Stuck on limiting negative numbers? Here's a hint:</summary>
When a function checks if the input is a number (with <code>isNaN</code>), a <code>||</code> condition could be added to make sure that input is greater than zero.
</details>

--------

## Solution

Solution code is provided in the `solution_src` folder of this repository. Please give this your best go before looking!
