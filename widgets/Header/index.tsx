import React, { FC } from "react";

type PropsType = {};

const Header: FC<PropsType> = ({}) => {
  return (
    <header>
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);
