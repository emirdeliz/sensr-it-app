import { Flex, Icon, Link, Title } from '@atoms';
import { Logo } from '../Logo/Logo';
import * as S from './Banner.style';
import { t } from '@i18n';
import { Form, InputForm, Modal, useModal } from '@molecules';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

enum HomeTypeModal {
  Login = 'login',
  Register = 'register',
}

export const Banner = () => {
  const router = useRouter();
  const { setShowModal } = useModal();
  const [typeModal, setTypeModal] = useState<HomeTypeModal>();

  const isTypeModalRegister = useMemo(() => {
    return typeModal === HomeTypeModal.Register;
  }, [typeModal]);

  useEffect(() => {
    typeModal && setShowModal(true);
  }, [setShowModal, typeModal]);

  return (
    <S.Banner>
      <S.Top>
        <Flex.Row alignCenter justifySpaceAround wFull hFull pl2 pr2>
          <Link>
            <Icon.Menu orange sm />
          </Link>
          <Logo />
          <Link
            onClick={() => {
              setTypeModal(HomeTypeModal.Login);
            }}
          >
            <Icon.User orange sm /> {t('enter')}
          </Link>
          <Link
            onClick={() => {
              setTypeModal(HomeTypeModal.Register);
            }}
          >
            <Icon.CartArrowDown orange sm /> {t('purchase')}
          </Link>
        </Flex.Row>
      </S.Top>
      <Modal.Confirm
        overlay
        maxWidth="500px"
        maxHeight="700px"
        onClose={() => {
          console.log({
            isTypeModalRegisterAAA: isTypeModalRegister,
            typeModal,
          });
          setShowModal(false);
        }}
      >
        <Title semibold>
          {t(isTypeModalRegister ? 'new-register' : 'login')}
        </Title>
        <Form>
          {isTypeModalRegister && (
            <InputForm value="Peter" onChange={() => {}}>
              {t('name')}
            </InputForm>
          )}
          <InputForm value="peter@gmail.com" onChange={() => {}}>
            {t('email')}
          </InputForm>
          <InputForm value="#$%ˆ&*" onChange={() => {}} password>
            {t('password')}
          </InputForm>
        </Form>
      </Modal.Confirm>
    </S.Banner>
  );
};
