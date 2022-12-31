import { useState } from 'react';
import Switch from '@dlguswo333/react-simple-switch';
import Control from './Control';

const DEFAULT_SWITCH_PROPS = {
  WIDTH: 50,
  HEIGHT: 26,
};

const Preview = () => {
  const [width, setWidth] = useState(DEFAULT_SWITCH_PROPS.WIDTH);
  const [height, setHeight] = useState(DEFAULT_SWITCH_PROPS.HEIGHT);
  const [disabled, setDisabled] = useState(false);
  return <section className='Preview'>
    <Switch width={width} height={height} defaultValue={false} disabled={disabled} />
    <Control width={width} setWidth={setWidth}
      height={height} setHeight={setHeight}
      disabled={disabled} setDisabled={setDisabled} />
  </section>;
};

export default Preview;
