import { Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
const IntroduceContent = () => {
  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={4}>
          <Typography variant="h3" style={{ padding: "29px", marginBottom: 0 }}>
            <Typography style={{ color: "deeppink", fontStyle: "italic" }}>
              Truly Italian!
            </Typography>
            Pizza 365
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../assets/images/1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../assets/images/2.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../assets/images/3.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../../assets/images/4.jpg")}
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </Grid>
      <Grid container justifyContent={"center"} marginY={5}>
        <h3>
          <b className="p-2 border-bottom border-warning text-warning">
            Pizza 365 đem lại cho bạn
          </b>
        </h3>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={3}
          className="border border-warning p-4 w-25"
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          <h3 className="text-center">Đa dạng</h3>
          <p>
            Đa dạng về các món ăn theo phong cách của Ý được tạo ra từ các đầu
            bếp hàng đầu trên thế giới, với các tuỳ chọn phù hợp với yêu cầu của
            khách hàng.
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          className="border border-warning p-4 w-25"
          style={{ backgroundColor: "yellow" }}
        >
          <h3 className="text-center">Chất lượng</h3>
          <p>
            Nguyên liệu được chọn lọc khắc khe, đảm bảo mang đến cho quý khách
            sản phẩm chất lượng, vệ sinh và an toàn cho sức khỏe.
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          className="border border-warning p-4 w-25"
          style={{ backgroundColor: "lightsalmon" }}
        >
          <h3 className="text-center">Hương vị</h3>
          <p>
            Đảm bảo hương vị thơm ngon, đặc biệt và lạ mà bạn chỉ có thể trải
            nghiệm từ Pizza 365.
          </p>
        </Grid>
        <Grid
          item
          xs={3}
          className="border border-warning p-4 w-25"
          style={{ backgroundColor: "orange" }}
        >
          <h3 className="text-center">Dịch vụ</h3>
          <p>
            Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ ship tận nhà cho
            quý khách có nhu cầu đặt hàng qua đơn trực tuyến.
          </p>
        </Grid>
      </Grid>
      <br id="combo"/>
    </>
  );
};

export default IntroduceContent;
