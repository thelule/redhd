particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 76,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }, "color": {
            "value": "#dea985"
        }, "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#6b6b6b"
            }, "polygon": {
                "nb_sides": 5
            }, "image": {
                "src": "img/github.svg",
                "width": 100, "height": 100
            }
        }, "opacity": {
            "value": 0.8883989898574448,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 0.2500354216847388,
                "opacity_min": 0.03333805622463184,
                "sync": true
            }
        }, "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 2,
                "sync": false
            }
        }, "line_linked": {
            "enable": true,
            "distance": 126.66545278941076,
            "color": "#78634c",
            "opacity": 1,
            "width": 2
        }, "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 949.9908959205807,
                "rotateY": 949.9908959205807
            }
        }
    }, "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            }, "onclick": {
                "enable": true,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 649.3870908260046,
                "line_linked": {
                    "opacity": 0.13804303694681272
                }
            }, "bubble": {
                "distance": 144.3082424057788,
                "size": 20,
                "duration": 0.5,
                "opacity": 0.25654798649916233,
                "speed": 3
            }, "repulse": {
                "distance": 72.1541212028894,
                "duration": 0.4
            }, "push": {
                "particles_nb": 4
            }, "remove": {
                "particles_nb": 2
            }
        }
    }, "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats; stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    } requestAnimationFrame(update);
};
requestAnimationFrame(update);;