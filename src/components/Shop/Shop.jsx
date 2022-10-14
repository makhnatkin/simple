export const Shop = ({ children, title = 'Заголовок' }) => <div className="shop">
    <h3>Название магазина</h3>
    <h1>{title}</h1>
    {children}
</div>;
