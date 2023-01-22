import {FC, FormEventHandler, useCallback} from 'react';
import Switch from '@dlguswo333/react-simple-switch';

type Props = {
  width: number;
  height: number;
  disabled: boolean;
  setWidth: (num: number) => void;
  setHeight: (num: number) => void;
  setDisabled: (val: boolean) => void;
}

const Control: FC<Props> = ({width, height, disabled, setWidth, setHeight, setDisabled}) => {
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
        <label>disabled: {disabled}</label>
      </div>
      <div>
        <Switch width={34} height={20} defaultValue={disabled} onChange={onDisabledChange} />
      </div>
    </div>
  </section>;
};

export default Control;
