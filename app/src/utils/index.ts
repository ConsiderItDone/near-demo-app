import { nearPlugin } from "near-polywrap-js";
import { ipfsPlugin } from "@web3api/ipfs-plugin-js";

export const apiUri = "ipfs/Qmb2iRbUEZDispSA9ggunmw2uHFNqeRDxcVzty5gC9zCg6";

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
    {
      uri: "w3://ens/ipfs.web3api.eth",
      plugin: ipfsPlugin({
        provider: "https://ipfs.io",
        fallbackProviders: ["https://polywrap-hub.mypinata.cloud"],
      }),
    },
  ];
};
