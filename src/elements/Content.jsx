import { FaAngleDown } from "react-icons/fa"; 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
export default function Content(props){
    const data = props.contentData;
    const img = data['content']['bgImg'];
    const controll_buttons = data['content']['controll_btn'];
    const collor_ex = data['content']['sneakers_data']['color_title'].map((item) => <p>{item}</p>);
    const ex_rev = data['content']['sneakers_data']['ex_rev'];
    // .....................................................
    // Тут дальше должены быть подключения к продукту 
    // но мне лень))
    // .....................................................
    return(
        <div className="content">
            {/* Buttons */}
            <div className="controll_buttons">
                <div className="back_btn">
                    <div className="button_icon">
                        <FaChevronLeft />
                    </div>
                    <p>{controll_buttons[0]}</p>
                </div>
                <div className="next_btn">
                    <p>{controll_buttons[1]}</p>
                    <div className="button_icon">
                        <FaChevronRight />
                    </div>
                </div>
            </div>
            <div className="wrapper">

                {/* Product Card */}
                {/* Данные в базе. Мне просто лень их подкоючать)) */}
                <div className="productCard">
                    <div className="priceData">

                        <h3 className='Price'><span>$</span>120</h3>

                        <div className="color">
                            <div className="colorTitle">
                                {collor_ex}
                            </div>
                            <img src={require('./img/color.png')} alt="color" />
                        </div>

                        <p className="ex">{ex_rev[0]}</p>
                        <p className='rev'>{ex_rev[1]}</p>

                    </div>

                    <img src={require('./img/sneakers-1.png')} alt="snekers 1" className='snekers' />
                    
                    <div className="deskriptionData">
                        <div className="desk_Title">
                            <h2>Adidas</h2>
                            <h3>Superstar</h3>
                        </div>
                        <p className='desk_sex'>Men's shoes</p>
                        <div className="size">
                            <p><span><FaAngleDown /></span>Size</p>
                        </div>

                        <a href="#" className="desk_button">Add to cart</a>
                    </div>
                </div>


            </div>


            <img className="contentBg" src={require(`./img/${img}`)} alt="" />
        </div>
    );
}