import React from 'react';
import { useTheme } from 'styled-components/native';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { Row, RowProps } from '../Row';
import * as S from './styles';

interface ActionBoxProps {
  title: string;
  rows: RowProps[];
}

export function ActionBox({ title, rows }: ActionBoxProps) {
  const theme = useTheme();

  return (
    <>
      <S.Container>
        <S.TitleSpacer>
          <Text color={theme.primary} size="md" weight="bold">
            {title}
          </Text>
        </S.TitleSpacer>
        {rows.map(row => (
          <Row
            icon={row.icon}
            label={row.label}
            value={row.value}
            iconColor={row.iconColor}
            key={row.label + Date.now()}
          />
        ))}
        <Button label={title} />
      </S.Container>
    </>
  );
}
