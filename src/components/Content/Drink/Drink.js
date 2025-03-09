import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function DrinkComponent() {
    const dispatch = useDispatch();

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        fetch("http://42.115.221.44:8080/devcamp-pizza365/drinks")
            .then((response) => response.json())
            .then((data) => {
                setDrinkList(data);
            })
    }, [])

    const onBtnSelectDrinkClick = (event) => {
        dispatch({
            type: "DRINK_SELECT",
            payload: {
                drinkType: event.target.value
            }
        })
    }
    return (
        <>
            {/*Chọn đồ uống*/}
            <Grid container marginY={3}>
                <Grid container justifyContent={"center"}>
                    <h3>
                    <b className="p-2 border-bottom border-warning text-warning">
                        Chọn Đồ Uống
                    </b>
                    </h3>
                </Grid>
                <Grid container justifyContent={"center"} mt={1} id="drink">
                    <p className="text-secondary" style={{fontStyle: 'italic'}}>
                    Chọn đồ uống kết hợp với pizza mà bạn đã chọn!
                    </p>
                </Grid>
            </Grid>
            <Grid className="row">
                <select className="form-control w-100" id="select-drink" onChange={onBtnSelectDrinkClick}>
                    <option value="none">Tất cả loại nước uống</option>
                    {
                        drinkList.map((element, index) => {
                            return (
                                <option key={index} value={element.maNuocUong} > {element.tenNuocUong}</option>
                            )
                        })
                    }
                </select>
            </Grid>
        </>
    )
}
export default DrinkComponent;
