export const Shop = ({ children, title = 'Заголовок' }) => <div className="shop">
    Название магазина: <h1>{title}</h1>
    {children}
</div>;
