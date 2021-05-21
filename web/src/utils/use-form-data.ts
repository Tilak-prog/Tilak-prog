import { set } from 'lodash';
import { useCallback, useState } from 'react';

export default function UseFormData(initialData?: any) {
  const [data, setData] = useState(initialData || {});

  const patchData = useCallback(
    (value: any, path?: string) => {
      const newData = { ...data };
      if (path) {
        set(newData, path, value);
        setData(newData);
      } else {
        setData(initialData);
      }
    },
    [data, setData, initialData],
  );

  return { data, patchData, setData };
}
