import st from './styles.module.scss';
import { SignUpForm } from '../sign-up-form';
import { Title } from '../../../../../../components/ui/Typography/Title';
import { Text } from '../../../../../../components/ui/Typography/Text';

export const SignUpWrapper = () => {
  return (
    <div className={st.login}>
      <Title className={st.title} size="32" fontWeight="800" color="blue">
        Chekers
      </Title>
      <Text className={st.text} size="24" fontWeight="600">
        Create account
      </Text>
      <SignUpForm />
    </div>
  );
};
