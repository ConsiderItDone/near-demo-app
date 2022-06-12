import { nearPlugin } from "@cidt/near-plugin-js";
export const apiUri = "ipfs/Qmb5kp7RtdaUD3VJtBsdmRPErrGC91kv7S4HAVahtpgyya";

export const getPlugins = () => {
  return [
    {
      uri: "ens/nearPlugin.web3api.eth",
      plugin: nearPlugin({
        //@ts-ignore
        headers: {},
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
      }),
    },
  ];
};
