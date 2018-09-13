//@flow
import type { AppLoader } from 'constants';

/******************************************
 * REDUX HELPER TYPES
 ******************************************/

type _ExtractActionType = <A>((...args: any) => A) => A;
export type ExtractActionType<Fn> = $Call<_ExtractActionType, Fn>;
export type ExtractActionsType<T> = $Values<$ObjMap<T, _ExtractActionType>>;
export type Exact<T> = T & $Exact<T>;

/******************************************
 * APP
 ******************************************/
export type AppStateType = {
  appInitialized: boolean,
  loaders: AppLoader[],
};
