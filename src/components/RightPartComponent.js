import image1 from '../images/photo1.png';
import image2 from '../images/photo2.png';
import image3 from '../images/photo3.png';
import image4 from '../images/photo4.png';
export default function RightPartCompoment() {
    const rightPartArr = [
        {id: 1, img: image1, name: 'Lorenzo', link: '@lorenzoo', text: 'Amazing Telegram bot! Provides real-time crypto prices and news'},
        {id: 2, img: image2, name: 'Adalina', link: '@ada', text: 'Must-have bot for crypto traders. Accurate signals and analysis'},
        {id: 3, img: image3, name: 'Alexander', link: '@alex_x', text: 'Superb cryptocurrency bot! Quick updates and reliable data'},
        {id: 4, img: image4, name: 'Rushana', link: '@Hana', text: 'Efficient and user-friendly bot. Simplifies crypto trading tasks'},
    ]
    let rightList = rightPartArr.map((item) => (
        <div className={"right__item" + ' ' + 'item' + item.id} key={item.id}>
        <div className="right__part__top">
            <div className="right__item__top__left"><img src={item.img}></img></div>
            <div className="right__item__top__right">
                <h3 className="right__item__top__right__h3">{item.name}</h3>
                <p className="right__item__top__right__p">{item.link}</p>
            </div>
            </div>
            <div className="right__item__bottom">
                <p className="right__item__bottom__p">{item.text}</p>
            </div>
        </div>
    ))
    return(
        <div className="right__part">
            {rightList}
        </div>
    )
}