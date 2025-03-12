import { ethers, JsonRpcProvider, Wallet, MaxUint256 } from "ethers";
import { SwapRouterV3__factory, ERC20__factory } from "../../typechain";
import * as dotenv from "dotenv";
import { CONTRACT_ADDRESSES } from "../config/addresses";
dotenv.config();
const { ROUTER_V3 } = CONTRACT_ADDRESSES;
const bscProvider = new JsonRpcProvider(process.env.BSC_RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY as string, bscProvider);

const RouterV3 = SwapRouterV3__factory.connect(ROUTER_V3, wallet);

export class PancakeSwapV3Swap {
  async Swap(tokenIn: string, tokenOut: string, amountIn: string) {
    const poolFee = 500;
    const amountInParsed = ethers.parseUnits(amountIn, 18);
    const tokenInContract = ERC20__factory.connect(tokenIn, wallet);

    // const balance = await tokenInContract.balanceOf(wallet.address);
    // if (balance < amountInParsed) {
    //   throw new Error("Ví không đủ số dư.");
    // }

    try {
      const txResponse = await tokenInContract.approve(await RouterV3.getAddress(), MaxUint256);
      await txResponse.wait();

      const swapTx = await RouterV3.exactInputSingle.populateTransaction({
        tokenIn,
        tokenOut,
        fee: poolFee,
        recipient: wallet.address,
        deadline: BigInt(Math.floor(Date.now() / 1000) + 60),
        amountIn: amountInParsed,
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0
      });

      console.log("Swap transaction:", JSON.stringify(swapTx, null, 2));
      return swapTx;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}
