import { ethers, JsonRpcProvider, Wallet } from "ethers";
import { QuoterV2__factory } from "../../typechain";
import * as dotenv from "dotenv";
import { CONTRACT_ADDRESSES } from "../config/addresses";
dotenv.config();
const { QUOTER_V2 } = CONTRACT_ADDRESSES;
const bscProvider = new JsonRpcProvider(process.env.BSC_RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY as string, bscProvider);
const QuoterV3 = QuoterV2__factory.connect(QUOTER_V2, wallet);
export class PancakeSwapV3Quote {
  async Quote(tokenIn: string, tokenOut: string,  amountIn: string) {
    const poolFee = 500;
    const path = ethers.solidityPacked(
      ["address", "uint24", "address"],
      [tokenIn, poolFee, tokenOut]
    );

    try {
      const quote = await QuoterV3.quoteExactInput.populateTransaction(
        path,
        [BigInt(1)], //flag, ko bt dien gi
        ethers.parseUnits(amountIn, 18)
    );
      console.log("Quote:", quote.toString());
      return quote;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
