import React, { useState } from "react";
import { useQuery } from "../utils/hooks";
import { Near_Queries } from "../utils/queries";
import ResultContainer from "./ResultContainer";

export default function Utils() {
  const [, parse] = useQuery(Near_Queries.parseNearAmount);

  const [, format] = useQuery(Near_Queries.formatNearAmount);

  return (
    <div>
      <h1>Utils</h1>
      <ResultContainer
        title="formatNearAmount"
        action={format}
        defaultVariables={{
          amount: "9999989999999998370878870000000",
        }}
      />
      <ResultContainer
        title="parseNearAmount"
        action={parse}
        defaultVariables={{
          amount: "0.000008999999999837087887",
        }}
      />
    </div>
  );
}
