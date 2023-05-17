import { useState } from "react";
import { User } from "@api";
import { Button, Col, Flex, Row, Title } from "@atoms";
import { Form, InputForm } from "@molecules";

interface ClientFormProps {
  initialData?: User;
  onSave: (user: User) => void;
}

export const ClientForm = ({ initialData, onSave }: ClientFormProps) => { 
  const [user, setUser] = useState<User>(initialData || {});
  return (
    <Form>
      <Title mb5 fs3>Cliente</Title>
      <Row>
        <Col.C12>
          <InputForm
            value={user.name}
            onChange={e => setUser({ ...user, name: e as string })}
          >Nome</InputForm>
        </Col.C12>
      </Row>
      <Row>
        <Col.C6>
          <InputForm
            phone
            value={user.phone}
            onChange={e => setUser({ ...user, phone: e as number })}
          >Telefone</InputForm>
        </Col.C6>
        <Col.C6>
          <InputForm
            value={user.age}
            onChange={e => setUser({ ...user, age: e as number })}
          >Idade</InputForm>
        </Col.C6>
      </Row>
      <Row>
        <Col.C12>
          <InputForm
            value={user.address}
            onChange={e => setUser({ ...user, address: e as string })}
          >
            Endereço
          </InputForm>
        </Col.C12>
      </Row>
      <Flex alignEnd wFull>
        <Button onClick={() => onSave(user)}>Salvar</Button>
      </Flex>
    </Form>
  );
}