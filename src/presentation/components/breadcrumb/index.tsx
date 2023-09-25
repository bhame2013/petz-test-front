import { Fragment } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

export function Breadcrumb() {
  const router = useRouter();

  const routeNames = router.asPath?.split("?")[0]?.split("/");

  return (
    <S.Breadcrumb className="breadcrumb">
      <Link href="/">Home</Link>

      <span>{">"}</span>

      {routeNames.map((route, index) => {
        if (!route) {
          return;
        }

        let name =
          index === 0
            ? route
            : route?.charAt(0)?.toUpperCase() + route.slice(1);
        let url =
          index === 0
            ? `/${route}`
            : `${routeNames.slice(0, index + 1).join("/")}`;

        return (
          <Fragment key={route}>
            <Link href={url}>{name.replaceAll("-", " ")}</Link>

            {routeNames.length - 1 !== index && <span>{">"}</span>}
          </Fragment>
        );
      })}
    </S.Breadcrumb>
  );
}
