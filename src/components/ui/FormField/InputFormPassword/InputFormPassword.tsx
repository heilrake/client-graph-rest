// Core
import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import cx from 'classnames';

// Utils
import st from '../styles.module.scss';

import { PasswordProps } from 'antd/es/input';

type InputFormProps = PasswordProps & {
  label?: string;
  control: any;
  name: string;
  rules?: Record<string, any>;
  placeholder?: string;
  type?: string;
  size?: 'large' | 'default';
  className?: string;
};

export const InputFormPassword = (props: InputFormProps) => {
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
          <Input.Password
            {...field}
            type={type}
            className={inputStyles}
            placeholder={placeholder}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        )}
      />
    </>
  );
};
