import React, { FC } from "react";

export interface SpanProps {
  msg: string;
  msg1: string;
  msg2?: string;
}
export const Span: FC<SpanProps> = ({ msg, msg1, msg2 }) => {
  return (
    <div>
      Hello{msg}
      <div>{msg1}</div>
      <div>{msg2}</div>
    </div>
  );
};
