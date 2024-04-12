import { Title } from '../../../../../../components/ui/Typography/Title';
import { Text } from '../../../../../../components/ui/Typography/Text';
import { SignInForm } from '../sign-in-form';
import st from './styles.module.scss';

export const SignInWrapper = () => {
  return (
    <div className={st.login}>
      <Title className={st.title} size="32" fontWeight="800" color="blue">
        Chekers
      </Title>
      <Text className={st.text} size="24" fontWeight="600">
        Log in to your account
      </Text>
      <SignInForm />
    </div>
  );
};
