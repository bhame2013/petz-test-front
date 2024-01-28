import { useEffect, useState } from "react";

import { NextImage } from "@/presentation";

import * as S from "./styles";

export function Logo() {
  const [animation, setAnimaton] = useState({
    active: true,
    initialAnimation: true,
  });

  function close() {
    setAnimaton((state) => ({ ...state, active: false }));
  }

  function open() {
    setAnimaton(() => ({ initialAnimation: false, active: true }));
  }

  function closeIfUserDontHover() {
    setAnimaton((state) => ({
      ...state,
      active: state.initialAnimation ? false : true,
    }));
  }

  useEffect(() => {
    if (process.browser) {
      setTimeout(() => {
        closeIfUserDontHover();
      }, 5000);
    }
  }, []);

  return (
    <S.Logo
      href="/"
      onMouseEnter={open}
      onMouseLeave={close}
      $active={animation.active}
    >
      <div className="icon">
        <NextImage src="/images/logo.png" alt="logo" />
      </div>

      <div className="word">
        <p className="font-20-bold">Centro Pokémon</p>
      </div>
    </S.Logo>
  );
}
