import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import { ActionModel } from '../../../data/model/action.model';
import { coreReducer, CoreState, initialState } from '../reducer/core.reducer';

export const CoreContext = createContext<
  [CoreState, Dispatch<ActionModel>] | null
>(null);

export function CoreContextProvider({ children }: PropsWithChildren) {
  return (
    <CoreContext.Provider value={useReducer(coreReducer, initialState)}>
      {children}
    </CoreContext.Provider>
  );
}
