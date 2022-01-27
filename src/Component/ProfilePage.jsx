import React, { useEffect, useState } from 'react';
import profilepic from '../../src/logo192.png';
import axios from 'axios';
const ProfilePage = () => {
    var p = "";
    const [detail, setDetail] = useState([]);
    const [username,setuserName]=useState('');
    const [email,setuserEmail]=useState('');
    const [name,setuserNames]=useState('');
    const [phone,setuserPhone]=useState('');
    const [newusername,setnewuserName]=useState('');
    const [newemail,setnewuserEmail]=useState();
    const [newname,setnewuserNames]=useState('');
    const [newphone,setnewuserPhone]=useState('');
    useEffect(() => {
        axios.get('https://randomuser.me/api/').then((res) => {
            // console.log(res.data.results);
            setDetail([res.data.results]);
            setnewuserEmail(detail[0][0].email)
            setnewuserNames(`${detail[0][0].name.title} ${detail[0][0].name.first} ${detail[0][0].name.last}`)
            setnewuserName(detail[0][0].login.username)
            setnewuserPhone(detail[0][0].phone)
        })
    }, [])
    // console.log(detail);
    if (detail.length != 0) {
        p = (detail[0][0].dob.date.split('T'));
        // console.log(p);
        // setnewuserName(`${detail[0][0].name.title} ${detail[0][0].name.first} ${detail[0][0].name.last}`)
        // setnewuserEmail(detail[0][0].email)
    }
    const updateProfile = (e) => {
        e.preventDefault();
        setnewuserEmail(email);
        setnewuserPhone(phone);
        setnewuserName(username);
        setnewuserNames(name);
        // setuserEmail('');
        // setuserName('');
        // setuserNames('');
        // setuserPhone('');
    }
    const usernamechange=(e)=>{
        e.preventDefault();
      setuserName(e.target.value);
    }
    const namechange=(e)=>{
        e.preventDefault();
        setuserNames(e.target.value);
    }
    const changeemail=(e)=>{
        e.preventDefault();
        setuserEmail(e.target.value);
    }
    const changephone=(e)=>{
        e.preventDefault();
        setuserPhone(e.target.value);
    }
    // if(detail!=undefined)
    // {
    //     setnewuserName(`${detail[0][0].name.title} ${detail[0][0].name.first} ${detail[0][0].name.last}`);
    // }
    return (
        <>
            <div class="container emp-profile">
                <form>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                {detail.length != 0 ? <h1><img src={`${detail[0][0].picture.large}`} alt="" /></h1> : ''}
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                {detail.length != 0 ? <h6>{`${detail[0][0].name.title} ${detail[0][0].name.first} ${detail[0][0].name.last}`}</h6> : ''}
                                <p class="proile-rating">DOB :<span className='mx-2'>{p[0]}</span></p>
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Edit Profile
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Profile</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">UserName</label>
                                                    <input type="name" onChange={usernamechange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Name</label>
                                                    <input type="name" onChange={namechange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                                                       
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" onChange={changeemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Phone</label>
                                                    <input type="number" onChange={changephone} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number"/>
                                                </div>
                                                <button type="submit" class="btn btn-primary" onClick={updateProfile}>Submit</button>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>LOCATION</p>
                                <label>Street Number</label>{detail.length != 0 ? <span className='mx-3'>{detail[0][0].location.street.number}</span> : ''}<br></br>
                                <label>Street Name</label>{detail.length != 0 ? <span className='mx-3'>{detail[0][0].location.street.name}</span> : ''}<br></br>
                                <label>City</label>{detail.length != 0 ? <span className='mx-3'>{detail[0][0].location.city}</span> : ''}<br></br>
                                <label>State</label>{detail.length != 0 ? <span className='mx-3'>{detail[0][0].location.state}</span> : ''}<br></br>
                                <label>Country</label>{detail.length != 0 ? <span className='mx-3'>{detail[0][0].location.country}</span> : ''}<br></br>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>UserName</label>
                                        </div>
                                        <div class="col-md-6">
                                            {detail.length != 0 ? <p>{`${newusername}`}</p> : ''}
                                        </div>
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            {detail.length != 0 ? <p>{`${newname}`}</p> : ''}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Gender</label>
                                        </div>
                                        <div class="col-md-6">
                                            {detail.length != 0 ? <p>{`${detail[0][0].gender}`}</p> : ''}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            {detail.length != 0 ? <p>{`${newemail}`}</p> : ''}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            {detail.length != 0 ? <p>{`${newphone}`}</p> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>);
};

export default ProfilePage;
