# @dlguswo333/react-simple-switch-monorepo
monorepo for @dlguswo333/react-simple-switch.


# Repository Structure
```text
monorepo
├── package
└── preview
```


## package
This is where the switch project lives.
In other words, npm publish happens here.


## preview
This is where the preview repository is located.
If you build this project and serve the outputs,
you can preview the switch component.

With npm workspace feature,
the preview project links to [package](#package) automatically.
