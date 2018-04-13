import React, { Component } from 'react';

class ProfilePhotos extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row' style={{background: 'lightgrey', marginBottom: '1%', marginTop: '1%'}}>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
                        <div className='photoRow'>
                            <div className='row photoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                            </div>
                            <div className='row photoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                            </div>
                            <div className='row photoSubRow'>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 photoColumn'>
                                    <img id="" className="img-responsive" src={require("../../img/patProfile.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
                        <div className='row'>
                            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>
                                <div className='row' style={{marginTop: '25%'}}>
                                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>
                                   <span className='photoInfo'> info text </span>
                                </div></div>
                                <div className='row'>
                                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 '>
                                    <span className='photoInfo'> info text </span>
                                </div></div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
                                links to googleplay etc.. 
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
                                links to googleplay etc.. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePhotos;
