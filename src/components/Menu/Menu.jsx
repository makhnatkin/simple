import './Menu.css';

const initialList = [{
    href: '/company',
    title: 'О компании'
}, {
    href: '/catalogue',
    title: 'Каталог'
}, {
    href: '/about',
    title: 'О нас'
}];

export const Menu = ({
    list = initialList
}) => <ul className="menu">
    {list.map(({ href, title }) => <li key={title} className="menu__item">
            <a href={href}>
                {title}
            </a>
        </li>
    )}
</ul>
