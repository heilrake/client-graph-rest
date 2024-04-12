// Core
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputFormBasic } from '../../../../../../components/ui/FormField/InputFormBasic';
import { InputFormPassword } from '../../../../../../components/ui/FormField/InputFormPassword';

// Utils
import { type SignInSchemaType, SignInSchema } from './config';
import st from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useLogin } from '../../../hooks/useLogin';

export const SignInForm = () => {
  const { onLogin, loadingLogin } = useLogin();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema) });

  const onSubmit = (data: any) => onLogin(data);

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

          <Link className={st.link} to={'/sign-up'}>
            Registration 🚀
          </Link>

          <Button className={st.button} type="primary" htmlType="submit" loading={loadingLogin}>
            Log in to Chekers
          </Button>
        </div>
      </form>
    </div>
  );
};
