import React, { useContext } from 'react';

import { ImgContext } from '../../context/Context';

import Uploader from '../uploader/Uploader';
import Converter from '../converter/Converter';
import Dropper from '../../components/Dropper/Dropper';

const Main = () => {
  const { img } = useContext(ImgContext);

  return (
    <>
      <Dropper></Dropper>
      {img ? <Converter></Converter> : <Uploader></Uploader>}
    </>
  );
};

export default Main;
