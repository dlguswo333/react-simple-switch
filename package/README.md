# react-simple-switch
react-simple-switch is a simple, lightweight react component you can toggle on and off.

![react-simple-switches](docs/switches.png)

## Preview
You can preview the component at github pages.

link: https://dlguswo333.github.io/react-simple-switch/


## Features
The switch has the following features.
- You can toggle the switch on and off, and you can attach a callback function when the value changes.
- You can set its default value.
- You can set its width and height in **pixel** unit.
- You can set whether the switch needs to be disabled (unable to toggle the switch).

Also, in development manner, it has the following features.
- Lightweight. Total unpacked size weighs about **15KB**.
- It has built-in types (typescript) support.
- It has jsDoc comments to ease your development.
- It supports the following Module Systems: **ESM** and **CJS**.


## Notes
Theses are a few things that you need to note when you use the switch.
- Since it is built with the [new JSX Transform][new JSX Transform],
    Make sure you use React 17 or later.


## Props (Properties)
Property | Type | Default | Description
:---:|:---:|:---:|:---
`defaultValue` | `boolean` | **Required** | Default boolean value of switch.
`onChange` | `(value: boolean) => unknown` | `undefined` | Callback function on change event. Return value has no effect.
`width` | `number` | `60` | Width of switch in pixel.
`height` | `number` | `26` | Height of switch in pixel.
`disabled` | `boolean` | `false` | Disabled property of switch. `true` will mark the switch disabled and the value of the switch cannot be changed while it is set to `true`.



[new JSX Transform]: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
