import { TableMaintenance } from '@templates'
import { GenericObject } from '@types';
import { useState } from 'react';

const dataSource = [
  { id: 1, client: 'Peter Menezes', total: 15.20, obs: 'Compra de materiais para escola' },
  { id: 2, client: 'Mauro Cerato', total: 23.45, obs: 'Compra de produtos de limpeza' },
  { id: 3, client: 'Renan Azevedo', total: 52.50, obs: 'Compra de produtos elétricos' }
] as Array<Proposal>;

export const ProposalPage = () => { 
  const [selectedProposal, setSelectedProposal] = useState<Proposal>();
  const [proposals, setProposals] = useState<Array<Proposal>>(dataSource);
  const columns = [
    { key: 'client', label: 'Cliente', },
    { key: 'total', label: 'Preço Total', currency: true },
    { key: 'obs', label: 'Observação', },
  ] as GenericObject;

  return (
    <TableMaintenance<Proposal>
      title="Propostas"
      columns={columns}
      dataSource={proposals}
      onAdd={() => setSelectedProposal({})}
      onEdit={(data) => setSelectedProposal(data)}
      onConfirmDelete={item => setProposals(proposals.filter(u => u.id !== item?.id))}
    />
  );
}