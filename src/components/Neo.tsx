// src/components/Neo.tsx

import * as React from 'react';

export interface IProps {
  API_Key: string;
}

function Neo({ API_Key }: IProps) {
  if (typeof(API_Key ) === undefined || API_Key === null || API_Key === "" ) {
    throw new Error('Bad API Key');
  }

  return (
    <div className="API_Key">
        It's {API_Key}
    </div>
  );
}

export default Neo;

