import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import store from './configure'

type RootState = ReturnType<typeof store.getState>
type AppDispatchType = typeof store.dispatch


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch() as AppDispatchType

export {useAppDispatch, useAppSelector}
export type {RootState}
