import playImg from '../images/google-play-svgrepo-com (1) 1.svg';
import appleImg from '../images/app-store-svgrepo-com 1.svg';
export default function LeftPartCompoment() {
    const numbers = [
        {id: 1, number: '20k+', text: 'subscribers'},
        {id: 2, number: '19,5K+', text: 'successful cases'},
        {id: 3, number: '4.8/5+', text: 'rating'},
    ]
    let leftList = numbers.map((item) => (
        <li key={item.id}>
           <p className="list__number">{item.number}</p>
           <p className="list__text">{item.text}</p>
        </li>
    ))
    return(
        <div className="left__part">
            <div className="left__part__top">
                <h1 className="left__part__top__h1">Do you want to Learn more About cryptocurrencies quickly and easily ?</h1>
                <p className="left__part__top__p">Subscribe to our channel to learn more</p>
            </div>
            <div className="left__part__middle">
                <ul className="right__list__ul">
                    {leftList}
                </ul>
                <div className="button__gradient">
                Join Whatsapp
                </div>
            </div>
            <div className="left__part__bottom">
                <div className="left__part__bottom__play__button">
                    <div className="left__part__bottom__play__button__left">
                        <img className='left__part__bottom__play__button__left__img' src={playImg}></img>
                    </div>
                    <div className="left__part__bottom__play__button__right">
                    <p className='left__part__bottom__play__button__right__p'>get it on </p>
                    <h3 className='left__part__bottom__play__button__right__h3'>Google play</h3>
                    </div>
                </div>
                <div className="left__part__bottom__apple__button">
                    <div className="left__part__bottom__apple__button__left">
                    <img className='left__part__bottom__apple__button__left__img' src={appleImg}></img>
                    </div>
                    <div className="left__part__bottom__apple__button__right">
                    <p className='left__part__bottom__apple__button__right__p'>Available on the</p>
                    <h3 className='left__part__bottom__apple__button__right__h3'>App Store</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}