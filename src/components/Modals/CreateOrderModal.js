import { Modal, Box, Typography } from "@mui/material";
import { Col, Row } from "reactstrap"

function CreateOrderModal() {

    return (
        <>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="container jumbotron" backgroundColor="orange" mt={5}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Thông tin khách hàng!</strong>
                    </Typography>
                    <Row justifyContent='center'>
                        <Col sm="9">
                            <Row>
                                <Col sm="3">
                                    <label>Họ và tên</label>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" id="hoten-kh" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <label>Số điện thoại</label>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" id="sdt-kh" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <label>Địa chỉ</label>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" id="diachi-kh" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <label>Lời nhắn</label>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" id="loinhan-kh" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <label>mã giảm giá</label>
                                </Col>
                                <Col sm="6">
                                    <input className="form-control" id="magiamgia-kh" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Box>
            </Modal>
        </>
    )
}

export default CreateOrderModal
