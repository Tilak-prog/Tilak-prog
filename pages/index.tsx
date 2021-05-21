import React from 'react';
import { useAuthenticated } from '../component/AuthReducer/useAuthenticated';

export default function Layout(): JSX.Element | null {
  useAuthenticated();
  return <>Index!</>;
}