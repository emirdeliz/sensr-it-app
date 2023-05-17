import { screen, render } from 'test-utils/testing-library-utils';
import {
  ModalSimple,
  ModalOverlay
} from 'stories/framework/molecules';
import { Modal } from './Modal';
import { Colors, Opacity } from 'framework/ui/system/theme';

describe('Modal component test', () => {
  it('Have Modal', async () => {
    const { container: modalNode } = render(<Modal />);
    expect(typeof modalNode).toEqual(typeof (<Modal />));
  });

  it('Have Modal title', async () => {
    render(<ModalSimple {...ModalSimple.args} />);
    const title = await screen.findByText(/hello world!/i);
    expect(title).toBeInTheDocument();
  });

  it('Have Modal overlay', async () => {
    const { container: modalNode } = render(<ModalOverlay {...ModalOverlay.args} />);
    const title = await screen.findAllByText(/criação de pin/i);
    expect(title[0]).toBeInTheDocument();

    expect(modalNode.parentNode?.lastChild).toHaveStyleRule(
      'background-color',
      Colors.Black
    );
    expect(modalNode.parentNode?.lastChild).toHaveStyleRule(
      'opacity',
      String(Opacity.Overlay)
    );
  });
});
