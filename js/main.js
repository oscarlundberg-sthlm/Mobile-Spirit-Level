const circleWrapper = document.querySelector('.circle-wrapper');
const circleMoving = document.querySelector('.circle-moving');
const sensitivity = 10;

const orientationFunc = e => {
    // console.log(e.gamma);
    // if gamma increases, move circle to the left
    // console.log(e.beta);
    // if beta increases, move circle up
    circleMoving.style.setProperty('--dynX', e.gamma * sensitivity + 'px');
    circleMoving.style.setProperty('--dynY', e.beta * sensitivity + 'px');
}

if (window.DeviceOrientationEvent) {
    // request permission for iOS devices
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', orientationFunc);
                }
            })
            .catch(console.error);
        } else {
            // handle regular non iOS 13+ devices
            window.addEventListener('deviceorientation', orientationFunc);
        }
}