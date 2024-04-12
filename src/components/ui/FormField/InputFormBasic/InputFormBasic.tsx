// Core
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import cx from 'classnames';

// Utils
import st from '../styles.module.scss';

type InputFormProps = {
  label?: string;
  control: any;
  name: string;
  rules?: Record<string, any>;
  placeholder?: string;
  type?: string;
  size?: 'large' | 'default';
  className?: string;
};

export const InputFormBasic = (props: InputFormProps) => {
  const {
    label,
    name,
    control,
    rules,
    type = 'text',
    placeholder,
    className = '',
    size = 'default',
  } = props;

  const inputStyles = cx(className, {
    [st[`input-size-${size}`]]: Boolean(size),
  });

  return (
    <>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <Input {...field} type={type} className={inputStyles} placeholder={placeholder} />
        )}
      />
    </>
  );
};
