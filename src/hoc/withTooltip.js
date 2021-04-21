import React, { useState } from 'react';

// function withTooltip(Component) {
//   return class WithTooltip extends React.Component {
//     state = {
//       showTooltip: false
//     }
//     handleMouseOver = () => {
//       this.setState({
//         showTooltip: !this.state.showTooltip
//       })
//     }
//     render() {

//       return (
//         <div onMouseOver={this.handleMouseOver}>
//           <Component showTooltip={this.state.showTooltip} {...this.props} />
//         </div>
//       )
//     }
//   }
// }

function withTooltip(Component) {
  return function WithTooltip(props) {
    const [toolTip, setToolTip] = useState(false);
    return <div onMouseOver={() => setToolTip(!toolTip)}> <Component showTooltip={toolTip} {...props} /> </div>
  }
}

export default withTooltip;
