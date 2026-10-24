
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Gaming Contract - Assertion Testing", function () {
  let gaming;

  beforeEach(async function () {
    const Gaming = await ethers.getContractFactory("Gaming");

    gaming = await Gaming.deploy();
    await gaming.waitForDeployment();
  });

  it("Test 1: Contract deploys successfully", async function () {
    const address = await gaming.getAddress();
    const code = await ethers.provider.getCode(address);

    expect(code).to.not.equal("0x");
  });

  it("Test 2: Correct higher guess returns true", async function () {
    const result = await gaming.determineWinner(8, 5, true);

    expect(result).to.equal(true);
  });

  it("Test 3: Incorrect higher guess returns false", async function () {
    const result = await gaming.determineWinner(3, 5, true);

    expect(result).to.equal(false);
  });

  it("Test 4: Higher number with lower guess returns false", async function () {
    const result = await gaming.determineWinner(8, 5, false);

    expect(result).to.equal(false);
  });
});
