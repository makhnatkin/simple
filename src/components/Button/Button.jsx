import { ReactComponent as BrandIcon } from "../../assets/brand.svg";

export const Button = ({ text = 'Нажми меня' }) => <div>
    <BrandIcon style={{
        width: '30px'
    }} />
    {text}
</div>