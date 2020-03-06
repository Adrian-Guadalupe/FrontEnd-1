import React from 'react';
import { Container, Card, CardHeader, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Student from '../../images/Student.png';
import Senior from '../../images/Senior.png';
import Admin from '../../images/Admin.png';

const Register = () => {
	return (
		<div>
			<NavBar style={{ maxWidth: '100%' }} />
			<h1 className='nonForm' style={{ paddingTop: '40px' }}>
				Choose a Role to Register
			</h1>
			<Container className='nestedNav'>
				<Card className='register-card' inverse>
					<div style={{ height: '100%', background: 'rgba(85, 85, 85, .1)' }}>
						<div className='register-img'>
							<CardImg width='100%' src={Student} alt='Student icon' />
						</div>
						<span className='register-text'>
							<h2>Student</h2>
							<CardText
								style={{
									textShadow: '1px 1px 3px navy',
								}}>
								In college? In high school? In school at all? Need help? You are a student. Register Here!
							</CardText>
							<div nav-link-wrapper style={{paddingTop: '13%'}}>
								<NavLink to='/register/student' activeClassName='active2' className='navLink'>
									Students
								</NavLink>
						 </div>
						</span>
					</div>
				</Card>

				<Card className='register-card' inverse>
					<div style={{ height: '100%', background: 'rgba(85, 85, 85, .1)' }}>
						<div className='register-img'>
							<CardImg width='100%' height='100%' src={Senior} alt='Volunteer icon' />
						</div>
						<span className='register-text'>
							<h2>Volunteer</h2>
							<CardText style={{ textShadow: '1px 1px 3px navy' }}>
								Want to help students from all over? Have extra time? Why not be a tutor volunteer? Sign up now!
							</CardText>
							<div nav-link-wrapper style={{paddingTop: '13%' }}>
								<NavLink to='/register/volunteer' className='navLink' activeClassName='active2'>
									Volunteers
								</NavLink>
							</div>
						</span>
					</div>
				</Card>

				<Card className='register-card' inverse>
					<div style={{ background: 'rgba(85, 85, 85, .1)' }}>
						<div className='register-img'>
							<CardImg width='100%' src={Admin} alt='Administrator icon' />
						</div>
						<span className='register-text'>
							<h2>Administrator</h2>
							<CardText
								style={{
									height: '65%',
									textShadow: '1px 1px 3px navy',
									margin: '2%',
								}}>
								Want to help students connect with tutors to help close the achievement gap by connecting students with
								qualified available volunteer tutors. This is your Role!
							</CardText>
							<div nav-link-wrapper style={{ paddingBottom: '1%' }}>
								<NavLink to='/register/admin-signup' className='navLink' activeClassName='active2'>
									Administrator
								</NavLink>
							</div>
						</span>
					</div>
				</Card>
			</Container>
		</div>
	);
};

export default Register;
