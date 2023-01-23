import {useState} from 'react';
import Switch from '@dlguswo333/react-simple-switch';
import Control from './Control';

const DEFAULT_SWITCH_PROPS = {
  WIDTH: 50,
  HEIGHT: 26,
  ON_BACKGROUND_COLOR: undefined,
  OFF_BACKGROUND_COLOR: undefined,
};

const Preview = () => {
  const [width, setWidth] = useState(DEFAULT_SWITCH_PROPS.WIDTH);
  const [height, setHeight] = useState(DEFAULT_SWITCH_PROPS.HEIGHT);
  const [disabled, setDisabled] = useState(false);
  const [onBackgroundColor, setOnBackgroundColor] = useState<string|undefined>(DEFAULT_SWITCH_PROPS.ON_BACKGROUND_COLOR);
  const [offBackgroundColor, setOffBackgroundColor] = useState<string|undefined>(DEFAULT_SWITCH_PROPS.OFF_BACKGROUND_COLOR);

  return <section className='Preview'>
    <div className='Switch-Holder'>
      <Switch width={width} height={height} defaultValue={false} disabled={disabled}
        onBackgroundColor={onBackgroundColor} offBackgroundColor={offBackgroundColor} />
    </div>
    <Control width={width} setWidth={setWidth}
      height={height} setHeight={setHeight}
      disabled={disabled} setDisabled={setDisabled}
      onBackgroundColor={onBackgroundColor} setOnBackgroundColor={setOnBackgroundColor}
      offBackgroundColor={offBackgroundColor} setOffBackgroundColor={setOffBackgroundColor} />
  </section>;
};

export default Preview;
