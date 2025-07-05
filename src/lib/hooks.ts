// src/lib/hooks.ts

// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import type { RootState, AppDispatch } from './store';

// // Typed versions of useDispatch and useSelector
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
