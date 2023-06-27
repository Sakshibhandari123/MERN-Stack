import React from 'react'

const certificate = () => {
    return (
        <div class="p-3 mb-2 bg-secondary text-white">
            <h3><b><u>SARASWATI VIDYA MANDIR SRINAGAR GARHWAL</u></b></h3>
            <div className="right-data mt-5" style={{ width: "100%" }}>
                <div className="vidya_img mt-5">
                    <img src="./vidya.png" style={{ maxWidth: 100 }} alt="" />
                    <h2>UTTARAKHAND</h2>
                    <h4>Batch 2022-23</h4>
                    <h1><u>Transfer Certificate</u></h1>
                    <form>
                    <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>FirstName</b></label>
                            <div class="col-sm-2">
                                <input type="password" class="form-control" id="inputPassword" placeholder=""></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>LastName</b></label>
                            <div class="col-sm-2">
                                <input type="password" class="form-control" id="inputPassword" placeholder=""></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>RollNumber</b></label>
                            <div class="col-sm-2">
                                <input type="password" class="form-control" id="inputPassword" placeholder=""></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>MobileNumber</b></label>
                            <div class="col-sm-2">
                                <input type="password" class="form-control" id="inputPassword" placeholder=""></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label"><b>City</b></label>
                            <div class="col-sm-2">
                                <input type="password" class="form-control" id="inputPassword" placeholder=""></input>
                            </div>
                        </div>
                    </form>
                    <p><b>12 or 13 year school system: </b> 12 year System</p>
                    <p>{"Generally the final year of High School."}</p>
                    <p><b>Last day school was attended in: </b> December 17, 2023 The Academic Year.</p>
                    <p><b>Current Grade: </b> ("if leaving during the academic year")</p>
                    <p>OR Currently in year 2022</p>
                    <p><b>Passed and Promoted to </b>("if completed the academic year.")</p>

                    <h5>Signature of Priciple: </h5>
                </div>



            </div>
        </div>

    )
}

export default certificate
