import { PancakeSwapV3Swap, PancakeSwapV3Quote } from "pancakeswap-v3-sdk";
import * as dotenv from "dotenv";
dotenv.config();
const pancakeQuote = new PancakeSwapV3Quote();
const pancakeSwap = new PancakeSwapV3Swap();
async function testSDK(){
    try{
        const quote = await pancakeQuote.Quote(
            "0x55d398326f99059ff775485246999027b3197955", // tokenIn:USDT
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // tokenOut:ETH
            "100" // Amount in USDT
        );
        console.log("Quote ok");
    }catch(error){
        console.error("Error: ", error);
    }
    try{
        const swap = await pancakeSwap.Swap(
            "0x55d398326f99059ff775485246999027b3197955", // tokenIn:USDT
            "0x2170ed0880ac9a755fd29b2688956bd959f933f8", // tokenOut:ETH
            "100" // Amount in USDT
        );
        console.log("Swap ok");
    }catch(error){
        console.error("Error: ", error);
    }
}
testSDK();
