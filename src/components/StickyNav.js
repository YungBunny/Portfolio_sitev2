// import React from 'react';
// import scrollToComponent from 'react-scroll-to-component';
// import PortfolioPage from './PortfolioPage';

// export default class StickyNavigation extends React.Component {

//     constructor(props) {
//         super(props);
//         this.onMenuClick = this.onMenuClick.bind(this);
//         // this.PortfolioPage = this.PortfolioPage.bind(this);
//     }
//     // constructor(props) {
//     //     super(props);
//     //     toggleClass(this, 'on');
//     //     this.state = { isToggle: false }
//     //     console.log('toggle')
//     // }

//     // toggleMenu = () => {
//     //     this.setState({ isToggle: !this.state.isToggle })
//     // }

//     // hasClass
//     hasClass(elem, className) {
//         return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
//     }

//     // toggleClass
//     toggleClass(elem, className) {
//         var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
//         if (this.hasClass(elem, className)) {
//             while (newClass.indexOf(" " + className + " ") >= 0) {
//                 newClass = newClass.replace(" " + className + " ", " ");
//             }
//             elem.className = newClass.replace(/^\s+|\s+$/g, '');
//         } else {
//             elem.className += ' ' + className;
//         }
//     }

//     onMenuClick() {
//         var elem = window.document.getElementById('toggle');
//         this.toggleClass(elem, 'on');
//         return false;
//     }

//     render() {
//         // const { isToggle } = this.state;

//         return (
//             <div className='stickynav'>
//                 <a onClick={this.onMenuClick} id="toggle"><span></span></a>

//                 <div id="menu">
//                     <ul>
//                         <li><a>HOME</a></li>
//                         <li><a onClick={() => scrollToComponent(this.PortfolioPage, { offset: 0, align: 'top', duration: 1500, ease: 'inOutQuint' })} className='port'>PORTFOLIO</a></li>
//                         <li><a>ABOUT</a></li>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }

// }