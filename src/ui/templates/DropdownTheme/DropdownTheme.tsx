import { memo, useState } from "react";
import { Flex, Title } from "@atoms";
import { DropdownForm } from "@organisms";
import * as S from './DropdownTheme.style';

interface DropdownThemeProps { 
  close: boolean;
  onChange: (isDark: boolean) => void; 
}

const themeOptions = ['Light', 'Dark'];

export const DropdownTheme = memo(({ close, onChange }: DropdownThemeProps) => {
  const [theme, setTheme] = useState<string>('Light');
  return (
    <Flex mt4 pr4 alignEnd>
      <S.DropdownTheme close={close}>
        <Title white mb2 s1>Theme</Title>
        <DropdownForm<string>
          options={themeOptions}
          value={theme}
          menuTop
          onDropdownChange={e => {
            const value = e!.value;
            setTheme(value);
            onChange(value === 'Dark');
          }}
        />
      </S.DropdownTheme>
    </Flex>
  );
});