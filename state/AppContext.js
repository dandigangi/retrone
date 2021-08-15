import { MOCKS } from '../api/mocks';
import { createContext } from 'react';

const AppContext = createContext({
    ...MOCKS.user,
});
