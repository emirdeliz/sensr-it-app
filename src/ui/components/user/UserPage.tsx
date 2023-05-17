import { User } from '@api';
import { ModalFormMaintenance, TableMaintenance } from '@templates'
import { GenericObject } from '@types';
import { useState } from 'react';
import { UserForm } from './components';

const dataSource = [
  { id: 1, name: 'Peter Menezes', phone: 47999876534, age: 33, address: '2886 Doctors Drive' },
  { id: 2, name: 'Mauro Cerato', phone: 479897765344, age: 29, address: '2266 Romrog Way' },
  { id: 3, name: 'Renan Azevedo', phone: 47988764536, age: 29, address: '2761 Gregory Lane' }
] as Array<User>;

export const UserPage = () => { 
  const [selectedUser, setSelectedUser] = useState<User>();
  const [users, setUsers] = useState<Array<User>>(dataSource);

  const columns = [
    { key: 'name', label: 'Nome' },
    { key: 'phone', label: 'Telefone' },
    { key: 'age', label: 'Idade' },
    { key: 'address', label: 'Endereço' },
  ] as GenericObject;

  return (
    <>
      <ModalFormMaintenance
        visible={!!selectedUser}
        onClose={() => setSelectedUser(undefined)}
      >
        <UserForm
          initialData={selectedUser}
          onSave={(data) => { 
            if (data.id) { 
              setUsers(users.map(u => { 
                if (u?.id === data.id) { 
                  return data;
                }
                return u;
              }))
            } else {
              data.id = users.length + 1;
              setUsers([...users, data]);
            }
            setSelectedUser(undefined);
          }}
        />
      </ModalFormMaintenance>
      <TableMaintenance<User>
        title="Usuários"
        columns={columns}
        dataSource={users}
        onAdd={() => setSelectedUser({})}
        onEdit={(data) => setSelectedUser(data)}
        onConfirmDelete={item => setUsers(users.filter(u => u.id !== item?.id))}
      />
    </>
  );
}