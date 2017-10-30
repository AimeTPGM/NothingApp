import React from 'react'

const Header = (props) => {
	return (
		<div class="white-background">
			<div class="container">
				<div class="header-wrapper">
					<div class="header-img gradient-background"></div>
					<div class="header-menu">
						<div class="menu-item">
							<a href="#">Home</a>
						</div>
						<div class="menu-item">
							<a href="#">About</a>
						</div>
						<div class="menu-item">
							<a href="#">Blog</a>
						</div>
						<div class="menu-item">
							<a href="#">Contact Us</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header