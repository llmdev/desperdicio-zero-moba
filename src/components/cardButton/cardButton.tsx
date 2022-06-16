import { CardButtonWrapper, TextButton } from './cardButton.style';

export function CardButton({ children, onPress}) {
  return (
    <CardButtonWrapper onPress={onPress}>
      <TextButton>{children}</TextButton>
    </CardButtonWrapper>
  )
}
