// Core
import { PropsWithChildren, ReactNode } from 'react';
import cx from 'classnames';

// Utils
import st from './styles.module.scss';

type TitleAlignmentVerticalType = '' | 'top' | 'middle' | 'bottom';
type TitleAlignmentHorizontalType = 'left' | 'center' | 'right';
type TitleSizeType = '12' | '14' | '16' | '18' | '20' | '24' | '30' | '32' | '36' | '38' | '44';
type TitleSkeletonSizeType = '10' | '12' | '14' | '16' | '18' | '20' | '40';
type TitleFontWeightType = '100' | '200' | '400' | '600' | '700' | '800';
type TitleFontType = 'system' | 'base' | 'second';
type TitleTransformType = '' | 'capitalize' | 'uppercase' | 'lowercase';
type TitleColorWhiteType = 'white-100';
type TitleColorGreyType =
  | 'gray-100'
  | 'gray-400'
  | 'gray-500'
  | 'gray-700'
  | 'gray-900'
  | 'gray-1000';
type TitleBlackWhiteType = 'black';
type TitleColorBlueType = 'blue';
type TitleColorOrangeType = 'orange-10';
type TitleColorType =
  | TitleColorWhiteType
  | TitleColorGreyType
  | TitleColorBlueType
  | TitleColorOrangeType
  | TitleBlackWhiteType;

type TitleProps = PropsWithChildren<{
  children: string | JSX.Element | ReactNode;
  loading?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  alignmentVertical?: TitleAlignmentVerticalType;
  alignmentHorizontal?: TitleAlignmentHorizontalType;
  box?: 'full';
  size?: TitleSizeType;
  skeletonSize?: TitleSkeletonSizeType;
  color?: TitleColorType;
  font?: TitleFontType;
  fontWeight?: TitleFontWeightType;
  transform?: TitleTransformType;
  testId?: string;
  className?: string;
}>;

export const Title = (props: TitleProps) => {
  const {
    tag: Element = 'h2',
    alignmentVertical = '',
    alignmentHorizontal = 'left',
    size = '20',
    skeletonSize = '',
    color = 'gray-900',
    font = 'base',
    fontWeight = '600',
    transform = '',
    className = '',
    box,
    testId,
    children,
    loading,
  } = props;

  const titleSt = cx(className, st.title, {
    [st[`title-size-${size}`]]: Boolean(size),
    [st[`title-font-${font}`]]: Boolean(font),
    [st[`title-font-weight-${fontWeight}`]]: Boolean(fontWeight),
    [st[`title-alignment-vertical-${alignmentVertical}`]]: Boolean(alignmentVertical),
    [st[`title-alignment-horizontal-${alignmentHorizontal}`]]: Boolean(alignmentHorizontal),
    [st[`title-color-${color}`]]: Boolean(color),
    [st[`title-transform-${transform}`]]: Boolean(transform),
    [st['title-box-full']]: box === 'full',
  });
  return <Element className={titleSt}>{children}</Element>;
};
