import React from 'react'

//import Styles below
import './Box.css'

function Box({name, role, isAdmin}) {
    return (
        <div className="box_wrapper">
            <div className="image_container">
                <img className='img_profile' style={{height:100,width:100,borderRadius:100}} src={require('../Assets/img.jpg')} />
            </div>
            <div className="details_container">
                <p className="primary_text">{name}</p>
                <p className="sec_text">{role}</p>
                <div className="flex_center">
                    <p className='admin_wrapper'>Admin</p>
                </div>
            </div>
            <div className="icon_container">
                <div className="icon_wrapper" style={{borderRight:'1.5px solid #EDEFF1'}}>
                    <img style={{marginRight:10}} />
                    <p className='primary_text'>Email</p>
                </div>
                <div className="icon_wrapper">
                    <img style={{marginRight:10}}/>
                    <p className='primary_text'>Call</p>
                </div>
            </div>
        </div>
    )
}

export default Box