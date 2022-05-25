import { useWeb3ApiClient } from "@web3api/react";
import React, { useState } from "react";
import { useQuery } from "../utils/hooks";
import { Near_Queries } from "../utils/queries";
import { BlockResult } from "../utils/types";
import JsonRpcQueries from "./JsonRpcQueries";
import Transaction from "./Transactions";
import Utils from "./Utils";

export default function Near() {
  const client = useWeb3ApiClient();
  //wallet
  const [, requestSignIn] = useQuery<{
    requestSignIn: any;
  }>(Near_Queries.requestSignIn);

  const [, signOut] = useQuery<{
    signOut: any;
  }>(Near_Queries.signOut);

  const [, isSignedIn] = useQuery<{
    isSignedIn: any;
  }>(Near_Queries.isSignedIn);

  const [, getAccountId] = useQuery<{
    getAccountId: any;
  }>(Near_Queries.getAccountId);

  // Transaction
  const [, signAndSendTransaction] = useQuery<{
    signAndSendTransaction: any;
  }>(Near_Queries.signAndSendTransaction);
  const [, createsTransactionWithoutWallet] = useQuery<{
    createsTransactionWithoutWallet: any;
  }>(Near_Queries.createsTransactionWithoutWallet);

  const [, signsTransactionWithoutWallet] = useQuery<{
    signsTransactionWithoutWallet: any;
  }>(Near_Queries.signsTransactionWithoutWallet);

  const [, signAndSendTransactionAsync] = useQuery<{
    signAndSendTransactionAsync: any;
  }>(Near_Queries.signAndSendTransactionAsync);

  // Queries

  const [, getAccountState] = useQuery<{
    getAccountState: any /* BlockResult */;
  }>(Near_Queries.getStatus);

  const [, getChunk] = useQuery<{
    getChunk: any /* BlockResult */;
  }>(Near_Queries.getChunk);

  const [, getContractCodeChanges] = useQuery<{
    getContractCodeChanges: any /* BlockResult */;
  }>(Near_Queries.getContractCodeChanges);

  const [, getLightClientProof] = useQuery<{
    getLightClientProof: any /* BlockResult */;
  }>(Near_Queries.getLightClientProof);

  const [, getContractStateChanges] = useQuery<{
    getContractStateChanges: any /* BlockResult */;
  }>(Near_Queries.getContractStateChanges);

  const [, getSingleAccessKeyChanges] = useQuery<{
    getSingleAccessKeyChanges: any /* BlockResult */;
  }>(Near_Queries.getSingleAccessKeyChanges);

  const [, getTxStatus] = useQuery<{
    getTxStatus: any /* BlockResult */;
  }>(Near_Queries.getTxStatus);

  const consolePlugins = async (e: any) => {
    e.preventDefault();
    console.log(client.getPlugins());
  };

  return (
    <div className="appContainer">
      <div className="logo"/>
      <div className="titleContainer">
        <div className="title">Polywrap NEAR Integration
          <div className="polywrap"/>
          <div className="near"/>
        </div>
      </div>
      {/* <button onClick={consolePlugins}>Console Plugins</button> */}
      <Utils />
      <JsonRpcQueries />
      {/* <Transaction /> */}
      <div className="fotterText">copyright © 2022 . CIDT Technologies. All rights reserved</div>
    </div>
  );
}
