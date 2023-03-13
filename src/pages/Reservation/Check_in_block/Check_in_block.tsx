import './Check_in_block.scss'
import Card from 'react-bootstrap/Card'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import itemsArrey, { getProductsObject, Items } from 'Utils/itemsArrey'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Items
    }
}
const Check_in_block = ({
    productsInCart,
    productsObject = getProductsObject(itemsArrey),
}: Props) => {
    return (
        <div className="Check_in_block">
            <div className="container_check_in_block">
                <div>
                    {Object.keys(productsInCart).map((articleId) => (
                        <div key={articleId}>
                            <Card className="cards_in_favorites">
                                {productsObject[parseInt(articleId)].id}
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col">
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Label"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Label"
                            />
                        </FormGroup>
                    </div>
                    <div className="col">Column</div>
                </div>
            </div>
        </div>
    )
}
export default Check_in_block
