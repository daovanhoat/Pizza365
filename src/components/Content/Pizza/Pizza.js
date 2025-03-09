import { Grid, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Pizza() {
    const dispatch = useDispatch();

    const [colorButtonOceanMania, setColorButtonOceanMania] = useState("orange")
    const [colorButtonHawaiian, setColorButtonHawaiian] = useState("orange")
    const [colorButtonCheesy, setColorButtonCheesy] = useState("orange")

    const onSelectTypeOceanMania = () => {
        setColorButtonOceanMania("#4caf50");
        setColorButtonHawaiian("orange");
        setColorButtonCheesy("orange");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "OCEAN MANIA"
            }
        })
    }

    const onSelectTypeHawaiian = () => {
        setColorButtonOceanMania("orange");
        setColorButtonHawaiian("#4caf50");
        setColorButtonCheesy("orange");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "HAWAIIAN"
            }
        })
    }

    const onSelectTypeCheesy = () => {
        setColorButtonOceanMania("orange");
        setColorButtonHawaiian("orange");
        setColorButtonCheesy("#4caf50");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "CHEESY CHICKEN BACON"
            }
        })
    }
    return (
        <>
            {/*Chọn loại pizza*/}
            <Grid container marginY={5} id="pizza">
            <Grid container justifyContent={"center"}>
                <h3>
                  <b className="p-2 border-bottom border-warning text-warning">
                      Loại Pizza
                  </b>
                </h3>
              </Grid>
              <Grid container justifyContent={"center"} mt={1} >
                <p className="text-secondary" style={{fontStyle: 'italic'}}>
                  Chọn loại pizza yêu thích của bạn!
                </p>
              </Grid>
            </Grid>
               
            <Grid className="row">
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../assets/images/seafood.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 className="text-center mb-2" id="pizza-name-oceanmania">OCEAN MANIA</h5>
                            <p className="text-secondary text-center" style={{fontStyle: 'italic'}} id="info-oceanmania">PIZZA HẢI SẢN SỐT MAYONAISE</p>
                            <p className="card-text" id="thanhphan-oceanmania">Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực,
                                Thanh Cua,
                                Hành Tây.</p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonOceanMania}} className="btn w-100" id="select-oceanmania" onClick={onSelectTypeOceanMania}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../assets/images/hawaiian.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 className="text-center mb-2" id="pizza-name-hawaiian">HAWAIIAN</h5>
                            <p className="text-secondary text-center" style={{fontStyle: 'italic'}} id="info-hawaiian">PIZZA DĂM BÔNG DỨA KIỂU HAWAII</p>
                            <p className="card-text" id="thanhphan-hawaiian">Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông,
                                Thơm.
                            </p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonHawaiian}} className="btn w-100" id="select-hawaiian"  onClick={onSelectTypeHawaiian}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../assets/images/bacon.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 className="text-center mb-2" id="pizza-name-cheesy">CHEESY CHICKEN BACON</h5>
                            <p className="text-secondary text-center" style={{fontStyle: 'italic'}} id="info-cheesy">PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓ</p>
                            <p className="card-text" id="thanhphan-cheesy">Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai
                                Mozzarella,
                                Cà Chua.</p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonCheesy}} className="btn w-100" id="select-cheesy" onClick={onSelectTypeCheesy}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default Pizza;
