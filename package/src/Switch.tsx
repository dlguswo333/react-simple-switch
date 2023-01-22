import {ChangeEventHandler, CSSProperties, FC, FocusEventHandler, memo, useCallback, useMemo, useRef, useState} from 'react';
import Style from './asset/style.module.scss';
import {getPx, getClassName} from './util';

type SwitchProps = {
  /** Default boolean value of switch. */
  defaultValue: boolean,
  /** Callback function on change event. */
  onChange?: (value: boolean) => unknown,
  /** Width of switch in pixel. */
  width?: number,
  /** Height of switch in pixel. */
  height?: number,
  /** Disabled property of switch. */
  disabled?: boolean,
  /** Background color of switch in on state. */
  onBackgroundColor?: CSSProperties['backgroundColor'],
  /** Background color of switch in off state. */
  offBackgroundColor?: CSSProperties['backgroundColor'],
}

const DEFAULT_SWITCH_PROPS = ({
  width: 60,
  height: 26,
  disabled: false
} as const) satisfies Partial<SwitchProps>;

/**
 * react-simple-switch.
 */
const Switch: FC<SwitchProps> = memo(({
  defaultValue,
  onChange,
  width = DEFAULT_SWITCH_PROPS.width,
  height = DEFAULT_SWITCH_PROPS.height,
  disabled = DEFAULT_SWITCH_PROPS.disabled,
  onBackgroundColor,
  offBackgroundColor,
}) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isKeyboard, setIsKeyboard] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderSize = useMemo(() => {
    const containerSize = Math.min(width, height);
    return Math.min(containerSize - 8, Math.floor(containerSize * 0.87));
  }, [height, width]);

  const containerStyle = useMemo<CSSProperties>(() => {
    return {
      width: getPx(width),
      height: getPx(height),
      backgroundColor: isChecked ? onBackgroundColor : offBackgroundColor
    };
  }, [height, width, isChecked, onBackgroundColor, offBackgroundColor]);
  const sliderStyle = useMemo<CSSProperties>(() => {
    if (width < height) {
      // Vertical switch.
      const translateY = (height - width) / 2;
      return {width: getPx(sliderSize), height: getPx(sliderSize), transform: `translateY(${isChecked ? -translateY : translateY}px)`};
    }
    const translateX = (width - height) / 2;
    return {width: getPx(sliderSize), height: getPx(sliderSize), transform: `translateX(${isChecked ? translateX : -translateX}px)`};
  }, [width, height, isChecked, sliderSize]);

  const containerClassName = useMemo(() =>
    getClassName(Style.Container, {[Style.Checked]: isChecked,
      [Style.Outline]: isFocused && isKeyboard, [Style.Disabled]: disabled}),
  [isChecked, isFocused, isKeyboard, disabled]);
  const sliderClassName = useMemo(() =>
    getClassName(Style.Slider,  {[Style.Checked]: isChecked}),
  [isChecked]);

  const onChangeCallback = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onChange?.(checked);
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.style.transition = '0.2s';
    sliderRef.current.ontransitionend = () => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = '';
      }
    };
  }, [onChange]);

  const onFocus = useCallback<FocusEventHandler<HTMLInputElement>>(() => setIsFocused(true), []);
  const onFocusOut = useCallback(() => setIsFocused(false), []);
  const onMouseUp = useCallback(() => setIsKeyboard(false), []);
  const onKeyboardUp = useCallback(() => setIsKeyboard(true), []);

  return <label className={containerClassName} style={containerStyle} onMouseUp={onMouseUp}>
    <input type='checkbox' checked={isChecked} disabled={disabled}
      onChange={onChangeCallback} onFocus={onFocus} onBlur={onFocusOut} onKeyUp={onKeyboardUp}
    />
    <div className={sliderClassName} style={sliderStyle} ref={sliderRef} />
  </label>;
});
Switch.displayName = 'Switch';

export default Switch;
