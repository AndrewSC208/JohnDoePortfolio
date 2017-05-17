# ROADMAP:

A. Setup fullpage slide show.
	
	1. Header Section:
		Black and white image, add color gradiant
		Upload to cloudinary and serve internal file
	
	2. About Secton:
		Mobile: 
			Pic on top
			bootstrap tabs on bottom

		PC:
			Pic on left side
			paragraphs

	3. Product Offerings: Two HUGE boxes (left/right on large screens. Top/bottom mobile) with cool svg logos

		Front-end UI/UX Development
			- Static website (html, css)
			- Webapp (Angular, React, Inferno)
			- Mobile interface (NativScript, Ionic 2)

		Backend JavaScript Development
			- Node RESTful Api Development
			- MongoDB, Redis
			- Realtime Implementations Sockets, RabbitMQ

	4. Contact Me

		Standard contact form

		Name
		About
		Message
		email

		Location with some cool angular 2 google map


// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width

@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
