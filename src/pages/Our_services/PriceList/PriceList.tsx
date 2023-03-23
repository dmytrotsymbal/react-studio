import './PriceList.scss'
import PriceListContent from 'components/PriceListContent/PriceListContent'

type Props = {}

type priceListItems = {
    id: number
    title: string
    paragraph: string
    price: number
}
const PriceList = (props: Props) => {
    return (
        <div className="Price_list">
            <h2 className="title_in_Price_list">Our services</h2>
            <PriceListContent />
        </div>
    )
}
export default PriceList
