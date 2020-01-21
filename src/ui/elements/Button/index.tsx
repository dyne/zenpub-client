import React, { SFC } from 'react';
import styled from 'ui/themes/styled';
import { Button } from 'rebass/styled-components';
import Loader from '../Loader';
import { darken, lighten, transitions } from 'polished';

const WrapperButton = styled(Button)<{ variant: string; isIcon: boolean }>`
  ${transitions('background, 0.2s')};
  width: ${props => (props.isIcon === true ? '40px' : 'auto')};
  border-radius: ${props => (props.isIcon === true ? '100%' : '4px')};
  padding: ${props => (props.isIcon === true ? '0px' : 'auto')};
  &:hover  {
    background: ${props =>
      props.variant === 'primary'
        ? darken('0.1', props.theme.colors.orange)
        : lighten('0.3', props.theme.colors.orange)};
  }
`;

export interface Props {
  isSubmitting?: boolean;
  variant: string;
  isDisabled?: boolean;
  isIcon?: boolean;
  onClick(): void;
  // children: ComponentType
}

const MNButton: SFC<Props> = props => (
  <WrapperButton
    {...props}
    isSubmitting={props.isSubmitting}
    isDisabled={props.isDisabled}
    isIcon={props.isIcon}
    variant={props.variant}
  >
    {props.isSubmitting ? <Loader variant={props.variant} /> : props.children}
  </WrapperButton>
);

export default MNButton;