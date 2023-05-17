import { ReactNode, memo, useMemo, useState } from "react";
import { Sidebar, SidebarItem } from "@molecules";
import * as S from "./Layout.style";
import Image from "next/image";
import { DropdownTheme } from "../DropdownTheme/DropdownTheme";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
  const [close, setClose] = useState<boolean>(false);
  const sidebarItems = useMemo<Array<SidebarItem>>(() => { 
    return [
      { label: 'Usuários', to: 'user' },
      { label: 'Clientes', to: 'client' },
      { label: 'Produtos', to: 'product' },
      { label: 'Propostas', to: 'proposal' }
    ];
  }, [])
  return (
    <S.Layout>
      <S.Header>
        <Image src="/logo.png" priority alt="Banner" width={595 * 0.4} height={121 * 0.4} />
      </S.Header>
      <S.LayoutContent>
        <Sidebar
          items={sidebarItems}
          close={close}
          onClose={() => setClose(!close)}
        />
        <DropdownTheme close={close} onChange={() => { }}/>
        <S.Content close={close}>
          {children}
        </S.Content>
      </S.LayoutContent>
    </S.Layout>
  );
});
