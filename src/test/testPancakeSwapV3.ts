import { PancakeSwapV3Quote } from "../pancakeswapV3/quote";
import { PancakeSwapV3Swap } from "../pancakeswapV3/swap";

(async () => {
  const pancakeQuote = new PancakeSwapV3Quote();
  const pancakeSwap = new PancakeSwapV3Swap();

  const tokenIn = "0xae13d989dac2f0debff460ac112a837c89baa7cd"; 
  const tokenOut = "0x7ef95a0fee0d7c4b54e864e78c63a26bd41d5e8f"; //USDT Testnet - BSC
  // const poolFee = 500;
  const amountIn = "1"; 

  console.log("Quote...");
  const quote = await pancakeQuote.Quote(tokenIn, tokenOut, amountIn);
  console.log("Quote:", JSON.stringify(quote, null, 2));

  console.log("Swap...");
  const swapTx = await pancakeSwap.Swap(tokenIn, tokenOut, amountIn);
  console.log("Swap transaction:", JSON.stringify(swapTx, null, 2));
})();
