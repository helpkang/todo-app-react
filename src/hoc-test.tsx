import React, { FC } from "react";

type Props = {
  name?: string;
  value?: string;
};

export const A: FC<Props> = ({ name, value }) => <div>{name}:{value}</div>;

export const withAuth =
  <P extends object>(Component: React.ComponentType<P>) =>
  (role: string, rest: {name: 'test', value: 'haha'}) => {
    return (props: P) => {
      return <Component {...rest}  {...props}/>;
    };
  };
