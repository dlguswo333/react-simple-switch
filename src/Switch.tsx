import {ChangeEventHandler, CSSProperties, FC, memo, useCallback, useMemo, useState} from 'react';
import Style from './asset/style.module.scss';
import { getPx, getClassName } from './util';

type SwitchProps = {
  defaultValue: boolean,
  onChange?: (value: boolean)=> unknown,
  width?: number,
  height?: number,
}

/**
 * react-simple-switch.
 */
const Switch: FC<SwitchProps> = memo(({defaultValue = false, onChange, width = 60, height = 26}) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const sliderSize = useMemo(() => {
    const containerSize = Math.min(width, height);
    return Math.min(containerSize - 8, Math.floor(containerSize * 0.9));
  }, [height, width]);

  const containerStyle = useMemo<CSSProperties>(() => {
    return {width: getPx(width), height: getPx(height)};
  }, [height, width]);
  const sliderStyle = useMemo<CSSProperties>(() => {
    const translateX = (width - height) / 2;
    return {width: getPx(sliderSize), height: getPx(sliderSize), transform: `translateX(${isChecked ? translateX : -translateX}px)`};
  }, [width, height, isChecked, sliderSize]);

  const containerClassName = useMemo(() =>
    getClassName(Style.Container, {[Style.Checked]: isChecked}),
  [isChecked]);
  const sliderClassName = useMemo(() =>
    getClassName(Style.Slider,  {[Style.Checked]: isChecked}),
  [isChecked]);

  const onChangeCallback = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(checked);
  }, [onChange]);

  return <label className={containerClassName} style={containerStyle}>
    <input type='checkbox' checked={isChecked} onChange={onChangeCallback} />
    <div className={sliderClassName} style={sliderStyle}></div>
  </label>;
});
Switch.displayName = 'Switch';

export default Switch;
