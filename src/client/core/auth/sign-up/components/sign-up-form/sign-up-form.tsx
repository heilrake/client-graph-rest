// Core
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputFormBasic } from '../../../../../../components/ui/FormField/InputFormBasic';
import { InputFormPassword } from '../../../../../../components/ui/FormField/InputFormPassword';

// Utils
import { SignUpSchema, type SignUpSchemaType } from './config';
import st from './styles.module.scss';
import { Link } from 'react-router-dom';

export const SignUpForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={st['input-wrapper']}>
          <InputFormBasic size="large" placeholder="Type email" name="email" control={control} />
          <InputFormPassword
            size="large"
            placeholder="Type password"
            name="password"
            control={control}
            type="password"
          />
          <Link className={st.link} to={'/sign-in'}>
            Registration
          </Link>
          <Button className={st.button} type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
