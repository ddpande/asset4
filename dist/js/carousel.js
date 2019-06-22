$(document).ready(function () {
	$("#curo").owlCarousel({
		margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
	});
	$("#curo2").owlCarousel({
		margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 4
          },
          600: {
            items: 4
          },
          1000: {
            items: 4
          }
        }
	});
	$("#curo3").owlCarousel({
		margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 4
          },
          600: {
            items: 4
          },
          1000: {
            items: 4
          }
        }
	});
});

// $('#myModal').modal('show');