import React from 'react';

export default class StickyNavigation extends React.Component {

    // constructor(props) {
    //     super(props);
    //     toggleClass(this, 'on');
    //     this.state = { isToggle: false }
    //     console.log('toggle')
    // }

    // toggleMenu = () => {
    //     this.setState({ isToggle: !this.state.isToggle })
    // }

    // hasClass
    hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }

    // toggleClass
    toggleClass(elem, className) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
        if (this.hasClass(elem, className)) {
            while (newClass.indexOf(" " + className + " ") >= 0) {
                newClass = newClass.replace(" " + className + " ", " ");
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    onMenuClick() {
        var elem = window.document.getElementById('toggle');
        this.toggleClass(elem, 'on');
        return false;
    }

    render() {
        // const { isToggle } = this.state;

        return (
            <div>
                <a onClick={this.onMenuClick.bind(this)} id="toggle"><span></span></a>

                <div id="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}