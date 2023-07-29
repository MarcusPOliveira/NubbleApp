import React from 'react'
import { TextProps as RNTextProps, TextStyle } from 'react-native'

import { createText } from '@shopify/restyle'

import { Theme } from '@theme'

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall'

//cifrão para declarar uma constante de estilos, Record para passar dois types: TextVariants seria o index e TextStyle o valor que o Typescript vai verificar se está sendo passado corretamente
export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: { fontSize: 32, lineHeight: 38.4 },
  headingMedium: { fontSize: 22, lineHeight: 26.4 },
  headingSmall: { fontSize: 18, lineHeight: 23.4 },

  paragraphLarge: { fontSize: 18, lineHeight: 25.2 },
  paragraphMedium: { fontSize: 16, lineHeight: 22.4 },
  paragraphSmall: { fontSize: 14, lineHeight: 19.6 },

  paragraphCaption: { fontSize: 12, lineHeight: 16.8 },
  paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}

//add as fontes customizadas na pasta src/assets/fonts e também em: android/app/src/main/assets/fonts
export const $fontFamily = {
  black: 'Satoshi-Black',
  blackItalic: 'Satoshi-BlackItalic',
  bold: 'Satoshi-Bold',
  boldItalic: 'Satoshi-BoldItalic',
  italic: 'Satoshi-Italic',
  light: 'Satoshi-Light',
  lightItalic: 'Satoshi-LightItalic',
  medium: 'Satoshi-Medium',
  mediumItalic: 'Satoshi-MediumItalic',
  regular: 'Satoshi-Regular',
}

//feito dessa forma para driblas issue que ocorre no Android
function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.boldItalic : $fontFamily.bold
  }

  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic
    case bold:
      return $fontFamily.bold
    case italic:
      return $fontFamily.italic
    case semiBold && italic:
      return $fontFamily.mediumItalic
    case semiBold:
      return $fontFamily.medium
    default:
      return $fontFamily.regular
  }
}

//pegando as props do meu componente SRText
type SRTextProps = React.ComponentProps<typeof SRText>

const SRText = createText<Theme>()

export interface TextProps extends SRTextProps {
  preset?: TextVariants
  bold?: boolean
  italic?: boolean
  semiBold?: boolean
}

export function Text({
  children,
  preset = 'paragraphMedium',
  bold,
  italic,
  semiBold,
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold)

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...sRTextProps}
    >
      {children}
    </SRText>
  )
}
