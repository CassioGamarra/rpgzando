import React, { useMemo } from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Button } from 'react-native';
import { useTheme } from 'styled-components';

import { IRoutes } from '@src/types/routes';
import { ICard } from '@src/types';
import { Body, Information } from '@src/components';
import { useSkill } from '@src/hooks';
import { Attributes } from './styles';

const Card: React.FC = () => {
  const { params } = useRoute<RouteProp<IRoutes, 'Card'>>();
  const { goBack } = useNavigation<NavigationProp<IRoutes, 'Card'>>();
  const { calcModifier, calcProficiency } = useSkill();
  const theme = useTheme();

  const card = useMemo(() => {
    return params as ICard;
  }, [params]);

  console.log(card);

  return (
    <Body>
      <Information title="Name" value={card.name} />

      <Information title="Level" value={String(card.level)} />

      <Information
        title="Proficiency"
        value={String(calcProficiency(card.level))}
      />

      <Information title="Race" value={card.race.name} />

      <Information title="Classe" value={card.class.name} />

      <Information title="HP" value={String(card.hp)} />

      <Attributes>
        <Information
          title="Force"
          value={`${card.attributes.for} (${calcModifier(
            card.attributes.for,
          )})`}
          width={48}
        />

        <Information
          title="Wisdom"
          value={`${card.attributes.wis} ${
            card && `(${calcModifier(card.attributes.wis)})`
          }`}
          width={48}
        />

        <Information
          title="Dexterity"
          value={`${card.attributes.dex} (${calcModifier(
            card.attributes.dex,
          )})`}
          width={48}
        />

        <Information
          title="Intelligence"
          value={`${card.attributes.int} (${calcModifier(
            card.attributes.int,
          )})`}
          width={48}
        />

        <Information
          title="Constitution"
          value={`${card.attributes.con} (${calcModifier(
            card.attributes.con,
          )})`}
          width={48}
        />

        <Information
          title="Charisma"
          value={`${card.attributes.cha} (${calcModifier(
            card.attributes.cha,
          )})`}
          width={48}
        />
      </Attributes>

      <Information title="Proficiencies" value={card.proficiencies} />

      <Information title="Items" value={card.items} />

      {!!card.notes && <Information title="Notes" value={card.notes} />}

      <Button title="Go back" color={theme.colors.secondary} onPress={goBack} />
    </Body>
  );
};

export { Card };
