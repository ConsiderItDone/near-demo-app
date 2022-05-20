import React, { useState } from "react";
import { useQuery } from "../utils/hooks";
import { Near_Queries } from "../utils/queries";
import ResultContainer from "./ResultContainer";

export default function Transaction() {
  const [, createsTransactionWithoutWallet] = useQuery(
    Near_Queries.createsTransactionWithoutWallet
  );
  const [, signsTransactionWithoutWallet] = useQuery(
    Near_Queries.signsTransactionWithoutWallet
  );

  return (
    <div>
      <h1>Transaction</h1>
      <ResultContainer
        title="createsTransactionWithoutWallet"
        action={createsTransactionWithoutWallet}
        defaultVariables={{
          receiverId: "polydev.testnet",
          actions: [{}],
          signerId: "polydev.testnet",
        }}
      />
      <ResultContainer
        title="signsTransactionWithoutWallet"
        action={signsTransactionWithoutWallet}
      />
    </div>
  );
}

/* signTransaction(
  transaction: Near_Transaction!
): Near_SignTransactionResult! */

/* 

    createTransaction(
      receiverId: $receiverId
      actions: $actions
      signerId: $signerId

*/
