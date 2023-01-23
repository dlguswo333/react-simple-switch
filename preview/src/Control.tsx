import {ChangeEventHandler, FC, FormEventHandler, useCallback} from 'react';
import Switch from '@dlguswo333/react-simple-switch';

type Props = {
  width: number;
  height: number;
  disabled: boolean;
  onBackgroundColor?: string;
  offBackgroundColor?: string;
  setWidth: (num: number) => void;
  setHeight: (num: number) => void;
  setDisabled: (val: boolean) => void;
  setOnBackgroundColor: (val: string) => void;
  setOffBackgroundColor: (val: string) => void;
}

const Control: FC<Props> = ({
  width, height, disabled, onBackgroundColor, offBackgroundColor,
  setWidth, setHeight, setDisabled, setOnBackgroundColor, setOffBackgroundColor
}) => {
  const onWidthChange = useCallback<FormEventHandler<HTMLInputElement>>((e) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value)) {
      return;
    }
    setWidth(value);
  }, [setWidth]);

  const onHeightChange = useCallback<FormEventHandler<HTMLInputElement>>((e) => {
    const value = Number(e.currentTarget.value);
    if (isNaN(value)) {
      return;
    }
    setHeight(value);
  }, [setHeight]);

  const onDisabledChange = useCallback((value) => {
    setDisabled(value);
  }, [setDisabled]);

  const onOnBackgroundColorChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setOnBackgroundColor(e.target.value);
  }, [setOnBackgroundColor]);

  const onOffBackgroundColorChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setOffBackgroundColor(e.target.value);
  }, [setOffBackgroundColor]);

  return <section className='Control'>
    <div className='Panel'>
      <div>
        <label>width: {width}</label>
      </div>
      <div>
        <input type='range' min={10} max={200} value={width} onInput={onWidthChange}></input>
      </div>
    </div>
    <div className='Panel'>
      <div>
        <label>height: {height}</label>
      </div>
      <div>
        <input type='range' min={10} max={200} value={height} onInput={onHeightChange}></input>
      </div>
    </div>
    <div className='Panel'>
      <div>
        <label>disabled: {disabled.toString()}</label>
      </div>
      <div>
        <Switch width={34} height={20} defaultValue={disabled} onChange={onDisabledChange} />
      </div>
    </div>
    <div className='Panel'>
      <div>
        <label>onBackgroundColor: {onBackgroundColor}</label>
      </div>
      <div>
        <input type='color' defaultValue={onBackgroundColor} onChange={onOnBackgroundColorChange} />
      </div>
    </div>
    <div className='Panel'>
      <div>
        <label>offBackgroundColor: {offBackgroundColor}</label>
      </div>
      <div>
        <input type='color' defaultValue={offBackgroundColor} onChange={onOffBackgroundColorChange} />
      </div>
    </div>
  </section>;
};

export default Control;
