import { UseWeb3ApiQuery } from "@web3api/react/build/query";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  action: (...args: any) => any;
  defaultVariables?: any;
};

const textAreaStyle = {
  padding: "10px",
  minWidth: "200px",
  width: "40%",
  minHeight: "150px",
  height: "100%",
};

export default function ResultContainer({
  title,
  action,
  defaultVariables,
}: Props) {
  const [state, setState] = useState<string>("");
  const [status, setStatus] = useState("");
  const [variables, setVariables] = useState(
    defaultVariables ? JSON.stringify(defaultVariables) : ""
  );

  const handleResult = (result: {
    data: any;
    errors: any[];
    loading: boolean;
  }) => {
    console.log(result);
    if (result.data || result.errors) {
      if (result.data) {
        const key = Object.keys(result.data)[0];

        const data = result.data[key];
        if (data) {
          setState(JSON.stringify(data, null, 2));
          setStatus("success");
        }
      } else if (result.errors) {
        setState(result.errors[0].message);
        setStatus("error");
      }
    }
  };

  const handleOnClick = async (e: any) => {
    e.preventDefault();
    if (variables) {
      try {
        const parsed = JSON.parse(variables);
        if (parsed) {
          const res = await action(parsed);
          handleResult(res);
        }
      } catch (e: any) {
        setState(e);
        setStatus("error");
        console.log(e);
      }
    } else {
      const res = await action();
      handleResult(res);
    }
  };

  return (
    <div style={{ display: "flex", marginBottom: "15px" }}>
      <button onClick={handleOnClick}>{title}</button>
      <textarea
        style={textAreaStyle}
        value={variables}
        onChange={(e) => {
          e.preventDefault();
          setVariables(e.target.value);
        }}
      />
      <textarea
        disabled
        style={{
          ...textAreaStyle,
          border: `1.5px solid ${
            status === "success" ? "green" : status === "error" ? "red" : ""
          }`,
        }}
        value={state}
      />
    </div>
  );
}
