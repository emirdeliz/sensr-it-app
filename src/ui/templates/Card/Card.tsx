import { Flex, Icon, IconOptions, Title } from '@atoms';
import { memo, ReactNode } from 'react';
import * as S from './Card.style';

export interface CardProps extends IconOptions {
  title: ReactNode;
  subTitle: ReactNode;
  content?: ReactNode;
}

const CardBase = memo(({ title, subTitle, ...props }: CardProps) => {
  return (
    <S.Card>
      <Flex.Col alignCenter mt3>
        <Icon {...props} orange />
        <Title center mt3 black semibold>
          {title}
        </Title>
        <Title center mt3 lh3 fs2>
          {subTitle}
        </Title>
      </Flex.Col>
    </S.Card>
  );
});

export const Card = (props: CardProps) => <CardBase {...props} />;
Card.Icon = ({ ...props }: CardProps & IconOptions) => {
  return <Card {...props} content={<Icon {...props} />} />;
};
