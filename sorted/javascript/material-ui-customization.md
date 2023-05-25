# Material UI - Customization

* [Customizing Existed Component](#customizing-existed-component)
* [Override nested Component](#override-nested-component)
* [Create New Componenet Base On Base-UI component](#create-new-componenet-base-on-base-ui-component)

## Customizing Existed Component

use [`sx` prop](material-ui-feature.md#sx-prop)

```html
<Slider
defaultValue={30}
sx={{
  width: 300,
  color: 'succrss.main'
}}
/>
```

## Override nested Component

accordind to [this feature](material-ui-feature.md##classname-format-injected-to-dom)

write a CSS selector in [sx prop](material-ui-feature.md#sx-prop) to make a override

```html
<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
    '& .muiSlider-thumb': {
      borderradius: '1px',
    }
  }}
/>
```

## Create Reuseable Component

use [styled](material-ui-utility.md#styled)

```ts
import * as React from 'react'
import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
const SuccessSlider = styled(SLider)<SLiderProps>(({theme})) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    }
    '&.Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    }
  }
})
export default function StyledCustomization() {
  return <SuccessSlider defaultValue={30} />;
}
```

## Theme

## Create New Componenet Base On Base-UI component

1. use [React.forwardRef](react-api-forwardref.md) to create a custom component
2. use `slotProps` to customize inner component

```ts
import React from 'react';
import Button, { ButtonOwnerState, ButtonProps } from '@material-ui/base/Button';

const CustomButton = React.forwardRef(function CustomButton(
  props: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {

  const slotProps = {
    root: (state: ButtonOwnerState) => ({
      className: `
        rounded-full px-4 py-1 text-xl font-normal bg-ui
        ${state.disabled
        ? 'text-subText hover:cursor-not-allowed'
        : 'text-mainText'
      }`,
    }),
  }
  return (
    <Button
      {...props}
      slotProps={ slotProps }
      ref={ref}
    />
  )
});
```