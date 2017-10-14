import { renderComponent, expect } from '../testHelper';
import Header from '../../src/components/nav/Header';

// Example test
describe('Header', () => {
  let component = null;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('Should have the correct ID', () => {
    expect(component.id).to.equal('header');
  });
})
