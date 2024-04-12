// Core
import { PropsWithChildren } from 'react';
import cx from 'classnames';

// Utils
import st from './styles.module.scss';

type TextAlignmentVerticalType = '' | 'top' | 'middle' | 'bottom' | 'baseline';
type TextAlignmentHorizontalType = '' | 'left' | 'center' | 'right';
type TextSizeType = '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '38' | '44';
type TextSkeletonSizeType = '10' | '12' | '14' | '16' | '18' | '20' | 'full';
type TextFontType = 'system' | 'base' | 'second';
type TextTransformType = 'up' | 'low' | 'cap' | 'revert';
type TextFontWeightType = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type TextFontStyleType = 'italic';
type TextDecorationType = 'line-through';
type TextColorWhiteType = 'white-100';
type TextColorGreyType =
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-900'
  | 'gray-950'
  | 'gray-1000'
  | 'gray-1100';
type TextColorMainGrayType = 'main-gray-3';
type TextColorOrangeType = 'orange-800' | 'orange-900';
type TextColorBlueType = 'blue-700' | 'blue-750' | 'blue-800';
type TextColorType =
  | TextColorWhiteType
  | TextColorGreyType
  | TextColorBlueType
  | TextColorMainGrayType
  | TextColorOrangeType;
type TextWrapType = 'nowrap';

export type TextProps = PropsWithChildren<{
  children?: string | number | JSX.Element;
  loading?: boolean;
  tag?: 'span' | 'div' | 'p';
  alignmentVertical?: TextAlignmentVerticalType;
  alignmentHorizontal?: TextAlignmentHorizontalType;
  transform?: TextTransformType;
  size?: TextSizeType;
  skeletonSize?: TextSkeletonSizeType;
  color?: TextColorType;
  noColor?: boolean;
  font?: TextFontType;
  fontWeight?: TextFontWeightType;
  fontStyle?: TextFontStyleType;
  box?: 'full' | 'inline';
  testId?: string;
  className?: string;
  decoration?: TextDecorationType;
  wrap?: TextWrapType;
}>;

export const Text = (props: TextProps) => {
  const {
    tag: Element = 'span',
    size = '16',
    font = 'base',
    fontWeight = '400',
    fontStyle = '',
    color = 'gray-900',
    noColor,
    alignmentVertical = '',
    skeletonSize = '',
    alignmentHorizontal = '',
    transform = '',
    box = '',
    className = '',
    testId,
    children = '',
    loading,
    decoration = '',
    wrap = '',
  } = props;

  const textStyles = cx(className, st.text, {
    [st[`text-font-${font}`]]: Boolean(font),
    [st[`text-font-weight-${fontWeight}`]]: Boolean(fontWeight),
    [st[`text-font-style-${fontStyle}`]]: Boolean(fontStyle),
    [st[`text-size-${size}`]]: Boolean(size),
    [st[`text-color-${color}`]]: !noColor && Boolean(color),
    [st[`text-box-${box}`]]: Boolean(box),
    [st[`text-alignment-vertical-${alignmentVertical}`]]: Boolean(alignmentVertical),
    [st[`text-alignment-horizontal-${alignmentHorizontal}`]]: Boolean(alignmentHorizontal),
    [st[`text-transform-${transform}`]]: Boolean(transform),
    [st[`text-decoration-${decoration}`]]: Boolean(decoration),
    [st[`text-wrap-${wrap}`]]: Boolean(wrap),
  });

  return <Element className={textStyles}>{children}</Element>;
};
