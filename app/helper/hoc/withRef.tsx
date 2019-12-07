import React from 'react'

// how to pass ref as props: https://stackoverflow.com/questions/37647061/how-do-i-access-refs-of-a-child-component-in-the-parent-component

export function withRef(WrappedComponent: any) {
   class WithRefComponent extends React.Component<any> {
    render() {
      const {forwardedRef, ...rest} = this.props
      return <WrappedComponent {...rest} ref={forwardedRef}/>
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithRefComponent {...props} forwardedRef={ref} />
  })
}
