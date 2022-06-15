import { nearPlugin } from "@cidt/near-plugin-js";
export const apiUri = "ipfs/QmPvpj2VcHKJF2ZZYtBqbitrGwcvnhbCD1PnUCVKGM2EL2";

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
