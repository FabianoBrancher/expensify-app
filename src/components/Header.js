import React from 'react';

const Header = (props) => (
  <div> 
    <h1> {props.title} </h1>
    {
      props.subtitle && <h2> {props.subtitle} </h2>
    }
  </div>
);
 
  
  Header.defaultProps = {
    title: 'Indecision'
  };
  
  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1> {this.props.title} </h1>
  //         <h2> {this.props.subtitle} </h2>
  //       </div>
  //     )
  //   }
  // }

  export default Header;