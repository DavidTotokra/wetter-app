import { act, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Seite } from '../components/Seite/Seite';
import {wetterData} from "../model/WetterFake";
import { Place } from '../model/Wetter';
import { componentRenderByMemoryRouter } from '../utils/testUtils';
import { Content } from '../components/Seite/style';


 


describe('Test CountryDetails Componet', () => {
    

    it('Should render correctly', () => {
        const Seit= render(<Content />)
        expect(Seit.container).toMatchSnapshot()
      })
      
    



    test('should render country info', async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            componentRenderByMemoryRouter('/details/BD', <Seite setCurrentPlace={function (params: Place): void {
                throw new Error('Function not implemented.');
            } } wetterData={wetterData} loading={false} error={false} />);
        });
       
    });


});