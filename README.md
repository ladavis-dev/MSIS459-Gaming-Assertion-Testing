
# MSIS 459 - Gaming Contract Assertion Testing

## Project Overview

This project demonstrates JavaScript-based assertion testing
of a Solidity Gaming smart contract using Hardhat,
Mocha, and Chai.

The assignment is based on the Gaming Contract from
the Packt textbook and course demonstration materials.

## Technologies

- Solidity 0.5.0
- Hardhat
- JavaScript
- Mocha
- Chai
- Ethers.js

## Assertion Tests

1. Verify successful contract deployment.
2. Verify a correct higher guess returns true.
3. Verify an incorrect higher guess returns false.
4. Verify an incorrect lower guess returns false.

## Running the Tests

Install dependencies:

npm install

Compile the contract:

npx hardhat compile

Execute the tests:

npx hardhat test

## Test Results

All four JavaScript assertion tests passed successfully.

## Observations

The Gaming Contract demonstrates basic wagering and
winner determination functionality.

Testing also revealed a limitation in the original
contract's lower-guess logic. A correct lower guess
cannot currently return true.

Additional improvements could include stronger
wager validation and secure randomness generation.

## Course

MSIS 459 - Innovation Through Blockchain

## Reference

https://github.com/dro20dayethereumchallenge/day8/tree/main/src
