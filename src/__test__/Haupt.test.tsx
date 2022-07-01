


import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Content } from '../components/Haupt/styles';






function renderHauptComponent() {
    return render(<Content />)
  }



describe('Haupt Componet', () => {
    

 
  it('should show the right text', () => {
    const { getByTestId } = renderHauptComponent();

    expect(getByTestId).toMatchSnapshot()
    
   
  });
  it('Should render correctly', () => {
    const Haup = render(<Content />)
    expect(Haup.container).toMatchSnapshot()
  })
  


    

});
