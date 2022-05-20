import React from "react";
import { useQuery } from "../utils/hooks";
import { Near_Queries } from "../utils/queries";
import ResultContainer from "./ResultContainer";

const defaultBlockQuery = { blockQuery: { finality: "final" } };

export default function JsonRpcQueries() {
  const [, getBlock] = useQuery(Near_Queries.getBlock);

  const [, status] = useQuery(Near_Queries.getStatus);

  const [, blockChanges] = useQuery(Near_Queries.blockChanges);

  const [, experimental_protocolConfig] = useQuery(
    Near_Queries.experimental_protocolConfig
  );
  const [, accessKeyChanges] = useQuery(Near_Queries.accessKeyChanges);

  const [, accountChanges] = useQuery(Near_Queries.getAccountChanges);

  const [, gasPrice] = useQuery(Near_Queries.getGasPrice);

  return (
    <div>
      <h1>JsonRpcQueries</h1>
      <ResultContainer title="status" action={status} />
      <ResultContainer
        title="getBlock"
        action={getBlock}
        defaultVariables={defaultBlockQuery}
      />
      <ResultContainer
        title="blockChanges"
        action={blockChanges}
        defaultVariables={defaultBlockQuery}
      />
      <ResultContainer
        title="blockChanges"
        action={blockChanges}
        defaultVariables={defaultBlockQuery}
      />
      <ResultContainer
        title="experimental_protocolConfig"
        action={experimental_protocolConfig}
        defaultVariables={{ blockReference: { finality: "final" } }}
      />
      <ResultContainer
        title="accessKeyChanges"
        action={accessKeyChanges}
        defaultVariables={{
          accountIdArray: ["polydev.testnet"],
          ...defaultBlockQuery,
        }}
      />
      <ResultContainer
        title="accessKeyChanges"
        action={accessKeyChanges}
        defaultVariables={{
          accountIdArray: ["polydev.testnet"],
          ...defaultBlockQuery,
        }}
      />
      <ResultContainer
        title="accountChanges"
        action={accountChanges}
        defaultVariables={{
          accountIdArray: ["polydev.testnet"],
          ...defaultBlockQuery,
        }}
      />
      <ResultContainer
        title="gasPrice"
        action={gasPrice}
        defaultVariables={{
          blockId: "",
        }}
      />
    </div>
  );
}

/* 

  """
    JsonRpcProvider Query Functions (Not Implemented)
  """

  txStatus(
    txHash: String! #(Bytes | String)! 
    accountId: String!
  ): Near_FinalExecutionOutcome!

  txStatusReceipts(
    txHash: String! #Bytes!
    accountId: String!
  ): Near_FinalExecutionOutcomeWithReceipts!

  chunk(
    chunkId: String!  #  (String | [BigInt!])! chunk hash or [blockId, chunkId]
  ): ChunkResult!

  validators(
    blockId: String
  ): EpochValidatorInfo!

  lightClientProof(
    request: LightClientProofRequest!
  ): LightClientProof!


  singleAccessKeyChanges(
    accessKeyArray: [AccessKeyWithPublicKey!]!,
    blockQuery: BlockReference
  ): ChangeResult



  contractStateChanges(
    accountIdArray: [String!]!
    blockQuery: BlockReference!
    keyPrefix: String
  ): ChangeResult!

  contractCodeChanges(
    accountIdArray: [String!]!
    blockQuery: BlockReference!
  ): ChangeResult!


}
*/
