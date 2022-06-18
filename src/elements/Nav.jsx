import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
export default function Nav(props){
    const [dropMenuIndex, setIndex] = useState(0);
    let data = props.navData;
    let fierstMenu = data['nav']['FierstLinks'].map((item) => <li><a href="#">{item}</a></li>);
    let lastMenu = data['nav']['LastLinks'].map((item) => <li className="lastLinks"><a href="#">{item}</a></li>);
    let dropMenu = data['nav']['DropLink'].map((item) => <li><a href="#" onClick={()=>setIndex(data['nav']['DropLink'].indexOf(item))}>{item}</a></li>);
    const links1 = data['nav']['FierstLinks'].map( (item) => <li><a href="#">{item}</a></li>);
    const links2 = data['nav']['LastLinks'].map( (item) => <li><a href="#">{item}</a></li>);
    
    function openBurger(){
        document.querySelector('.line-1').classList.toggle('openLine-1');
        document.querySelector('.line-2').classList.toggle('openLine-2');
        document.querySelector('.line-3').classList.toggle('openLine-3');
        document.querySelector('.burgerMenu').classList.toggle('burgerMenuOpen');
    }
    
    return(
        <div className="nav">
            <div className="wrapper">
                <div className="navMenu">
                    <ul className="fierst_menu_block">
                        <a href="#"><div className="logo"></div></a>
                        {fierstMenu}
                    </ul>
                    <ul className="last_menu_block">
                        {lastMenu}
                        <li className="cart"><a href="#">{data['nav']['CartLable']} <span>[{data['nav']['Cart'].length}]</span></a></li>
                        <li className="Droplinks" onClick={() => document.querySelector('.DropMenu').classList.toggle('DropMenuOpen')}>
                            <a href="#">{data['nav']['DropLink'][dropMenuIndex]}<FaAngleDown className="downIcon" /></a>
                            <ul className="DropMenu">
                                {dropMenu}
                            </ul>
                        </li>

                        <div className="BurgerLines" onClick={openBurger}>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>

                    </ul>
                    
                </div>
            </div>

            <ul className="burgerMenu">
                {links1}
                {links2}
            </ul>
       
        </div>
    );
}