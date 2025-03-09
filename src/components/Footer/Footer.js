import {Grid} from "@mui/material"

function FooterComponent() {
        return (
            <>
                {/*Footer*/}
                <Grid container style={{ backgroundColor: "#d27719d9" }} mt={5} justifyContent={'center'}>
                    <Grid className="text-center p-4">
                        <Grid className="h4" mb={2}>Pizza 365</Grid>
                        <Grid>
                            <a href="#" className="btn btn-dark text-white"><i className="fas fa-arrow-alt-circle-up"></i> To the
                                top</a>
                        </Grid>
                        <Grid className="pt-3" mb={1}>
                            <i className="fab fa-facebook-square w3-hover-opacity"></i>&nbsp;
                            <i className="fab fa-instagram"></i>&nbsp;
                            <i className="fab fa-snapchat"></i>&nbsp;
                            <i className="fab fa-pinterest-p"></i>&nbsp;
                            <i className="fab fa-twitter"></i>&nbsp;
                            <i className="fab fa-linkedin-in"></i>
                        </Grid>
                        <Grid>Powered by DevCamp 2022</Grid>
                    </Grid>
                </Grid>
            </>
        )
}

export default FooterComponent
